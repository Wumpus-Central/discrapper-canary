"use strict";
n.d(t, { h2: () => u });
var r = n(627968),
    i = n(64700),
    a = n(732955),
    s = n(448362),
    o = n(749226);
let l = {
        balance: { label: "Balance", type: "number", defaultValue: 150 },
        balanceWidgetMode: {
            label: "Balance Widget Mode",
            type: "select",
            options: [
                { label: "Default", value: s.k7.DEFAULT },
                { label: "Selected", value: s.k7.SELECTED },
            ],
            defaultValue: s.k7.DEFAULT,
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
                    let { loading: t, shouldUseTabularNums: n, ...l } = e,
                        [u, c] = (0, i.useState)(l.balance);
                    return (
                        (0, i.useEffect)(() => {
                            null == u && null != l.balance && c(l.balance);
                        }, [l.balance, u]),
                        (0, r.jsxs)("div", {
                            className: o.YG,
                            children: [
                                (0, r.jsx)(s.Gy, { ...l, balance: t ? null : u, className: n ? o.jG : void 0 }),
                                (0, r.jsx)(a.$nd, { onClick: () => c(l.balance), text: "Update Balance" }),
                            ],
                        })
                    );
                },
                controls: { loading: { label: "Loading", type: "boolean", defaultValue: !1 }, ...l },
            },
            {
                name: "Balance Widget Pill Loading State",
                id: "balance-widget-pill-loading",
                component: (e) => {
                    let { loadingDuration: t, shouldUseTabularNums: n, ...l } = e,
                        [u, c] = (0, i.useState)(l.balance);
                    return (
                        (0, i.useEffect)(() => {
                            c(l.balance);
                        }, [l.balance]),
                        (0, r.jsxs)("div", {
                            className: o.YG,
                            children: [
                                (0, r.jsx)(s.Gy, { ...l, balance: u, className: n ? o.jG : void 0 }),
                                (0, r.jsx)(a.$nd, {
                                    onClick: () => {
                                        c(null),
                                            setTimeout(() => {
                                                c(l.balance);
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
                    ...l,
                },
            },
        ],
    };
