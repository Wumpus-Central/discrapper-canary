n.d(t, {
    A: () => h,
});
var r = n(627968),
    i = n(64700),
    l = n(397927),
    a = n(742589),
    s = n(976860),
    o = n(954571),
    c = n(144914),
    u = n(652215),
    d = n(985018),
    p = n(436292);
let f = (0, c.S)() || !1,
    h = i.memo(function (e) {
        let { currentRoute: t, renderToolbar: n } = e,
            c = i.useContext(o.AnalyticsContext),
            h = f || t === u.BVt.APPLICATION_LIBRARY_SETTINGS;
        return (0, r.jsxs)(a.A, {
            className: p.$,
            toolbar: null == n ? void 0 : n(),
            children: [
                (0, r.jsx)(a.A.Icon, {
                    icon: l._z,
                    "aria-hidden": !0,
                }),
                (0, r.jsx)(a.A.Title, {
                    children: d.intl.string(d.t.cw57ar),
                }),
                (0, r.jsx)(a.A.Divider, {}),
                (0, r.jsxs)(l.VQ0, {
                    type: "top-pill",
                    selectedItem: t,
                    onItemSelect: function (e) {
                        var n, r;
                        e !== t &&
                            (0, s.pX)(e, {
                                state: {
                                    analyticsSource:
                                        ((n = (function (e) {
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
                                        })({}, c.location)),
                                        (r = r =
                                            {
                                                section: u.JJy.TABS,
                                                object: u.ZSU.NAVIGATION_LINK,
                                            }),
                                        Object.getOwnPropertyDescriptors
                                            ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r))
                                            : (function (e, t) {
                                                  var n = Object.keys(e);
                                                  if (Object.getOwnPropertySymbols) {
                                                      var r = Object.getOwnPropertySymbols(e);
                                                      n.push.apply(n, r);
                                                  }
                                                  return n;
                                              })(Object(r)).forEach(function (e) {
                                                  Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e));
                                              }),
                                        n),
                                },
                            });
                    },
                    children: [
                        (0, r.jsx)(l.VQ0.Item, {
                            id: u.BVt.APPLICATION_LIBRARY,
                            children: d.intl.string(d.t.p7ARTB),
                        }),
                        h
                            ? (0, r.jsx)(l.VQ0.Item, {
                                  id: u.BVt.APPLICATION_LIBRARY_SETTINGS,
                                  children: d.intl.string(d.t["3D5yo/"]),
                              })
                            : null,
                    ],
                }),
            ],
        });
    });
