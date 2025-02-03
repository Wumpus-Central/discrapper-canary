n.d(t, { Z: () => S }), n(47120);
var i = n(348327),
    r = n.n(i),
    a = n(392711),
    s = n.n(a),
    o = n(570140),
    l = n(846027),
    u = n(287734),
    c = n(317770),
    d = n(829750),
    f = n(189771),
    _ = n(67844),
    p = n(173507),
    h = n(592125),
    m = n(131951),
    g = n(944486),
    E = n(358085),
    v = n(998502),
    y = n(981631),
    I = n(388032);
function b(e, t, n) {
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
class T extends c.Z {
    _initialize() {
        this.isSupported && (o.Z.subscribe('AUDIO_SET_MODE', this.handleViewUpdate), o.Z.subscribe('VOICE_CHANNEL_SELECT', this.handleViewUpdate), o.Z.subscribe('START_SESSION', this.handleViewUpdate), o.Z.subscribe('CONNECTION_OPEN', this.handleViewUpdate), o.Z.subscribe('CONNECTION_CLOSED', this.handleViewUpdate), o.Z.subscribe('CALL_CREATE', this.handleViewUpdate), o.Z.subscribe('CALL_UPDATE', this.handleViewUpdate), o.Z.subscribe('CALL_DELETE', this.handleViewUpdate), o.Z.subscribe('CHANNEL_DELETE', this.handleViewUpdate), o.Z.subscribe('VOICE_STATE_UPDATES', this.handleViewUpdate), o.Z.subscribe('AUDIO_TOGGLE_SELF_MUTE', this.handleViewUpdate), o.Z.subscribe('AUDIO_TOGGLE_SELF_DEAF', this.handleViewUpdate), o.Z.subscribe('AUDIO_TOGGLE_LOCAL_MUTE', this.handleViewUpdate), o.Z.subscribe('AUDIO_SET_LOCAL_VIDEO_DISABLED', this.handleViewUpdate), v.ZP.on('THUMBAR_BUTTONS_CLICKED', (e, t) => this.buttonClicked(t)));
    }
    _terminate() {
        this.isSupported && (o.Z.unsubscribe('AUDIO_SET_MODE', this.handleViewUpdate), o.Z.unsubscribe('VOICE_CHANNEL_SELECT', this.handleViewUpdate), o.Z.unsubscribe('START_SESSION', this.handleViewUpdate), o.Z.unsubscribe('CONNECTION_OPEN', this.handleViewUpdate), o.Z.unsubscribe('CONNECTION_CLOSED', this.handleViewUpdate), o.Z.unsubscribe('CALL_CREATE', this.handleViewUpdate), o.Z.unsubscribe('CALL_UPDATE', this.handleViewUpdate), o.Z.unsubscribe('CALL_DELETE', this.handleViewUpdate), o.Z.unsubscribe('CHANNEL_DELETE', this.handleViewUpdate), o.Z.unsubscribe('VOICE_STATE_UPDATES', this.handleViewUpdate), o.Z.unsubscribe('AUDIO_TOGGLE_SELF_MUTE', this.handleViewUpdate), o.Z.unsubscribe('AUDIO_TOGGLE_SELF_DEAF', this.handleViewUpdate), o.Z.unsubscribe('AUDIO_TOGGLE_LOCAL_MUTE', this.handleViewUpdate), o.Z.unsubscribe('AUDIO_SET_LOCAL_VIDEO_DISABLED', this.handleViewUpdate));
    }
    setThumbarButtons(e) {
        r()(this.prevButtons, e) || ((this.prevButtons = e), v.ZP.setThumbarButtons(e));
    }
    constructor(...e) {
        super(...e),
            b(this, 'callbackActions', {
                [v.tS.VIDEO]: () => {
                    m.Z.isVideoEnabled() ? l.Z.setVideoEnabled(!1) : (0, p.Z)(() => l.Z.setVideoEnabled(!0), y.IlC.APP);
                },
                [v.tS.MUTE]: () => l.Z.toggleSelfMute({ location: 'Thumbar' }),
                [v.tS.DEAFEN]: () => l.Z.toggleSelfDeaf({ location: 'Thumbar' }),
                [v.tS.DISCONNECT]: () => u.default.disconnect()
            }),
            b(this, 'isSupported', (0, E.isMac)() || (0, E.isWindows)()),
            b(this, 'prevButtons', []),
            b(this, 'buttonClicked', (e) => {
                if (!(e.buttonName in this.callbackActions)) {
                    console.error('ThumbarButtonsManager: Unknown callback eventName: "'.concat(e.buttonName, '"'), e);
                    return;
                }
                this.callbackActions[e.buttonName]();
            }),
            b(
                this,
                'handleViewUpdate',
                s().debounce(() => {
                    let e = g.Z.getVoiceChannelId();
                    if (null == e) {
                        this.setThumbarButtons([]);
                        return;
                    }
                    let t = m.Z.isSelfMute(),
                        n = m.Z.isSelfDeaf(),
                        i = m.Z.isVideoEnabled(),
                        r = m.Z.isVideoAvailable(),
                        a = h.Z.getChannel(e),
                        s = null == a || (0, f.y)(a),
                        { reachedLimit: o, limit: l } =
                            null != a
                                ? (0, d.t)(a)
                                : {
                                      reachedLimit: void 0,
                                      limit: void 0
                                  },
                        u = (0, _.X)({
                            enabled: i,
                            join: !1,
                            channel: a,
                            cameraUnavailable: !r,
                            hasPermission: s,
                            channelLimit: l,
                            channelLimitReached: o
                        });
                    this.setThumbarButtons([
                        {
                            name: v.tS.VIDEO,
                            active: !i,
                            tooltip: u,
                            flags: r ? [] : ['disabled']
                        },
                        {
                            name: v.tS.MUTE,
                            active: t,
                            tooltip: t ? I.intl.string(I.t.YqAjX1) : I.intl.string(I.t['w4m94+'])
                        },
                        {
                            name: v.tS.DEAFEN,
                            active: n,
                            tooltip: n ? I.intl.string(I.t['2US87+']) : I.intl.string(I.t.wjcRFR)
                        },
                        {
                            name: v.tS.DISCONNECT,
                            active: !0,
                            tooltip: I.intl.string(I.t['6vrfgo'])
                        }
                    ]);
                }, 100)
            );
    }
}
let S = new T();
