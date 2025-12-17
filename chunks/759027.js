n.d(t, { Z: () => w }), n(388685), n(35282), n(539854);
var a = n(54381),
    r = n(473749),
    l = n(120356),
    i = n.n(l),
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
    T = {
        [j.Id.UNKNOWN]: "Unknown",
        [j.Id.ADMIN]: "Admin",
        [j.Id.USER]: "User",
        [j.Id.FRACTIONAL_PREMIUM]: "Fractional Premium",
        [j.Id.DEFERRED_START]: "Deferred Start",
        [j.Id.USER_TEMPORARY_BAN]: "User Temp Ban",
    },
    O = [
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
    let { subscription: t, onClose: n, onUpdated: l, transitionState: i } = e,
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
                    l(),
                    n();
            } catch (e) {
                var i;
                b((null == (i = e.body) ? void 0 : i.message) || e.message || "Failed to time travel");
            } finally {
                f(!1);
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
function w(e) {
    var t, n, l, s, c, j, w;
    let { subscription: P, onUpdated: I } = e,
        [k, R] = r.useState(!1),
        [A, Z] = r.useState(!1),
        [D, L] = r.useState(!1),
        [M, U] = r.useState(!1),
        [B, F] = r.useState(null),
        [G, V] = r.useState(""),
        H = (e) => ((null == e && (e = P.status), e in E) ? E[e] : "Unknown status ".concat(e)),
        z = (e) => {
            let t = new Date(e);
            return f.default.fromTimestamp(t.getTime());
        },
        W = async (e) => {
            let { status: t = P.status, premiumStreakStart: n, endedAt: a } = e,
                r = S(
                    { subscription_status: t },
                    null != n ? { premium_streak_started_at: z(n) } : null,
                    null != a ? { ended_at: z(a) } : null,
                );
            await d.tn.patch({
                url: "/debug/subscriptions/".concat(P.id),
                body: r,
                rejectWithError: !1,
            }),
                I();
        },
        K = async () => {
            try {
                await g.vc(P.id, g.cN.RENEW, {
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
        q = async (e) => {
            let { accepted: t } = e;
            try {
                await d.tn.post({
                    url: "/debug/subscriptions/".concat(P.id, "/members/").concat(G),
                    body: S({}, t ? { accepted: !0 } : {}),
                    rejectWithError: !1,
                }),
                    V("");
            } catch (e) {
                var n;
                F((null == (n = e.body) ? void 0 : n.message) || e.message || "Failed to add user to group");
            }
        },
        Y = async () => {
            try {
                await d.tn.del({
                    url: "/debug/subscriptions/".concat(P.id, "/members/").concat(G),
                    rejectWithError: !1,
                }),
                    V("");
            } catch (t) {
                var e;
                F((null == (e = t.body) ? void 0 : e.message) || t.message || "Failed to remove user from group");
            }
        },
        Q = (null == (t = y.GP[P.planIdFromItems]) ? void 0 : t.premiumType) === y.PremiumTypes.TIER_0,
        X = null == (n = P.metadata) ? void 0 : n.ended_at,
        J = null != X ? new Date(X).toISOString().substring(0, 10) : "",
        $ = [
            {
                id: "id",
                label: "ID: ".concat(P.id),
                isDisabled: !1,
            },
            {
                id: "status",
                label: "Status: ".concat(H()),
                isDisabled: !1,
            },
        ],
        ee = P.hasActiveTrial,
        et = (null == (l = P.metadata) ? void 0 : l.active_discount_id) != null;
    return (
        ee &&
            $.push({
                id: "trial",
                label: "Has Trial",
                isDisabled: !1,
            }),
        et &&
            $.push({
                id: "active-discount",
                label: "Has Active Discount",
                isDisabled: !1,
            }),
        P.status !== v.O0b.ACTIVE &&
            $.push({
                id: "dates",
                label: "Dates: "
                    .concat((0, h.vc)(P.createdAt, "LL"), " - ")
                    .concat((0, h.vc)(P.currentPeriodEnd, "LL")),
                isDisabled: !1,
            }),
        P.status === v.O0b.PAUSED &&
            $.push({
                id: "pause-reason",
                label: "Pause Reason: ".concat(
                    P.pauseReason in T ? T[P.pauseReason] : "Unknown pause reason ".concat(P.pauseReason),
                ),
                isDisabled: !1,
            }),
        (0, a.jsx)("div", {
            className: i()(C.card, Q ? C.gradientWrapperTier0 : C.gradientWrapperTier2),
            children: (0, a.jsxs)(m.C3N, {
                label: "Type: ".concat(
                    (() => {
                        let e = P.planIdFromItems;
                        return null == e ? "No plan id" : e in y.GP ? y.GP[e].name : "Unknown plan id ".concat(e);
                    })(),
                ),
                className: _.fieldset,
                children: [
                    (0, a.jsx)(m.QSK, {
                        items: $,
                        label: "Tags",
                        selectionMode: "none",
                        selectionBehavior: "replace",
                        disabledKeys: new Set(),
                    }),
                    ee &&
                        (0, a.jsxs)("div", {
                            className: _.collapsablePane,
                            children: [
                                (0, a.jsxs)(m.P3F, {
                                    onClick: () => {
                                        L(!D);
                                    },
                                    className: _.collapsablePaneHeader,
                                    children: [
                                        (0, a.jsx)("div", {
                                            children: (0, a.jsx)(m.Text, {
                                                variant: "text-md/bold",
                                                children: "Trial Info",
                                            }),
                                        }),
                                        (0, a.jsx)(p.Z, { direction: D ? p.Z.Directions.UP : p.Z.Directions.DOWN }),
                                    ],
                                }),
                                D &&
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
                                                        children: P.trialId,
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
                                                            null != P.trialEndsAt
                                                                ? (0, h.vc)(P.trialEndsAt, "LL")
                                                                : "N/A",
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                            ],
                        }),
                    et &&
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
                                                            null == (s = P.metadata) ? void 0 : s.active_discount_id,
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
                                                            (null == (c = P.metadata)
                                                                ? void 0
                                                                : c.active_discount_expires_at) != null
                                                                ? (0, h.vc)(
                                                                      new Date(
                                                                          null == (j = P.metadata)
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
                    null != P.metadata &&
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
                                        children: Object.entries(P.metadata).map((e) => {
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
                                    Z(!A);
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
                                            serialize: (e) => H(e),
                                            isSelected: (e) => e === P.status,
                                            options: O,
                                            select: (e) => W({ status: e }),
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
                                                            onClick: (e) => K(),
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
                                                        null == (w = P.premiumSince)
                                                            ? void 0
                                                            : w.toISOString().substring(0, 10),
                                                    ),
                                                    onSelect: (e) => W({ premiumStreakStart: e.toISOString() }),
                                                }),
                                                (0, a.jsx)(b.Z, {}),
                                            ],
                                        }),
                                        (0, a.jsx)(m.Wrb, {
                                            label: "Metadata Ended At Date",
                                            value: o()(J),
                                            onSelect: (e) => W({ endedAt: e.toISOString() }),
                                        }),
                                        (null == P ? void 0 : P.planIdFromItems) === y.Xh.PREMIUM_GROUP_MONTH &&
                                            (0, a.jsxs)(m.Kqy, {
                                                gap: 8,
                                                children: [
                                                    (0, a.jsx)(m.oil, {
                                                        label: "Subscription Group Member User ID",
                                                        value: G,
                                                        onChange: V,
                                                    }),
                                                    (0, a.jsxs)(m.Kqy, {
                                                        gap: 8,
                                                        direction: "horizontal",
                                                        children: [
                                                            (0, a.jsx)(m.Button, {
                                                                variant: "primary",
                                                                size: "sm",
                                                                text: "Add",
                                                                onClick: () => q({ accepted: !0 }),
                                                                disabled: "" === G,
                                                            }),
                                                            (0, a.jsx)(m.Button, {
                                                                variant: "secondary",
                                                                size: "sm",
                                                                text: "Remove",
                                                                onClick: () => Y(),
                                                                disabled: "" === G,
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
