"use strict";
n.d(t, { A: () => eo });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(311907),
    o = n(827734),
    d = n(990078),
    c = n(319060),
    u = n(192308),
    h = n(772838),
    p = n(983851),
    f = n(834730),
    A = n(625903),
    _ = n(609731),
    g = n(788120),
    m = n(939249),
    x = n(959988),
    E = n(442433),
    y = n(391973),
    v = n(684013),
    S = n(401843),
    C = n(717558),
    I = n(429913),
    N = n(47167),
    T = n(235986),
    b = n(15285),
    O = n(769015),
    j = n(652896),
    D = n(277680),
    R = n(118277),
    L = n(905552),
    w = n(22705),
    k = n(994314),
    M = n(63995),
    P = n(69407),
    G = n(520006),
    V = n(352018),
    U = n(481947),
    z = n(616356),
    H = n(734057),
    W = n(760751),
    K = n(430452),
    B = n(309010),
    F = n(485296),
    Y = n(157257),
    Z = n(607567),
    X = n(256415),
    J = n(996439),
    Q = n(427262),
    q = n(9302),
    $ = n(31284),
    ee = n(799808),
    et = n(855790),
    en = n(652215),
    ei = n(731854),
    es = n(985018),
    el = n(899177);
function ea(e) {
    let {
            flipped: t = !1,
            locked: n = !1,
            user: l,
            nick: o,
            displayNameMode: d,
            displayUserMode: c,
            size: u = en.OSZ.LARGE,
            onClick: h,
            onContextMenu: p,
            context: f,
            guildId: A,
            voiceState: _,
        } = e,
        g = (0, r.bG)([K.Ay], () => K.Ay.isLocalMute(l.id)),
        m = (0, r.bG)([z.A], () => z.A.getCurrentUserActiveStream()),
        x = (0, r.yK)([z.A], () => (null != m ? z.A.getViewerIds(m) : [])),
        E = (0, C.A)({ userId: l.id, context: f }),
        y = (0, r.bG)([F.A], () => F.A.isPrioritySpeaker(l.id, f)),
        v = (0, r.bG)([z.A], () => null != z.A.getStreamForUser(l.id, A)),
        S = s.useMemo(() => null != m && m.ownerId !== l.id && x.includes(l.id), [m, l.id, x]);
    if (c === en.f5z.ONLY_WHILE_SPEAKING && n && !E) return null;
    let { mute: I, selfMute: N, suppress: T, deaf: b, selfDeaf: O } = _;
    return (0, i.jsx)(U.Ay, {
        guildId: A,
        onClick: n ? void 0 : (e) => h?.(e, l),
        onContextMenu: n ? void 0 : (e) => p?.(e, l),
        className: a()(el.TX, { [el.zj]: !E, [el.bG]: !n }),
        user: l,
        nick: o,
        speaking: !1,
        flipped: t,
        isStreaming: v,
        iconClassName: a()(el.Ow, { [el.xt]: n }),
        isWatching: S,
        isOverlay: !0,
        size: u,
        priority: y,
        mute: I || N || g,
        localMute: g,
        serverMute: I || T,
        deaf: b || O,
        serverDeaf: b,
        userNameClassName: a()(el.Xh, {
            [el.xt]: n,
            [el.R]: n && (d === en.pwA.NEVER || (!E && d === en.pwA.ONLY_WHILE_SPEAKING)),
        }),
    });
}
class er extends s.PureComponent {
    static defaultProps = { context: ei.x.DEFAULT };
    handleUserContextMenu = (e, t) => {
        let { context: s } = this.props;
        (0, E.L3)(e, async () => {
            let { default: e } = await Promise.all([n.e("97262"), n.e("32418"), n.e("22880")]).then(n.bind(n, 668569));
            return (n) => (0, i.jsx)(e, { ...n, user: t, showMediaItems: !0, mediaEngineContext: s });
        });
    };
    handleOpenVoiceSettings = () => {
        let { context: e, channel: t, title: s } = this.props;
        (0, u.openModalLazy)(async () => {
            let { default: l } = await n.e("18912").then(n.bind(n, 880510));
            return (n) => (0, i.jsx)(l, { ...n, mediaEngineContext: e, subtitle: null != t ? void 0 : s });
        });
    };
    handlePin = () => {
        let e = !this.props.pinned;
        v.A.track(en.HAw.OVERLAY_PIN_TOGGLED, {
            pinned: e,
            guild_id: this.props.channel?.guild_id,
            channel_id: this.props.channel?.id,
            channel_type: this.props.channel?.type,
            widget_type: en.uss.VOICE,
        });
        let { id: t } = this.props;
        (0, y.v0)(t);
    };
    handleStopStream = () => {
        let { stream: e } = this.props;
        null != e && S.vN((0, j._z)(e));
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
                    ea,
                    {
                        guildId: o?.guild_id,
                        user: a,
                        nick: c?.nick ?? Q.Ay.getName(a),
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
        return (0, i.jsx)(et.Ay.Body, {
            className: a()({ [c.A.VOICE_WIDGET_TOP_MARGIN]: l, [el.mn]: l }),
            children: (0, i.jsx)(U.Wr, { className: el.tA, children: p }),
        });
    }
    renderHeader() {
        let { pinned: e, title: t, isPreviewingInGame: n } = this.props;
        return (0, i.jsxs)(et.Ay.Bar, {
            className: a()(el.bl, { [el.VH]: n }),
            children: [
                (0, i.jsxs)(et.Ay.Content, {
                    dynamicSize: !0,
                    className: a()(el.Qs, { [el.R]: n }),
                    children: [
                        (0, i.jsx)(h.W, {
                            size: "custom",
                            color: o.A.unsafe_rawColors.WHITE.css,
                            width: 20,
                            height: 20,
                            className: a()(el.Kk, el.zj, el.co),
                        }),
                        (0, i.jsx)(p.H, {
                            size: "custom",
                            color: o.A.unsafe_rawColors.WHITE.css,
                            width: 20,
                            height: 20,
                            className: a()(el.Kk, el.zj, el.Xk),
                        }),
                        (0, i.jsx)(f.E, {
                            variant: "text-md/normal",
                            style: { color: o.A.unsafe_rawColors.PRIMARY_200.css },
                            className: el.DD,
                            children: t,
                        }),
                    ],
                }),
                n
                    ? null
                    : (0, i.jsx)(et.Ay.Icon, {
                          icon: A.Z,
                          label: es.intl.string(es.t.NiTd0e),
                          onClick: this.handleOpenVoiceSettings,
                          tooltipPosition: "left",
                          size: 18,
                      }),
                n
                    ? null
                    : (0, i.jsx)(et.Ay.Icon, {
                          icon: e ? _.h : g.q,
                          label: e ? es.intl.string(es.t.cSu80j) : es.intl.string(es.t.cM8Vnm),
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
        let { sanitizedTitle: u, title: h } = (0, D.A)(r);
        return (0, i.jsx)(et.Ay.Bar, {
            className: a()(el.Wm, { [el.R]: n, [el.CW]: !t }),
            children: (0, i.jsxs)(et.Ay.Content, {
                className: el.Vb,
                dynamicSize: !0,
                children: [
                    (0, i.jsxs)("div", {
                        className: el.gk,
                        children: [
                            o?.id != null && o.id === l?.id
                                ? (0, i.jsx)(O.A, { className: el.Gt, game: l })
                                : (0, i.jsx)(R.A, { title: u }),
                            (0, i.jsxs)(T.A, {
                                direction: T.A.Direction.VERTICAL,
                                justify: T.A.Justify.BETWEEN,
                                className: el.gA,
                                children: [
                                    (0, i.jsx)(f.E, {
                                        className: el.$A,
                                        variant: "text-sm/normal",
                                        children: es.intl.string(es.t.XKYej5),
                                    }),
                                    (0, i.jsx)(k.A, { children: o?.name ?? h }),
                                ],
                            }),
                        ],
                    }),
                    (0, i.jsxs)(T.A, {
                        grow: 0,
                        children: [
                            (0, i.jsx)("div", {
                                className: el.yf,
                                children: (0, i.jsx)(G.A, {
                                    stream: c,
                                    iconClassName: el.Nd,
                                    appContext: en.BRT.OVERLAY,
                                }),
                            }),
                            (0, i.jsx)("div", {
                                className: el.yf,
                                children: (0, i.jsx)(V.A, { stream: c, appContext: en.BRT.OVERLAY }),
                            }),
                            (0, i.jsx)("div", {
                                className: el.yf,
                                children: (0, i.jsx)(d.m, {
                                    asContainer: !0,
                                    text: es.intl.string(es.t.S5anIc),
                                    children: (0, i.jsx)(m.D, {
                                        onClick: this.handleStopStream,
                                        "aria-label": es.intl.string(es.t.S5anIc),
                                        children: (0, i.jsx)(x.G, {
                                            size: "md",
                                            color: "currentColor",
                                            className: el.Nd,
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
        (0, ee.j_)(this.props, this.shouldDisplay());
    }
    componentDidUpdate(e) {
        (0, ee.Mw)(e, this.props, this.shouldDisplay);
    }
    shouldDisplay() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props,
            { context: t, locked: n, pinned: i, sortedVoiceStates: s, channel: l } = e;
        return 0 !== s.length && null != t && null != l && (!n || !!i);
    }
    render() {
        let { context: e, lobbyId: t, locked: n, pinned: s, isPreviewingInGame: l, channel: r } = this.props;
        if (null == r || null == e || !this.shouldDisplay()) return null;
        let o = en.UVF.UNPINNED;
        return (
            s && (o = en.UVF.PINNED),
            l && (o = en.UVF.IN_GAME_PREVIEW),
            n && (o = en.UVF.IN_GAME),
            (0, i.jsxs)(et.Ay, {
                type: o,
                width: 380,
                children: [
                    n ? null : this.renderHeader(),
                    this.renderVoiceUsers(),
                    this.renderStreamerSettings(),
                    n
                        ? null
                        : (0, i.jsx)($.A, {
                              className: a()({ [el.VH]: l }),
                              contentClassName: a()({ [el.R]: l }),
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
function eo(e) {
    let t = (0, r.bG)([B.A, H.A], () => H.A.getChannel(B.A.getVoiceChannelId())),
        n = (0, N.Ay)(t),
        s = (function () {
            let [e] = (0, r.bG)(
                [Z.Ay, M.A, B.A, H.A],
                () => {
                    let e = H.A.getChannel(B.A.getVoiceChannelId());
                    return null == e
                        ? [[], -1]
                        : e.isGuildStageVoice()
                          ? [M.A.getMutableParticipants(e.id, P.ip.SPEAKER), M.A.getParticipantsVersion(e.id)]
                          : [Z.Ay.getVoiceStatesForChannel(e), Z.Ay.getVoiceStateVersion(e.getGuildId())];
                },
                [],
                J.D,
            );
            return e;
        })(),
        l = (0, r.bG)([z.A], () => z.A.getStreamerActiveStreamMetadata()),
        a = (0, r.bG)([b.Ay, Y.A, W.A], () => {
            let e = (0, L.A)(b.Ay, Y.A);
            return null != e ? W.A.findGame(e)?.id : null;
        }),
        o = (0, I.h)(a),
        d = (0, r.cf)([b.Ay, Y.A, z.A, X.default], () => {
            let e = (0, L.A)(b.Ay, Y.A),
                t = z.A.getCurrentUserActiveStream();
            return {
                displayUserMode: X.default.getDisplayUserMode(),
                displayNameMode: X.default.getDisplayNameMode(),
                avatarSizeMode: X.default.getAvatarSizeMode(),
                streamApplication: l?.pid === (0, q.getPID)() ? (0, w.A)(e) : null,
                stream: t,
            };
        });
    return (0, i.jsx)(er, {
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
