n.d(t, {
    Ox: () => _,
    ZP: () => m,
}),
    n(388685),
    n(35282),
    n(49124);
var r = n(905637),
    i = n(544891),
    a = n(570140),
    o = n(558724),
    s = n(960048),
    l = n(401302),
    c = n(841110),
    u = n(284881),
    d = n(981631);
function f(e, t, n) {
    let r = c.Z.getSurvey(e);
    if (null == r) return null;
    let i = {};
    for (let [e, n] of Object.entries(t)) {
        let t = r.Questions[e];
        if (null != t)
            if (t.QuestionType === u.S.MULTIPLE_CHOICE && t.Selector === u.E_.MULTIPLE_ANSWER)
                (i[e] = n.split(",")), null != t.ChoiceOrder && (i["".concat(e, "_DO")] = t.ChoiceOrder);
            else if (t.QuestionType === u.S.MULTIPLE_CHOICE && t.Selector === u.E_.SINGLE_ANSWER) {
                if (n.includes(":TEXT:")) {
                    let t = n.split(":TEXT:", 2)[0],
                        r = n.split(":TEXT:", 2)[1];
                    (i[e] = parseInt(t)), (i["".concat(e, "_").concat(t, "_TEXT")] = r);
                } else i[e] = parseInt(n);
                null != t.ChoiceOrder && (i["".concat(e, "_DO")] = t.ChoiceOrder);
            } else t.QuestionType === u.S.TEXT_ENTRY ? (i["".concat(e, "_TEXT")] = n) : (i[e] = n);
    }
    let a = Object.keys(t);
    return (
        n.forEach((e) => {
            if (!a.includes(e)) {
                let t = r.Questions[e];
                null != t &&
                    null != t.ChoiceOrder &&
                    t.QuestionType === u.S.MULTIPLE_CHOICE &&
                    (t.Selector === u.E_.MULTIPLE_ANSWER && (i[e] = []), (i["".concat(e, "_DO")] = t.ChoiceOrder));
            }
        }),
        i
    );
}
function p(e) {
    return !!o.ZP.shouldAllowSurveyAction() && (!!e.startsWith("quest_completed_") || r.J[e] >= 100 * Math.random());
}
async function _(e, t) {
    if (!p(e)) return;
    let n = { action_type: e };
    null != t && (n.metadata = t);
    try {
        var r;
        let e = await i.tn.post({
            url: d.ANM.EMBEDDED_SURVEY_ACTION,
            body: n,
            rejectWithError: !0,
        });
        a.Z.dispatch({
            type: "SURVEY_FETCHED",
            survey: null == e || null == (r = e.body) ? void 0 : r.survey,
            isActionTriggered: !0,
        });
    } catch (e) {}
}
let m = {
    fetchSurveyDetails: async function (e) {
        try {
            let t = (
                await i.tn.get({
                    url: d.ANM.EMBEDDED_SURVEY(e),
                    rejectWithError: !0,
                })
            ).body;
            return (
                a.Z.dispatch({
                    type: "QUALTRICS_SURVEY_FETCH_SUCCESS",
                    surveyId: e,
                    surveyDetails: t,
                }),
                t
            );
        } catch (e) {
            return s.Z.captureException(e), null;
        }
    },
    submitSurveyResponse: async function (e, t) {
        let n = l.H.getState().getDisplayedQuestions(e),
            r = f(e, t, null != n ? n : []);
        if (null == r) return { responseId: "null" };
        try {
            return {
                responseId: (
                    await i.tn.post({
                        url: d.ANM.EMBEDDED_SURVEY_RESPONSE(e),
                        body: { values_json: JSON.stringify(r) },
                        rejectWithError: !0,
                    })
                ).body.responseId,
            };
        } catch (e) {
            return s.Z.captureException(e), { responseId: "null" };
        }
    },
    fireSurveyAction: _,
};
