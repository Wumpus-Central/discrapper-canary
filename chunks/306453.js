n.d(t, {
    D: () => g,
    Z: () => x,
}),
    n(953529);
var r = n(951288);
n(647438);
var i = n(120356),
    l = n.n(i),
    s = n(481060),
    a = n(388905),
    c = n(297700),
    d = n(875307),
    u = n(837748),
    o = n(260539),
    C = n(388032),
    m = n(23789),
    L = n(10198);
function h() {
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
function f(e) {
    let { verified: t, text: n } = e;
    return t
        ? (0, r.jsxs)("div", {
              className: m.verifiedNameContainer,
              children: [(0, r.jsx)(h, {}), n],
          })
        : n;
}
function g(e) {
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
                              f,
                              {
                                  text: e,
                                  verified: null != s,
                              },
                              t,
                          ),
                  })
                : C.intl.format(C.t.cGXXHB, { usageCount: n }),
    });
}
function x(e) {
    var t;
    let { guildTemplate: n, error: i, tall: c, pillClassName: h } = e;
    if (null != i && "" !== i)
        return (0, r.jsxs)("div", {
            className: m.container,
            children: [(0, r.jsx)(a.Dx, { children: C.intl.string(C.t.mDFGFh) }), (0, r.jsx)(a.DK, { children: i })],
        });
    if (n.state === o.Rj.RESOLVING)
        return (0, r.jsx)("div", {
            className: m.container,
            children: (0, r.jsx)(s.$jN, {}),
        });
    let f = (0, u.Z)(n.code).header;
    return c
        ? (0, r.jsxs)("div", {
              className: m.container,
              children: [
                  (0, r.jsx)(a.Dx, {
                      className: m.title,
                      children: f,
                  }),
                  (0, r.jsx)(a.DK, {
                      className: l()(m.subtitle, L.__invalid_marginTop2),
                      children: C.intl.string(C.t["h+vyOz"]),
                  }),
                  (0, r.jsx)(a.Dx, {
                      className: l()(m.title, m.userText),
                      children: n.name,
                  }),
                  null != n.description &&
                      "" !== n.description &&
                      (0, r.jsx)(a.DK, {
                          className: l()(m.subtitle, m.userText, L.marginTop8),
                          children: n.description,
                      }),
                  (0, r.jsx)(g, {
                      className: h,
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
                      children: f,
                  }),
                  (0, r.jsx)(a.DK, {
                      className: l()(m.subtitle, m.userText),
                      children: n.name,
                  }),
              ],
          });
}
