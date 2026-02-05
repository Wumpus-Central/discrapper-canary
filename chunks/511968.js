n.d(t, { A: () => h });
var i = n(627968),
    s = n(64700),
    r = n(503698),
    a = n.n(r),
    l = n(273166),
    o = n(885996),
    c = n(397927),
    d = n(963342),
    u = n(3432),
    _ = n(580630),
    m = n(240248),
    A = n(237218),
    g = n(689296),
    E = n(542858);
function h(e) {
    let { cta: t, storeListing: n, className: r } = e,
        { applicationId: h, benefits: p, description: C } = n,
        x = s.useMemo(() => (null == n.thumbnail ? null : (0, A.t)(h, n.thumbnail, 256)), [h, n.thumbnail]),
        { data: T } = (0, d.j)(n.skuId),
        I = s.useMemo(() => {
            if (null == T || 0 === T.length) return null;
            let e = T[0];
            return (0, _._J)(e);
        }, [T]);
    return null == I
        ? null
        : (0, i.jsxs)(l.q, {
              className: a()(E.iE, r),
              header: (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsxs)("div", {
                          className: E.qd,
                          children: [
                              null != x &&
                                  (0, i.jsx)(c._V3, { src: x.href, imageClassName: E.rW, width: 48, height: 48 }),
                              (0, i.jsxs)("div", {
                                  children: [
                                      (0, i.jsx)(c.Heading, { variant: "heading-md/bold", children: n.summary }),
                                      (0, i.jsx)(c.Text, { variant: "text-md/medium", children: I }),
                                  ],
                              }),
                          ],
                      }),
                      t,
                  ],
              }),
              children: [
                  !(0, m.uJ)(C) &&
                      (0, i.jsx)("div", {
                          className: E.h_,
                          children: (0, i.jsx)(g.A, { variant: "text-sm/medium", children: C }),
                      }),
                  null != p &&
                      p.length > 0 &&
                      (0, i.jsx)("div", {
                          className: E.PX,
                          children: p.map((e) => {
                              let { id: t, name: n, description: s, icon: r } = e;
                              return (0, i.jsx)(o.FY, { header: n, icon: (0, u.N)(h, r), description: s }, t);
                          }),
                      }),
              ],
          });
}
