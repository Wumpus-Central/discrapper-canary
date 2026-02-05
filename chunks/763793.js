n.d(t, { A: () => w, i: () => U });
var i = n(627968),
    l = n(64700),
    s = n(284009),
    a = n.n(s),
    r = n(110259),
    o = n(311907),
    d = n(397927),
    c = n(367513),
    u = n(442433),
    h = n(401843),
    A = n(793574),
    g = n(688810),
    m = n(139286),
    p = n(313961),
    _ = n(480890),
    x = n(643501),
    f = n(652896),
    E = n(279250),
    C = n(267102),
    I = n(401901),
    S = n(326567),
    b = n(342296),
    N = n(616356),
    T = n(961350),
    j = n(71393),
    v = n(576705),
    y = n(977997),
    R = n(312006),
    O = n(704384),
    L = n(289105),
    D = n(652215),
    M = n(806931),
    G = n(742149);
let U = 16 / 9,
    P = (e) => {
        let {
                stageParticipant: t,
                rtcParticipant: n,
                channel: s,
                guildId: a,
                user: r,
                width: o,
                isModerator: c,
                onContextMenu: u,
                popoutType: h,
            } = e,
            A = l.useRef(null),
            { reducedMotion: g } = l.useContext(d.CZY),
            { blocked: m, ignored: p, id: _ } = t;
        return (0, i.jsx)(b.A, {
            targetElementRef: A,
            user: r,
            guildId: a,
            channelId: s.id,
            clickTrap: !0,
            children: (e) =>
                (0, i.jsx)(d.DUT, {
                    innerRef: A,
                    onContextMenu: (e) => u(n, e),
                    ...e,
                    children: (0, i.jsx)(
                        O.A,
                        {
                            participant: n,
                            aspectRatio: U,
                            blocked: m,
                            ignored: p,
                            channel: s,
                            className: G.V,
                            inCall: !0,
                            popoutType: h,
                            pulseSpeakingIndicator: !g.enabled,
                            width: o,
                            onContextMenu: u,
                            children: c && (0, i.jsx)(L.A, {}),
                        },
                        _,
                    ),
                }),
        });
    },
    k = (e) => {
        let {
                stageParticipant: t,
                rtcParticipant: n,
                channel: s,
                width: a,
                isModerator: r,
                onContextMenu: u,
                popoutType: A,
            } = e,
            { reducedMotion: g } = l.useContext(d.CZY),
            { id: m, blocked: _, ignored: C } = t,
            S = (0, o.yK)([N.A], () => N.A.getAllActiveStreams(), []),
            { selectedParticipant: b, largeStream: T } = (0, o.cf)([p.A], () => ({
                selectedParticipant: null != s ? p.A.getSelectedParticipant(s.id) : null,
                largeStream: null != s && p.A.getStageStreamSize(s.id),
            })),
            R = l.useCallback(
                (e, t) => {
                    if (
                        e.type === M.lp.STREAM &&
                        0 === S.filter((t) => (0, f._z)(t) === e.id && t.state !== D.XYD.ENDED).length
                    ) {
                        if (!(0, E.eo)(s, y.A, j.A, v.A, x.default)[0]) return;
                        (0, h.A9)((0, f.Iy)(e.id), { forceMultiple: t.shiftKey });
                    }
                    b?.id === e.id
                        ? T
                            ? (c.A.selectParticipant(s.id, null), c.A.updateStageStreamSize(s.id, !1))
                            : c.A.updateStageStreamSize(s.id, !0)
                        : (c.A.updateStageStreamSize(s.id, !1), c.A.selectParticipant(s.id, e.id));
                },
                [S, s, b, T],
            );
        return (0, i.jsx)(
            O.A,
            {
                participant: n,
                aspectRatio: U,
                fit: n.type === M.lp.USER ? I.$.COVER : void 0,
                blocked: _,
                ignored: C,
                channel: s,
                className: G.V,
                inCall: !0,
                popoutType: A,
                onClick: R,
                onContextMenu: u,
                pulseSpeakingIndicator: !g.enabled,
                width: a,
                children: r && n.type === M.lp.USER && (0, i.jsx)(L.A, {}),
            },
            m,
        );
    },
    w = l.memo(function (e) {
        let { participant: t, channel: l, width: s, popoutType: d } = e,
            { newestAnalyticsLocation: c } = (0, g.Ay)(A.A.STAGE_TILE),
            h = (0, C.Us)(),
            x = l.getGuildId(),
            f = T.default.getId();
        a()(null != x, "Channel cannot be guildless");
        let { user: E } = t,
            I = (0, o.bG)([p.A], () => p.A.getParticipant(l.id, t.id), [l.id, t.id]),
            b = (0, o.bG)([R.Ay], () => R.Ay.isModerator(E.id, l.id), [l.id, E.id]);
        if (null == I || I.type === M.lp.ACTIVITY) return null;
        let N = (e) => {
                (0, m.x)({
                    type: r.ImpressionTypes.MENU,
                    name: r.ImpressionNames.CALL_TILE_CONTEXT_MENU,
                    properties: { location: "StageTile", is_tile_owner: E.id === f, tile_type: e },
                });
            },
            j = (e, t, s, a) => {
                switch (e.type) {
                    case M.lp.HIDDEN_STREAM:
                    case M.lp.STREAM:
                        N(M.qs.STREAM),
                            (0, u.L3)(
                                t,
                                async () => {
                                    let { default: t } = await n.e("66692").then(n.bind(n, 796175));
                                    return (n) =>
                                        (0, i.jsx)(t, {
                                            ...n,
                                            stream: e.stream,
                                            appContext: h,
                                            exitFullscreen: () => {},
                                            onInteraction: (0, _.s)("StreamContextMenu", c, {
                                                entrypoint: a,
                                                targetUserId: E.id,
                                                tileType: M.qs.STREAM,
                                            }),
                                        });
                                },
                                { context: h },
                            );
                        return;
                    case M.lp.USER:
                    default:
                        if ((N(M.qs.USER), s))
                            return (0, S.r)(t, E, l, { context: h }, (e, t) =>
                                (0, _.Y)({
                                    menuName: e,
                                    menuItemProps: t,
                                    entrypoint: M.GK.THREE_DOT,
                                    targetUserId: E.id,
                                    location: c,
                                    tileType: M.qs.USER,
                                }),
                            );
                        (0, u.L3)(
                            t,
                            async () => {
                                let { default: e } = await Promise.all([
                                    n.e("97262"),
                                    n.e("42128"),
                                    n.e("82892"),
                                    n.e("84841"),
                                    n.e("31885"),
                                ]).then(n.bind(n, 107632));
                                return (t) =>
                                    (0, i.jsx)(e, {
                                        ...t,
                                        user: E,
                                        guildId: x,
                                        channel: l,
                                        showMediaItems: !0,
                                        showStageChannelItems: !0,
                                        showChatItems: !1,
                                        onInteraction: (0, _.s)("GuildChannelUserContextMenu", c, {
                                            targetUserId: E.id,
                                            tileType: M.qs.USER,
                                        }),
                                    });
                            },
                            { context: h },
                        );
                }
            };
        return I.type !== M.lp.USER || I.voiceState?.selfVideo
            ? (0, i.jsx)(k, {
                  stageParticipant: t,
                  rtcParticipant: I,
                  channel: l,
                  guildId: x,
                  user: E,
                  width: s,
                  isModerator: b,
                  onContextMenu: j,
                  popoutType: d,
              })
            : (0, i.jsx)(P, {
                  stageParticipant: t,
                  rtcParticipant: I,
                  channel: l,
                  guildId: x,
                  user: E,
                  width: s,
                  isModerator: b,
                  onContextMenu: j,
                  popoutType: d,
              });
    });
