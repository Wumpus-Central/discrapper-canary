a.d(t, { Z: () => y }), a(388685);
var n = a(951288),
    r = a(647438),
    l = a(120356),
    i = a.n(l),
    s = a(544891),
    o = a(481060),
    c = a(259580),
    d = a(55935),
    u = a(709054),
    m = a(246992),
    x = a(923576),
    h = a(981631),
    p = a(362786),
    v = a(474936),
    b = a(711322),
    f = a(855091);
let g = {
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
    j = {
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
    var t, a, l, p, y, C, N;
    let { subscription: T, onUpdated: O } = e,
        [E, S] = r.useState(!1),
        [P, I] = r.useState(!1),
        [w, R] = r.useState(!1),
        [k, Z] = r.useState(!1),
        [A, D] = r.useState(null),
        L = (e) => ((null == e && (e = T.status), e in g) ? g[e] : "Unknown status ".concat(e)),
        M = (e) => {
            let t = new Date(e);
            return u.default.fromTimestamp(t.getTime());
        },
        U = async (e) => {
            let { status: t = T.status, premiumStreakStart: a, endedAt: n } = e,
                r = (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var a = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(a);
                        "function" == typeof Object.getOwnPropertySymbols &&
                            (n = n.concat(
                                Object.getOwnPropertySymbols(a).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(a, e).enumerable;
                                }),
                            )),
                            n.forEach(function (t) {
                                var n;
                                (n = a[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: n,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0,
                                          })
                                        : (e[t] = n);
                            });
                    }
                    return e;
                })(
                    { subscription_status: t },
                    null != a ? { premium_streak_started_at: M(a) } : null,
                    null != n ? { ended_at: M(n) } : null,
                );
            await s.tn.patch({
                url: "/debug/subscriptions/".concat(T.id),
                body: r,
                rejectWithError: !1,
            }),
                O();
        },
        F = async () => {
            try {
                await s.tn.post({
                    url: "/debug/subscriptions/".concat(T.id, "/transition"),
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
        B = (null == (t = v.GP[T.planIdFromItems]) ? void 0 : t.premiumType) === v.p9.TIER_0,
        z = null == (a = T.metadata) ? void 0 : a.ended_at,
        G = null != z ? new Date(z).toISOString().substring(0, 10) : "",
        V = T.hasActiveTrial,
        H = (null == (l = T.metadata) ? void 0 : l.active_discount_id) != null;
    return (0, n.jsxs)("div", {
        className: i()(b.card, B ? b.gradientWrapperTier0 : b.gradientWrapperTier2),
        children: [
            V &&
                (0, n.jsx)(o.P3F, {
                    className: f.badge,
                    children: (0, n.jsx)(o.Text, {
                        variant: "eyebrow",
                        color: "always-white",
                        children: "Has Trial",
                    }),
                }),
            H &&
                (0, n.jsx)(o.P3F, {
                    className: f.badge,
                    children: (0, n.jsx)(o.Text, {
                        variant: "eyebrow",
                        color: "always-white",
                        children: "Has Active Discount",
                    }),
                }),
            (0, n.jsxs)("div", {
                className: f.subscriptionTextContainer,
                children: [
                    (0, n.jsxs)(o.Text, {
                        variant: "text-md/normal",
                        children: [
                            "Type: ",
                            (() => {
                                let e = T.planIdFromItems;
                                return null == e
                                    ? "No plan id"
                                    : e in v.GP
                                      ? v.GP[e].name
                                      : "Unknown plan id ".concat(e);
                            })(),
                            " ",
                        ],
                    }),
                    (0, n.jsxs)(o.Text, {
                        variant: "text-md/normal",
                        children: ["ID: ", T.id, " "],
                    }),
                    T.status !== h.O0b.ACTIVE &&
                        (0, n.jsxs)(o.Text, {
                            variant: "text-md/normal",
                            children: [
                                "Dates: ",
                                (0, d.vc)(T.createdAt, "LL"),
                                " - ",
                                (0, d.vc)(T.currentPeriodEnd, "LL"),
                            ],
                        }),
                    (0, n.jsxs)(o.Text, {
                        variant: "text-md/normal",
                        children: ["Status: ", L()],
                    }),
                    T.status === h.O0b.PAUSED &&
                        (0, n.jsxs)(n.Fragment, {
                            children: [
                                (0, n.jsxs)(o.Text, {
                                    variant: "text-md/normal",
                                    children: [
                                        "Pause Reason: ",
                                        T.pauseReason in j
                                            ? j[T.pauseReason]
                                            : "Unknown pause reason ".concat(T.pauseReason),
                                    ],
                                }),
                                null != T.pauseEndsAt &&
                                    (0, n.jsxs)(o.Text, {
                                        variant: "text-md/normal",
                                        children: ["Pause Ends At: ", (0, d.vc)(T.pauseEndsAt, "LL")],
                                    }),
                            ],
                        }),
                ],
            }),
            V &&
                (0, n.jsxs)("div", {
                    className: f.collapsablePane,
                    children: [
                        (0, n.jsxs)(o.P3F, {
                            onClick: () => {
                                R(!w);
                            },
                            className: f.collapsablePaneHeader,
                            children: [
                                (0, n.jsx)("div", {
                                    children: (0, n.jsx)(o.Text, {
                                        variant: "text-md/bold",
                                        children: "Trial Info",
                                    }),
                                }),
                                (0, n.jsx)(c.Z, { direction: w ? c.Z.Directions.UP : c.Z.Directions.DOWN }),
                            ],
                        }),
                        w &&
                            (0, n.jsxs)("ul", {
                                className: f.collapsiblePaneList,
                                children: [
                                    (0, n.jsxs)("li", {
                                        children: [
                                            (0, n.jsx)(o.Text, {
                                                variant: "text-md/bold",
                                                children: "trial_id",
                                            }),
                                            (0, n.jsx)(o.Text, {
                                                variant: "text-sm/normal",
                                                children: T.trialId,
                                            }),
                                        ],
                                    }),
                                    (0, n.jsxs)("li", {
                                        children: [
                                            (0, n.jsx)(o.Text, {
                                                variant: "text-md/bold",
                                                children: "trial_ends_at",
                                            }),
                                            (0, n.jsx)(o.Text, {
                                                variant: "text-sm/normal",
                                                children:
                                                    null != T.trialEndsAt ? (0, d.vc)(T.trialEndsAt, "LL") : "N/A",
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                    ],
                }),
            H &&
                (0, n.jsxs)("div", {
                    className: f.collapsablePane,
                    children: [
                        (0, n.jsxs)(o.P3F, {
                            onClick: () => {
                                Z(!k);
                            },
                            className: f.collapsablePaneHeader,
                            children: [
                                (0, n.jsx)("div", {
                                    children: (0, n.jsx)(o.Text, {
                                        variant: "text-md/bold",
                                        children: "Active Discount Info",
                                    }),
                                }),
                                (0, n.jsx)(c.Z, { direction: k ? c.Z.Directions.UP : c.Z.Directions.DOWN }),
                            ],
                        }),
                        k &&
                            (0, n.jsxs)("ul", {
                                className: f.collapsiblePaneList,
                                children: [
                                    (0, n.jsxs)("li", {
                                        children: [
                                            (0, n.jsx)(o.Text, {
                                                variant: "text-md/bold",
                                                children: "active_discount_id",
                                            }),
                                            (0, n.jsx)(o.Text, {
                                                variant: "text-sm/normal",
                                                children: null == (p = T.metadata) ? void 0 : p.active_discount_id,
                                            }),
                                        ],
                                    }),
                                    (0, n.jsxs)("li", {
                                        children: [
                                            (0, n.jsx)(o.Text, {
                                                variant: "text-md/bold",
                                                children: "active_discount_expires_at",
                                            }),
                                            (0, n.jsx)(o.Text, {
                                                variant: "text-sm/normal",
                                                children:
                                                    (null == (y = T.metadata)
                                                        ? void 0
                                                        : y.active_discount_expires_at) != null
                                                        ? (0, d.vc)(
                                                              new Date(
                                                                  null == (C = T.metadata)
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
            null != T.metadata &&
                (0, n.jsxs)("div", {
                    className: f.collapsablePane,
                    children: [
                        (0, n.jsxs)(o.P3F, {
                            onClick: () => {
                                S(!E);
                            },
                            className: f.collapsablePaneHeader,
                            children: [
                                (0, n.jsx)("div", {
                                    children: (0, n.jsx)(o.Text, {
                                        variant: "text-md/bold",
                                        children: "Metadata",
                                    }),
                                }),
                                (0, n.jsx)(c.Z, { direction: E ? c.Z.Directions.UP : c.Z.Directions.DOWN }),
                            ],
                        }),
                        E &&
                            (0, n.jsx)("ul", {
                                className: f.collapsiblePaneList,
                                children: Object.entries(T.metadata).map((e) => {
                                    let [t, a] = e;
                                    return (0, n.jsxs)(
                                        "li",
                                        {
                                            children: [
                                                (0, n.jsx)(o.Text, {
                                                    variant: "text-md/bold",
                                                    children: t,
                                                }),
                                                (0, n.jsx)(o.Text, {
                                                    variant: "text-sm/normal",
                                                    children: a,
                                                }),
                                            ],
                                        },
                                        t,
                                    );
                                }),
                            }),
                    ],
                }),
            (0, n.jsxs)("div", {
                className: f.collapsablePane,
                children: [
                    (0, n.jsxs)(o.P3F, {
                        onClick: () => {
                            I(!P);
                        },
                        className: f.collapsablePaneHeader,
                        children: [
                            (0, n.jsx)("div", {
                                children: (0, n.jsx)(o.Text, {
                                    variant: "text-md/bold",
                                    children: "Modifications",
                                }),
                            }),
                            (0, n.jsx)(c.Z, { direction: P ? c.Z.Directions.UP : c.Z.Directions.DOWN }),
                        ],
                    }),
                    P &&
                        (0, n.jsxs)(n.Fragment, {
                            children: [
                                (0, n.jsx)(o.hjN, {
                                    title: "Status",
                                    tag: o.RB0.H3,
                                    className: f.formSection,
                                    children: (0, n.jsx)(o.PhF, {
                                        serialize: (e) => L(e),
                                        isSelected: (e) => e === T.status,
                                        options: _,
                                        select: (e) => U({ status: e }),
                                        popoutLayerContext: m.O$,
                                    }),
                                }),
                                (0, n.jsxs)(o.hjN, {
                                    title: "Renew",
                                    tag: o.RB0.H3,
                                    className: f.formSection,
                                    children: [
                                        (0, n.jsx)(o.zxk, {
                                            variant: "primary",
                                            size: "sm",
                                            text: "Renew Subscription",
                                            onClick: (e) => F(),
                                        }),
                                        null !== A &&
                                            (0, n.jsx)(o.kzN, {
                                                className: f.error,
                                                onDismiss: () => D(null),
                                                children: A,
                                            }),
                                    ],
                                }),
                                (0, n.jsxs)(o.hjN, {
                                    title: "Premium Streak Start Date",
                                    tag: o.RB0.H3,
                                    className: f.formSection,
                                    children: [
                                        (0, n.jsx)("input", {
                                            type: "date",
                                            value:
                                                null == (N = T.premiumSince)
                                                    ? void 0
                                                    : N.toISOString().substring(0, 10),
                                            onChange: (e) => U({ premiumStreakStart: e.target.value }),
                                            style: { marginBottom: "8px" },
                                        }),
                                        (0, n.jsx)(x.Z, {}),
                                    ],
                                }),
                                (0, n.jsx)(o.hjN, {
                                    title: "Metadata Ended At Date",
                                    tag: o.RB0.H3,
                                    className: f.formSection,
                                    children: (0, n.jsx)("input", {
                                        type: "date",
                                        value: G,
                                        onChange: (e) => U({ endedAt: e.target.value }),
                                    }),
                                }),
                            ],
                        }),
                ],
            }),
        ],
    });
}
