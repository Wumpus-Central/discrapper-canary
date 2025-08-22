n.d(t, { O: () => S }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(680018),
    o = n(481060),
    s = n(37234),
    l = n(100527),
    c = n(906732),
    u = n(335131),
    d = n(703656),
    f = n(511050),
    _ = n(52647),
    p = n(822857),
    h = n(317257),
    m = n(120786),
    g = n(775451),
    E = n(970815),
    b = n(275388),
    y = n(720463),
    O = n(450272),
    v = n(981631),
    I = n(388032),
    T = n(905164);
function S() {
    let { enabled: e } = (0, p.WX)({ location: "revenue_storybook" });
    return (0, r.jsxs)("div", {
        children: [e && (0, r.jsx)(N, {}), (0, r.jsx)(C, {}), (0, r.jsx)(R, {})],
    });
}
let A = 150;
function C() {
    let { openIntroToOrbsClaimedCoachmark: e } = (0, f.l)({ location: "VirtualCurrencyComponents" }),
        [t, n] = i.useState(A),
        [_, p] = i.useState(A),
        [b, y] = i.useState(500),
        [S, C] = i.useState(h.b.DEFAULT),
        N = () => {
            switch (S) {
                case h.b.DEFAULT:
                    C(h.b.HIGHLIGHTED);
                    break;
                case h.b.HIGHLIGHTED:
                    C(h.b.SELECTED);
                    break;
                case h.b.SELECTED:
                    C(h.b.DEFAULT);
            }
        },
        { analyticsLocations: R } = (0, c.ZP)(l.Z.PAYMENT_FLOW_TEST_PAGE);
    return (0, r.jsxs)(O.$0, {
        children: [
            (0, r.jsx)(o.X6q, {
                variant: "heading-xl/semibold",
                children: "Balance Widget Components",
            }),
            (0, r.jsx)(O.E_, {
                label: "Balance Widget Menu",
                children: (0, r.jsx)(g.V9, {
                    ctaText: I.intl.string(I.t["J+vlIS"]),
                    ctaOnClick: v.dG4,
                    isCoachmarkEnabled: !1,
                }),
            }),
            (0, r.jsxs)(O.E_, {
                label: "Open Balance Widget Coachmark in Shop",
                direction: "vertical",
                children: [
                    (0, r.jsxs)("div", {
                        children: [
                            (0, r.jsx)(o.Text, {
                                variant: "text-md/normal",
                                style: { marginBottom: "8px" },
                                children:
                                    "Click the button below to open the Balance Widget Earned Orbs Coachmark in the shop page.",
                            }),
                            (0, r.jsx)(o.Text, {
                                variant: "text-md/normal",
                                color: "text-feedback-info",
                                style: { marginBottom: "8px" },
                                children:
                                    "You will be redirected to the shop page and the coachmark will appear beneath the Balance Widget Pill in the header bar after 0.5 seconds.",
                            }),
                        ],
                    }),
                    (0, r.jsx)(a.z, {
                        onClick: () => {
                            (0, s.xf)(),
                                (0, d.s1)().location.pathname.includes(v.Z5c.COLLECTIBLES_SHOP) ||
                                    (0, u.mK)({
                                        openInLayer: !1,
                                        analyticsLocations: R,
                                        analyticsSource: l.Z.REVENUE_STORYBOOK_TEST_PAGE,
                                    }),
                                e({
                                    forceOpen: !0,
                                    delayMS: 200,
                                });
                        },
                        text: "Open Balance Widget Coachmark",
                    }),
                ],
            }),
            (0, r.jsxs)(O.E_, {
                label: "Balance Widget Pill",
                children: [
                    (0, r.jsx)(E.A4, {
                        balance: 150,
                        balanceWidgetMode: h.b.DEFAULT,
                    }),
                    (0, r.jsx)(E.A4, {
                        balance: 150,
                        balanceWidgetMode: h.b.HIGHLIGHTED,
                    }),
                    (0, r.jsx)(E.A4, {
                        balance: 150,
                        balanceWidgetMode: h.b.SELECTED,
                    }),
                    (0, r.jsx)(E.A4, {
                        balance: 0,
                        balanceWidgetMode: h.b.DEFAULT,
                        showNotificationBadge: !0,
                    }),
                    (0, r.jsx)(E.A4, {
                        balance: null,
                        balanceWidgetMode: h.b.DEFAULT,
                    }),
                ],
            }),
            (0, r.jsxs)(O.E_, {
                label: "Balance Widget Pill Interactive (click to change mode)",
                direction: "vertical",
                children: [
                    (0, r.jsx)(o.Text, {
                        variant: "text-md/normal",
                        style: { marginBottom: "4px" },
                        children: "Enter a number and click Set Balance to see the balance widget pill update:",
                    }),
                    (0, r.jsx)(o.FiK, {
                        className: T.numberInput,
                        value: t,
                        onChange: (e) => n(e),
                    }),
                    (0, r.jsx)(a.z, {
                        onClick: () => p(t),
                        text: "Set Balance",
                    }),
                    (0, r.jsx)("div", {
                        className: T.interactivePillContainer,
                        children: (0, r.jsx)(E.A4, {
                            balance: _,
                            balanceWidgetMode: S,
                            onClick: () => N(),
                        }),
                    }),
                    (0, r.jsx)(o.Text, {
                        variant: "text-md/normal",
                        style: { marginBottom: "4px" },
                        children:
                            "Enter a number (loading time in milliseconds) and click Simulate Loading State to see the balance widget pill update:",
                    }),
                    (0, r.jsx)(o.FiK, {
                        className: T.numberInput,
                        value: b,
                        onChange: (e) => y(e),
                    }),
                    (0, r.jsx)(a.z, {
                        onClick: () => {
                            p(null),
                                setTimeout(() => {
                                    p(t);
                                }, b);
                        },
                        text: "Simulate Loading State",
                    }),
                    (0, r.jsx)("div", {
                        className: T.interactivePillContainer,
                        children: (0, r.jsx)(E.A4, {
                            balance: _,
                            balanceWidgetMode: S,
                            onClick: () => N(),
                        }),
                    }),
                ],
            }),
            (0, r.jsx)(O.E_, {
                label: "Balance Widget Card",
                children: (0, r.jsx)(m.L, {
                    ctaText: I.intl.string(I.t["H57f4+"]),
                    linkText: I.intl.string(I.t["7f4H7O"]),
                    ctaOnClick: v.dG4,
                }),
            }),
        ],
    });
}
function N() {
    let [e, t] = i.useState("1144308439720394944");
    return (0, r.jsxs)(O.$0, {
        children: [
            (0, r.jsx)(o.X6q, {
                variant: "heading-xl/semibold",
                children: "Orb Checkout Components",
            }),
            (0, r.jsxs)(O.E_, {
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
                    (0, r.jsx)(a.z, {
                        onClick: () => {
                            (0, b.qA)({
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
function R() {
    let { resetOnboardingExperience: e } = (0, _.Z)();
    return (0, r.jsxs)(O.$0, {
        children: [
            (0, r.jsx)(o.X6q, {
                variant: "heading-xl/semibold",
                children: "Onboarding Components",
            }),
            (0, r.jsxs)(O.E_, {
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
                    (0, r.jsx)(a.z, {
                        onClick: () => e(),
                        text: "Reset Announcement Modal State",
                    }),
                ],
            }),
            (0, r.jsx)(O.E_, {
                label: "Balance Widget Coachmark",
                children: (0, r.jsx)(y.E, {}),
            }),
        ],
    });
}
