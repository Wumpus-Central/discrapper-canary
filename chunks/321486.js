n.d(t, { A: () => _ });
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
    C = n(402216),
    y = n(607407),
    j = n(287809),
    I = n(562153),
    v = n(809369),
    E = n(662731),
    N = n(375708),
    b = n(948559);
function _(e) {
    let { stream: t, fit: n, tooltipSpacing: _, liveCount: T, containerWidthPx: R } = e,
        S = (0, a.bG)([j.default], () => j.default.getUser(t.ownerId)),
        L = I.Ay.useName(t.guildId, t.channelId, S),
        O = R / 225,
        P = N.intl.string(N.t["7Xq/nV"]),
        w = l.useCallback(() => (0, v.k)(t), [t]),
        M = { left: `${n.originX}%`, top: `${n.originY}%`, transform: n.matrix },
        {
            tooltipId: D,
            isVisible: U,
            targetElementRef: V,
            trigger: k,
        } = (0, s.D)({
            children: (0, i.jsxs)(r.D, {
                tag: "div",
                "aria-label": P,
                className: b.VH,
                style: M,
                onClick: w,
                children: [
                    (0, i.jsx)(y.A, { stream: t, className: b.oz, noText: !0 }),
                    (0, i.jsx)("div", {
                        className: b.d3,
                        style: { transform: `translate(-50%, -50%) scale(${O})` },
                        children: (0, i.jsx)(o.$, {
                            text: P,
                            variant: "overlay-secondary",
                            tabIndex: -1,
                            "aria-hidden": !0,
                        }),
                    }),
                    (0, i.jsx)(C.Ay, {
                        size: C.Ay.Sizes.SMALL,
                        className: b.Ok,
                        style: { transform: `scale(${O})` },
                        count: T,
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
                                (0, i.jsx)(m.U, { size: "xs", color: f.A.colors.TEXT_FEEDBACK_POSITIVE }),
                                (0, i.jsx)(p.E, {
                                    variant: "text-sm/normal",
                                    color: "text-feedback-positive",
                                    children: N.intl.string(E.default["2Ll0vk"]),
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            k,
            (0, i.jsx)(A.A, { id: D, children: B }),
            G((e, t) =>
                t
                    ? (0, i.jsx)(x.Bc, {
                          isRichTooltip: !0,
                          children: (0, i.jsx)(g.R, {
                              isVisible: U,
                              targetElementRef: V,
                              id: D,
                              content: B,
                              position: "top",
                              spacing: _,
                              animationStyle: e,
                          }),
                      })
                    : null,
            ),
        ],
    });
}
