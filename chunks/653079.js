r.d(t, { Z: () => f });
var n = r(951288),
    i = r(120356),
    a = r.n(i),
    l = r(442837),
    o = r(481060),
    s = r(597688),
    c = r(709999),
    u = r(22267),
    d = r(25990),
    p = r(388032),
    v = r(763740);
let f = (e) => {
    let { user: t, guildId: r, selectedNameplate: i, purchased: f } = e,
        b = (0, l.e7)([s.Z], () => s.Z.getProduct(null == i ? void 0 : i.skuId)),
        m = (0, l.e7)([d.Z], () => d.Z.getPendingGlobalName());
    return (0, n.jsxs)("div", {
        className: a()(v.previewBorder, { [v.upsell]: !f && null != i }),
        children: [
            (0, n.jsx)("div", {
                className: v.previewBox,
                children: (0, n.jsxs)("div", {
                    className: v.previewContents,
                    children: [
                        (0, n.jsx)(c.d, {
                            width: 124,
                            opacity: 0.9,
                        }),
                        (0, n.jsx)(c.d, {
                            width: 124,
                            opacity: 0.9,
                        }),
                        (0, n.jsx)(u.Z, {
                            user: t,
                            guildId: r,
                            nameplate: i,
                            pendingGlobalName: m,
                            isHighlighted: !0,
                        }),
                        (0, n.jsx)(c.d, {
                            width: 124,
                            opacity: 0.9,
                        }),
                        (0, n.jsx)(c.d, {
                            width: 124,
                            opacity: 0.9,
                        }),
                    ],
                }),
            }),
            null != i
                ? (0, n.jsxs)("div", {
                      className: v.previewDescription,
                      children: [
                          (0, n.jsx)(o.Text, {
                              variant: "text-sm/semibold",
                              children: null == b ? void 0 : b.name,
                          }),
                          f
                              ? null
                              : (0, n.jsx)(o.Text, {
                                    variant: "text-sm/normal",
                                    children: p.intl.string(p.t.fEGjVV),
                                }),
                      ],
                  })
                : null,
        ],
    });
};
