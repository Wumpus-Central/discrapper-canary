n.d(t, {
    A: () => E,
}),
    n(896048),
    n(747238),
    n(321073);
var a = n(627968),
    l = n(64700),
    i = n(503698),
    r = n.n(i),
    s = n(989349),
    o = n.n(s),
    c = n(158954),
    d = n(562465),
    u = n(397927),
    m = n(147925),
    p = n(405269),
    h = n(661191),
    f = n(666055),
    x = n(776935),
    b = n(652215),
    g = n(601107),
    v = n(788868),
    j = n(815907),
    y = n(935391);

function _(e) {
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
let A = {
        [b.Dmq.UNPAID]: "Unpaid",
        [b.Dmq.ACTIVE]: "Active",
        [b.Dmq.PAST_DUE]: "Past Due",
        [b.Dmq.CANCELED]: "Canceled",
        [b.Dmq.ENDED]: "Ended",
        [b.Dmq.ACCOUNT_HOLD]: "Account Hold",
        [b.Dmq.BILLING_RETRY]: "Billing Retry",
        [b.Dmq.PAUSED]: "Paused",
        [b.Dmq.PAUSE_PENDING]: "Pause Pending",
    },
    C = {
        [g.qf.UNKNOWN]: "Unknown",
        [g.qf.ADMIN]: "Admin",
        [g.qf.USER]: "User",
        [g.qf.FRACTIONAL_PREMIUM]: "Fractional Premium",
        [g.qf.DEFERRED_START]: "Deferred Start",
        [g.qf.USER_TEMPORARY_BAN]: "User Temp Ban",
    },
    S = [
        {
            id: "unpaid",
            label: "Unpaid",
            value: b.Dmq.UNPAID,
        },
        {
            id: "active",
            label: "Active",
            value: b.Dmq.ACTIVE,
        },
        {
            id: "pastDue",
            label: "Past Due",
            value: b.Dmq.PAST_DUE,
        },
        {
            id: "canceled",
            label: "Canceled",
            value: b.Dmq.CANCELED,
        },
        {
            id: "ended",
            label: "Ended",
            value: b.Dmq.ENDED,
        },
        {
            id: "accountHold",
            label: "Account Hold",
            value: b.Dmq.ACCOUNT_HOLD,
        },
        {
            id: "billingRetry",
            label: "Billing Retry",
            value: b.Dmq.BILLING_RETRY,
        },
        {
            id: "paused",
            label: "Paused",
            value: b.Dmq.PAUSED,
        },
        {
            id: "pausePending",
            label: "Pause Pending",
            value: b.Dmq.PAUSE_PENDING,
        },
    ];

function O(e) {
    let { subscription: t, onClose: n, onUpdated: i, transitionState: r } = e,
        [s, d] = l.useState(o()()),
        [m, p] = l.useState(o()().format("HH:mm")),
        [h, f] = l.useState(!1),
        [b, g] = l.useState(void 0),
        v = async () => {
            if (null == s) return void g("Please select a target date");
            let [e, a] = m.split(":").map(Number),
                l = s.clone().hours(e).minutes(a).seconds(0).milliseconds(0);
            f(!0), g(void 0);
            try {
                await x.tB(t.id, x.H7.TIME_TRAVEL, {
                    targetDate: l,
                    paymentType: x.J7.DEFAULT,
                    sendReminderEmail: !1,
                }),
                    i(),
                    n();
            } catch (e) {
                var r;
                g((null == (r = e.body) ? void 0 : r.message) || e.message || "Failed to time travel");
            } finally {
                f(!1);
            }
        };
    return (0, a.jsx)(c.Modal, {
        transitionState: r,
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
        children: (0, a.jsxs)(u.BJc, {
            gap: 16,
            children: [
                (0, a.jsx)(u.Text, {
                    variant: "text-sm/normal",
                    color: "text-muted",
                    children:
                        "Select the target date and time to travel the subscription to. This will adjust the subscription period and trigger any necessary invoice operations.",
                }),
                (0, a.jsx)(u.J3s, {
                    label: "Target Date",
                    value: s,
                    onSelect: d,
                }),
                (0, a.jsx)(u.nVY, {
                    label: "Target Time (HH:mm)",
                    children: (0, a.jsx)("input", {
                        type: "time",
                        value: m,
                        onChange: (e) => {
                            p(e.target.value);
                        },
                        className: y.Qn,
                    }),
                }),
                (0, a.jsxs)(u.BJc, {
                    gap: 8,
                    children: [
                        (0, a.jsx)(u.Text, {
                            variant: "text-xs/semibold",
                            color: "text-muted",
                            children: "Current Period",
                        }),
                        (0, a.jsxs)(u.BJc, {
                            gap: 4,
                            children: [
                                (0, a.jsxs)(u.Text, {
                                    variant: "text-xs/normal",
                                    className: y.JX,
                                    children: ["Start: ", o()(t.currentPeriodStart).format("YYYY-MM-DD HH:mm")],
                                }),
                                (0, a.jsxs)(u.Text, {
                                    variant: "text-xs/normal",
                                    className: y.JX,
                                    children: ["End: ", o()(t.currentPeriodEnd).format("YYYY-MM-DD HH:mm")],
                                }),
                            ],
                        }),
                    ],
                }),
                null != b &&
                    (0, a.jsx)(u.wx6, {
                        type: "critical",
                        children: b,
                    }),
            ],
        }),
    });
}

function E(e) {
    var t, n, i, s, c, g, E, N;
    let T,
        { subscription: I, onUpdated: w } = e,
        [k, P] = l.useState(!1),
        [R, D] = l.useState(!1),
        [M, L] = l.useState(!1),
        [U, B] = l.useState(!1),
        [G, F] = l.useState(null),
        [V, H] = l.useState(""),
        W = (e) => {
            let t = new Date(e);
            return h.default.fromTimestamp(t.getTime());
        },
        K = async (e) => {
            let { status: t = I.status, premiumStreakStart: n, endedAt: a } = e,
                l = _(
                    {
                        subscription_status: t,
                    },
                    null != n
                        ? {
                              premium_streak_started_at: W(n),
                          }
                        : null,
                    null != a
                        ? {
                              ended_at: W(a),
                          }
                        : null,
                );
            await d.Bo.patch({
                url: "/debug/subscriptions/".concat(I.id),
                body: l,
                rejectWithError: !1,
            }),
                w();
        },
        z = async () => {
            try {
                await x.tB(I.id, x.H7.RENEW, {
                    targetDate: o()(new Date()),
                    paymentType: x.J7.DEFAULT,
                    sendReminderEmail: !1,
                });
            } catch (t) {
                var e;
                F((null == (e = t.body) ? void 0 : e.message) || t.message || "Failed to renew subscription");
            }
            w();
        },
        q = async (e) => {
            let { accepted: t } = e;
            try {
                await d.Bo.post({
                    url: "/debug/subscriptions/".concat(I.id, "/members/").concat(V),
                    body: _(
                        {},
                        t
                            ? {
                                  accepted: !0,
                              }
                            : {},
                    ),
                    rejectWithError: !1,
                }),
                    H("");
            } catch (e) {
                var n;
                F((null == (n = e.body) ? void 0 : n.message) || e.message || "Failed to add user to group");
            }
        },
        Q = async () => {
            try {
                await d.Bo.del({
                    url: "/debug/subscriptions/".concat(I.id, "/members/").concat(V),
                    rejectWithError: !1,
                }),
                    H("");
            } catch (t) {
                var e;
                F((null == (e = t.body) ? void 0 : e.message) || t.message || "Failed to remove user from group");
            }
        },
        Y = (null == (t = v.hd[I.planIdFromItems]) ? void 0 : t.premiumType) === v.PremiumTypes.TIER_0,
        J = null == (n = I.metadata) ? void 0 : n.ended_at,
        X = null != J ? new Date(J).toISOString().substring(0, 10) : "",
        $ = [
            {
                id: "id",
                label: "ID: ".concat(I.id),
                isDisabled: !1,
            },
            {
                id: "status",
                label: "Status: ".concat((null == N && (N = I.status), N in A) ? A[N] : "Unknown status ".concat(N)),
                isDisabled: !1,
            },
        ],
        Z = I.hasActiveTrial,
        ee = (null == (i = I.metadata) ? void 0 : i.active_discount_id) != null;
    return (
        Z &&
            $.push({
                id: "trial",
                label: "Has Trial",
                isDisabled: !1,
            }),
        ee &&
            $.push({
                id: "active-discount",
                label: "Has Active Discount",
                isDisabled: !1,
            }),
        I.status !== b.Dmq.ACTIVE &&
            $.push({
                id: "dates",
                label: "Dates: "
                    .concat((0, p.i$)(I.createdAt, "LL"), " - ")
                    .concat((0, p.i$)(I.currentPeriodEnd, "LL")),
                isDisabled: !1,
            }),
        I.status === b.Dmq.PAUSED &&
            $.push({
                id: "pause-reason",
                label: "Pause Reason: ".concat(
                    I.pauseReason in C ? C[I.pauseReason] : "Unknown pause reason ".concat(I.pauseReason),
                ),
                isDisabled: !1,
            }),
        (0, a.jsx)("div", {
            className: r()(j.Nr, Y ? j.Qf : j.C1),
            children: (0, a.jsxs)(u.nVY, {
                label: "Type: ".concat(
                    null == (T = I.planIdFromItems)
                        ? "No plan id"
                        : T in v.hd
                          ? v.hd[T].name
                          : "Unknown plan id ".concat(T),
                ),
                className: y.lI,
                children: [
                    (0, a.jsx)(u.CR_, {
                        items: $,
                        label: "Tags",
                        selectionMode: "none",
                        selectionBehavior: "replace",
                        disabledKeys: new Set(),
                    }),
                    Z &&
                        (0, a.jsxs)("div", {
                            className: y.VK,
                            children: [
                                (0, a.jsxs)(u.DUT, {
                                    onClick: () => {
                                        L(!M);
                                    },
                                    className: y.Eh,
                                    children: [
                                        (0, a.jsx)("div", {
                                            children: (0, a.jsx)(u.Text, {
                                                variant: "text-md/bold",
                                                children: "Trial Info",
                                            }),
                                        }),
                                        (0, a.jsx)(m.A, {
                                            direction: M ? m.A.Directions.UP : m.A.Directions.DOWN,
                                        }),
                                    ],
                                }),
                                M &&
                                    (0, a.jsxs)("ul", {
                                        className: y.j3,
                                        children: [
                                            (0, a.jsxs)("li", {
                                                children: [
                                                    (0, a.jsx)(u.Text, {
                                                        variant: "text-md/bold",
                                                        children: "trial_id",
                                                    }),
                                                    (0, a.jsx)(u.Text, {
                                                        variant: "text-sm/normal",
                                                        children: I.trialId,
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
                                                            null != I.trialEndsAt
                                                                ? (0, p.i$)(I.trialEndsAt, "LL")
                                                                : "N/A",
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                            ],
                        }),
                    ee &&
                        (0, a.jsxs)("div", {
                            className: y.VK,
                            children: [
                                (0, a.jsxs)(u.DUT, {
                                    onClick: () => {
                                        B(!U);
                                    },
                                    className: y.Eh,
                                    children: [
                                        (0, a.jsx)("div", {
                                            children: (0, a.jsx)(u.Text, {
                                                variant: "text-md/bold",
                                                children: "Active Discount Info",
                                            }),
                                        }),
                                        (0, a.jsx)(m.A, {
                                            direction: U ? m.A.Directions.UP : m.A.Directions.DOWN,
                                        }),
                                    ],
                                }),
                                U &&
                                    (0, a.jsxs)("ul", {
                                        className: y.j3,
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
                                                            null == (s = I.metadata) ? void 0 : s.active_discount_id,
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
                                                            (null == (c = I.metadata)
                                                                ? void 0
                                                                : c.active_discount_expires_at) != null
                                                                ? (0, p.i$)(
                                                                      new Date(
                                                                          null == (g = I.metadata)
                                                                              ? void 0
                                                                              : g.active_discount_expires_at,
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
                    null != I.metadata &&
                        (0, a.jsxs)("div", {
                            className: y.VK,
                            children: [
                                (0, a.jsxs)(u.DUT, {
                                    onClick: () => {
                                        P(!k);
                                    },
                                    className: y.Eh,
                                    children: [
                                        (0, a.jsx)("div", {
                                            children: (0, a.jsx)(u.Text, {
                                                variant: "text-md/bold",
                                                children: "Metadata",
                                            }),
                                        }),
                                        (0, a.jsx)(m.A, {
                                            direction: k ? m.A.Directions.UP : m.A.Directions.DOWN,
                                        }),
                                    ],
                                }),
                                k &&
                                    (0, a.jsx)("ul", {
                                        className: y.j3,
                                        children: Object.entries(I.metadata).map((e) => {
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
                        className: y.VK,
                        children: [
                            (0, a.jsxs)(u.DUT, {
                                onClick: () => {
                                    D(!R);
                                },
                                className: y.Eh,
                                children: [
                                    (0, a.jsx)("div", {
                                        children: (0, a.jsx)(u.Text, {
                                            variant: "text-md/bold",
                                            children: "Modifications",
                                        }),
                                    }),
                                    (0, a.jsx)(m.A, {
                                        direction: R ? m.A.Directions.UP : m.A.Directions.DOWN,
                                    }),
                                ],
                            }),
                            R &&
                                (0, a.jsxs)(u.BJc, {
                                    gap: 24,
                                    children: [
                                        (0, a.jsx)(u.l6P, {
                                            label: "Status",
                                            value: I.status,
                                            options: S,
                                            onSelectionChange: (e) => {
                                                K({
                                                    status: e,
                                                });
                                            },
                                            selectionMode: "single",
                                            fullWidth: !0,
                                        }),
                                        (0, a.jsxs)("div", {
                                            children: [
                                                (0, a.jsxs)(u.BJc, {
                                                    gap: 12,
                                                    children: [
                                                        (0, a.jsx)(u.Button, {
                                                            variant: "primary",
                                                            size: "sm",
                                                            text: "Renew Subscription",
                                                            onClick: (e) => z(),
                                                        }),
                                                        (0, a.jsx)(u.Button, {
                                                            variant: "secondary",
                                                            size: "sm",
                                                            text: "Time Travel",
                                                            onClick: () => {
                                                                (0, u.mMO)(() =>
                                                                    Promise.resolve((e) =>
                                                                        (0, a.jsx)(
                                                                            O,
                                                                            _(
                                                                                {
                                                                                    subscription: I,
                                                                                    onUpdated: w,
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
                                                null !== G &&
                                                    (0, a.jsx)("div", {
                                                        className: y.z3,
                                                        children: (0, a.jsx)(u.wx6, {
                                                            type: "critical",
                                                            children: G,
                                                        }),
                                                    }),
                                            ],
                                        }),
                                        (0, a.jsxs)(u.BJc, {
                                            gap: 16,
                                            children: [
                                                (0, a.jsx)(u.J3s, {
                                                    label: "Premium Streak Start Date",
                                                    value: o()(
                                                        null == (E = I.premiumSince)
                                                            ? void 0
                                                            : E.toISOString().substring(0, 10),
                                                    ),
                                                    onSelect: (e) =>
                                                        K({
                                                            premiumStreakStart: e.toISOString(),
                                                        }),
                                                }),
                                                (0, a.jsx)(f.A, {}),
                                            ],
                                        }),
                                        (0, a.jsx)(u.J3s, {
                                            label: "Metadata Ended At Date",
                                            value: o()(X),
                                            onSelect: (e) =>
                                                K({
                                                    endedAt: e.toISOString(),
                                                }),
                                        }),
                                        (null == I ? void 0 : I.planIdFromItems) === v.gD.PREMIUM_GROUP_MONTH &&
                                            (0, a.jsxs)(u.BJc, {
                                                gap: 8,
                                                children: [
                                                    (0, a.jsx)(u.ksK, {
                                                        label: "Subscription Group Member User ID",
                                                        value: V,
                                                        onChange: H,
                                                    }),
                                                    (0, a.jsxs)(u.BJc, {
                                                        gap: 8,
                                                        direction: "horizontal",
                                                        children: [
                                                            (0, a.jsx)(u.Button, {
                                                                variant: "primary",
                                                                size: "sm",
                                                                text: "Add",
                                                                onClick: () =>
                                                                    q({
                                                                        accepted: !0,
                                                                    }),
                                                                disabled: "" === V,
                                                            }),
                                                            (0, a.jsx)(u.Button, {
                                                                variant: "secondary",
                                                                size: "sm",
                                                                text: "Remove",
                                                                onClick: () => Q(),
                                                                disabled: "" === V,
                                                            }),
                                                        ],
                                                    }),
                                                ],
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
