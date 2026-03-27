"use strict";
n.d(t, { A: () => k, i: () => U });
var i = n(627968),
    s = n(64700),
    l = n(284009),
    r = n.n(l),
    a = n(110259),
    o = n(311907),
    c = n(397927),
    d = n(367513),
    u = n(442433),
    h = n(401843),
    A = n(793574),
    m = n(688810),
    _ = n(139286),
    p = n(313961),
    g = n(480890),
    f = n(643501),
    x = n(652896),
    E = n(279250),
    C = n(267102),
    I = n(401901),
    N = n(326567),
    b = n(342296),
    S = n(616356),
    T = n(961350),
    v = n(71393),
    y = n(576705),
    j = n(977997),
    R = n(312006),
    O = n(704384),
    L = n(289105),
    M = n(652215),
    D = n(806931),
    G = n(9295);
let U = 16 / 9,
    P = (e) => {
        let {
                stageParticipant: t,
                rtcParticipant: n,
                channel: l,
                guildId: r,
                user: a,
                width: o,
                isModerator: d,
                onContextMenu: u,
                popoutType: h,
            } = e,
            A = s.useRef(null),
            { reducedMotion: m } = s.useContext(c.CZY),
            { blocked: _, ignored: p, id: g } = t;
        return (0, i.jsx)(b.A, {
            targetElementRef: A,
            user: a,
            guildId: r,
            channelId: l.id,
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
                            aspectRatio: U,
                            blocked: _,
                            ignored: p,
                            channel: l,
                            className: G.V,
                            inCall: !0,
                            popoutType: h,
                            pulseSpeakingIndicator: !m.enabled,
                            width: o,
                            onContextMenu: u,
                            children: d && (0, i.jsx)(L.A, {}),
                        },
                        g,
                    ),
                }),
        });
    },
    w = (e) => {
        let {
                stageParticipant: t,
                rtcParticipant: n,
                channel: l,
                width: r,
                isModerator: a,
                onContextMenu: u,
                popoutType: A,
            } = e,
            { reducedMotion: m } = s.useContext(c.CZY),
            { id: _, blocked: g, ignored: C } = t,
            N = (0, o.yK)([S.A], () => S.A.getAllActiveStreams(), []),
            { selectedParticipant: b, largeStream: T } = (0, o.cf)([p.A], () => ({
                selectedParticipant: null != l ? p.A.getSelectedParticipant(l.id) : null,
                largeStream: null != l && p.A.getStageStreamSize(l.id),
            })),
            R = s.useCallback(
                (e, t) => {
                    if (
                        e.type === D.lp.STREAM &&
                        0 === N.filter((t) => (0, x._z)(t) === e.id && t.state !== M.XYD.ENDED).length
                    ) {
                        if (!(0, E.eo)(l, j.A, v.A, y.A, f.default)[0]) return;
                        (0, h.A9)((0, x.Iy)(e.id), { forceMultiple: t.shiftKey });
                    }
                    b?.id === e.id
                        ? T
                            ? (d.A.selectParticipant(l.id, null), d.A.updateStageStreamSize(l.id, !1))
                            : d.A.updateStageStreamSize(l.id, !0)
                        : (d.A.updateStageStreamSize(l.id, !1), d.A.selectParticipant(l.id, e.id));
                },
                [N, l, b, T],
            );
        return (0, i.jsx)(
            O.A,
            {
                participant: n,
                aspectRatio: U,
                fit: n.type === D.lp.USER ? I.$.COVER : void 0,
                blocked: g,
                ignored: C,
                channel: l,
                className: G.V,
                inCall: !0,
                popoutType: A,
                onClick: R,
                onContextMenu: u,
                pulseSpeakingIndicator: !m.enabled,
                width: r,
                children: a && n.type === D.lp.USER && (0, i.jsx)(L.A, {}),
            },
            _,
        );
    },
    k = s.memo(function (e) {
        let { participant: t, channel: s, width: l, popoutType: c } = e,
            { newestAnalyticsLocation: d } = (0, m.Ay)(A.A.STAGE_TILE),
            h = (0, C.Us)(),
            f = s.getGuildId(),
            x = T.default.getId();
        r()(null != f, "Channel cannot be guildless");
        let { user: E } = t,
            I = (0, o.bG)([p.A], () => p.A.getParticipant(s.id, t.id), [s.id, t.id]),
            b = (0, o.bG)([R.Ay], () => R.Ay.isModerator(E.id, s.id), [s.id, E.id]);
        if (null == I || I.type === D.lp.ACTIVITY) return null;
        let S = (e) => {
                (0, _.x)({
                    type: a.ImpressionTypes.MENU,
                    name: a.ImpressionNames.CALL_TILE_CONTEXT_MENU,
                    properties: { location: "StageTile", is_tile_owner: E.id === x, tile_type: e },
                });
            },
            v = (e, t, l, r) => {
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
                                            onInteraction: (0, g.s)("StreamContextMenu", d, {
                                                entrypoint: r,
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
                        if ((S(D.qs.USER), l))
                            return (0, N.r)(t, E, s, { context: h }, (e, t) =>
                                (0, g.Y)({
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
                                    n.e("36382"),
                                ]).then(n.bind(n, 107632));
                                return (t) =>
                                    (0, i.jsx)(e, {
                                        ...t,
                                        user: E,
                                        guildId: f,
                                        channel: s,
                                        showMediaItems: !0,
                                        showStageChannelItems: !0,
                                        showChatItems: !1,
                                        onInteraction: (0, g.s)("GuildChannelUserContextMenu", d, {
                                            targetUserId: E.id,
                                            tileType: D.qs.USER,
                                        }),
                                    });
                            },
                            { context: h },
                        );
                }
            };
        return I.type !== D.lp.USER || I.voiceState?.selfVideo
            ? (0, i.jsx)(w, {
                  stageParticipant: t,
                  rtcParticipant: I,
                  channel: s,
                  guildId: f,
                  user: E,
                  width: l,
                  isModerator: b,
                  onContextMenu: v,
                  popoutType: c,
              })
            : (0, i.jsx)(P, {
                  stageParticipant: t,
                  rtcParticipant: I,
                  channel: s,
                  guildId: f,
                  user: E,
                  width: l,
                  isModerator: b,
                  onContextMenu: v,
                  popoutType: c,
              });
    });
