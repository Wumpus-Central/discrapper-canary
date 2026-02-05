"use strict";
n.d(t, { A: () => C, u: () => m });
var r = n(735438),
    i = n(506774),
    a = n(439372),
    s = n(450510),
    o = n(891540),
    l = n(868974),
    u = n(253932),
    c = n(383501),
    d = n(881520),
    _ = n(368854),
    f = n(670455);
let p = 200,
    h = { chance: 0.2, cooldown: 864e5 },
    m = {
        [f.MW.VOICE]: {
            ...h,
            group: f.h0.AV,
            hotspot: s._2.VOICE_CALL_FEEDBACK,
            storageKey: "lastVoiceFeedback",
            feedbackType: f.MW.VOICE,
            eligibilityChecks: [y],
        },
        [f.MW.STREAM]: {
            ...h,
            group: f.h0.AV,
            hotspot: s._2.REPORT_PROBLEM_POST_STREAM,
            storageKey: "lastStreamFeedback",
            feedbackType: f.MW.STREAM,
        },
        [f.MW.VIDEO_BACKGROUND]: {
            ...h,
            group: f.h0.AV,
            hotspot: s._2.VIDEO_BACKGROUND_FEEDBACK,
            storageKey: "lastVideoBackgroundFeedback",
            feedbackType: f.MW.VIDEO_BACKGROUND,
        },
        [f.MW.ACTIVITY]: {
            cooldown: 0,
            chance: 0.5,
            group: f.h0.AV,
            hotspot: s._2.POST_ACTIVITY_FEEDBACK,
            storageKey: "lastActivityFeedback",
            feedbackType: f.MW.ACTIVITY,
        },
        [f.MW.IN_APP_REPORTS]: {
            cooldown: 1728e5,
            chance: 0.5,
            group: f.h0.SAFETY,
            hotspot: s._2.IN_APP_REPORTS_FEEDBACK,
            storageKey: "inAppReportsFeedback",
            feedbackType: f.MW.IN_APP_REPORTS,
        },
        [f.MW.BLOCK_USER]: {
            cooldown: 0,
            chance: 1,
            group: f.h0.SAFETY,
            hotspot: s._2.BLOCK_USER_FEEDBACK,
            storageKey: "blockUser",
            feedbackType: f.MW.BLOCK_USER,
        },
        [f.MW.VOICE_FILTER]: {
            ...h,
            group: f.h0.AV,
            hotspot: s._2.VOICE_FILTER_FEEDBACK,
            storageKey: "lastVoiceFilterFeedback",
            feedbackType: f.MW.VOICE_FILTER,
            eligibilityChecks: [y],
        },
        [f.MW.SEARCH_RESULTS]: {
            ...h,
            group: f.h0.SEARCH,
            hotspot: s._2.SEARCH_RESULTS_FEEDBACK,
            storageKey: "searchResultsFeedback",
            feedbackType: f.MW.SEARCH_RESULTS,
            eligibilityChecks: [S],
        },
        [f.MW.AGE_VERIFICATION]: {
            cooldown: 0,
            chance: 1,
            group: f.h0.SAFETY,
            hotspot: s._2.AGE_VERIFICATION_FEEDBACK,
            storageKey: "ageVerificationFeedback",
            feedbackType: f.MW.AGE_VERIFICATION,
        },
    };
function g(e) {
    if (__OVERLAY__) return !1;
    let { overrideEligibility: t } = (0, _.P)({ location: "FeedbackManager" });
    if (t) return !0;
    let n = d.A.getFeedbackConfig(e) ?? m[e],
        r = [A, E, T],
        i = n.eligibilityChecks ?? [];
    return r.every((e) => e(n)) && i.every((e) => e(n));
}
function E(e) {
    let t = u.Yt.getSetting()[e.feedbackType]?.optOutExpiryTime,
        n = null != t && !Number.isNaN(t) && Date.now() < t,
        r = !o.A.hasHotspot(e.hotspot);
    return (
        r &&
            !n &&
            u.Yt.updateSetting((t) => ({ ...t, [e.feedbackType]: { ...t[e.feedbackType], optOutExpiryTime: f.fs } })),
        !n && !r
    );
}
function A(e) {
    return Math.random() < e.chance;
}
function I(e, t) {
    let n,
        a = u.Yt.getSetting()[t.feedbackType]?.lastImpressionTime;
    return (
        (null == a || Number.isNaN(a)) &&
            null != t.storageKey &&
            (null == (n = i.w.get(t.storageKey) ?? void 0) ||
                Number.isNaN(n) ||
                u.Yt.updateSetting((e) => ({
                    ...e,
                    [t.feedbackType]: { ...e[t.feedbackType], lastImpressionTime: n },
                }))),
        ((0, r.max)([a, n]) ?? 0) + e.cooldown < Date.now()
    );
}
function T(e) {
    for (let t of Object.values(m).filter((t) => {
        let { group: n } = t;
        return n === e.group;
    }))
        if (!I(e, t)) return !1;
    return !0;
}
function y(e) {
    return !c.A.getWasEverRtcConnected() || c.A.getWasEverMultiParticipant();
}
function S(e) {
    return !!(0, l.s)({ location: "FeedbackManager" });
}
function v(e) {
    u.Yt.updateSetting((t) => ({ ...t, [e]: { ...t[e], lastImpressionTime: Date.now() } }));
}
class C extends a.A {
    feedbackTypeToShow = null;
    possiblyShowFeedbackModal(e, t, n) {
        !g(e) || (null != this.feedbackTypeToShow && f.uf[this.feedbackTypeToShow] < f.uf[e])
            ? n?.()
            : ((this.feedbackTypeToShow = e), this.showFeedbackModalDebounced(t, n));
    }
    showFeedbackModalDebounced = (0, r.debounce)((e, t) => {
        null != this.feedbackTypeToShow ? (v(this.feedbackTypeToShow), (this.feedbackTypeToShow = null), e()) : t?.();
    }, p);
}
