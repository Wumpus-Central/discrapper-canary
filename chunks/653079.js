n.d(t, { Z: () => g });
var r = n(951288),
    i = n(120356),
    a = n.n(i),
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
    v = n(763740);
let g = (e) => {
    let { user: t, guildId: n, selectedNameplate: i } = e,
        g = (0, l.e7)([_.Z], () => _.Z.getPendingGlobalName()),
        { product: b, purchase: x } = (0, c.Z)(null == i ? void 0 : i.skuId),
        C = (0, p.kd)(b),
        f = m.ZP.canUseCollectibles(t),
        w = (0, s.qS)(x),
        I = (0, s.G1)(b),
        P = !f && w,
        y = null == x || P;
    return (0, r.jsxs)("div", {
        className: a()(v.previewBorder, { [v.upsell]: null != i && y }),
        children: [
            (0, r.jsx)("div", {
                className: v.previewBox,
                role: "img",
                "aria-label": h.intl.string(h.t.SZeUdX),
                children: (0, r.jsxs)("div", {
                    className: v.previewContents,
                    "aria-hidden": !0,
                    children: [
                        (0, r.jsx)(d.d, {
                            width: 124,
                            opacity: 0.9,
                        }),
                        (0, r.jsx)(d.d, {
                            width: 124,
                            opacity: 0.9,
                        }),
                        (0, r.jsx)(u.Z, {
                            user: t,
                            guildId: n,
                            nameplate: i,
                            pendingGlobalName: g,
                            isHighlighted: !0,
                        }),
                        (0, r.jsx)(d.d, {
                            width: 124,
                            opacity: 0.9,
                        }),
                        (0, r.jsx)(d.d, {
                            width: 124,
                            opacity: 0.9,
                        }),
                    ],
                }),
            }),
            null != i &&
                (0, r.jsxs)("div", {
                    className: v.previewDescription,
                    children: [
                        (0, r.jsx)(o.Text, {
                            variant: "text-sm/semibold",
                            children: C,
                        }),
                        y &&
                            (0, r.jsx)(o.Text, {
                                variant: "text-sm/normal",
                                children: P
                                    ? h.intl.string(h.t.nD78oa)
                                    : I && f
                                      ? h.intl.string(h.t.hmyYKy)
                                      : I
                                        ? h.intl.string(h.t.JY1i0t)
                                        : h.intl.string(h.t.fEGjVV),
                            }),
                    ],
                }),
        ],
    });
};
