n.d(t, {
    R: () => y,
    Z: () => C
}),
    n(539854),
    n(388685);
var r = n(392711),
    i = n(433517),
    a = n(147913),
    o = n(536442),
    s = n(810788),
    l = n(695346),
    c = n(19780),
    u = n(115470),
    d = n(250454),
    f = n(681926),
    _ = n(531578);
function p(e, t, n) {
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
function h(e) {
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
                p(e, t, n[t]);
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
        cooldown: 86400000
    },
    y = {
        [_.nw.VOICE]: g(h({}, b), {
            group: _.FB.AV,
            hotspot: o.v6.VOICE_CALL_FEEDBACK,
            storageKey: 'lastVoiceFeedback',
            feedbackType: _.nw.VOICE,
            eligibilityChecks: [A]
        }),
        [_.nw.STREAM]: g(h({}, b), {
            group: _.FB.AV,
            hotspot: o.v6.REPORT_PROBLEM_POST_STREAM,
            storageKey: 'lastStreamFeedback',
            feedbackType: _.nw.STREAM
        }),
        [_.nw.VIDEO_BACKGROUND]: g(h({}, b), {
            group: _.FB.AV,
            hotspot: o.v6.VIDEO_BACKGROUND_FEEDBACK,
            storageKey: 'lastVideoBackgroundFeedback',
            feedbackType: _.nw.VIDEO_BACKGROUND
        }),
        [_.nw.ACTIVITY]: {
            cooldown: 0,
            chance: 0.5,
            group: _.FB.AV,
            hotspot: o.v6.POST_ACTIVITY_FEEDBACK,
            storageKey: 'lastActivityFeedback',
            feedbackType: _.nw.ACTIVITY
        },
        [_.nw.IN_APP_REPORTS]: {
            cooldown: 172800000,
            chance: 0.5,
            group: _.FB.SOCIAL,
            hotspot: o.v6.IN_APP_REPORTS_FEEDBACK,
            storageKey: 'inAppReportsFeedback',
            feedbackType: _.nw.IN_APP_REPORTS
        },
        [_.nw.USER_DM_MUTE]: {
            cooldown: 604800000,
            chance: 1,
            group: _.FB.SOCIAL,
            hotspot: o.v6.USER_DM_MUTE_FEEDBACK,
            storageKey: 'userDmMute',
            feedbackType: _.nw.USER_DM_MUTE
        },
        [_.nw.BLOCK_USER]: {
            cooldown: 0,
            chance: 1,
            group: _.FB.SOCIAL,
            hotspot: o.v6.BLOCK_USER_FEEDBACK,
            storageKey: 'blockUser',
            feedbackType: _.nw.BLOCK_USER
        },
        [_.nw.VOICE_FILTER]: g(h({}, b), {
            group: _.FB.AV,
            hotspot: o.v6.VOICE_FILTER_FEEDBACK,
            storageKey: 'lastVoiceFilterFeedback',
            feedbackType: _.nw.VOICE_FILTER,
            eligibilityChecks: [A]
        })
    };
function O(e) {
    var t, n;
    if (__OVERLAY__) return !1;
    let r = null != (t = u.Z.getFeedbackConfig(e)) ? t : y[e],
        i = [I, v],
        { doGroupEligibilityCheck: a } = (0, f.T)({ location: 'FeedbackManager' });
    a ? i.push(T) : i.push((e) => S(e, e));
    let o = null != (n = r.eligibilityChecks) ? n : [];
    return i.every((e) => e(r)) && o.every((e) => e(r));
}
function v(e) {
    let { persistToBackend: t } = (0, d.O)({ location: 'FeedbackManager/'.concat(e.feedbackType) });
    if (!t) return s.Z.hasHotspot(e.hotspot);
    {
        var n;
        let t = null == (n = l.A2.getSetting()[e.feedbackType]) ? void 0 : n.optOutExpiryTime,
            r = null != t && !Number.isNaN(t) && Date.now() < t,
            i = !s.Z.hasHotspot(e.hotspot);
        return i && !r && l.A2.updateSetting((t) => g(h({}, t), { [e.feedbackType]: g(h({}, t[e.feedbackType]), { optOutExpiryTime: _.uf }) })), !r && !i;
    }
}
function I(e) {
    return Math.random() < e.chance;
}
function S(e, t) {
    let { persistToBackend: n } = (0, d.O)({ location: 'FeedbackManager/'.concat(e.feedbackType) });
    if (n) {
        var a, o, s;
        let n,
            c = null == (a = l.A2.getSetting()[t.feedbackType]) ? void 0 : a.lastImpressionTime;
        return (null == c || Number.isNaN(c)) && null != t.storageKey && (null == (n = null != (o = i.K.get(t.storageKey)) ? o : void 0) || Number.isNaN(n) || l.A2.updateSetting((e) => g(h({}, e), { [t.feedbackType]: g(h({}, e[t.feedbackType]), { lastImpressionTime: n }) }))), (null != (s = (0, r.max)([c, n])) ? s : 0) + e.cooldown < Date.now();
    }
    if (null != t.storageKey) {
        let n = i.K.get(t.storageKey);
        if (null != n) return n + e.cooldown < Date.now();
    }
    return !0;
}
function T(e) {
    for (let t of Object.values(y).filter((t) => {
        let { group: n } = t;
        return n === e.group;
    }))
        if (!S(e, t)) return !1;
    return !0;
}
function A(e) {
    return !c.Z.getWasEverRtcConnected() || c.Z.getWasEverMultiParticipant();
}
function N(e) {
    let { persistToBackend: t } = (0, d.O)({ location: 'FeedbackManager/'.concat(e) });
    if (t) l.A2.updateSetting((t) => g(h({}, t), { [e]: g(h({}, t[e]), { lastImpressionTime: Date.now() }) }));
    else {
        let { storageKey: t } = y[e];
        null != t && i.K.set(t, Date.now());
    }
}
class C extends a.Z {
    possiblyShowFeedbackModal(e, t) {
        O(e) && (null == this.feedbackTypeToShow || !(_.b5[this.feedbackTypeToShow] < _.b5[e])) && ((this.feedbackTypeToShow = e), this.showFeedbackModalDebounced(t));
    }
    constructor(...e) {
        super(...e),
            p(this, 'feedbackTypeToShow', null),
            p(
                this,
                'showFeedbackModalDebounced',
                (0, r.debounce)((e) => {
                    null != this.feedbackTypeToShow && (N(this.feedbackTypeToShow), (this.feedbackTypeToShow = null), e());
                }, E)
            );
    }
}
