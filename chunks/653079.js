n.d(t, { Z: () => v });
var l = n(951288),
    i = n(120356),
    r = n.n(i),
    s = n(442837),
    a = n(481060),
    o = n(884697),
    c = n(449217),
    d = n(29121),
    u = n(25990),
    p = n(74538),
    m = n(956748),
    x = n(566697),
    h = n(388032),
    g = n(763740);
let v = (e) => {
    let { user: t, guildId: n, selectedNameplate: i } = e,
        v = (0, s.e7)([u.Z], () => u.Z.getPendingGlobalName()),
        { product: _, purchase: C } = (0, c.Z)(null == i ? void 0 : i.skuId),
        j = (0, d.kd)(_),
        E = p.ZP.canUseCollectibles(t),
        P = (0, o.qS)(C),
        y = (0, o.G1)(_),
        N = !E && P,
        f = null == C || N;
    return (0, l.jsxs)("div", {
        className: r()(g.previewBorder, { [g.upsell]: null != i && f }),
        children: [
            (0, l.jsx)("div", {
                className: g.previewBox,
                role: "img",
                "aria-label": h.intl.string(h.t.SZeUdR),
                children: (0, l.jsxs)("div", {
                    className: g.previewContents,
                    "aria-hidden": !0,
                    children: [
                        (0, l.jsx)(m.G, {
                            width: 124,
                            opacity: 0.9,
                        }),
                        (0, l.jsx)(m.G, {
                            width: 124,
                            opacity: 0.9,
                        }),
                        (0, l.jsx)(x.Z, {
                            user: t,
                            guildId: n,
                            nameplate: i,
                            pendingGlobalName: v,
                            isHighlighted: !0,
                        }),
                        (0, l.jsx)(m.G, {
                            width: 124,
                            opacity: 0.9,
                        }),
                        (0, l.jsx)(m.G, {
                            width: 124,
                            opacity: 0.9,
                        }),
                    ],
                }),
            }),
            null != i &&
                (0, l.jsxs)("div", {
                    className: g.previewDescription,
                    children: [
                        (0, l.jsx)(a.Text, {
                            variant: "text-sm/semibold",
                            children: j,
                        }),
                        f &&
                            (0, l.jsx)(a.Text, {
                                variant: "text-sm/normal",
                                children: N
                                    ? h.intl.string(h.t.nD78oa)
                                    : y && E
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
