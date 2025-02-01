n.d(t, {
    R: () => h,
    Z: () => T
}),
    n(47120);
var i = n(392711),
    r = n.n(i),
    a = n(433517),
    s = n(147913),
    o = n(536442),
    l = n(810788),
    u = n(19780),
    c = n(115470),
    d = n(531578);
function f(e, t, n) {
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
let _ = 200,
    p = {
        chance: 0.2,
        cooldown: 86400000
    },
    h = {
        [d.nw.VOICE]: {
            ...p,
            hotspot: o.v6.VOICE_CALL_FEEDBACK,
            storageKey: 'lastVoiceFeedback',
            eligibilityChecks: [y]
        },
        [d.nw.STREAM]: {
            ...p,
            hotspot: o.v6.REPORT_PROBLEM_POST_STREAM,
            storageKey: 'lastStreamFeedback'
        },
        [d.nw.VIDEO_BACKGROUND]: {
            ...p,
            hotspot: o.v6.VIDEO_BACKGROUND_FEEDBACK,
            storageKey: 'lastVideoBackgroundFeedback'
        },
        [d.nw.ACTIVITY]: {
            cooldown: 0,
            chance: 0.5,
            hotspot: o.v6.POST_ACTIVITY_FEEDBACK,
            storageKey: 'lastActivityFeedback'
        },
        [d.nw.IN_APP_REPORTS]: {
            cooldown: 172800000,
            chance: 0.5,
            hotspot: o.v6.IN_APP_REPORTS_FEEDBACK,
            storageKey: 'inAppReportsFeedback'
        },
        [d.nw.USER_DM_MUTE]: {
            cooldown: 604800000,
            chance: 1,
            hotspot: o.v6.USER_DM_MUTE_FEEDBACK,
            storageKey: 'userDmMute'
        },
        [d.nw.BLOCK_USER]: {
            cooldown: 0,
            chance: 1,
            hotspot: o.v6.BLOCK_USER_FEEDBACK,
            storageKey: 'blockUser'
        }
    };
function m(e) {
    var t, n;
    if (__OVERLAY__) return !1;
    let i = null !== (t = c.Z.getFeedbackConfig(e)) && void 0 !== t ? t : h[e],
        r = [v, E, g],
        a = null !== (n = i.eligibilityChecks) && void 0 !== n ? n : [];
    return r.every((e) => e(i)) && a.every((e) => e(i));
}
function g(e) {
    return l.Z.hasHotspot(e.hotspot);
}
function E(e) {
    return Math.random() < e.chance;
}
function v(e) {
    if (null != e.storageKey) {
        let t = a.K.get(e.storageKey);
        if (null != t && Date.now() - t < e.cooldown) return !1;
    }
    return !0;
}
function y(e) {
    return !u.Z.getWasEverRtcConnected() || u.Z.getWasEverMultiParticipant();
}
function I(e) {
    let t = h[e];
    null != t.storageKey && a.K.set(t.storageKey, Date.now());
}
class T extends s.Z {
    possiblyShowFeedbackModal(e, t) {
        m(e) && (null == this.feedbackTypeToShow || !(d.b5[this.feedbackTypeToShow] < d.b5[e])) && ((this.feedbackTypeToShow = e), this.showFeedbackModalDebounced(t));
    }
    constructor(...e) {
        super(...e),
            f(this, 'feedbackTypeToShow', null),
            f(
                this,
                'showFeedbackModalDebounced',
                r().debounce((e) => {
                    null != this.feedbackTypeToShow && (I(this.feedbackTypeToShow), (this.feedbackTypeToShow = null), e());
                }, _)
            );
    }
}
