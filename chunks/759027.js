n.d(t, { Z: () => y }), n(388685);
var a = n(951288),
    r = n(647438),
    l = n(120356),
    i = n.n(l),
    s = n(544891),
    o = n(481060),
    c = n(259580),
    d = n(55935),
    u = n(709054),
    m = n(246992),
    x = n(923576),
    h = n(981631),
    p = n(362786),
    f = n(474936),
    v = n(711322),
    b = n(855091);
let j = {
        [h.O0b.UNPAID]: "Unpaid",
        [h.O0b.ACTIVE]: "Active",
        [h.O0b.PAST_DUE]: "Past Due",
        [h.O0b.CANCELED]: "Canceled",
        [h.O0b.ENDED]: "Ended",
        [h.O0b.ACCOUNT_HOLD]: "Account Hold",
        [h.O0b.BILLING_RETRY]: "Billing Retry",
        [h.O0b.PAUSED]: "Paused",
        [h.O0b.PAUSE_PENDING]: "Pause Pending",
    },
    g = {
        [p.Id.UNKNOWN]: "Unknown",
        [p.Id.ADMIN]: "Admin",
        [p.Id.USER]: "User",
        [p.Id.FRACTIONAL_PREMIUM]: "Fractional Premium",
        [p.Id.DEFERRED_START]: "Deferred Start",
    },
    _ = [
        {
            label: "Unpaid",
            value: h.O0b.UNPAID,
        },
        {
            label: "Active",
            value: h.O0b.ACTIVE,
        },
        {
            label: "Past Due",
            value: h.O0b.PAST_DUE,
        },
        {
            label: "Canceled",
            value: h.O0b.CANCELED,
        },
        {
            label: "Ended",
            value: h.O0b.ENDED,
        },
        {
            label: "Account Hold",
            value: h.O0b.ACCOUNT_HOLD,
        },
        {
            label: "Billing Retry",
            value: h.O0b.BILLING_RETRY,
        },
        {
            label: "Paused",
            value: h.O0b.PAUSED,
        },
        {
            label: "Pause Pending",
            value: h.O0b.PAUSE_PENDING,
        },
    ];
function y(e) {
    var t, n, l, p, y, C, N;
    let { subscription: E, onUpdated: O } = e,
        [T, S] = r.useState(!1),
        [P, w] = r.useState(!1),
        [k, I] = r.useState(!1),
        [R, Z] = r.useState(!1),
        [A, D] = r.useState(null),
        L = (e) => ((null == e && (e = E.status), e in j) ? j[e] : "Unknown status ".concat(e)),
        M = (e) => {
            let t = new Date(e);
            return u.default.fromTimestamp(t.getTime());
        },
        F = async (e) => {
            let { status: t = E.status, premiumStreakStart: n, endedAt: a } = e,
                r = (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            a = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols &&
                            (a = a.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                }),
                            )),
                            a.forEach(function (t) {
                                var a;
                                (a = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: a,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0,
                                          })
                                        : (e[t] = a);
                            });
                    }
                    return e;
                })(
                    { subscription_status: t },
                    null != n ? { premium_streak_started_at: M(n) } : null,
                    null != a ? { ended_at: M(a) } : null,
                );
            await s.tn.patch({
                url: "/debug/subscriptions/".concat(E.id),
                body: r,
                rejectWithError: !1,
            }),
                O();
        },
        U = async () => {
            try {
                await s.tn.post({
                    url: "/debug/subscriptions/".concat(E.id, "/transition"),
                    body: {
                        target_datetime: new Date().toISOString(),
                        payment_type: 0,
                        transition: 2,
                        send_reminder_email: !1,
                    },
                    rejectWithError: !1,
                });
            } catch (e) {
                D(e.body.message);
            }
            O();
        },
        z = (null == (t = f.GP[E.planIdFromItems]) ? void 0 : t.premiumType) === f.p9.TIER_0,
        B = null == (n = E.metadata) ? void 0 : n.ended_at,
        G = null != B ? new Date(B).toISOString().substring(0, 10) : "",
        V = E.hasActiveTrial,
        H = (null == (l = E.metadata) ? void 0 : l.active_discount_id) != null;
    return (0, a.jsxs)("div", {
        className: i()(v.card, z ? v.gradientWrapperTier0 : v.gradientWrapperTier2),
        children: [
            V &&
                (0, a.jsx)(o.P3F, {
                    className: b.badge,
                    children: (0, a.jsx)(o.Text, {
                        variant: "eyebrow",
                        color: "always-white",
                        children: "Has Trial",
                    }),
                }),
            H &&
                (0, a.jsx)(o.P3F, {
                    className: b.badge,
                    children: (0, a.jsx)(o.Text, {
                        variant: "eyebrow",
                        color: "always-white",
                        children: "Has Active Discount",
                    }),
                }),
            (0, a.jsxs)("div", {
                className: b.subscriptionTextContainer,
                children: [
                    (0, a.jsxs)(o.Text, {
                        variant: "text-md/normal",
                        children: [
                            "Type: ",
                            (() => {
                                let e = E.planIdFromItems;
                                return null == e
                                    ? "No plan id"
                                    : e in f.GP
                                      ? f.GP[e].name
                                      : "Unknown plan id ".concat(e);
                            })(),
                            " ",
                        ],
                    }),
                    (0, a.jsxs)(o.Text, {
                        variant: "text-md/normal",
                        children: ["ID: ", E.id, " "],
                    }),
                    E.status !== h.O0b.ACTIVE &&
                        (0, a.jsxs)(o.Text, {
                            variant: "text-md/normal",
                            children: [
                                "Dates: ",
                                (0, d.vc)(E.createdAt, "LL"),
                                " - ",
                                (0, d.vc)(E.currentPeriodEnd, "LL"),
                            ],
                        }),
                    (0, a.jsxs)(o.Text, {
                        variant: "text-md/normal",
                        children: ["Status: ", L()],
                    }),
                    E.status === h.O0b.PAUSED &&
                        (0, a.jsxs)(a.Fragment, {
                            children: [
                                (0, a.jsxs)(o.Text, {
                                    variant: "text-md/normal",
                                    children: [
                                        "Pause Reason: ",
                                        E.pauseReason in g
                                            ? g[E.pauseReason]
                                            : "Unknown pause reason ".concat(E.pauseReason),
                                    ],
                                }),
                                null != E.pauseEndsAt &&
                                    (0, a.jsxs)(o.Text, {
                                        variant: "text-md/normal",
                                        children: ["Pause Ends At: ", (0, d.vc)(E.pauseEndsAt, "LL")],
                                    }),
                            ],
                        }),
                ],
            }),
            V &&
                (0, a.jsxs)("div", {
                    className: b.collapsablePane,
                    children: [
                        (0, a.jsxs)(o.P3F, {
                            onClick: () => {
                                I(!k);
                            },
                            className: b.collapsablePaneHeader,
                            children: [
                                (0, a.jsx)("div", {
                                    children: (0, a.jsx)(o.Text, {
                                        variant: "text-md/bold",
                                        children: "Trial Info",
                                    }),
                                }),
                                (0, a.jsx)(c.Z, { direction: k ? c.Z.Directions.UP : c.Z.Directions.DOWN }),
                            ],
                        }),
                        k &&
                            (0, a.jsxs)("ul", {
                                className: b.collapsiblePaneList,
                                children: [
                                    (0, a.jsxs)("li", {
                                        children: [
                                            (0, a.jsx)(o.Text, {
                                                variant: "text-md/bold",
                                                children: "trial_id",
                                            }),
                                            (0, a.jsx)(o.Text, {
                                                variant: "text-sm/normal",
                                                children: E.trialId,
                                            }),
                                        ],
                                    }),
                                    (0, a.jsxs)("li", {
                                        children: [
                                            (0, a.jsx)(o.Text, {
                                                variant: "text-md/bold",
                                                children: "trial_ends_at",
                                            }),
                                            (0, a.jsx)(o.Text, {
                                                variant: "text-sm/normal",
                                                children:
                                                    null != E.trialEndsAt ? (0, d.vc)(E.trialEndsAt, "LL") : "N/A",
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                    ],
                }),
            H &&
                (0, a.jsxs)("div", {
                    className: b.collapsablePane,
                    children: [
                        (0, a.jsxs)(o.P3F, {
                            onClick: () => {
                                Z(!R);
                            },
                            className: b.collapsablePaneHeader,
                            children: [
                                (0, a.jsx)("div", {
                                    children: (0, a.jsx)(o.Text, {
                                        variant: "text-md/bold",
                                        children: "Active Discount Info",
                                    }),
                                }),
                                (0, a.jsx)(c.Z, { direction: R ? c.Z.Directions.UP : c.Z.Directions.DOWN }),
                            ],
                        }),
                        R &&
                            (0, a.jsxs)("ul", {
                                className: b.collapsiblePaneList,
                                children: [
                                    (0, a.jsxs)("li", {
                                        children: [
                                            (0, a.jsx)(o.Text, {
                                                variant: "text-md/bold",
                                                children: "active_discount_id",
                                            }),
                                            (0, a.jsx)(o.Text, {
                                                variant: "text-sm/normal",
                                                children: null == (p = E.metadata) ? void 0 : p.active_discount_id,
                                            }),
                                        ],
                                    }),
                                    (0, a.jsxs)("li", {
                                        children: [
                                            (0, a.jsx)(o.Text, {
                                                variant: "text-md/bold",
                                                children: "active_discount_expires_at",
                                            }),
                                            (0, a.jsx)(o.Text, {
                                                variant: "text-sm/normal",
                                                children:
                                                    (null == (y = E.metadata)
                                                        ? void 0
                                                        : y.active_discount_expires_at) != null
                                                        ? (0, d.vc)(
                                                              new Date(
                                                                  null == (C = E.metadata)
                                                                      ? void 0
                                                                      : C.active_discount_expires_at,
                                                              ),
                                                              "LL",
                                                          )
                                                        : "N/A",
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                    ],
                }),
            null != E.metadata &&
                (0, a.jsxs)("div", {
                    className: b.collapsablePane,
                    children: [
                        (0, a.jsxs)(o.P3F, {
                            onClick: () => {
                                S(!T);
                            },
                            className: b.collapsablePaneHeader,
                            children: [
                                (0, a.jsx)("div", {
                                    children: (0, a.jsx)(o.Text, {
                                        variant: "text-md/bold",
                                        children: "Metadata",
                                    }),
                                }),
                                (0, a.jsx)(c.Z, { direction: T ? c.Z.Directions.UP : c.Z.Directions.DOWN }),
                            ],
                        }),
                        T &&
                            (0, a.jsx)("ul", {
                                className: b.collapsiblePaneList,
                                children: Object.entries(E.metadata).map((e) => {
                                    let [t, n] = e;
                                    return (0, a.jsxs)(
                                        "li",
                                        {
                                            children: [
                                                (0, a.jsx)(o.Text, {
                                                    variant: "text-md/bold",
                                                    children: t,
                                                }),
                                                (0, a.jsx)(o.Text, {
                                                    variant: "text-sm/normal",
                                                    children: n,
                                                }),
                                            ],
                                        },
                                        t,
                                    );
                                }),
                            }),
                    ],
                }),
            (0, a.jsxs)("div", {
                className: b.collapsablePane,
                children: [
                    (0, a.jsxs)(o.P3F, {
                        onClick: () => {
                            w(!P);
                        },
                        className: b.collapsablePaneHeader,
                        children: [
                            (0, a.jsx)("div", {
                                children: (0, a.jsx)(o.Text, {
                                    variant: "text-md/bold",
                                    children: "Modifications",
                                }),
                            }),
                            (0, a.jsx)(c.Z, { direction: P ? c.Z.Directions.UP : c.Z.Directions.DOWN }),
                        ],
                    }),
                    P &&
                        (0, a.jsxs)(a.Fragment, {
                            children: [
                                (0, a.jsx)(o.hjN, {
                                    title: "Status",
                                    tag: o.RB0.H3,
                                    className: b.formSection,
                                    children: (0, a.jsx)(o.PhF, {
                                        serialize: (e) => L(e),
                                        isSelected: (e) => e === E.status,
                                        options: _,
                                        select: (e) => F({ status: e }),
                                        popoutLayerContext: m.O$,
                                    }),
                                }),
                                (0, a.jsxs)(o.hjN, {
                                    title: "Renew",
                                    tag: o.RB0.H3,
                                    className: b.formSection,
                                    children: [
                                        (0, a.jsx)(o.zxk, {
                                            variant: "primary",
                                            size: "sm",
                                            text: "Renew Subscription",
                                            onClick: (e) => U(),
                                        }),
                                        null !== A &&
                                            (0, a.jsx)(o.kzN, {
                                                className: b.error,
                                                onDismiss: () => D(null),
                                                children: A,
                                            }),
                                    ],
                                }),
                                (0, a.jsxs)(o.hjN, {
                                    title: "Premium Streak Start Date",
                                    tag: o.RB0.H3,
                                    className: b.formSection,
                                    children: [
                                        (0, a.jsx)("input", {
                                            type: "date",
                                            value:
                                                null == (N = E.premiumSince)
                                                    ? void 0
                                                    : N.toISOString().substring(0, 10),
                                            onChange: (e) => F({ premiumStreakStart: e.target.value }),
                                            style: { marginBottom: "8px" },
                                        }),
                                        (0, a.jsx)(x.Z, {}),
                                    ],
                                }),
                                (0, a.jsx)(o.hjN, {
                                    title: "Metadata Ended At Date",
                                    tag: o.RB0.H3,
                                    className: b.formSection,
                                    children: (0, a.jsx)("input", {
                                        type: "date",
                                        value: G,
                                        onChange: (e) => F({ endedAt: e.target.value }),
                                    }),
                                }),
                            ],
                        }),
                ],
            }),
        ],
    });
}
