n.d(l, { Z: () => m });
var t = n(951288),
    i = n(120356),
    s = n.n(i),
    a = n(442837),
    r = n(481060),
    o = n(597688),
    d = n(709999),
    c = n(22267),
    u = n(25990),
    x = n(388032),
    p = n(763740);
let m = (e) => {
    let { user: l, guildId: n, selectedNameplate: i, purchased: m } = e,
        v = (0, a.e7)([o.Z], () => o.Z.getProduct(null == i ? void 0 : i.skuId)),
        h = (0, a.e7)([u.Z], () => u.Z.getPendingGlobalName());
    return (0, t.jsxs)("div", {
        className: s()(p.previewBorder, { [p.upsell]: !m && null != i }),
        children: [
            (0, t.jsx)("div", {
                className: p.previewBox,
                children: (0, t.jsxs)("div", {
                    className: p.previewContents,
                    children: [
                        (0, t.jsx)(d.d, {
                            width: 124,
                            opacity: 0.9,
                        }),
                        (0, t.jsx)(d.d, {
                            width: 124,
                            opacity: 0.9,
                        }),
                        (0, t.jsx)(c.Z, {
                            user: l,
                            guildId: n,
                            nameplate: i,
                            pendingGlobalName: h,
                            isHighlighted: !0,
                        }),
                        (0, t.jsx)(d.d, {
                            width: 124,
                            opacity: 0.9,
                        }),
                        (0, t.jsx)(d.d, {
                            width: 124,
                            opacity: 0.9,
                        }),
                    ],
                }),
            }),
            null != i
                ? (0, t.jsxs)("div", {
                      className: p.previewDescription,
                      children: [
                          (0, t.jsx)(r.Text, {
                              variant: "text-sm/semibold",
                              children: null == v ? void 0 : v.name,
                          }),
                          m
                              ? null
                              : (0, t.jsx)(r.Text, {
                                    variant: "text-sm/normal",
                                    children: x.intl.string(x.t.fEGjVV),
                                }),
                      ],
                  })
                : null,
        ],
    });
};
