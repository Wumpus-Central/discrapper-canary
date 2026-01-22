n.d(t, {
    A: () => R,
    u: () => y,
}),
    n(896048);
var r = n(735438),
    i = n(506774),
    a = n(439372),
    s = n(450510),
    o = n(891540),
    l = n(868974),
    c = n(253932),
    u = n(383501),
    d = n(881520),
    f = n(368854),
    p = n(670455);

function _(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function h(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                _(e, t, n[t]);
            });
    }
    return e;
}

function m(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}

function g(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : m(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let E = 200,
    b = {
        chance: 0.2,
        cooldown: 864e5,
    },
    y = {
        [p.MW.VOICE]: g(h({}, b), {
            group: p.h0.AV,
            hotspot: s._2.VOICE_CALL_FEEDBACK,
            storageKey: "lastVoiceFeedback",
            feedbackType: p.MW.VOICE,
            eligibilityChecks: [T],
        }),
        [p.MW.STREAM]: g(h({}, b), {
            group: p.h0.AV,
            hotspot: s._2.REPORT_PROBLEM_POST_STREAM,
            storageKey: "lastStreamFeedback",
            feedbackType: p.MW.STREAM,
        }),
        [p.MW.VIDEO_BACKGROUND]: g(h({}, b), {
            group: p.h0.AV,
            hotspot: s._2.VIDEO_BACKGROUND_FEEDBACK,
            storageKey: "lastVideoBackgroundFeedback",
            feedbackType: p.MW.VIDEO_BACKGROUND,
        }),
        [p.MW.ACTIVITY]: {
            cooldown: 0,
            chance: 0.5,
            group: p.h0.AV,
            hotspot: s._2.POST_ACTIVITY_FEEDBACK,
            storageKey: "lastActivityFeedback",
            feedbackType: p.MW.ACTIVITY,
        },
        [p.MW.IN_APP_REPORTS]: {
            cooldown: 1728e5,
            chance: 0.5,
            group: p.h0.SAFETY,
            hotspot: s._2.IN_APP_REPORTS_FEEDBACK,
            storageKey: "inAppReportsFeedback",
            feedbackType: p.MW.IN_APP_REPORTS,
        },
        [p.MW.BLOCK_USER]: {
            cooldown: 0,
            chance: 1,
            group: p.h0.SAFETY,
            hotspot: s._2.BLOCK_USER_FEEDBACK,
            storageKey: "blockUser",
            feedbackType: p.MW.BLOCK_USER,
        },
        [p.MW.VOICE_FILTER]: g(h({}, b), {
            group: p.h0.AV,
            hotspot: s._2.VOICE_FILTER_FEEDBACK,
            storageKey: "lastVoiceFilterFeedback",
            feedbackType: p.MW.VOICE_FILTER,
            eligibilityChecks: [T],
        }),
        [p.MW.SEARCH_RESULTS]: g(h({}, b), {
            group: p.h0.SEARCH,
            hotspot: s._2.SEARCH_RESULTS_FEEDBACK,
            storageKey: "searchResultsFeedback",
            feedbackType: p.MW.SEARCH_RESULTS,
            eligibilityChecks: [C],
        }),
        [p.MW.AGE_VERIFICATION]: {
            cooldown: 0,
            chance: 1,
            group: p.h0.SAFETY,
            hotspot: s._2.AGE_VERIFICATION_FEEDBACK,
            storageKey: "ageVerificationFeedback",
            feedbackType: p.MW.AGE_VERIFICATION,
        },
    };

function O(e) {
    var t, n;
    if (__OVERLAY__) return !1;
    let { overrideEligibility: r } = (0, f.P)({
        location: "FeedbackManager",
    });
    if (r) return !0;
    let i = null != (t = d.A.getFeedbackConfig(e)) ? t : y[e],
        a = [v, A, I],
        s = null != (n = i.eligibilityChecks) ? n : [];
    return a.every((e) => e(i)) && s.every((e) => e(i));
}

function A(e) {
    var t;
    let n = null == (t = c.Yt.getSetting()[e.feedbackType]) ? void 0 : t.optOutExpiryTime,
        r = null != n && !Number.isNaN(n) && Date.now() < n,
        i = !o.A.hasHotspot(e.hotspot);
    return (
        i &&
            !r &&
            c.Yt.updateSetting((t) =>
                g(h({}, t), {
                    [e.feedbackType]: g(h({}, t[e.feedbackType]), {
                        optOutExpiryTime: p.fs,
                    }),
                }),
            ),
        !r && !i
    );
}

function v(e) {
    return Math.random() < e.chance;
}

function S(e, t) {
    var n, a, s;
    let o,
        l = null == (a = c.Yt.getSetting()[t.feedbackType]) ? void 0 : a.lastImpressionTime;
    return (
        (null == l || Number.isNaN(l)) &&
            null != t.storageKey &&
            (null == (o = null != (s = i.w.get(t.storageKey)) ? s : void 0) ||
                Number.isNaN(o) ||
                c.Yt.updateSetting((e) =>
                    g(h({}, e), {
                        [t.feedbackType]: g(h({}, e[t.feedbackType]), {
                            lastImpressionTime: o,
                        }),
                    }),
                )),
        (null != (n = (0, r.max)([l, o])) ? n : 0) + e.cooldown < Date.now()
    );
}

function I(e) {
    for (let t of Object.values(y).filter((t) => {
        let { group: n } = t;
        return n === e.group;
    }))
        if (!S(e, t)) return !1;
    return !0;
}

function T(e) {
    return !u.A.getWasEverRtcConnected() || u.A.getWasEverMultiParticipant();
}

function C(e) {
    return !!(0, l.s)({
        location: "FeedbackManager",
    });
}

function N(e) {
    c.Yt.updateSetting((t) =>
        g(h({}, t), {
            [e]: g(h({}, t[e]), {
                lastImpressionTime: Date.now(),
            }),
        }),
    );
}
class R extends a.A {
    possiblyShowFeedbackModal(e, t, n) {
        if (!O(e) || (null != this.feedbackTypeToShow && p.uf[this.feedbackTypeToShow] < p.uf[e])) {
            null == n || n();
            return;
        }
        (this.feedbackTypeToShow = e), this.showFeedbackModalDebounced(t, n);
    }
    constructor(...e) {
        super(...e),
            _(this, "feedbackTypeToShow", null),
            _(
                this,
                "showFeedbackModalDebounced",
                (0, r.debounce)((e, t) => {
                    null != this.feedbackTypeToShow
                        ? (N(this.feedbackTypeToShow), (this.feedbackTypeToShow = null), e())
                        : null == t || t();
                }, E),
            );
    }
}
