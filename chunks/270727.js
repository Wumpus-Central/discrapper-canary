n.d(t, {
    h2: () => h,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(732955),
    s = n(448362),
    o = n(749226);

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
        i,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (((a = p(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}

function p(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}
let _ = {
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
                    value: s.k7.DEFAULT,
                },
                {
                    label: "Selected",
                    value: s.k7.SELECTED,
                },
            ],
            defaultValue: s.k7.DEFAULT,
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
                    let { loading: t, shouldUseTabularNums: n } = e,
                        l = f(e, ["loading", "shouldUseTabularNums"]),
                        [u, p] = (0, i.useState)(l.balance);
                    return (
                        (0, i.useEffect)(() => {
                            null == u && null != l.balance && p(l.balance);
                        }, [l.balance, u]),
                        (0, r.jsxs)("div", {
                            className: o.YG,
                            children: [
                                (0, r.jsx)(
                                    s.Gy,
                                    d(c({}, l), {
                                        balance: t ? null : u,
                                        className: n ? o.jG : void 0,
                                    }),
                                ),
                                (0, r.jsx)(a.$nd, {
                                    onClick: () => p(l.balance),
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
                    _,
                ),
            },
            {
                name: "Balance Widget Pill Loading State",
                id: "balance-widget-pill-loading",
                component: (e) => {
                    let { loadingDuration: t, shouldUseTabularNums: n } = e,
                        l = f(e, ["loadingDuration", "shouldUseTabularNums"]),
                        [u, p] = (0, i.useState)(l.balance);
                    return (
                        (0, i.useEffect)(() => {
                            p(l.balance);
                        }, [l.balance]),
                        (0, r.jsxs)("div", {
                            className: o.YG,
                            children: [
                                (0, r.jsx)(
                                    s.Gy,
                                    d(c({}, l), {
                                        balance: u,
                                        className: n ? o.jG : void 0,
                                    }),
                                ),
                                (0, r.jsx)(a.$nd, {
                                    onClick: () => {
                                        p(null),
                                            setTimeout(() => {
                                                p(l.balance);
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
                    _,
                ),
            },
        ],
    };
