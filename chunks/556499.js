a.d(t, { A: () => L }), a(321073);
var n = a(627968),
    l = a(64700),
    i = a(503698),
    s = a.n(i),
    r = a(989349),
    o = a.n(r),
    d = a(189213),
    c = a(562465),
    u = a(331322),
    m = a(834730),
    h = a(582306),
    p = a(270003),
    x = a(683071),
    g = a(866711),
    v = a(939249),
    b = a(691885),
    _ = a(821609),
    f = a(192308),
    j = a(147925),
    A = a(405269),
    y = a(661191),
    C = a(666055),
    E = a(776935),
    S = a(652215),
    N = a(601107),
    k = a(788868),
    I = a(214868),
    D = a(142798);
let T = {
        [S.Dmq.UNPAID]: "Unpaid",
        [S.Dmq.ACTIVE]: "Active",
        [S.Dmq.PAST_DUE]: "Past Due",
        [S.Dmq.CANCELED]: "Canceled",
        [S.Dmq.ENDED]: "Ended",
        [S.Dmq.ACCOUNT_HOLD]: "Account Hold",
        [S.Dmq.BILLING_RETRY]: "Billing Retry",
        [S.Dmq.PAUSED]: "Paused",
        [S.Dmq.PAUSE_PENDING]: "Pause Pending",
    },
    w = {
        [N.qf.UNKNOWN]: "Unknown",
        [N.qf.ADMIN]: "Admin",
        [N.qf.USER]: "User",
        [N.qf.FRACTIONAL_PREMIUM]: "Fractional Premium",
        [N.qf.DEFERRED_START]: "Deferred Start",
        [N.qf.USER_TEMPORARY_BAN]: "User Temp Ban",
    },
    O = [
        { id: "unpaid", label: "Unpaid", value: S.Dmq.UNPAID },
        { id: "active", label: "Active", value: S.Dmq.ACTIVE },
        { id: "pastDue", label: "Past Due", value: S.Dmq.PAST_DUE },
        { id: "canceled", label: "Canceled", value: S.Dmq.CANCELED },
        { id: "ended", label: "Ended", value: S.Dmq.ENDED },
        { id: "accountHold", label: "Account Hold", value: S.Dmq.ACCOUNT_HOLD },
        { id: "billingRetry", label: "Billing Retry", value: S.Dmq.BILLING_RETRY },
        { id: "paused", label: "Paused", value: S.Dmq.PAUSED },
        { id: "pausePending", label: "Pause Pending", value: S.Dmq.PAUSE_PENDING },
    ];
function R(e) {
    let { subscription: t, onClose: a, onUpdated: i, transitionState: s } = e,
        [r, c] = l.useState(o()()),
        [g, v] = l.useState(o()().format("HH:mm")),
        [b, _] = l.useState(!1),
        [f, j] = l.useState(void 0),
        A = async () => {
            if (null == r) return void j("Please select a target date");
            let [e, n] = g.split(":").map(Number),
                l = r.clone().hours(e).minutes(n).seconds(0).milliseconds(0);
            _(!0), j(void 0);
            try {
                await E.tB(t.id, E.H7.TIME_TRAVEL, { targetDate: l, paymentType: E.J7.DEFAULT, sendReminderEmail: !1 }),
                    i(),
                    a();
            } catch (e) {
                j(e.body?.message || e.message || "Failed to time travel");
            } finally {
                _(!1);
            }
        };
    return (0, n.jsx)(d.Modal, {
        transitionState: s,
        onClose: () => (a(), Promise.resolve()),
        title: "Time Travel Subscription",
        size: "sm",
        actions: [
            { text: "Cancel", variant: "secondary", onClick: a },
            { text: "Time Travel", variant: "primary", onClick: A, disabled: b || null == r },
        ],
        children: (0, n.jsxs)(u.B, {
            gap: 16,
            children: [
                (0, n.jsx)(m.E, {
                    variant: "text-sm/normal",
                    color: "text-muted",
                    children:
                        "Select the target date and time to travel the subscription to. This will adjust the subscription period and trigger any necessary invoice operations.",
                }),
                (0, n.jsx)(h.J, { label: "Target Date", value: r, onSelect: c }),
                (0, n.jsx)(p.n, {
                    label: "Target Time (HH:mm)",
                    children: (0, n.jsx)("input", {
                        type: "time",
                        value: g,
                        onChange: (e) => {
                            v(e.target.value);
                        },
                        className: D.Qn,
                    }),
                }),
                (0, n.jsxs)(u.B, {
                    gap: 8,
                    children: [
                        (0, n.jsx)(m.E, {
                            variant: "text-xs/semibold",
                            color: "text-muted",
                            children: "Current Period",
                        }),
                        (0, n.jsxs)(u.B, {
                            gap: 4,
                            children: [
                                (0, n.jsxs)(m.E, {
                                    variant: "text-xs/normal",
                                    className: D.JX,
                                    children: ["Start: ", o()(t.currentPeriodStart).format("YYYY-MM-DD HH:mm")],
                                }),
                                (0, n.jsxs)(m.E, {
                                    variant: "text-xs/normal",
                                    className: D.JX,
                                    children: ["End: ", o()(t.currentPeriodEnd).format("YYYY-MM-DD HH:mm")],
                                }),
                            ],
                        }),
                    ],
                }),
                null != f && (0, n.jsx)(x.w, { type: "critical", children: f }),
            ],
        }),
    });
}
function L(e) {
    var t;
    let a,
        { subscription: i, onUpdated: r } = e,
        [d, N] = l.useState(!1),
        [L, M] = l.useState(!1),
        [P, U] = l.useState(!1),
        [B, G] = l.useState(!1),
        [F, V] = l.useState(null),
        $ = (e) => {
            let t = new Date(e);
            return y.default.fromTimestamp(t.getTime());
        },
        W = async (e) => {
            let { status: t = i.status, premiumStreakStart: a, endedAt: n } = e,
                l = {
                    subscription_status: t,
                    ...(null != a ? { premium_streak_started_at: $(a) } : null),
                    ...(null != n ? { ended_at: $(n) } : null),
                };
            await c.Bo.patch({ url: `/debug/subscriptions/${i.id}`, body: l, rejectWithError: !1 }), r();
        },
        H = async () => {
            try {
                await E.tB(i.id, E.H7.RENEW, {
                    targetDate: o()(new Date()),
                    paymentType: E.J7.DEFAULT,
                    sendReminderEmail: !1,
                });
            } catch (e) {
                V(e.body?.message || e.message || "Failed to renew subscription");
            }
            r();
        },
        z = k.hd[i.planIdFromItems]?.premiumType === k.PremiumTypes.TIER_0,
        K = i.metadata?.ended_at,
        Y = null != K ? new Date(K).toISOString().substring(0, 10) : "",
        q = [
            { id: "id", label: `ID: ${i.id}`, isDisabled: !1 },
            {
                id: "status",
                label: `Status: ${(null == t && (t = i.status), t in T) ? T[t] : `Unknown status ${t}`}`,
                isDisabled: !1,
            },
        ],
        J = i.hasActiveTrial,
        Q = i.metadata?.active_discount_id != null;
    return (
        J && q.push({ id: "trial", label: "Has Trial", isDisabled: !1 }),
        Q && q.push({ id: "active-discount", label: "Has Active Discount", isDisabled: !1 }),
        i.status !== S.Dmq.ACTIVE &&
            q.push({
                id: "dates",
                label: `Dates: ${(0, A.i$)(i.createdAt, "LL")} - ${(0, A.i$)(i.currentPeriodEnd, "LL")}`,
                isDisabled: !1,
            }),
        i.status === S.Dmq.PAUSED &&
            q.push({
                id: "pause-reason",
                label: `Pause Reason: ${i.pauseReason in w ? w[i.pauseReason] : `Unknown pause reason ${i.pauseReason}`}`,
                isDisabled: !1,
            }),
        (0, n.jsx)("div", {
            className: s()(I.Nr, z ? I.Qf : I.C1),
            children: (0, n.jsxs)(p.n, {
                label: `Type: ${null == ((a = i.planIdFromItems)) ? "No plan id" : a in k.hd ? k.hd[a].name : `Unknown plan id ${a}`}`,
                className: D.lI,
                children: [
                    (0, n.jsx)(g.C, {
                        items: q,
                        label: "Tags",
                        selectionMode: "none",
                        selectionBehavior: "replace",
                        disabledKeys: new Set(),
                    }),
                    J &&
                        (0, n.jsxs)("div", {
                            className: D.VK,
                            children: [
                                (0, n.jsxs)(v.D, {
                                    onClick: () => {
                                        U(!P);
                                    },
                                    className: D.Eh,
                                    children: [
                                        (0, n.jsx)("div", {
                                            children: (0, n.jsx)(m.E, {
                                                variant: "text-md/bold",
                                                children: "Trial Info",
                                            }),
                                        }),
                                        (0, n.jsx)(j.A, { direction: P ? j.A.Directions.UP : j.A.Directions.DOWN }),
                                    ],
                                }),
                                P &&
                                    (0, n.jsxs)("ul", {
                                        className: D.j3,
                                        children: [
                                            (0, n.jsxs)("li", {
                                                children: [
                                                    (0, n.jsx)(m.E, { variant: "text-md/bold", children: "trial_id" }),
                                                    (0, n.jsx)(m.E, { variant: "text-sm/normal", children: i.trialId }),
                                                ],
                                            }),
                                            (0, n.jsxs)("li", {
                                                children: [
                                                    (0, n.jsx)(m.E, {
                                                        variant: "text-md/bold",
                                                        children: "trial_ends_at",
                                                    }),
                                                    (0, n.jsx)(m.E, {
                                                        variant: "text-sm/normal",
                                                        children:
                                                            null != i.trialEndsAt
                                                                ? (0, A.i$)(i.trialEndsAt, "LL")
                                                                : "N/A",
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                            ],
                        }),
                    Q &&
                        (0, n.jsxs)("div", {
                            className: D.VK,
                            children: [
                                (0, n.jsxs)(v.D, {
                                    onClick: () => {
                                        G(!B);
                                    },
                                    className: D.Eh,
                                    children: [
                                        (0, n.jsx)("div", {
                                            children: (0, n.jsx)(m.E, {
                                                variant: "text-md/bold",
                                                children: "Active Discount Info",
                                            }),
                                        }),
                                        (0, n.jsx)(j.A, { direction: B ? j.A.Directions.UP : j.A.Directions.DOWN }),
                                    ],
                                }),
                                B &&
                                    (0, n.jsxs)("ul", {
                                        className: D.j3,
                                        children: [
                                            (0, n.jsxs)("li", {
                                                children: [
                                                    (0, n.jsx)(m.E, {
                                                        variant: "text-md/bold",
                                                        children: "active_discount_id",
                                                    }),
                                                    (0, n.jsx)(m.E, {
                                                        variant: "text-sm/normal",
                                                        children: i.metadata?.active_discount_id,
                                                    }),
                                                ],
                                            }),
                                            (0, n.jsxs)("li", {
                                                children: [
                                                    (0, n.jsx)(m.E, {
                                                        variant: "text-md/bold",
                                                        children: "active_discount_expires_at",
                                                    }),
                                                    (0, n.jsx)(m.E, {
                                                        variant: "text-sm/normal",
                                                        children:
                                                            i.metadata?.active_discount_expires_at != null
                                                                ? (0, A.i$)(
                                                                      new Date(i.metadata?.active_discount_expires_at),
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
                    null != i.metadata &&
                        (0, n.jsxs)("div", {
                            className: D.VK,
                            children: [
                                (0, n.jsxs)(v.D, {
                                    onClick: () => {
                                        N(!d);
                                    },
                                    className: D.Eh,
                                    children: [
                                        (0, n.jsx)("div", {
                                            children: (0, n.jsx)(m.E, {
                                                variant: "text-md/bold",
                                                children: "Metadata",
                                            }),
                                        }),
                                        (0, n.jsx)(j.A, { direction: d ? j.A.Directions.UP : j.A.Directions.DOWN }),
                                    ],
                                }),
                                d &&
                                    (0, n.jsx)("ul", {
                                        className: D.j3,
                                        children: Object.entries(i.metadata).map((e) => {
                                            let [t, a] = e;
                                            return (0, n.jsxs)(
                                                "li",
                                                {
                                                    children: [
                                                        (0, n.jsx)(m.E, { variant: "text-md/bold", children: t }),
                                                        (0, n.jsx)(m.E, { variant: "text-sm/normal", children: a }),
                                                    ],
                                                },
                                                t,
                                            );
                                        }),
                                    }),
                            ],
                        }),
                    (0, n.jsxs)("div", {
                        className: D.VK,
                        children: [
                            (0, n.jsxs)(v.D, {
                                onClick: () => {
                                    M(!L);
                                },
                                className: D.Eh,
                                children: [
                                    (0, n.jsx)("div", {
                                        children: (0, n.jsx)(m.E, {
                                            variant: "text-md/bold",
                                            children: "Modifications",
                                        }),
                                    }),
                                    (0, n.jsx)(j.A, { direction: L ? j.A.Directions.UP : j.A.Directions.DOWN }),
                                ],
                            }),
                            L &&
                                (0, n.jsxs)(u.B, {
                                    gap: 24,
                                    children: [
                                        (0, n.jsx)(b.l, {
                                            label: "Status",
                                            value: i.status,
                                            options: O,
                                            onSelectionChange: (e) => {
                                                W({ status: e });
                                            },
                                            selectionMode: "single",
                                            fullWidth: !0,
                                        }),
                                        (0, n.jsxs)("div", {
                                            children: [
                                                (0, n.jsxs)(u.B, {
                                                    gap: 12,
                                                    children: [
                                                        (0, n.jsx)(_.$, {
                                                            variant: "primary",
                                                            size: "sm",
                                                            text: "Renew Subscription",
                                                            onClick: (e) => H(),
                                                        }),
                                                        (0, n.jsx)(_.$, {
                                                            variant: "secondary",
                                                            size: "sm",
                                                            text: "Time Travel",
                                                            onClick: () => {
                                                                (0, f.openModalLazy)(() =>
                                                                    Promise.resolve((e) =>
                                                                        (0, n.jsx)(R, {
                                                                            subscription: i,
                                                                            onUpdated: r,
                                                                            ...e,
                                                                        }),
                                                                    ),
                                                                );
                                                            },
                                                        }),
                                                    ],
                                                }),
                                                null !== F &&
                                                    (0, n.jsx)("div", {
                                                        className: D.z3,
                                                        children: (0, n.jsx)(x.w, { type: "critical", children: F }),
                                                    }),
                                            ],
                                        }),
                                        (0, n.jsxs)(u.B, {
                                            gap: 16,
                                            children: [
                                                (0, n.jsx)(h.J, {
                                                    label: "Premium Streak Start Date",
                                                    value: o()(i.premiumSince?.toISOString().substring(0, 10)),
                                                    onSelect: (e) => W({ premiumStreakStart: e.toISOString() }),
                                                }),
                                                (0, n.jsx)(C.A, {}),
                                            ],
                                        }),
                                        (0, n.jsx)(h.J, {
                                            label: "Metadata Ended At Date",
                                            value: "" !== Y ? o()(Y) : void 0,
                                            onSelect: (e) => W({ endedAt: e.toISOString() }),
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
