n.d(t, { A: () => T });
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
    x = n(140735),
    f = n(747556),
    g = n(255434),
    y = n(401843),
    C = n(402216),
    j = n(607407),
    v = n(287809),
    E = n(562153),
    N = n(662731),
    I = n(375708),
    b = n(948559);
function T(e) {
    let { stream: t, fit: n, tooltipSpacing: T, liveCount: _, containerWidthPx: R } = e,
        S = (0, a.bG)([v.default], () => v.default.getUser(t.ownerId)),
        L = E.Ay.useName(t.guildId, t.channelId, S),
        P = R / 225,
        w = I.intl.string(I.t["7Xq/nV"]),
        O = l.useCallback(() => {
            (0, y.A9)(t);
        }, [t]),
        M = { left: `${n.originX}%`, top: `${n.originY}%`, transform: n.matrix },
        {
            tooltipId: D,
            isVisible: U,
            targetElementRef: k,
            trigger: V,
        } = (0, s.D)({
            children: (0, i.jsxs)(r.D, {
                tag: "div",
                "aria-label": w,
                className: b.VH,
                style: M,
                onClick: O,
                children: [
                    (0, i.jsx)(j.A, { stream: t, className: b.oz, noText: !0 }),
                    (0, i.jsx)("div", {
                        className: b.d3,
                        style: { transform: `translate(-50%, -50%) scale(${P})` },
                        children: (0, i.jsx)(o.$, {
                            text: w,
                            variant: "overlay-secondary",
                            tabIndex: -1,
                            "aria-hidden": !0,
                        }),
                    }),
                    (0, i.jsx)(C.Ay, {
                        size: C.Ay.Sizes.SMALL,
                        className: b.Ok,
                        style: { transform: `scale(${P})` },
                        count: _,
                    }),
                ],
            }),
        }),
        G = (0, c.j)({ shouldShow: U }),
        B = (0, i.jsxs)(d.B, {
            direction: "horizontal",
            align: "center",
            gap: 8,
            fullWidth: !1,
            padding: { top: 8, right: 12, bottom: 8, left: 12 },
            className: b.rv,
            children: [
                (0, i.jsx)(u.eu, { src: S?.getAvatarURL(t.guildId, 96), size: h._3.SIZE_48, "aria-hidden": !0 }),
                (0, i.jsxs)(d.B, {
                    gap: 0,
                    fullWidth: !1,
                    className: b.x8,
                    children: [
                        (0, i.jsx)(p.E, { variant: "text-sm/medium", lineClamp: 1, children: L }),
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
                                    children: I.intl.string(N.default["2Ll0vk"]),
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            V,
            (0, i.jsx)(x.A, { id: D, children: B }),
            G((e, t) =>
                t
                    ? (0, i.jsx)(f.Bc, {
                          isRichTooltip: !0,
                          children: (0, i.jsx)(g.R, {
                              isVisible: U,
                              targetElementRef: k,
                              id: D,
                              content: B,
                              position: "top",
                              spacing: T,
                              animationStyle: e,
                          }),
                      })
                    : null,
            ),
        ],
    });
}
