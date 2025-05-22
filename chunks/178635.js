n.d(t, {
    R: () => O,
    Z: () => P
}),
    n(539854),
    n(388685);
var r = n(392711),
    i = n(433517),
    o = n(147913),
    a = n(536442),
    s = n(810788),
    l = n(695346),
    c = n(19780),
    u = n(115470),
    d = n(250454),
    f = n(102824),
    _ = n(681926),
    p = n(531578);
function h(e, t, n) {
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
function m(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
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
        cooldown: 86400000
    },
    O = {
        [p.nw.VOICE]: E(m({}, y), {
            group: p.FB.AV,
            hotspot: a.v6.VOICE_CALL_FEEDBACK,
            storageKey: 'lastVoiceFeedback',
            feedbackType: p.nw.VOICE,
            eligibilityChecks: [N]
        }),
        [p.nw.STREAM]: E(m({}, y), {
            group: p.FB.AV,
            hotspot: a.v6.REPORT_PROBLEM_POST_STREAM,
            storageKey: 'lastStreamFeedback',
            feedbackType: p.nw.STREAM
        }),
        [p.nw.VIDEO_BACKGROUND]: E(m({}, y), {
            group: p.FB.AV,
            hotspot: a.v6.VIDEO_BACKGROUND_FEEDBACK,
            storageKey: 'lastVideoBackgroundFeedback',
            feedbackType: p.nw.VIDEO_BACKGROUND
        }),
        [p.nw.ACTIVITY]: {
            cooldown: 0,
            chance: 0.5,
            group: p.FB.AV,
            hotspot: a.v6.POST_ACTIVITY_FEEDBACK,
            storageKey: 'lastActivityFeedback',
            feedbackType: p.nw.ACTIVITY
        },
        [p.nw.IN_APP_REPORTS]: {
            cooldown: 172800000,
            chance: 0.5,
            group: p.FB.SOCIAL,
            hotspot: a.v6.IN_APP_REPORTS_FEEDBACK,
            storageKey: 'inAppReportsFeedback',
            feedbackType: p.nw.IN_APP_REPORTS
        },
        [p.nw.USER_DM_MUTE]: {
            cooldown: 604800000,
            chance: 1,
            group: p.FB.SOCIAL,
            hotspot: a.v6.USER_DM_MUTE_FEEDBACK,
            storageKey: 'userDmMute',
            feedbackType: p.nw.USER_DM_MUTE
        },
        [p.nw.BLOCK_USER]: {
            cooldown: 0,
            chance: 1,
            group: p.FB.SOCIAL,
            hotspot: a.v6.BLOCK_USER_FEEDBACK,
            storageKey: 'blockUser',
            feedbackType: p.nw.BLOCK_USER
        },
        [p.nw.VOICE_FILTER]: E(m({}, y), {
            group: p.FB.AV,
            hotspot: a.v6.VOICE_FILTER_FEEDBACK,
            storageKey: 'lastVoiceFilterFeedback',
            feedbackType: p.nw.VOICE_FILTER,
            eligibilityChecks: [N]
        })
    };
function v(e) {
    var t, n;
    if (__OVERLAY__) return !1;
    let { overrideEligibility: r } = (0, f.j)({ location: 'FeedbackManager' });
    if (r) return !0;
    let i = null != (t = u.Z.getFeedbackConfig(e)) ? t : O[e],
        o = [S, I],
        { doGroupEligibilityCheck: a } = (0, _.T)({ location: 'FeedbackManager' });
    a ? o.push(A) : o.push((e) => T(e, e));
    let s = null != (n = i.eligibilityChecks) ? n : [];
    return o.every((e) => e(i)) && s.every((e) => e(i));
}
function I(e) {
    let { persistToBackend: t } = (0, d.O)({ location: 'FeedbackManager/'.concat(e.feedbackType) });
    if (!t) return s.Z.hasHotspot(e.hotspot);
    {
        var n;
        let t = null == (n = l.A2.getSetting()[e.feedbackType]) ? void 0 : n.optOutExpiryTime,
            r = null != t && !Number.isNaN(t) && Date.now() < t,
            i = !s.Z.hasHotspot(e.hotspot);
        return i && !r && l.A2.updateSetting((t) => E(m({}, t), { [e.feedbackType]: E(m({}, t[e.feedbackType]), { optOutExpiryTime: p.uf }) })), !r && !i;
    }
}
function S(e) {
    return Math.random() < e.chance;
}
function T(e, t) {
    let { persistToBackend: n } = (0, d.O)({ location: 'FeedbackManager/'.concat(e.feedbackType) });
    if (n) {
        var o, a, s;
        let n,
            c = null == (o = l.A2.getSetting()[t.feedbackType]) ? void 0 : o.lastImpressionTime;
        return (null == c || Number.isNaN(c)) && null != t.storageKey && (null == (n = null != (a = i.K.get(t.storageKey)) ? a : void 0) || Number.isNaN(n) || l.A2.updateSetting((e) => E(m({}, e), { [t.feedbackType]: E(m({}, e[t.feedbackType]), { lastImpressionTime: n }) }))), (null != (s = (0, r.max)([c, n])) ? s : 0) + e.cooldown < Date.now();
    }
    if (null != t.storageKey) {
        let n = i.K.get(t.storageKey);
        if (null != n) return n + e.cooldown < Date.now();
    }
    return !0;
}
function A(e) {
    for (let t of Object.values(O).filter((t) => {
        let { group: n } = t;
        return n === e.group;
    }))
        if (!T(e, t)) return !1;
    return !0;
}
function N(e) {
    return !c.Z.getWasEverRtcConnected() || c.Z.getWasEverMultiParticipant();
}
function C(e) {
    let { persistToBackend: t } = (0, d.O)({ location: 'FeedbackManager/'.concat(e) });
    if (t) l.A2.updateSetting((t) => E(m({}, t), { [e]: E(m({}, t[e]), { lastImpressionTime: Date.now() }) }));
    else {
        let { storageKey: t } = O[e];
        null != t && i.K.set(t, Date.now());
    }
}
class P extends o.Z {
    possiblyShowFeedbackModal(e, t) {
        v(e) && (null == this.feedbackTypeToShow || !(p.b5[this.feedbackTypeToShow] < p.b5[e])) && ((this.feedbackTypeToShow = e), this.showFeedbackModalDebounced(t));
    }
    constructor(...e) {
        super(...e),
            h(this, 'feedbackTypeToShow', null),
            h(
                this,
                'showFeedbackModalDebounced',
                (0, r.debounce)((e) => {
                    null != this.feedbackTypeToShow && (C(this.feedbackTypeToShow), (this.feedbackTypeToShow = null), e());
                }, b)
            );
    }
}
