l.d(t, { A: () => o });
var r = l(627968),
    n = l(64700),
    a = l(575593),
    s = l(674658),
    c = l(751304),
    i = l(561769),
    d = l(970488);
let o = (e) => {
    let { skuId: t, auto: l, columns: o, rows: u } = e,
        { product: m } = (0, s.q)(t, !0),
        h = n.useContext(i.v3);
    if (null == m) return null;
    let { flattenProductVariants: p, ...A } = h;
    if (m.type === a.R.BUNDLE) {
        let e = l ? 2 : o,
            n = l ? 1 : u,
            a = `${e}/${n}`;
        return (0, r.jsx)(i.v3.Provider, {
            value: { flattenProductVariants: p ?? !0, ...A },
            children: (0, r.jsx)(d.A, { columns: e, rows: n, children: (0, r.jsx)(c.A, { skuId: t, aspectRatio: a }) }),
        });
    }
    if (m.type === a.R.PROFILE_EFFECT) {
        let e = l ? 1 : o,
            n = l ? 2 : u,
            a = `${e}/${n}`;
        return (0, r.jsx)(i.v3.Provider, {
            value: { flattenProductVariants: p ?? !0, ...A },
            children: (0, r.jsx)(d.A, { columns: e, rows: n, children: (0, r.jsx)(c.A, { skuId: t, aspectRatio: a }) }),
        });
    }
    return l
        ? (0, r.jsx)(i.v3.Provider, {
              value: { flattenProductVariants: p ?? !0, ...A },
              children: (0, r.jsx)(c.A, { skuId: t, aspectRatio: "1/1" }),
          })
        : (0, r.jsx)(i.v3.Provider, {
              value: { flattenProductVariants: p ?? !0, ...A },
              children: (0, r.jsx)(d.A, {
                  columns: o,
                  rows: u,
                  children: (0, r.jsx)(c.A, { skuId: t, aspectRatio: `${o}/${u}` }),
              }),
          });
};
