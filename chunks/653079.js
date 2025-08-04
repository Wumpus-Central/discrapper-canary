r.d(t, { Z: () => h });
var n = r(255367),
    a = r(120356),
    l = r.n(a),
    i = r(442837),
    o = r(481060),
    s = r(597688),
    c = r(709999),
    u = r(22267),
    d = r(25990),
    p = r(388032),
    b = r(52431);
let h = (e) => {
    let { user: t, guildId: r, selectedNameplate: a, purchased: h } = e,
        f = (0, i.e7)([s.Z], () => s.Z.getProduct(null == a ? void 0 : a.skuId)),
        v = (0, i.e7)([d.Z], () => d.Z.getPendingGlobalName());
    return (0, n.jsxs)('div', {
        className: l()(b.previewBorder, { [b.upsell]: !h && null != a }),
        children: [
            (0, n.jsx)('div', {
                className: b.previewBox,
                children: (0, n.jsxs)('div', {
                    className: b.previewContents,
                    children: [
                        (0, n.jsx)(c.d, {
                            width: 124,
                            opacity: 0.9
                        }),
                        (0, n.jsx)(c.d, {
                            width: 124,
                            opacity: 0.9
                        }),
                        (0, n.jsx)(u.Z, {
                            user: t,
                            guildId: r,
                            nameplate: a,
                            pendingGlobalName: v,
                            isHighlighted: !0
                        }),
                        (0, n.jsx)(c.d, {
                            width: 124,
                            opacity: 0.9
                        }),
                        (0, n.jsx)(c.d, {
                            width: 124,
                            opacity: 0.9
                        })
                    ]
                })
            }),
            null != a
                ? (0, n.jsxs)('div', {
                      className: b.previewDescription,
                      children: [
                          (0, n.jsx)(o.Text, {
                              variant: 'text-sm/semibold',
                              children: null == f ? void 0 : f.name
                          }),
                          h
                              ? null
                              : (0, n.jsx)(o.Text, {
                                    variant: 'text-sm/normal',
                                    children: p.intl.string(p.t.fEGjVV)
                                })
                      ]
                  })
                : null
        ]
    });
};
