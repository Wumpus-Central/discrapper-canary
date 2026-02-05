n.d(t, { A: () => y }), n(321073);
var a = n(627968),
    s = n(64700),
    i = n(503698),
    l = n.n(i),
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
    _ = n(652215),
    f = n(601107),
    v = n(788868),
    b = n(815907),
    j = n(935391);
let A = {
        [_.Dmq.UNPAID]: "Unpaid",
        [_.Dmq.ACTIVE]: "Active",
        [_.Dmq.PAST_DUE]: "Past Due",
        [_.Dmq.CANCELED]: "Canceled",
        [_.Dmq.ENDED]: "Ended",
        [_.Dmq.ACCOUNT_HOLD]: "Account Hold",
        [_.Dmq.BILLING_RETRY]: "Billing Retry",
        [_.Dmq.PAUSED]: "Paused",
        [_.Dmq.PAUSE_PENDING]: "Pause Pending",
    },
    C = {
        [f.qf.UNKNOWN]: "Unknown",
        [f.qf.ADMIN]: "Admin",
        [f.qf.USER]: "User",
        [f.qf.FRACTIONAL_PREMIUM]: "Fractional Premium",
        [f.qf.DEFERRED_START]: "Deferred Start",
        [f.qf.USER_TEMPORARY_BAN]: "User Temp Ban",
    },
    S = [
        { id: "unpaid", label: "Unpaid", value: _.Dmq.UNPAID },
        { id: "active", label: "Active", value: _.Dmq.ACTIVE },
        { id: "pastDue", label: "Past Due", value: _.Dmq.PAST_DUE },
        { id: "canceled", label: "Canceled", value: _.Dmq.CANCELED },
        { id: "ended", label: "Ended", value: _.Dmq.ENDED },
        { id: "accountHold", label: "Account Hold", value: _.Dmq.ACCOUNT_HOLD },
        { id: "billingRetry", label: "Billing Retry", value: _.Dmq.BILLING_RETRY },
        { id: "paused", label: "Paused", value: _.Dmq.PAUSED },
        { id: "pausePending", label: "Pause Pending", value: _.Dmq.PAUSE_PENDING },
    ];
function T(e) {
    let { subscription: t, onClose: n, onUpdated: i, transitionState: l } = e,
        [r, c] = s.useState(o()()),
        [m, h] = s.useState(o()().format("HH:mm")),
        [x, p] = s.useState(!1),
        [_, f] = s.useState(void 0),
        v = async () => {
            if (null == r) return void f("Please select a target date");
            let [e, a] = m.split(":").map(Number),
                s = r.clone().hours(e).minutes(a).seconds(0).milliseconds(0);
            p(!0), f(void 0);
            try {
                await g.tB(t.id, g.H7.TIME_TRAVEL, { targetDate: s, paymentType: g.J7.DEFAULT, sendReminderEmail: !1 }),
                    i(),
                    n();
            } catch (e) {
                f(e.body?.message || e.message || "Failed to time travel");
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
            { text: "Time Travel", variant: "primary", onClick: v, disabled: x || null == r },
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
                null != _ && (0, a.jsx)(u.wx6, { type: "critical", children: _ }),
            ],
        }),
    });
}
function y(e) {
    var t;
    let n,
        { subscription: i, onUpdated: r } = e,
        [d, f] = s.useState(!1),
        [y, N] = s.useState(!1),
        [E, I] = s.useState(!1),
        [k, R] = s.useState(!1),
        [O, w] = s.useState(null),
        [D, M] = s.useState(""),
        P = (e) => {
            let t = new Date(e);
            return x.default.fromTimestamp(t.getTime());
        },
        L = async (e) => {
            let { status: t = i.status, premiumStreakStart: n, endedAt: a } = e,
                s = {
                    subscription_status: t,
                    ...(null != n ? { premium_streak_started_at: P(n) } : null),
                    ...(null != a ? { ended_at: P(a) } : null),
                };
            await c.Bo.patch({ url: `/debug/subscriptions/${i.id}`, body: s, rejectWithError: !1 }), r();
        },
        U = async () => {
            try {
                await g.tB(i.id, g.H7.RENEW, {
                    targetDate: o()(new Date()),
                    paymentType: g.J7.DEFAULT,
                    sendReminderEmail: !1,
                });
            } catch (e) {
                w(e.body?.message || e.message || "Failed to renew subscription");
            }
            r();
        },
        B = async (e) => {
            let { accepted: t } = e;
            try {
                await c.Bo.post({
                    url: `/debug/subscriptions/${i.id}/members/${D}`,
                    body: { ...(t ? { accepted: !0 } : {}) },
                    rejectWithError: !1,
                }),
                    M("");
            } catch (e) {
                w(e.body?.message || e.message || "Failed to add user to group");
            }
        },
        G = async () => {
            try {
                await c.Bo.del({ url: `/debug/subscriptions/${i.id}/members/${D}`, rejectWithError: !1 }), M("");
            } catch (e) {
                w(e.body?.message || e.message || "Failed to remove user from group");
            }
        },
        F = v.hd[i.planIdFromItems]?.premiumType === v.PremiumTypes.TIER_0,
        V = i.metadata?.ended_at,
        W = null != V ? new Date(V).toISOString().substring(0, 10) : "",
        H = [
            { id: "id", label: `ID: ${i.id}`, isDisabled: !1 },
            {
                id: "status",
                label: `Status: ${(null == t && (t = i.status), t in A) ? A[t] : `Unknown status ${t}`}`,
                isDisabled: !1,
            },
        ],
        K = i.hasActiveTrial,
        z = i.metadata?.active_discount_id != null;
    return (
        K && H.push({ id: "trial", label: "Has Trial", isDisabled: !1 }),
        z && H.push({ id: "active-discount", label: "Has Active Discount", isDisabled: !1 }),
        i.status !== _.Dmq.ACTIVE &&
            H.push({
                id: "dates",
                label: `Dates: ${(0, h.i$)(i.createdAt, "LL")} - ${(0, h.i$)(i.currentPeriodEnd, "LL")}`,
                isDisabled: !1,
            }),
        i.status === _.Dmq.PAUSED &&
            H.push({
                id: "pause-reason",
                label: `Pause Reason: ${i.pauseReason in C ? C[i.pauseReason] : `Unknown pause reason ${i.pauseReason}`}`,
                isDisabled: !1,
            }),
        (0, a.jsx)("div", {
            className: l()(b.Nr, F ? b.Qf : b.C1),
            children: (0, a.jsxs)(u.nVY, {
                label: `Type: ${null == ((n = i.planIdFromItems)) ? "No plan id" : n in v.hd ? v.hd[n].name : `Unknown plan id ${n}`}`,
                className: j.lI,
                children: [
                    (0, a.jsx)(u.CR_, {
                        items: H,
                        label: "Tags",
                        selectionMode: "none",
                        selectionBehavior: "replace",
                        disabledKeys: new Set(),
                    }),
                    K &&
                        (0, a.jsxs)("div", {
                            className: j.VK,
                            children: [
                                (0, a.jsxs)(u.DUT, {
                                    onClick: () => {
                                        I(!E);
                                    },
                                    className: j.Eh,
                                    children: [
                                        (0, a.jsx)("div", {
                                            children: (0, a.jsx)(u.Text, {
                                                variant: "text-md/bold",
                                                children: "Trial Info",
                                            }),
                                        }),
                                        (0, a.jsx)(m.A, { direction: E ? m.A.Directions.UP : m.A.Directions.DOWN }),
                                    ],
                                }),
                                E &&
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
                                                        children: i.trialId,
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
                                                            null != i.trialEndsAt
                                                                ? (0, h.i$)(i.trialEndsAt, "LL")
                                                                : "N/A",
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                            ],
                        }),
                    z &&
                        (0, a.jsxs)("div", {
                            className: j.VK,
                            children: [
                                (0, a.jsxs)(u.DUT, {
                                    onClick: () => {
                                        R(!k);
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
                                                        children: i.metadata?.active_discount_id,
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
                                                            i.metadata?.active_discount_expires_at != null
                                                                ? (0, h.i$)(
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
                        (0, a.jsxs)("div", {
                            className: j.VK,
                            children: [
                                (0, a.jsxs)(u.DUT, {
                                    onClick: () => {
                                        f(!d);
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
                                        children: Object.entries(i.metadata).map((e) => {
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
                                    N(!y);
                                },
                                className: j.Eh,
                                children: [
                                    (0, a.jsx)("div", {
                                        children: (0, a.jsx)(u.Text, {
                                            variant: "text-md/bold",
                                            children: "Modifications",
                                        }),
                                    }),
                                    (0, a.jsx)(m.A, { direction: y ? m.A.Directions.UP : m.A.Directions.DOWN }),
                                ],
                            }),
                            y &&
                                (0, a.jsxs)(u.BJc, {
                                    gap: 24,
                                    children: [
                                        (0, a.jsx)(u.l6P, {
                                            label: "Status",
                                            value: i.status,
                                            options: S,
                                            onSelectionChange: (e) => {
                                                L({ status: e });
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
                                                            onClick: (e) => U(),
                                                        }),
                                                        (0, a.jsx)(u.Button, {
                                                            variant: "secondary",
                                                            size: "sm",
                                                            text: "Time Travel",
                                                            onClick: () => {
                                                                (0, u.mMO)(() =>
                                                                    Promise.resolve((e) =>
                                                                        (0, a.jsx)(T, {
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
                                                null !== O &&
                                                    (0, a.jsx)("div", {
                                                        className: j.z3,
                                                        children: (0, a.jsx)(u.wx6, { type: "critical", children: O }),
                                                    }),
                                            ],
                                        }),
                                        (0, a.jsxs)(u.BJc, {
                                            gap: 16,
                                            children: [
                                                (0, a.jsx)(u.J3s, {
                                                    label: "Premium Streak Start Date",
                                                    value: o()(i.premiumSince?.toISOString().substring(0, 10)),
                                                    onSelect: (e) => L({ premiumStreakStart: e.toISOString() }),
                                                }),
                                                (0, a.jsx)(p.A, {}),
                                            ],
                                        }),
                                        (0, a.jsx)(u.J3s, {
                                            label: "Metadata Ended At Date",
                                            value: o()(W),
                                            onSelect: (e) => L({ endedAt: e.toISOString() }),
                                        }),
                                        i?.planIdFromItems === v.gD.PREMIUM_GROUP_MONTH &&
                                            (0, a.jsxs)(u.BJc, {
                                                gap: 8,
                                                children: [
                                                    (0, a.jsx)(u.ksK, {
                                                        label: "Subscription Group Member User ID",
                                                        value: D,
                                                        onChange: M,
                                                    }),
                                                    (0, a.jsxs)(u.BJc, {
                                                        gap: 8,
                                                        direction: "horizontal",
                                                        children: [
                                                            (0, a.jsx)(u.Button, {
                                                                variant: "primary",
                                                                size: "sm",
                                                                text: "Add",
                                                                onClick: () => B({ accepted: !0 }),
                                                                disabled: "" === D,
                                                            }),
                                                            (0, a.jsx)(u.Button, {
                                                                variant: "secondary",
                                                                size: "sm",
                                                                text: "Remove",
                                                                onClick: () => G(),
                                                                disabled: "" === D,
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
