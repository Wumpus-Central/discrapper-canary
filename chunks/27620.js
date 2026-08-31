"use strict";
n.d(t, { hs: () => _, Ay: () => E });
let i = {
    nitro_unsubbed: 100,
    checkpoint_completed: 10,
    quest_completed: 25,
    ad_impression_quest_bar_opt_in: 10,
    ad_impression_quest_bar_opt_out: 100,
    bounty_session_completed: 100,
    bounty_immediate_dismissal: 5,
    bounty_abandoned: 25,
    hangout_window_set: 100,
    populated_clip_gallery_closed: 100,
    topical_navigation_multiple_impressions: 100,
    guild_room_joined: 100,
};
var r = n(636537),
    a = n(228366),
    s = n(274184),
    l = n(38405),
    o = n(668131),
    d = n(797632),
    c = n(880652),
    u = n(652215);
async function _(e, t) {
    if (!(s.Ay.shouldAllowSurveyAction() && i[e] >= 100 * Math.random())) return;
    let n = { action_type: e };
    null != t && (n.metadata = t);
    try {
        let e = await r.Bo.post({
            url: u.Rsh.EMBEDDED_SURVEY_ACTION,
            query: { force_survey_id: s.Ay.getActionTriggeredSurveyOverride() ?? void 0 },
            body: n,
            rejectWithError: !0,
        });
        a.h.dispatch({ type: "SURVEY_FETCHED", survey: e?.body?.survey, isActionTriggered: !0 });
    } catch {}
}
let E = {
    fetchSurveyDetails: async function e(e) {
        try {
            let t = (await r.Bo.get({ url: u.Rsh.EMBEDDED_SURVEY(e), rejectWithError: !0 })).body;
            return a.h.dispatch({ type: "QUALTRICS_SURVEY_FETCH_SUCCESS", surveyId: e, surveyDetails: t }), t;
        } catch (e) {
            return l.A.captureException(e), null;
        }
    },
    submitSurveyResponse: async function e(e, t) {
        let n = o.i.getState().getDisplayedQuestions(e),
            i = (function (e, t, n) {
                let i = d.A.getSurvey(e);
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
                let a = Object.keys(t);
                return (
                    n.forEach((e) => {
                        if (!a.includes(e)) {
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
                        url: u.Rsh.EMBEDDED_SURVEY_RESPONSE(e),
                        body: { values_json: JSON.stringify(i) },
                        rejectWithError: !0,
                    })
                ).body.responseId,
            };
        } catch (e) {
            return l.A.captureException(e), { responseId: "null" };
        }
    },
    fireSurveyAction: _,
};
