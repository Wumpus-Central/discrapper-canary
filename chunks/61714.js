n.d(t, {
    A: () => eo,
}),
    n(896048),
    n(638769);
var i,
    r = n(627968),
    s = n(64700),
    l = n(503698),
    o = n.n(l),
    a = n(311907),
    c = n(827734),
    d = n(990078),
    u = n(319060),
    h = n(397927),
    p = n(442433),
    f = n(391973),
    g = n(684013),
    y = n(401843),
    A = n(717558),
    m = n(429913),
    b = n(47167),
    O = n(235986),
    _ = n(15285),
    v = n(769015),
    E = n(652896),
    x = n(277680),
    S = n(118277),
    j = n(905552),
    I = n(22705),
    C = n(994314),
    w = n(63995),
    N = n(69407),
    T = n(520006),
    P = n(352018),
    D = n(481947),
    R = n(616356),
    k = n(961350),
    L = n(734057),
    M = n(760751),
    G = n(430452),
    U = n(309010),
    V = n(485296),
    z = n(157257),
    K = n(607567),
    H = n(256415),
    W = n(996439),
    B = n(427262),
    Y = n(9302),
    F = n(31284),
    Z = n(74441),
    J = n(799808),
    X = n(855790),
    Q = n(994322),
    q = n(652215),
    $ = n(731854),
    ee = n(985018),
    et = n(279952);

function en(e, t, n) {
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

function ei(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            i.forEach(function (t) {
                en(e, t, n[t]);
            });
    }
    return e;
}

function er(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function es(e) {
    let {
            flipped: t = !1,
            locked: n = !1,
            user: i,
            nick: l,
            displayNameMode: c,
            displayUserMode: d,
            size: u = q.OSZ.LARGE,
            onClick: h,
            onContextMenu: p,
            context: f,
            guildId: g,
            voiceState: y,
        } = e,
        m = (0, Q.A)({
            location: "overlay_voice_widget",
        }),
        b = (0, a.bG)([H.default], () => H.default.showKeybindIndicators),
        O = (0, a.bG)([k.default], () => k.default.getId()),
        _ = (0, a.bG)([G.A], () => G.A.isLocalMute(i.id)),
        v = (0, a.bG)([R.A], () => R.A.getCurrentUserActiveStream()),
        E = (0, a.yK)([R.A], () => (null != v ? R.A.getViewerIds(v) : [])),
        x = (0, A.A)({
            userId: i.id,
            context: f,
        }),
        S = (0, a.bG)([V.A], () => V.A.isPrioritySpeaker(i.id, f)),
        j = (0, a.bG)([R.A], () => null != R.A.getStreamForUser(i.id, g)),
        I = s.useMemo(() => null != v && v.ownerId !== i.id && E.includes(i.id), [v, i.id, E]);
    if (d === q.f5z.ONLY_WHILE_SPEAKING && n && !x) return null;
    let C = i.id === O,
        { mute: w, selfMute: N, suppress: T, deaf: P, selfDeaf: L } = y,
        M = m && b,
        U = N && (!C || !M);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(D.Ay, {
                guildId: g,
                onClick: n ? void 0 : (e) => (null == h ? void 0 : h(e, i)),
                onContextMenu: n ? void 0 : (e) => (null == p ? void 0 : p(e, i)),
                className: o()(et.TX, {
                    [et.zj]: !x,
                    [et.bG]: !n,
                }),
                user: i,
                nick: l,
                speaking: !1,
                flipped: t,
                isStreaming: j,
                iconClassName: o()(et.Ow, {
                    [et.xt]: n,
                }),
                isWatching: I,
                isOverlay: !0,
                size: u,
                priority: S,
                mute: w || U || _,
                localMute: _,
                serverMute: w || T,
                deaf: P || L,
                serverDeaf: P,
                userNameClassName: o()(et.Xh, {
                    [et.xt]: n,
                    [et.R]: n && (c === q.pwA.NEVER || (!x && c === q.pwA.ONLY_WHILE_SPEAKING)),
                }),
            }),
            C &&
                M &&
                (0, r.jsx)(Z.A, {
                    value: N,
                    action: q.hCu.TOGGLE_MUTE,
                    shouldShow: !w && !T,
                }),
        ],
    });
}
class el extends (i = s.PureComponent) {
    renderVoiceUsers() {
        let {
                context: e,
                sortedVoiceStates: t,
                displayNameMode: n,
                displayUserMode: i,
                locked: s,
                isPreviewingInGame: l,
                channel: a,
                anchor: c,
                avatarSizeMode: d,
            } = this.props,
            h = null != c.right,
            p = t.map((t) => {
                var o;
                let { user: c, voiceState: u, member: p } = t;
                if (null == c || null == a || null == e) return null;
                let f = s || l;
                return (0, r.jsx)(
                    es,
                    {
                        guildId: null == a ? void 0 : a.guild_id,
                        user: c,
                        nick: null != (o = null == p ? void 0 : p.nick) ? o : B.Ay.getName(c),
                        flipped: h,
                        voiceState: u,
                        displayNameMode: n,
                        displayUserMode: i,
                        size: d,
                        locked: f,
                        onContextMenu: this.handleUserContextMenu,
                        onClick: this.handleUserContextMenu,
                        context: e,
                    },
                    c.id,
                );
            });
        return (0, r.jsx)(X.Ay.Body, {
            className: o()({
                [u.A.VOICE_WIDGET_TOP_MARGIN]: s,
                [et.mn]: s,
            }),
            children: (0, r.jsx)(D.Wr, {
                className: et.tA,
                children: p,
            }),
        });
    }
    renderHeader() {
        let { pinned: e, title: t, isPreviewingInGame: n } = this.props;
        return (0, r.jsxs)(X.Ay.Bar, {
            className: o()(et.bl, {
                [et.VH]: n,
            }),
            children: [
                (0, r.jsxs)(X.Ay.Content, {
                    dynamicSize: !0,
                    className: o()(et.Qs, {
                        [et.R]: n,
                    }),
                    children: [
                        (0, r.jsx)(h.WP0, {
                            size: "custom",
                            color: c.A.unsafe_rawColors.WHITE.css,
                            width: 20,
                            height: 20,
                            className: o()(et.Kk, et.zj, et.co),
                        }),
                        (0, r.jsx)(h.HKD, {
                            size: "custom",
                            color: c.A.unsafe_rawColors.WHITE.css,
                            width: 20,
                            height: 20,
                            className: o()(et.Kk, et.zj, et.Xk),
                        }),
                        (0, r.jsx)(h.Text, {
                            variant: "text-md/normal",
                            style: {
                                color: c.A.unsafe_rawColors.PRIMARY_200.css,
                            },
                            className: et.DD,
                            children: t,
                        }),
                    ],
                }),
                n
                    ? null
                    : (0, r.jsx)(X.Ay.Icon, {
                          icon: h.Zes,
                          label: ee.intl.string(ee.t.NiTd0e),
                          onClick: this.handleOpenVoiceSettings,
                          tooltipPosition: "left",
                          size: 18,
                      }),
                n
                    ? null
                    : (0, r.jsx)(X.Ay.Icon, {
                          icon: e ? h.hl9 : h.qgw,
                          label: e ? ee.intl.string(ee.t.cSu80j) : ee.intl.string(ee.t.cM8Vnm),
                          onClick: this.handlePin,
                          tooltipPosition: "left",
                          size: 18,
                          isActive: e,
                      }),
            ],
        });
    }
    renderStreamerSettings() {
        var e;
        let {
            locked: t,
            pinned: n,
            isPreviewingInGame: i,
            channel: s,
            application: l,
            streamMetadata: a,
            streamApplication: c,
            stream: u,
        } = this.props;
        if (t || null == u || null == s) return null;
        let { sanitizedTitle: p, title: f } = (0, x.A)(a);
        return (0, r.jsx)(X.Ay.Bar, {
            className: o()(et.Wm, {
                [et.R]: i,
                [et.CW]: !n,
            }),
            children: (0, r.jsxs)(X.Ay.Content, {
                className: et.Vb,
                dynamicSize: !0,
                children: [
                    (0, r.jsxs)("div", {
                        className: et.gk,
                        children: [
                            (null == c ? void 0 : c.id) != null && c.id === (null == l ? void 0 : l.id)
                                ? (0, r.jsx)(v.A, {
                                      className: et.Gt,
                                      game: l,
                                  })
                                : (0, r.jsx)(S.A, {
                                      title: p,
                                  }),
                            (0, r.jsxs)(O.A, {
                                direction: O.A.Direction.VERTICAL,
                                justify: O.A.Justify.BETWEEN,
                                className: et.gA,
                                children: [
                                    (0, r.jsx)(h.Text, {
                                        className: et.$A,
                                        variant: "text-sm/normal",
                                        children: ee.intl.string(ee.t.XKYej5),
                                    }),
                                    (0, r.jsx)(C.A, {
                                        children: null != (e = null == c ? void 0 : c.name) ? e : f,
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, r.jsxs)(O.A, {
                        grow: 0,
                        children: [
                            (0, r.jsx)("div", {
                                className: et.yf,
                                children: (0, r.jsx)(T.A, {
                                    stream: u,
                                    iconClassName: et.Nd,
                                    appContext: q.BRT.OVERLAY,
                                }),
                            }),
                            (0, r.jsx)("div", {
                                className: et.yf,
                                children: (0, r.jsx)(P.A, {
                                    stream: u,
                                    appContext: q.BRT.OVERLAY,
                                }),
                            }),
                            (0, r.jsx)("div", {
                                className: et.yf,
                                children: (0, r.jsx)(d.m, {
                                    asContainer: !0,
                                    text: ee.intl.string(ee.t.S5anIc),
                                    children: (0, r.jsx)(h.DUT, {
                                        onClick: this.handleStopStream,
                                        "aria-label": ee.intl.string(ee.t.S5anIc),
                                        children: (0, r.jsx)(h.GT3, {
                                            size: "md",
                                            color: "currentColor",
                                            className: et.Nd,
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
        (0, J.j_)(this.props, this.shouldDisplay());
    }
    componentDidUpdate(e) {
        (0, J.Mw)(e, this.props, this.shouldDisplay);
    }
    shouldDisplay() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props,
            { context: t, locked: n, pinned: i, sortedVoiceStates: r, channel: s } = e;
        return 0 !== r.length && null != t && null != s && (!n || !!i);
    }
    render() {
        let { context: e, lobbyId: t, locked: n, pinned: i, isPreviewingInGame: s, channel: l } = this.props;
        if (null == l || null == e || !this.shouldDisplay()) return null;
        let a = q.UVF.UNPINNED;
        return (
            i && (a = q.UVF.PINNED),
            s && (a = q.UVF.IN_GAME_PREVIEW),
            n && (a = q.UVF.IN_GAME),
            (0, r.jsxs)(X.Ay, {
                type: a,
                width: 380,
                children: [
                    n ? null : this.renderHeader(),
                    this.renderVoiceUsers(),
                    this.renderStreamerSettings(),
                    n
                        ? null
                        : (0, r.jsx)(F.A, {
                              className: o()({
                                  [et.VH]: s,
                              }),
                              contentClassName: o()({
                                  [et.R]: s,
                              }),
                              channel: l,
                              lobbyId: t,
                              context: e,
                              pinned: i,
                          }),
                ],
            })
        );
    }
    constructor(...e) {
        super(...e),
            en(this, "handleUserContextMenu", (e, t) => {
                let { context: i } = this.props;
                (0, p.L3)(e, async () => {
                    let { default: e } = await Promise.all([n.e("97262"), n.e("32418"), n.e("22252")]).then(
                        n.bind(n, 668569),
                    );
                    return (n) =>
                        (0, r.jsx)(
                            e,
                            er(ei({}, n), {
                                user: t,
                                showMediaItems: !0,
                                mediaEngineContext: i,
                            }),
                        );
                });
            }),
            en(this, "handleOpenVoiceSettings", () => {
                let { context: e, channel: t, title: i } = this.props;
                (0, h.mMO)(async () => {
                    let { default: s } = await n.e("96531").then(n.bind(n, 880510));
                    return (n) =>
                        (0, r.jsx)(
                            s,
                            er(ei({}, n), {
                                mediaEngineContext: e,
                                subtitle: null != t ? void 0 : i,
                            }),
                        );
                });
            }),
            en(this, "handlePin", () => {
                var e, t, n;
                let i = !this.props.pinned;
                g.A.track(q.HAw.OVERLAY_PIN_TOGGLED, {
                    pinned: i,
                    guild_id: null == (e = this.props.channel) ? void 0 : e.guild_id,
                    channel_id: null == (t = this.props.channel) ? void 0 : t.id,
                    channel_type: null == (n = this.props.channel) ? void 0 : n.type,
                    widget_type: q.uss.VOICE,
                });
                let { id: r } = this.props;
                (0, f.v0)(r);
            }),
            en(this, "handleStopStream", () => {
                let { stream: e } = this.props;
                null != e && y.vN((0, E._z)(e));
            });
    }
}

function eo(e) {
    var t;
    let n = (0, a.bG)([U.A, L.A], () => L.A.getChannel(U.A.getVoiceChannelId())),
        i = (0, b.Ay)(n),
        l = (function () {
            let [e] = (0, a.bG)(
                    [K.Ay, w.A, U.A, L.A],
                    () => {
                        let e = L.A.getChannel(U.A.getVoiceChannelId());
                        return null == e
                            ? [[], -1]
                            : e.isGuildStageVoice()
                              ? [w.A.getMutableParticipants(e.id, N.ip.SPEAKER), w.A.getParticipantsVersion(e.id)]
                              : [K.Ay.getVoiceStatesForChannel(e), K.Ay.getVoiceStateVersion(e.getGuildId())];
                    },
                    [],
                    W.D,
                ),
                t = (0, a.bG)([k.default], () => k.default.getId()),
                n = (0, Q.A)({
                    location: "voice_widget",
                });
            return s.useMemo(
                () => (n ? [...e].sort((e, n) => (e.user.id === t ? -1 : +(n.user.id === t))) : e),
                [e, t, n],
            );
        })(),
        o = (0, a.bG)([R.A], () => R.A.getStreamerActiveStreamMetadata()),
        c = (0, a.bG)([_.Ay, z.A, M.A], () => {
            var e;
            let t = (0, j.A)(_.Ay, z.A);
            return null != t ? (null == (e = M.A.getGameByGameData(t)) ? void 0 : e.id) : null;
        }),
        d = (0, m.h)(c),
        u = (0, a.cf)([_.Ay, z.A, R.A, H.default], () => {
            let e = (0, j.A)(_.Ay, z.A),
                t = R.A.getCurrentUserActiveStream();
            return {
                displayUserMode: H.default.getDisplayUserMode(),
                displayNameMode: H.default.getDisplayNameMode(),
                avatarSizeMode: H.default.getAvatarSizeMode(),
                streamApplication: (null == o ? void 0 : o.pid) === (0, Y.getPID)() ? (0, I.A)(e) : null,
                stream: t,
            };
        });
    return (0, r.jsx)(
        el,
        er(
            ei(
                er(ei({}, u), {
                    application: d,
                }),
                e,
            ),
            {
                sortedVoiceStates: l,
                channel: n,
                title: null != i ? i : "",
                streamMetadata: o,
                streamApplication:
                    null != (t = u.streamApplication)
                        ? t
                        : {
                              id: null,
                              name: null == o ? void 0 : o.sourceName,
                          },
            },
        ),
    );
}
en(el, "defaultProps", {
    context: $.x.DEFAULT,
});
