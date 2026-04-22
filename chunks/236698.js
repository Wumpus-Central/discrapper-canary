"use strict";
n.d(t, { Ay: () => f, hs: () => _ });
var r = n(34045),
    i = n(562465),
    s = n(73153),
    a = n(274184),
    o = n(728458),
    l = n(668131),
    u = n(797632),
    d = n(880652),
    c = n(652215);
async function _(e, t) {
    if (!(a.Ay.shouldAllowSurveyAction() && r.M[e] >= 100 * Math.random())) return;
    let n = { action_type: e };
    null != t && (n.metadata = t);
    try {
        let e = await i.Bo.post({ url: c.Rsh.EMBEDDED_SURVEY_ACTION, body: n, rejectWithError: !0 });
        s.h.dispatch({ type: "SURVEY_FETCHED", survey: e?.body?.survey, isActionTriggered: !0 });
    } catch {}
}
let f = {
    fetchSurveyDetails: async function e(e) {
        try {
            let t = (await i.Bo.get({ url: c.Rsh.EMBEDDED_SURVEY(e), rejectWithError: !0 })).body;
            return s.h.dispatch({ type: "QUALTRICS_SURVEY_FETCH_SUCCESS", surveyId: e, surveyDetails: t }), t;
        } catch (e) {
            return o.A.captureException(e), null;
        }
    },
    submitSurveyResponse: async function e(e, t) {
        let n = l.i.getState().getDisplayedQuestions(e),
            r = (function (e, t, n) {
                let r = u.A.getSurvey(e);
                if (null == r) return null;
                let i = {};
                for (let [e, n] of Object.entries(t)) {
                    let t = r.Questions[e];
                    if (null != t)
                        if (t.QuestionType === d.SQ.MULTIPLE_CHOICE && t.Selector === d.BO.MULTIPLE_ANSWER)
                            (i[e] = n.split(",")), null != t.ChoiceOrder && (i[`${e}_DO`] = t.ChoiceOrder);
                        else if (t.QuestionType === d.SQ.MULTIPLE_CHOICE && t.Selector === d.BO.SINGLE_ANSWER) {
                            if (n.includes(":TEXT:")) {
                                let t = n.split(":TEXT:", 2)[0],
                                    r = n.split(":TEXT:", 2)[1];
                                (i[e] = parseInt(t)), (i[`${e}_${t}_TEXT`] = r);
                            } else i[e] = parseInt(n);
                            null != t.ChoiceOrder && (i[`${e}_DO`] = t.ChoiceOrder);
                        } else t.QuestionType === d.SQ.TEXT_ENTRY ? (i[`${e}_TEXT`] = n) : (i[e] = n);
                }
                let s = Object.keys(t);
                return (
                    n.forEach((e) => {
                        if (!s.includes(e)) {
                            let t = r.Questions[e];
                            null != t &&
                                null != t.ChoiceOrder &&
                                t.QuestionType === d.SQ.MULTIPLE_CHOICE &&
                                (t.Selector === d.BO.MULTIPLE_ANSWER && (i[e] = []), (i[`${e}_DO`] = t.ChoiceOrder));
                        }
                    }),
                    i
                );
            })(e, t, n ?? []);
        if (null == r) return { responseId: "null" };
        try {
            return {
                responseId: (
                    await i.Bo.post({
                        url: c.Rsh.EMBEDDED_SURVEY_RESPONSE(e),
                        body: { values_json: JSON.stringify(r) },
                        rejectWithError: !0,
                    })
                ).body.responseId,
            };
        } catch (e) {
            return o.A.captureException(e), { responseId: "null" };
        }
    },
    fireSurveyAction: _,
};
