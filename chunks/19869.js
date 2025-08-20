n.d(t, { O: () => w }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(693789),
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
function S(e, t, n) {
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
function A(e) {
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
                S(e, t, n[t]);
            });
    }
    return e;
}
function C(e, t) {
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
function N(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : C(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function R(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = P(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function P(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function w() {
    let { enabled: e } = (0, p.WX)({ location: "revenue_storybook" });
    return (0, r.jsxs)("div", {
        children: [e && (0, r.jsx)(L, {}), (0, r.jsx)(x, {}), (0, r.jsx)(j, {})],
    });
}
let D = 150;
function x() {
    let { openIntroToOrbsClaimedCoachmark: e } = (0, f.l)({ location: "VirtualCurrencyComponents" }),
        [t, n] = i.useState(D),
        [_, p] = i.useState(D),
        [b, y] = i.useState(500),
        [S, A] = i.useState(h.b.DEFAULT),
        C = () => {
            switch (S) {
                case h.b.DEFAULT:
                    A(h.b.HIGHLIGHTED);
                    break;
                case h.b.HIGHLIGHTED:
                    A(h.b.SELECTED);
                    break;
                case h.b.SELECTED:
                    A(h.b.DEFAULT);
            }
        },
        { analyticsLocations: N } = (0, c.ZP)(l.Z.PAYMENT_FLOW_TEST_PAGE);
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
                    (0, r.jsx)(a.zx, {
                        onClick: () => {
                            (0, s.xf)(),
                                (0, d.s1)().location.pathname.includes(v.Z5c.COLLECTIBLES_SHOP) ||
                                    (0, u.mK)({
                                        openInLayer: !1,
                                        analyticsLocations: N,
                                        analyticsSource: l.Z.REVENUE_STORYBOOK_TEST_PAGE,
                                    }),
                                e({
                                    forceOpen: !0,
                                    delayMS: 200,
                                });
                        },
                        children: "Open Balance Widget Coachmark",
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
                    (0, r.jsx)(a.zx, {
                        onClick: () => p(t),
                        children: "Set Balance",
                    }),
                    (0, r.jsx)("div", {
                        className: T.interactivePillContainer,
                        children: (0, r.jsx)(E.A4, {
                            balance: _,
                            balanceWidgetMode: S,
                            onClick: () => C(),
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
                    (0, r.jsx)(a.zx, {
                        onClick: () => {
                            p(null),
                                setTimeout(() => {
                                    p(t);
                                }, b);
                        },
                        children: "Simulate Loading State",
                    }),
                    (0, r.jsx)("div", {
                        className: T.interactivePillContainer,
                        children: (0, r.jsx)(E.A4, {
                            balance: _,
                            balanceWidgetMode: S,
                            onClick: () => C(),
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
function L() {
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
                    (0, r.jsx)(a.zx, {
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
                        children: "Open Orb Checkout Integrated with Payment Modal",
                    }),
                ],
            }),
        ],
    });
}
function j() {
    let e = () => {
            (0, o.ZDy)(async () => {
                let { AnnouncementModal: e } = await n.e("86653").then(n.bind(n, 993318));
                return (t) => {
                    var { onClose: n } = t,
                        i = R(t, ["onClose"]);
                    return (0, r.jsx)(
                        e,
                        N(A({}, i), {
                            onClose: n,
                            ctaOnClick: n,
                        }),
                    );
                };
            });
        },
        { resetOnboardingAnnouncementModal: t } = (0, _.Z)();
    return (0, r.jsxs)(O.$0, {
        children: [
            (0, r.jsx)(o.X6q, {
                variant: "heading-xl/semibold",
                children: "Onboarding Components",
            }),
            (0, r.jsx)(O.E_, {
                label: "Announcement Modal",
                children: (0, r.jsx)(a.zx, {
                    onClick: e,
                    children: "Open Announcement Modal",
                }),
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
                    (0, r.jsx)(a.zx, {
                        onClick: () => t(),
                        children: "Reset Announcement Modal State",
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
