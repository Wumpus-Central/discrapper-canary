n.d(t, { A: () => S }), n(896048);
var r = n(812729),
    i = n.n(r),
    a = n(735438),
    s = n.n(a),
    o = n(73153),
    l = n(827343),
    c = n(956793),
    u = n(272355),
    d = n(405018),
    f = n(927258),
    p = n(675991),
    _ = n(442353),
    h = n(734057),
    m = n(430452),
    g = n(309010),
    E = n(723702),
    b = n(837921),
    y = n(652215),
    O = n(985018);
function A(e, t, n) {
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
class v extends u.A {
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
            b.Ay.on("THUMBAR_BUTTONS_CLICKED", (e, t) => this.buttonClicked(t)));
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
    setThumbarButtons(e) {
        i()(this.prevButtons, e) || ((this.prevButtons = e), b.Ay.setThumbarButtons(e));
    }
    constructor(...e) {
        super(...e),
            A(this, "callbackActions", {
                [b.dv.VIDEO]: () => {
                    m.A.isVideoEnabled() ? l.A.setVideoEnabled(!1) : (0, _.A)(() => l.A.setVideoEnabled(!0), y.BRT.APP);
                },
                [b.dv.MUTE]: () => l.A.toggleSelfMute({ location: "Thumbar" }),
                [b.dv.DEAFEN]: () => l.A.toggleSelfDeaf({ location: "Thumbar" }),
                [b.dv.DISCONNECT]: () => c.default.disconnect(),
            }),
            A(this, "isSupported", (0, E.isMac)() || (0, E.isWindows)()),
            A(this, "prevButtons", []),
            A(this, "buttonClicked", (e) => {
                e.buttonName in this.callbackActions
                    ? this.callbackActions[e.buttonName]()
                    : console.error(
                          'ThumbarButtonsManager: Unknown callback eventName: "'.concat(e.buttonName, '"'),
                          e,
                      );
            }),
            A(
                this,
                "handleViewUpdate",
                s().debounce(() => {
                    let e = g.A.getVoiceChannelId();
                    if (null == e) return void this.setThumbarButtons([]);
                    let t = m.A.isSelfMute(),
                        n = m.A.isSelfDeaf(),
                        r = m.A.isVideoEnabled(),
                        i = m.A.isVideoAvailable(),
                        a = h.A.getChannel(e),
                        s = null == a || (0, f.r)(a),
                        { reachedLimit: o, limit: l } =
                            null != a
                                ? (0, d.M)(a)
                                : {
                                      reachedLimit: void 0,
                                      limit: void 0,
                                  },
                        c = (0, p.Q)({
                            enabled: r,
                            join: !1,
                            channel: a,
                            cameraUnavailable: !i,
                            hasPermission: s,
                            channelLimit: l,
                            channelLimitReached: o,
                        });
                    this.setThumbarButtons([
                        {
                            name: b.dv.VIDEO,
                            active: !r,
                            tooltip: c,
                            flags: i ? [] : ["disabled"],
                        },
                        {
                            name: b.dv.MUTE,
                            active: t,
                            tooltip: t ? O.intl.string(O.t.YqAjXy) : O.intl.string(O.t.w4m945),
                        },
                        {
                            name: b.dv.DEAFEN,
                            active: n,
                            tooltip: n ? O.intl.string(O.t["2US872"]) : O.intl.string(O.t.wjcRFX),
                        },
                        {
                            name: b.dv.DISCONNECT,
                            active: !0,
                            tooltip: O.intl.string(O.t["6vrfgt"]),
                        },
                    ]);
                }, 100),
            );
    }
}
let S = new v();
