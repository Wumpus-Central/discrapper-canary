n.d(t, { A: () => p, u: () => A });
var i = n(435558),
    r = n(506774),
    a = n(439372),
    s = n(450510),
    l = n(891540),
    o = n(868974),
    d = n(885386),
    c = n(763827),
    u = n(881520),
    _ = n(670455);
let E = { chance: 0.2, cooldown: 864e5 },
    A = {
        [_.MW.VOICE]: {
            ...E,
            group: _.h0.AV,
            hotspot: s._2.VOICE_CALL_FEEDBACK,
            storageKey: "lastVoiceFeedback",
            feedbackType: _.MW.VOICE,
            eligibilityChecks: [
                function (e) {
                    return !c.A.getWasEverRtcConnected() || c.A.getWasEverMultiParticipant();
                },
            ],
        },
        [_.MW.STREAM]: {
            ...E,
            group: _.h0.AV,
            hotspot: s._2.REPORT_PROBLEM_POST_STREAM,
            storageKey: "lastStreamFeedback",
            feedbackType: _.MW.STREAM,
        },
        [_.MW.VIDEO_BACKGROUND]: {
            ...E,
            group: _.h0.AV,
            hotspot: s._2.VIDEO_BACKGROUND_FEEDBACK,
            storageKey: "lastVideoBackgroundFeedback",
            feedbackType: _.MW.VIDEO_BACKGROUND,
        },
        [_.MW.ACTIVITY]: {
            cooldown: 0,
            chance: 0.5,
            group: _.h0.AV,
            hotspot: s._2.POST_ACTIVITY_FEEDBACK,
            storageKey: "lastActivityFeedback",
            feedbackType: _.MW.ACTIVITY,
        },
        [_.MW.IN_APP_REPORTS]: {
            cooldown: 1728e5,
            chance: 0.5,
            group: _.h0.SAFETY,
            hotspot: s._2.IN_APP_REPORTS_FEEDBACK,
            storageKey: "inAppReportsFeedback",
            feedbackType: _.MW.IN_APP_REPORTS,
        },
        [_.MW.SEARCH_RESULTS]: {
            ...E,
            group: _.h0.SEARCH,
            hotspot: s._2.SEARCH_RESULTS_FEEDBACK,
            storageKey: "searchResultsFeedback",
            feedbackType: _.MW.SEARCH_RESULTS,
            eligibilityChecks: [
                function (e) {
                    return !!(0, o.s)({ location: "FeedbackManager" });
                },
            ],
        },
        [_.MW.VIBEGRATIONS]: {
            cooldown: 36e5,
            chance: 1,
            group: _.h0.BUILDER,
            hotspot: s._2.VIBEGRATIONS_FEEDBACK,
            storageKey: "lastVibegrationsFeedback",
            feedbackType: _.MW.VIBEGRATIONS,
        },
    };
function h(e) {
    let t = d.Yt.getSetting()[e.feedbackType]?.optOutExpiryTime,
        n = null != t && !Number.isNaN(t) && Date.now() < t,
        i = !l.A.hasHotspot(e.hotspot);
    return (
        i &&
            !n &&
            d.Yt.updateSetting((t) => ({ ...t, [e.feedbackType]: { ...t[e.feedbackType], optOutExpiryTime: _.fs } })),
        !n && !i
    );
}
function I(e) {
    return Math.random() < e.chance;
}
function f(e) {
    for (let t of Object.values(A).filter((t) => {
        let { group: n } = t;
        return n === e.group;
    }))
        if (
            !(function (e, t) {
                let n,
                    a = d.Yt.getSetting()[t.feedbackType]?.lastImpressionTime;
                return (
                    (null == a || Number.isNaN(a)) &&
                        null != t.storageKey &&
                        (null == (n = r.w.get(t.storageKey) ?? void 0) ||
                            Number.isNaN(n) ||
                            d.Yt.updateSetting((e) => ({
                                ...e,
                                [t.feedbackType]: { ...e[t.feedbackType], lastImpressionTime: n },
                            }))),
                    ((0, i.max)([a, n]) ?? 0) + e.cooldown < Date.now()
                );
            })(e, t)
        )
            return !1;
    return !0;
}
class p extends a.A {
    feedbackTypeToShow = null;
    possiblyShowFeedbackModal(e, t, n) {
        !(function (e) {
            if (__OVERLAY__) return !1;
            let t = u.A.getFeedbackConfig(e) ?? A[e],
                n = t.eligibilityChecks ?? [];
            return [I, h, f].every((e) => e(t)) && n.every((e) => e(t));
        })(e) ||
        (null != this.feedbackTypeToShow && _.uf[this.feedbackTypeToShow] < _.uf[e])
            ? n?.()
            : ((this.feedbackTypeToShow = e), this.showFeedbackModalDebounced(t, n));
    }
    showFeedbackModalDebounced = (0, i.debounce)((e, t) => {
        if (null != this.feedbackTypeToShow) {
            var n;
            (n = this.feedbackTypeToShow),
                d.Yt.updateSetting((e) => ({ ...e, [n]: { ...e[n], lastImpressionTime: Date.now() } })),
                (this.feedbackTypeToShow = null),
                e();
        } else t?.();
    }, 200);
}
