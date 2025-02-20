n.d(t, { Z: () => I }), n(47120);
var r = n(348327),
    i = n.n(r),
    o = n(392711),
    a = n.n(o),
    s = n(570140),
    l = n(846027),
    c = n(287734),
    u = n(317770),
    d = n(829750),
    f = n(189771),
    p = n(67844),
    _ = n(173507),
    h = n(592125),
    m = n(131951),
    g = n(944486),
    E = n(358085),
    v = n(998502),
    b = n(981631),
    y = n(388032);
function O(e, t, n) {
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
class S extends u.Z {
    _initialize() {
        this.isSupported && (s.Z.subscribe('AUDIO_SET_MODE', this.handleViewUpdate), s.Z.subscribe('VOICE_CHANNEL_SELECT', this.handleViewUpdate), s.Z.subscribe('START_SESSION', this.handleViewUpdate), s.Z.subscribe('CONNECTION_OPEN', this.handleViewUpdate), s.Z.subscribe('CONNECTION_CLOSED', this.handleViewUpdate), s.Z.subscribe('CALL_CREATE', this.handleViewUpdate), s.Z.subscribe('CALL_UPDATE', this.handleViewUpdate), s.Z.subscribe('CALL_DELETE', this.handleViewUpdate), s.Z.subscribe('CHANNEL_DELETE', this.handleViewUpdate), s.Z.subscribe('VOICE_STATE_UPDATES', this.handleViewUpdate), s.Z.subscribe('AUDIO_TOGGLE_SELF_MUTE', this.handleViewUpdate), s.Z.subscribe('AUDIO_TOGGLE_SELF_DEAF', this.handleViewUpdate), s.Z.subscribe('AUDIO_TOGGLE_LOCAL_MUTE', this.handleViewUpdate), s.Z.subscribe('AUDIO_SET_LOCAL_VIDEO_DISABLED', this.handleViewUpdate), v.ZP.on('THUMBAR_BUTTONS_CLICKED', (e, t) => this.buttonClicked(t)));
    }
    _terminate() {
        this.isSupported && (s.Z.unsubscribe('AUDIO_SET_MODE', this.handleViewUpdate), s.Z.unsubscribe('VOICE_CHANNEL_SELECT', this.handleViewUpdate), s.Z.unsubscribe('START_SESSION', this.handleViewUpdate), s.Z.unsubscribe('CONNECTION_OPEN', this.handleViewUpdate), s.Z.unsubscribe('CONNECTION_CLOSED', this.handleViewUpdate), s.Z.unsubscribe('CALL_CREATE', this.handleViewUpdate), s.Z.unsubscribe('CALL_UPDATE', this.handleViewUpdate), s.Z.unsubscribe('CALL_DELETE', this.handleViewUpdate), s.Z.unsubscribe('CHANNEL_DELETE', this.handleViewUpdate), s.Z.unsubscribe('VOICE_STATE_UPDATES', this.handleViewUpdate), s.Z.unsubscribe('AUDIO_TOGGLE_SELF_MUTE', this.handleViewUpdate), s.Z.unsubscribe('AUDIO_TOGGLE_SELF_DEAF', this.handleViewUpdate), s.Z.unsubscribe('AUDIO_TOGGLE_LOCAL_MUTE', this.handleViewUpdate), s.Z.unsubscribe('AUDIO_SET_LOCAL_VIDEO_DISABLED', this.handleViewUpdate));
    }
    setThumbarButtons(e) {
        i()(this.prevButtons, e) || ((this.prevButtons = e), v.ZP.setThumbarButtons(e));
    }
    constructor(...e) {
        super(...e),
            O(this, 'callbackActions', {
                [v.tS.VIDEO]: () => {
                    m.Z.isVideoEnabled() ? l.Z.setVideoEnabled(!1) : (0, _.Z)(() => l.Z.setVideoEnabled(!0), b.IlC.APP);
                },
                [v.tS.MUTE]: () => l.Z.toggleSelfMute({ location: 'Thumbar' }),
                [v.tS.DEAFEN]: () => l.Z.toggleSelfDeaf({ location: 'Thumbar' }),
                [v.tS.DISCONNECT]: () => c.default.disconnect()
            }),
            O(this, 'isSupported', (0, E.isMac)() || (0, E.isWindows)()),
            O(this, 'prevButtons', []),
            O(this, 'buttonClicked', (e) => {
                if (!(e.buttonName in this.callbackActions)) {
                    console.error('ThumbarButtonsManager: Unknown callback eventName: "'.concat(e.buttonName, '"'), e);
                    return;
                }
                this.callbackActions[e.buttonName]();
            }),
            O(
                this,
                'handleViewUpdate',
                a().debounce(() => {
                    let e = g.Z.getVoiceChannelId();
                    if (null == e) {
                        this.setThumbarButtons([]);
                        return;
                    }
                    let t = m.Z.isSelfMute(),
                        n = m.Z.isSelfDeaf(),
                        r = m.Z.isVideoEnabled(),
                        i = m.Z.isVideoAvailable(),
                        o = h.Z.getChannel(e),
                        a = null == o || (0, f.y)(o),
                        { reachedLimit: s, limit: l } =
                            null != o
                                ? (0, d.t)(o)
                                : {
                                      reachedLimit: void 0,
                                      limit: void 0
                                  },
                        c = (0, p.X)({
                            enabled: r,
                            join: !1,
                            channel: o,
                            cameraUnavailable: !i,
                            hasPermission: a,
                            channelLimit: l,
                            channelLimitReached: s
                        });
                    this.setThumbarButtons([
                        {
                            name: v.tS.VIDEO,
                            active: !r,
                            tooltip: c,
                            flags: i ? [] : ['disabled']
                        },
                        {
                            name: v.tS.MUTE,
                            active: t,
                            tooltip: t ? y.NW.string(y.t.YqAjX1) : y.NW.string(y.t['w4m94+'])
                        },
                        {
                            name: v.tS.DEAFEN,
                            active: n,
                            tooltip: n ? y.NW.string(y.t['2US87+']) : y.NW.string(y.t.wjcRFR)
                        },
                        {
                            name: v.tS.DISCONNECT,
                            active: !0,
                            tooltip: y.NW.string(y.t['6vrfgo'])
                        }
                    ]);
                }, 100)
            );
    }
}
let I = new S();
