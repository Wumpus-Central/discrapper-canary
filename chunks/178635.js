n.d(t, {
    R: () => O,
    Z: () => P,
}),
    n(388685);
var r = n(392711),
    i = n(433517),
    a = n(147913),
    o = n(536442),
    s = n(810788),
    l = n(28964),
    c = n(759209),
    u = n(695346),
    d = n(19780),
    f = n(115470),
    _ = n(102824),
    p = n(531578);
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
function m(e) {
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
function g(e, t) {
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
function E(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : g(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let b = 200,
    y = {
        chance: 0.2,
        cooldown: 86400000,
    },
    O = {
        [p.nw.VOICE]: E(m({}, y), {
            group: p.FB.AV,
            hotspot: o.v6.VOICE_CALL_FEEDBACK,
            storageKey: "lastVoiceFeedback",
            feedbackType: p.nw.VOICE,
            eligibilityChecks: [C],
        }),
        [p.nw.STREAM]: E(m({}, y), {
            group: p.FB.AV,
            hotspot: o.v6.REPORT_PROBLEM_POST_STREAM,
            storageKey: "lastStreamFeedback",
            feedbackType: p.nw.STREAM,
        }),
        [p.nw.VIDEO_BACKGROUND]: E(m({}, y), {
            group: p.FB.AV,
            hotspot: o.v6.VIDEO_BACKGROUND_FEEDBACK,
            storageKey: "lastVideoBackgroundFeedback",
            feedbackType: p.nw.VIDEO_BACKGROUND,
        }),
        [p.nw.ACTIVITY]: {
            cooldown: 0,
            chance: 0.5,
            group: p.FB.AV,
            hotspot: o.v6.POST_ACTIVITY_FEEDBACK,
            storageKey: "lastActivityFeedback",
            feedbackType: p.nw.ACTIVITY,
        },
        [p.nw.IN_APP_REPORTS]: {
            cooldown: 172800000,
            chance: 0.5,
            group: p.FB.SAFETY,
            hotspot: o.v6.IN_APP_REPORTS_FEEDBACK,
            storageKey: "inAppReportsFeedback",
            feedbackType: p.nw.IN_APP_REPORTS,
        },
        [p.nw.USER_DM_MUTE]: {
            cooldown: 604800000,
            chance: 1,
            group: p.FB.SAFETY,
            hotspot: o.v6.USER_DM_MUTE_FEEDBACK,
            storageKey: "userDmMute",
            feedbackType: p.nw.USER_DM_MUTE,
        },
        [p.nw.BLOCK_USER]: {
            cooldown: 0,
            chance: 1,
            group: p.FB.SAFETY,
            hotspot: o.v6.BLOCK_USER_FEEDBACK,
            storageKey: "blockUser",
            feedbackType: p.nw.BLOCK_USER,
        },
        [p.nw.VOICE_FILTER]: E(m({}, y), {
            group: p.FB.AV,
            hotspot: o.v6.VOICE_FILTER_FEEDBACK,
            storageKey: "lastVoiceFilterFeedback",
            feedbackType: p.nw.VOICE_FILTER,
            eligibilityChecks: [C],
        }),
        [p.nw.SEARCH_RESULTS]: E(m({}, y), {
            group: p.FB.SEARCH,
            hotspot: o.v6.SEARCH_RESULTS_FEEDBACK,
            storageKey: "searchResultsFeedback",
            feedbackType: p.nw.SEARCH_RESULTS,
            eligibilityChecks: [N],
        }),
        [p.nw.AGE_VERIFICATION]: {
            cooldown: 0,
            chance: 1,
            group: p.FB.SAFETY,
            hotspot: o.v6.AGE_VERIFICATION_FEEDBACK,
            storageKey: "ageVerificationFeedback",
            feedbackType: p.nw.AGE_VERIFICATION,
        },
    };
function v(e) {
    var t, n;
    if (__OVERLAY__) return !1;
    let { overrideEligibility: r } = (0, _.j)({ location: "FeedbackManager" });
    if (r) return !0;
    let i = null != (t = f.Z.getFeedbackConfig(e)) ? t : O[e],
        a = [T, I, A],
        o = null != (n = i.eligibilityChecks) ? n : [];
    return a.every((e) => e(i)) && o.every((e) => e(i));
}
function I(e) {
    var t;
    let n = null == (t = u.A2.getSetting()[e.feedbackType]) ? void 0 : t.optOutExpiryTime,
        r = null != n && !Number.isNaN(n) && Date.now() < n,
        i = !s.Z.hasHotspot(e.hotspot);
    return (
        i &&
            !r &&
            u.A2.updateSetting((t) =>
                E(m({}, t), { [e.feedbackType]: E(m({}, t[e.feedbackType]), { optOutExpiryTime: p.uf }) }),
            ),
        !r && !i
    );
}
function T(e) {
    return Math.random() < e.chance;
}
function S(e, t) {
    var n, a, o;
    let s,
        l = null == (n = u.A2.getSetting()[t.feedbackType]) ? void 0 : n.lastImpressionTime;
    return (
        (null == l || Number.isNaN(l)) &&
            null != t.storageKey &&
            (null == (s = null != (a = i.K.get(t.storageKey)) ? a : void 0) ||
                Number.isNaN(s) ||
                u.A2.updateSetting((e) =>
                    E(m({}, e), { [t.feedbackType]: E(m({}, e[t.feedbackType]), { lastImpressionTime: s }) }),
                )),
        (null != (o = (0, r.max)([l, s])) ? o : 0) + e.cooldown < Date.now()
    );
}
function A(e) {
    for (let t of Object.values(O).filter((t) => {
        let { group: n } = t;
        return n === e.group;
    }))
        if (!S(e, t)) return !1;
    return !0;
}
function C(e) {
    return !d.Z.getWasEverRtcConnected() || d.Z.getWasEverMultiParticipant();
}
function N(e) {
    let t = (0, c.j)({ location: "FeedbackManager" }),
        n = (0, l.rY)({ location: "FeedbackManager" });
    return t && n;
}
function R(e) {
    u.A2.updateSetting((t) => E(m({}, t), { [e]: E(m({}, t[e]), { lastImpressionTime: Date.now() }) }));
}
class P extends a.Z {
    possiblyShowFeedbackModal(e, t, n) {
        if (!v(e) || (null != this.feedbackTypeToShow && p.b5[this.feedbackTypeToShow] < p.b5[e])) {
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
                }, b),
            );
    }
}
