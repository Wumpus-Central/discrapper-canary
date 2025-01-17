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
    Z = r(314897),
    F = r(355863),
    V = r(131951),
    j = r(699516),
    H = r(944486),
    Y = r(594174),
    W = r(248402),
    K = r(33039),
    z = r(808506),
    q = r(451478),
    Q = r(626135),
    X = r(5192),
    J = r(51144),
    $ = r(484286),
    ee = r(822296),
    et = r(916771),
    en = r(792517),
    er = r(351483),
    ei = r(560688),
    ea = r(127608),
    es = r(76021),
    eo = r(981631),
    el = r(354459),
    eu = r(165586),
    ec = r(616926);
function ed(e, n, r) {
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
class ef extends s.PureComponent {
    get viewProperties() {
        let { participantOnScreen: e, currentUserId: n, channel: r } = this.props,
            i = (0, el._5)(e),
            a = null != e && e.type !== el.fO.ACTIVITY && e.user.id === n;
        return {
            canPopout: i && !a,
            canSettings: i && a,
            canStopStream: i,
            canSeeViewers: i,
            canSeeParticipantName: ((null == e ? void 0 : e.type) === el.fO.STREAM || (null == e ? void 0 : e.type) === el.fO.USER) && r.type !== eo.d4z.DM,
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
        return (0, el._5)(e) ? n.find((n) => (0, y.V9)(n) === e.id) : null;
    }
    getScreenMessage() {
        let { participantOnScreen: e, currentUserId: n } = this.props;
        if (!(0, el._5)(e)) return null;
        let r = this.activeStreamForSelectedParticipant;
        return null == r ? null : (0, A.Z)(r, e.user, e.user.id === n, this.streamerPaused);
    }
    componentDidMount() {
        let { channel: e } = this.props;
        Q.default.track(eo.rMx.VIDEO_LAYOUT_TOGGLED, {
            video_layout: 'pip',
            ...(0, E.AB)(e.id)
        });
    }
    componentWillUnmount() {
        let { channel: e } = this.props;
        Q.default.track(eo.rMx.VIDEO_LAYOUT_TOGGLED, {
            video_layout: v.Z.getLayout(e.id),
            ...(0, E.AB)(e.id)
        });
    }
    renderStreamState() {
        let e = this.activeStreamForSelectedParticipant,
            { participantOnScreen: n, width: r, isOverlayRenderingVideo: i } = this.props;
        switch (!0) {
            case (null == e ? void 0 : e.state) === eo.jm8.ENDED:
                return (0, a.jsx)(ee.Z, {
                    stream: e,
                    width: r
                });
            case (null == e ? void 0 : e.state) === eo.jm8.FAILED:
                return (0, a.jsx)(et.Z, {
                    stream: e,
                    width: r
                });
            case (null == n ? void 0 : n.type) === el.fO.HIDDEN_STREAM:
                return (0, a.jsx)(en.Z, {
                    participant: n,
                    width: r
                });
            case i:
                return (0, a.jsx)(er.Z, { width: r });
        }
        return null;
    }
    renderParticipantName() {
        let { channel: e, participantOnScreen: n } = this.props;
        if ((null == n ? void 0 : n.type) === el.fO.STREAM || (null == n ? void 0 : n.type) === el.fO.USER) {
            var r;
            let i = null !== (r = X.ZP.getNickname(e.getGuildId(), e.id, n.user)) && void 0 !== r ? r : J.ZP.getName(n.user);
            return (0, a.jsx)(f.Text, {
                variant: 'text-md/normal',
                color: 'always-white',
                className: eu.participantName,
                lineClamp: 1,
                children: i
            });
        }
        return null;
    }
    render() {
        let { channel: e, streamId: n, participantOnScreen: r, isVideoEnabled: i, width: s } = this.props,
            o = (0, b.F6)(e, Y.default, j.Z),
            l = (null == r ? void 0 : r.id) === Z.default.getId() && i,
            u = this.renderStreamState(),
            c = null;
        return (
            (null == r ? void 0 : r.type) !== el.fO.ACTIVITY &&
                (null != u
                    ? (c = u)
                    : ((null == r ? void 0 : r.type) === el.fO.USER || (null == r ? void 0 : r.type) === el.fO.STREAM) &&
                      (c = (0, a.jsx)($.Z, {
                          paused: this.streamerPaused,
                          streamId: n,
                          component: V.Z.getVideoComponent(),
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
                        className: ec.elevationHigh,
                        ...e,
                        children: c
                    });
                }
            })
        );
    }
    constructor(...e) {
        super(...e),
            ed(this, 'state', { screensharePopoutOpen: !1 }),
            ed(this, '_ref', s.createRef()),
            ed(this, 'handleVideo', (e) => {
                _.Z.setVideoEnabled(e);
            }),
            ed(this, 'handleEnableVideoWhenUnavailable', () => {
                let { isVideoAvailable: e } = this.props;
                e ? this.handleVideo(!0) : (0, ei.Z)();
            }),
            ed(this, 'handleJumpToChannel', () => {
                var e;
                let { channel: n } = this.props;
                (0, m.Ou)();
                let r = null !== (e = n.getGuildId()) && void 0 !== e ? e : eo.ME;
                (0, L.XU)(r, n.id), p.Z.channelListScrollTo(r, n.id);
                let i = this.activeStreamForSelectedParticipant;
                null != i && h.Z.selectParticipant(i.channelId, (0, y.V9)(i));
            }),
            ed(this, 'handleStartStream', () => {
                let { canGoLive: e, channel: n } = this.props,
                    r = n.getGuildId();
                if ((l()(null != r, 'Cannot go live in non guild channel'), !e)) return (0, ea.Z)();
                (0, es.Z)(r, n.id, eo.ZY5.GUILD_CHANNEL);
            }),
            ed(this, 'handleStopStream', () => {
                let { participantOnScreen: e } = this.props;
                l()((0, el._5)(e), 'cannot stop stream for non streamer'), (0, N.Z)(e.stream);
            }),
            ed(this, 'handleHidePIP', () => {
                let { channel: e } = this.props;
                g.Cp(e.id);
            }),
            ed(this, 'handleOpenPopout', () => {
                let { channel: e } = this.props;
                D.hP(e);
            }),
            ed(this, 'renderBottomLeftControls', () => {
                let { canSeeParticipantName: e } = this.viewProperties;
                return (0, a.jsx)(a.Fragment, { children: e ? this.renderParticipantName() : null });
            }),
            ed(this, 'renderBottomRightControls', () => {
                let { canSettings: e, canPopout: n, canDisconnect: r, canStopStream: i, canSeeViewers: s } = this.viewProperties;
                return (0, a.jsxs)(a.Fragment, {
                    children: [s ? this.renderViewersIcon() : null, e ? this.renderSettingsIcon() : null, n ? this.renderPopoutIcon() : null, i ? this.renderStopStreamButton() : null, r ? this.renderDisconnectButton() : null]
                });
            }),
            ed(this, 'renderDisconnectButton', () => (0, a.jsx)(M.Z, { className: eu.rightTrayIcon })),
            ed(this, 'renderStopStreamButton', () => {
                let { isSelf: e } = this.viewProperties;
                return (0, a.jsx)(U.Z, {
                    isSelfStream: e,
                    className: eu.rightTrayIcon,
                    onClick: this.handleStopStream
                });
            }),
            ed(this, 'renderViewersIcon', () => {
                let { participantOnScreen: e, channel: n } = this.props;
                return (
                    l()((0, el._5)(e) || (null == e ? void 0 : e.type) === el.fO.ACTIVITY, 'Cannot render participants for participant type '.concat(null == e ? void 0 : e.type)),
                    (0, a.jsx)(w.Z, {
                        children: (0, a.jsx)(T.Z, {
                            channelId: n.id,
                            guildId: n.getGuildId(),
                            className: eu.rightTrayIcon,
                            participant: e,
                            compact: !0
                        })
                    })
                );
            }),
            ed(this, 'renderPopoutIcon', () =>
                (0, a.jsx)(k.Z, {
                    className: eu.rightTrayIcon,
                    popoutOpen: !1,
                    onOpenPopout: this.handleOpenPopout,
                    onClosePopout: eo.VqG
                })
            ),
            ed(this, 'renderSettingsIcon', () => {
                let { participantOnScreen: e, activeStreams: n } = this.props;
                l()((0, el._5)(e), 'Cannot render settings for non stream participant');
                let r = n.find((n) => (0, y.V9)(n) === e.id);
                return null == r || r.state === eo.jm8.ENDED
                    ? null
                    : (0, a.jsx)(B.Z, {
                          stream: r,
                          className: eu.rightTrayIcon,
                          appContext: eo.IlC.APP
                      });
            });
    }
}
n.Z = d.ZP.connectStores([V.Z, v.Z, Z.default, W.Z, K.Z, G.Z, q.Z, O.Z, H.Z, F.Z, z.Z], (e) => {
    let { channel: n } = e,
        r = W.Z.getSpeaker(n.id),
        i = v.Z.getParticipant(n.id, r),
        a = c()(V.Z.getVideoDevices()).values().first(),
        s = null == a || a.disabled,
        o = null != i && i.type !== el.fO.ACTIVITY && i.type !== el.fO.HIDDEN_STREAM ? K.Z.getStreamId(i.user.id, n.getGuildId(), (0, I.Z)(i.type)) : null,
        l = !1 === s,
        u = !s && V.Z.isVideoEnabled(),
        d = (0, S.Z)(V.Z),
        f = Z.default.getId(),
        _ = G.Z.getCurrentUserActiveStream(),
        h = (0, R.Rv)([O.Z, H.Z, G.Z, v.Z, Z.default, F.Z, z.Z]);
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
        isMainWindowFocused: q.Z.isFocused(),
        isOverlayRenderingVideo: h
    };
})(ef);
