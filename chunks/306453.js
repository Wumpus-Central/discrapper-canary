r.d(t, {
    D: () => x,
    Z: () => f
}),
    r(266796);
var s = r(200651);
r(192379);
var n = r(120356),
    a = r.n(n),
    i = r(481060),
    l = r(388905),
    c = r(297700),
    d = r(875307),
    u = r(837748),
    o = r(58346),
    C = r(388032),
    m = r(704983),
    N = r(20493);
function L() {
    return (0, s.jsx)(c.Z, {
        className: m.verifiedIcon,
        children: (0, s.jsx)('div', {
            className: m.verifiedCheckContainer,
            children: (0, s.jsx)(i.kmB, {
                size: 'xs',
                color: 'currentColor',
                className: m.verifiedCheck
            })
        })
    });
}
function h(e) {
    let { verified: t, text: r } = e;
    return t
        ? (0, s.jsxs)('div', {
              className: m.verifiedNameContainer,
              children: [(0, s.jsx)(L, {}), r]
          })
        : r;
}
function x(e) {
    let { className: t, count: r, creator: n, verifiedName: i } = e;
    return (0, s.jsx)('div', {
        className: a()(m.usagePill, t, m.userText),
        children:
            null != n || null != i
                ? C.NW.format(C.t.TTcKAw, {
                      usageCount: r,
                      creator: null != i ? i : n,
                      creatorHook: (e, t) =>
                          (0, s.jsx)(
                              h,
                              {
                                  text: e,
                                  verified: null != i
                              },
                              t
                          )
                  })
                : C.NW.format(C.t.cGXXHB, { usageCount: r })
    });
}
function f(e) {
    var t;
    let { guildTemplate: r, error: n, tall: c, pillClassName: L } = e;
    if (null != n && '' !== n)
        return (0, s.jsxs)('div', {
            className: m.container,
            children: [(0, s.jsx)(l.Dx, { children: C.NW.string(C.t.mDFGFh) }), (0, s.jsx)(l.DK, { children: n })]
        });
    if (r.state === o.Rj.RESOLVING)
        return (0, s.jsx)('div', {
            className: m.container,
            children: (0, s.jsx)(i.$jN, {})
        });
    let h = (0, u.Z)(r.code).header;
    return c
        ? (0, s.jsxs)('div', {
              className: m.container,
              children: [
                  (0, s.jsx)(l.Dx, {
                      className: m.title,
                      children: h
                  }),
                  (0, s.jsx)(l.DK, {
                      className: a()(m.subtitle, N.__invalid_marginTop2),
                      children: C.NW.string(C.t['h+vyOz'])
                  }),
                  (0, s.jsx)(l.Dx, {
                      className: a()(m.title, m.userText),
                      children: r.name
                  }),
                  null != r.description &&
                      '' !== r.description &&
                      (0, s.jsx)(l.DK, {
                          className: a()(m.subtitle, m.userText, N.marginTop8),
                          children: r.description
                      }),
                  (0, s.jsx)(x, {
                      className: L,
                      count: null != (t = r.usageCount) ? t : 0,
                      creator: r.creator.username,
                      verifiedName: (0, d.R)(r.code)
                  })
              ]
          })
        : (0, s.jsxs)('div', {
              className: m.container,
              children: [
                  (0, s.jsx)(l.Dx, {
                      className: m.title,
                      children: h
                  }),
                  (0, s.jsx)(l.DK, {
                      className: a()(m.subtitle, m.userText),
                      children: r.name
                  })
              ]
          });
}
