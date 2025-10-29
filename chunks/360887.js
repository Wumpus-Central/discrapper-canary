n.d(t, { Z: () => b }), n(35282), n(388685), n(190126), n(368063), n(65234), n(111804), n(490233), n(97749);
var r = n(951288),
    i = n(647438),
    s = n(593473),
    l = n(843611),
    a = n(873546),
    o = n(481060),
    c = n(893776),
    u = n(388905),
    d = n(872549),
    h = n(703656),
    g = n(626135),
    p = n(361207),
    m = n(358085),
    f = n(954824),
    _ = n(981631),
    x = n(388032);
let E = (e) => {
    let { title: t, subtitle: n, buttonText: i, buttonOnClick: s } = e;
    return (0, r.jsx)(u.ZP, {
        children: (0, r.jsxs)(o.Kqy, {
            gap: 24,
            children: [
                (0, r.jsxs)(o.Kqy, {
                    gap: 8,
                    children: [(0, r.jsx)(u.Dx, { children: t }), (0, r.jsx)(u.DK, { children: n })],
                }),
                (0, r.jsx)(o.Button, {
                    onClick: s,
                    text: i,
                }),
            ],
        }),
    });
};
function v(e) {
    let { match: t, location: l } = e,
        o = (0, s.parse)(l.search).token,
        [d, v] = i.useState("loading"),
        b = i.useCallback(async (e) => {
            try {
                await c.Z.oneTimeLogin(e), v("login_success"), n.g.location.assign(_.Z5c.APP);
            } catch (e) {
                v("error");
            }
        }, []);
    return (i.useEffect(() => {
        if (null == o || "string" != typeof o) return void v("error");
        if (a.tq || a.Em) {
            var e;
            let t = null == (e = g.default.getSuperProperties()) ? void 0 : e.os,
                n = new URL(l.pathname + l.search, window.location.origin),
                r = (0, p.Gn)("one_time_login", t, n);
            window.location.href = r;
            return;
        }
        if ((0, m.isDesktop)()) return void b(o);
        let t = "discord://login/one-time?token=".concat(encodeURIComponent(o));
        f.Z.launch(t, (e) => {
            e ? v("protocol_launched") : b(o);
        });
    }, [o, l, b]),
    a.tq || a.Em || (0, h.DB)())
        ? null
        : "protocol_launched" === d
          ? (0, r.jsx)(E, {
                title: x.intl.string(x.t.RvUUOy),
                subtitle: x.intl.string(x.t["5/lR0g"]),
                buttonText: x.intl.string(x.t["2ixEBi"]),
                buttonOnClick: () => b(o),
            })
          : "error" === d
            ? (0, r.jsx)(E, {
                  title: x.intl.string(x.t.RtCSr1),
                  subtitle: x.intl.string(x.t["S+YjYJ"]),
                  buttonText: x.intl.string(x.t.j3cG2p),
                  buttonOnClick: () => (0, h.uL)(_.Z5c.LOGIN),
              })
            : (0, r.jsx)(u.ZP, { children: (0, r.jsx)(u.Hh, {}) });
}
let b = function (e) {
    let { enabled: t } = (0, d.WW)("OneTimeLoginCardWrapper");
    return t
        ? (0, r.jsx)(
              v,
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
        : (0, r.jsx)(l.l_, { to: _.Z5c.LOGIN });
};
