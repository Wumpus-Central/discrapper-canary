n.d(t, { Z: () => v });
var r = n(255367),
    i = n(120356),
    l = n.n(i),
    a = n(442837),
    o = n(481060),
    s = n(597688),
    c = n(709999),
    u = n(22267),
    d = n(388032),
    p = n(52431);
let v = (e) => {
    let { user: t, selectedNameplate: n, purchased: i } = e,
        v = (0, a.e7)([s.Z], () => s.Z.getProduct(null == n ? void 0 : n.skuId));
    return (0, r.jsxs)('div', {
        className: l()(p.previewBorder, { [p.upsell]: !i && null != n }),
        children: [
            (0, r.jsx)('div', {
                className: p.previewBox,
                children: (0, r.jsxs)('div', {
                    className: p.previewContents,
                    children: [
                        (0, r.jsx)(c.d, {
                            width: 124,
                            opacity: 0.9
                        }),
                        (0, r.jsx)(c.d, {
                            width: 124,
                            opacity: 0.9
                        }),
                        (0, r.jsx)(u.Z, {
                            user: t,
                            nameplate: n,
                            isHighlighted: !0
                        }),
                        (0, r.jsx)(c.d, {
                            width: 124,
                            opacity: 0.9
                        }),
                        (0, r.jsx)(c.d, {
                            width: 124,
                            opacity: 0.9
                        })
                    ]
                })
            }),
            null != n
                ? (0, r.jsxs)('div', {
                      className: p.previewDescription,
                      children: [
                          (0, r.jsx)(o.Text, {
                              variant: 'text-sm/semibold',
                              children: null == v ? void 0 : v.name
                          }),
                          i
                              ? null
                              : (0, r.jsx)(o.Text, {
                                    variant: 'text-sm/normal',
                                    children: d.intl.string(d.t.fEGjVV)
                                })
                      ]
                  })
                : null
        ]
    });
};
