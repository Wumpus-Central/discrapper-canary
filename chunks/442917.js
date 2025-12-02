n.d(t, { Z: () => ep }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(512722),
    o = n.n(a),
    s = n(392711),
    l = n.n(s),
    c = n(442837),
    u = n(46973),
    d = n(481060),
    f = n(846027),
    p = n(475179),
    _ = n(925549),
    m = n(37234),
    h = n(519938),
    g = n(100527),
    E = n(367907),
    b = n(358221),
    y = n(414910),
    O = n(221888),
    v = n(522651),
    S = n(933557),
    I = n(502053),
    T = n(965048),
    A = n(569545),
    C = n(74299),
    N = n(863908),
    P = n(803647),
    R = n(266910),
    w = n(788983),
    D = n(703656),
    x = n(937995),
    L = n(618158),
    j = n(922745),
    M = n(197016),
    k = n(800965),
    U = n(445062),
    G = n(7188),
    Z = n(199902),
    B = n(314897),
    F = n(131951),
    V = n(699516),
    H = n(594174),
    Y = n(248402),
    W = n(33039),
    K = n(451478),
    z = n(626135),
    q = n(5192),
    X = n(51144),
    Q = n(484286),
    J = n(822296),
    $ = n(916771),
    ee = n(792517),
    et = n(351483),
    en = n(249212),
    er = n(560688),
    ei = n(981631),
    ea = n(354459),
    eo = n(306762),
    es = n(315091);
function el(e, t, n) {
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
function ec(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                el(e, t, n[t]);
            });
    }
    return e;
}
function eu(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function ed(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : eu(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
class ef extends i.PureComponent {
    get viewProperties() {
        let { participantOnScreen: e, currentUserId: t, channel: n } = this.props,
            r = (0, ea._5)(e),
            i = null != e && e.type !== ea.fO.ACTIVITY && e.user.id === t;
        return {
            canPopout: r && !i,
            canSettings: r && i,
            canStopStream: r,
            canSeeViewers: r,
            canSeeParticipantName:
                ((null == e ? void 0 : e.type) === ea.fO.STREAM || (null == e ? void 0 : e.type) === ea.fO.USER) &&
                n.type !== ei.d4z.DM,
            canDisconnect: !r,
            isSelf: i,
        };
    }
    get streamerPaused() {
        let { isMainWindowFocused: e, activeSelfStream: t, participantOnScreen: n } = this.props;
        return null != t && (null == n ? void 0 : n.id) === (0, A.V9)(t) && !e;
    }
    get activeStreamForSelectedParticipant() {
        let { participantOnScreen: e, activeStreams: t } = this.props;
        return (0, ea._5)(e) ? t.find((t) => (0, A.V9)(t) === e.id) : null;
    }
    getScreenMessage() {
        let { participantOnScreen: e, currentUserId: t } = this.props;
        if (!(0, ea._5)(e)) return null;
        let n = this.activeStreamForSelectedParticipant;
        return null == n ? null : (0, N.Z)(n, e.user, e.user.id === t, this.streamerPaused);
    }
    componentDidMount() {
        let { channel: e } = this.props;
        z.default.track(ei.rMx.VIDEO_LAYOUT_TOGGLED, ec({ video_layout: "pip" }, (0, E.AB)(e.id)));
    }
    componentWillUnmount() {
        let { channel: e } = this.props;
        z.default.track(ei.rMx.VIDEO_LAYOUT_TOGGLED, ec({ video_layout: b.Z.getLayout(e.id) }, (0, E.AB)(e.id)));
    }
    renderStreamState() {
        let e = this.activeStreamForSelectedParticipant,
            {
                participantOnScreen: t,
                width: n,
                isOverlayRenderingVideo: i,
                videoStreamError: a,
                cameraEncodeError: o,
            } = this.props;
        if (null != a && null == o) {
            if ((null == t ? void 0 : t.type) === ea.fO.STREAM)
                return (0, r.jsx)($.Z, {
                    stream: t.stream,
                    width: n,
                    avError: a,
                });
            else if ((null == t ? void 0 : t.type) === ea.fO.USER)
                return (0, r.jsx)(en.Z, {
                    userId: t.user.id,
                    width: n,
                    avError: a,
                });
        }
        switch (!0) {
            case (null == e ? void 0 : e.state) === ei.jm8.ENDED:
                return (0, r.jsx)(J.Z, {
                    stream: e,
                    width: n,
                });
            case (null == e ? void 0 : e.state) === ei.jm8.FAILED:
                return (0, r.jsx)($.Z, {
                    stream: e,
                    width: n,
                });
            case (null == t ? void 0 : t.type) === ea.fO.HIDDEN_STREAM:
                return (0, r.jsx)(ee.Z, {
                    participant: t,
                    width: n,
                });
            case i:
                return (0, r.jsx)(et.Z, { width: n });
        }
        return null;
    }
    renderParticipantName() {
        let { channel: e, participantOnScreen: t } = this.props;
        if ((null == t ? void 0 : t.type) === ea.fO.STREAM || (null == t ? void 0 : t.type) === ea.fO.USER) {
            var n;
            let i = null != (n = q.ZP.getNickname(e.getGuildId(), e.id, t.user)) ? n : X.ZP.getName(t.user);
            return (0, r.jsx)(d.Text, {
                variant: "text-md/normal",
                color: "always-white",
                className: eo.participantName,
                lineClamp: 1,
                children: i,
            });
        }
        return null;
    }
    render() {
        let { channel: e, streamId: t, participantOnScreen: n, isVideoEnabled: i, width: a } = this.props,
            o = (0, S.F6)(e, H.default, V.Z),
            s = (null == n ? void 0 : n.id) === B.default.getId() && i,
            l = this.renderStreamState(),
            c = this.activeStreamForSelectedParticipant,
            u = null;
        return (
            (null == n ? void 0 : n.type) !== ea.fO.ACTIVITY &&
                (null != l
                    ? (u = l)
                    : ((null == n ? void 0 : n.type) === ea.fO.USER ||
                          (null == n ? void 0 : n.type) === ea.fO.STREAM) &&
                      (u = (0, r.jsx)(Q.Z, {
                          paused: this.streamerPaused,
                          streamId: t,
                          component: F.Z.getVideoComponent(),
                          mirror: s,
                          children: (0, r.jsx)(R.Z, {
                              size: d.EFr.SIZE_80,
                              src: null == n ? void 0 : n.user.getAvatarURL(e.guild_id, 80),
                              "aria-label": null == n ? void 0 : n.user.username,
                              guildId: e.guild_id,
                              userId: null == n ? void 0 : n.user.id,
                          }),
                      }))),
            (0, r.jsx)(x.ZP, {
                timeout: 1800,
                children: (e) => {
                    var t;
                    return (0, r.jsx)(
                        j.Z,
                        ed(
                            ec(
                                {
                                    title: o,
                                    backgroundKey: null != (t = null == n ? void 0 : n.id) ? t : "",
                                    screenMessage: null == l ? this.getScreenMessage() : null,
                                    onJumpToChannel: this.handleJumpToChannel,
                                    onHide: this.handleHidePIP,
                                    renderBottomLeftControls: this.renderBottomLeftControls,
                                    renderBottomRightControls: this.renderBottomRightControls,
                                    preventIdleComponent: L.Z,
                                    width: a,
                                    className: es.elevationHigh,
                                    videoControlsClassName:
                                        (null == c ? void 0 : c.state) === ei.jm8.ENDED ? eo.videoControls : void 0,
                                },
                                e,
                            ),
                            { children: u },
                        ),
                    );
                },
            })
        );
    }
    constructor(...e) {
        super(...e),
            el(this, "state", { screensharePopoutOpen: !1 }),
            el(this, "_ref", i.createRef()),
            el(this, "handleVideo", (e) => {
                f.Z.setVideoEnabled(e);
            }),
            el(this, "handleEnableVideoWhenUnavailable", () => {
                let { isVideoAvailable: e } = this.props;
                e ? this.handleVideo(!0) : (0, er.Z)();
            }),
            el(this, "handleJumpToChannel", () => {
                var e;
                let { channel: t } = this.props;
                (0, m.Ou)();
                let n = null != (e = t.getGuildId()) ? e : ei.ME;
                (0, D.XU)(n, t.id), _.Z.channelListScrollTo(n, t.id);
                let r = this.activeStreamForSelectedParticipant;
                null != r && p.Z.selectParticipant(r.channelId, (0, A.V9)(r));
            }),
            el(this, "handleStopStream", () => {
                let { participantOnScreen: e } = this.props;
                o()((0, ea._5)(e), "cannot stop stream for non streamer"),
                    (0, v.v)(g.Z.VIDEO_PIP, v.d.STREAM, !1),
                    (0, P.Z)(e.stream);
            }),
            el(this, "handleHidePIP", () => {
                let { channel: e } = this.props;
                h.Cp(e.id);
            }),
            el(this, "handleOpenPopout", () => {
                let { channel: e } = this.props;
                (0, v.v)(g.Z.VIDEO_PIP, v.d.POPOUT, !0), w.openChannelCallPopout(e);
            }),
            el(this, "renderBottomLeftControls", () => {
                let { canSeeParticipantName: e } = this.viewProperties;
                return e ? this.renderParticipantName() : null;
            }),
            el(this, "renderBottomRightControls", () => {
                let {
                    canSettings: e,
                    canPopout: t,
                    canDisconnect: n,
                    canStopStream: i,
                    canSeeViewers: a,
                } = this.viewProperties;
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        a ? this.renderViewersIcon() : null,
                        e ? this.renderSettingsIcon() : null,
                        t ? this.renderPopoutIcon() : null,
                        i ? this.renderStopStreamButton() : null,
                        n ? this.renderDisconnectButton() : null,
                    ],
                });
            }),
            el(this, "renderDisconnectButton", () =>
                (0, r.jsx)(M.Z, {
                    className: eo.rightTrayIcon,
                    onClick: () => (0, v.v)(g.Z.VIDEO_PIP, v.d.DISCONNECT),
                }),
            ),
            el(this, "renderStopStreamButton", () => {
                let { isSelf: e } = this.viewProperties;
                return (0, r.jsx)(U.Z, {
                    isSelfStream: e,
                    className: eo.rightTrayIcon,
                    onClick: this.handleStopStream,
                });
            }),
            el(this, "renderViewersIcon", () => {
                let { participantOnScreen: e, channel: t } = this.props;
                return (
                    o()(
                        (0, ea._5)(e) || (null == e ? void 0 : e.type) === ea.fO.ACTIVITY,
                        "Cannot render participants for participant type ".concat(null == e ? void 0 : e.type),
                    ),
                    (0, r.jsx)(L.Z, {
                        children: (0, r.jsx)(O.Z, {
                            channelId: t.id,
                            guildId: t.getGuildId(),
                            className: eo.rightTrayIcon,
                            participant: e,
                            compact: !0,
                        }),
                    })
                );
            }),
            el(this, "renderPopoutIcon", () =>
                (0, r.jsx)(k.Z, {
                    className: eo.rightTrayIcon,
                    popoutOpen: !1,
                    onOpenPopout: this.handleOpenPopout,
                    onClosePopout: ei.VqG,
                }),
            ),
            el(this, "renderSettingsIcon", () => {
                let { participantOnScreen: e, activeStreams: t } = this.props;
                o()((0, ea._5)(e), "Cannot render settings for non stream participant");
                let n = t.find((t) => (0, A.V9)(t) === e.id);
                return null == n || n.state === ei.jm8.ENDED
                    ? null
                    : (0, r.jsx)(G.Z, {
                          stream: n,
                          className: eo.rightTrayIcon,
                          appContext: ei.IlC.APP,
                          location: g.Z.VIDEO_PIP,
                      });
            });
    }
}
function ep(e) {
    let { channel: t, width: n } = e,
        i = (0, c.e7)([Y.Z], () => Y.Z.getSpeaker(t.id)),
        a = (0, c.e7)([b.Z], () => b.Z.getParticipant(t.id, i), [t.id, i]),
        o = (0, c.e7)([F.Z], () => l()(F.Z.getVideoDevices()).values().first()),
        s = (0, c.e7)(
            [W.Z],
            () =>
                null != a && a.type !== ea.fO.ACTIVITY && a.type !== ea.fO.HIDDEN_STREAM
                    ? W.Z.getStreamId(a.user.id, t.getGuildId(), (0, y.Z)(a.type))
                    : null,
            [a, t],
        ),
        d = null == o || o.disabled,
        f = !d,
        p = (0, c.e7)([F.Z], () => !d && F.Z.isVideoEnabled(), [d]),
        _ = (0, c.e7)([F.Z], () => (0, C.Z)(F.Z)),
        m = (0, c.e7)([B.default], () => B.default.getId()),
        h = (0, c.e7)([Z.Z], () => Z.Z.getCurrentUserActiveStream()),
        g = null != a && "user" in a ? a.user.id : "",
        E = (0, T.Z)((null == a ? void 0 : a.type) === ea.fO.STREAM ? u.Yn.STREAM : u.Yn.DEFAULT, g),
        O = (0, I.Z)(g),
        v = (0, c.Wu)([Z.Z], () => Z.Z.getAllActiveStreams());
    return (0, r.jsx)(ef, {
        channel: t,
        streamId: s,
        participantOnScreen: a,
        isVideoAvailable: f,
        isVideoEnabled: p,
        canGoLive: _,
        currentUserId: m,
        activeStreams: v,
        activeSelfStream: h,
        isMainWindowFocused: K.Z.isFocused(),
        width: n,
        isOverlayRenderingVideo: !1,
        videoStreamError: E,
        cameraEncodeError: O,
    });
}
