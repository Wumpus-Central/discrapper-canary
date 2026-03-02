"use strict";
n.d(t, { A: () => v, u: () => h });
var r = n(735438),
    i = n(506774),
    s = n(439372),
    a = n(450510),
    o = n(891540),
    l = n(868974),
    u = n(253932),
    c = n(383501),
    d = n(881520),
    _ = n(670455);
let f = 200,
    p = { chance: 0.2, cooldown: 864e5 },
    h = {
        [_.MW.VOICE]: {
            ...p,
            group: _.h0.AV,
            hotspot: a._2.VOICE_CALL_FEEDBACK,
            storageKey: "lastVoiceFeedback",
            feedbackType: _.MW.VOICE,
            eligibilityChecks: [T],
        },
        [_.MW.STREAM]: {
            ...p,
            group: _.h0.AV,
            hotspot: a._2.REPORT_PROBLEM_POST_STREAM,
            storageKey: "lastStreamFeedback",
            feedbackType: _.MW.STREAM,
        },
        [_.MW.VIDEO_BACKGROUND]: {
            ...p,
            group: _.h0.AV,
            hotspot: a._2.VIDEO_BACKGROUND_FEEDBACK,
            storageKey: "lastVideoBackgroundFeedback",
            feedbackType: _.MW.VIDEO_BACKGROUND,
        },
        [_.MW.ACTIVITY]: {
            cooldown: 0,
            chance: 0.5,
            group: _.h0.AV,
            hotspot: a._2.POST_ACTIVITY_FEEDBACK,
            storageKey: "lastActivityFeedback",
            feedbackType: _.MW.ACTIVITY,
        },
        [_.MW.IN_APP_REPORTS]: {
            cooldown: 1728e5,
            chance: 0.5,
            group: _.h0.SAFETY,
            hotspot: a._2.IN_APP_REPORTS_FEEDBACK,
            storageKey: "inAppReportsFeedback",
            feedbackType: _.MW.IN_APP_REPORTS,
        },
        [_.MW.BLOCK_USER]: {
            cooldown: 0,
            chance: 1,
            group: _.h0.SAFETY,
            hotspot: a._2.BLOCK_USER_FEEDBACK,
            storageKey: "blockUser",
            feedbackType: _.MW.BLOCK_USER,
        },
        [_.MW.VOICE_FILTER]: {
            ...p,
            group: _.h0.AV,
            hotspot: a._2.VOICE_FILTER_FEEDBACK,
            storageKey: "lastVoiceFilterFeedback",
            feedbackType: _.MW.VOICE_FILTER,
            eligibilityChecks: [T],
        },
        [_.MW.SEARCH_RESULTS]: {
            ...p,
            group: _.h0.SEARCH,
            hotspot: a._2.SEARCH_RESULTS_FEEDBACK,
            storageKey: "searchResultsFeedback",
            feedbackType: _.MW.SEARCH_RESULTS,
            eligibilityChecks: [S],
        },
        [_.MW.AGE_VERIFICATION]: {
            cooldown: 0,
            chance: 1,
            group: _.h0.SAFETY,
            hotspot: a._2.AGE_VERIFICATION_FEEDBACK,
            storageKey: "ageVerificationFeedback",
            feedbackType: _.MW.AGE_VERIFICATION,
        },
    };
function m(e) {
    if (__OVERLAY__) return !1;
    let t = d.A.getFeedbackConfig(e) ?? h[e],
        n = [g, E, I],
        r = t.eligibilityChecks ?? [];
    return n.every((e) => e(t)) && r.every((e) => e(t));
}
function E(e) {
    let t = u.Yt.getSetting()[e.feedbackType]?.optOutExpiryTime,
        n = null != t && !Number.isNaN(t) && Date.now() < t,
        r = !o.A.hasHotspot(e.hotspot);
    return (
        r &&
            !n &&
            u.Yt.updateSetting((t) => ({ ...t, [e.feedbackType]: { ...t[e.feedbackType], optOutExpiryTime: _.fs } })),
        !n && !r
    );
}
function g(e) {
    return Math.random() < e.chance;
}
function A(e, t) {
    let n,
        s = u.Yt.getSetting()[t.feedbackType]?.lastImpressionTime;
    return (
        (null == s || Number.isNaN(s)) &&
            null != t.storageKey &&
            (null == (n = i.w.get(t.storageKey) ?? void 0) ||
                Number.isNaN(n) ||
                u.Yt.updateSetting((e) => ({
                    ...e,
                    [t.feedbackType]: { ...e[t.feedbackType], lastImpressionTime: n },
                }))),
        ((0, r.max)([s, n]) ?? 0) + e.cooldown < Date.now()
    );
}
function I(e) {
    for (let t of Object.values(h).filter((t) => {
        let { group: n } = t;
        return n === e.group;
    }))
        if (!A(e, t)) return !1;
    return !0;
}
function T(e) {
    return !c.A.getWasEverRtcConnected() || c.A.getWasEverMultiParticipant();
}
function S(e) {
    return !!(0, l.s)({ location: "FeedbackManager" });
}
function y(e) {
    u.Yt.updateSetting((t) => ({ ...t, [e]: { ...t[e], lastImpressionTime: Date.now() } }));
}
class v extends s.A {
    feedbackTypeToShow = null;
    possiblyShowFeedbackModal(e, t, n) {
        !m(e) || (null != this.feedbackTypeToShow && _.uf[this.feedbackTypeToShow] < _.uf[e])
            ? n?.()
            : ((this.feedbackTypeToShow = e), this.showFeedbackModalDebounced(t, n));
    }
    showFeedbackModalDebounced = (0, r.debounce)((e, t) => {
        null != this.feedbackTypeToShow ? (y(this.feedbackTypeToShow), (this.feedbackTypeToShow = null), e()) : t?.();
    }, f);
}
