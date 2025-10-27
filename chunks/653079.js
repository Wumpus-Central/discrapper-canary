n.d(t, { Z: () => g });
var r = n(951288),
    i = n(120356),
    a = n.n(i),
    l = n(442837),
    s = n(481060),
    o = n(884697),
    c = n(449217),
    d = n(709999),
    u = n(22267),
    p = n(29121),
    _ = n(25990),
    m = n(74538),
    h = n(388032),
    b = n(763740);
let g = (e) => {
    let { user: t, guildId: n, selectedNameplate: i } = e,
        g = (0, l.e7)([_.Z], () => _.Z.getPendingGlobalName()),
        { product: v, purchase: x } = (0, c.Z)(null == i ? void 0 : i.skuId),
        f = (0, p.kd)(v),
        C = m.ZP.canUseCollectibles(t),
        I = (0, o.qS)(x),
        y = (0, o.G1)(v),
        P = !C && I,
        j = null == x || P;
    return (0, r.jsxs)("div", {
        className: a()(b.previewBorder, { [b.upsell]: null != i && j }),
        children: [
            (0, r.jsx)("div", {
                className: b.previewBox,
                role: "img",
                "aria-label": h.intl.string(h.t.SZeUdR),
                children: (0, r.jsxs)("div", {
                    className: b.previewContents,
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
                    className: b.previewDescription,
                    children: [
                        (0, r.jsx)(s.Text, {
                            variant: "text-sm/semibold",
                            children: f,
                        }),
                        j &&
                            (0, r.jsx)(s.Text, {
                                variant: "text-sm/normal",
                                children: P
                                    ? h.intl.string(h.t.nD78oa)
                                    : y && C
                                      ? h.intl.string(h.t.hmyYK8)
                                      : y
                                        ? h.intl.string(h.t.JY1i0u)
                                        : h.intl.string(h.t.fEGjVQ),
                            }),
                    ],
                }),
        ],
    });
};
