n.d(t, { O: () => E }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(159691),
    o = n(481060),
    s = n(52647),
    l = n(825102),
    c = n(317257),
    u = n(120786),
    d = n(775451),
    f = n(970815),
    _ = n(275388),
    p = n(450272),
    h = n(981631),
    m = n(388032),
    g = n(905164);
function E() {
    let { enabled: e } = (0, l.WX)({ location: "revenue_storybook" });
    return (0, r.jsxs)("div", {
        children: [e && (0, r.jsx)(O, {}), (0, r.jsx)(y, {}), (0, r.jsx)(v, {})],
    });
}
let b = 150;
function y() {
    let [e, t] = i.useState(b),
        [n, s] = i.useState(b),
        [l, _] = i.useState(500),
        [E, y] = i.useState(c.b.DEFAULT),
        O = () => {
            switch (E) {
                case c.b.DEFAULT:
                    y(c.b.HIGHLIGHTED);
                    break;
                case c.b.HIGHLIGHTED:
                    y(c.b.SELECTED);
                    break;
                case c.b.SELECTED:
                    y(c.b.DEFAULT);
            }
        };
    return (0, r.jsxs)(p.$0, {
        children: [
            (0, r.jsx)(o.X6q, {
                variant: "heading-xl/semibold",
                children: "Balance Widget Components",
            }),
            (0, r.jsx)(p.E_, {
                label: "Balance Widget Menu",
                children: (0, r.jsx)(d.V9, {
                    ctaText: m.intl.string(m.t["J+vlIS"]),
                    ctaOnClick: h.dG4,
                }),
            }),
            (0, r.jsxs)(p.E_, {
                label: "Balance Widget Pill",
                children: [
                    (0, r.jsx)(f.A4, {
                        balance: 150,
                        balanceWidgetMode: c.b.DEFAULT,
                    }),
                    (0, r.jsx)(f.A4, {
                        balance: 150,
                        balanceWidgetMode: c.b.HIGHLIGHTED,
                    }),
                    (0, r.jsx)(f.A4, {
                        balance: 150,
                        balanceWidgetMode: c.b.SELECTED,
                    }),
                    (0, r.jsx)(f.A4, {
                        balance: 0,
                        balanceWidgetMode: c.b.DEFAULT,
                        showNotificationBadge: !0,
                    }),
                    (0, r.jsx)(f.A4, {
                        balance: null,
                        balanceWidgetMode: c.b.DEFAULT,
                    }),
                ],
            }),
            (0, r.jsxs)(p.E_, {
                label: "Balance Widget Pill Interactive (click to change mode)",
                direction: "vertical",
                children: [
                    (0, r.jsx)(o.Text, {
                        variant: "text-md/normal",
                        style: { marginBottom: "4px" },
                        children: "Enter a number and click Set Balance to see the balance widget pill update:",
                    }),
                    (0, r.jsx)(o.FiK, {
                        className: g.numberInput,
                        value: e,
                        onChange: (e) => t(e),
                    }),
                    (0, r.jsx)(a.zxk, {
                        onClick: () => s(e),
                        text: "Set Balance",
                    }),
                    (0, r.jsx)("div", {
                        className: g.interactivePillContainer,
                        children: (0, r.jsx)(f.A4, {
                            balance: n,
                            balanceWidgetMode: E,
                            onClick: () => O(),
                        }),
                    }),
                    (0, r.jsx)(o.Text, {
                        variant: "text-md/normal",
                        style: { marginBottom: "4px" },
                        children:
                            "Enter a number (loading time in milliseconds) and click Simulate Loading State to see the balance widget pill update:",
                    }),
                    (0, r.jsx)(o.FiK, {
                        className: g.numberInput,
                        value: l,
                        onChange: (e) => _(e),
                    }),
                    (0, r.jsx)(a.zxk, {
                        onClick: () => {
                            s(null),
                                setTimeout(() => {
                                    s(e);
                                }, l);
                        },
                        text: "Simulate Loading State",
                    }),
                    (0, r.jsx)("div", {
                        className: g.interactivePillContainer,
                        children: (0, r.jsx)(f.A4, {
                            balance: n,
                            balanceWidgetMode: E,
                            onClick: () => O(),
                        }),
                    }),
                ],
            }),
            (0, r.jsx)(p.E_, {
                label: "Balance Widget Card",
                children: (0, r.jsx)(u.L, {
                    ctaText: m.intl.string(m.t["H57f4+"]),
                    linkText: m.intl.string(m.t["7f4H7O"]),
                    ctaOnClick: h.dG4,
                }),
            }),
        ],
    });
}
function O() {
    let [e, t] = i.useState("1144308439720394944");
    return (0, r.jsxs)(p.$0, {
        children: [
            (0, r.jsx)(o.X6q, {
                variant: "heading-xl/semibold",
                children: "Orb Checkout Components",
            }),
            (0, r.jsxs)(p.E_, {
                label: "Orb Checkout Modal",
                direction: "vertical",
                children: [
                    (0, r.jsx)(o.Text, {
                        variant: "text-md/normal",
                        children: "Enter SKU ID here:",
                    }),
                    (0, r.jsx)(o.oil, {
                        placeholder: "SKU ID",
                        value: e,
                        onChange: (e) => t(e),
                    }),
                    (0, r.jsx)(o.Text, {
                        variant: "text-md/normal",
                        color: "text-feedback-info",
                        children: "The Orb Checkout Modal will open with the orb price of the product, if it exists",
                    }),
                    (0, r.jsx)(a.zxk, {
                        onClick: () => {
                            (0, _.qA)({
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
function v() {
    let { resetOnboardingExperience: e } = (0, s.Z)();
    return (0, r.jsxs)(p.$0, {
        children: [
            (0, r.jsx)(o.X6q, {
                variant: "heading-xl/semibold",
                children: "Onboarding Components",
            }),
            (0, r.jsxs)(p.E_, {
                label: "Announcement Modal [Reset Dismissible Content]",
                direction: "vertical",
                children: [
                    (0, r.jsx)(o.Text, {
                        variant: "text-md/normal",
                        color: "text-feedback-info",
                        style: { marginBottom: "8px" },
                        children:
                            "After resetting your Announcement Modal State and exiting from user settings, you'll be able to see the Announcement Modal again.",
                    }),
                    (0, r.jsx)(a.zxk, {
                        onClick: () => e(),
                        text: "Reset Announcement Modal State",
                    }),
                ],
            }),
        ],
    });
}
