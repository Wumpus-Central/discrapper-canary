n.d(t, { A: () => v });
var a = n(627968);
n(64700);
var i = n(989349),
    s = n.n(i),
    l = n(311907),
    r = n(554146),
    o = n(397927),
    d = n(73153),
    c = n(528153),
    u = n(275759),
    m = n(21119),
    h = n(594061),
    x = n(617617),
    p = n(287809),
    g = n(105040),
    _ = n(661251);
function f(e) {
    let t = new Date(e);
    return (
        t.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }) +
        " " +
        t.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", hour12: !0 })
    );
}
function v() {
    let e = (0, l.bG)([u.Ay], () => u.Ay.getDevToolTotalFriendAnniversaries()),
        t = (0, l.bG)([u.Ay], () => u.Ay.getDevToolCurrentDate()),
        n = (0, l.bG)([u.Ay], () => u.Ay.getGiftUnreadNotificationLastDismissedTimes()),
        i = (0, l.bG)([u.Ay], () => u.Ay.getMessageGiftIntentLastShownMap()),
        v = (0, l.bG)([u.Ay], () => u.Ay.getHighestAffinityFriendAnniversaries()),
        b = (0, l.bG)([u.Ay], () => u.Ay.getHighAffinityFriendAnniversaries()),
        j = (0, l.bG)([u.Ay], () => u.Ay.getProfilePopoutGiftIntentsDismissMap()),
        A = (0, l.bG)([x.A], () => {
            let e =
                x.A.settings.userContent?.recurringDismissibleContentStates[r.M.GIFT_INTENT_MESSAGE]?.lastDismissedAtMs;
            if (null == e || "0" === e) return null;
            let t = Number(e);
            return Number.isNaN(t) ? null : t;
        }),
        C = (e) => {
            d.h.dispatch({ type: "DEV_TOOLS_SET_FRIEND_ANNIVERSARY_COUNT", total: e });
        },
        y = (e) => {
            let t = m.A.getUserAffinity(e);
            return t?.dmProbability != null ? `${(100 * t.dmProbability).toFixed(3)}%` : "N/A";
        };
    return (0, a.jsx)(o.IpV, {
        className: _.nd,
        children: (0, a.jsxs)("div", {
            className: g.l$,
            children: [
                (0, a.jsx)(o.Text, { className: g.Iv, variant: "text-lg/bold", children: "Friend Anniversary" }),
                (0, a.jsx)("div", {
                    className: g.Pm,
                    children: (0, a.jsxs)(o.BJc, {
                        gap: 8,
                        direction: "horizontal",
                        style: { flex: 1 },
                        children: [
                            (0, a.jsx)(o.l6P, {
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
                                    C(e);
                                },
                            }),
                            (0, a.jsx)(o.Button, {
                                size: "sm",
                                variant: "secondary",
                                text: "Clear",
                                onClick: () => {
                                    C(null);
                                },
                            }),
                        ],
                    }),
                }),
                null != e &&
                    (0, a.jsx)("div", {
                        className: g.Pm,
                        children: (0, a.jsxs)(o.BJc, {
                            gap: 8,
                            children: [
                                (0, a.jsx)(o.Text, {
                                    variant: "text-xs/normal",
                                    children:
                                        "Affinity is the percent chance that User A will DM or GDM User B in the next 7 days.",
                                }),
                                (0, a.jsx)(o.Text, {
                                    variant: "text-xs/normal",
                                    children:
                                        "The devtool automatically assigns users as high affinity regardless of actual affinity for testing.",
                                }),
                                v.length > 0 &&
                                    (0, a.jsxs)(o.BJc, {
                                        gap: 4,
                                        children: [
                                            (0, a.jsx)(o.Text, {
                                                variant: "text-xs/semibold",
                                                children:
                                                    "Highest Affinity Friend Anniversaries (Eligible for Notification):",
                                            }),
                                            v.map((e) => {
                                                let t = p.default.getUser(e),
                                                    n = t?.username ?? `Unknown User (${e})`;
                                                return (0, a.jsxs)(
                                                    o.Text,
                                                    { variant: "text-xs/normal", children: [n, " (", y(e), ")"] },
                                                    e,
                                                );
                                            }),
                                        ],
                                    }),
                                b.length > 0 &&
                                    (0, a.jsxs)(o.BJc, {
                                        gap: 4,
                                        children: [
                                            (0, a.jsx)(o.Text, {
                                                variant: "text-xs/semibold",
                                                children: "High Affinity Friend Anniversaries:",
                                            }),
                                            b.map((e) => {
                                                let t = p.default.getUser(e),
                                                    n = t?.username ?? `Unknown User (${e})`;
                                                return (0, a.jsxs)(
                                                    o.Text,
                                                    { variant: "text-xs/normal", children: [n, " (", y(e), ")"] },
                                                    e,
                                                );
                                            }),
                                        ],
                                    }),
                            ],
                        }),
                    }),
                (0, a.jsx)("div", {
                    className: g.Pm,
                    children: (0, a.jsxs)(o.BJc, {
                        gap: 8,
                        direction: "horizontal",
                        children: [
                            (0, a.jsx)(o.J3s, {
                                label: "Override current date used for cooldowns",
                                value: null != t ? s()(t) : void 0,
                                onSelect: (e) => {
                                    let t = s()(),
                                        n = e
                                            .clone()
                                            .hours(t.hours())
                                            .minutes(t.minutes())
                                            .seconds(t.seconds())
                                            .milliseconds(t.milliseconds());
                                    d.h.dispatch({ type: "DEV_TOOLS_SET_CURRENT_DATE", date: n.valueOf() });
                                },
                            }),
                            (0, a.jsx)(o.Button, {
                                variant: "secondary",
                                size: "sm",
                                text: "Clear",
                                onClick: () => {
                                    d.h.dispatch({ type: "DEV_TOOLS_RESET_CURRENT_DATE" });
                                },
                            }),
                        ],
                    }),
                }),
                (0, a.jsx)("div", {
                    className: g.Pm,
                    children: (0, a.jsxs)(o.BJc, {
                        gap: 8,
                        children: [
                            (0, a.jsxs)(o.BJc, {
                                gap: 8,
                                direction: "horizontal",
                                children: [
                                    (0, a.jsx)(o.Text, {
                                        variant: "text-md/normal",
                                        children: "Reset DCF gift intent cooldown (global, 24h)",
                                    }),
                                    (0, a.jsx)(o.Button, {
                                        variant: "primary",
                                        size: "sm",
                                        text: "Reset",
                                        onClick: () => {
                                            (0, h._N)(r.M.GIFT_INTENT_MESSAGE);
                                        },
                                    }),
                                ],
                            }),
                            (0, a.jsx)(o.Text, {
                                variant: "text-xs/normal",
                                children: null != A ? `Dismissed at: ${f(A)}` : "Not dismissed",
                            }),
                        ],
                    }),
                }),
                (0, a.jsx)("div", {
                    className: g.Pm,
                    children: (0, a.jsxs)(o.BJc, {
                        gap: 8,
                        children: [
                            (0, a.jsxs)(o.BJc, {
                                gap: 8,
                                direction: "horizontal",
                                children: [
                                    (0, a.jsx)(o.Text, {
                                        variant: "text-md/normal",
                                        children: "Reset gift message cooldown (per-user, 14d)",
                                    }),
                                    (0, a.jsx)(o.Button, {
                                        variant: "primary",
                                        size: "sm",
                                        text: "Reset",
                                        onClick: () => {
                                            d.h.dispatch({ type: "DEV_TOOLS_GIFT_MESSAGE_COOLDOWN_RESET" });
                                        },
                                    }),
                                ],
                            }),
                            Object.keys(i).length > 0 &&
                                (0, a.jsxs)(o.BJc, {
                                    gap: 4,
                                    children: [
                                        (0, a.jsx)(o.Text, {
                                            variant: "text-xs/semibold",
                                            children: "Gift Message Intent Last Shown:",
                                        }),
                                        Object.entries(i).map((e) => {
                                            let [t, n] = e,
                                                i = p.default.getUser(t),
                                                s = i?.username ?? `Unknown User (${t})`;
                                            return (0, a.jsxs)(
                                                o.Text,
                                                { variant: "text-xs/normal", children: [s, ": ", f(n)] },
                                                t,
                                            );
                                        }),
                                    ],
                                }),
                        ],
                    }),
                }),
                (0, a.jsx)("div", {
                    className: g.Pm,
                    children: (0, a.jsxs)(o.BJc, {
                        gap: 8,
                        children: [
                            (0, a.jsxs)(o.BJc, {
                                gap: 8,
                                direction: "horizontal",
                                children: [
                                    (0, a.jsx)(o.Text, {
                                        variant: "text-md/normal",
                                        children: "Reset gift notification cooldown",
                                    }),
                                    (0, a.jsx)(o.Button, {
                                        variant: "primary",
                                        size: "sm",
                                        text: "Reset",
                                        onClick: () => {
                                            d.h.dispatch({ type: "DEV_TOOLS_GIFT_UNREAD_NOTIFICATION_COOLDOWN_RESET" });
                                        },
                                    }),
                                ],
                            }),
                            n.length > 0 &&
                                (0, a.jsxs)(o.BJc, {
                                    gap: 4,
                                    children: [
                                        (0, a.jsx)(o.Text, {
                                            variant: "text-xs/semibold",
                                            children: "Gift notification shown timestamps:",
                                        }),
                                        n.map((e, t) =>
                                            (0, a.jsx)(o.Text, { variant: "text-xs/normal", children: f(e) }, t),
                                        ),
                                    ],
                                }),
                        ],
                    }),
                }),
                (0, a.jsxs)("div", {
                    className: g.Pm,
                    children: [
                        (0, a.jsx)(o.Text, { variant: "text-md/normal", children: "Send gift notification" }),
                        (0, a.jsx)(o.Button, {
                            variant: "primary",
                            size: "sm",
                            text: "Send",
                            onClick: () => {
                                c.A.sendGiftingNotificationIfEligible();
                            },
                        }),
                    ],
                }),
                (0, a.jsxs)("div", {
                    className: g.Pm,
                    children: [
                        (0, a.jsx)(o.Text, {
                            variant: "text-md/normal",
                            children: "Clear last seen friend anniversaries in All Friends",
                        }),
                        (0, a.jsx)(o.Button, {
                            variant: "primary",
                            size: "sm",
                            text: "Clear",
                            onClick: () => {
                                d.h.dispatch({ type: "DEV_TOOLS_FRIENDS_LIST_GIFT_INTENTS_SHOWN_RESET" });
                            },
                        }),
                    ],
                }),
                (0, a.jsx)("div", {
                    className: g.Pm,
                    children: (0, a.jsxs)(o.BJc, {
                        gap: 8,
                        children: [
                            (0, a.jsxs)(o.BJc, {
                                gap: 8,
                                direction: "horizontal",
                                children: [
                                    (0, a.jsx)(o.Text, {
                                        variant: "text-md/normal",
                                        children: "Reset profile popout gift intents dismiss",
                                    }),
                                    (0, a.jsx)(o.Button, {
                                        variant: "primary",
                                        size: "sm",
                                        text: "Reset",
                                        onClick: () => {
                                            d.h.dispatch({
                                                type: "DEV_TOOLS_PROFILE_POPOUT_GIFT_INTENTS_DISMISS_RESET",
                                            });
                                        },
                                    }),
                                ],
                            }),
                            Object.keys(j).length > 0 &&
                                (0, a.jsxs)(o.BJc, {
                                    gap: 4,
                                    children: [
                                        (0, a.jsx)(o.Text, {
                                            variant: "text-xs/semibold",
                                            children: "Profile Popout Gift Intents Dismissed:",
                                        }),
                                        Object.entries(j).map((e) => {
                                            let [t, n] = e,
                                                i = p.default.getUser(t),
                                                s = i?.username ?? `Unknown User (${t})`;
                                            return (0, a.jsxs)(
                                                o.Text,
                                                { variant: "text-xs/normal", children: [s, ": ", f(n)] },
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
