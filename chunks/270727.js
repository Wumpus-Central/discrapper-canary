l.d(t, { h2: () => u });
var a = l(627968),
    n = l(64700),
    r = l(732955),
    i = l(448362),
    s = l(749226);
let o = {
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
    u = {
        title: "Balance Widget Pill",
        stories: [
            {
                name: "Balance Widget Pill",
                id: "balance-widget-pill",
                component: (e) => {
                    let { loading: t, shouldUseTabularNums: l, ...o } = e,
                        [u, c] = (0, n.useState)(o.balance);
                    return (
                        (0, n.useEffect)(() => {
                            null == u && null != o.balance && c(o.balance);
                        }, [o.balance, u]),
                        (0, a.jsxs)("div", {
                            className: s.YG,
                            children: [
                                (0, a.jsx)(i.Gy, { ...o, balance: t ? null : u, className: l ? s.jG : void 0 }),
                                (0, a.jsx)(r.$nd, { onClick: () => c(o.balance), text: "Update Balance" }),
                            ],
                        })
                    );
                },
                controls: { loading: { label: "Loading", type: "boolean", defaultValue: !1 }, ...o },
            },
            {
                name: "Balance Widget Pill Loading State",
                id: "balance-widget-pill-loading",
                component: (e) => {
                    let { loadingDuration: t, shouldUseTabularNums: l, ...o } = e,
                        [u, c] = (0, n.useState)(o.balance);
                    return (
                        (0, n.useEffect)(() => {
                            c(o.balance);
                        }, [o.balance]),
                        (0, a.jsxs)("div", {
                            className: s.YG,
                            children: [
                                (0, a.jsx)(i.Gy, { ...o, balance: u, className: l ? s.jG : void 0 }),
                                (0, a.jsx)(r.$nd, {
                                    onClick: () => {
                                        c(null),
                                            setTimeout(() => {
                                                c(o.balance);
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
                    ...o,
                },
            },
        ],
    };
