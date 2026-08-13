n.d(t, { A: () => U });
var i = n(477900),
    l = n(582128),
    a = n(17928),
    s = n(194981),
    r = n(939249),
    o = n(821609),
    c = n(280336),
    d = n(331322),
    u = n(97808),
    h = n(778712),
    p = n(834730),
    m = n(748562),
    f = n(661531),
    A = n(140735),
    x = n(747556),
    g = n(255434),
    C = n(228366),
    y = n(367513),
    j = n(401843),
    I = n(262763),
    v = n(402216),
    E = n(652896),
    N = n(607407),
    b = n(499211),
    _ = n(616356),
    T = n(734057),
    R = n(287809),
    S = n(977997),
    L = n(562153),
    O = n(446243),
    P = n(652215),
    w = n(662731),
    M = n(375708),
    D = n(948559);
function U(e) {
    let { stream: t, fit: n, tooltipSpacing: U, liveCount: V, containerWidthPx: k } = e,
        { channelId: G } = t,
        B = (0, a.bG)([R.default], () => R.default.getUser(t.ownerId)),
        F = L.Ay.useName(t.guildId, t.channelId, B),
        z = k / 225,
        H = M.intl.string(M.t["7Xq/nV"]),
        W = l.useCallback(async () => {
            let e = T.A.getChannel(G);
            if (null == e) return;
            if (!S.A.isInChannel(G)) {
                if (
                    !(await I.A.handleVoiceConnect({
                        channel: e,
                        connected: !1,
                        needSubscriptionToAccess: (0, b.p)(t.channelId).needSubscriptionToAccess,
                    }))
                )
                    return;
                await new Promise((e) => {
                    C.h.subscribe("GUILD_ROOM_CONNECT", function t(n) {
                        n.room.roomId === G && (C.h.unsubscribe("GUILD_ROOM_CONNECT", t), e(!0));
                    });
                });
            }
            let n = _.A.getActiveStreamForApplicationStream(t);
            if (null != n && n.state !== P.XYD.ENDED && n.ownerId === t.ownerId) {
                y.A.selectParticipant(t.channelId, (0, E._z)(t)), (0, O.UV)(!0, t.channelId);
                return;
            }
            (0, j.A9)(t);
        }, [G, t]),
        $ = { left: `${n.originX}%`, top: `${n.originY}%`, transform: n.matrix },
        {
            tooltipId: Y,
            isVisible: K,
            targetElementRef: q,
            trigger: X,
        } = (0, s.D)({
            children: (0, i.jsxs)(r.D, {
                tag: "div",
                "aria-label": H,
                className: D.VH,
                style: $,
                onClick: W,
                children: [
                    (0, i.jsx)(N.A, { stream: t, className: D.oz, noText: !0 }),
                    (0, i.jsx)("div", {
                        className: D.d3,
                        style: { transform: `translate(-50%, -50%) scale(${z})` },
                        children: (0, i.jsx)(o.$, {
                            text: H,
                            variant: "overlay-secondary",
                            tabIndex: -1,
                            "aria-hidden": !0,
                        }),
                    }),
                    (0, i.jsx)(v.Ay, {
                        size: v.Ay.Sizes.SMALL,
                        className: D.Ok,
                        style: { transform: `scale(${z})` },
                        count: V,
                    }),
                ],
            }),
        }),
        Z = (0, c.j)({ shouldShow: K }),
        Q = (0, i.jsxs)(d.B, {
            direction: "horizontal",
            align: "center",
            gap: 8,
            fullWidth: !1,
            padding: { top: 8, right: 12, bottom: 8, left: 12 },
            className: D.rv,
            children: [
                (0, i.jsx)(u.eu, { src: B?.getAvatarURL(t.guildId, 96), size: h._3.SIZE_48, "aria-hidden": !0 }),
                (0, i.jsxs)(d.B, {
                    gap: 0,
                    fullWidth: !1,
                    className: D.x8,
                    children: [
                        (0, i.jsx)(p.E, { variant: "text-sm/medium", lineClamp: 1, children: F }),
                        (0, i.jsxs)(d.B, {
                            direction: "horizontal",
                            align: "center",
                            gap: 4,
                            fullWidth: !1,
                            children: [
                                (0, i.jsx)(m.U, { size: "xs", color: f.A.colors.TEXT_FEEDBACK_POSITIVE }),
                                (0, i.jsx)(p.E, {
                                    variant: "text-sm/normal",
                                    color: "text-feedback-positive",
                                    children: M.intl.string(w.default["2Ll0vk"]),
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            X,
            (0, i.jsx)(A.A, { id: Y, children: Q }),
            Z((e, t) =>
                t
                    ? (0, i.jsx)(x.Bc, {
                          isRichTooltip: !0,
                          children: (0, i.jsx)(g.R, {
                              isVisible: K,
                              targetElementRef: q,
                              id: Y,
                              content: Q,
                              position: "top",
                              spacing: U,
                              animationStyle: e,
                          }),
                      })
                    : null,
            ),
        ],
    });
}
