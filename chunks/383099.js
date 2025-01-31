n.d(t, { Z: () => el }), n(47120);
var i,
    s = n(200651),
    l = n(192379),
    r = n(120356),
    o = n.n(r),
    a = n(442837),
    d = n(692547),
    c = n(477690),
    u = n(481060),
    h = n(239091),
    p = n(765250),
    g = n(13245),
    f = n(872810),
    m = n(586902),
    x = n(835473),
    v = n(933557),
    Z = n(600164),
    S = n(118012),
    E = n(594190),
    C = n(925329),
    I = n(569545),
    N = n(914923),
    y = n(165393),
    _ = n(989941),
    j = n(552282),
    O = n(345243),
    T = n(565799),
    b = n(501655),
    k = n(786915),
    M = n(7188),
    w = n(597998),
    P = n(199902),
    R = n(314897),
    A = n(592125),
    D = n(77498),
    L = n(131951),
    z = n(944486),
    V = n(606304),
    U = n(449224),
    W = n(938475),
    B = n(237997),
    F = n(136015),
    G = n(51144),
    H = n(145597),
    Y = n(244073),
    K = n(876205),
    X = n(906037),
    Q = n(518084),
    J = n(809357),
    q = n(981631),
    $ = n(65154),
    ee = n(388032),
    et = n(734701);
function en(e, t, n) {
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
function ei(e) {
    let { flipped: t = !1, locked: n = !1, user: i, nick: r, displayNameMode: d, displayUserMode: c, size: u = q.ipw.LARGE, onClick: h, onContextMenu: p, context: g, guildId: f, voiceState: x } = e,
        v = (0, J.Z)({ location: 'overlay_voice_widget' }),
        Z = (0, a.e7)([B.Z], () => B.Z.showKeybindIndicators),
        S = (0, a.e7)([R.default], () => R.default.getId()),
        E = (0, a.e7)([L.Z], () => L.Z.isLocalMute(i.id)),
        C = (0, a.e7)([P.Z], () => P.Z.getCurrentUserActiveStream()),
        I = (0, a.Wu)([P.Z], () => (null != C ? P.Z.getViewerIds(C) : [])),
        N = (0, m.Z)({
            userId: i.id,
            context: g
        }),
        y = (0, a.e7)([V.Z], () => V.Z.isPrioritySpeaker(i.id, g)),
        _ = (0, a.e7)([P.Z], () => null != P.Z.getStreamForUser(i.id, f)),
        j = l.useMemo(() => null != C && C.ownerId !== i.id && I.includes(i.id), [C, i.id, I]);
    if (c === q.OYC.ONLY_WHILE_SPEAKING && n && !N) return null;
    let O = i.id === S,
        { mute: T, selfMute: b, suppress: k, deaf: M, selfDeaf: A } = x,
        D = v && Z,
        z = b && (!O || !D);
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)(w.ZP, {
                guildId: f,
                onClick: n ? void 0 : (e) => (null == h ? void 0 : h(e, i)),
                onContextMenu: n ? void 0 : (e) => (null == p ? void 0 : p(e, i)),
                className: o()(et.voiceUserWrapper, {
                    [et.faded]: !N,
                    [et.interactive]: !n
                }),
                user: i,
                nick: r,
                speaking: !1,
                flipped: t,
                isStreaming: _,
                iconClassName: o()(et.voiceIcon, { [et.locked]: n }),
                isWatching: j,
                isOverlay: !0,
                size: u,
                priority: y,
                mute: T || z || E,
                localMute: E,
                serverMute: T || k,
                deaf: M || A,
                serverDeaf: M,
                userNameClassName: o()(et.username, {
                    [et.locked]: n,
                    [et.hidden]: n && (d === q.wC$.NEVER || (!N && d === q.wC$.ONLY_WHILE_SPEAKING))
                })
            }),
            O &&
                D &&
                (0, s.jsx)(K.Z, {
                    value: b,
                    action: q.kg4.TOGGLE_MUTE,
                    shouldShow: !T && !k
                })
        ]
    });
}
class es extends (i = l.PureComponent) {
    renderVoiceUsers() {
        let { context: e, sortedVoiceStates: t, displayNameMode: n, displayUserMode: i, locked: l, isPreviewingInGame: r, channel: a, anchor: d, avatarSizeMode: u } = this.props,
            h = null != d.right,
            p = t.map((t) => {
                var o;
                let { user: d, voiceState: c, member: p } = t;
                if (null == d || null == a || null == e) return null;
                let g = l || r;
                return (0, s.jsx)(
                    ei,
                    {
                        guildId: null == a ? void 0 : a.guild_id,
                        user: d,
                        nick: null !== (o = null == p ? void 0 : p.nick) && void 0 !== o ? o : G.ZP.getName(d),
                        flipped: h,
                        voiceState: c,
                        displayNameMode: n,
                        displayUserMode: i,
                        size: u,
                        locked: g,
                        onContextMenu: this.handleUserContextMenu,
                        onClick: this.handleUserContextMenu,
                        context: e
                    },
                    d.id
                );
            });
        return (0, s.jsx)(Q.ZP.Body, {
            className: o()({
                [c.Z.VOICE_WIDGET_TOP_MARGIN]: l,
                [et.lockedContainer]: l
            }),
            children: (0, s.jsx)(w.eJ, {
                className: et.voiceList,
                children: p
            })
        });
    }
    renderHeader() {
        let { pinned: e, title: t, isPreviewingInGame: n } = this.props;
        return (0, s.jsxs)(Q.ZP.Bar, {
            className: o()(et.draggableStartArea, { [et.preview]: n }),
            children: [
                (0, s.jsxs)(Q.ZP.Content, {
                    dynamicSize: !0,
                    className: o()(et.content, { [et.hidden]: n }),
                    children: [
                        (0, s.jsx)(u.Vni, {
                            size: 'custom',
                            color: d.Z.unsafe_rawColors.WHITE_500.css,
                            width: 20,
                            height: 20,
                            className: o()(et.icon, et.faded, et.dragIcon)
                        }),
                        (0, s.jsx)(u.gj8, {
                            size: 'custom',
                            color: d.Z.unsafe_rawColors.WHITE_500.css,
                            width: 20,
                            height: 20,
                            className: o()(et.icon, et.faded, et.speakerIcon)
                        }),
                        (0, s.jsx)(S.Z, {
                            color: d.Z.unsafe_rawColors.PRIMARY_200.css,
                            className: et.title,
                            children: t
                        })
                    ]
                }),
                n
                    ? null
                    : (0, s.jsx)(Q.ZP.Icon, {
                          icon: u.ewm,
                          label: ee.intl.string(ee.t.NiTd0d),
                          onClick: this.handleOpenVoiceSettings,
                          tooltipPosition: 'left',
                          size: 18
                      }),
                n
                    ? null
                    : (0, s.jsx)(Q.ZP.Icon, {
                          icon: e ? u.QVc : u.k5M,
                          label: e ? ee.intl.string(ee.t.cSu80t) : ee.intl.string(ee.t.cM8Vnp),
                          onClick: this.handlePin,
                          tooltipPosition: 'left',
                          size: 18,
                          isActive: e
                      })
            ]
        });
    }
    renderStreamerSettings() {
        var e;
        let { locked: t, pinned: n, isPreviewingInGame: i, channel: l, application: r, streamMetadata: a, streamApplication: d, stream: c } = this.props;
        if (t || null == c || null == l) return null;
        let { sanitizedTitle: h, title: p } = (0, N.Z)(a);
        return (0, s.jsx)(Q.ZP.Bar, {
            className: o()(et.streamerControls, {
                [et.hidden]: i,
                [et.unpinned]: !n
            }),
            children: (0, s.jsxs)(Q.ZP.Content, {
                className: et.streamerContent,
                dynamicSize: !0,
                children: [
                    (0, s.jsxs)('div', {
                        className: et.streamerInner,
                        children: [
                            (null == d ? void 0 : d.id) != null && d.id === (null == r ? void 0 : r.id)
                                ? (0, s.jsx)(C.Z, {
                                      className: et.gameIcon,
                                      game: r
                                  })
                                : (0, s.jsx)(y.Z, { title: h }),
                            (0, s.jsxs)(Z.Z, {
                                direction: Z.Z.Direction.VERTICAL,
                                justify: Z.Z.Justify.BETWEEN,
                                className: et.streamerInfo,
                                children: [
                                    (0, s.jsx)(u.Text, {
                                        className: et.streaming,
                                        variant: 'text-sm/normal',
                                        children: ee.intl.string(ee.t.XKYej4)
                                    }),
                                    (0, s.jsx)(O.Z, { children: null !== (e = null == d ? void 0 : d.name) && void 0 !== e ? e : p })
                                ]
                            })
                        ]
                    }),
                    (0, s.jsxs)(Z.Z, {
                        grow: 0,
                        children: [
                            (0, s.jsx)('div', {
                                className: et.streamerIconWrapper,
                                children: (0, s.jsx)(k.Z, {
                                    stream: c,
                                    iconClassName: et.streamerIcon,
                                    appContext: q.IlC.OVERLAY
                                })
                            }),
                            (0, s.jsx)('div', {
                                className: et.streamerIconWrapper,
                                children: (0, s.jsx)(M.Z, {
                                    stream: c,
                                    appContext: q.IlC.OVERLAY
                                })
                            }),
                            (0, s.jsx)('div', {
                                className: et.streamerIconWrapper,
                                children: (0, s.jsx)(u.DY3, {
                                    text: ee.intl.string(ee.t.S5anIS),
                                    children: (0, s.jsx)(u.zxk, {
                                        onClick: this.handleStopStream,
                                        look: u.zxk.Looks.BLANK,
                                        size: u.zxk.Sizes.NONE,
                                        children: (0, s.jsx)(u.g5r, {
                                            size: 'md',
                                            color: 'currentColor',
                                            className: et.streamerIcon
                                        })
                                    })
                                })
                            })
                        ]
                    })
                ]
            })
        });
    }
    componentDidMount() {
        (0, X.m3)(this.props, this.shouldDisplay());
    }
    componentDidUpdate(e) {
        (0, X.CR)(e, this.props, this.shouldDisplay);
    }
    shouldDisplay() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props,
            { context: t, locked: n, pinned: i, sortedVoiceStates: s, channel: l } = e;
        return 0 !== s.length && null != t && null != l && (!n || !!i);
    }
    render() {
        let { context: e, lobbyId: t, locked: n, pinned: i, isPreviewingInGame: l, channel: r } = this.props;
        if (null == r || null == e || !this.shouldDisplay()) return null;
        let a = q.t_t.UNPINNED;
        return (
            i && (a = q.t_t.PINNED),
            l && (a = q.t_t.IN_GAME_PREVIEW),
            n && (a = q.t_t.IN_GAME),
            (0, s.jsxs)(Q.ZP, {
                type: a,
                width: 380,
                children: [
                    n ? null : this.renderHeader(),
                    this.renderVoiceUsers(),
                    this.renderStreamerSettings(),
                    n
                        ? null
                        : (0, s.jsx)(Y.Z, {
                              className: o()({ [et.preview]: l }),
                              contentClassName: o()({ [et.hidden]: l }),
                              channel: r,
                              lobbyId: t,
                              context: e,
                              pinned: i
                          })
                ]
            })
        );
    }
    constructor(...e) {
        super(...e),
            en(this, 'handleUserContextMenu', (e, t) => {
                let { context: i } = this.props;
                (0, h.jW)(e, async () => {
                    let { default: e } = await Promise.all([n.e('79695'), n.e('69220'), n.e('95052')]).then(n.bind(n, 881351));
                    return (n) =>
                        (0, s.jsx)(e, {
                            ...n,
                            user: t,
                            showMediaItems: !0,
                            mediaEngineContext: i
                        });
                });
            }),
            en(this, 'handleOpenVoiceSettings', () => {
                let { context: e, channel: t, title: i } = this.props;
                (0, u.ZDy)(async () => {
                    let { default: l } = await n.e('66063').then(n.bind(n, 344516));
                    return (n) =>
                        (0, s.jsx)(l, {
                            ...n,
                            mediaEngineContext: e,
                            title: null != t ? null : i
                        });
                });
            }),
            en(this, 'handlePin', () => {
                var e, t, n;
                let i = !this.props.pinned;
                g.Z.track(q.rMx.OVERLAY_PIN_TOGGLED, {
                    pinned: i,
                    guild_id: null === (e = this.props.channel) || void 0 === e ? void 0 : e.guild_id,
                    channel_id: null === (t = this.props.channel) || void 0 === t ? void 0 : t.id,
                    channel_type: null === (n = this.props.channel) || void 0 === n ? void 0 : n.type,
                    widget_type: q.Odu.VOICE
                });
                let { id: s } = this.props;
                (0, p.xh)(s);
            }),
            en(this, 'handleStopStream', () => {
                let { stream: e } = this.props;
                null != e && f.g((0, I.V9)(e));
            });
    }
}
function el(e) {
    var t;
    let n = (0, a.e7)([z.Z, A.Z], () => A.Z.getChannel(z.Z.getVoiceChannelId())),
        i = (0, v.ZP)(n),
        r = (function () {
            let [e] = (0, a.e7)(
                    [W.ZP, T.Z, z.Z, A.Z],
                    () => {
                        let e = A.Z.getChannel(z.Z.getVoiceChannelId());
                        return null == e ? [[], -1] : e.isGuildStageVoice() ? [T.Z.getMutableParticipants(e.id, b.pV.SPEAKER), T.Z.getParticipantsVersion(e.id)] : [W.ZP.getVoiceStatesForChannel(e), W.ZP.getVoiceStateVersion(e.getGuildId())];
                    },
                    [],
                    F.Q
                ),
                t = (0, a.e7)([R.default], () => R.default.getId()),
                n = (0, J.Z)({ location: 'voice_widget' });
            return l.useMemo(() => (n ? [...e].sort((e, n) => (e.user.id === t ? -1 : n.user.id === t ? 1 : 0)) : e), [e, t, n]);
        })(),
        o = (0, a.e7)([P.Z], () => P.Z.getStreamerActiveStreamMetadata()),
        d = (0, a.e7)([E.ZP, U.Z, D.Z], () => {
            var e;
            let t = (0, _.Z)(E.ZP, U.Z);
            return null != t ? (null === (e = D.Z.getGameByGameData(t)) || void 0 === e ? void 0 : e.id) : null;
        }),
        c = (0, x.q)(d),
        u = (0, a.cj)([E.ZP, U.Z, P.Z, B.Z], () => {
            let e = (0, _.Z)(E.ZP, U.Z),
                t = P.Z.getCurrentUserActiveStream();
            return {
                displayUserMode: B.Z.getDisplayUserMode(),
                displayNameMode: B.Z.getDisplayNameMode(),
                avatarSizeMode: B.Z.getAvatarSizeMode(),
                streamApplication: (null == o ? void 0 : o.pid) === (0, H.QF)() ? (0, j.Z)(e) : null,
                stream: t
            };
        });
    return (0, s.jsx)(es, {
        ...u,
        application: c,
        ...e,
        sortedVoiceStates: r,
        channel: n,
        title: null != i ? i : '',
        streamMetadata: o,
        streamApplication:
            null !== (t = u.streamApplication) && void 0 !== t
                ? t
                : {
                      id: null,
                      name: null == o ? void 0 : o.sourceName
                  }
    });
}
en(es, 'defaultProps', { context: $.Yn.DEFAULT });
