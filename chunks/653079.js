r.d(t, { Z: () => b });
var n = r(200651),
    i = r(120356),
    o = r.n(i),
    l = r(442837),
    a = r(481060),
    s = r(597688),
    c = r(709999),
    u = r(22267),
    d = r(388032),
    p = r(52431);
let b = (e) => {
    let { user: t, selectedNameplate: r, purchased: i } = e,
        b = (0, l.e7)([s.Z], () => s.Z.getProduct(null == r ? void 0 : r.skuId));
    return (0, n.jsxs)('div', {
        className: o()(p.previewBorder, { [p.upsell]: !i && null != r }),
        children: [
            (0, n.jsx)('div', {
                className: p.previewBox,
                children: (0, n.jsxs)('div', {
                    className: p.previewContents,
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
                      className: p.previewDescription,
                      children: [
                          (0, n.jsx)(a.Text, {
                              variant: 'text-sm/semibold',
                              children: null == b ? void 0 : b.name
                          }),
                          i
                              ? null
                              : (0, n.jsx)(a.Text, {
                                    variant: 'text-sm/normal',
                                    children: d.NW.string(d.t.my5jxM)
                                })
                      ]
                  })
                : null
        ]
    });
};
