n.d(t, {
    R: () => b,
    Z: () => A
}),
    n(539854),
    n(388685);
var r = n(392711),
    i = n.n(r),
    a = n(433517),
    o = n(147913),
    s = n(536442),
    l = n(810788),
    c = n(19780),
    u = n(115470),
    d = n(681926),
    f = n(531578);
function _(e, t, n) {
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
function p(e) {
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
                _(e, t, n[t]);
            });
    }
    return e;
}
function h(e, t) {
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
function m(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : h(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let g = 200,
    E = {
        chance: 0.2,
        cooldown: 86400000
    },
    b = {
        [f.nw.VOICE]: m(p({}, E), {
            group: f.FB.AV,
            hotspot: s.v6.VOICE_CALL_FEEDBACK,
            storageKey: 'lastVoiceFeedback',
            eligibilityChecks: [T]
        }),
        [f.nw.STREAM]: m(p({}, E), {
            group: f.FB.AV,
            hotspot: s.v6.REPORT_PROBLEM_POST_STREAM,
            storageKey: 'lastStreamFeedback'
        }),
        [f.nw.VIDEO_BACKGROUND]: m(p({}, E), {
            group: f.FB.AV,
            hotspot: s.v6.VIDEO_BACKGROUND_FEEDBACK,
            storageKey: 'lastVideoBackgroundFeedback'
        }),
        [f.nw.ACTIVITY]: {
            cooldown: 0,
            chance: 0.5,
            group: f.FB.AV,
            hotspot: s.v6.POST_ACTIVITY_FEEDBACK,
            storageKey: 'lastActivityFeedback'
        },
        [f.nw.IN_APP_REPORTS]: {
            cooldown: 172800000,
            chance: 0.5,
            group: f.FB.SOCIAL,
            hotspot: s.v6.IN_APP_REPORTS_FEEDBACK,
            storageKey: 'inAppReportsFeedback'
        },
        [f.nw.USER_DM_MUTE]: {
            cooldown: 604800000,
            chance: 1,
            group: f.FB.SOCIAL,
            hotspot: s.v6.USER_DM_MUTE_FEEDBACK,
            storageKey: 'userDmMute'
        },
        [f.nw.BLOCK_USER]: {
            cooldown: 0,
            chance: 1,
            group: f.FB.SOCIAL,
            hotspot: s.v6.BLOCK_USER_FEEDBACK,
            storageKey: 'blockUser'
        },
        [f.nw.VOICE_FILTER]: m(p({}, E), {
            group: f.FB.AV,
            hotspot: s.v6.VOICE_FILTER_FEEDBACK,
            storageKey: 'lastVoiceFilterFeedback',
            eligibilityChecks: [T]
        })
    };
function y(e) {
    var t, n;
    if (__OVERLAY__) return !1;
    let r = null != (t = u.Z.getFeedbackConfig(e)) ? t : b[e],
        i = [O, v],
        { doGroupEligibilityCheck: a } = (0, d.T)({ location: 'FeedbackManager' });
    a ? i.push(S) : i.push((e) => I(e, e));
    let o = null != (n = r.eligibilityChecks) ? n : [];
    return i.every((e) => e(r)) && o.every((e) => e(r));
}
function v(e) {
    return l.Z.hasHotspot(e.hotspot);
}
function O(e) {
    return Math.random() < e.chance;
}
function I(e, t) {
    if (null != e.storageKey && null != t.storageKey) {
        let n = a.K.get(t.storageKey);
        if (null != n) return Date.now() - n >= e.cooldown;
    }
    return !0;
}
function S(e) {
    for (let t of Object.values(b).filter((t) => {
        let { group: n } = t;
        return n === e.group;
    }))
        if (!I(e, t)) return !1;
    return !0;
}
function T(e) {
    return !c.Z.getWasEverRtcConnected() || c.Z.getWasEverMultiParticipant();
}
function N(e) {
    let t = b[e];
    null != t.storageKey && a.K.set(t.storageKey, Date.now());
}
class A extends o.Z {
    possiblyShowFeedbackModal(e, t) {
        y(e) && (null == this.feedbackTypeToShow || !(f.b5[this.feedbackTypeToShow] < f.b5[e])) && ((this.feedbackTypeToShow = e), this.showFeedbackModalDebounced(t));
    }
    constructor(...e) {
        super(...e),
            _(this, 'feedbackTypeToShow', null),
            _(
                this,
                'showFeedbackModalDebounced',
                i().debounce((e) => {
                    null != this.feedbackTypeToShow && (N(this.feedbackTypeToShow), (this.feedbackTypeToShow = null), e());
                }, g)
            );
    }
}
