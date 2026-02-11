"use strict";
n.d(t, { A: () => ei });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(311907),
    o = n(827734),
    d = n(990078),
    c = n(319060),
    u = n(397927),
    h = n(442433),
    p = n(391973),
    _ = n(684013),
    A = n(401843),
    f = n(717558),
    g = n(429913),
    m = n(47167),
    x = n(235986),
    E = n(15285),
    y = n(769015),
    S = n(652896),
    v = n(277680),
    C = n(118277),
    I = n(905552),
    N = n(22705),
    T = n(994314),
    b = n(63995),
    O = n(69407),
    D = n(520006),
    j = n(352018),
    w = n(481947),
    R = n(616356),
    L = n(961350),
    k = n(734057),
    M = n(760751),
    P = n(430452),
    G = n(309010),
    U = n(485296),
    V = n(157257),
    z = n(607567),
    H = n(256415),
    W = n(996439),
    K = n(427262),
    B = n(9302),
    Y = n(31284),
    F = n(74441),
    Z = n(799808),
    X = n(855790),
    J = n(994322),
    Q = n(652215),
    q = n(731854),
    $ = n(985018),
    ee = n(279952);
function et(e) {
    let {
            flipped: t = !1,
            locked: n = !1,
            user: l,
            nick: o,
            displayNameMode: d,
            displayUserMode: c,
            size: u = Q.OSZ.LARGE,
            onClick: h,
            onContextMenu: p,
            context: _,
            guildId: A,
            voiceState: g,
        } = e,
        m = (0, J.A)({ location: "overlay_voice_widget" }),
        x = (0, r.bG)([H.default], () => H.default.showKeybindIndicators),
        E = (0, r.bG)([L.default], () => L.default.getId()),
        y = (0, r.bG)([P.Ay], () => P.Ay.isLocalMute(l.id)),
        S = (0, r.bG)([R.A], () => R.A.getCurrentUserActiveStream()),
        v = (0, r.yK)([R.A], () => (null != S ? R.A.getViewerIds(S) : [])),
        C = (0, f.A)({ userId: l.id, context: _ }),
        I = (0, r.bG)([U.A], () => U.A.isPrioritySpeaker(l.id, _)),
        N = (0, r.bG)([R.A], () => null != R.A.getStreamForUser(l.id, A)),
        T = s.useMemo(() => null != S && S.ownerId !== l.id && v.includes(l.id), [S, l.id, v]);
    if (c === Q.f5z.ONLY_WHILE_SPEAKING && n && !C) return null;
    let b = l.id === E,
        { mute: O, selfMute: D, suppress: j, deaf: k, selfDeaf: M } = g,
        G = m && x,
        V = D && (!b || !G);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(w.Ay, {
                guildId: A,
                onClick: n ? void 0 : (e) => h?.(e, l),
                onContextMenu: n ? void 0 : (e) => p?.(e, l),
                className: a()(ee.TX, { [ee.zj]: !C, [ee.bG]: !n }),
                user: l,
                nick: o,
                speaking: !1,
                flipped: t,
                isStreaming: N,
                iconClassName: a()(ee.Ow, { [ee.xt]: n }),
                isWatching: T,
                isOverlay: !0,
                size: u,
                priority: I,
                mute: O || V || y,
                localMute: y,
                serverMute: O || j,
                deaf: k || M,
                serverDeaf: k,
                userNameClassName: a()(ee.Xh, {
                    [ee.xt]: n,
                    [ee.R]: n && (d === Q.pwA.NEVER || (!C && d === Q.pwA.ONLY_WHILE_SPEAKING)),
                }),
            }),
            b && G && (0, i.jsx)(F.A, { value: D, action: Q.hCu.TOGGLE_MUTE, shouldShow: !O && !j }),
        ],
    });
}
class en extends s.PureComponent {
    static defaultProps = { context: q.x.DEFAULT };
    handleUserContextMenu = (e, t) => {
        let { context: s } = this.props;
        (0, h.L3)(e, async () => {
            let { default: e } = await Promise.all([n.e("97262"), n.e("32418"), n.e("22252")]).then(n.bind(n, 668569));
            return (n) => (0, i.jsx)(e, { ...n, user: t, showMediaItems: !0, mediaEngineContext: s });
        });
    };
    handleOpenVoiceSettings = () => {
        let { context: e, channel: t, title: s } = this.props;
        (0, u.mMO)(async () => {
            let { default: l } = await n.e("18912").then(n.bind(n, 880510));
            return (n) => (0, i.jsx)(l, { ...n, mediaEngineContext: e, subtitle: null != t ? void 0 : s });
        });
    };
    handlePin = () => {
        let e = !this.props.pinned;
        _.A.track(Q.HAw.OVERLAY_PIN_TOGGLED, {
            pinned: e,
            guild_id: this.props.channel?.guild_id,
            channel_id: this.props.channel?.id,
            channel_type: this.props.channel?.type,
            widget_type: Q.uss.VOICE,
        });
        let { id: t } = this.props;
        (0, p.v0)(t);
    };
    handleStopStream = () => {
        let { stream: e } = this.props;
        null != e && A.vN((0, S._z)(e));
    };
    renderVoiceUsers() {
        let {
                context: e,
                sortedVoiceStates: t,
                displayNameMode: n,
                displayUserMode: s,
                locked: l,
                isPreviewingInGame: r,
                channel: o,
                anchor: d,
                avatarSizeMode: u,
            } = this.props,
            h = null != d.right,
            p = t.map((t) => {
                let { user: a, voiceState: d, member: c } = t;
                if (null == a || null == o || null == e) return null;
                let p = l || r;
                return (0, i.jsx)(
                    et,
                    {
                        guildId: o?.guild_id,
                        user: a,
                        nick: c?.nick ?? K.Ay.getName(a),
                        flipped: h,
                        voiceState: d,
                        displayNameMode: n,
                        displayUserMode: s,
                        size: u,
                        locked: p,
                        onContextMenu: this.handleUserContextMenu,
                        onClick: this.handleUserContextMenu,
                        context: e,
                    },
                    a.id,
                );
            });
        return (0, i.jsx)(X.Ay.Body, {
            className: a()({ [c.A.VOICE_WIDGET_TOP_MARGIN]: l, [ee.mn]: l }),
            children: (0, i.jsx)(w.Wr, { className: ee.tA, children: p }),
        });
    }
    renderHeader() {
        let { pinned: e, title: t, isPreviewingInGame: n } = this.props;
        return (0, i.jsxs)(X.Ay.Bar, {
            className: a()(ee.bl, { [ee.VH]: n }),
            children: [
                (0, i.jsxs)(X.Ay.Content, {
                    dynamicSize: !0,
                    className: a()(ee.Qs, { [ee.R]: n }),
                    children: [
                        (0, i.jsx)(u.WP0, {
                            size: "custom",
                            color: o.A.unsafe_rawColors.WHITE.css,
                            width: 20,
                            height: 20,
                            className: a()(ee.Kk, ee.zj, ee.co),
                        }),
                        (0, i.jsx)(u.HKD, {
                            size: "custom",
                            color: o.A.unsafe_rawColors.WHITE.css,
                            width: 20,
                            height: 20,
                            className: a()(ee.Kk, ee.zj, ee.Xk),
                        }),
                        (0, i.jsx)(u.Text, {
                            variant: "text-md/normal",
                            style: { color: o.A.unsafe_rawColors.PRIMARY_200.css },
                            className: ee.DD,
                            children: t,
                        }),
                    ],
                }),
                n
                    ? null
                    : (0, i.jsx)(X.Ay.Icon, {
                          icon: u.Zes,
                          label: $.intl.string($.t.NiTd0e),
                          onClick: this.handleOpenVoiceSettings,
                          tooltipPosition: "left",
                          size: 18,
                      }),
                n
                    ? null
                    : (0, i.jsx)(X.Ay.Icon, {
                          icon: e ? u.hl9 : u.qgw,
                          label: e ? $.intl.string($.t.cSu80j) : $.intl.string($.t.cM8Vnm),
                          onClick: this.handlePin,
                          tooltipPosition: "left",
                          size: 18,
                          isActive: e,
                      }),
            ],
        });
    }
    renderStreamerSettings() {
        let {
            locked: e,
            pinned: t,
            isPreviewingInGame: n,
            channel: s,
            application: l,
            streamMetadata: r,
            streamApplication: o,
            stream: c,
        } = this.props;
        if (e || null == c || null == s) return null;
        let { sanitizedTitle: h, title: p } = (0, v.A)(r);
        return (0, i.jsx)(X.Ay.Bar, {
            className: a()(ee.Wm, { [ee.R]: n, [ee.CW]: !t }),
            children: (0, i.jsxs)(X.Ay.Content, {
                className: ee.Vb,
                dynamicSize: !0,
                children: [
                    (0, i.jsxs)("div", {
                        className: ee.gk,
                        children: [
                            o?.id != null && o.id === l?.id
                                ? (0, i.jsx)(y.A, { className: ee.Gt, game: l })
                                : (0, i.jsx)(C.A, { title: h }),
                            (0, i.jsxs)(x.A, {
                                direction: x.A.Direction.VERTICAL,
                                justify: x.A.Justify.BETWEEN,
                                className: ee.gA,
                                children: [
                                    (0, i.jsx)(u.Text, {
                                        className: ee.$A,
                                        variant: "text-sm/normal",
                                        children: $.intl.string($.t.XKYej5),
                                    }),
                                    (0, i.jsx)(T.A, { children: o?.name ?? p }),
                                ],
                            }),
                        ],
                    }),
                    (0, i.jsxs)(x.A, {
                        grow: 0,
                        children: [
                            (0, i.jsx)("div", {
                                className: ee.yf,
                                children: (0, i.jsx)(D.A, {
                                    stream: c,
                                    iconClassName: ee.Nd,
                                    appContext: Q.BRT.OVERLAY,
                                }),
                            }),
                            (0, i.jsx)("div", {
                                className: ee.yf,
                                children: (0, i.jsx)(j.A, { stream: c, appContext: Q.BRT.OVERLAY }),
                            }),
                            (0, i.jsx)("div", {
                                className: ee.yf,
                                children: (0, i.jsx)(d.m, {
                                    asContainer: !0,
                                    text: $.intl.string($.t.S5anIc),
                                    children: (0, i.jsx)(u.DUT, {
                                        onClick: this.handleStopStream,
                                        "aria-label": $.intl.string($.t.S5anIc),
                                        children: (0, i.jsx)(u.GT3, {
                                            size: "md",
                                            color: "currentColor",
                                            className: ee.Nd,
                                        }),
                                    }),
                                }),
                            }),
                        ],
                    }),
                ],
            }),
        });
    }
    componentDidMount() {
        (0, Z.j_)(this.props, this.shouldDisplay());
    }
    componentDidUpdate(e) {
        (0, Z.Mw)(e, this.props, this.shouldDisplay);
    }
    shouldDisplay() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props,
            { context: t, locked: n, pinned: i, sortedVoiceStates: s, channel: l } = e;
        return 0 !== s.length && null != t && null != l && (!n || !!i);
    }
    render() {
        let { context: e, lobbyId: t, locked: n, pinned: s, isPreviewingInGame: l, channel: r } = this.props;
        if (null == r || null == e || !this.shouldDisplay()) return null;
        let o = Q.UVF.UNPINNED;
        return (
            s && (o = Q.UVF.PINNED),
            l && (o = Q.UVF.IN_GAME_PREVIEW),
            n && (o = Q.UVF.IN_GAME),
            (0, i.jsxs)(X.Ay, {
                type: o,
                width: 380,
                children: [
                    n ? null : this.renderHeader(),
                    this.renderVoiceUsers(),
                    this.renderStreamerSettings(),
                    n
                        ? null
                        : (0, i.jsx)(Y.A, {
                              className: a()({ [ee.VH]: l }),
                              contentClassName: a()({ [ee.R]: l }),
                              channel: r,
                              lobbyId: t,
                              context: e,
                              pinned: s,
                          }),
                ],
            })
        );
    }
}
function ei(e) {
    let t = (0, r.bG)([G.A, k.A], () => k.A.getChannel(G.A.getVoiceChannelId())),
        n = (0, m.Ay)(t),
        l = (function () {
            let [e] = (0, r.bG)(
                    [z.Ay, b.A, G.A, k.A],
                    () => {
                        let e = k.A.getChannel(G.A.getVoiceChannelId());
                        return null == e
                            ? [[], -1]
                            : e.isGuildStageVoice()
                              ? [b.A.getMutableParticipants(e.id, O.ip.SPEAKER), b.A.getParticipantsVersion(e.id)]
                              : [z.Ay.getVoiceStatesForChannel(e), z.Ay.getVoiceStateVersion(e.getGuildId())];
                    },
                    [],
                    W.D,
                ),
                t = (0, r.bG)([L.default], () => L.default.getId()),
                n = (0, J.A)({ location: "voice_widget" });
            return s.useMemo(
                () => (n ? [...e].sort((e, n) => (e.user.id === t ? -1 : +(n.user.id === t))) : e),
                [e, t, n],
            );
        })(),
        a = (0, r.bG)([R.A], () => R.A.getStreamerActiveStreamMetadata()),
        o = (0, r.bG)([E.Ay, V.A, M.A], () => {
            let e = (0, I.A)(E.Ay, V.A);
            return null != e ? M.A.getGameByGameData(e)?.id : null;
        }),
        d = (0, g.h)(o),
        c = (0, r.cf)([E.Ay, V.A, R.A, H.default], () => {
            let e = (0, I.A)(E.Ay, V.A),
                t = R.A.getCurrentUserActiveStream();
            return {
                displayUserMode: H.default.getDisplayUserMode(),
                displayNameMode: H.default.getDisplayNameMode(),
                avatarSizeMode: H.default.getAvatarSizeMode(),
                streamApplication: a?.pid === (0, B.getPID)() ? (0, N.A)(e) : null,
                stream: t,
            };
        });
    return (0, i.jsx)(en, {
        ...c,
        application: d,
        ...e,
        sortedVoiceStates: l,
        channel: t,
        title: n ?? "",
        streamMetadata: a,
        streamApplication: c.streamApplication ?? { id: null, name: a?.sourceName },
    });
}
