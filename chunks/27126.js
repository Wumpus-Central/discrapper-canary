n.d(t, { A: () => g });
var a = n(627968);
n(64700);
var s = n(989349),
    i = n.n(s),
    l = n(311907),
    r = n(397927),
    o = n(73153),
    d = n(528153),
    c = n(275759),
    u = n(21119),
    m = n(287809),
    h = n(105040),
    x = n(661251);
function p(e) {
    let t = new Date(e);
    return (
        t.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }) +
        " " +
        t.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", hour12: !0 })
    );
}
function g() {
    let e = (0, l.bG)([c.Ay], () => c.Ay.getDevToolTotalFriendAnniversaries()),
        t = (0, l.bG)([c.Ay], () => c.Ay.getDevToolCurrentDate()),
        n = (0, l.bG)([c.Ay], () => c.Ay.getGiftUnreadNotificationLastDismissedTimes()),
        s = (0, l.bG)([c.Ay], () => c.Ay.getMessageGiftIntentLastShownMap()),
        g = (0, l.bG)([c.Ay], () => c.Ay.getHighestAffinityFriendAnniversaries()),
        _ = (0, l.bG)([c.Ay], () => c.Ay.getHighAffinityFriendAnniversaries()),
        f = (0, l.bG)([c.Ay], () => c.Ay.getProfilePopoutGiftIntentsDismissMap()),
        v = (e) => {
            o.h.dispatch({ type: "DEV_TOOLS_SET_FRIEND_ANNIVERSARY_COUNT", total: e });
        },
        b = (e) => {
            let t = u.A.getUserAffinity(e);
            return t?.dmProbability != null ? `${(100 * t.dmProbability).toFixed(3)}%` : "N/A";
        };
    return (0, a.jsx)(r.IpV, {
        className: x.nd,
        children: (0, a.jsxs)("div", {
            className: h.l$,
            children: [
                (0, a.jsx)(r.Text, { className: h.Iv, variant: "text-lg/bold", children: "Friend Anniversary" }),
                (0, a.jsx)("div", {
                    className: h.Pm,
                    children: (0, a.jsxs)(r.BJc, {
                        gap: 8,
                        direction: "horizontal",
                        style: { flex: 1 },
                        children: [
                            (0, a.jsx)(r.l6P, {
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
                                    v(e);
                                },
                            }),
                            (0, a.jsx)(r.Button, {
                                size: "sm",
                                variant: "secondary",
                                text: "Clear",
                                onClick: () => {
                                    v(null);
                                },
                            }),
                        ],
                    }),
                }),
                null != e &&
                    (0, a.jsx)("div", {
                        className: h.Pm,
                        children: (0, a.jsxs)(r.BJc, {
                            gap: 8,
                            children: [
                                (0, a.jsx)(r.Text, {
                                    variant: "text-xs/normal",
                                    children:
                                        "Affinity is the percent chance that User A will DM or GDM User B in the next 7 days.",
                                }),
                                (0, a.jsx)(r.Text, {
                                    variant: "text-xs/normal",
                                    children:
                                        "The devtool automatically assigns users as high affinity regardless of actual affinity for testing.",
                                }),
                                g.length > 0 &&
                                    (0, a.jsxs)(r.BJc, {
                                        gap: 4,
                                        children: [
                                            (0, a.jsx)(r.Text, {
                                                variant: "text-xs/semibold",
                                                children:
                                                    "Highest Affinity Friend Anniversaries (Eligible for Notification):",
                                            }),
                                            g.map((e) => {
                                                let t = m.default.getUser(e),
                                                    n = t?.username ?? `Unknown User (${e})`;
                                                return (0, a.jsxs)(
                                                    r.Text,
                                                    { variant: "text-xs/normal", children: [n, " (", b(e), ")"] },
                                                    e,
                                                );
                                            }),
                                        ],
                                    }),
                                _.length > 0 &&
                                    (0, a.jsxs)(r.BJc, {
                                        gap: 4,
                                        children: [
                                            (0, a.jsx)(r.Text, {
                                                variant: "text-xs/semibold",
                                                children: "High Affinity Friend Anniversaries:",
                                            }),
                                            _.map((e) => {
                                                let t = m.default.getUser(e),
                                                    n = t?.username ?? `Unknown User (${e})`;
                                                return (0, a.jsxs)(
                                                    r.Text,
                                                    { variant: "text-xs/normal", children: [n, " (", b(e), ")"] },
                                                    e,
                                                );
                                            }),
                                        ],
                                    }),
                            ],
                        }),
                    }),
                (0, a.jsx)("div", {
                    className: h.Pm,
                    children: (0, a.jsxs)(r.BJc, {
                        gap: 8,
                        direction: "horizontal",
                        children: [
                            (0, a.jsx)(r.J3s, {
                                label: "Override current date used for cooldowns",
                                value: null != t ? i()(t) : void 0,
                                onSelect: (e) => {
                                    let t = i()(),
                                        n = e
                                            .clone()
                                            .hours(t.hours())
                                            .minutes(t.minutes())
                                            .seconds(t.seconds())
                                            .milliseconds(t.milliseconds());
                                    o.h.dispatch({ type: "DEV_TOOLS_SET_CURRENT_DATE", date: n.valueOf() });
                                },
                            }),
                            (0, a.jsx)(r.Button, {
                                variant: "secondary",
                                size: "sm",
                                text: "Clear",
                                onClick: () => {
                                    o.h.dispatch({ type: "DEV_TOOLS_RESET_CURRENT_DATE" });
                                },
                            }),
                        ],
                    }),
                }),
                (0, a.jsx)("div", {
                    className: h.Pm,
                    children: (0, a.jsxs)(r.BJc, {
                        gap: 8,
                        children: [
                            (0, a.jsxs)(r.BJc, {
                                gap: 8,
                                direction: "horizontal",
                                children: [
                                    (0, a.jsx)(r.Text, {
                                        variant: "text-md/normal",
                                        children: "Reset gift message cooldown",
                                    }),
                                    (0, a.jsx)(r.Button, {
                                        variant: "primary",
                                        size: "sm",
                                        text: "Reset",
                                        onClick: () => {
                                            o.h.dispatch({ type: "DEV_TOOLS_GIFT_MESSAGE_COOLDOWN_RESET" });
                                        },
                                    }),
                                ],
                            }),
                            Object.keys(s).length > 0 &&
                                (0, a.jsxs)(r.BJc, {
                                    gap: 4,
                                    children: [
                                        (0, a.jsx)(r.Text, {
                                            variant: "text-xs/semibold",
                                            children: "Gift Message Intent Last Shown:",
                                        }),
                                        Object.entries(s).map((e) => {
                                            let [t, n] = e,
                                                s = m.default.getUser(t),
                                                i = s?.username ?? `Unknown User (${t})`;
                                            return (0, a.jsxs)(
                                                r.Text,
                                                { variant: "text-xs/normal", children: [i, ": ", p(n)] },
                                                t,
                                            );
                                        }),
                                    ],
                                }),
                        ],
                    }),
                }),
                (0, a.jsx)("div", {
                    className: h.Pm,
                    children: (0, a.jsxs)(r.BJc, {
                        gap: 8,
                        children: [
                            (0, a.jsxs)(r.BJc, {
                                gap: 8,
                                direction: "horizontal",
                                children: [
                                    (0, a.jsx)(r.Text, {
                                        variant: "text-md/normal",
                                        children: "Reset gift notification cooldown",
                                    }),
                                    (0, a.jsx)(r.Button, {
                                        variant: "primary",
                                        size: "sm",
                                        text: "Reset",
                                        onClick: () => {
                                            o.h.dispatch({ type: "DEV_TOOLS_GIFT_UNREAD_NOTIFICATION_COOLDOWN_RESET" });
                                        },
                                    }),
                                ],
                            }),
                            n.length > 0 &&
                                (0, a.jsxs)(r.BJc, {
                                    gap: 4,
                                    children: [
                                        (0, a.jsx)(r.Text, {
                                            variant: "text-xs/semibold",
                                            children: "Gift notification shown timestamps:",
                                        }),
                                        n.map((e, t) =>
                                            (0, a.jsx)(r.Text, { variant: "text-xs/normal", children: p(e) }, t),
                                        ),
                                    ],
                                }),
                        ],
                    }),
                }),
                (0, a.jsxs)("div", {
                    className: h.Pm,
                    children: [
                        (0, a.jsx)(r.Text, { variant: "text-md/normal", children: "Send gift notification" }),
                        (0, a.jsx)(r.Button, {
                            variant: "primary",
                            size: "sm",
                            text: "Send",
                            onClick: () => {
                                d.A.sendGiftingNotificationIfEligible();
                            },
                        }),
                    ],
                }),
                (0, a.jsxs)("div", {
                    className: h.Pm,
                    children: [
                        (0, a.jsx)(r.Text, {
                            variant: "text-md/normal",
                            children: "Clear last seen friend anniversaries in All Friends",
                        }),
                        (0, a.jsx)(r.Button, {
                            variant: "primary",
                            size: "sm",
                            text: "Clear",
                            onClick: () => {
                                o.h.dispatch({ type: "DEV_TOOLS_FRIENDS_LIST_GIFT_INTENTS_SHOWN_RESET" });
                            },
                        }),
                    ],
                }),
                (0, a.jsx)("div", {
                    className: h.Pm,
                    children: (0, a.jsxs)(r.BJc, {
                        gap: 8,
                        children: [
                            (0, a.jsxs)(r.BJc, {
                                gap: 8,
                                direction: "horizontal",
                                children: [
                                    (0, a.jsx)(r.Text, {
                                        variant: "text-md/normal",
                                        children: "Reset profile popout gift intents dismiss",
                                    }),
                                    (0, a.jsx)(r.Button, {
                                        variant: "primary",
                                        size: "sm",
                                        text: "Reset",
                                        onClick: () => {
                                            o.h.dispatch({
                                                type: "DEV_TOOLS_PROFILE_POPOUT_GIFT_INTENTS_DISMISS_RESET",
                                            });
                                        },
                                    }),
                                ],
                            }),
                            Object.keys(f).length > 0 &&
                                (0, a.jsxs)(r.BJc, {
                                    gap: 4,
                                    children: [
                                        (0, a.jsx)(r.Text, {
                                            variant: "text-xs/semibold",
                                            children: "Profile Popout Gift Intents Dismissed:",
                                        }),
                                        Object.entries(f).map((e) => {
                                            let [t, n] = e,
                                                s = m.default.getUser(t),
                                                i = s?.username ?? `Unknown User (${t})`;
                                            return (0, a.jsxs)(
                                                r.Text,
                                                { variant: "text-xs/normal", children: [i, ": ", p(n)] },
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
