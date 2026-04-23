n.d(t, { A: () => V, i: () => M });
var i = n(627968),
    l = n(64700),
    a = n(284009),
    s = n.n(a),
    r = n(110259),
    o = n(311907),
    c = n(844222),
    d = n(939249),
    u = n(367513),
    _ = n(442433),
    A = n(401843),
    p = n(793574),
    h = n(688810),
    g = n(139286),
    m = n(313961),
    x = n(480890),
    f = n(643501),
    C = n(652896),
    E = n(279250),
    j = n(267102),
    b = n(401901),
    N = n(326567),
    T = n(342296),
    I = n(616356),
    v = n(961350),
    S = n(71393),
    y = n(576705),
    O = n(977997),
    L = n(312006),
    R = n(704384),
    U = n(289105),
    w = n(652215),
    P = n(806931),
    k = n(578758);
let M = 16 / 9,
    G = (e) => {
        let {
                stageParticipant: t,
                rtcParticipant: n,
                channel: a,
                guildId: s,
                user: r,
                width: o,
                isModerator: u,
                onContextMenu: _,
                popoutType: A,
            } = e,
            p = l.useRef(null),
            { reducedMotion: h } = l.useContext(c.C),
            { blocked: g, ignored: m, id: x } = t;
        return (0, i.jsx)(T.A, {
            targetElementRef: p,
            user: r,
            guildId: s,
            channelId: a.id,
            clickTrap: !0,
            children: (e) =>
                (0, i.jsx)(d.D, {
                    innerRef: p,
                    onContextMenu: (e) => _(n, e),
                    ...e,
                    children: (0, i.jsx)(
                        R.A,
                        {
                            participant: n,
                            aspectRatio: M,
                            blocked: g,
                            ignored: m,
                            channel: a,
                            className: k.V,
                            inCall: !0,
                            popoutType: A,
                            pulseSpeakingIndicator: !h.enabled,
                            width: o,
                            onContextMenu: _,
                            children: u && (0, i.jsx)(U.A, {}),
                        },
                        x,
                    ),
                }),
        });
    },
    D = (e) => {
        let {
                stageParticipant: t,
                rtcParticipant: n,
                channel: a,
                width: s,
                isModerator: r,
                onContextMenu: d,
                popoutType: _,
            } = e,
            { reducedMotion: p } = l.useContext(c.C),
            { id: h, blocked: g, ignored: x } = t,
            j = (0, o.yK)([I.A], () => I.A.getAllActiveStreams(), []),
            { selectedParticipant: N, largeStream: T } = (0, o.cf)([m.A], () => ({
                selectedParticipant: null != a ? m.A.getSelectedParticipant(a.id) : null,
                largeStream: null != a && m.A.getStageStreamSize(a.id),
            })),
            v = l.useCallback(
                (e, t) => {
                    if (
                        e.type === P.lp.STREAM &&
                        0 === j.filter((t) => (0, C._z)(t) === e.id && t.state !== w.XYD.ENDED).length
                    ) {
                        if (!(0, E.eo)(a, O.A, S.A, y.A, f.default)[0]) return;
                        (0, A.A9)((0, C.Iy)(e.id), { forceMultiple: t.shiftKey });
                    }
                    N?.id === e.id
                        ? T
                            ? (u.A.selectParticipant(a.id, null), u.A.updateStageStreamSize(a.id, !1))
                            : u.A.updateStageStreamSize(a.id, !0)
                        : (u.A.updateStageStreamSize(a.id, !1), u.A.selectParticipant(a.id, e.id));
                },
                [j, a, N, T],
            );
        return (0, i.jsx)(
            R.A,
            {
                participant: n,
                aspectRatio: M,
                fit: n.type === P.lp.USER ? b.$.COVER : void 0,
                blocked: g,
                ignored: x,
                channel: a,
                className: k.V,
                inCall: !0,
                popoutType: _,
                onClick: v,
                onContextMenu: d,
                pulseSpeakingIndicator: !p.enabled,
                width: s,
                children: r && n.type === P.lp.USER && (0, i.jsx)(U.A, {}),
            },
            h,
        );
    },
    V = l.memo(function (e) {
        let { participant: t, channel: l, width: a, popoutType: c } = e,
            { newestAnalyticsLocation: d } = (0, h.Ay)(p.A.STAGE_TILE),
            u = (0, j.Us)(),
            A = l.getGuildId(),
            f = v.default.getId();
        s()(null != A, "Channel cannot be guildless");
        let { user: C } = t,
            E = (0, o.bG)([m.A], () => m.A.getParticipant(l.id, t.id), [l.id, t.id]),
            b = (0, o.bG)([L.Ay], () => L.Ay.isModerator(C.id, l.id), [l.id, C.id]);
        if (null == E || E.type === P.lp.ACTIVITY) return null;
        let T = (e) => {
                (0, g.x)({
                    type: r.ImpressionTypes.MENU,
                    name: r.ImpressionNames.CALL_TILE_CONTEXT_MENU,
                    properties: { location: "StageTile", is_tile_owner: C.id === f, tile_type: e },
                });
            },
            I = (e, t, a, s) => {
                switch (e.type) {
                    case P.lp.HIDDEN_STREAM:
                    case P.lp.STREAM:
                        T(P.qs.STREAM),
                            (0, _.L3)(
                                t,
                                async () => {
                                    let { default: t } = await n.e("66692").then(n.bind(n, 796175));
                                    return (n) =>
                                        (0, i.jsx)(t, {
                                            ...n,
                                            stream: e.stream,
                                            appContext: u,
                                            exitFullscreen: () => {},
                                            onInteraction: (0, x.s)("StreamContextMenu", d, {
                                                entrypoint: s,
                                                targetUserId: C.id,
                                                tileType: P.qs.STREAM,
                                            }),
                                        });
                                },
                                { context: u },
                            );
                        return;
                    case P.lp.USER:
                    default:
                        if ((T(P.qs.USER), a))
                            return (0, N.r)(t, C, l, { context: u }, (e, t) =>
                                (0, x.Y)({
                                    menuName: e,
                                    menuItemProps: t,
                                    entrypoint: P.GK.THREE_DOT,
                                    targetUserId: C.id,
                                    location: d,
                                    tileType: P.qs.USER,
                                }),
                            );
                        (0, _.L3)(
                            t,
                            async () => {
                                let { default: e } = await Promise.all([
                                    n.e("97262"),
                                    n.e("42128"),
                                    n.e("84841"),
                                    n.e("79842"),
                                ]).then(n.bind(n, 107632));
                                return (t) =>
                                    (0, i.jsx)(e, {
                                        ...t,
                                        user: C,
                                        guildId: A,
                                        channel: l,
                                        showMediaItems: !0,
                                        showStageChannelItems: !0,
                                        showChatItems: !1,
                                        onInteraction: (0, x.s)("GuildChannelUserContextMenu", d, {
                                            targetUserId: C.id,
                                            tileType: P.qs.USER,
                                        }),
                                    });
                            },
                            { context: u },
                        );
                }
            };
        return E.type !== P.lp.USER || E.voiceState?.selfVideo
            ? (0, i.jsx)(D, {
                  stageParticipant: t,
                  rtcParticipant: E,
                  channel: l,
                  guildId: A,
                  user: C,
                  width: a,
                  isModerator: b,
                  onContextMenu: I,
                  popoutType: c,
              })
            : (0, i.jsx)(G, {
                  stageParticipant: t,
                  rtcParticipant: E,
                  channel: l,
                  guildId: A,
                  user: C,
                  width: a,
                  isModerator: b,
                  onContextMenu: I,
                  popoutType: c,
              });
    });
