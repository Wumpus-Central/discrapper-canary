r.d(t, { Z: () => v });
var n = r(255367),
    i = r(120356),
    l = r.n(i),
    a = r(442837),
    o = r(481060),
    s = r(597688),
    c = r(709999),
    u = r(22267),
    d = r(388032),
    p = r(52431);
let v = (e) => {
    let { user: t, selectedNameplate: r, purchased: i } = e,
        v = (0, a.e7)([s.Z], () => s.Z.getProduct(null == r ? void 0 : r.skuId));
    return (0, n.jsxs)('div', {
        className: l()(p.previewBorder, { [p.upsell]: !i && null != r }),
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
                          (0, n.jsx)(o.Text, {
                              variant: 'text-sm/semibold',
                              children: null == v ? void 0 : v.name
                          }),
                          i
                              ? null
                              : (0, n.jsx)(o.Text, {
                                    variant: 'text-sm/normal',
                                    children: d.intl.string(d.t.fEGjVV)
                                })
                      ]
                  })
                : null
        ]
    });
};
