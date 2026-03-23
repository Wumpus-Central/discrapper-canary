"use strict";
n.d(t, { A: () => v });
var r = n(812729),
    i = n.n(r),
    s = n(735438),
    a = n.n(s),
    o = n(141931),
    l = n(73153),
    u = n(827343),
    c = n(956793),
    d = n(272355),
    _ = n(405018),
    f = n(704877),
    p = n(675991),
    h = n(442353),
    m = n(734057),
    E = n(430452),
    g = n(309010),
    A = n(723702),
    I = n(837921),
    T = n(652215),
    S = n(985018);
class y extends d.A {
    callbackActions = {
        [o.dv.VIDEO]: () => {
            E.Ay.isVideoEnabled() ? u.A.setVideoEnabled(!1) : (0, h.A)(() => u.A.setVideoEnabled(!0), T.BRT.APP);
        },
        [o.dv.MUTE]: () => u.A.toggleSelfMute({ location: "Thumbar" }),
        [o.dv.DEAFEN]: () => u.A.toggleSelfDeaf({ location: "Thumbar" }),
        [o.dv.DISCONNECT]: () => c.default.disconnect(),
    };
    isSupported = (0, A.isMac)() || (0, A.isWindows)();
    prevButtons = [];
    _initialize() {
        this.isSupported &&
            (l.h.subscribe("AUDIO_SET_MODE", this.handleViewUpdate),
            l.h.subscribe("VOICE_CHANNEL_SELECT", this.handleViewUpdate),
            l.h.subscribe("START_SESSION", this.handleViewUpdate),
            l.h.subscribe("CONNECTION_OPEN", this.handleViewUpdate),
            l.h.subscribe("CONNECTION_CLOSED", this.handleViewUpdate),
            l.h.subscribe("CALL_CREATE", this.handleViewUpdate),
            l.h.subscribe("CALL_UPDATE", this.handleViewUpdate),
            l.h.subscribe("CALL_DELETE", this.handleViewUpdate),
            l.h.subscribe("CHANNEL_DELETE", this.handleViewUpdate),
            l.h.subscribe("VOICE_STATE_UPDATES", this.handleViewUpdate),
            l.h.subscribe("AUDIO_TOGGLE_SELF_MUTE", this.handleViewUpdate),
            l.h.subscribe("AUDIO_TOGGLE_SELF_DEAF", this.handleViewUpdate),
            l.h.subscribe("AUDIO_TOGGLE_LOCAL_MUTE", this.handleViewUpdate),
            l.h.subscribe("AUDIO_SET_LOCAL_VIDEO_DISABLED", this.handleViewUpdate),
            I.Ay.on("THUMBAR_BUTTONS_CLICKED", (e, t) => this.buttonClicked(t)));
    }
    _terminate() {
        this.isSupported &&
            (l.h.unsubscribe("AUDIO_SET_MODE", this.handleViewUpdate),
            l.h.unsubscribe("VOICE_CHANNEL_SELECT", this.handleViewUpdate),
            l.h.unsubscribe("START_SESSION", this.handleViewUpdate),
            l.h.unsubscribe("CONNECTION_OPEN", this.handleViewUpdate),
            l.h.unsubscribe("CONNECTION_CLOSED", this.handleViewUpdate),
            l.h.unsubscribe("CALL_CREATE", this.handleViewUpdate),
            l.h.unsubscribe("CALL_UPDATE", this.handleViewUpdate),
            l.h.unsubscribe("CALL_DELETE", this.handleViewUpdate),
            l.h.unsubscribe("CHANNEL_DELETE", this.handleViewUpdate),
            l.h.unsubscribe("VOICE_STATE_UPDATES", this.handleViewUpdate),
            l.h.unsubscribe("AUDIO_TOGGLE_SELF_MUTE", this.handleViewUpdate),
            l.h.unsubscribe("AUDIO_TOGGLE_SELF_DEAF", this.handleViewUpdate),
            l.h.unsubscribe("AUDIO_TOGGLE_LOCAL_MUTE", this.handleViewUpdate),
            l.h.unsubscribe("AUDIO_SET_LOCAL_VIDEO_DISABLED", this.handleViewUpdate));
    }
    buttonClicked = (e) => {
        e.buttonName in this.callbackActions
            ? this.callbackActions[e.buttonName]()
            : console.error(`ThumbarButtonsManager: Unknown callback eventName: "${e.buttonName}"`, e);
    };
    handleViewUpdate = a().debounce(() => {
        let e = g.A.getVoiceChannelId();
        if (null == e) return void this.setThumbarButtons([]);
        let t = E.Ay.isSelfMute(),
            n = E.Ay.isSelfDeaf(),
            r = E.Ay.isVideoEnabled(),
            i = E.Ay.isVideoAvailable(),
            s = m.A.getChannel(e),
            a = null == s || (0, f.r)(s),
            { reachedLimit: l, limit: u } = null != s ? (0, _.M)(s) : { reachedLimit: void 0, limit: void 0 },
            c = (0, p.Q)({
                enabled: r,
                join: !1,
                channel: s,
                cameraUnavailable: !i,
                hasPermission: a,
                channelLimit: u,
                channelLimitReached: l,
            });
        this.setThumbarButtons([
            { name: o.dv.VIDEO, active: !r, tooltip: c, flags: i ? [] : ["disabled"] },
            { name: o.dv.MUTE, active: t, tooltip: t ? S.intl.string(S.t.YqAjXy) : S.intl.string(S.t.w4m945) },
            { name: o.dv.DEAFEN, active: n, tooltip: n ? S.intl.string(S.t["2US872"]) : S.intl.string(S.t.wjcRFX) },
            { name: o.dv.DISCONNECT, active: !0, tooltip: S.intl.string(S.t["6vrfgt"]) },
        ]);
    }, 100);
    setThumbarButtons(e) {
        i()(this.prevButtons, e) || ((this.prevButtons = e), I.Ay.setThumbarButtons(e));
    }
}
let v = new y();
