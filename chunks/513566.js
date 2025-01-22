var i = r(47120);
var a = r(348327),
    o = r.n(a),
    s = r(392711),
    l = r.n(s),
    u = r(570140),
    c = r(846027),
    d = r(287734),
    f = r(317770),
    p = r(829750),
    h = r(189771),
    _ = r(67844),
    m = r(173507),
    g = r(592125),
    E = r(131951),
    v = r(944486),
    y = r(358085),
    b = r(998502),
    I = r(981631),
    T = r(388032);
function S(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
class A extends f.Z {
    _initialize() {
        if (!!this.isSupported) u.Z.subscribe('AUDIO_SET_MODE', this.handleViewUpdate), u.Z.subscribe('VOICE_CHANNEL_SELECT', this.handleViewUpdate), u.Z.subscribe('START_SESSION', this.handleViewUpdate), u.Z.subscribe('CONNECTION_OPEN', this.handleViewUpdate), u.Z.subscribe('CONNECTION_CLOSED', this.handleViewUpdate), u.Z.subscribe('CALL_CREATE', this.handleViewUpdate), u.Z.subscribe('CALL_UPDATE', this.handleViewUpdate), u.Z.subscribe('CALL_DELETE', this.handleViewUpdate), u.Z.subscribe('CHANNEL_DELETE', this.handleViewUpdate), u.Z.subscribe('VOICE_STATE_UPDATES', this.handleViewUpdate), u.Z.subscribe('AUDIO_TOGGLE_SELF_MUTE', this.handleViewUpdate), u.Z.subscribe('AUDIO_TOGGLE_SELF_DEAF', this.handleViewUpdate), u.Z.subscribe('AUDIO_TOGGLE_LOCAL_MUTE', this.handleViewUpdate), u.Z.subscribe('AUDIO_SET_LOCAL_VIDEO_DISABLED', this.handleViewUpdate), b.ZP.on('THUMBAR_BUTTONS_CLICKED', (e, n) => this.buttonClicked(n));
    }
    _terminate() {
        if (!!this.isSupported) u.Z.unsubscribe('AUDIO_SET_MODE', this.handleViewUpdate), u.Z.unsubscribe('VOICE_CHANNEL_SELECT', this.handleViewUpdate), u.Z.unsubscribe('START_SESSION', this.handleViewUpdate), u.Z.unsubscribe('CONNECTION_OPEN', this.handleViewUpdate), u.Z.unsubscribe('CONNECTION_CLOSED', this.handleViewUpdate), u.Z.unsubscribe('CALL_CREATE', this.handleViewUpdate), u.Z.unsubscribe('CALL_UPDATE', this.handleViewUpdate), u.Z.unsubscribe('CALL_DELETE', this.handleViewUpdate), u.Z.unsubscribe('CHANNEL_DELETE', this.handleViewUpdate), u.Z.unsubscribe('VOICE_STATE_UPDATES', this.handleViewUpdate), u.Z.unsubscribe('AUDIO_TOGGLE_SELF_MUTE', this.handleViewUpdate), u.Z.unsubscribe('AUDIO_TOGGLE_SELF_DEAF', this.handleViewUpdate), u.Z.unsubscribe('AUDIO_TOGGLE_LOCAL_MUTE', this.handleViewUpdate), u.Z.unsubscribe('AUDIO_SET_LOCAL_VIDEO_DISABLED', this.handleViewUpdate);
    }
    setThumbarButtons(e) {
        !o()(this.prevButtons, e) && ((this.prevButtons = e), b.ZP.setThumbarButtons(e));
    }
    constructor(...e) {
        super(...e),
            S(this, 'callbackActions', {
                [b.tS.VIDEO]: () => {
                    E.Z.isVideoEnabled() ? c.Z.setVideoEnabled(!1) : (0, m.Z)(() => c.Z.setVideoEnabled(!0), I.IlC.APP);
                },
                [b.tS.MUTE]: () => c.Z.toggleSelfMute({ location: 'Thumbar' }),
                [b.tS.DEAFEN]: () => c.Z.toggleSelfDeaf({ location: 'Thumbar' }),
                [b.tS.DISCONNECT]: () => d.default.disconnect()
            }),
            S(this, 'isSupported', (0, y.isMac)() || (0, y.isWindows)()),
            S(this, 'prevButtons', []),
            S(this, 'buttonClicked', (e) => {
                if (!(e.buttonName in this.callbackActions)) {
                    console.error('ThumbarButtonsManager: Unknown callback eventName: "'.concat(e.buttonName, '"'), e);
                    return;
                }
                this.callbackActions[e.buttonName]();
            }),
            S(
                this,
                'handleViewUpdate',
                l().debounce(() => {
                    let e = v.Z.getVoiceChannelId();
                    if (null == e) {
                        this.setThumbarButtons([]);
                        return;
                    }
                    let n = E.Z.isSelfMute(),
                        r = E.Z.isSelfDeaf(),
                        i = E.Z.isVideoEnabled(),
                        a = E.Z.isVideoAvailable(),
                        o = g.Z.getChannel(e),
                        s = null == o || (0, h.y)(o),
                        { reachedLimit: l, limit: u } =
                            null != o
                                ? (0, p.t)(o)
                                : {
                                      reachedLimit: void 0,
                                      limit: void 0
                                  },
                        c = (0, _.X)({
                            enabled: i,
                            join: !1,
                            channel: o,
                            cameraUnavailable: !a,
                            hasPermission: s,
                            channelLimit: u,
                            channelLimitReached: l
                        });
                    this.setThumbarButtons([
                        {
                            name: b.tS.VIDEO,
                            active: !i,
                            tooltip: c,
                            flags: a ? [] : ['disabled']
                        },
                        {
                            name: b.tS.MUTE,
                            active: n,
                            tooltip: n ? T.intl.string(T.t.YqAjX1) : T.intl.string(T.t['w4m94+'])
                        },
                        {
                            name: b.tS.DEAFEN,
                            active: r,
                            tooltip: r ? T.intl.string(T.t['2US87+']) : T.intl.string(T.t.wjcRFR)
                        },
                        {
                            name: b.tS.DISCONNECT,
                            active: !0,
                            tooltip: T.intl.string(T.t['6vrfgo'])
                        }
                    ]);
                }, 100)
            );
    }
}
n.Z = new A();
