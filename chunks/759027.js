n.d(t, { Z: () => S }), n(388685), n(539854);
var a = n(951288),
    i = n(647438),
    l = n(120356),
    r = n.n(l),
    s = n(913527),
    o = n.n(s),
    c = n(544891),
    d = n(481060),
    u = n(259580),
    m = n(55935),
    p = n(709054),
    h = n(246992),
    x = n(923576),
    g = n(981631),
    f = n(362786),
    b = n(474936),
    v = n(711322),
    j = n(855091);
let _ = {
        [g.O0b.UNPAID]: "Unpaid",
        [g.O0b.ACTIVE]: "Active",
        [g.O0b.PAST_DUE]: "Past Due",
        [g.O0b.CANCELED]: "Canceled",
        [g.O0b.ENDED]: "Ended",
        [g.O0b.ACCOUNT_HOLD]: "Account Hold",
        [g.O0b.BILLING_RETRY]: "Billing Retry",
        [g.O0b.PAUSED]: "Paused",
        [g.O0b.PAUSE_PENDING]: "Pause Pending",
    },
    y = {
        [f.Id.UNKNOWN]: "Unknown",
        [f.Id.ADMIN]: "Admin",
        [f.Id.USER]: "User",
        [f.Id.FRACTIONAL_PREMIUM]: "Fractional Premium",
        [f.Id.DEFERRED_START]: "Deferred Start",
    },
    C = [
        {
            label: "Unpaid",
            value: g.O0b.UNPAID,
        },
        {
            label: "Active",
            value: g.O0b.ACTIVE,
        },
        {
            label: "Past Due",
            value: g.O0b.PAST_DUE,
        },
        {
            label: "Canceled",
            value: g.O0b.CANCELED,
        },
        {
            label: "Ended",
            value: g.O0b.ENDED,
        },
        {
            label: "Account Hold",
            value: g.O0b.ACCOUNT_HOLD,
        },
        {
            label: "Billing Retry",
            value: g.O0b.BILLING_RETRY,
        },
        {
            label: "Paused",
            value: g.O0b.PAUSED,
        },
        {
            label: "Pause Pending",
            value: g.O0b.PAUSE_PENDING,
        },
    ];
function S(e) {
    var t, n, l, s, f, S, E;
    let { subscription: T, onUpdated: N } = e,
        [O, P] = i.useState(!1),
        [w, I] = i.useState(!1),
        [k, A] = i.useState(!1),
        [R, Z] = i.useState(!1),
        [D, L] = i.useState(null),
        M = (e) => ((null == e && (e = T.status), e in _) ? _[e] : "Unknown status ".concat(e)),
        U = (e) => {
            let t = new Date(e);
            return p.default.fromTimestamp(t.getTime());
        },
        F = async (e) => {
            let { status: t = T.status, premiumStreakStart: n, endedAt: a } = e,
                i = (function (e) {
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
                    null != n ? { premium_streak_started_at: U(n) } : null,
                    null != a ? { ended_at: U(a) } : null,
                );
            await c.tn.patch({
                url: "/debug/subscriptions/".concat(T.id),
                body: i,
                rejectWithError: !1,
            }),
                N();
        },
        B = async () => {
            try {
                await c.tn.post({
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
                L(e.body.message);
            }
            N();
        },
        G = (null == (t = b.GP[T.planIdFromItems]) ? void 0 : t.premiumType) === b.PremiumTypes.TIER_0,
        z = null == (n = T.metadata) ? void 0 : n.ended_at,
        H = null != z ? new Date(z).toISOString().substring(0, 10) : "",
        V = [
            {
                id: "id",
                label: "ID: ".concat(T.id),
            },
            {
                id: "status",
                label: "Status: ".concat(M()),
            },
        ],
        W = T.hasActiveTrial,
        K = (null == (l = T.metadata) ? void 0 : l.active_discount_id) != null;
    return (
        W &&
            V.push({
                id: "trial",
                label: "Has Trial",
            }),
        K &&
            V.push({
                id: "active-discount",
                label: "Has Active Discount",
            }),
        T.status !== g.O0b.ACTIVE &&
            V.push({
                id: "dates",
                label: "Dates: "
                    .concat((0, m.vc)(T.createdAt, "LL"), " - ")
                    .concat((0, m.vc)(T.currentPeriodEnd, "LL")),
            }),
        T.status === g.O0b.PAUSED &&
            V.push({
                id: "pause-reason",
                label: "Pause Reason: ".concat(
                    T.pauseReason in y ? y[T.pauseReason] : "Unknown pause reason ".concat(T.pauseReason),
                ),
            }),
        (0, a.jsx)("div", {
            className: r()(v.card, G ? v.gradientWrapperTier0 : v.gradientWrapperTier2),
            children: (0, a.jsxs)(d.C3N, {
                label: "Type: ".concat(
                    (() => {
                        let e = T.planIdFromItems;
                        return null == e ? "No plan id" : e in b.GP ? b.GP[e].name : "Unknown plan id ".concat(e);
                    })(),
                ),
                className: j.fieldset,
                children: [
                    (0, a.jsx)(d.QSK, {
                        items: V,
                        label: "Tags",
                    }),
                    W &&
                        (0, a.jsxs)("div", {
                            className: j.collapsablePane,
                            children: [
                                (0, a.jsxs)(d.P3F, {
                                    onClick: () => {
                                        A(!k);
                                    },
                                    className: j.collapsablePaneHeader,
                                    children: [
                                        (0, a.jsx)("div", {
                                            children: (0, a.jsx)(d.Text, {
                                                variant: "text-md/bold",
                                                children: "Trial Info",
                                            }),
                                        }),
                                        (0, a.jsx)(u.Z, { direction: k ? u.Z.Directions.UP : u.Z.Directions.DOWN }),
                                    ],
                                }),
                                k &&
                                    (0, a.jsxs)("ul", {
                                        className: j.collapsiblePaneList,
                                        children: [
                                            (0, a.jsxs)("li", {
                                                children: [
                                                    (0, a.jsx)(d.Text, {
                                                        variant: "text-md/bold",
                                                        children: "trial_id",
                                                    }),
                                                    (0, a.jsx)(d.Text, {
                                                        variant: "text-sm/normal",
                                                        children: T.trialId,
                                                    }),
                                                ],
                                            }),
                                            (0, a.jsxs)("li", {
                                                children: [
                                                    (0, a.jsx)(d.Text, {
                                                        variant: "text-md/bold",
                                                        children: "trial_ends_at",
                                                    }),
                                                    (0, a.jsx)(d.Text, {
                                                        variant: "text-sm/normal",
                                                        children:
                                                            null != T.trialEndsAt
                                                                ? (0, m.vc)(T.trialEndsAt, "LL")
                                                                : "N/A",
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                            ],
                        }),
                    K &&
                        (0, a.jsxs)("div", {
                            className: j.collapsablePane,
                            children: [
                                (0, a.jsxs)(d.P3F, {
                                    onClick: () => {
                                        Z(!R);
                                    },
                                    className: j.collapsablePaneHeader,
                                    children: [
                                        (0, a.jsx)("div", {
                                            children: (0, a.jsx)(d.Text, {
                                                variant: "text-md/bold",
                                                children: "Active Discount Info",
                                            }),
                                        }),
                                        (0, a.jsx)(u.Z, { direction: R ? u.Z.Directions.UP : u.Z.Directions.DOWN }),
                                    ],
                                }),
                                R &&
                                    (0, a.jsxs)("ul", {
                                        className: j.collapsiblePaneList,
                                        children: [
                                            (0, a.jsxs)("li", {
                                                children: [
                                                    (0, a.jsx)(d.Text, {
                                                        variant: "text-md/bold",
                                                        children: "active_discount_id",
                                                    }),
                                                    (0, a.jsx)(d.Text, {
                                                        variant: "text-sm/normal",
                                                        children:
                                                            null == (s = T.metadata) ? void 0 : s.active_discount_id,
                                                    }),
                                                ],
                                            }),
                                            (0, a.jsxs)("li", {
                                                children: [
                                                    (0, a.jsx)(d.Text, {
                                                        variant: "text-md/bold",
                                                        children: "active_discount_expires_at",
                                                    }),
                                                    (0, a.jsx)(d.Text, {
                                                        variant: "text-sm/normal",
                                                        children:
                                                            (null == (f = T.metadata)
                                                                ? void 0
                                                                : f.active_discount_expires_at) != null
                                                                ? (0, m.vc)(
                                                                      new Date(
                                                                          null == (S = T.metadata)
                                                                              ? void 0
                                                                              : S.active_discount_expires_at,
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
                        (0, a.jsxs)("div", {
                            className: j.collapsablePane,
                            children: [
                                (0, a.jsxs)(d.P3F, {
                                    onClick: () => {
                                        P(!O);
                                    },
                                    className: j.collapsablePaneHeader,
                                    children: [
                                        (0, a.jsx)("div", {
                                            children: (0, a.jsx)(d.Text, {
                                                variant: "text-md/bold",
                                                children: "Metadata",
                                            }),
                                        }),
                                        (0, a.jsx)(u.Z, { direction: O ? u.Z.Directions.UP : u.Z.Directions.DOWN }),
                                    ],
                                }),
                                O &&
                                    (0, a.jsx)("ul", {
                                        className: j.collapsiblePaneList,
                                        children: Object.entries(T.metadata).map((e) => {
                                            let [t, n] = e;
                                            return (0, a.jsxs)(
                                                "li",
                                                {
                                                    children: [
                                                        (0, a.jsx)(d.Text, {
                                                            variant: "text-md/bold",
                                                            children: t,
                                                        }),
                                                        (0, a.jsx)(d.Text, {
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
                        className: j.collapsablePane,
                        children: [
                            (0, a.jsxs)(d.P3F, {
                                onClick: () => {
                                    I(!w);
                                },
                                className: j.collapsablePaneHeader,
                                children: [
                                    (0, a.jsx)("div", {
                                        children: (0, a.jsx)(d.Text, {
                                            variant: "text-md/bold",
                                            children: "Modifications",
                                        }),
                                    }),
                                    (0, a.jsx)(u.Z, { direction: w ? u.Z.Directions.UP : u.Z.Directions.DOWN }),
                                ],
                            }),
                            w &&
                                (0, a.jsxs)(d.Kqy, {
                                    gap: 24,
                                    children: [
                                        (0, a.jsx)(d.PhF, {
                                            label: "Status",
                                            serialize: (e) => M(e),
                                            isSelected: (e) => e === T.status,
                                            options: C,
                                            select: (e) => F({ status: e }),
                                            popoutLayerContext: h.O$,
                                        }),
                                        (0, a.jsxs)("div", {
                                            children: [
                                                (0, a.jsx)(d.Button, {
                                                    variant: "primary",
                                                    size: "sm",
                                                    text: "Renew Subscription",
                                                    onClick: (e) => B(),
                                                }),
                                                null !== D &&
                                                    (0, a.jsx)("div", {
                                                        className: j.error,
                                                        children: (0, a.jsx)(d.M14, {
                                                            type: "critical",
                                                            children: D,
                                                        }),
                                                    }),
                                            ],
                                        }),
                                        (0, a.jsxs)(d.Kqy, {
                                            gap: 16,
                                            children: [
                                                (0, a.jsx)(d.Wrb, {
                                                    label: "Premium Streak Start Date",
                                                    value: o()(
                                                        null == (E = T.premiumSince)
                                                            ? void 0
                                                            : E.toISOString().substring(0, 10),
                                                    ),
                                                    onSelect: (e) => F({ premiumStreakStart: e.toISOString() }),
                                                }),
                                                (0, a.jsx)(x.Z, {}),
                                            ],
                                        }),
                                        (0, a.jsx)(d.Wrb, {
                                            label: "Metadata Ended At Date",
                                            value: o()(H),
                                            onSelect: (e) => F({ endedAt: e.toISOString() }),
                                        }),
                                    ],
                                }),
                        ],
                    }),
                ],
            }),
        })
    );
}
