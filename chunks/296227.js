n.d(t, { A: () => f });
var r = n(627968),
    l = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(397927),
    o = n(442433),
    c = n(928658),
    u = n(985018),
    d = n(418843);
function f(e) {
    let { widget: t, userId: n, className: i, menuItems: f } = e,
        p = l.useRef(null),
        b = () => {
            (0, c.GJ)(n, t);
        };
    return (0, r.jsx)(s.YNO, {
        targetElementRef: p,
        align: "top",
        position: "right",
        disablePointerEvents: !1,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, r.jsx)(s.W1t, {
                navId: "user-profile-widget-context-menu",
                onClose: () => {
                    (0, o.Z_)(), t();
                },
                onSelect: () => {},
                "aria-label": u.intl.string(u.t.xpSHSk),
                children: (0, r.jsxs)(s.rXV, {
                    children: [
                        (0, r.jsx)(
                            s.Drp,
                            {
                                id: "flag-widget",
                                label: u.intl.string(u.t.D4GvHE),
                                action: b,
                                color: "danger",
                                icon: s.iFK,
                            },
                            "flag-widget",
                        ),
                        f,
                    ],
                }),
            });
        },
        children: (e) => {
            var t, n;
            return (0, r.jsx)(
                s.DUT,
                ((t = (function (e) {
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
                })({}, e)),
                (n = n =
                    {
                        innerRef: p,
                        "aria-label": u.intl.string(u.t.xpSHSk),
                        className: a()(d.x, i),
                        children: (0, r.jsx)(s.jNK, {
                            size: "sm",
                            color: "currentColor",
                        }),
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var r = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, r);
                          }
                          return n;
                      })(Object(n)).forEach(function (e) {
                          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                      }),
                t),
            );
        },
    });
}
