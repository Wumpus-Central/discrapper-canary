n.d(t, {
    D: () => f,
    Z: () => g
});
var r = n(200651);
n(192379);
var i = n(120356),
    s = n.n(i),
    l = n(481060),
    a = n(388905),
    c = n(297700),
    d = n(875307),
    u = n(837748),
    o = n(58346),
    C = n(388032),
    m = n(383944),
    L = n(814632);
function h() {
    return (0, r.jsx)(c.Z, {
        className: m.verifiedIcon,
        children: (0, r.jsx)('div', {
            className: m.verifiedCheckContainer,
            children: (0, r.jsx)(l.kmB, {
                size: 'xs',
                color: 'currentColor',
                className: m.verifiedCheck
            })
        })
    });
}
function x(e) {
    let { verified: t, text: n } = e;
    return t
        ? (0, r.jsxs)('div', {
              className: m.verifiedNameContainer,
              children: [(0, r.jsx)(h, {}), n]
          })
        : (0, r.jsx)(r.Fragment, { children: n });
}
function f(e) {
    let { className: t, count: n, creator: i, verifiedName: l } = e;
    return (0, r.jsx)('div', {
        className: s()(m.usagePill, t, m.userText),
        children:
            null != i || null != l
                ? C.intl.format(C.t.TTcKAw, {
                      usageCount: n,
                      creator: null != l ? l : i,
                      creatorHook: (e, t) =>
                          (0, r.jsx)(
                              x,
                              {
                                  text: e,
                                  verified: null != l
                              },
                              t
                          )
                  })
                : C.intl.format(C.t.cGXXHB, { usageCount: n })
    });
}
function g(e) {
    var t;
    let { guildTemplate: n, error: i, tall: c, pillClassName: h } = e;
    if (null != i && '' !== i)
        return (0, r.jsxs)('div', {
            className: m.container,
            children: [(0, r.jsx)(a.Dx, { children: C.intl.string(C.t.mDFGFh) }), (0, r.jsx)(a.DK, { children: i })]
        });
    if (n.state === o.Rj.RESOLVING)
        return (0, r.jsx)('div', {
            className: m.container,
            children: (0, r.jsx)(l.$jN, {})
        });
    let x = (0, u.Z)(n.code).header;
    return c
        ? (0, r.jsxs)('div', {
              className: m.container,
              children: [
                  (0, r.jsx)(a.Dx, {
                      className: m.title,
                      children: x
                  }),
                  (0, r.jsx)(a.DK, {
                      className: s()(m.subtitle, L.__invalid_marginTop2),
                      children: C.intl.string(C.t['h+vyOz'])
                  }),
                  (0, r.jsx)(a.Dx, {
                      className: s()(m.title, m.userText),
                      children: n.name
                  }),
                  null != n.description &&
                      '' !== n.description &&
                      (0, r.jsx)(a.DK, {
                          className: s()(m.subtitle, m.userText, L.marginTop8),
                          children: n.description
                      }),
                  (0, r.jsx)(f, {
                      className: h,
                      count: null !== (t = n.usageCount) && void 0 !== t ? t : 0,
                      creator: n.creator.username,
                      verifiedName: (0, d.R)(n.code)
                  })
              ]
          })
        : (0, r.jsxs)('div', {
              className: m.container,
              children: [
                  (0, r.jsx)(a.Dx, {
                      className: m.title,
                      children: x
                  }),
                  (0, r.jsx)(a.DK, {
                      className: s()(m.subtitle, m.userText),
                      children: n.name
                  })
              ]
          });
}
