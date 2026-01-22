n.d(t, {
    A: () => g,
}),
    n(228524);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(273166),
    l = n(885996),
    c = n(397927),
    u = n(963342),
    d = n(3432),
    f = n(580630),
    p = n(240248),
    _ = n(237218),
    h = n(689296),
    m = n(542858);

function g(e) {
    let { cta: t, storeListing: n, className: a } = e,
        { applicationId: g, benefits: E, description: b } = n,
        y = i.useMemo(() => (null == n.thumbnail ? null : (0, _.t)(g, n.thumbnail, 256)), [g, n.thumbnail]),
        { data: O } = (0, u.j)(n.skuId),
        A = i.useMemo(() => {
            if (null == O || 0 === O.length) return null;
            let e = O[0];
            return (0, f._J)(e);
        }, [O]);
    return null == A
        ? null
        : (0, r.jsxs)(o.q, {
              className: s()(m.iE, a),
              header: (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsxs)("div", {
                          className: m.qd,
                          children: [
                              null != y &&
                                  (0, r.jsx)(c._V3, {
                                      src: y.href,
                                      imageClassName: m.rW,
                                      width: 48,
                                      height: 48,
                                  }),
                              (0, r.jsxs)("div", {
                                  children: [
                                      (0, r.jsx)(c.Heading, {
                                          variant: "heading-md/bold",
                                          children: n.summary,
                                      }),
                                      (0, r.jsx)(c.Text, {
                                          variant: "text-md/medium",
                                          children: A,
                                      }),
                                  ],
                              }),
                          ],
                      }),
                      t,
                  ],
              }),
              children: [
                  !(0, p.uJ)(b) &&
                      (0, r.jsx)("div", {
                          className: m.h_,
                          children: (0, r.jsx)(h.A, {
                              variant: "text-sm/medium",
                              children: b,
                          }),
                      }),
                  null != E &&
                      E.length > 0 &&
                      (0, r.jsx)("div", {
                          className: m.PX,
                          children: E.map((e) => {
                              let { id: t, name: n, description: i, icon: a } = e;
                              return (0, r.jsx)(
                                  l.FY,
                                  {
                                      header: n,
                                      icon: (0, d.N)(g, a),
                                      description: i,
                                  },
                                  t,
                              );
                          }),
                      }),
              ],
          });
}
