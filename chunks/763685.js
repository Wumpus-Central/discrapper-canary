"use strict";
n.d(t, { A: () => v });
var r = n(812729),
    i = n.n(r),
    a = n(735438),
    s = n.n(a),
    o = n(73153),
    l = n(827343),
    u = n(956793),
    c = n(272355),
    d = n(405018),
    _ = n(704877),
    f = n(675991),
    h = n(442353),
    p = n(734057),
    g = n(430452),
    E = n(309010),
    A = n(723702),
    I = n(837921),
    T = n(652215),
    y = n(985018);
class S extends c.A {
    callbackActions = {
        [I.dv.VIDEO]: () => {
            g.Ay.isVideoEnabled() ? l.A.setVideoEnabled(!1) : (0, h.A)(() => l.A.setVideoEnabled(!0), T.BRT.APP);
        },
        [I.dv.MUTE]: () => l.A.toggleSelfMute({ location: "Thumbar" }),
        [I.dv.DEAFEN]: () => l.A.toggleSelfDeaf({ location: "Thumbar" }),
        [I.dv.DISCONNECT]: () => u.default.disconnect(),
    };
    isSupported = (0, A.isMac)() || (0, A.isWindows)();
    prevButtons = [];
    _initialize() {
        this.isSupported &&
            (o.h.subscribe("AUDIO_SET_MODE", this.handleViewUpdate),
            o.h.subscribe("VOICE_CHANNEL_SELECT", this.handleViewUpdate),
            o.h.subscribe("START_SESSION", this.handleViewUpdate),
            o.h.subscribe("CONNECTION_OPEN", this.handleViewUpdate),
            o.h.subscribe("CONNECTION_CLOSED", this.handleViewUpdate),
            o.h.subscribe("CALL_CREATE", this.handleViewUpdate),
            o.h.subscribe("CALL_UPDATE", this.handleViewUpdate),
            o.h.subscribe("CALL_DELETE", this.handleViewUpdate),
            o.h.subscribe("CHANNEL_DELETE", this.handleViewUpdate),
            o.h.subscribe("VOICE_STATE_UPDATES", this.handleViewUpdate),
            o.h.subscribe("AUDIO_TOGGLE_SELF_MUTE", this.handleViewUpdate),
            o.h.subscribe("AUDIO_TOGGLE_SELF_DEAF", this.handleViewUpdate),
            o.h.subscribe("AUDIO_TOGGLE_LOCAL_MUTE", this.handleViewUpdate),
            o.h.subscribe("AUDIO_SET_LOCAL_VIDEO_DISABLED", this.handleViewUpdate),
            I.Ay.on("THUMBAR_BUTTONS_CLICKED", (e, t) => this.buttonClicked(t)));
    }
    _terminate() {
        this.isSupported &&
            (o.h.unsubscribe("AUDIO_SET_MODE", this.handleViewUpdate),
            o.h.unsubscribe("VOICE_CHANNEL_SELECT", this.handleViewUpdate),
            o.h.unsubscribe("START_SESSION", this.handleViewUpdate),
            o.h.unsubscribe("CONNECTION_OPEN", this.handleViewUpdate),
            o.h.unsubscribe("CONNECTION_CLOSED", this.handleViewUpdate),
            o.h.unsubscribe("CALL_CREATE", this.handleViewUpdate),
            o.h.unsubscribe("CALL_UPDATE", this.handleViewUpdate),
            o.h.unsubscribe("CALL_DELETE", this.handleViewUpdate),
            o.h.unsubscribe("CHANNEL_DELETE", this.handleViewUpdate),
            o.h.unsubscribe("VOICE_STATE_UPDATES", this.handleViewUpdate),
            o.h.unsubscribe("AUDIO_TOGGLE_SELF_MUTE", this.handleViewUpdate),
            o.h.unsubscribe("AUDIO_TOGGLE_SELF_DEAF", this.handleViewUpdate),
            o.h.unsubscribe("AUDIO_TOGGLE_LOCAL_MUTE", this.handleViewUpdate),
            o.h.unsubscribe("AUDIO_SET_LOCAL_VIDEO_DISABLED", this.handleViewUpdate));
    }
    buttonClicked = (e) => {
        e.buttonName in this.callbackActions
            ? this.callbackActions[e.buttonName]()
            : console.error(`ThumbarButtonsManager: Unknown callback eventName: "${e.buttonName}"`, e);
    };
    handleViewUpdate = s().debounce(() => {
        let e = E.A.getVoiceChannelId();
        if (null == e) return void this.setThumbarButtons([]);
        let t = g.Ay.isSelfMute(),
            n = g.Ay.isSelfDeaf(),
            r = g.Ay.isVideoEnabled(),
            i = g.Ay.isVideoAvailable(),
            a = p.A.getChannel(e),
            s = null == a || (0, _.r)(a),
            { reachedLimit: o, limit: l } = null != a ? (0, d.M)(a) : { reachedLimit: void 0, limit: void 0 },
            u = (0, f.Q)({
                enabled: r,
                join: !1,
                channel: a,
                cameraUnavailable: !i,
                hasPermission: s,
                channelLimit: l,
                channelLimitReached: o,
            });
        this.setThumbarButtons([
            { name: I.dv.VIDEO, active: !r, tooltip: u, flags: i ? [] : ["disabled"] },
            { name: I.dv.MUTE, active: t, tooltip: t ? y.intl.string(y.t.YqAjXy) : y.intl.string(y.t.w4m945) },
            { name: I.dv.DEAFEN, active: n, tooltip: n ? y.intl.string(y.t["2US872"]) : y.intl.string(y.t.wjcRFX) },
            { name: I.dv.DISCONNECT, active: !0, tooltip: y.intl.string(y.t["6vrfgt"]) },
        ]);
    }, 100);
    setThumbarButtons(e) {
        i()(this.prevButtons, e) || ((this.prevButtons = e), I.Ay.setThumbarButtons(e));
    }
}
let v = new S();
