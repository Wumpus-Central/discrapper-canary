"use strict";
n.d(t, { A: () => ee });
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
    A = n(684013),
    f = n(401843),
    g = n(717558),
    _ = n(429913),
    m = n(47167),
    E = n(235986),
    x = n(15285),
    y = n(769015),
    v = n(652896),
    S = n(277680),
    C = n(118277),
    I = n(905552),
    N = n(22705),
    T = n(994314),
    O = n(63995),
    b = n(69407),
    j = n(520006),
    D = n(352018),
    R = n(481947),
    w = n(616356),
    L = n(734057),
    M = n(760751),
    k = n(430452),
    P = n(309010),
    G = n(485296),
    U = n(157257),
    V = n(607567),
    z = n(256415),
    H = n(996439),
    W = n(427262),
    K = n(9302),
    B = n(31284),
    Y = n(799808),
    F = n(855790),
    Z = n(652215),
    J = n(731854),
    X = n(985018),
    Q = n(262554);
function q(e) {
    let {
            flipped: t = !1,
            locked: n = !1,
            user: l,
            nick: o,
            displayNameMode: d,
            displayUserMode: c,
            size: u = Z.OSZ.LARGE,
            onClick: h,
            onContextMenu: p,
            context: A,
            guildId: f,
            voiceState: _,
        } = e,
        m = (0, r.bG)([k.Ay], () => k.Ay.isLocalMute(l.id)),
        E = (0, r.bG)([w.A], () => w.A.getCurrentUserActiveStream()),
        x = (0, r.yK)([w.A], () => (null != E ? w.A.getViewerIds(E) : [])),
        y = (0, g.A)({ userId: l.id, context: A }),
        v = (0, r.bG)([G.A], () => G.A.isPrioritySpeaker(l.id, A)),
        S = (0, r.bG)([w.A], () => null != w.A.getStreamForUser(l.id, f)),
        C = s.useMemo(() => null != E && E.ownerId !== l.id && x.includes(l.id), [E, l.id, x]);
    if (c === Z.f5z.ONLY_WHILE_SPEAKING && n && !y) return null;
    let { mute: I, selfMute: N, suppress: T, deaf: O, selfDeaf: b } = _;
    return (0, i.jsx)(R.Ay, {
        guildId: f,
        onClick: n ? void 0 : (e) => h?.(e, l),
        onContextMenu: n ? void 0 : (e) => p?.(e, l),
        className: a()(Q.TX, { [Q.zj]: !y, [Q.bG]: !n }),
        user: l,
        nick: o,
        speaking: !1,
        flipped: t,
        isStreaming: S,
        iconClassName: a()(Q.Ow, { [Q.xt]: n }),
        isWatching: C,
        isOverlay: !0,
        size: u,
        priority: v,
        mute: I || N || m,
        localMute: m,
        serverMute: I || T,
        deaf: O || b,
        serverDeaf: O,
        userNameClassName: a()(Q.Xh, {
            [Q.xt]: n,
            [Q.R]: n && (d === Z.pwA.NEVER || (!y && d === Z.pwA.ONLY_WHILE_SPEAKING)),
        }),
    });
}
class $ extends s.PureComponent {
    static defaultProps = { context: J.x.DEFAULT };
    handleUserContextMenu = (e, t) => {
        let { context: s } = this.props;
        (0, h.L3)(e, async () => {
            let { default: e } = await Promise.all([n.e("97262"), n.e("32418"), n.e("93382")]).then(n.bind(n, 668569));
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
        A.A.track(Z.HAw.OVERLAY_PIN_TOGGLED, {
            pinned: e,
            guild_id: this.props.channel?.guild_id,
            channel_id: this.props.channel?.id,
            channel_type: this.props.channel?.type,
            widget_type: Z.uss.VOICE,
        });
        let { id: t } = this.props;
        (0, p.v0)(t);
    };
    handleStopStream = () => {
        let { stream: e } = this.props;
        null != e && f.vN((0, v._z)(e));
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
                    q,
                    {
                        guildId: o?.guild_id,
                        user: a,
                        nick: c?.nick ?? W.Ay.getName(a),
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
        return (0, i.jsx)(F.Ay.Body, {
            className: a()({ [c.A.VOICE_WIDGET_TOP_MARGIN]: l, [Q.mn]: l }),
            children: (0, i.jsx)(R.Wr, { className: Q.tA, children: p }),
        });
    }
    renderHeader() {
        let { pinned: e, title: t, isPreviewingInGame: n } = this.props;
        return (0, i.jsxs)(F.Ay.Bar, {
            className: a()(Q.bl, { [Q.VH]: n }),
            children: [
                (0, i.jsxs)(F.Ay.Content, {
                    dynamicSize: !0,
                    className: a()(Q.Qs, { [Q.R]: n }),
                    children: [
                        (0, i.jsx)(u.WP0, {
                            size: "custom",
                            color: o.A.unsafe_rawColors.WHITE.css,
                            width: 20,
                            height: 20,
                            className: a()(Q.Kk, Q.zj, Q.co),
                        }),
                        (0, i.jsx)(u.HKD, {
                            size: "custom",
                            color: o.A.unsafe_rawColors.WHITE.css,
                            width: 20,
                            height: 20,
                            className: a()(Q.Kk, Q.zj, Q.Xk),
                        }),
                        (0, i.jsx)(u.Text, {
                            variant: "text-md/normal",
                            style: { color: o.A.unsafe_rawColors.PRIMARY_200.css },
                            className: Q.DD,
                            children: t,
                        }),
                    ],
                }),
                n
                    ? null
                    : (0, i.jsx)(F.Ay.Icon, {
                          icon: u.Zes,
                          label: X.intl.string(X.t.NiTd0e),
                          onClick: this.handleOpenVoiceSettings,
                          tooltipPosition: "left",
                          size: 18,
                      }),
                n
                    ? null
                    : (0, i.jsx)(F.Ay.Icon, {
                          icon: e ? u.hl9 : u.qgw,
                          label: e ? X.intl.string(X.t.cSu80j) : X.intl.string(X.t.cM8Vnm),
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
        let { sanitizedTitle: h, title: p } = (0, S.A)(r);
        return (0, i.jsx)(F.Ay.Bar, {
            className: a()(Q.Wm, { [Q.R]: n, [Q.CW]: !t }),
            children: (0, i.jsxs)(F.Ay.Content, {
                className: Q.Vb,
                dynamicSize: !0,
                children: [
                    (0, i.jsxs)("div", {
                        className: Q.gk,
                        children: [
                            o?.id != null && o.id === l?.id
                                ? (0, i.jsx)(y.A, { className: Q.Gt, game: l })
                                : (0, i.jsx)(C.A, { title: h }),
                            (0, i.jsxs)(E.A, {
                                direction: E.A.Direction.VERTICAL,
                                justify: E.A.Justify.BETWEEN,
                                className: Q.gA,
                                children: [
                                    (0, i.jsx)(u.Text, {
                                        className: Q.$A,
                                        variant: "text-sm/normal",
                                        children: X.intl.string(X.t.XKYej5),
                                    }),
                                    (0, i.jsx)(T.A, { children: o?.name ?? p }),
                                ],
                            }),
                        ],
                    }),
                    (0, i.jsxs)(E.A, {
                        grow: 0,
                        children: [
                            (0, i.jsx)("div", {
                                className: Q.yf,
                                children: (0, i.jsx)(j.A, {
                                    stream: c,
                                    iconClassName: Q.Nd,
                                    appContext: Z.BRT.OVERLAY,
                                }),
                            }),
                            (0, i.jsx)("div", {
                                className: Q.yf,
                                children: (0, i.jsx)(D.A, { stream: c, appContext: Z.BRT.OVERLAY }),
                            }),
                            (0, i.jsx)("div", {
                                className: Q.yf,
                                children: (0, i.jsx)(d.m, {
                                    asContainer: !0,
                                    text: X.intl.string(X.t.S5anIc),
                                    children: (0, i.jsx)(u.DUT, {
                                        onClick: this.handleStopStream,
                                        "aria-label": X.intl.string(X.t.S5anIc),
                                        children: (0, i.jsx)(u.GT3, {
                                            size: "md",
                                            color: "currentColor",
                                            className: Q.Nd,
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
        (0, Y.j_)(this.props, this.shouldDisplay());
    }
    componentDidUpdate(e) {
        (0, Y.Mw)(e, this.props, this.shouldDisplay);
    }
    shouldDisplay() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props,
            { context: t, locked: n, pinned: i, sortedVoiceStates: s, channel: l } = e;
        return 0 !== s.length && null != t && null != l && (!n || !!i);
    }
    render() {
        let { context: e, lobbyId: t, locked: n, pinned: s, isPreviewingInGame: l, channel: r } = this.props;
        if (null == r || null == e || !this.shouldDisplay()) return null;
        let o = Z.UVF.UNPINNED;
        return (
            s && (o = Z.UVF.PINNED),
            l && (o = Z.UVF.IN_GAME_PREVIEW),
            n && (o = Z.UVF.IN_GAME),
            (0, i.jsxs)(F.Ay, {
                type: o,
                width: 380,
                children: [
                    n ? null : this.renderHeader(),
                    this.renderVoiceUsers(),
                    this.renderStreamerSettings(),
                    n
                        ? null
                        : (0, i.jsx)(B.A, {
                              className: a()({ [Q.VH]: l }),
                              contentClassName: a()({ [Q.R]: l }),
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
function ee(e) {
    let t = (0, r.bG)([P.A, L.A], () => L.A.getChannel(P.A.getVoiceChannelId())),
        n = (0, m.Ay)(t),
        s = (function () {
            let [e] = (0, r.bG)(
                [V.Ay, O.A, P.A, L.A],
                () => {
                    let e = L.A.getChannel(P.A.getVoiceChannelId());
                    return null == e
                        ? [[], -1]
                        : e.isGuildStageVoice()
                          ? [O.A.getMutableParticipants(e.id, b.ip.SPEAKER), O.A.getParticipantsVersion(e.id)]
                          : [V.Ay.getVoiceStatesForChannel(e), V.Ay.getVoiceStateVersion(e.getGuildId())];
                },
                [],
                H.D,
            );
            return e;
        })(),
        l = (0, r.bG)([w.A], () => w.A.getStreamerActiveStreamMetadata()),
        a = (0, r.bG)([x.Ay, U.A, M.A], () => {
            let e = (0, I.A)(x.Ay, U.A);
            return null != e ? M.A.findGame(e)?.id : null;
        }),
        o = (0, _.h)(a),
        d = (0, r.cf)([x.Ay, U.A, w.A, z.default], () => {
            let e = (0, I.A)(x.Ay, U.A),
                t = w.A.getCurrentUserActiveStream();
            return {
                displayUserMode: z.default.getDisplayUserMode(),
                displayNameMode: z.default.getDisplayNameMode(),
                avatarSizeMode: z.default.getAvatarSizeMode(),
                streamApplication: l?.pid === (0, K.getPID)() ? (0, N.A)(e) : null,
                stream: t,
            };
        });
    return (0, i.jsx)($, {
        ...d,
        application: o,
        ...e,
        sortedVoiceStates: s,
        channel: t,
        title: n ?? "",
        streamMetadata: l,
        streamApplication: d.streamApplication ?? { id: null, name: l?.sourceName },
    });
}
