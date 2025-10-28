n.d(t, { O: () => c }), n(388685);
var r = n(951288),
    l = n(647438),
    o = n(159691),
    a = n(970815),
    i = n(605532);
let c = {
    title: "Balance Widget Pill",
    stories: [
        {
            name: "Balance Widget Pill",
            id: "balance-widget-pill",
            component: (e) => {
                var t,
                    n,
                    { loading: c } = e,
                    u = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            r,
                            l = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    r,
                                    l = {},
                                    o = Object.keys(e);
                                for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (l[n] = e[n]);
                                return l;
                            })(e, t);
                        if (Object.getOwnPropertySymbols) {
                            var o = Object.getOwnPropertySymbols(e);
                            for (r = 0; r < o.length; r++)
                                (n = o[r]),
                                    !(t.indexOf(n) >= 0) &&
                                        Object.prototype.propertyIsEnumerable.call(e, n) &&
                                        (l[n] = e[n]);
                        }
                        return l;
                    })(e, ["loading"]);
                let [s, d] = (0, l.useState)(u.balance);
                return (
                    (0, l.useEffect)(() => {
                        null == s && null != u.balance && d(u.balance);
                    }, [u.balance, s]),
                    (0, r.jsxs)("div", {
                        className: i.verticalContainer,
                        children: [
                            (0, r.jsx)(
                                a.A4,
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
                                })({}, u)),
                                (n = n = { balance: c ? null : s }),
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
                            ),
                            (0, r.jsx)(o.zxk, {
                                onClick: () => d(u.balance),
                                text: "Update Balance",
                            }),
                        ],
                    })
                );
            },
            controls: {
                loading: {
                    label: "Loading",
                    type: "boolean",
                    defaultValue: !1,
                },
                balance: {
                    label: "Balance",
                    type: "number",
                    defaultValue: 0,
                },
                balanceWidgetMode: {
                    label: "Balance Widget Mode",
                    type: "select",
                    options: [
                        {
                            label: "Default",
                            value: a.b6.DEFAULT,
                        },
                        {
                            label: "Selected",
                            value: a.b6.SELECTED,
                        },
                    ],
                    defaultValue: a.b6.DEFAULT,
                },
                showNotificationBadge: {
                    label: "Show Notification Badge",
                    type: "boolean",
                    defaultValue: !1,
                },
                disabled: {
                    label: "Disabled",
                    type: "boolean",
                    defaultValue: !1,
                },
            },
        },
    ],
};
