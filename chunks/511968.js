n.d(t, { A: () => E });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(273166),
    o = n(885996),
    d = n(673698),
    u = n(534514),
    c = n(834730),
    g = n(963342),
    m = n(3432),
    _ = n(580630),
    A = n(240248),
    h = n(237218),
    p = n(689296),
    x = n(827991);
function E(e) {
    let { cta: t, storeListing: n, className: l } = e,
        { applicationId: E, benefits: T, description: S } = n,
        f = s.useMemo(() => (null == n.thumbnail ? null : (0, h.t)(E, n.thumbnail, 256)), [E, n.thumbnail]),
        { data: b } = (0, g.j)(n.skuId),
        C = s.useMemo(() => {
            if (null == b || 0 === b.length) return null;
            let e = b[0];
            return (0, _._J)(e);
        }, [b]);
    return null == C
        ? null
        : (0, i.jsxs)(r.q, {
              className: a()(x.iE, l),
              header: (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsxs)("div", {
                          className: x.qd,
                          children: [
                              null != f &&
                                  (0, i.jsx)(d._, { src: f.href, imageClassName: x.rW, width: 48, height: 48 }),
                              (0, i.jsxs)("div", {
                                  children: [
                                      (0, i.jsx)(u.D, { variant: "heading-md/bold", children: n.summary }),
                                      (0, i.jsx)(c.E, { variant: "text-md/medium", children: C }),
                                  ],
                              }),
                          ],
                      }),
                      t,
                  ],
              }),
              children: [
                  !(0, A.uJ)(S) &&
                      (0, i.jsx)("div", {
                          className: x.h_,
                          children: (0, i.jsx)(p.A, { variant: "text-sm/medium", children: S }),
                      }),
                  null != T &&
                      T.length > 0 &&
                      (0, i.jsx)("div", {
                          className: x.PX,
                          children: T.map((e) => {
                              let { id: t, name: n, description: s, icon: l } = e;
                              return (0, i.jsx)(o.FY, { header: n, icon: (0, m.N)(E, l), description: s }, t);
                          }),
                      }),
              ],
          });
}
