(n.d(t, {
    R: () => v,
    Z: () => w
}),
    n(539854),
    n(388685));
var r = n(392711),
    i = n(433517),
    a = n(147913),
    o = n(536442),
    s = n(810788),
    l = n(965996),
    c = n(695346),
    u = n(19780),
    d = n(115470),
    _ = n(250454),
    f = n(102824),
    p = n(681926),
    h = n(531578);
function m(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function g(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                m(e, t, n[t]);
            }));
    }
    return e;
}
function E(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
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
        cooldown: 86400000
    },
    v = {
        [h.nw.VOICE]: b(g({}, O), {
            group: h.FB.AV,
            hotspot: o.v6.VOICE_CALL_FEEDBACK,
            storageKey: 'lastVoiceFeedback',
            feedbackType: h.nw.VOICE,
            eligibilityChecks: [C]
        }),
        [h.nw.STREAM]: b(g({}, O), {
            group: h.FB.AV,
            hotspot: o.v6.REPORT_PROBLEM_POST_STREAM,
            storageKey: 'lastStreamFeedback',
            feedbackType: h.nw.STREAM
        }),
        [h.nw.VIDEO_BACKGROUND]: b(g({}, O), {
            group: h.FB.AV,
            hotspot: o.v6.VIDEO_BACKGROUND_FEEDBACK,
            storageKey: 'lastVideoBackgroundFeedback',
            feedbackType: h.nw.VIDEO_BACKGROUND
        }),
        [h.nw.ACTIVITY]: {
            cooldown: 0,
            chance: 0.5,
            group: h.FB.AV,
            hotspot: o.v6.POST_ACTIVITY_FEEDBACK,
            storageKey: 'lastActivityFeedback',
            feedbackType: h.nw.ACTIVITY
        },
        [h.nw.IN_APP_REPORTS]: {
            cooldown: 172800000,
            chance: 0.5,
            group: h.FB.SOCIAL,
            hotspot: o.v6.IN_APP_REPORTS_FEEDBACK,
            storageKey: 'inAppReportsFeedback',
            feedbackType: h.nw.IN_APP_REPORTS
        },
        [h.nw.USER_DM_MUTE]: {
            cooldown: 604800000,
            chance: 1,
            group: h.FB.SOCIAL,
            hotspot: o.v6.USER_DM_MUTE_FEEDBACK,
            storageKey: 'userDmMute',
            feedbackType: h.nw.USER_DM_MUTE
        },
        [h.nw.BLOCK_USER]: {
            cooldown: 0,
            chance: 1,
            group: h.FB.SOCIAL,
            hotspot: o.v6.BLOCK_USER_FEEDBACK,
            storageKey: 'blockUser',
            feedbackType: h.nw.BLOCK_USER
        },
        [h.nw.VOICE_FILTER]: b(g({}, O), {
            group: h.FB.AV,
            hotspot: o.v6.VOICE_FILTER_FEEDBACK,
            storageKey: 'lastVoiceFilterFeedback',
            feedbackType: h.nw.VOICE_FILTER,
            eligibilityChecks: [C]
        }),
        [h.nw.SEARCH_RESULTS]: b(g({}, O), {
            group: h.FB.SEARCH,
            hotspot: o.v6.SEARCH_RESULTS_FEEDBACK,
            storageKey: 'searchResultsFeedback',
            feedbackType: h.nw.SEARCH_RESULTS,
            eligibilityChecks: [R]
        })
    };
function I(e) {
    var t, n;
    if (__OVERLAY__) return !1;
    let { overrideEligibility: r } = (0, f.j)({ location: 'FeedbackManager' });
    if (r) return !0;
    let i = null != (t = d.Z.getFeedbackConfig(e)) ? t : v[e],
        a = [S, T],
        { doGroupEligibilityCheck: o } = (0, p.T)({ location: 'FeedbackManager' });
    o ? a.push(N) : a.push((e) => A(e, e));
    let s = null != (n = i.eligibilityChecks) ? n : [];
    return a.every((e) => e(i)) && s.every((e) => e(i));
}
function T(e) {
    let { persistToBackend: t } = (0, _.O)({ location: 'FeedbackManager/'.concat(e.feedbackType) });
    if (!t) return s.Z.hasHotspot(e.hotspot);
    {
        var n;
        let t = null == (n = c.A2.getSetting()[e.feedbackType]) ? void 0 : n.optOutExpiryTime,
            r = null != t && !Number.isNaN(t) && Date.now() < t,
            i = !s.Z.hasHotspot(e.hotspot);
        return (i && !r && c.A2.updateSetting((t) => b(g({}, t), { [e.feedbackType]: b(g({}, t[e.feedbackType]), { optOutExpiryTime: h.uf }) })), !r && !i);
    }
}
function S(e) {
    return Math.random() < e.chance;
}
function A(e, t) {
    let { persistToBackend: n } = (0, _.O)({ location: 'FeedbackManager/'.concat(e.feedbackType) });
    if (n) {
        var a, o, s;
        let n,
            l = null == (a = c.A2.getSetting()[t.feedbackType]) ? void 0 : a.lastImpressionTime;
        return ((null == l || Number.isNaN(l)) && null != t.storageKey && (null == (n = null != (o = i.K.get(t.storageKey)) ? o : void 0) || Number.isNaN(n) || c.A2.updateSetting((e) => b(g({}, e), { [t.feedbackType]: b(g({}, e[t.feedbackType]), { lastImpressionTime: n }) }))), (null != (s = (0, r.max)([l, n])) ? s : 0) + e.cooldown < Date.now());
    }
    if (null != t.storageKey) {
        let n = i.K.get(t.storageKey);
        if (null != n) return n + e.cooldown < Date.now();
    }
    return !0;
}
function N(e) {
    for (let t of Object.values(v).filter((t) => {
        let { group: n } = t;
        return n === e.group;
    }))
        if (!A(e, t)) return !1;
    return !0;
}
function C(e) {
    return !u.Z.getWasEverRtcConnected() || u.Z.getWasEverMultiParticipant();
}
function R(e) {
    return (0, l.j)({ location: 'FeedbackManager' });
}
function P(e) {
    let { persistToBackend: t } = (0, _.O)({ location: 'FeedbackManager/'.concat(e) });
    if (t) c.A2.updateSetting((t) => b(g({}, t), { [e]: b(g({}, t[e]), { lastImpressionTime: Date.now() }) }));
    else {
        let { storageKey: t } = v[e];
        null != t && i.K.set(t, Date.now());
    }
}
class w extends a.Z {
    possiblyShowFeedbackModal(e, t, n) {
        if (!I(e) || (null != this.feedbackTypeToShow && h.b5[this.feedbackTypeToShow] < h.b5[e])) {
            null == n || n();
            return;
        }
        ((this.feedbackTypeToShow = e), this.showFeedbackModalDebounced(t, n));
    }
    constructor(...e) {
        (super(...e),
            m(this, 'feedbackTypeToShow', null),
            m(
                this,
                'showFeedbackModalDebounced',
                (0, r.debounce)((e, t) => {
                    null != this.feedbackTypeToShow ? (P(this.feedbackTypeToShow), (this.feedbackTypeToShow = null), e()) : null == t || t();
                }, y)
            ));
    }
}
