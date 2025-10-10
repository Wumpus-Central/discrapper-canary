n.d(t, { Z: () => b });
var i = n(951288),
    r = n(120356),
    a = n.n(r),
    l = n(442837),
    o = n(481060),
    s = n(884697),
    c = n(449217),
    d = n(709999),
    u = n(22267),
    p = n(29121),
    _ = n(25990),
    m = n(74538),
    h = n(388032),
    g = n(763740);
let b = (e) => {
    let { user: t, guildId: n, selectedNameplate: r } = e,
        b = (0, l.e7)([_.Z], () => _.Z.getPendingGlobalName()),
        { product: v, purchase: x } = (0, c.Z)(null == r ? void 0 : r.skuId),
        C = (0, p.kd)(v),
        f = m.ZP.canUseCollectibles(t),
        I = (0, s.qS)(x),
        P = (0, s.G1)(v),
        y = !f && I,
        w = null == x || y;
    return (0, i.jsxs)("div", {
        className: a()(g.previewBorder, { [g.upsell]: null != r && w }),
        children: [
            (0, i.jsx)("div", {
                className: g.previewBox,
                role: "img",
                "aria-label": h.intl.string(h.t.SZeUdX),
                children: (0, i.jsxs)("div", {
                    className: g.previewContents,
                    "aria-hidden": !0,
                    children: [
                        (0, i.jsx)(d.d, {
                            width: 124,
                            opacity: 0.9,
                        }),
                        (0, i.jsx)(d.d, {
                            width: 124,
                            opacity: 0.9,
                        }),
                        (0, i.jsx)(u.Z, {
                            user: t,
                            guildId: n,
                            nameplate: r,
                            pendingGlobalName: b,
                            isHighlighted: !0,
                        }),
                        (0, i.jsx)(d.d, {
                            width: 124,
                            opacity: 0.9,
                        }),
                        (0, i.jsx)(d.d, {
                            width: 124,
                            opacity: 0.9,
                        }),
                    ],
                }),
            }),
            null != r &&
                (0, i.jsxs)("div", {
                    className: g.previewDescription,
                    children: [
                        (0, i.jsx)(o.Text, {
                            variant: "text-sm/semibold",
                            children: C,
                        }),
                        w &&
                            (0, i.jsx)(o.Text, {
                                variant: "text-sm/normal",
                                children: y
                                    ? h.intl.string(h.t.nD78oa)
                                    : P && f
                                      ? h.intl.string(h.t.hmyYKy)
                                      : P
                                        ? h.intl.string(h.t.JY1i0t)
                                        : h.intl.string(h.t.fEGjVV),
                            }),
                    ],
                }),
        ],
    });
};
