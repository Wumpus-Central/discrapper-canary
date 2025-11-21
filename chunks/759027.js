n.d(t, { Z: () => O }), n(388685), n(35282), n(539854);
var a = n(54381),
    l = n(473749),
    r = n(120356),
    i = n.n(r),
    s = n(913527),
    o = n.n(s),
    c = n(793030),
    d = n(544891),
    u = n(481060),
    m = n(259580),
    p = n(55935),
    h = n(709054),
    x = n(246992),
    g = n(923576),
    f = n(257665),
    b = n(981631),
    v = n(362786),
    j = n(474936),
    _ = n(711322),
    y = n(855091);
function C(e) {
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
}
let S = {
        [b.O0b.UNPAID]: "Unpaid",
        [b.O0b.ACTIVE]: "Active",
        [b.O0b.PAST_DUE]: "Past Due",
        [b.O0b.CANCELED]: "Canceled",
        [b.O0b.ENDED]: "Ended",
        [b.O0b.ACCOUNT_HOLD]: "Account Hold",
        [b.O0b.BILLING_RETRY]: "Billing Retry",
        [b.O0b.PAUSED]: "Paused",
        [b.O0b.PAUSE_PENDING]: "Pause Pending",
    },
    E = {
        [v.Id.UNKNOWN]: "Unknown",
        [v.Id.ADMIN]: "Admin",
        [v.Id.USER]: "User",
        [v.Id.FRACTIONAL_PREMIUM]: "Fractional Premium",
        [v.Id.DEFERRED_START]: "Deferred Start",
        [v.Id.USER_TEMPORARY_BAN]: "User Temp Ban",
    },
    N = [
        {
            label: "Unpaid",
            value: b.O0b.UNPAID,
        },
        {
            label: "Active",
            value: b.O0b.ACTIVE,
        },
        {
            label: "Past Due",
            value: b.O0b.PAST_DUE,
        },
        {
            label: "Canceled",
            value: b.O0b.CANCELED,
        },
        {
            label: "Ended",
            value: b.O0b.ENDED,
        },
        {
            label: "Account Hold",
            value: b.O0b.ACCOUNT_HOLD,
        },
        {
            label: "Billing Retry",
            value: b.O0b.BILLING_RETRY,
        },
        {
            label: "Paused",
            value: b.O0b.PAUSED,
        },
        {
            label: "Pause Pending",
            value: b.O0b.PAUSE_PENDING,
        },
    ];
function T(e) {
    let { subscription: t, onClose: n, onUpdated: r, transitionState: i } = e,
        [s, d] = l.useState(o()()),
        [m, p] = l.useState(o()().format("HH:mm")),
        [h, x] = l.useState(!1),
        [g, b] = l.useState(void 0),
        v = async () => {
            if (null == s) return void b("Please select a target date");
            let [e, a] = m.split(":").map(Number),
                l = s.clone().hours(e).minutes(a).seconds(0).milliseconds(0);
            x(!0), b(void 0);
            try {
                await f.vc(t.id, f.cN.TIME_TRAVEL, {
                    targetDate: l,
                    paymentType: f.F0.DEFAULT,
                    sendReminderEmail: !1,
                }),
                    r(),
                    n();
            } catch (e) {
                var i;
                b((null == (i = e.body) ? void 0 : i.message) || e.message || "Failed to time travel");
            } finally {
                x(!1);
            }
        };
    return (0, a.jsx)(c.Modal, {
        transitionState: i,
        onClose: () => (n(), Promise.resolve()),
        title: "Time Travel Subscription",
        size: "sm",
        actions: [
            {
                text: "Cancel",
                variant: "secondary",
                onClick: n,
            },
            {
                text: "Time Travel",
                variant: "primary",
                onClick: v,
                disabled: h || null == s,
            },
        ],
        children: (0, a.jsxs)(u.Kqy, {
            gap: 16,
            children: [
                (0, a.jsx)(u.Text, {
                    variant: "text-sm/normal",
                    color: "text-muted",
                    children:
                        "Select the target date and time to travel the subscription to. This will adjust the subscription period and trigger any necessary invoice operations.",
                }),
                (0, a.jsx)(u.Wrb, {
                    label: "Target Date",
                    value: s,
                    onSelect: d,
                }),
                (0, a.jsx)(u.C3N, {
                    label: "Target Time (HH:mm)",
                    children: (0, a.jsx)("input", {
                        type: "time",
                        value: m,
                        onChange: (e) => {
                            p(e.target.value);
                        },
                        className: y.timeInput,
                    }),
                }),
                (0, a.jsxs)(u.Kqy, {
                    gap: 8,
                    children: [
                        (0, a.jsx)(u.Text, {
                            variant: "text-xs/semibold",
                            color: "text-muted",
                            children: "Current Period",
                        }),
                        (0, a.jsxs)(u.Kqy, {
                            gap: 4,
                            children: [
                                (0, a.jsxs)(u.Text, {
                                    variant: "text-xs/normal",
                                    className: y.periodText,
                                    children: ["Start: ", o()(t.currentPeriodStart).format("YYYY-MM-DD HH:mm")],
                                }),
                                (0, a.jsxs)(u.Text, {
                                    variant: "text-xs/normal",
                                    className: y.periodText,
                                    children: ["End: ", o()(t.currentPeriodEnd).format("YYYY-MM-DD HH:mm")],
                                }),
                            ],
                        }),
                    ],
                }),
                null != g &&
                    (0, a.jsx)(u.M14, {
                        type: "critical",
                        children: g,
                    }),
            ],
        }),
    });
}
function O(e) {
    var t, n, r, s, c, v, O;
    let { subscription: P, onUpdated: I } = e,
        [w, k] = l.useState(!1),
        [A, R] = l.useState(!1),
        [Z, D] = l.useState(!1),
        [L, M] = l.useState(!1),
        [U, F] = l.useState(null),
        B = (e) => ((null == e && (e = P.status), e in S) ? S[e] : "Unknown status ".concat(e)),
        G = (e) => {
            let t = new Date(e);
            return h.default.fromTimestamp(t.getTime());
        },
        z = async (e) => {
            let { status: t = P.status, premiumStreakStart: n, endedAt: a } = e,
                l = C(
                    { subscription_status: t },
                    null != n ? { premium_streak_started_at: G(n) } : null,
                    null != a ? { ended_at: G(a) } : null,
                );
            await d.tn.patch({
                url: "/debug/subscriptions/".concat(P.id),
                body: l,
                rejectWithError: !1,
            }),
                I();
        },
        H = async () => {
            try {
                await f.vc(P.id, f.cN.RENEW, {
                    targetDate: o()(new Date()),
                    paymentType: f.F0.DEFAULT,
                    sendReminderEmail: !1,
                });
            } catch (t) {
                var e;
                F((null == (e = t.body) ? void 0 : e.message) || t.message || "Failed to renew subscription");
            }
            I();
        },
        V = (null == (t = j.GP[P.planIdFromItems]) ? void 0 : t.premiumType) === j.PremiumTypes.TIER_0,
        W = null == (n = P.metadata) ? void 0 : n.ended_at,
        K = null != W ? new Date(W).toISOString().substring(0, 10) : "",
        q = [
            {
                id: "id",
                label: "ID: ".concat(P.id),
            },
            {
                id: "status",
                label: "Status: ".concat(B()),
            },
        ],
        Y = P.hasActiveTrial,
        J = (null == (r = P.metadata) ? void 0 : r.active_discount_id) != null;
    return (
        Y &&
            q.push({
                id: "trial",
                label: "Has Trial",
            }),
        J &&
            q.push({
                id: "active-discount",
                label: "Has Active Discount",
            }),
        P.status !== b.O0b.ACTIVE &&
            q.push({
                id: "dates",
                label: "Dates: "
                    .concat((0, p.vc)(P.createdAt, "LL"), " - ")
                    .concat((0, p.vc)(P.currentPeriodEnd, "LL")),
            }),
        P.status === b.O0b.PAUSED &&
            q.push({
                id: "pause-reason",
                label: "Pause Reason: ".concat(
                    P.pauseReason in E ? E[P.pauseReason] : "Unknown pause reason ".concat(P.pauseReason),
                ),
            }),
        (0, a.jsx)("div", {
            className: i()(_.card, V ? _.gradientWrapperTier0 : _.gradientWrapperTier2),
            children: (0, a.jsxs)(u.C3N, {
                label: "Type: ".concat(
                    (() => {
                        let e = P.planIdFromItems;
                        return null == e ? "No plan id" : e in j.GP ? j.GP[e].name : "Unknown plan id ".concat(e);
                    })(),
                ),
                className: y.fieldset,
                children: [
                    (0, a.jsx)(u.QSK, {
                        items: q,
                        label: "Tags",
                    }),
                    Y &&
                        (0, a.jsxs)("div", {
                            className: y.collapsablePane,
                            children: [
                                (0, a.jsxs)(u.P3F, {
                                    onClick: () => {
                                        D(!Z);
                                    },
                                    className: y.collapsablePaneHeader,
                                    children: [
                                        (0, a.jsx)("div", {
                                            children: (0, a.jsx)(u.Text, {
                                                variant: "text-md/bold",
                                                children: "Trial Info",
                                            }),
                                        }),
                                        (0, a.jsx)(m.Z, { direction: Z ? m.Z.Directions.UP : m.Z.Directions.DOWN }),
                                    ],
                                }),
                                Z &&
                                    (0, a.jsxs)("ul", {
                                        className: y.collapsiblePaneList,
                                        children: [
                                            (0, a.jsxs)("li", {
                                                children: [
                                                    (0, a.jsx)(u.Text, {
                                                        variant: "text-md/bold",
                                                        children: "trial_id",
                                                    }),
                                                    (0, a.jsx)(u.Text, {
                                                        variant: "text-sm/normal",
                                                        children: P.trialId,
                                                    }),
                                                ],
                                            }),
                                            (0, a.jsxs)("li", {
                                                children: [
                                                    (0, a.jsx)(u.Text, {
                                                        variant: "text-md/bold",
                                                        children: "trial_ends_at",
                                                    }),
                                                    (0, a.jsx)(u.Text, {
                                                        variant: "text-sm/normal",
                                                        children:
                                                            null != P.trialEndsAt
                                                                ? (0, p.vc)(P.trialEndsAt, "LL")
                                                                : "N/A",
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                            ],
                        }),
                    J &&
                        (0, a.jsxs)("div", {
                            className: y.collapsablePane,
                            children: [
                                (0, a.jsxs)(u.P3F, {
                                    onClick: () => {
                                        M(!L);
                                    },
                                    className: y.collapsablePaneHeader,
                                    children: [
                                        (0, a.jsx)("div", {
                                            children: (0, a.jsx)(u.Text, {
                                                variant: "text-md/bold",
                                                children: "Active Discount Info",
                                            }),
                                        }),
                                        (0, a.jsx)(m.Z, { direction: L ? m.Z.Directions.UP : m.Z.Directions.DOWN }),
                                    ],
                                }),
                                L &&
                                    (0, a.jsxs)("ul", {
                                        className: y.collapsiblePaneList,
                                        children: [
                                            (0, a.jsxs)("li", {
                                                children: [
                                                    (0, a.jsx)(u.Text, {
                                                        variant: "text-md/bold",
                                                        children: "active_discount_id",
                                                    }),
                                                    (0, a.jsx)(u.Text, {
                                                        variant: "text-sm/normal",
                                                        children:
                                                            null == (s = P.metadata) ? void 0 : s.active_discount_id,
                                                    }),
                                                ],
                                            }),
                                            (0, a.jsxs)("li", {
                                                children: [
                                                    (0, a.jsx)(u.Text, {
                                                        variant: "text-md/bold",
                                                        children: "active_discount_expires_at",
                                                    }),
                                                    (0, a.jsx)(u.Text, {
                                                        variant: "text-sm/normal",
                                                        children:
                                                            (null == (c = P.metadata)
                                                                ? void 0
                                                                : c.active_discount_expires_at) != null
                                                                ? (0, p.vc)(
                                                                      new Date(
                                                                          null == (v = P.metadata)
                                                                              ? void 0
                                                                              : v.active_discount_expires_at,
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
                    null != P.metadata &&
                        (0, a.jsxs)("div", {
                            className: y.collapsablePane,
                            children: [
                                (0, a.jsxs)(u.P3F, {
                                    onClick: () => {
                                        k(!w);
                                    },
                                    className: y.collapsablePaneHeader,
                                    children: [
                                        (0, a.jsx)("div", {
                                            children: (0, a.jsx)(u.Text, {
                                                variant: "text-md/bold",
                                                children: "Metadata",
                                            }),
                                        }),
                                        (0, a.jsx)(m.Z, { direction: w ? m.Z.Directions.UP : m.Z.Directions.DOWN }),
                                    ],
                                }),
                                w &&
                                    (0, a.jsx)("ul", {
                                        className: y.collapsiblePaneList,
                                        children: Object.entries(P.metadata).map((e) => {
                                            let [t, n] = e;
                                            return (0, a.jsxs)(
                                                "li",
                                                {
                                                    children: [
                                                        (0, a.jsx)(u.Text, {
                                                            variant: "text-md/bold",
                                                            children: t,
                                                        }),
                                                        (0, a.jsx)(u.Text, {
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
                        className: y.collapsablePane,
                        children: [
                            (0, a.jsxs)(u.P3F, {
                                onClick: () => {
                                    R(!A);
                                },
                                className: y.collapsablePaneHeader,
                                children: [
                                    (0, a.jsx)("div", {
                                        children: (0, a.jsx)(u.Text, {
                                            variant: "text-md/bold",
                                            children: "Modifications",
                                        }),
                                    }),
                                    (0, a.jsx)(m.Z, { direction: A ? m.Z.Directions.UP : m.Z.Directions.DOWN }),
                                ],
                            }),
                            A &&
                                (0, a.jsxs)(u.Kqy, {
                                    gap: 24,
                                    children: [
                                        (0, a.jsx)(u.PhF, {
                                            label: "Status",
                                            serialize: (e) => B(e),
                                            isSelected: (e) => e === P.status,
                                            options: N,
                                            select: (e) => z({ status: e }),
                                            popoutLayerContext: x.O$,
                                        }),
                                        (0, a.jsxs)("div", {
                                            children: [
                                                (0, a.jsxs)(u.Kqy, {
                                                    gap: 12,
                                                    children: [
                                                        (0, a.jsx)(u.Button, {
                                                            variant: "primary",
                                                            size: "sm",
                                                            text: "Renew Subscription",
                                                            onClick: (e) => H(),
                                                        }),
                                                        (0, a.jsx)(u.Button, {
                                                            variant: "secondary",
                                                            size: "sm",
                                                            text: "Time Travel",
                                                            onClick: () => {
                                                                (0, u.ZDy)(() =>
                                                                    Promise.resolve((e) =>
                                                                        (0, a.jsx)(
                                                                            T,
                                                                            C(
                                                                                {
                                                                                    subscription: P,
                                                                                    onUpdated: I,
                                                                                },
                                                                                e,
                                                                            ),
                                                                        ),
                                                                    ),
                                                                );
                                                            },
                                                        }),
                                                    ],
                                                }),
                                                null !== U &&
                                                    (0, a.jsx)("div", {
                                                        className: y.error,
                                                        children: (0, a.jsx)(u.M14, {
                                                            type: "critical",
                                                            children: U,
                                                        }),
                                                    }),
                                            ],
                                        }),
                                        (0, a.jsxs)(u.Kqy, {
                                            gap: 16,
                                            children: [
                                                (0, a.jsx)(u.Wrb, {
                                                    label: "Premium Streak Start Date",
                                                    value: o()(
                                                        null == (O = P.premiumSince)
                                                            ? void 0
                                                            : O.toISOString().substring(0, 10),
                                                    ),
                                                    onSelect: (e) => z({ premiumStreakStart: e.toISOString() }),
                                                }),
                                                (0, a.jsx)(g.Z, {}),
                                            ],
                                        }),
                                        (0, a.jsx)(u.Wrb, {
                                            label: "Metadata Ended At Date",
                                            value: o()(K),
                                            onSelect: (e) => z({ endedAt: e.toISOString() }),
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
