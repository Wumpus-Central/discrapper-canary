n.d(t, { O: () => g }), n(388685);
var a = n(951288),
    r = n(647438),
    i = n(159691),
    l = n(481060),
    s = n(52647),
    o = n(825102),
    c = n(317257),
    d = n(120786),
    u = n(775451),
    m = n(970815),
    h = n(275388),
    p = n(237012),
    x = n(981631),
    f = n(388032),
    b = n(91600);
function g() {
    let { enabled: e } = (0, o.WX)({ location: "revenue_storybook" });
    return (0, a.jsxs)("div", {
        children: [e && (0, a.jsx)(v, {}), (0, a.jsx)(j, {}), (0, a.jsx)(_, {})],
    });
}
function j() {
    let [e, t] = r.useState(150),
        [n, s] = r.useState(150),
        [o, h] = r.useState(500),
        [g, j] = r.useState(c.b.DEFAULT),
        v = () => {
            switch (g) {
                case c.b.DEFAULT:
                    j(c.b.HIGHLIGHTED);
                    break;
                case c.b.HIGHLIGHTED:
                    j(c.b.SELECTED);
                    break;
                case c.b.SELECTED:
                    j(c.b.DEFAULT);
            }
        };
    return (0, a.jsxs)(p.$0, {
        children: [
            (0, a.jsx)(l.X6q, {
                variant: "heading-xl/semibold",
                children: "Balance Widget Components",
            }),
            (0, a.jsx)(p.E_, {
                label: "Balance Widget Menu",
                children: (0, a.jsx)(u.V9, {
                    ctaText: f.intl.string(f.t["J+vlIS"]),
                    ctaOnClick: x.dG4,
                }),
            }),
            (0, a.jsxs)(p.E_, {
                label: "Balance Widget Pill",
                children: [
                    (0, a.jsx)(m.A4, {
                        balance: 150,
                        balanceWidgetMode: c.b.DEFAULT,
                    }),
                    (0, a.jsx)(m.A4, {
                        balance: 150,
                        balanceWidgetMode: c.b.HIGHLIGHTED,
                    }),
                    (0, a.jsx)(m.A4, {
                        balance: 150,
                        balanceWidgetMode: c.b.SELECTED,
                    }),
                    (0, a.jsx)(m.A4, {
                        balance: 0,
                        balanceWidgetMode: c.b.DEFAULT,
                        showNotificationBadge: !0,
                    }),
                    (0, a.jsx)(m.A4, {
                        balance: null,
                        balanceWidgetMode: c.b.DEFAULT,
                    }),
                ],
            }),
            (0, a.jsxs)(p.E_, {
                label: "Balance Widget Pill Interactive (click to change mode)",
                direction: "vertical",
                children: [
                    (0, a.jsx)(l.Text, {
                        variant: "text-md/normal",
                        style: { marginBottom: "4px" },
                        children: "Enter a number and click Set Balance to see the balance widget pill update:",
                    }),
                    (0, a.jsx)(l.FiK, {
                        className: b.numberInput,
                        value: e,
                        onChange: (e) => t(e),
                    }),
                    (0, a.jsx)(i.zxk, {
                        onClick: () => s(e),
                        text: "Set Balance",
                    }),
                    (0, a.jsx)("div", {
                        className: b.interactivePillContainer,
                        children: (0, a.jsx)(m.A4, {
                            balance: n,
                            balanceWidgetMode: g,
                            onClick: () => v(),
                        }),
                    }),
                    (0, a.jsx)(l.Text, {
                        variant: "text-md/normal",
                        style: { marginBottom: "4px" },
                        children:
                            "Enter a number (loading time in milliseconds) and click Simulate Loading State to see the balance widget pill update:",
                    }),
                    (0, a.jsx)(l.FiK, {
                        className: b.numberInput,
                        value: o,
                        onChange: (e) => h(e),
                    }),
                    (0, a.jsx)(i.zxk, {
                        onClick: () => {
                            s(null),
                                setTimeout(() => {
                                    s(e);
                                }, o);
                        },
                        text: "Simulate Loading State",
                    }),
                    (0, a.jsx)("div", {
                        className: b.interactivePillContainer,
                        children: (0, a.jsx)(m.A4, {
                            balance: n,
                            balanceWidgetMode: g,
                            onClick: () => v(),
                        }),
                    }),
                ],
            }),
            (0, a.jsx)(p.E_, {
                label: "Balance Widget Card",
                children: (0, a.jsx)(d.L, {
                    ctaText: f.intl.string(f.t["H57f4+"]),
                    linkText: f.intl.string(f.t["7f4H7O"]),
                    ctaOnClick: x.dG4,
                }),
            }),
        ],
    });
}
function v() {
    let [e, t] = r.useState("1144308439720394944");
    return (0, a.jsxs)(p.$0, {
        children: [
            (0, a.jsx)(l.X6q, {
                variant: "heading-xl/semibold",
                children: "Orb Checkout Components",
            }),
            (0, a.jsxs)(p.E_, {
                label: "Orb Checkout Modal",
                direction: "vertical",
                children: [
                    (0, a.jsx)(l.Text, {
                        variant: "text-md/normal",
                        children: "Enter SKU ID here:",
                    }),
                    (0, a.jsx)(l.oil, {
                        placeholder: "SKU ID",
                        value: e,
                        onChange: (e) => t(e),
                    }),
                    (0, a.jsx)(l.Text, {
                        variant: "text-md/normal",
                        color: "text-feedback-info",
                        children: "The Orb Checkout Modal will open with the orb price of the product, if it exists",
                    }),
                    (0, a.jsx)(i.zxk, {
                        onClick: () => {
                            (0, h.qA)({
                                skuId: e,
                                onCheckoutSuccess: (e) => {
                                    let { skuId: t, entitlements: n } = e;
                                    console.log(
                                        "Orb Checkout Success for SKU: ".concat(t, ". Entitlement(s): "),
                                        n,
                                        Date.now(),
                                    );
                                },
                                onCloseCallback: () => {
                                    console.log("Orb Checkout Closed");
                                },
                            });
                        },
                        text: "Open Orb Checkout Integrated with Payment Modal",
                    }),
                ],
            }),
        ],
    });
}
function _() {
    let { resetOnboardingExperience: e } = (0, s.Z)();
    return (0, a.jsxs)(p.$0, {
        children: [
            (0, a.jsx)(l.X6q, {
                variant: "heading-xl/semibold",
                children: "Onboarding Components",
            }),
            (0, a.jsxs)(p.E_, {
                label: "Announcement Modal [Reset Dismissible Content]",
                direction: "vertical",
                children: [
                    (0, a.jsx)(l.Text, {
                        variant: "text-md/normal",
                        color: "text-feedback-info",
                        style: { marginBottom: "8px" },
                        children:
                            "After resetting your Announcement Modal State and exiting from user settings, you'll be able to see the Announcement Modal again.",
                    }),
                    (0, a.jsx)(i.zxk, {
                        onClick: () => e(),
                        text: "Reset Announcement Modal State",
                    }),
                ],
            }),
        ],
    });
}
