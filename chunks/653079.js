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
    let { user: t, selectedNameplate: r, purchased: a } = e,
        h = (0, i.e7)([s.Z], () => s.Z.getProduct(null == r ? void 0 : r.skuId)),
        f = (0, i.e7)([d.Z], () => d.Z.getPendingGlobalName());
    return (0, n.jsxs)('div', {
        className: l()(b.previewBorder, { [b.upsell]: !a && null != r }),
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
                            nameplate: r,
                            pendingGlobalName: f,
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
            null != r
                ? (0, n.jsxs)('div', {
                      className: b.previewDescription,
                      children: [
                          (0, n.jsx)(o.Text, {
                              variant: 'text-sm/semibold',
                              children: null == h ? void 0 : h.name
                          }),
                          a
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
