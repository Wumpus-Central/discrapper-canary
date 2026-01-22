n.d(t, {
    A: () => x,
}),
    n(896048);
var a = n(627968);
n(64700);
var l = n(989349),
    i = n.n(l),
    r = n(311907),
    s = n(397927),
    o = n(73153),
    c = n(528153),
    d = n(275759),
    u = n(21119),
    m = n(287809),
    p = n(105040),
    h = n(661251);

function f(e) {
    let t = new Date(e);
    return (
        t.toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
        }) +
        " " +
        t.toLocaleTimeString("en-US", {
            hour: "numeric",
            minute: "2-digit",
            hour12: !0,
        })
    );
}

function x() {
    let e = (0, r.bG)([d.Ay], () => d.Ay.getDevToolTotalFriendAnniversaries()),
        t = (0, r.bG)([d.Ay], () => d.Ay.getDevToolCurrentDate()),
        n = (0, r.bG)([d.Ay], () => d.Ay.getGiftUnreadNotificationLastDismissedTimes()),
        l = (0, r.bG)([d.Ay], () => d.Ay.getMessageGiftIntentLastShownMap()),
        x = (0, r.bG)([d.Ay], () => d.Ay.getHighestAffinityFriendAnniversaries()),
        b = (0, r.bG)([d.Ay], () => d.Ay.getHighAffinityFriendAnniversaries()),
        g = (0, r.bG)([d.Ay], () => d.Ay.getProfilePopoutGiftIntentsDismissMap()),
        v = (e) => {
            o.h.dispatch({
                type: "DEV_TOOLS_SET_FRIEND_ANNIVERSARY_COUNT",
                total: e,
            });
        },
        j = (e) => {
            let t = u.A.getUserAffinity(e);
            return (null == t ? void 0 : t.dmProbability) != null
                ? "".concat((100 * t.dmProbability).toFixed(3), "%")
                : "N/A";
        };
    return (0, a.jsx)(s.IpV, {
        className: h.nd,
        children: (0, a.jsxs)("div", {
            className: p.l$,
            children: [
                (0, a.jsx)(s.Text, {
                    className: p.Iv,
                    variant: "text-lg/bold",
                    children: "Friend Anniversary",
                }),
                (0, a.jsx)("div", {
                    className: p.Pm,
                    children: (0, a.jsxs)(s.BJc, {
                        gap: 8,
                        direction: "horizontal",
                        style: {
                            flex: 1,
                        },
                        children: [
                            (0, a.jsx)(s.l6P, {
                                label: "Number of anniversaries to generate",
                                selectionMode: "single",
                                options: [
                                    {
                                        id: "none",
                                        label: "None",
                                        value: null,
                                    },
                                    {
                                        id: "1",
                                        label: "1",
                                        value: 1,
                                    },
                                    {
                                        id: "2",
                                        label: "2",
                                        value: 2,
                                    },
                                    {
                                        id: "3",
                                        label: "3",
                                        value: 3,
                                    },
                                    {
                                        id: "4",
                                        label: "4",
                                        value: 4,
                                    },
                                    {
                                        id: "5",
                                        label: "5",
                                        value: 5,
                                    },
                                    {
                                        id: "10",
                                        label: "10",
                                        value: 10,
                                    },
                                    {
                                        id: "25",
                                        label: "25",
                                        value: 25,
                                    },
                                ],
                                value: e,
                                onSelectionChange: (e) => {
                                    v(e);
                                },
                            }),
                            (0, a.jsx)(s.Button, {
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
                        className: p.Pm,
                        children: (0, a.jsxs)(s.BJc, {
                            gap: 8,
                            children: [
                                (0, a.jsx)(s.Text, {
                                    variant: "text-xs/normal",
                                    children:
                                        "Affinity is the percent chance that User A will DM or GDM User B in the next 7 days.",
                                }),
                                (0, a.jsx)(s.Text, {
                                    variant: "text-xs/normal",
                                    children:
                                        "The devtool automatically assigns users as high affinity regardless of actual affinity for testing.",
                                }),
                                x.length > 0 &&
                                    (0, a.jsxs)(s.BJc, {
                                        gap: 4,
                                        children: [
                                            (0, a.jsx)(s.Text, {
                                                variant: "text-xs/semibold",
                                                children:
                                                    "Highest Affinity Friend Anniversaries (Eligible for Notification):",
                                            }),
                                            x.map((e) => {
                                                var t;
                                                let n = m.default.getUser(e),
                                                    l =
                                                        null != (t = null == n ? void 0 : n.username)
                                                            ? t
                                                            : "Unknown User (".concat(e, ")");
                                                return (0, a.jsxs)(
                                                    s.Text,
                                                    {
                                                        variant: "text-xs/normal",
                                                        children: [l, " (", j(e), ")"],
                                                    },
                                                    e,
                                                );
                                            }),
                                        ],
                                    }),
                                b.length > 0 &&
                                    (0, a.jsxs)(s.BJc, {
                                        gap: 4,
                                        children: [
                                            (0, a.jsx)(s.Text, {
                                                variant: "text-xs/semibold",
                                                children: "High Affinity Friend Anniversaries:",
                                            }),
                                            b.map((e) => {
                                                var t;
                                                let n = m.default.getUser(e),
                                                    l =
                                                        null != (t = null == n ? void 0 : n.username)
                                                            ? t
                                                            : "Unknown User (".concat(e, ")");
                                                return (0, a.jsxs)(
                                                    s.Text,
                                                    {
                                                        variant: "text-xs/normal",
                                                        children: [l, " (", j(e), ")"],
                                                    },
                                                    e,
                                                );
                                            }),
                                        ],
                                    }),
                            ],
                        }),
                    }),
                (0, a.jsx)("div", {
                    className: p.Pm,
                    children: (0, a.jsxs)(s.BJc, {
                        gap: 8,
                        direction: "horizontal",
                        children: [
                            (0, a.jsx)(s.J3s, {
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
                                    o.h.dispatch({
                                        type: "DEV_TOOLS_SET_CURRENT_DATE",
                                        date: n.valueOf(),
                                    });
                                },
                            }),
                            (0, a.jsx)(s.Button, {
                                variant: "secondary",
                                size: "sm",
                                text: "Clear",
                                onClick: () => {
                                    o.h.dispatch({
                                        type: "DEV_TOOLS_RESET_CURRENT_DATE",
                                    });
                                },
                            }),
                        ],
                    }),
                }),
                (0, a.jsx)("div", {
                    className: p.Pm,
                    children: (0, a.jsxs)(s.BJc, {
                        gap: 8,
                        children: [
                            (0, a.jsxs)(s.BJc, {
                                gap: 8,
                                direction: "horizontal",
                                children: [
                                    (0, a.jsx)(s.Text, {
                                        variant: "text-md/normal",
                                        children: "Reset gift message cooldown",
                                    }),
                                    (0, a.jsx)(s.Button, {
                                        variant: "primary",
                                        size: "sm",
                                        text: "Reset",
                                        onClick: () => {
                                            o.h.dispatch({
                                                type: "DEV_TOOLS_GIFT_MESSAGE_COOLDOWN_RESET",
                                            });
                                        },
                                    }),
                                ],
                            }),
                            Object.keys(l).length > 0 &&
                                (0, a.jsxs)(s.BJc, {
                                    gap: 4,
                                    children: [
                                        (0, a.jsx)(s.Text, {
                                            variant: "text-xs/semibold",
                                            children: "Gift Message Intent Last Shown:",
                                        }),
                                        Object.entries(l).map((e) => {
                                            var t;
                                            let [n, l] = e,
                                                i = m.default.getUser(n),
                                                r =
                                                    null != (t = null == i ? void 0 : i.username)
                                                        ? t
                                                        : "Unknown User (".concat(n, ")");
                                            return (0, a.jsxs)(
                                                s.Text,
                                                {
                                                    variant: "text-xs/normal",
                                                    children: [r, ": ", f(l)],
                                                },
                                                n,
                                            );
                                        }),
                                    ],
                                }),
                        ],
                    }),
                }),
                (0, a.jsx)("div", {
                    className: p.Pm,
                    children: (0, a.jsxs)(s.BJc, {
                        gap: 8,
                        children: [
                            (0, a.jsxs)(s.BJc, {
                                gap: 8,
                                direction: "horizontal",
                                children: [
                                    (0, a.jsx)(s.Text, {
                                        variant: "text-md/normal",
                                        children: "Reset gift notification cooldown",
                                    }),
                                    (0, a.jsx)(s.Button, {
                                        variant: "primary",
                                        size: "sm",
                                        text: "Reset",
                                        onClick: () => {
                                            o.h.dispatch({
                                                type: "DEV_TOOLS_GIFT_UNREAD_NOTIFICATION_COOLDOWN_RESET",
                                            });
                                        },
                                    }),
                                ],
                            }),
                            n.length > 0 &&
                                (0, a.jsxs)(s.BJc, {
                                    gap: 4,
                                    children: [
                                        (0, a.jsx)(s.Text, {
                                            variant: "text-xs/semibold",
                                            children: "Gift notification shown timestamps:",
                                        }),
                                        n.map((e, t) =>
                                            (0, a.jsx)(
                                                s.Text,
                                                {
                                                    variant: "text-xs/normal",
                                                    children: f(e),
                                                },
                                                t,
                                            ),
                                        ),
                                    ],
                                }),
                        ],
                    }),
                }),
                (0, a.jsxs)("div", {
                    className: p.Pm,
                    children: [
                        (0, a.jsx)(s.Text, {
                            variant: "text-md/normal",
                            children: "Send gift notification",
                        }),
                        (0, a.jsx)(s.Button, {
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
                    className: p.Pm,
                    children: [
                        (0, a.jsx)(s.Text, {
                            variant: "text-md/normal",
                            children: "Clear last seen friend anniversaries in All Friends",
                        }),
                        (0, a.jsx)(s.Button, {
                            variant: "primary",
                            size: "sm",
                            text: "Clear",
                            onClick: () => {
                                o.h.dispatch({
                                    type: "DEV_TOOLS_FRIENDS_LIST_GIFT_INTENTS_SHOWN_RESET",
                                });
                            },
                        }),
                    ],
                }),
                (0, a.jsx)("div", {
                    className: p.Pm,
                    children: (0, a.jsxs)(s.BJc, {
                        gap: 8,
                        children: [
                            (0, a.jsxs)(s.BJc, {
                                gap: 8,
                                direction: "horizontal",
                                children: [
                                    (0, a.jsx)(s.Text, {
                                        variant: "text-md/normal",
                                        children: "Reset profile popout gift intents dismiss",
                                    }),
                                    (0, a.jsx)(s.Button, {
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
                            Object.keys(g).length > 0 &&
                                (0, a.jsxs)(s.BJc, {
                                    gap: 4,
                                    children: [
                                        (0, a.jsx)(s.Text, {
                                            variant: "text-xs/semibold",
                                            children: "Profile Popout Gift Intents Dismissed:",
                                        }),
                                        Object.entries(g).map((e) => {
                                            var t;
                                            let [n, l] = e,
                                                i = m.default.getUser(n),
                                                r =
                                                    null != (t = null == i ? void 0 : i.username)
                                                        ? t
                                                        : "Unknown User (".concat(n, ")");
                                            return (0, a.jsxs)(
                                                s.Text,
                                                {
                                                    variant: "text-xs/normal",
                                                    children: [r, ": ", f(l)],
                                                },
                                                n,
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
