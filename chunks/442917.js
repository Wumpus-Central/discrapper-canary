var i = r(47120);
var a = r(200651),
    s = r(192379),
    o = r(512722),
    l = r.n(o),
    u = r(392711),
    c = r.n(u),
    d = r(442837),
    f = r(481060),
    _ = r(846027),
    h = r(475179),
    p = r(925549),
    m = r(37234),
    g = r(519938),
    E = r(367907),
    v = r(358221),
    I = r(414910),
    T = r(221888),
    b = r(933557),
    y = r(569545),
    S = r(74299),
    A = r(863908),
    N = r(803647),
    C = r(266910),
    R = r(388627),
    O = r(522474),
    D = r(788983),
    L = r(703656),
    x = r(937995),
    w = r(618158),
    P = r(922745),
    M = r(197016),
    k = r(800965),
    U = r(445062),
    B = r(7188),
    G = r(199902),
    F = r(314897),
    Z = r(131951),
    V = r(699516),
    j = r(594174),
    H = r(248402),
    Y = r(33039),
    W = r(451478),
    K = r(626135),
    z = r(5192),
    q = r(51144),
    Q = r(484286),
    X = r(822296),
    J = r(916771),
    $ = r(792517),
    ee = r(351483),
    et = r(560688),
    en = r(127608),
    er = r(76021),
    ei = r(981631),
    ea = r(354459),
    es = r(165586),
    eo = r(616926);
function el(e, n, r) {
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
class eu extends s.PureComponent {
    get viewProperties() {
        let { participantOnScreen: e, currentUserId: n, channel: r } = this.props,
            i = (0, ea._5)(e),
            a = null != e && e.type !== ea.fO.ACTIVITY && e.user.id === n;
        return {
            canPopout: i && !a,
            canSettings: i && a,
            canStopStream: i,
            canSeeViewers: i,
            canSeeParticipantName: ((null == e ? void 0 : e.type) === ea.fO.STREAM || (null == e ? void 0 : e.type) === ea.fO.USER) && r.type !== ei.d4z.DM,
            canDisconnect: !i,
            isSelf: a
        };
    }
    get streamerPaused() {
        let { isMainWindowFocused: e, activeSelfStream: n, participantOnScreen: r } = this.props;
        return null != n && (null == r ? void 0 : r.id) === (0, y.V9)(n) && !e;
    }
    get activeStreamForSelectedParticipant() {
        let { participantOnScreen: e, activeStreams: n } = this.props;
        return (0, ea._5)(e) ? n.find((n) => (0, y.V9)(n) === e.id) : null;
    }
    getScreenMessage() {
        let { participantOnScreen: e, currentUserId: n } = this.props;
        if (!(0, ea._5)(e)) return null;
        let r = this.activeStreamForSelectedParticipant;
        return null == r ? null : (0, A.Z)(r, e.user, e.user.id === n, this.streamerPaused);
    }
    componentDidMount() {
        let { channel: e } = this.props;
        K.default.track(ei.rMx.VIDEO_LAYOUT_TOGGLED, {
            video_layout: 'pip',
            ...(0, E.AB)(e.id)
        });
    }
    componentWillUnmount() {
        let { channel: e } = this.props;
        K.default.track(ei.rMx.VIDEO_LAYOUT_TOGGLED, {
            video_layout: v.Z.getLayout(e.id),
            ...(0, E.AB)(e.id)
        });
    }
    renderStreamState() {
        let e = this.activeStreamForSelectedParticipant,
            { participantOnScreen: n, width: r, isOverlayOpen: i } = this.props;
        switch (!0) {
            case (null == e ? void 0 : e.state) === ei.jm8.ENDED:
                return (0, a.jsx)(X.Z, {
                    stream: e,
                    width: r
                });
            case (null == e ? void 0 : e.state) === ei.jm8.FAILED:
                return (0, a.jsx)(J.Z, {
                    stream: e,
                    width: r
                });
            case (null == n ? void 0 : n.type) === ea.fO.HIDDEN_STREAM:
                return (0, a.jsx)($.Z, {
                    participant: n,
                    width: r
                });
            case i:
                return (0, a.jsx)(ee.Z, { width: r });
        }
        return null;
    }
    renderParticipantName() {
        let { channel: e, participantOnScreen: n } = this.props;
        if ((null == n ? void 0 : n.type) === ea.fO.STREAM || (null == n ? void 0 : n.type) === ea.fO.USER) {
            var r;
            let i = null !== (r = z.ZP.getNickname(e.getGuildId(), e.id, n.user)) && void 0 !== r ? r : q.ZP.getName(n.user);
            return (0, a.jsx)(f.Text, {
                variant: 'text-md/normal',
                color: 'always-white',
                className: es.participantName,
                lineClamp: 1,
                children: i
            });
        }
        return null;
    }
    render() {
        let { channel: e, streamId: n, participantOnScreen: r, isVideoEnabled: i, width: s } = this.props,
            o = (0, b.F6)(e, j.default, V.Z),
            l = (null == r ? void 0 : r.id) === F.default.getId() && i,
            u = this.renderStreamState(),
            c = null;
        return (
            (null == r ? void 0 : r.type) !== ea.fO.ACTIVITY &&
                (null != u
                    ? (c = u)
                    : ((null == r ? void 0 : r.type) === ea.fO.USER || (null == r ? void 0 : r.type) === ea.fO.STREAM) &&
                      (c = (0, a.jsx)(Q.Z, {
                          paused: this.streamerPaused,
                          streamId: n,
                          component: Z.Z.getVideoComponent(),
                          mirror: l,
                          children: (0, a.jsx)(C.Z, {
                              size: f.AvatarSizes.SIZE_80,
                              src: null == r ? void 0 : r.user.getAvatarURL(e.guild_id, 80),
                              'aria-label': null == r ? void 0 : r.user.username
                          })
                      }))),
            (0, a.jsx)(x.ZP, {
                timeout: 1800,
                children: (e) => {
                    var n;
                    return (0, a.jsx)(P.Z, {
                        title: o,
                        backgroundKey: null !== (n = null == r ? void 0 : r.id) && void 0 !== n ? n : '',
                        screenMessage: null == u ? this.getScreenMessage() : null,
                        onJumpToChannel: this.handleJumpToChannel,
                        onHide: this.handleHidePIP,
                        renderBottomLeftControls: this.renderBottomLeftControls,
                        renderBottomRightControls: this.renderBottomRightControls,
                        preventIdleComponent: w.Z,
                        width: s,
                        className: eo.elevationHigh,
                        ...e,
                        children: c
                    });
                }
            })
        );
    }
    constructor(...e) {
        super(...e),
            el(this, 'state', { screensharePopoutOpen: !1 }),
            el(this, '_ref', s.createRef()),
            el(this, 'handleVideo', (e) => {
                _.Z.setVideoEnabled(e);
            }),
            el(this, 'handleEnableVideoWhenUnavailable', () => {
                let { isVideoAvailable: e } = this.props;
                e ? this.handleVideo(!0) : (0, et.Z)();
            }),
            el(this, 'handleJumpToChannel', () => {
                var e;
                let { channel: n } = this.props;
                (0, m.Ou)();
                let r = null !== (e = n.getGuildId()) && void 0 !== e ? e : ei.ME;
                (0, L.XU)(r, n.id), p.Z.channelListScrollTo(r, n.id);
                let i = this.activeStreamForSelectedParticipant;
                null != i && h.Z.selectParticipant(i.channelId, (0, y.V9)(i));
            }),
            el(this, 'handleStartStream', () => {
                let { canGoLive: e, channel: n } = this.props,
                    r = n.getGuildId();
                if ((l()(null != r, 'Cannot go live in non guild channel'), !e)) return (0, en.Z)();
                (0, er.Z)(r, n.id, ei.ZY5.GUILD_CHANNEL);
            }),
            el(this, 'handleStopStream', () => {
                let { participantOnScreen: e } = this.props;
                l()((0, ea._5)(e), 'cannot stop stream for non streamer'), (0, N.Z)(e.stream);
            }),
            el(this, 'handleHidePIP', () => {
                let { channel: e } = this.props;
                g.Cp(e.id);
            }),
            el(this, 'handleOpenPopout', () => {
                let { channel: e } = this.props;
                D.hP(e);
            }),
            el(this, 'renderBottomLeftControls', () => {
                let { canSeeParticipantName: e } = this.viewProperties;
                return (0, a.jsx)(a.Fragment, { children: e ? this.renderParticipantName() : null });
            }),
            el(this, 'renderBottomRightControls', () => {
                let { canSettings: e, canPopout: n, canDisconnect: r, canStopStream: i, canSeeViewers: s } = this.viewProperties;
                return (0, a.jsxs)(a.Fragment, {
                    children: [s ? this.renderViewersIcon() : null, e ? this.renderSettingsIcon() : null, n ? this.renderPopoutIcon() : null, i ? this.renderStopStreamButton() : null, r ? this.renderDisconnectButton() : null]
                });
            }),
            el(this, 'renderDisconnectButton', () => (0, a.jsx)(M.Z, { className: es.rightTrayIcon })),
            el(this, 'renderStopStreamButton', () => {
                let { isSelf: e } = this.viewProperties;
                return (0, a.jsx)(U.Z, {
                    isSelfStream: e,
                    className: es.rightTrayIcon,
                    onClick: this.handleStopStream
                });
            }),
            el(this, 'renderViewersIcon', () => {
                let { participantOnScreen: e, channel: n } = this.props;
                return (
                    l()((0, ea._5)(e) || (null == e ? void 0 : e.type) === ea.fO.ACTIVITY, 'Cannot render participants for participant type '.concat(null == e ? void 0 : e.type)),
                    (0, a.jsx)(w.Z, {
                        children: (0, a.jsx)(T.Z, {
                            channelId: n.id,
                            guildId: n.getGuildId(),
                            className: es.rightTrayIcon,
                            participant: e,
                            compact: !0
                        })
                    })
                );
            }),
            el(this, 'renderPopoutIcon', () =>
                (0, a.jsx)(k.Z, {
                    className: es.rightTrayIcon,
                    popoutOpen: !1,
                    onOpenPopout: this.handleOpenPopout,
                    onClosePopout: ei.VqG
                })
            ),
            el(this, 'renderSettingsIcon', () => {
                let { participantOnScreen: e, activeStreams: n } = this.props;
                l()((0, ea._5)(e), 'Cannot render settings for non stream participant');
                let r = n.find((n) => (0, y.V9)(n) === e.id);
                return null == r || r.state === ei.jm8.ENDED
                    ? null
                    : (0, a.jsx)(B.Z, {
                          stream: r,
                          className: es.rightTrayIcon,
                          appContext: ei.IlC.APP
                      });
            });
    }
}
n.Z = d.ZP.connectStores([Z.Z, v.Z, F.default, H.Z, Y.Z, G.Z, W.Z, O.Z], (e) => {
    let { channel: n } = e,
        r = H.Z.getSpeaker(n.id),
        i = v.Z.getParticipant(n.id, r),
        a = c()(Z.Z.getVideoDevices()).values().first(),
        s = null == a || a.disabled,
        o = null != i && i.type !== ea.fO.ACTIVITY && i.type !== ea.fO.HIDDEN_STREAM ? Y.Z.getStreamId(i.user.id, n.getGuildId(), (0, I.Z)(i.type)) : null,
        l = !1 === s,
        u = !s && Z.Z.isVideoEnabled(),
        d = (0, S.Z)(Z.Z),
        f = F.default.getId(),
        _ = G.Z.getCurrentUserActiveStream(),
        h = (0, R._v)(O.Z);
    return {
        channel: n,
        streamId: o,
        participantOnScreen: i,
        isVideoAvailable: l,
        isVideoEnabled: u,
        canGoLive: d,
        currentUserId: f,
        activeStreams: G.Z.getAllActiveStreams(),
        activeSelfStream: _,
        isMainWindowFocused: W.Z.isFocused(),
        isOverlayOpen: h
    };
})(eu);
