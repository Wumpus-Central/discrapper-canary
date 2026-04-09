n.d(t, { A: () => E }), n(321073);
var a = n(627968),
    i = n(64700),
    s = n(503698),
    l = n.n(s),
    r = n(989349),
    o = n.n(r),
    d = n(158954),
    c = n(562465),
    u = n(397927),
    m = n(147925),
    h = n(405269),
    x = n(661191),
    p = n(666055),
    g = n(776935),
    f = n(652215),
    v = n(601107),
    _ = n(788868),
    b = n(616873),
    j = n(557277);
let A = {
        [f.Dmq.UNPAID]: "Unpaid",
        [f.Dmq.ACTIVE]: "Active",
        [f.Dmq.PAST_DUE]: "Past Due",
        [f.Dmq.CANCELED]: "Canceled",
        [f.Dmq.ENDED]: "Ended",
        [f.Dmq.ACCOUNT_HOLD]: "Account Hold",
        [f.Dmq.BILLING_RETRY]: "Billing Retry",
        [f.Dmq.PAUSED]: "Paused",
        [f.Dmq.PAUSE_PENDING]: "Pause Pending",
    },
    C = {
        [v.qf.UNKNOWN]: "Unknown",
        [v.qf.ADMIN]: "Admin",
        [v.qf.USER]: "User",
        [v.qf.FRACTIONAL_PREMIUM]: "Fractional Premium",
        [v.qf.DEFERRED_START]: "Deferred Start",
        [v.qf.USER_TEMPORARY_BAN]: "User Temp Ban",
    },
    y = [
        { id: "unpaid", label: "Unpaid", value: f.Dmq.UNPAID },
        { id: "active", label: "Active", value: f.Dmq.ACTIVE },
        { id: "pastDue", label: "Past Due", value: f.Dmq.PAST_DUE },
        { id: "canceled", label: "Canceled", value: f.Dmq.CANCELED },
        { id: "ended", label: "Ended", value: f.Dmq.ENDED },
        { id: "accountHold", label: "Account Hold", value: f.Dmq.ACCOUNT_HOLD },
        { id: "billingRetry", label: "Billing Retry", value: f.Dmq.BILLING_RETRY },
        { id: "paused", label: "Paused", value: f.Dmq.PAUSED },
        { id: "pausePending", label: "Pause Pending", value: f.Dmq.PAUSE_PENDING },
    ];
function S(e) {
    let { subscription: t, onClose: n, onUpdated: s, transitionState: l } = e,
        [r, c] = i.useState(o()()),
        [m, h] = i.useState(o()().format("HH:mm")),
        [x, p] = i.useState(!1),
        [f, v] = i.useState(void 0),
        _ = async () => {
            if (null == r) return void v("Please select a target date");
            let [e, a] = m.split(":").map(Number),
                i = r.clone().hours(e).minutes(a).seconds(0).milliseconds(0);
            p(!0), v(void 0);
            try {
                await g.tB(t.id, g.H7.TIME_TRAVEL, { targetDate: i, paymentType: g.J7.DEFAULT, sendReminderEmail: !1 }),
                    s(),
                    n();
            } catch (e) {
                v(e.body?.message || e.message || "Failed to time travel");
            } finally {
                p(!1);
            }
        };
    return (0, a.jsx)(d.Modal, {
        transitionState: l,
        onClose: () => (n(), Promise.resolve()),
        title: "Time Travel Subscription",
        size: "sm",
        actions: [
            { text: "Cancel", variant: "secondary", onClick: n },
            { text: "Time Travel", variant: "primary", onClick: _, disabled: x || null == r },
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
                (0, a.jsx)(u.J3s, { label: "Target Date", value: r, onSelect: c }),
                (0, a.jsx)(u.nVY, {
                    label: "Target Time (HH:mm)",
                    children: (0, a.jsx)("input", {
                        type: "time",
                        value: m,
                        onChange: (e) => {
                            h(e.target.value);
                        },
                        className: j.Qn,
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
                                    className: j.JX,
                                    children: ["Start: ", o()(t.currentPeriodStart).format("YYYY-MM-DD HH:mm")],
                                }),
                                (0, a.jsxs)(u.Text, {
                                    variant: "text-xs/normal",
                                    className: j.JX,
                                    children: ["End: ", o()(t.currentPeriodEnd).format("YYYY-MM-DD HH:mm")],
                                }),
                            ],
                        }),
                    ],
                }),
                null != f && (0, a.jsx)(u.wx6, { type: "critical", children: f }),
            ],
        }),
    });
}
function E(e) {
    var t;
    let n,
        { subscription: s, onUpdated: r } = e,
        [d, v] = i.useState(!1),
        [E, T] = i.useState(!1),
        [N, I] = i.useState(!1),
        [k, O] = i.useState(!1),
        [R, w] = i.useState(null),
        D = (e) => {
            let t = new Date(e);
            return x.default.fromTimestamp(t.getTime());
        },
        M = async (e) => {
            let { status: t = s.status, premiumStreakStart: n, endedAt: a } = e,
                i = {
                    subscription_status: t,
                    ...(null != n ? { premium_streak_started_at: D(n) } : null),
                    ...(null != a ? { ended_at: D(a) } : null),
                };
            await c.Bo.patch({ url: `/debug/subscriptions/${s.id}`, body: i, rejectWithError: !1 }), r();
        },
        P = async () => {
            try {
                await g.tB(s.id, g.H7.RENEW, {
                    targetDate: o()(new Date()),
                    paymentType: g.J7.DEFAULT,
                    sendReminderEmail: !1,
                });
            } catch (e) {
                w(e.body?.message || e.message || "Failed to renew subscription");
            }
            r();
        },
        L = _.hd[s.planIdFromItems]?.premiumType === _.PremiumTypes.TIER_0,
        U = s.metadata?.ended_at,
        B = null != U ? new Date(U).toISOString().substring(0, 10) : "",
        G = [
            { id: "id", label: `ID: ${s.id}`, isDisabled: !1 },
            {
                id: "status",
                label: `Status: ${(null == t && (t = s.status), t in A) ? A[t] : `Unknown status ${t}`}`,
                isDisabled: !1,
            },
        ],
        F = s.hasActiveTrial,
        V = s.metadata?.active_discount_id != null;
    return (
        F && G.push({ id: "trial", label: "Has Trial", isDisabled: !1 }),
        V && G.push({ id: "active-discount", label: "Has Active Discount", isDisabled: !1 }),
        s.status !== f.Dmq.ACTIVE &&
            G.push({
                id: "dates",
                label: `Dates: ${(0, h.i$)(s.createdAt, "LL")} - ${(0, h.i$)(s.currentPeriodEnd, "LL")}`,
                isDisabled: !1,
            }),
        s.status === f.Dmq.PAUSED &&
            G.push({
                id: "pause-reason",
                label: `Pause Reason: ${s.pauseReason in C ? C[s.pauseReason] : `Unknown pause reason ${s.pauseReason}`}`,
                isDisabled: !1,
            }),
        (0, a.jsx)("div", {
            className: l()(b.Nr, L ? b.Qf : b.C1),
            children: (0, a.jsxs)(u.nVY, {
                label: `Type: ${null == ((n = s.planIdFromItems)) ? "No plan id" : n in _.hd ? _.hd[n].name : `Unknown plan id ${n}`}`,
                className: j.lI,
                children: [
                    (0, a.jsx)(u.CR_, {
                        items: G,
                        label: "Tags",
                        selectionMode: "none",
                        selectionBehavior: "replace",
                        disabledKeys: new Set(),
                    }),
                    F &&
                        (0, a.jsxs)("div", {
                            className: j.VK,
                            children: [
                                (0, a.jsxs)(u.DUT, {
                                    onClick: () => {
                                        I(!N);
                                    },
                                    className: j.Eh,
                                    children: [
                                        (0, a.jsx)("div", {
                                            children: (0, a.jsx)(u.Text, {
                                                variant: "text-md/bold",
                                                children: "Trial Info",
                                            }),
                                        }),
                                        (0, a.jsx)(m.A, { direction: N ? m.A.Directions.UP : m.A.Directions.DOWN }),
                                    ],
                                }),
                                N &&
                                    (0, a.jsxs)("ul", {
                                        className: j.j3,
                                        children: [
                                            (0, a.jsxs)("li", {
                                                children: [
                                                    (0, a.jsx)(u.Text, {
                                                        variant: "text-md/bold",
                                                        children: "trial_id",
                                                    }),
                                                    (0, a.jsx)(u.Text, {
                                                        variant: "text-sm/normal",
                                                        children: s.trialId,
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
                                                            null != s.trialEndsAt
                                                                ? (0, h.i$)(s.trialEndsAt, "LL")
                                                                : "N/A",
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                            ],
                        }),
                    V &&
                        (0, a.jsxs)("div", {
                            className: j.VK,
                            children: [
                                (0, a.jsxs)(u.DUT, {
                                    onClick: () => {
                                        O(!k);
                                    },
                                    className: j.Eh,
                                    children: [
                                        (0, a.jsx)("div", {
                                            children: (0, a.jsx)(u.Text, {
                                                variant: "text-md/bold",
                                                children: "Active Discount Info",
                                            }),
                                        }),
                                        (0, a.jsx)(m.A, { direction: k ? m.A.Directions.UP : m.A.Directions.DOWN }),
                                    ],
                                }),
                                k &&
                                    (0, a.jsxs)("ul", {
                                        className: j.j3,
                                        children: [
                                            (0, a.jsxs)("li", {
                                                children: [
                                                    (0, a.jsx)(u.Text, {
                                                        variant: "text-md/bold",
                                                        children: "active_discount_id",
                                                    }),
                                                    (0, a.jsx)(u.Text, {
                                                        variant: "text-sm/normal",
                                                        children: s.metadata?.active_discount_id,
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
                                                            s.metadata?.active_discount_expires_at != null
                                                                ? (0, h.i$)(
                                                                      new Date(s.metadata?.active_discount_expires_at),
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
                    null != s.metadata &&
                        (0, a.jsxs)("div", {
                            className: j.VK,
                            children: [
                                (0, a.jsxs)(u.DUT, {
                                    onClick: () => {
                                        v(!d);
                                    },
                                    className: j.Eh,
                                    children: [
                                        (0, a.jsx)("div", {
                                            children: (0, a.jsx)(u.Text, {
                                                variant: "text-md/bold",
                                                children: "Metadata",
                                            }),
                                        }),
                                        (0, a.jsx)(m.A, { direction: d ? m.A.Directions.UP : m.A.Directions.DOWN }),
                                    ],
                                }),
                                d &&
                                    (0, a.jsx)("ul", {
                                        className: j.j3,
                                        children: Object.entries(s.metadata).map((e) => {
                                            let [t, n] = e;
                                            return (0, a.jsxs)(
                                                "li",
                                                {
                                                    children: [
                                                        (0, a.jsx)(u.Text, { variant: "text-md/bold", children: t }),
                                                        (0, a.jsx)(u.Text, { variant: "text-sm/normal", children: n }),
                                                    ],
                                                },
                                                t,
                                            );
                                        }),
                                    }),
                            ],
                        }),
                    (0, a.jsxs)("div", {
                        className: j.VK,
                        children: [
                            (0, a.jsxs)(u.DUT, {
                                onClick: () => {
                                    T(!E);
                                },
                                className: j.Eh,
                                children: [
                                    (0, a.jsx)("div", {
                                        children: (0, a.jsx)(u.Text, {
                                            variant: "text-md/bold",
                                            children: "Modifications",
                                        }),
                                    }),
                                    (0, a.jsx)(m.A, { direction: E ? m.A.Directions.UP : m.A.Directions.DOWN }),
                                ],
                            }),
                            E &&
                                (0, a.jsxs)(u.BJc, {
                                    gap: 24,
                                    children: [
                                        (0, a.jsx)(u.l6P, {
                                            label: "Status",
                                            value: s.status,
                                            options: y,
                                            onSelectionChange: (e) => {
                                                M({ status: e });
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
                                                            onClick: (e) => P(),
                                                        }),
                                                        (0, a.jsx)(u.Button, {
                                                            variant: "secondary",
                                                            size: "sm",
                                                            text: "Time Travel",
                                                            onClick: () => {
                                                                (0, u.mMO)(() =>
                                                                    Promise.resolve((e) =>
                                                                        (0, a.jsx)(S, {
                                                                            subscription: s,
                                                                            onUpdated: r,
                                                                            ...e,
                                                                        }),
                                                                    ),
                                                                );
                                                            },
                                                        }),
                                                    ],
                                                }),
                                                null !== R &&
                                                    (0, a.jsx)("div", {
                                                        className: j.z3,
                                                        children: (0, a.jsx)(u.wx6, { type: "critical", children: R }),
                                                    }),
                                            ],
                                        }),
                                        (0, a.jsxs)(u.BJc, {
                                            gap: 16,
                                            children: [
                                                (0, a.jsx)(u.J3s, {
                                                    label: "Premium Streak Start Date",
                                                    value: o()(s.premiumSince?.toISOString().substring(0, 10)),
                                                    onSelect: (e) => M({ premiumStreakStart: e.toISOString() }),
                                                }),
                                                (0, a.jsx)(p.A, {}),
                                            ],
                                        }),
                                        (0, a.jsx)(u.J3s, {
                                            label: "Metadata Ended At Date",
                                            value: "" !== B ? o()(B) : void 0,
                                            onSelect: (e) => M({ endedAt: e.toISOString() }),
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
