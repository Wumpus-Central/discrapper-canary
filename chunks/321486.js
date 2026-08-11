n.d(t, { A: () => L });
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
    A = n(661531),
    f = n(140735),
    x = n(747556),
    g = n(255434),
    C = n(367513),
    y = n(401843),
    j = n(402216),
    I = n(652896),
    v = n(607407),
    E = n(616356),
    N = n(287809),
    b = n(562153),
    T = n(652215),
    _ = n(662731),
    R = n(375708),
    S = n(948559);
function L(e) {
    let { stream: t, fit: n, tooltipSpacing: L, liveCount: P, containerWidthPx: O } = e,
        w = (0, a.bG)([N.default], () => N.default.getUser(t.ownerId)),
        M = b.Ay.useName(t.guildId, t.channelId, w),
        D = O / 225,
        U = R.intl.string(R.t["7Xq/nV"]),
        V = l.useCallback(() => {
            let e = E.A.getActiveStreamForApplicationStream(t);
            null != e && e.state !== T.XYD.ENDED && e.ownerId === t.ownerId
                ? C.A.selectParticipant(t.channelId, (0, I._z)(t))
                : (0, y.A9)(t);
        }, [t]),
        k = { left: `${n.originX}%`, top: `${n.originY}%`, transform: n.matrix },
        {
            tooltipId: G,
            isVisible: B,
            targetElementRef: F,
            trigger: z,
        } = (0, s.D)({
            children: (0, i.jsxs)(r.D, {
                tag: "div",
                "aria-label": U,
                className: S.VH,
                style: k,
                onClick: V,
                children: [
                    (0, i.jsx)(v.A, { stream: t, className: S.oz, noText: !0 }),
                    (0, i.jsx)("div", {
                        className: S.d3,
                        style: { transform: `translate(-50%, -50%) scale(${D})` },
                        children: (0, i.jsx)(o.$, {
                            text: U,
                            variant: "overlay-secondary",
                            tabIndex: -1,
                            "aria-hidden": !0,
                        }),
                    }),
                    (0, i.jsx)(j.Ay, {
                        size: j.Ay.Sizes.SMALL,
                        className: S.Ok,
                        style: { transform: `scale(${D})` },
                        count: P,
                    }),
                ],
            }),
        }),
        H = (0, c.j)({ shouldShow: B }),
        W = (0, i.jsxs)(d.B, {
            direction: "horizontal",
            align: "center",
            gap: 8,
            fullWidth: !1,
            padding: { top: 8, right: 12, bottom: 8, left: 12 },
            className: S.rv,
            children: [
                (0, i.jsx)(u.eu, { src: w?.getAvatarURL(t.guildId, 96), size: h._3.SIZE_48, "aria-hidden": !0 }),
                (0, i.jsxs)(d.B, {
                    gap: 0,
                    fullWidth: !1,
                    className: S.x8,
                    children: [
                        (0, i.jsx)(p.E, { variant: "text-sm/medium", lineClamp: 1, children: M }),
                        (0, i.jsxs)(d.B, {
                            direction: "horizontal",
                            align: "center",
                            gap: 4,
                            fullWidth: !1,
                            children: [
                                (0, i.jsx)(m.U, { size: "xs", color: A.A.colors.TEXT_FEEDBACK_POSITIVE }),
                                (0, i.jsx)(p.E, {
                                    variant: "text-sm/normal",
                                    color: "text-feedback-positive",
                                    children: R.intl.string(_.default["2Ll0vk"]),
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            z,
            (0, i.jsx)(f.A, { id: G, children: W }),
            H((e, t) =>
                t
                    ? (0, i.jsx)(x.Bc, {
                          isRichTooltip: !0,
                          children: (0, i.jsx)(g.R, {
                              isVisible: B,
                              targetElementRef: F,
                              id: G,
                              content: W,
                              position: "top",
                              spacing: L,
                              animationStyle: e,
                          }),
                      })
                    : null,
            ),
        ],
    });
}
