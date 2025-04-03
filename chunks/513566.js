n.d(t, { Z: () => S }), n(47120);
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
    _ = n(67844),
    p = n(173507),
    h = n(592125),
    m = n(131951),
    g = n(944486),
    E = n(358085),
    b = n(998502),
    y = n(981631),
    v = n(388032);
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
class I extends u.Z {
    _initialize() {
        this.isSupported && (s.Z.subscribe('AUDIO_SET_MODE', this.handleViewUpdate), s.Z.subscribe('VOICE_CHANNEL_SELECT', this.handleViewUpdate), s.Z.subscribe('START_SESSION', this.handleViewUpdate), s.Z.subscribe('CONNECTION_OPEN', this.handleViewUpdate), s.Z.subscribe('CONNECTION_CLOSED', this.handleViewUpdate), s.Z.subscribe('CALL_CREATE', this.handleViewUpdate), s.Z.subscribe('CALL_UPDATE', this.handleViewUpdate), s.Z.subscribe('CALL_DELETE', this.handleViewUpdate), s.Z.subscribe('CHANNEL_DELETE', this.handleViewUpdate), s.Z.subscribe('VOICE_STATE_UPDATES', this.handleViewUpdate), s.Z.subscribe('AUDIO_TOGGLE_SELF_MUTE', this.handleViewUpdate), s.Z.subscribe('AUDIO_TOGGLE_SELF_DEAF', this.handleViewUpdate), s.Z.subscribe('AUDIO_TOGGLE_LOCAL_MUTE', this.handleViewUpdate), s.Z.subscribe('AUDIO_SET_LOCAL_VIDEO_DISABLED', this.handleViewUpdate), b.ZP.on('THUMBAR_BUTTONS_CLICKED', (e, t) => this.buttonClicked(t)));
    }
    _terminate() {
        this.isSupported && (s.Z.unsubscribe('AUDIO_SET_MODE', this.handleViewUpdate), s.Z.unsubscribe('VOICE_CHANNEL_SELECT', this.handleViewUpdate), s.Z.unsubscribe('START_SESSION', this.handleViewUpdate), s.Z.unsubscribe('CONNECTION_OPEN', this.handleViewUpdate), s.Z.unsubscribe('CONNECTION_CLOSED', this.handleViewUpdate), s.Z.unsubscribe('CALL_CREATE', this.handleViewUpdate), s.Z.unsubscribe('CALL_UPDATE', this.handleViewUpdate), s.Z.unsubscribe('CALL_DELETE', this.handleViewUpdate), s.Z.unsubscribe('CHANNEL_DELETE', this.handleViewUpdate), s.Z.unsubscribe('VOICE_STATE_UPDATES', this.handleViewUpdate), s.Z.unsubscribe('AUDIO_TOGGLE_SELF_MUTE', this.handleViewUpdate), s.Z.unsubscribe('AUDIO_TOGGLE_SELF_DEAF', this.handleViewUpdate), s.Z.unsubscribe('AUDIO_TOGGLE_LOCAL_MUTE', this.handleViewUpdate), s.Z.unsubscribe('AUDIO_SET_LOCAL_VIDEO_DISABLED', this.handleViewUpdate));
    }
    setThumbarButtons(e) {
        i()(this.prevButtons, e) || ((this.prevButtons = e), b.ZP.setThumbarButtons(e));
    }
    constructor(...e) {
        super(...e),
            O(this, 'callbackActions', {
                [b.tS.VIDEO]: () => {
                    m.Z.isVideoEnabled() ? l.Z.setVideoEnabled(!1) : (0, p.Z)(() => l.Z.setVideoEnabled(!0), y.IlC.APP);
                },
                [b.tS.MUTE]: () => l.Z.toggleSelfMute({ location: 'Thumbar' }),
                [b.tS.DEAFEN]: () => l.Z.toggleSelfDeaf({ location: 'Thumbar' }),
                [b.tS.DISCONNECT]: () => c.default.disconnect()
            }),
            O(this, 'isSupported', (0, E.isMac)() || (0, E.isWindows)()),
            O(this, 'prevButtons', []),
            O(this, 'buttonClicked', (e) => {
                if (!(e.buttonName in this.callbackActions)) return void console.error('ThumbarButtonsManager: Unknown callback eventName: "'.concat(e.buttonName, '"'), e);
                this.callbackActions[e.buttonName]();
            }),
            O(
                this,
                'handleViewUpdate',
                a().debounce(() => {
                    let e = g.Z.getVoiceChannelId();
                    if (null == e) return void this.setThumbarButtons([]);
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
                        c = (0, _.X)({
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
                            name: b.tS.VIDEO,
                            active: !r,
                            tooltip: c,
                            flags: i ? [] : ['disabled']
                        },
                        {
                            name: b.tS.MUTE,
                            active: t,
                            tooltip: t ? v.NW.string(v.t.YqAjX1) : v.NW.string(v.t['w4m94+'])
                        },
                        {
                            name: b.tS.DEAFEN,
                            active: n,
                            tooltip: n ? v.NW.string(v.t['2US87+']) : v.NW.string(v.t.wjcRFR)
                        },
                        {
                            name: b.tS.DISCONNECT,
                            active: !0,
                            tooltip: v.NW.string(v.t['6vrfgo'])
                        }
                    ]);
                }, 100)
            );
    }
}
let S = new I();
