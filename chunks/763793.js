n.d(t, { A: () => w, i: () => G });
var i = n(627968),
    l = n(64700),
    s = n(284009),
    a = n.n(s),
    r = n(110259),
    o = n(311907),
    c = n(397927),
    d = n(367513),
    u = n(442433),
    h = n(401843),
    A = n(793574),
    _ = n(688810),
    m = n(139286),
    g = n(313961),
    p = n(480890),
    f = n(643501),
    x = n(652896),
    E = n(279250),
    I = n(267102),
    C = n(401901),
    N = n(326567),
    T = n(342296),
    S = n(616356),
    b = n(961350),
    y = n(71393),
    v = n(576705),
    j = n(977997),
    R = n(312006),
    O = n(704384),
    L = n(289105),
    M = n(652215),
    D = n(806931),
    U = n(905686);
let G = 16 / 9,
    P = (e) => {
        let {
                stageParticipant: t,
                rtcParticipant: n,
                channel: s,
                guildId: a,
                user: r,
                width: o,
                isModerator: d,
                onContextMenu: u,
                popoutType: h,
            } = e,
            A = l.useRef(null),
            { reducedMotion: _ } = l.useContext(c.CZY),
            { blocked: m, ignored: g, id: p } = t;
        return (0, i.jsx)(T.A, {
            targetElementRef: A,
            user: r,
            guildId: a,
            channelId: s.id,
            clickTrap: !0,
            children: (e) =>
                (0, i.jsx)(c.DUT, {
                    innerRef: A,
                    onContextMenu: (e) => u(n, e),
                    ...e,
                    children: (0, i.jsx)(
                        O.A,
                        {
                            participant: n,
                            aspectRatio: G,
                            blocked: m,
                            ignored: g,
                            channel: s,
                            className: U.V,
                            inCall: !0,
                            popoutType: h,
                            pulseSpeakingIndicator: !_.enabled,
                            width: o,
                            onContextMenu: u,
                            children: d && (0, i.jsx)(L.A, {}),
                        },
                        p,
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
            { reducedMotion: _ } = l.useContext(c.CZY),
            { id: m, blocked: p, ignored: I } = t,
            N = (0, o.yK)([S.A], () => S.A.getAllActiveStreams(), []),
            { selectedParticipant: T, largeStream: b } = (0, o.cf)([g.A], () => ({
                selectedParticipant: null != s ? g.A.getSelectedParticipant(s.id) : null,
                largeStream: null != s && g.A.getStageStreamSize(s.id),
            })),
            R = l.useCallback(
                (e, t) => {
                    if (
                        e.type === D.lp.STREAM &&
                        0 === N.filter((t) => (0, x._z)(t) === e.id && t.state !== M.XYD.ENDED).length
                    ) {
                        if (!(0, E.eo)(s, j.A, y.A, v.A, f.default)[0]) return;
                        (0, h.A9)((0, x.Iy)(e.id), { forceMultiple: t.shiftKey });
                    }
                    T?.id === e.id
                        ? b
                            ? (d.A.selectParticipant(s.id, null), d.A.updateStageStreamSize(s.id, !1))
                            : d.A.updateStageStreamSize(s.id, !0)
                        : (d.A.updateStageStreamSize(s.id, !1), d.A.selectParticipant(s.id, e.id));
                },
                [N, s, T, b],
            );
        return (0, i.jsx)(
            O.A,
            {
                participant: n,
                aspectRatio: G,
                fit: n.type === D.lp.USER ? C.$.COVER : void 0,
                blocked: p,
                ignored: I,
                channel: s,
                className: U.V,
                inCall: !0,
                popoutType: A,
                onClick: R,
                onContextMenu: u,
                pulseSpeakingIndicator: !_.enabled,
                width: a,
                children: r && n.type === D.lp.USER && (0, i.jsx)(L.A, {}),
            },
            m,
        );
    },
    w = l.memo(function (e) {
        let { participant: t, channel: l, width: s, popoutType: c } = e,
            { newestAnalyticsLocation: d } = (0, _.Ay)(A.A.STAGE_TILE),
            h = (0, I.Us)(),
            f = l.getGuildId(),
            x = b.default.getId();
        a()(null != f, "Channel cannot be guildless");
        let { user: E } = t,
            C = (0, o.bG)([g.A], () => g.A.getParticipant(l.id, t.id), [l.id, t.id]),
            T = (0, o.bG)([R.Ay], () => R.Ay.isModerator(E.id, l.id), [l.id, E.id]);
        if (null == C || C.type === D.lp.ACTIVITY) return null;
        let S = (e) => {
                (0, m.x)({
                    type: r.ImpressionTypes.MENU,
                    name: r.ImpressionNames.CALL_TILE_CONTEXT_MENU,
                    properties: { location: "StageTile", is_tile_owner: E.id === x, tile_type: e },
                });
            },
            y = (e, t, s, a) => {
                switch (e.type) {
                    case D.lp.HIDDEN_STREAM:
                    case D.lp.STREAM:
                        S(D.qs.STREAM),
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
                                            onInteraction: (0, p.s)("StreamContextMenu", d, {
                                                entrypoint: a,
                                                targetUserId: E.id,
                                                tileType: D.qs.STREAM,
                                            }),
                                        });
                                },
                                { context: h },
                            );
                        return;
                    case D.lp.USER:
                    default:
                        if ((S(D.qs.USER), s))
                            return (0, N.r)(t, E, l, { context: h }, (e, t) =>
                                (0, p.Y)({
                                    menuName: e,
                                    menuItemProps: t,
                                    entrypoint: D.GK.THREE_DOT,
                                    targetUserId: E.id,
                                    location: d,
                                    tileType: D.qs.USER,
                                }),
                            );
                        (0, u.L3)(
                            t,
                            async () => {
                                let { default: e } = await Promise.all([
                                    n.e("97262"),
                                    n.e("42128"),
                                    n.e("84841"),
                                    n.e("50970"),
                                ]).then(n.bind(n, 107632));
                                return (t) =>
                                    (0, i.jsx)(e, {
                                        ...t,
                                        user: E,
                                        guildId: f,
                                        channel: l,
                                        showMediaItems: !0,
                                        showStageChannelItems: !0,
                                        showChatItems: !1,
                                        onInteraction: (0, p.s)("GuildChannelUserContextMenu", d, {
                                            targetUserId: E.id,
                                            tileType: D.qs.USER,
                                        }),
                                    });
                            },
                            { context: h },
                        );
                }
            };
        return C.type !== D.lp.USER || C.voiceState?.selfVideo
            ? (0, i.jsx)(k, {
                  stageParticipant: t,
                  rtcParticipant: C,
                  channel: l,
                  guildId: f,
                  user: E,
                  width: s,
                  isModerator: T,
                  onContextMenu: y,
                  popoutType: c,
              })
            : (0, i.jsx)(P, {
                  stageParticipant: t,
                  rtcParticipant: C,
                  channel: l,
                  guildId: f,
                  user: E,
                  width: s,
                  isModerator: T,
                  onContextMenu: y,
                  popoutType: c,
              });
    });
