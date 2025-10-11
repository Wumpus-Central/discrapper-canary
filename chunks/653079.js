n.d(t, { Z: () => f });
var i = n(951288),
    r = n(120356),
    l = n.n(r),
    a = n(442837),
    s = n(481060),
    o = n(884697),
    d = n(449217),
    c = n(709999),
    u = n(22267),
    p = n(29121),
    _ = n(25990),
    h = n(74538),
    m = n(388032),
    g = n(763740);
let f = (e) => {
    let { user: t, guildId: n, selectedNameplate: r } = e,
        f = (0, a.e7)([_.Z], () => _.Z.getPendingGlobalName()),
        { product: I, purchase: b } = (0, d.Z)(null == r ? void 0 : r.skuId),
        v = (0, p.kd)(I),
        S = h.ZP.canUseCollectibles(t),
        x = (0, o.qS)(b),
        C = (0, o.G1)(I),
        E = !S && x,
        y = null == b || E;
    return (0, i.jsxs)("div", {
        className: l()(g.previewBorder, { [g.upsell]: null != r && y }),
        children: [
            (0, i.jsx)("div", {
                className: g.previewBox,
                role: "img",
                "aria-label": m.intl.string(m.t.SZeUdX),
                children: (0, i.jsxs)("div", {
                    className: g.previewContents,
                    "aria-hidden": !0,
                    children: [
                        (0, i.jsx)(c.d, {
                            width: 124,
                            opacity: 0.9,
                        }),
                        (0, i.jsx)(c.d, {
                            width: 124,
                            opacity: 0.9,
                        }),
                        (0, i.jsx)(u.Z, {
                            user: t,
                            guildId: n,
                            nameplate: r,
                            pendingGlobalName: f,
                            isHighlighted: !0,
                        }),
                        (0, i.jsx)(c.d, {
                            width: 124,
                            opacity: 0.9,
                        }),
                        (0, i.jsx)(c.d, {
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
                        (0, i.jsx)(s.Text, {
                            variant: "text-sm/semibold",
                            children: v,
                        }),
                        y &&
                            (0, i.jsx)(s.Text, {
                                variant: "text-sm/normal",
                                children: E
                                    ? m.intl.string(m.t.nD78oa)
                                    : C && S
                                      ? m.intl.string(m.t.hmyYKy)
                                      : C
                                        ? m.intl.string(m.t.JY1i0t)
                                        : m.intl.string(m.t.fEGjVV),
                            }),
                    ],
                }),
        ],
    });
};
