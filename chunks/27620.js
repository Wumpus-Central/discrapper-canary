"use strict";
n.d(t, { hs: () => _, Ay: () => f });
let i = {
    nitro_unsubbed: 100,
    checkpoint_completed: 10,
    quest_completed: 25,
    ad_impression_quest_bar_opt_in: 10,
    ad_impression_quest_bar_opt_out: 100,
    bounty_session_completed: 100,
    bounty_immediate_dismissal: 5,
    bounty_abandoned: 25,
};
var r = n(636537),
    s = n(228366),
    a = n(274184),
    o = n(38405),
    l = n(668131),
    u = n(797632),
    c = n(880652),
    d = n(652215);
async function _(e, t) {
    if (!(a.Ay.shouldAllowSurveyAction() && i[e] >= 100 * Math.random())) return;
    let n = { action_type: e };
    null != t && (n.metadata = t);
    try {
        let e = await r.Bo.post({ url: d.Rsh.EMBEDDED_SURVEY_ACTION, body: n, rejectWithError: !0 });
        s.h.dispatch({ type: "SURVEY_FETCHED", survey: e?.body?.survey, isActionTriggered: !0 });
    } catch {}
}
let f = {
    fetchSurveyDetails: async function e(e) {
        try {
            let t = (await r.Bo.get({ url: d.Rsh.EMBEDDED_SURVEY(e), rejectWithError: !0 })).body;
            return s.h.dispatch({ type: "QUALTRICS_SURVEY_FETCH_SUCCESS", surveyId: e, surveyDetails: t }), t;
        } catch (e) {
            return o.A.captureException(e), null;
        }
    },
    submitSurveyResponse: async function e(e, t) {
        let n = l.i.getState().getDisplayedQuestions(e),
            i = (function (e, t, n) {
                let i = u.A.getSurvey(e);
                if (null == i) return null;
                let r = {};
                for (let [e, n] of Object.entries(t)) {
                    let t = i.Questions[e];
                    if (null != t)
                        if (t.QuestionType === c.SQ.MULTIPLE_CHOICE && t.Selector === c.BO.MULTIPLE_ANSWER)
                            (r[e] = n.split(",")), null != t.ChoiceOrder && (r[`${e}_DO`] = t.ChoiceOrder);
                        else if (t.QuestionType === c.SQ.MULTIPLE_CHOICE && t.Selector === c.BO.SINGLE_ANSWER) {
                            if (n.includes(":TEXT:")) {
                                let t = n.split(":TEXT:", 2)[0],
                                    i = n.split(":TEXT:", 2)[1];
                                (r[e] = parseInt(t)), (r[`${e}_${t}_TEXT`] = i);
                            } else r[e] = parseInt(n);
                            null != t.ChoiceOrder && (r[`${e}_DO`] = t.ChoiceOrder);
                        } else t.QuestionType === c.SQ.TEXT_ENTRY ? (r[`${e}_TEXT`] = n) : (r[e] = n);
                }
                let s = Object.keys(t);
                return (
                    n.forEach((e) => {
                        if (!s.includes(e)) {
                            let t = i.Questions[e];
                            null != t &&
                                null != t.ChoiceOrder &&
                                t.QuestionType === c.SQ.MULTIPLE_CHOICE &&
                                (t.Selector === c.BO.MULTIPLE_ANSWER && (r[e] = []), (r[`${e}_DO`] = t.ChoiceOrder));
                        }
                    }),
                    r
                );
            })(e, t, n ?? []);
        if (null == i) return { responseId: "null" };
        try {
            return {
                responseId: (
                    await r.Bo.post({
                        url: d.Rsh.EMBEDDED_SURVEY_RESPONSE(e),
                        body: { values_json: JSON.stringify(i) },
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
