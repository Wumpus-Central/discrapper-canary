n.d(t, {
    Ox: () => d,
    ZP: () => f,
}),
    n(388685),
    n(35282),
    n(49124);
var r = n(544891),
    i = n(570140),
    a = n(960048),
    o = n(401302),
    s = n(841110),
    l = n(284881),
    c = n(981631);
function u(e, t, n) {
    let r = s.Z.getSurvey(e);
    if (null == r) return null;
    let i = {};
    for (let [e, n] of Object.entries(t)) {
        let t = r.Questions[e];
        if (null != t)
            if (t.QuestionType === l.S.MULTIPLE_CHOICE && t.Selector === l.E_.MULTIPLE_ANSWER)
                (i[e] = n.split(",")), null != t.ChoiceOrder && (i["".concat(e, "_DO")] = t.ChoiceOrder);
            else if (t.QuestionType === l.S.MULTIPLE_CHOICE && t.Selector === l.E_.SINGLE_ANSWER) {
                if (n.includes(":TEXT:")) {
                    let t = n.split(":TEXT:", 2)[0],
                        r = n.split(":TEXT:", 2)[1];
                    (i[e] = parseInt(t)), (i["".concat(e, "_").concat(t, "_TEXT")] = r);
                } else i[e] = parseInt(n);
                null != t.ChoiceOrder && (i["".concat(e, "_DO")] = t.ChoiceOrder);
            } else t.QuestionType === l.S.TEXT_ENTRY ? (i["".concat(e, "_TEXT")] = n) : (i[e] = n);
    }
    let a = Object.keys(t);
    return (
        n.forEach((e) => {
            if (!a.includes(e)) {
                let t = r.Questions[e];
                null != t &&
                    null != t.ChoiceOrder &&
                    t.QuestionType === l.S.MULTIPLE_CHOICE &&
                    (t.Selector === l.E_.MULTIPLE_ANSWER && (i[e] = []), (i["".concat(e, "_DO")] = t.ChoiceOrder));
            }
        }),
        i
    );
}
async function d(e) {
    if (e.startsWith("quest_completed_"))
        try {
            var t;
            let n = await r.tn.post({
                url: c.ANM.EMBEDDED_SURVEY_ACTION,
                body: { action_type: e },
                rejectWithError: !0,
            });
            i.Z.dispatch({
                type: "SURVEY_FETCHED",
                survey: null == n || null == (t = n.body) ? void 0 : t.survey,
            });
        } catch (e) {}
}
let f = {
    fetchSurveyDetails: async function (e) {
        try {
            let t = (
                await r.tn.get({
                    url: c.ANM.EMBEDDED_SURVEY(e),
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
        let n = o.H.getState().getDisplayedQuestions(e),
            i = u(e, t, null != n ? n : []);
        if (null == i) return { responseId: "null" };
        try {
            return {
                responseId: (
                    await r.tn.post({
                        url: c.ANM.EMBEDDED_SURVEY_RESPONSE(e),
                        body: { values_json: JSON.stringify(i) },
                        rejectWithError: !0,
                    })
                ).body.responseId,
            };
        } catch (e) {
            return a.Z.captureException(e), { responseId: "null" };
        }
    },
    fireSurveyAction: d,
};
