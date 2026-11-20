n.d(t, { Ay: () => f, p6: () => _, hs: () => A, Ci: () => E });
let i = {
    nitro_unsubbed: 100,
    checkpoint_completed: 10,
    quest_completed: 25,
    quest_dismissed: 25,
    ad_impression_quest_bar_opt_in: 10,
    ad_impression_quest_bar_opt_out: 100,
    bounty_session_completed: 100,
    bounty_immediate_dismissal: 5,
    bounty_abandoned: 25,
    hangout_window_set: 100,
    populated_clip_gallery_closed: 25,
    clips_opt_out: 100,
    topical_navigation_multiple_impressions: 100,
    guild_room_joined: 100,
    youtube_3pp_modal_dismissed: 100,
    guild_created: 25,
    friend_request_sent: 1,
    friend_request_accepted: 1,
    user_blocked: 1,
    report_submitted: 2,
    group_dm_created: 2,
};
var r = n(620632),
    a = n(73153),
    s = n(274184),
    l = n(856383),
    o = n(668131),
    d = n(797632),
    c = n(880652),
    u = n(652215);
async function _(e) {
    try {
        let t = (await r.Bo.get({ url: u.Rsh.EMBEDDED_SURVEY(e), rejectWithError: !0 })).body;
        return (a.h.dispatch({ type: "QUALTRICS_SURVEY_FETCH_SUCCESS", surveyId: e, surveyDetails: t }), t);
    } catch (e) {
        return (l.A.captureException(e), null);
    }
}
async function E(e, t) {
    let n = o.i.getState().getDisplayedQuestions(e),
        i = (function (e, t, n) {
            let i = d.A.getSurvey(e);
            if (null == i) return null;
            let r = {};
            for (let [e, n] of Object.entries(t)) {
                let t = i.Questions[e];
                if (null != t)
                    if (t.QuestionType === c.SQ.MULTIPLE_CHOICE && t.Selector === c.BO.MULTIPLE_ANSWER)
                        ((r[e] = n.split(",")), null != t.ChoiceOrder && (r[`${e}_DO`] = t.ChoiceOrder));
                    else if (t.QuestionType === c.SQ.MULTIPLE_CHOICE && t.Selector === c.BO.SINGLE_ANSWER) {
                        if (n.includes(":TEXT:")) {
                            let t = n.split(":TEXT:", 2)[0],
                                i = n.split(":TEXT:", 2)[1];
                            ((r[e] = parseInt(t)), (r[`${e}_${t}_TEXT`] = i));
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
    if (null == i) return { responseId: "null", retryable: !0 };
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
    } catch (t) {
        l.A.captureException(t);
        let e = null != t && "object" == typeof t && "status" in t ? t.status : null;
        return { responseId: "null", retryable: 400 === e || 429 === e };
    }
}
async function A(e, t) {
    let n = s.Ay.getActionTriggeredSurveyOverride() ?? void 0;
    if (!(s.Ay.shouldAllowSurveyAction() && i[e] >= 100 * Math.random()) && null == n) return;
    let l = { action_type: e };
    null != t && (l.metadata = t);
    try {
        let e = await r.Bo.post({
            url: u.Rsh.EMBEDDED_SURVEY_ACTION,
            query: { force_survey_id: n, supports_native: !0 },
            body: l,
            rejectWithError: !0,
        });
        a.h.dispatch({ type: "SURVEY_FETCHED", survey: e?.body?.survey, isActionTriggered: !0 });
    } catch {}
}
let f = { fetchSurveyDetails: _, submitSurveyResponse: E, fireSurveyAction: A };
