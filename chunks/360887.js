n.d(t, { Z: () => I }), n(35282), n(388685), n(190126), n(368063), n(65234), n(111804), n(490233), n(97749);
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
    g = n(314897),
    p = n(626135),
    m = n(361207),
    f = n(358085),
    _ = n(954824),
    x = n(981631),
    E = n(186901),
    v = n(388032);
let b = (e) => {
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
                    fullWidth: !0,
                }),
            ],
        }),
    });
};
function j(e) {
    let { match: t, location: l } = e,
        o = (0, s.parse)(l.search).token,
        [d, j] = i.useState("loading"),
        I = i.useRef(!1),
        y = i.useCallback(async (e) => {
            try {
                await c.Z.oneTimeLogin(e), j("login_success"), n.g.location.assign(x.Z5c.APP);
            } catch (e) {
                j("error");
            }
        }, []),
        O = i.useCallback(
            (e) => {
                let t = "discord://login/one-time?token=".concat(encodeURIComponent(e));
                _.Z.launch(t, (t) => {
                    t ? j("app_launched") : y(e);
                });
            },
            [y],
        ),
        S = i.useCallback(
            (e) => {
                var t;
                let r = null != (t = g.default.getFingerprint()) ? t : g.default.getId();
                Promise.resolve()
                    .then(n.bind(n, 536285))
                    .then((t) => {
                        let { default: n } = t;
                        n.request(x.Etm.DEEP_LINK, {
                            type: E.jE.ONE_TIME_LOGIN,
                            params: {
                                token: e,
                                fingerprint: r,
                            },
                        })
                            .then((t) => {
                                null != t && t ? j("app_launched") : O(e);
                            })
                            .catch(() => {
                                O(e);
                            })
                            .then(() => n.disconnect());
                    });
            },
            [O],
        );
    return (i.useEffect(() => {
        if (null == o || "string" != typeof o) return void j("error");
        if (a.tq || a.Em) {
            var e;
            let t = null == (e = p.default.getSuperProperties()) ? void 0 : e.os,
                n = new URL(l.pathname + l.search, window.location.origin),
                r = (0, m.Gn)("one_time_login", t, n);
            window.location.href = r;
            return;
        }
        if ((0, f.isDesktop)()) return void y(o);
        I.current || ((I.current = !0), j("rpc_attempting"), S(o));
    }, [o, l, y, S]),
    a.tq || a.Em || (0, h.DB)())
        ? null
        : "app_launched" === d
          ? (0, r.jsx)(b, {
                title: v.intl.string(v.t.RvUUOy),
                subtitle: v.intl.string(v.t["5/lR0g"]),
                buttonText: v.intl.string(v.t["2ixEBi"]),
                buttonOnClick: () => y(o),
            })
          : "error" === d
            ? (0, r.jsx)(b, {
                  title: v.intl.string(v.t.RtCSr1),
                  subtitle: v.intl.string(v.t["S+YjYJ"]),
                  buttonText: v.intl.string(v.t.j3cG2p),
                  buttonOnClick: () => (0, h.uL)(x.Z5c.LOGIN),
              })
            : (0, r.jsx)(u.ZP, { children: (0, r.jsx)(u.Hh, {}) });
}
let I = function (e) {
    let { enabled: t } = (0, d.WW)("OneTimeLoginCardWrapper");
    return t
        ? (0, r.jsx)(
              j,
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
