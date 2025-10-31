n.d(t, { O: () => b }), n(388685);
var a = n(951288),
    r = n(647438),
    l = n(159691),
    i = n(481060),
    o = n(52647),
    s = n(825102),
    c = n(317257),
    d = n(120786),
    u = n(775451),
    m = n(970815),
    p = n(275388),
    h = n(237012),
    x = n(981631),
    g = n(388032),
    f = n(386521);
function b() {
    let { enabled: e } = (0, s.WX)({ location: "revenue_storybook" });
    return (0, a.jsxs)("div", {
        children: [e && (0, a.jsx)(j, {}), (0, a.jsx)(v, {}), (0, a.jsx)(_, {})],
    });
}
function v() {
    let [e, t] = r.useState(150),
        [n, o] = r.useState(150),
        [s, p] = r.useState(500),
        [b, v] = r.useState(c.b.DEFAULT),
        j = () => {
            switch (b) {
                case c.b.DEFAULT:
                    v(c.b.HIGHLIGHTED);
                    break;
                case c.b.HIGHLIGHTED:
                    v(c.b.SELECTED);
                    break;
                case c.b.SELECTED:
                    v(c.b.DEFAULT);
            }
        };
    return (0, a.jsxs)(h.$0, {
        children: [
            (0, a.jsx)(i.Heading, {
                variant: "heading-xl/semibold",
                children: "Balance Widget Components",
            }),
            (0, a.jsx)(h.E_, {
                label: "Balance Widget Menu",
                children: (0, a.jsx)(u.V9, {
                    ctaText: g.intl.string(g.t["J+vlIR"]),
                    ctaOnClick: x.dG4,
                }),
            }),
            (0, a.jsxs)(h.E_, {
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
            (0, a.jsxs)(h.E_, {
                label: "Balance Widget Pill Interactive (click to change mode)",
                direction: "vertical",
                children: [
                    (0, a.jsx)(i.Text, {
                        variant: "text-md/normal",
                        style: { marginBottom: "4px" },
                        children: "Enter a number and click Set Balance to see the balance widget pill update:",
                    }),
                    (0, a.jsx)(i.FiK, {
                        className: f.numberInput,
                        value: e,
                        onChange: (e) => t(e),
                    }),
                    (0, a.jsx)(l.zxk, {
                        onClick: () => o(e),
                        text: "Set Balance",
                    }),
                    (0, a.jsx)("div", {
                        className: f.interactivePillContainer,
                        children: (0, a.jsx)(m.A4, {
                            balance: n,
                            balanceWidgetMode: b,
                            onClick: () => j(),
                        }),
                    }),
                    (0, a.jsx)(i.Text, {
                        variant: "text-md/normal",
                        style: { marginBottom: "4px" },
                        children:
                            "Enter a number (loading time in milliseconds) and click Simulate Loading State to see the balance widget pill update:",
                    }),
                    (0, a.jsx)(i.FiK, {
                        className: f.numberInput,
                        value: s,
                        onChange: (e) => p(e),
                    }),
                    (0, a.jsx)(l.zxk, {
                        onClick: () => {
                            o(null),
                                setTimeout(() => {
                                    o(e);
                                }, s);
                        },
                        text: "Simulate Loading State",
                    }),
                    (0, a.jsx)("div", {
                        className: f.interactivePillContainer,
                        children: (0, a.jsx)(m.A4, {
                            balance: n,
                            balanceWidgetMode: b,
                            onClick: () => j(),
                        }),
                    }),
                ],
            }),
            (0, a.jsx)(h.E_, {
                label: "Balance Widget Card",
                children: (0, a.jsx)(d.L, {
                    ctaText: g.intl.string(g.t.H57f41),
                    linkText: g.intl.string(g.t["7f4H7D"]),
                    ctaOnClick: x.dG4,
                }),
            }),
        ],
    });
}
function j() {
    let [e, t] = r.useState("1144308439720394944");
    return (0, a.jsxs)(h.$0, {
        children: [
            (0, a.jsx)(i.Heading, {
                variant: "heading-xl/semibold",
                children: "Orb Checkout Components",
            }),
            (0, a.jsxs)(h.E_, {
                label: "Orb Checkout Modal",
                direction: "vertical",
                children: [
                    (0, a.jsx)(i.Text, {
                        variant: "text-md/normal",
                        children: "Enter SKU ID here:",
                    }),
                    (0, a.jsx)(i.oil, {
                        placeholder: "SKU ID",
                        value: e,
                        onChange: (e) => t(e),
                    }),
                    (0, a.jsx)(i.Text, {
                        variant: "text-md/normal",
                        color: "text-feedback-info",
                        children: "The Orb Checkout Modal will open with the orb price of the product, if it exists",
                    }),
                    (0, a.jsx)(l.zxk, {
                        onClick: () => {
                            (0, p.qA)({
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
    let { resetOnboardingExperience: e } = (0, o.Z)();
    return (0, a.jsxs)(h.$0, {
        children: [
            (0, a.jsx)(i.Heading, {
                variant: "heading-xl/semibold",
                children: "Onboarding Components",
            }),
            (0, a.jsxs)(h.E_, {
                label: "Announcement Modal [Reset Dismissible Content]",
                direction: "vertical",
                children: [
                    (0, a.jsx)(i.Text, {
                        variant: "text-md/normal",
                        color: "text-feedback-info",
                        style: { marginBottom: "8px" },
                        children:
                            "After resetting your Announcement Modal State and exiting from user settings, you'll be able to see the Announcement Modal again.",
                    }),
                    (0, a.jsx)(l.zxk, {
                        onClick: () => e(),
                        text: "Reset Announcement Modal State",
                    }),
                ],
            }),
        ],
    });
}
