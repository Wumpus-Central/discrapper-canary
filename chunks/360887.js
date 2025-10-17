n.d(t, { Z: () => j }), n(35282), n(388685), n(190126), n(368063), n(65234), n(111804), n(490233), n(97749);
var r = n(951288),
    i = n(647438),
    s = n(593473),
    l = n(843611),
    a = n(873546),
    o = n(442837),
    c = n(773244),
    u = n(857458),
    d = n(388905),
    h = n(362762),
    g = n(872549),
    p = n(703656),
    m = n(626135),
    f = n(361207),
    _ = n(954824),
    x = n(981631),
    E = n(186901),
    v = n(388032);
function b(e) {
    let { match: t, location: n } = e,
        l = (0, s.parse)(n.search).token,
        [g, b] = i.useState(!1),
        j = (0, o.e7)([h.Z], () => h.Z.getState(n.pathname)),
        I = i.useCallback(
            (e, t, n) => ({
                token: l,
                path: e,
                search: n,
                fingerprint: t,
            }),
            [l],
        );
    return (i.useEffect(() => {
        if (null != l && (a.tq || a.Em)) {
            var e;
            let t = null == (e = m.default.getSuperProperties()) ? void 0 : e.os,
                r = new URL(n.pathname + n.search, window.location.origin),
                i = (0, f.Gn)("one_time_login", t, r);
            window.location.href = i;
            return;
        }
    }, [t, l, n]),
    a.tq || a.Em)
        ? null
        : (0, r.jsx)(c.Z, {
              deepLinkType: E.jE.ONE_TIME_LOGIN,
              path: n.pathname,
              search: n.search,
              paramsBuilder: I,
              children: (() => {
                  if ((0, p.DB)()) return null;
                  switch (j) {
                      case x.kEZ.OPEN:
                          return (0, r.jsxs)(d.ZP, {
                              children: [
                                  (0, r.jsx)(d.Dx, { children: v.intl.string(v.t.csrAMD) }),
                                  (0, r.jsx)(d.DK, {
                                      children: "Check your Discord app to continue with one-time login.",
                                  }),
                              ],
                          });
                      case x.kEZ.OPENING:
                          return (0, r.jsxs)(d.ZP, {
                              children: [
                                  (0, r.jsx)(d.Dx, { children: v.intl.string(v.t["Z+hCVV"]) }),
                                  (0, r.jsx)(d.Hh, {}),
                              ],
                          });
                      case x.kEZ.OPEN_FAIL:
                      default:
                          if (j === x.kEZ.OPEN_FAIL && !g && null != l)
                              return (0, r.jsxs)(d.ZP, {
                                  children: [
                                      (0, r.jsx)(d.Dx, { children: "Trying to open Discord..." }),
                                      (0, r.jsx)(d.DK, {
                                          children: "Attempting to launch Discord with your one-time login.",
                                      }),
                                      (0, r.jsx)(d.zx, {
                                          onClick: () => {
                                              let e = "discord://login/one-time?token=".concat(encodeURIComponent(l));
                                              _.Z.launch(e, () => b(!0));
                                          },
                                          children: "Try Opening Discord",
                                      }),
                                      (0, r.jsx)(d.zx, {
                                          onClick: () => (0, p.uL)((0, u.M)()),
                                          style: { marginTop: "8px" },
                                          children: v.intl.string(v.t["2ixEBg"]),
                                      }),
                                  ],
                              });
                          return (0, r.jsxs)(d.ZP, {
                              children: [
                                  (0, r.jsx)(d.Dx, { children: v.intl.string(v.t.qllnGh) }),
                                  (0, r.jsx)(d.DK, {
                                      children: g
                                          ? "Unable to open Discord automatically. Please open Discord manually and try again, or continue in browser."
                                          : "Continue your one-time login in the browser.",
                                  }),
                                  (0, r.jsx)(d.zx, {
                                      onClick: () => (0, p.uL)((0, u.M)()),
                                      children: "Login in Browser",
                                  }),
                              ],
                          });
                  }
              })(),
          });
}
let j = function (e) {
    let { enabled: t } = (0, g.WW)("OneTimeLoginCardWrapper");
    return t
        ? (0, r.jsx)(
              b,
              (function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var n = null != arguments[t] ? arguments[t] : {},
                          r = Object.keys(n);
                      "function" == typeof Object.getOwnPropertySymbols &&
                          (r = r.concat(
                              Object.getOwnPropertySymbols(n).filter(function (e) {
                                  return Object.getOwnPropertyDescriptor(n, e).enumerable;
                              }),
                          )),
                          r.forEach(function (t) {
                              var r;
                              (r = n[t]),
                                  t in e
                                      ? Object.defineProperty(e, t, {
                                            value: r,
                                            enumerable: !0,
                                            configurable: !0,
                                            writable: !0,
                                        })
                                      : (e[t] = r);
                          });
                  }
                  return e;
              })({}, e),
          )
        : (0, r.jsx)(l.l_, { to: x.Z5c.LOGIN });
};
