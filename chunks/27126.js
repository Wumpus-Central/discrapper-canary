a.d(t, { A: () => C });
var n = a(627968);
a(64700);
var l = a(989349),
    i = a.n(l),
    s = a(311907),
    r = a(554146),
    o = a(573613),
    d = a(834730),
    c = a(331322),
    u = a(691885),
    m = a(821609),
    h = a(582306),
    p = a(73153),
    x = a(528153),
    g = a(275759),
    v = a(21119),
    b = a(594061),
    _ = a(617617),
    f = a(287809),
    j = a(888429),
    A = a(505206);
function y(e) {
    let t = new Date(e);
    return (
        t.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }) +
        " " +
        t.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", hour12: !0 })
    );
}
function C() {
    let e = (0, s.bG)([g.Ay], () => g.Ay.getDevToolTotalFriendAnniversaries()),
        t = (0, s.bG)([g.Ay], () => g.Ay.getDevToolCurrentDate()),
        a = (0, s.bG)([g.Ay], () => g.Ay.getGiftUnreadNotificationLastDismissedTimes()),
        l = (0, s.bG)([g.Ay], () => g.Ay.getMessageGiftIntentLastShownMap()),
        C = (0, s.bG)([g.Ay], () => g.Ay.getHighestAffinityFriendAnniversaries()),
        E = (0, s.bG)([g.Ay], () => g.Ay.getHighAffinityFriendAnniversaries()),
        S = (0, s.bG)([g.Ay], () => g.Ay.getProfilePopoutGiftIntentsDismissMap()),
        N = (0, s.bG)([_.A], () => {
            let e =
                _.A.settings.userContent?.recurringDismissibleContentStates[r.M.GIFT_INTENT_MESSAGE]?.lastDismissedAtMs;
            if (null == e || "0" === e) return null;
            let t = Number(e);
            return Number.isNaN(t) ? null : t;
        }),
        k = (e) => {
            p.h.dispatch({ type: "DEV_TOOLS_SET_FRIEND_ANNIVERSARY_COUNT", total: e });
        },
        I = (e) => {
            let t = v.A.getUserAffinity(e);
            return t?.dmProbability != null ? `${(100 * t.dmProbability).toFixed(3)}%` : "N/A";
        };
    return (0, n.jsx)(o.Ip, {
        className: A.nd,
        children: (0, n.jsxs)("div", {
            className: j.l$,
            children: [
                (0, n.jsx)(d.E, { className: j.Iv, variant: "text-lg/bold", children: "Friend Anniversary" }),
                (0, n.jsx)("div", {
                    className: j.Pm,
                    children: (0, n.jsxs)(c.B, {
                        gap: 8,
                        direction: "horizontal",
                        style: { flex: 1 },
                        children: [
                            (0, n.jsx)(u.l, {
                                label: "Number of anniversaries to generate",
                                selectionMode: "single",
                                options: [
                                    { id: "none", label: "None", value: null },
                                    { id: "1", label: "1", value: 1 },
                                    { id: "2", label: "2", value: 2 },
                                    { id: "3", label: "3", value: 3 },
                                    { id: "4", label: "4", value: 4 },
                                    { id: "5", label: "5", value: 5 },
                                    { id: "10", label: "10", value: 10 },
                                    { id: "25", label: "25", value: 25 },
                                ],
                                value: e,
                                onSelectionChange: (e) => {
                                    k(e);
                                },
                            }),
                            (0, n.jsx)(m.$, {
                                size: "sm",
                                variant: "secondary",
                                text: "Clear",
                                onClick: () => {
                                    k(null);
                                },
                            }),
                        ],
                    }),
                }),
                null != e &&
                    (0, n.jsx)("div", {
                        className: j.Pm,
                        children: (0, n.jsxs)(c.B, {
                            gap: 8,
                            children: [
                                (0, n.jsx)(d.E, {
                                    variant: "text-xs/normal",
                                    children:
                                        "Affinity is the percent chance that User A will DM or GDM User B in the next 7 days.",
                                }),
                                (0, n.jsx)(d.E, {
                                    variant: "text-xs/normal",
                                    children:
                                        "The devtool automatically assigns users as high affinity regardless of actual affinity for testing.",
                                }),
                                C.length > 0 &&
                                    (0, n.jsxs)(c.B, {
                                        gap: 4,
                                        children: [
                                            (0, n.jsx)(d.E, {
                                                variant: "text-xs/semibold",
                                                children:
                                                    "Highest Affinity Friend Anniversaries (Eligible for Notification):",
                                            }),
                                            C.map((e) => {
                                                let t = f.default.getUser(e),
                                                    a = t?.username ?? `Unknown User (${e})`;
                                                return (0, n.jsxs)(
                                                    d.E,
                                                    { variant: "text-xs/normal", children: [a, " (", I(e), ")"] },
                                                    e,
                                                );
                                            }),
                                        ],
                                    }),
                                E.length > 0 &&
                                    (0, n.jsxs)(c.B, {
                                        gap: 4,
                                        children: [
                                            (0, n.jsx)(d.E, {
                                                variant: "text-xs/semibold",
                                                children: "High Affinity Friend Anniversaries:",
                                            }),
                                            E.map((e) => {
                                                let t = f.default.getUser(e),
                                                    a = t?.username ?? `Unknown User (${e})`;
                                                return (0, n.jsxs)(
                                                    d.E,
                                                    { variant: "text-xs/normal", children: [a, " (", I(e), ")"] },
                                                    e,
                                                );
                                            }),
                                        ],
                                    }),
                            ],
                        }),
                    }),
                (0, n.jsx)("div", {
                    className: j.Pm,
                    children: (0, n.jsxs)(c.B, {
                        gap: 8,
                        direction: "horizontal",
                        children: [
                            (0, n.jsx)(h.J, {
                                label: "Override current date used for cooldowns",
                                value: null != t ? i()(t) : void 0,
                                onSelect: (e) => {
                                    let t = i()(),
                                        a = e
                                            .clone()
                                            .hours(t.hours())
                                            .minutes(t.minutes())
                                            .seconds(t.seconds())
                                            .milliseconds(t.milliseconds());
                                    p.h.dispatch({ type: "DEV_TOOLS_SET_CURRENT_DATE", date: a.valueOf() });
                                },
                            }),
                            (0, n.jsx)(m.$, {
                                variant: "secondary",
                                size: "sm",
                                text: "Clear",
                                onClick: () => {
                                    p.h.dispatch({ type: "DEV_TOOLS_RESET_CURRENT_DATE" });
                                },
                            }),
                        ],
                    }),
                }),
                (0, n.jsx)("div", {
                    className: j.Pm,
                    children: (0, n.jsxs)(c.B, {
                        gap: 8,
                        children: [
                            (0, n.jsxs)(c.B, {
                                gap: 8,
                                direction: "horizontal",
                                children: [
                                    (0, n.jsx)(d.E, {
                                        variant: "text-md/normal",
                                        children: "Reset DCF gift intent cooldown (global, 24h)",
                                    }),
                                    (0, n.jsx)(m.$, {
                                        variant: "primary",
                                        size: "sm",
                                        text: "Reset",
                                        onClick: () => {
                                            (0, b._N)(r.M.GIFT_INTENT_MESSAGE);
                                        },
                                    }),
                                ],
                            }),
                            (0, n.jsx)(d.E, {
                                variant: "text-xs/normal",
                                children: null != N ? `Dismissed at: ${y(N)}` : "Not dismissed",
                            }),
                        ],
                    }),
                }),
                (0, n.jsx)("div", {
                    className: j.Pm,
                    children: (0, n.jsxs)(c.B, {
                        gap: 8,
                        children: [
                            (0, n.jsxs)(c.B, {
                                gap: 8,
                                direction: "horizontal",
                                children: [
                                    (0, n.jsx)(d.E, {
                                        variant: "text-md/normal",
                                        children: "Reset gift message cooldown (per-user, 14d)",
                                    }),
                                    (0, n.jsx)(m.$, {
                                        variant: "primary",
                                        size: "sm",
                                        text: "Reset",
                                        onClick: () => {
                                            p.h.dispatch({ type: "DEV_TOOLS_GIFT_MESSAGE_COOLDOWN_RESET" });
                                        },
                                    }),
                                ],
                            }),
                            Object.keys(l).length > 0 &&
                                (0, n.jsxs)(c.B, {
                                    gap: 4,
                                    children: [
                                        (0, n.jsx)(d.E, {
                                            variant: "text-xs/semibold",
                                            children: "Gift Message Intent Last Shown:",
                                        }),
                                        Object.entries(l).map((e) => {
                                            let [t, a] = e,
                                                l = f.default.getUser(t),
                                                i = l?.username ?? `Unknown User (${t})`;
                                            return (0, n.jsxs)(
                                                d.E,
                                                { variant: "text-xs/normal", children: [i, ": ", y(a)] },
                                                t,
                                            );
                                        }),
                                    ],
                                }),
                        ],
                    }),
                }),
                (0, n.jsx)("div", {
                    className: j.Pm,
                    children: (0, n.jsxs)(c.B, {
                        gap: 8,
                        children: [
                            (0, n.jsxs)(c.B, {
                                gap: 8,
                                direction: "horizontal",
                                children: [
                                    (0, n.jsx)(d.E, {
                                        variant: "text-md/normal",
                                        children: "Reset gift notification cooldown",
                                    }),
                                    (0, n.jsx)(m.$, {
                                        variant: "primary",
                                        size: "sm",
                                        text: "Reset",
                                        onClick: () => {
                                            p.h.dispatch({ type: "DEV_TOOLS_GIFT_UNREAD_NOTIFICATION_COOLDOWN_RESET" });
                                        },
                                    }),
                                ],
                            }),
                            a.length > 0 &&
                                (0, n.jsxs)(c.B, {
                                    gap: 4,
                                    children: [
                                        (0, n.jsx)(d.E, {
                                            variant: "text-xs/semibold",
                                            children: "Gift notification shown timestamps:",
                                        }),
                                        a.map((e, t) =>
                                            (0, n.jsx)(d.E, { variant: "text-xs/normal", children: y(e) }, t),
                                        ),
                                    ],
                                }),
                        ],
                    }),
                }),
                (0, n.jsxs)("div", {
                    className: j.Pm,
                    children: [
                        (0, n.jsx)(d.E, { variant: "text-md/normal", children: "Send gift notification" }),
                        (0, n.jsx)(m.$, {
                            variant: "primary",
                            size: "sm",
                            text: "Send",
                            onClick: () => {
                                x.A.sendGiftingNotificationIfEligible();
                            },
                        }),
                    ],
                }),
                (0, n.jsxs)("div", {
                    className: j.Pm,
                    children: [
                        (0, n.jsx)(d.E, {
                            variant: "text-md/normal",
                            children: "Clear last seen friend anniversaries in All Friends",
                        }),
                        (0, n.jsx)(m.$, {
                            variant: "primary",
                            size: "sm",
                            text: "Clear",
                            onClick: () => {
                                p.h.dispatch({ type: "DEV_TOOLS_FRIENDS_LIST_GIFT_INTENTS_SHOWN_RESET" });
                            },
                        }),
                    ],
                }),
                (0, n.jsx)("div", {
                    className: j.Pm,
                    children: (0, n.jsxs)(c.B, {
                        gap: 8,
                        children: [
                            (0, n.jsxs)(c.B, {
                                gap: 8,
                                direction: "horizontal",
                                children: [
                                    (0, n.jsx)(d.E, {
                                        variant: "text-md/normal",
                                        children: "Reset profile popout gift intents dismiss",
                                    }),
                                    (0, n.jsx)(m.$, {
                                        variant: "primary",
                                        size: "sm",
                                        text: "Reset",
                                        onClick: () => {
                                            p.h.dispatch({
                                                type: "DEV_TOOLS_PROFILE_POPOUT_GIFT_INTENTS_DISMISS_RESET",
                                            });
                                        },
                                    }),
                                ],
                            }),
                            Object.keys(S).length > 0 &&
                                (0, n.jsxs)(c.B, {
                                    gap: 4,
                                    children: [
                                        (0, n.jsx)(d.E, {
                                            variant: "text-xs/semibold",
                                            children: "Profile Popout Gift Intents Dismissed:",
                                        }),
                                        Object.entries(S).map((e) => {
                                            let [t, a] = e,
                                                l = f.default.getUser(t),
                                                i = l?.username ?? `Unknown User (${t})`;
                                            return (0, n.jsxs)(
                                                d.E,
                                                { variant: "text-xs/normal", children: [i, ": ", y(a)] },
                                                t,
                                            );
                                        }),
                                    ],
                                }),
                        ],
                    }),
                }),
            ],
        }),
    });
}
