n.d(t, {
    R: () => v,
    Z: () => w,
}),
    n(388685);
var r = n(392711),
    i = n(433517),
    a = n(147913),
    o = n(536442),
    s = n(810788),
    l = n(945577),
    c = n(28964),
    u = n(759209),
    d = n(695346),
    f = n(19780),
    p = n(115470),
    _ = n(102824),
    m = n(531578);
function h(e, t, n) {
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
function g(e) {
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
                h(e, t, n[t]);
            });
    }
    return e;
}
function E(e, t) {
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
function b(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : E(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let y = 200,
    O = {
        chance: 0.2,
        cooldown: 86400000,
    },
    v = {
        [m.nw.VOICE]: b(g({}, O), {
            group: m.FB.AV,
            hotspot: o.v6.VOICE_CALL_FEEDBACK,
            storageKey: "lastVoiceFeedback",
            feedbackType: m.nw.VOICE,
            eligibilityChecks: [N],
        }),
        [m.nw.STREAM]: b(g({}, O), {
            group: m.FB.AV,
            hotspot: o.v6.REPORT_PROBLEM_POST_STREAM,
            storageKey: "lastStreamFeedback",
            feedbackType: m.nw.STREAM,
        }),
        [m.nw.VIDEO_BACKGROUND]: b(g({}, O), {
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
        [m.nw.VOICE_FILTER]: b(g({}, O), {
            group: m.FB.AV,
            hotspot: o.v6.VOICE_FILTER_FEEDBACK,
            storageKey: "lastVoiceFilterFeedback",
            feedbackType: m.nw.VOICE_FILTER,
            eligibilityChecks: [N],
        }),
        [m.nw.SEARCH_RESULTS]: b(g({}, O), {
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
function S(e) {
    var t, n;
    if (__OVERLAY__) return !1;
    let { overrideEligibility: r } = (0, _.j)({ location: "FeedbackManager" });
    if (r) return !0;
    let i = null != (t = p.Z.getFeedbackConfig(e)) ? t : v[e],
        a = [T, I, C],
        o = null != (n = i.eligibilityChecks) ? n : [];
    return a.every((e) => e(i)) && o.every((e) => e(i));
}
function I(e) {
    var t;
    let n = null == (t = d.A2.getSetting()[e.feedbackType]) ? void 0 : t.optOutExpiryTime,
        r = null != n && !Number.isNaN(n) && Date.now() < n,
        i = !s.Z.hasHotspot(e.hotspot);
    return (
        i &&
            !r &&
            d.A2.updateSetting((t) =>
                b(g({}, t), { [e.feedbackType]: b(g({}, t[e.feedbackType]), { optOutExpiryTime: m.uf }) }),
            ),
        !r && !i
    );
}
function T(e) {
    return Math.random() < e.chance;
}
function A(e, t) {
    var n, a, o;
    let s,
        l = null == (n = d.A2.getSetting()[t.feedbackType]) ? void 0 : n.lastImpressionTime;
    return (
        (null == l || Number.isNaN(l)) &&
            null != t.storageKey &&
            (null == (s = null != (a = i.K.get(t.storageKey)) ? a : void 0) ||
                Number.isNaN(s) ||
                d.A2.updateSetting((e) =>
                    b(g({}, e), { [t.feedbackType]: b(g({}, e[t.feedbackType]), { lastImpressionTime: s }) }),
                )),
        (null != (o = (0, r.max)([l, s])) ? o : 0) + e.cooldown < Date.now()
    );
}
function C(e) {
    for (let t of Object.values(v).filter((t) => {
        let { group: n } = t;
        return n === e.group;
    }))
        if (!A(e, t)) return !1;
    return !0;
}
function N(e) {
    return !f.Z.getWasEverRtcConnected() || f.Z.getWasEverMultiParticipant();
}
function P(e) {
    if (!(0, u.j)({ location: "FeedbackManager" })) return !1;
    let t = (0, c.rY)({ location: "FeedbackManager" });
    return (0, l.wn)({ location: "FeedbackManager" }) || t;
}
function R(e) {
    d.A2.updateSetting((t) => b(g({}, t), { [e]: b(g({}, t[e]), { lastImpressionTime: Date.now() }) }));
}
class w extends a.Z {
    possiblyShowFeedbackModal(e, t, n) {
        if (!S(e) || (null != this.feedbackTypeToShow && m.b5[this.feedbackTypeToShow] < m.b5[e])) {
            null == n || n();
            return;
        }
        (this.feedbackTypeToShow = e), this.showFeedbackModalDebounced(t, n);
    }
    constructor(...e) {
        super(...e),
            h(this, "feedbackTypeToShow", null),
            h(
                this,
                "showFeedbackModalDebounced",
                (0, r.debounce)((e, t) => {
                    null != this.feedbackTypeToShow
                        ? (R(this.feedbackTypeToShow), (this.feedbackTypeToShow = null), e())
                        : null == t || t();
                }, y),
            );
    }
}
