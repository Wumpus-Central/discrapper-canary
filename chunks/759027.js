n.d(t, { Z: () => P }), n(388685), n(35282), n(539854);
var a = n(54381),
    r = n(473749),
    i = n(120356),
    l = n.n(i),
    s = n(913527),
    o = n.n(s),
    c = n(793030),
    d = n(544891),
    u = n(199849),
    m = n(481060),
    p = n(259580),
    h = n(55935),
    f = n(709054),
    x = n(246992),
    b = n(923576),
    g = n(257665),
    v = n(981631),
    j = n(362786),
    y = n(474936),
    C = n(68428),
    _ = n(329370);
function S(e) {
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
let E = {
        [v.O0b.UNPAID]: "Unpaid",
        [v.O0b.ACTIVE]: "Active",
        [v.O0b.PAST_DUE]: "Past Due",
        [v.O0b.CANCELED]: "Canceled",
        [v.O0b.ENDED]: "Ended",
        [v.O0b.ACCOUNT_HOLD]: "Account Hold",
        [v.O0b.BILLING_RETRY]: "Billing Retry",
        [v.O0b.PAUSED]: "Paused",
        [v.O0b.PAUSE_PENDING]: "Pause Pending",
    },
    O = {
        [j.Id.UNKNOWN]: "Unknown",
        [j.Id.ADMIN]: "Admin",
        [j.Id.USER]: "User",
        [j.Id.FRACTIONAL_PREMIUM]: "Fractional Premium",
        [j.Id.DEFERRED_START]: "Deferred Start",
        [j.Id.USER_TEMPORARY_BAN]: "User Temp Ban",
    },
    T = [
        {
            label: "Unpaid",
            value: v.O0b.UNPAID,
        },
        {
            label: "Active",
            value: v.O0b.ACTIVE,
        },
        {
            label: "Past Due",
            value: v.O0b.PAST_DUE,
        },
        {
            label: "Canceled",
            value: v.O0b.CANCELED,
        },
        {
            label: "Ended",
            value: v.O0b.ENDED,
        },
        {
            label: "Account Hold",
            value: v.O0b.ACCOUNT_HOLD,
        },
        {
            label: "Billing Retry",
            value: v.O0b.BILLING_RETRY,
        },
        {
            label: "Paused",
            value: v.O0b.PAUSED,
        },
        {
            label: "Pause Pending",
            value: v.O0b.PAUSE_PENDING,
        },
    ];
function N(e) {
    let { subscription: t, onClose: n, onUpdated: i, transitionState: l } = e,
        [s, d] = r.useState(o()()),
        [u, p] = r.useState(o()().format("HH:mm")),
        [h, f] = r.useState(!1),
        [x, b] = r.useState(void 0),
        v = async () => {
            if (null == s) return void b("Please select a target date");
            let [e, a] = u.split(":").map(Number),
                r = s.clone().hours(e).minutes(a).seconds(0).milliseconds(0);
            f(!0), b(void 0);
            try {
                await g.vc(t.id, g.cN.TIME_TRAVEL, {
                    targetDate: r,
                    paymentType: g.F0.DEFAULT,
                    sendReminderEmail: !1,
                }),
                    i(),
                    n();
            } catch (e) {
                var l;
                b((null == (l = e.body) ? void 0 : l.message) || e.message || "Failed to time travel");
            } finally {
                f(!1);
            }
        };
    return (0, a.jsx)(c.Modal, {
        transitionState: l,
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
        children: (0, a.jsxs)(m.Kqy, {
            gap: 16,
            children: [
                (0, a.jsx)(m.Text, {
                    variant: "text-sm/normal",
                    color: "text-muted",
                    children:
                        "Select the target date and time to travel the subscription to. This will adjust the subscription period and trigger any necessary invoice operations.",
                }),
                (0, a.jsx)(m.Wrb, {
                    label: "Target Date",
                    value: s,
                    onSelect: d,
                }),
                (0, a.jsx)(m.C3N, {
                    label: "Target Time (HH:mm)",
                    children: (0, a.jsx)("input", {
                        type: "time",
                        value: u,
                        onChange: (e) => {
                            p(e.target.value);
                        },
                        className: _.timeInput,
                    }),
                }),
                (0, a.jsxs)(m.Kqy, {
                    gap: 8,
                    children: [
                        (0, a.jsx)(m.Text, {
                            variant: "text-xs/semibold",
                            color: "text-muted",
                            children: "Current Period",
                        }),
                        (0, a.jsxs)(m.Kqy, {
                            gap: 4,
                            children: [
                                (0, a.jsxs)(m.Text, {
                                    variant: "text-xs/normal",
                                    className: _.periodText,
                                    children: ["Start: ", o()(t.currentPeriodStart).format("YYYY-MM-DD HH:mm")],
                                }),
                                (0, a.jsxs)(m.Text, {
                                    variant: "text-xs/normal",
                                    className: _.periodText,
                                    children: ["End: ", o()(t.currentPeriodEnd).format("YYYY-MM-DD HH:mm")],
                                }),
                            ],
                        }),
                    ],
                }),
                null != x &&
                    (0, a.jsx)(m.M14, {
                        type: "critical",
                        children: x,
                    }),
            ],
        }),
    });
}
function P(e) {
    var t, n, i, s, c, j, P;
    let { subscription: w, onUpdated: I } = e,
        [k, R] = r.useState(!1),
        [A, D] = r.useState(!1),
        [Z, L] = r.useState(!1),
        [M, U] = r.useState(!1),
        [B, F] = r.useState(null),
        G = (e) => ((null == e && (e = w.status), e in E) ? E[e] : "Unknown status ".concat(e)),
        V = (e) => {
            let t = new Date(e);
            return f.default.fromTimestamp(t.getTime());
        },
        H = async (e) => {
            let { status: t = w.status, premiumStreakStart: n, endedAt: a } = e,
                r = S(
                    { subscription_status: t },
                    null != n ? { premium_streak_started_at: V(n) } : null,
                    null != a ? { ended_at: V(a) } : null,
                );
            await d.tn.patch({
                url: "/debug/subscriptions/".concat(w.id),
                body: r,
                rejectWithError: !1,
            }),
                I();
        },
        W = async () => {
            try {
                await g.vc(w.id, g.cN.RENEW, {
                    targetDate: o()(new Date()),
                    paymentType: g.F0.DEFAULT,
                    sendReminderEmail: !1,
                });
            } catch (t) {
                var e;
                F((null == (e = t.body) ? void 0 : e.message) || t.message || "Failed to renew subscription");
            }
            I();
        },
        z = (null == (t = y.GP[w.planIdFromItems]) ? void 0 : t.premiumType) === y.PremiumTypes.TIER_0,
        q = null == (n = w.metadata) ? void 0 : n.ended_at,
        K = null != q ? new Date(q).toISOString().substring(0, 10) : "",
        Q = [
            {
                id: "id",
                label: "ID: ".concat(w.id),
                isDisabled: !1,
            },
            {
                id: "status",
                label: "Status: ".concat(G()),
                isDisabled: !1,
            },
        ],
        Y = w.hasActiveTrial,
        X = (null == (i = w.metadata) ? void 0 : i.active_discount_id) != null;
    return (
        Y &&
            Q.push({
                id: "trial",
                label: "Has Trial",
                isDisabled: !1,
            }),
        X &&
            Q.push({
                id: "active-discount",
                label: "Has Active Discount",
                isDisabled: !1,
            }),
        w.status !== v.O0b.ACTIVE &&
            Q.push({
                id: "dates",
                label: "Dates: "
                    .concat((0, h.vc)(w.createdAt, "LL"), " - ")
                    .concat((0, h.vc)(w.currentPeriodEnd, "LL")),
                isDisabled: !1,
            }),
        w.status === v.O0b.PAUSED &&
            Q.push({
                id: "pause-reason",
                label: "Pause Reason: ".concat(
                    w.pauseReason in O ? O[w.pauseReason] : "Unknown pause reason ".concat(w.pauseReason),
                ),
                isDisabled: !1,
            }),
        (0, a.jsx)("div", {
            className: l()(C.card, z ? C.gradientWrapperTier0 : C.gradientWrapperTier2),
            children: (0, a.jsxs)(m.C3N, {
                label: "Type: ".concat(
                    (() => {
                        let e = w.planIdFromItems;
                        return null == e ? "No plan id" : e in y.GP ? y.GP[e].name : "Unknown plan id ".concat(e);
                    })(),
                ),
                className: _.fieldset,
                children: [
                    (0, a.jsx)(m.QSK, {
                        items: Q,
                        label: "Tags",
                        selectionMode: "none",
                        selectionBehavior: "replace",
                        disabledKeys: new Set(),
                    }),
                    Y &&
                        (0, a.jsxs)("div", {
                            className: _.collapsablePane,
                            children: [
                                (0, a.jsxs)(m.P3F, {
                                    onClick: () => {
                                        L(!Z);
                                    },
                                    className: _.collapsablePaneHeader,
                                    children: [
                                        (0, a.jsx)("div", {
                                            children: (0, a.jsx)(m.Text, {
                                                variant: "text-md/bold",
                                                children: "Trial Info",
                                            }),
                                        }),
                                        (0, a.jsx)(p.Z, { direction: Z ? p.Z.Directions.UP : p.Z.Directions.DOWN }),
                                    ],
                                }),
                                Z &&
                                    (0, a.jsxs)("ul", {
                                        className: _.collapsiblePaneList,
                                        children: [
                                            (0, a.jsxs)("li", {
                                                children: [
                                                    (0, a.jsx)(m.Text, {
                                                        variant: "text-md/bold",
                                                        children: "trial_id",
                                                    }),
                                                    (0, a.jsx)(m.Text, {
                                                        variant: "text-sm/normal",
                                                        children: w.trialId,
                                                    }),
                                                ],
                                            }),
                                            (0, a.jsxs)("li", {
                                                children: [
                                                    (0, a.jsx)(m.Text, {
                                                        variant: "text-md/bold",
                                                        children: "trial_ends_at",
                                                    }),
                                                    (0, a.jsx)(m.Text, {
                                                        variant: "text-sm/normal",
                                                        children:
                                                            null != w.trialEndsAt
                                                                ? (0, h.vc)(w.trialEndsAt, "LL")
                                                                : "N/A",
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                            ],
                        }),
                    X &&
                        (0, a.jsxs)("div", {
                            className: _.collapsablePane,
                            children: [
                                (0, a.jsxs)(m.P3F, {
                                    onClick: () => {
                                        U(!M);
                                    },
                                    className: _.collapsablePaneHeader,
                                    children: [
                                        (0, a.jsx)("div", {
                                            children: (0, a.jsx)(m.Text, {
                                                variant: "text-md/bold",
                                                children: "Active Discount Info",
                                            }),
                                        }),
                                        (0, a.jsx)(p.Z, { direction: M ? p.Z.Directions.UP : p.Z.Directions.DOWN }),
                                    ],
                                }),
                                M &&
                                    (0, a.jsxs)("ul", {
                                        className: _.collapsiblePaneList,
                                        children: [
                                            (0, a.jsxs)("li", {
                                                children: [
                                                    (0, a.jsx)(m.Text, {
                                                        variant: "text-md/bold",
                                                        children: "active_discount_id",
                                                    }),
                                                    (0, a.jsx)(m.Text, {
                                                        variant: "text-sm/normal",
                                                        children:
                                                            null == (s = w.metadata) ? void 0 : s.active_discount_id,
                                                    }),
                                                ],
                                            }),
                                            (0, a.jsxs)("li", {
                                                children: [
                                                    (0, a.jsx)(m.Text, {
                                                        variant: "text-md/bold",
                                                        children: "active_discount_expires_at",
                                                    }),
                                                    (0, a.jsx)(m.Text, {
                                                        variant: "text-sm/normal",
                                                        children:
                                                            (null == (c = w.metadata)
                                                                ? void 0
                                                                : c.active_discount_expires_at) != null
                                                                ? (0, h.vc)(
                                                                      new Date(
                                                                          null == (j = w.metadata)
                                                                              ? void 0
                                                                              : j.active_discount_expires_at,
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
                    null != w.metadata &&
                        (0, a.jsxs)("div", {
                            className: _.collapsablePane,
                            children: [
                                (0, a.jsxs)(m.P3F, {
                                    onClick: () => {
                                        R(!k);
                                    },
                                    className: _.collapsablePaneHeader,
                                    children: [
                                        (0, a.jsx)("div", {
                                            children: (0, a.jsx)(m.Text, {
                                                variant: "text-md/bold",
                                                children: "Metadata",
                                            }),
                                        }),
                                        (0, a.jsx)(p.Z, { direction: k ? p.Z.Directions.UP : p.Z.Directions.DOWN }),
                                    ],
                                }),
                                k &&
                                    (0, a.jsx)("ul", {
                                        className: _.collapsiblePaneList,
                                        children: Object.entries(w.metadata).map((e) => {
                                            let [t, n] = e;
                                            return (0, a.jsxs)(
                                                "li",
                                                {
                                                    children: [
                                                        (0, a.jsx)(m.Text, {
                                                            variant: "text-md/bold",
                                                            children: t,
                                                        }),
                                                        (0, a.jsx)(m.Text, {
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
                        className: _.collapsablePane,
                        children: [
                            (0, a.jsxs)(m.P3F, {
                                onClick: () => {
                                    D(!A);
                                },
                                className: _.collapsablePaneHeader,
                                children: [
                                    (0, a.jsx)("div", {
                                        children: (0, a.jsx)(m.Text, {
                                            variant: "text-md/bold",
                                            children: "Modifications",
                                        }),
                                    }),
                                    (0, a.jsx)(p.Z, { direction: A ? p.Z.Directions.UP : p.Z.Directions.DOWN }),
                                ],
                            }),
                            A &&
                                (0, a.jsxs)(m.Kqy, {
                                    gap: 24,
                                    children: [
                                        (0, a.jsx)(u.B6, {
                                            label: "Status",
                                            serialize: (e) => G(e),
                                            isSelected: (e) => e === w.status,
                                            options: T,
                                            select: (e) => H({ status: e }),
                                            popoutLayerContext: x.O$,
                                        }),
                                        (0, a.jsxs)("div", {
                                            children: [
                                                (0, a.jsxs)(m.Kqy, {
                                                    gap: 12,
                                                    children: [
                                                        (0, a.jsx)(m.Button, {
                                                            variant: "primary",
                                                            size: "sm",
                                                            text: "Renew Subscription",
                                                            onClick: (e) => W(),
                                                        }),
                                                        (0, a.jsx)(m.Button, {
                                                            variant: "secondary",
                                                            size: "sm",
                                                            text: "Time Travel",
                                                            onClick: () => {
                                                                (0, m.ZDy)(() =>
                                                                    Promise.resolve((e) =>
                                                                        (0, a.jsx)(
                                                                            N,
                                                                            S(
                                                                                {
                                                                                    subscription: w,
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
                                                null !== B &&
                                                    (0, a.jsx)("div", {
                                                        className: _.error,
                                                        children: (0, a.jsx)(m.M14, {
                                                            type: "critical",
                                                            children: B,
                                                        }),
                                                    }),
                                            ],
                                        }),
                                        (0, a.jsxs)(m.Kqy, {
                                            gap: 16,
                                            children: [
                                                (0, a.jsx)(m.Wrb, {
                                                    label: "Premium Streak Start Date",
                                                    value: o()(
                                                        null == (P = w.premiumSince)
                                                            ? void 0
                                                            : P.toISOString().substring(0, 10),
                                                    ),
                                                    onSelect: (e) => H({ premiumStreakStart: e.toISOString() }),
                                                }),
                                                (0, a.jsx)(b.Z, {}),
                                            ],
                                        }),
                                        (0, a.jsx)(m.Wrb, {
                                            label: "Metadata Ended At Date",
                                            value: o()(K),
                                            onSelect: (e) => H({ endedAt: e.toISOString() }),
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
