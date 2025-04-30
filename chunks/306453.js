n.d(t, {
    D: () => f,
    Z: () => g
}),
    n(953529);
var i = n(200651);
n(192379);
var r = n(120356),
    s = n.n(r),
    l = n(481060),
    a = n(388905),
    c = n(297700),
    d = n(875307),
    u = n(837748),
    o = n(260539),
    C = n(388032),
    m = n(704983),
    L = n(20493);
function h() {
    return (0, i.jsx)(c.Z, {
        className: m.verifiedIcon,
        children: (0, i.jsx)('div', {
            className: m.verifiedCheckContainer,
            children: (0, i.jsx)(l.kmB, {
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
        ? (0, i.jsxs)('div', {
              className: m.verifiedNameContainer,
              children: [(0, i.jsx)(h, {}), n]
          })
        : n;
}
function f(e) {
    let { className: t, count: n, creator: r, verifiedName: l } = e;
    return (0, i.jsx)('div', {
        className: s()(m.usagePill, t, m.userText),
        children:
            null != r || null != l
                ? C.intl.format(C.t.TTcKAw, {
                      usageCount: n,
                      creator: null != l ? l : r,
                      creatorHook: (e, t) =>
                          (0, i.jsx)(
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
    let { guildTemplate: n, error: r, tall: c, pillClassName: h } = e;
    if (null != r && '' !== r)
        return (0, i.jsxs)('div', {
            className: m.container,
            children: [(0, i.jsx)(a.Dx, { children: C.intl.string(C.t.mDFGFh) }), (0, i.jsx)(a.DK, { children: r })]
        });
    if (n.state === o.Rj.RESOLVING)
        return (0, i.jsx)('div', {
            className: m.container,
            children: (0, i.jsx)(l.$jN, {})
        });
    let x = (0, u.Z)(n.code).header;
    return c
        ? (0, i.jsxs)('div', {
              className: m.container,
              children: [
                  (0, i.jsx)(a.Dx, {
                      className: m.title,
                      children: x
                  }),
                  (0, i.jsx)(a.DK, {
                      className: s()(m.subtitle, L.__invalid_marginTop2),
                      children: C.intl.string(C.t['h+vyOz'])
                  }),
                  (0, i.jsx)(a.Dx, {
                      className: s()(m.title, m.userText),
                      children: n.name
                  }),
                  null != n.description &&
                      '' !== n.description &&
                      (0, i.jsx)(a.DK, {
                          className: s()(m.subtitle, m.userText, L.marginTop8),
                          children: n.description
                      }),
                  (0, i.jsx)(f, {
                      className: h,
                      count: null != (t = n.usageCount) ? t : 0,
                      creator: n.creator.username,
                      verifiedName: (0, d.R)(n.code)
                  })
              ]
          })
        : (0, i.jsxs)('div', {
              className: m.container,
              children: [
                  (0, i.jsx)(a.Dx, {
                      className: m.title,
                      children: x
                  }),
                  (0, i.jsx)(a.DK, {
                      className: s()(m.subtitle, m.userText),
                      children: n.name
                  })
              ]
          });
}
