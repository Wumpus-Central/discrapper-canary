l.d(t, { h2: () => d });
var a = l(627968),
    n = l(64700),
    r = l(821609),
    i = l(448362),
    o = l(439519);
let s = {
        balance: { label: "Balance", type: "number", defaultValue: 150 },
        balanceWidgetMode: {
            label: "Balance Widget Mode",
            type: "select",
            options: [
                { label: "Default", value: i.k7.DEFAULT },
                { label: "Selected", value: i.k7.SELECTED },
            ],
            defaultValue: i.k7.DEFAULT,
        },
        showNotificationBadge: { label: "Show Notification Badge", type: "boolean", defaultValue: !1 },
        shouldUseTabularNums: { label: "Use Tabular Nums Font Variant", type: "boolean", defaultValue: !1 },
        disabled: { label: "Disabled", type: "boolean", defaultValue: !1 },
    },
    d = {
        title: "Balance Widget Pill",
        stories: [
            {
                name: "Balance Widget Pill",
                id: "balance-widget-pill",
                component: (e) => {
                    let { loading: t, shouldUseTabularNums: l, ...s } = e,
                        [d, c] = (0, n.useState)(s.balance);
                    return (
                        (0, n.useEffect)(() => {
                            null == d && null != s.balance && c(s.balance);
                        }, [s.balance, d]),
                        (0, a.jsxs)("div", {
                            className: o.YG,
                            children: [
                                (0, a.jsx)(i.Gy, { ...s, balance: t ? null : d, className: l ? o.jG : void 0 }),
                                (0, a.jsx)(r.$, { onClick: () => c(s.balance), text: "Update Balance" }),
                            ],
                        })
                    );
                },
                controls: { loading: { label: "Loading", type: "boolean", defaultValue: !1 }, ...s },
            },
            {
                name: "Balance Widget Pill Loading State",
                id: "balance-widget-pill-loading",
                component: (e) => {
                    let { loadingDuration: t, shouldUseTabularNums: l, ...s } = e,
                        [d, c] = (0, n.useState)(s.balance);
                    return (
                        (0, n.useEffect)(() => {
                            c(s.balance);
                        }, [s.balance]),
                        (0, a.jsxs)("div", {
                            className: o.YG,
                            children: [
                                (0, a.jsx)(i.Gy, { ...s, balance: d, className: l ? o.jG : void 0 }),
                                (0, a.jsx)(r.$, {
                                    onClick: () => {
                                        c(null),
                                            setTimeout(() => {
                                                c(s.balance);
                                            }, t);
                                    },
                                    text: "Simulate Loading State",
                                }),
                            ],
                        })
                    );
                },
                controls: {
                    loadingDuration: { label: "Loading Duration (ms)", type: "number", defaultValue: 500 },
                    ...s,
                },
            },
        ],
    };
