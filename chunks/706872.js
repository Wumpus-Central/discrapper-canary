n.d(t, { Oi: () => h }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(159691),
    o = n(970815),
    s = n(605532);
function l(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function c(e) {
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
                l(e, t, n[t]);
            });
    }
    return e;
}
function u(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function d(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : u(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function f(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = _(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function _(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let p = {
        balance: {
            label: "Balance",
            type: "number",
            defaultValue: 150,
        },
        balanceWidgetMode: {
            label: "Balance Widget Mode",
            type: "select",
            options: [
                {
                    label: "Default",
                    value: o.b6.DEFAULT,
                },
                {
                    label: "Selected",
                    value: o.b6.SELECTED,
                },
            ],
            defaultValue: o.b6.DEFAULT,
        },
        showNotificationBadge: {
            label: "Show Notification Badge",
            type: "boolean",
            defaultValue: !1,
        },
        shouldUseTabularNums: {
            label: "Use Tabular Nums Font Variant",
            type: "boolean",
            defaultValue: !1,
        },
        disabled: {
            label: "Disabled",
            type: "boolean",
            defaultValue: !1,
        },
    },
    h = {
        title: "Balance Widget Pill",
        stories: [
            {
                name: "Balance Widget Pill",
                id: "balance-widget-pill",
                component: (e) => {
                    var { loading: t, shouldUseTabularNums: n } = e,
                        l = f(e, ["loading", "shouldUseTabularNums"]);
                    let [u, _] = (0, i.useState)(l.balance);
                    return (
                        (0, i.useEffect)(() => {
                            null == u && null != l.balance && _(l.balance);
                        }, [l.balance, u]),
                        (0, r.jsxs)("div", {
                            className: s.verticalContainer,
                            children: [
                                (0, r.jsx)(
                                    o.A4,
                                    d(c({}, l), {
                                        balance: t ? null : u,
                                        className: n ? s.tabularNums : void 0,
                                    }),
                                ),
                                (0, r.jsx)(a.zxk, {
                                    onClick: () => _(l.balance),
                                    text: "Update Balance",
                                }),
                            ],
                        })
                    );
                },
                controls: c(
                    {
                        loading: {
                            label: "Loading",
                            type: "boolean",
                            defaultValue: !1,
                        },
                    },
                    p,
                ),
            },
            {
                name: "Balance Widget Pill Loading State",
                id: "balance-widget-pill-loading",
                component: (e) => {
                    var { loadingDuration: t, shouldUseTabularNums: n } = e,
                        l = f(e, ["loadingDuration", "shouldUseTabularNums"]);
                    let [u, _] = (0, i.useState)(l.balance);
                    return (
                        (0, i.useEffect)(() => {
                            _(l.balance);
                        }, [l.balance]),
                        (0, r.jsxs)("div", {
                            className: s.verticalContainer,
                            children: [
                                (0, r.jsx)(
                                    o.A4,
                                    d(c({}, l), {
                                        balance: u,
                                        className: n ? s.tabularNums : void 0,
                                    }),
                                ),
                                (0, r.jsx)(a.zxk, {
                                    onClick: () => {
                                        _(null),
                                            setTimeout(() => {
                                                _(l.balance);
                                            }, t);
                                    },
                                    text: "Simulate Loading State",
                                }),
                            ],
                        })
                    );
                },
                controls: c(
                    {
                        loadingDuration: {
                            label: "Loading Duration (ms)",
                            type: "number",
                            defaultValue: 500,
                        },
                    },
                    p,
                ),
            },
        ],
    };
