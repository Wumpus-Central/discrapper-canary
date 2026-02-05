"use strict";
n.d(t, { A: () => S });
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
    p = n(442353),
    h = n(734057),
    m = n(430452),
    g = n(309010),
    E = n(723702),
    A = n(837921),
    I = n(652215),
    T = n(985018);
class y extends c.A {
    callbackActions = {
        [A.dv.VIDEO]: () => {
            m.A.isVideoEnabled() ? l.A.setVideoEnabled(!1) : (0, p.A)(() => l.A.setVideoEnabled(!0), I.BRT.APP);
        },
        [A.dv.MUTE]: () => l.A.toggleSelfMute({ location: "Thumbar" }),
        [A.dv.DEAFEN]: () => l.A.toggleSelfDeaf({ location: "Thumbar" }),
        [A.dv.DISCONNECT]: () => u.default.disconnect(),
    };
    isSupported = (0, E.isMac)() || (0, E.isWindows)();
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
            A.Ay.on("THUMBAR_BUTTONS_CLICKED", (e, t) => this.buttonClicked(t)));
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
        let e = g.A.getVoiceChannelId();
        if (null == e) return void this.setThumbarButtons([]);
        let t = m.A.isSelfMute(),
            n = m.A.isSelfDeaf(),
            r = m.A.isVideoEnabled(),
            i = m.A.isVideoAvailable(),
            a = h.A.getChannel(e),
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
            { name: A.dv.VIDEO, active: !r, tooltip: u, flags: i ? [] : ["disabled"] },
            { name: A.dv.MUTE, active: t, tooltip: t ? T.intl.string(T.t.YqAjXy) : T.intl.string(T.t.w4m945) },
            { name: A.dv.DEAFEN, active: n, tooltip: n ? T.intl.string(T.t["2US872"]) : T.intl.string(T.t.wjcRFX) },
            { name: A.dv.DISCONNECT, active: !0, tooltip: T.intl.string(T.t["6vrfgt"]) },
        ]);
    }, 100);
    setThumbarButtons(e) {
        i()(this.prevButtons, e) || ((this.prevButtons = e), A.Ay.setThumbarButtons(e));
    }
}
let S = new y();
