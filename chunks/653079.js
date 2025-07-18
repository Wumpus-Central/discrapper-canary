r.d(t, { Z: () => b });
var n = r(255367),
    i = r(120356),
    l = r.n(i),
    a = r(442837),
    o = r(481060),
    s = r(597688),
    c = r(709999),
    u = r(22267),
    d = r(25990),
    p = r(388032),
    v = r(52431);
let b = (e) => {
    let { user: t, selectedNameplate: r, purchased: i } = e,
        b = (0, a.e7)([s.Z], () => s.Z.getProduct(null == r ? void 0 : r.skuId)),
        f = (0, a.e7)([d.Z], () => d.Z.getPendingGlobalName());
    return (0, n.jsxs)('div', {
        className: l()(v.previewBorder, { [v.upsell]: !i && null != r }),
        children: [
            (0, n.jsx)('div', {
                className: v.previewBox,
                children: (0, n.jsxs)('div', {
                    className: v.previewContents,
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
                      className: v.previewDescription,
                      children: [
                          (0, n.jsx)(o.Text, {
                              variant: 'text-sm/semibold',
                              children: null == b ? void 0 : b.name
                          }),
                          i
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
