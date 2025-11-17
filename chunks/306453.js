n.d(t, {
    D: () => f,
    Z: () => g,
}),
    n(953529);
var r = n(54381);
n(473749);
var i = n(120356),
    l = n.n(i),
    s = n(481060),
    a = n(388905),
    c = n(297700),
    d = n(875307),
    u = n(837748),
    o = n(260539),
    C = n(388032),
    m = n(930029),
    x = n(197571);
function L() {
    return (0, r.jsx)(c.Z, {
        className: m.verifiedIcon,
        children: (0, r.jsx)("div", {
            className: m.verifiedCheckContainer,
            children: (0, r.jsx)(s.kmB, {
                size: "xs",
                color: "currentColor",
                className: m.verifiedCheck,
            }),
        }),
    });
}
function h(e) {
    let { verified: t, text: n } = e;
    return t
        ? (0, r.jsxs)("div", {
              className: m.verifiedNameContainer,
              children: [(0, r.jsx)(L, {}), n],
          })
        : n;
}
function f(e) {
    let { className: t, count: n, creator: i, verifiedName: s } = e;
    return (0, r.jsx)("div", {
        className: l()(m.usagePill, t, m.userText),
        children:
            null != i || null != s
                ? C.intl.format(C.t.TTcKAw, {
                      usageCount: n,
                      creator: null != s ? s : i,
                      creatorHook: (e, t) =>
                          (0, r.jsx)(
                              h,
                              {
                                  text: e,
                                  verified: null != s,
                              },
                              t,
                          ),
                  })
                : C.intl.format(C.t.cGXXHL, { usageCount: n }),
    });
}
function g(e) {
    var t;
    let { guildTemplate: n, error: i, tall: c, pillClassName: L } = e;
    if (null != i && "" !== i)
        return (0, r.jsxs)("div", {
            className: m.container,
            children: [(0, r.jsx)(a.Dx, { children: C.intl.string(C.t.mDFGFj) }), (0, r.jsx)(a.DK, { children: i })],
        });
    if (n.state === o.Rj.RESOLVING)
        return (0, r.jsx)("div", {
            className: m.container,
            children: (0, r.jsx)(s.$jN, {}),
        });
    let h = (0, u.Z)(n.code).header;
    return c
        ? (0, r.jsxs)("div", {
              className: m.container,
              children: [
                  (0, r.jsx)(a.Dx, {
                      className: m.title,
                      children: h,
                  }),
                  (0, r.jsx)(a.DK, {
                      className: l()(m.subtitle, x.__invalid_marginTop2),
                      children: C.intl.string(C.t["h+vyO6"]),
                  }),
                  (0, r.jsx)(a.Dx, {
                      className: l()(m.title, m.userText),
                      children: n.name,
                  }),
                  null != n.description &&
                      "" !== n.description &&
                      (0, r.jsx)(a.DK, {
                          className: l()(m.subtitle, m.userText, x.marginTop8),
                          children: n.description,
                      }),
                  (0, r.jsx)(f, {
                      className: L,
                      count: null != (t = n.usageCount) ? t : 0,
                      creator: n.creator.username,
                      verifiedName: (0, d.R)(n.code),
                  }),
              ],
          })
        : (0, r.jsxs)("div", {
              className: m.container,
              children: [
                  (0, r.jsx)(a.Dx, {
                      className: m.title,
                      children: h,
                  }),
                  (0, r.jsx)(a.DK, {
                      className: l()(m.subtitle, m.userText),
                      children: n.name,
                  }),
              ],
          });
}
