"use strict";
n.d(t, { Ay: () => h, hs: () => p });
var r = n(34045),
    i = n(562465),
    a = n(73153),
    s = n(274184),
    o = n(728458),
    l = n(668131),
    u = n(797632),
    c = n(880652),
    d = n(652215);
function _(e, t, n) {
    let r = u.A.getSurvey(e);
    if (null == r) return null;
    let i = {};
    for (let [e, n] of Object.entries(t)) {
        let t = r.Questions[e];
        if (null != t)
            if (t.QuestionType === c.SQ.MULTIPLE_CHOICE && t.Selector === c.BO.MULTIPLE_ANSWER)
                (i[e] = n.split(",")), null != t.ChoiceOrder && (i[`${e}_DO`] = t.ChoiceOrder);
            else if (t.QuestionType === c.SQ.MULTIPLE_CHOICE && t.Selector === c.BO.SINGLE_ANSWER) {
                if (n.includes(":TEXT:")) {
                    let t = n.split(":TEXT:", 2)[0],
                        r = n.split(":TEXT:", 2)[1];
                    (i[e] = parseInt(t)), (i[`${e}_${t}_TEXT`] = r);
                } else i[e] = parseInt(n);
                null != t.ChoiceOrder && (i[`${e}_DO`] = t.ChoiceOrder);
            } else t.QuestionType === c.SQ.TEXT_ENTRY ? (i[`${e}_TEXT`] = n) : (i[e] = n);
    }
    let a = Object.keys(t);
    return (
        n.forEach((e) => {
            if (!a.includes(e)) {
                let t = r.Questions[e];
                null != t &&
                    null != t.ChoiceOrder &&
                    t.QuestionType === c.SQ.MULTIPLE_CHOICE &&
                    (t.Selector === c.BO.MULTIPLE_ANSWER && (i[e] = []), (i[`${e}_DO`] = t.ChoiceOrder));
            }
        }),
        i
    );
}
function f(e) {
    return !!s.Ay.shouldAllowSurveyAction() && r.M[e] >= 100 * Math.random();
}
async function p(e, t) {
    if (!f(e)) return;
    let n = { action_type: e };
    null != t && (n.metadata = t);
    try {
        let e = await i.Bo.post({ url: d.Rsh.EMBEDDED_SURVEY_ACTION, body: n, rejectWithError: !0 });
        a.h.dispatch({ type: "SURVEY_FETCHED", survey: e?.body?.survey, isActionTriggered: !0 });
    } catch {}
}
let h = {
    fetchSurveyDetails: async function (e) {
        try {
            let t = (await i.Bo.get({ url: d.Rsh.EMBEDDED_SURVEY(e), rejectWithError: !0 })).body;
            return a.h.dispatch({ type: "QUALTRICS_SURVEY_FETCH_SUCCESS", surveyId: e, surveyDetails: t }), t;
        } catch (e) {
            return o.A.captureException(e), null;
        }
    },
    submitSurveyResponse: async function (e, t) {
        let n = l.i.getState().getDisplayedQuestions(e),
            r = _(e, t, n ?? []);
        if (null == r) return { responseId: "null" };
        try {
            return {
                responseId: (
                    await i.Bo.post({
                        url: d.Rsh.EMBEDDED_SURVEY_RESPONSE(e),
                        body: { values_json: JSON.stringify(r) },
                        rejectWithError: !0,
                    })
                ).body.responseId,
            };
        } catch (e) {
            return o.A.captureException(e), { responseId: "null" };
        }
    },
    fireSurveyAction: p,
};
