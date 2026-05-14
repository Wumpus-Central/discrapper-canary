"use strict";
n.d(t, { A: () => g, u: () => h });
var i = n(735438),
    r = n(506774),
    s = n(439372),
    a = n(450510),
    o = n(891540),
    l = n(868974),
    u = n(885386),
    c = n(763827),
    d = n(881520),
    _ = n(670455);
let f = { chance: 0.2, cooldown: 864e5 },
    h = {
        [_.MW.VOICE]: {
            ...f,
            group: _.h0.AV,
            hotspot: a._2.VOICE_CALL_FEEDBACK,
            storageKey: "lastVoiceFeedback",
            feedbackType: _.MW.VOICE,
            eligibilityChecks: [
                function (e) {
                    return !c.A.getWasEverRtcConnected() || c.A.getWasEverMultiParticipant();
                },
            ],
        },
        [_.MW.STREAM]: {
            ...f,
            group: _.h0.AV,
            hotspot: a._2.REPORT_PROBLEM_POST_STREAM,
            storageKey: "lastStreamFeedback",
            feedbackType: _.MW.STREAM,
        },
        [_.MW.VIDEO_BACKGROUND]: {
            ...f,
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
        [_.MW.SEARCH_RESULTS]: {
            ...f,
            group: _.h0.SEARCH,
            hotspot: a._2.SEARCH_RESULTS_FEEDBACK,
            storageKey: "searchResultsFeedback",
            feedbackType: _.MW.SEARCH_RESULTS,
            eligibilityChecks: [
                function (e) {
                    return !!(0, l.s)({ location: "FeedbackManager" });
                },
            ],
        },
    };
function p(e) {
    let t = u.Yt.getSetting()[e.feedbackType]?.optOutExpiryTime,
        n = null != t && !Number.isNaN(t) && Date.now() < t,
        i = !o.A.hasHotspot(e.hotspot);
    return (
        i &&
            !n &&
            u.Yt.updateSetting((t) => ({ ...t, [e.feedbackType]: { ...t[e.feedbackType], optOutExpiryTime: _.fs } })),
        !n && !i
    );
}
function E(e) {
    return Math.random() < e.chance;
}
function m(e) {
    for (let t of Object.values(h).filter((t) => {
        let { group: n } = t;
        return n === e.group;
    }))
        if (
            !(function (e, t) {
                let n,
                    s = u.Yt.getSetting()[t.feedbackType]?.lastImpressionTime;
                return (
                    (null == s || Number.isNaN(s)) &&
                        null != t.storageKey &&
                        (null == (n = r.w.get(t.storageKey) ?? void 0) ||
                            Number.isNaN(n) ||
                            u.Yt.updateSetting((e) => ({
                                ...e,
                                [t.feedbackType]: { ...e[t.feedbackType], lastImpressionTime: n },
                            }))),
                    ((0, i.max)([s, n]) ?? 0) + e.cooldown < Date.now()
                );
            })(e, t)
        )
            return !1;
    return !0;
}
class g extends s.A {
    feedbackTypeToShow = null;
    possiblyShowFeedbackModal(e, t, n) {
        !(function (e) {
            if (__OVERLAY__) return !1;
            let t = d.A.getFeedbackConfig(e) ?? h[e],
                n = t.eligibilityChecks ?? [];
            return [E, p, m].every((e) => e(t)) && n.every((e) => e(t));
        })(e) ||
        (null != this.feedbackTypeToShow && _.uf[this.feedbackTypeToShow] < _.uf[e])
            ? n?.()
            : ((this.feedbackTypeToShow = e), this.showFeedbackModalDebounced(t, n));
    }
    showFeedbackModalDebounced = (0, i.debounce)((e, t) => {
        if (null != this.feedbackTypeToShow) {
            var n;
            (n = this.feedbackTypeToShow),
                u.Yt.updateSetting((e) => ({ ...e, [n]: { ...e[n], lastImpressionTime: Date.now() } })),
                (this.feedbackTypeToShow = null),
                e();
        } else t?.();
    }, 200);
}
