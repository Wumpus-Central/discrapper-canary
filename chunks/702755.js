t.d(l, { A: () => c });
var r = t(627968),
    n = t(64700),
    o = t(575593),
    i = t(674658),
    a = t(751304),
    s = t(561769),
    d = t(970488);
let c = (e) => {
    let { skuId: l, auto: t, columns: c, rows: u } = e,
        { product: h } = (0, i.q)(l, !0),
        m = n.useContext(s.v3);
    if (null == h) return null;
    let { flattenProductVariants: p, ..._ } = m;
    if (h.type === o.R.BUNDLE) {
        let e = t ? 2 : c,
            n = t ? 1 : u,
            o = `${e}/${n}`;
        return (0, r.jsx)(s.v3.Provider, {
            value: { flattenProductVariants: p ?? !0, ..._ },
            children: (0, r.jsx)(d.A, { columns: e, rows: n, children: (0, r.jsx)(a.A, { skuId: l, aspectRatio: o }) }),
        });
    }
    if (h.type === o.R.PROFILE_EFFECT) {
        let e = t ? 1 : c,
            n = t ? 2 : u,
            o = `${e}/${n}`;
        return (0, r.jsx)(s.v3.Provider, {
            value: { flattenProductVariants: p ?? !0, ..._ },
            children: (0, r.jsx)(d.A, { columns: e, rows: n, children: (0, r.jsx)(a.A, { skuId: l, aspectRatio: o }) }),
        });
    }
    return t
        ? (0, r.jsx)(s.v3.Provider, {
              value: { flattenProductVariants: p ?? !0, ..._ },
              children: (0, r.jsx)(a.A, { skuId: l, aspectRatio: "1/1" }),
          })
        : (0, r.jsx)(s.v3.Provider, {
              value: { flattenProductVariants: p ?? !0, ..._ },
              children: (0, r.jsx)(d.A, {
                  columns: c,
                  rows: u,
                  children: (0, r.jsx)(a.A, { skuId: l, aspectRatio: `${c}/${u}` }),
              }),
          });
};
