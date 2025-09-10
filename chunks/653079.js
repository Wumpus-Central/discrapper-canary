n.d(t, { Z: () => v });
var l = n(951288),
    i = n(120356),
    r = n.n(i),
    s = n(442837),
    a = n(481060),
    o = n(884697),
    c = n(449217),
    d = n(709999),
    u = n(22267),
    p = n(29121),
    m = n(25990),
    x = n(74538),
    h = n(388032),
    g = n(763740);
let v = (e) => {
    let { user: t, guildId: n, selectedNameplate: i } = e,
        v = (0, s.e7)([m.Z], () => m.Z.getPendingGlobalName()),
        { product: _, purchase: C } = (0, c.Z)(null == i ? void 0 : i.skuId),
        j = (0, p.kd)(_),
        y = x.ZP.canUseCollectibles(t),
        P = (0, o.qS)(C),
        E = (0, o.G1)(_),
        f = !y && P,
        N = null == C || f;
    return (0, l.jsxs)("div", {
        className: r()(g.previewBorder, { [g.upsell]: null != i && N }),
        children: [
            (0, l.jsx)("div", {
                className: g.previewBox,
                children: (0, l.jsxs)("div", {
                    className: g.previewContents,
                    children: [
                        (0, l.jsx)(d.d, {
                            width: 124,
                            opacity: 0.9,
                        }),
                        (0, l.jsx)(d.d, {
                            width: 124,
                            opacity: 0.9,
                        }),
                        (0, l.jsx)(u.Z, {
                            user: t,
                            guildId: n,
                            nameplate: i,
                            pendingGlobalName: v,
                            isHighlighted: !0,
                        }),
                        (0, l.jsx)(d.d, {
                            width: 124,
                            opacity: 0.9,
                        }),
                        (0, l.jsx)(d.d, {
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
                        N &&
                            (0, l.jsx)(a.Text, {
                                variant: "text-sm/normal",
                                children: f
                                    ? h.intl.string(h.t.nD78oa)
                                    : E && y
                                      ? h.intl.string(h.t.hmyYKy)
                                      : E
                                        ? h.intl.string(h.t.JY1i0t)
                                        : h.intl.string(h.t.fEGjVV),
                            }),
                    ],
                }),
        ],
    });
};
