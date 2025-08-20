n.d(t, {
    R: () => I,
    Z: () => D,
}),
    n(539854),
    n(388685);
var r = n(392711),
    i = n(433517),
    a = n(147913),
    o = n(536442),
    s = n(810788),
    l = n(56522),
    c = n(759209),
    u = n(695346),
    d = n(19780),
    f = n(115470),
    _ = n(250454),
    p = n(102824),
    h = n(681926),
    m = n(531578);
function g(e, t, n) {
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
function E(e) {
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
                g(e, t, n[t]);
            });
    }
    return e;
}
function b(e, t) {
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
function y(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : b(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let O = 200,
    v = {
        chance: 0.2,
        cooldown: 86400000,
    },
    I = {
        [m.nw.VOICE]: y(E({}, v), {
            group: m.FB.AV,
            hotspot: o.v6.VOICE_CALL_FEEDBACK,
            storageKey: "lastVoiceFeedback",
            feedbackType: m.nw.VOICE,
            eligibilityChecks: [R],
        }),
        [m.nw.STREAM]: y(E({}, v), {
            group: m.FB.AV,
            hotspot: o.v6.REPORT_PROBLEM_POST_STREAM,
            storageKey: "lastStreamFeedback",
            feedbackType: m.nw.STREAM,
        }),
        [m.nw.VIDEO_BACKGROUND]: y(E({}, v), {
            group: m.FB.AV,
            hotspot: o.v6.VIDEO_BACKGROUND_FEEDBACK,
            storageKey: "lastVideoBackgroundFeedback",
            feedbackType: m.nw.VIDEO_BACKGROUND,
        }),
        [m.nw.ACTIVITY]: {
            cooldown: 0,
            chance: 0.5,
            group: m.FB.AV,
            hotspot: o.v6.POST_ACTIVITY_FEEDBACK,
            storageKey: "lastActivityFeedback",
            feedbackType: m.nw.ACTIVITY,
        },
        [m.nw.IN_APP_REPORTS]: {
            cooldown: 172800000,
            chance: 0.5,
            group: m.FB.SAFETY,
            hotspot: o.v6.IN_APP_REPORTS_FEEDBACK,
            storageKey: "inAppReportsFeedback",
            feedbackType: m.nw.IN_APP_REPORTS,
        },
        [m.nw.USER_DM_MUTE]: {
            cooldown: 604800000,
            chance: 1,
            group: m.FB.SAFETY,
            hotspot: o.v6.USER_DM_MUTE_FEEDBACK,
            storageKey: "userDmMute",
            feedbackType: m.nw.USER_DM_MUTE,
        },
        [m.nw.BLOCK_USER]: {
            cooldown: 0,
            chance: 1,
            group: m.FB.SAFETY,
            hotspot: o.v6.BLOCK_USER_FEEDBACK,
            storageKey: "blockUser",
            feedbackType: m.nw.BLOCK_USER,
        },
        [m.nw.VOICE_FILTER]: y(E({}, v), {
            group: m.FB.AV,
            hotspot: o.v6.VOICE_FILTER_FEEDBACK,
            storageKey: "lastVoiceFilterFeedback",
            feedbackType: m.nw.VOICE_FILTER,
            eligibilityChecks: [R],
        }),
        [m.nw.SEARCH_RESULTS]: y(E({}, v), {
            group: m.FB.SEARCH,
            hotspot: o.v6.SEARCH_RESULTS_FEEDBACK,
            storageKey: "searchResultsFeedback",
            feedbackType: m.nw.SEARCH_RESULTS,
            eligibilityChecks: [P],
        }),
        [m.nw.AGE_VERIFICATION]: {
            cooldown: 0,
            chance: 1,
            group: m.FB.SAFETY,
            hotspot: o.v6.AGE_VERIFICATION_FEEDBACK,
            storageKey: "ageVerificationFeedback",
            feedbackType: m.nw.AGE_VERIFICATION,
        },
    };
function T(e) {
    var t, n;
    if (__OVERLAY__) return !1;
    let { overrideEligibility: r } = (0, p.j)({ location: "FeedbackManager" });
    if (r) return !0;
    let i = null != (t = f.Z.getFeedbackConfig(e)) ? t : I[e],
        a = [A, S],
        { doGroupEligibilityCheck: o } = (0, h.T)({ location: "FeedbackManager" });
    o ? a.push(N) : a.push((e) => C(e, e));
    let s = null != (n = i.eligibilityChecks) ? n : [];
    return a.every((e) => e(i)) && s.every((e) => e(i));
}
function S(e) {
    let { persistToBackend: t } = (0, _.O)({ location: "FeedbackManager/".concat(e.feedbackType) });
    if (!t) return s.Z.hasHotspot(e.hotspot);
    {
        var n;
        let t = null == (n = u.A2.getSetting()[e.feedbackType]) ? void 0 : n.optOutExpiryTime,
            r = null != t && !Number.isNaN(t) && Date.now() < t,
            i = !s.Z.hasHotspot(e.hotspot);
        return (
            i &&
                !r &&
                u.A2.updateSetting((t) =>
                    y(E({}, t), { [e.feedbackType]: y(E({}, t[e.feedbackType]), { optOutExpiryTime: m.uf }) }),
                ),
            !r && !i
        );
    }
}
function A(e) {
    return Math.random() < e.chance;
}
function C(e, t) {
    let { persistToBackend: n } = (0, _.O)({ location: "FeedbackManager/".concat(e.feedbackType) });
    if (n) {
        var a, o, s;
        let n,
            l = null == (a = u.A2.getSetting()[t.feedbackType]) ? void 0 : a.lastImpressionTime;
        return (
            (null == l || Number.isNaN(l)) &&
                null != t.storageKey &&
                (null == (n = null != (o = i.K.get(t.storageKey)) ? o : void 0) ||
                    Number.isNaN(n) ||
                    u.A2.updateSetting((e) =>
                        y(E({}, e), { [t.feedbackType]: y(E({}, e[t.feedbackType]), { lastImpressionTime: n }) }),
                    )),
            (null != (s = (0, r.max)([l, n])) ? s : 0) + e.cooldown < Date.now()
        );
    }
    if (null != t.storageKey) {
        let n = i.K.get(t.storageKey);
        if (null != n) return n + e.cooldown < Date.now();
    }
    return !0;
}
function N(e) {
    for (let t of Object.values(I).filter((t) => {
        let { group: n } = t;
        return n === e.group;
    }))
        if (!C(e, t)) return !1;
    return !0;
}
function R(e) {
    return !d.Z.getWasEverRtcConnected() || d.Z.getWasEverMultiParticipant();
}
function P(e) {
    let t = (0, c.j)({ location: "FeedbackManager" }),
        n = (0, l.K)({ location: "FeedbackManager" });
    return t || n;
}
function w(e) {
    let { persistToBackend: t } = (0, _.O)({ location: "FeedbackManager/".concat(e) });
    if (t) u.A2.updateSetting((t) => y(E({}, t), { [e]: y(E({}, t[e]), { lastImpressionTime: Date.now() }) }));
    else {
        let { storageKey: t } = I[e];
        null != t && i.K.set(t, Date.now());
    }
}
class D extends a.Z {
    possiblyShowFeedbackModal(e, t, n) {
        if (!T(e) || (null != this.feedbackTypeToShow && m.b5[this.feedbackTypeToShow] < m.b5[e])) {
            null == n || n();
            return;
        }
        (this.feedbackTypeToShow = e), this.showFeedbackModalDebounced(t, n);
    }
    constructor(...e) {
        super(...e),
            g(this, "feedbackTypeToShow", null),
            g(
                this,
                "showFeedbackModalDebounced",
                (0, r.debounce)((e, t) => {
                    null != this.feedbackTypeToShow
                        ? (w(this.feedbackTypeToShow), (this.feedbackTypeToShow = null), e())
                        : null == t || t();
                }, O),
            );
    }
}
