n.d(t, {
    Ox: () => p,
    ZP: () => _,
}),
    n(388685),
    n(35282),
    n(49124);
var r = n(544891),
    i = n(570140),
    a = n(960048),
    o = n(947245),
    s = n(401302),
    l = n(841110),
    c = n(284881),
    u = n(981631);
function d(e, t, n) {
    let r = l.Z.getSurvey(e);
    if (null == r) return null;
    let i = {};
    for (let [e, n] of Object.entries(t)) {
        let t = r.Questions[e];
        if (null != t)
            if (t.QuestionType === c.S.MULTIPLE_CHOICE && t.Selector === c.E_.MULTIPLE_ANSWER)
                (i[e] = n.split(",")), null != t.ChoiceOrder && (i["".concat(e, "_DO")] = t.ChoiceOrder);
            else if (t.QuestionType === c.S.MULTIPLE_CHOICE && t.Selector === c.E_.SINGLE_ANSWER) {
                if (n.includes(":TEXT:")) {
                    let t = n.split(":TEXT:", 2)[0],
                        r = n.split(":TEXT:", 2)[1];
                    (i[e] = parseInt(t)), (i["".concat(e, "_").concat(t, "_TEXT")] = r);
                } else i[e] = parseInt(n);
                null != t.ChoiceOrder && (i["".concat(e, "_DO")] = t.ChoiceOrder);
            } else t.QuestionType === c.S.TEXT_ENTRY ? (i["".concat(e, "_TEXT")] = n) : (i[e] = n);
    }
    let a = Object.keys(t);
    return (
        n.forEach((e) => {
            if (!a.includes(e)) {
                let t = r.Questions[e];
                null != t &&
                    null != t.ChoiceOrder &&
                    t.QuestionType === c.S.MULTIPLE_CHOICE &&
                    (t.Selector === c.E_.MULTIPLE_ANSWER && (i[e] = []), (i["".concat(e, "_DO")] = t.ChoiceOrder));
            }
        }),
        i
    );
}
function f(e) {
    return (
        e.startsWith("quest_completed_") ||
        o.E.getConfig({ location: "qualtrics action creator" }).enableNitroUnsubSurvey
    );
}
async function p(e) {
    if (f(e))
        try {
            var t;
            let n = await r.tn.post({
                url: u.ANM.EMBEDDED_SURVEY_ACTION,
                body: { action_type: e },
                rejectWithError: !0,
            });
            i.Z.dispatch({
                type: "SURVEY_FETCHED",
                survey: null == n || null == (t = n.body) ? void 0 : t.survey,
            });
        } catch (e) {}
}
let _ = {
    fetchSurveyDetails: async function (e) {
        try {
            let t = (
                await r.tn.get({
                    url: u.ANM.EMBEDDED_SURVEY(e),
                    rejectWithError: !0,
                })
            ).body;
            return (
                i.Z.dispatch({
                    type: "QUALTRICS_SURVEY_FETCH_SUCCESS",
                    surveyId: e,
                    surveyDetails: t,
                }),
                t
            );
        } catch (e) {
            return a.Z.captureException(e), null;
        }
    },
    submitSurveyResponse: async function (e, t) {
        let n = s.H.getState().getDisplayedQuestions(e),
            i = d(e, t, null != n ? n : []);
        if (null == i) return { responseId: "null" };
        try {
            return {
                responseId: (
                    await r.tn.post({
                        url: u.ANM.EMBEDDED_SURVEY_RESPONSE(e),
                        body: { values_json: JSON.stringify(i) },
                        rejectWithError: !0,
                    })
                ).body.responseId,
            };
        } catch (e) {
            return a.Z.captureException(e), { responseId: "null" };
        }
    },
    fireSurveyAction: p,
};
