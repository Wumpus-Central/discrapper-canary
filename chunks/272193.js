n.d(t, { Z: () => b }), n(388685);
var a = n(54381);
n(473749);
var r = n(913527),
    i = n.n(r),
    l = n(442837),
    s = n(481060),
    o = n(570140),
    c = n(666086),
    d = n(441623),
    u = n(752048),
    m = n(594174),
    p = n(555109),
    h = n(663618);
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
function b() {
    let e = (0, l.e7)([d.ZP], () => d.ZP.getDevToolTotalFriendAnniversaries()),
        t = (0, l.e7)([d.ZP], () => d.ZP.getDevToolCurrentDate()),
        n = (0, l.e7)([d.ZP], () => d.ZP.getGiftUnreadNotificationLastDismissedTimes()),
        r = (0, l.e7)([d.ZP], () => d.ZP.getMessageGiftIntentLastShownMap()),
        b = (0, l.e7)([d.ZP], () => d.ZP.getHighestAffinityFriendAnniversaries()),
        x = (0, l.e7)([d.ZP], () => d.ZP.getHighAffinityFriendAnniversaries()),
        g = (0, l.e7)([d.ZP], () => d.ZP.getProfilePopoutGiftIntentsDismissMap()),
        v = (e) => {
            o.Z.dispatch({
                type: "DEV_TOOLS_SET_FRIEND_ANNIVERSARY_COUNT",
                total: e,
            });
        },
        j = (e) => {
            let t = u.Z.getUserAffinity(e);
            return (null == t ? void 0 : t.dmProbability) != null
                ? "".concat((100 * t.dmProbability).toFixed(3), "%")
                : "N/A";
        };
    return (0, a.jsx)(s.zJl, {
        className: h.panel,
        children: (0, a.jsxs)("div", {
            className: p.panelInner,
            children: [
                (0, a.jsx)(s.Text, {
                    className: p.panelHeader,
                    variant: "text-lg/bold",
                    children: "Friend Anniversary",
                }),
                (0, a.jsx)("div", {
                    className: p.panelRow,
                    children: (0, a.jsxs)(s.Kqy, {
                        gap: 8,
                        direction: "horizontal",
                        style: { flex: 1 },
                        children: [
                            (0, a.jsx)(s.PhF, {
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
                        className: p.panelRow,
                        children: (0, a.jsxs)(s.Kqy, {
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
                                b.length > 0 &&
                                    (0, a.jsxs)(s.Kqy, {
                                        gap: 4,
                                        children: [
                                            (0, a.jsx)(s.Text, {
                                                variant: "text-xs/semibold",
                                                children:
                                                    "Highest Affinity Friend Anniversaries (Eligible for Notification):",
                                            }),
                                            b.map((e) => {
                                                var t;
                                                let n = m.default.getUser(e),
                                                    r =
                                                        null != (t = null == n ? void 0 : n.username)
                                                            ? t
                                                            : "Unknown User (".concat(e, ")");
                                                return (0, a.jsxs)(
                                                    s.Text,
                                                    {
                                                        variant: "text-xs/normal",
                                                        children: [r, " (", j(e), ")"],
                                                    },
                                                    e,
                                                );
                                            }),
                                        ],
                                    }),
                                x.length > 0 &&
                                    (0, a.jsxs)(s.Kqy, {
                                        gap: 4,
                                        children: [
                                            (0, a.jsx)(s.Text, {
                                                variant: "text-xs/semibold",
                                                children: "High Affinity Friend Anniversaries:",
                                            }),
                                            x.map((e) => {
                                                var t;
                                                let n = m.default.getUser(e),
                                                    r =
                                                        null != (t = null == n ? void 0 : n.username)
                                                            ? t
                                                            : "Unknown User (".concat(e, ")");
                                                return (0, a.jsxs)(
                                                    s.Text,
                                                    {
                                                        variant: "text-xs/normal",
                                                        children: [r, " (", j(e), ")"],
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
                    className: p.panelRow,
                    children: (0, a.jsxs)(s.Kqy, {
                        gap: 8,
                        direction: "horizontal",
                        children: [
                            (0, a.jsx)(s.Wrb, {
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
                                    o.Z.dispatch({
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
                                    o.Z.dispatch({ type: "DEV_TOOLS_RESET_CURRENT_DATE" });
                                },
                            }),
                        ],
                    }),
                }),
                (0, a.jsx)("div", {
                    className: p.panelRow,
                    children: (0, a.jsxs)(s.Kqy, {
                        gap: 8,
                        children: [
                            (0, a.jsxs)(s.Kqy, {
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
                                            o.Z.dispatch({ type: "DEV_TOOLS_GIFT_MESSAGE_COOLDOWN_RESET" });
                                        },
                                    }),
                                ],
                            }),
                            Object.keys(r).length > 0 &&
                                (0, a.jsxs)(s.Kqy, {
                                    gap: 4,
                                    children: [
                                        (0, a.jsx)(s.Text, {
                                            variant: "text-xs/semibold",
                                            children: "Gift Message Intent Last Shown:",
                                        }),
                                        Object.entries(r).map((e) => {
                                            var t;
                                            let [n, r] = e,
                                                i = m.default.getUser(n),
                                                l =
                                                    null != (t = null == i ? void 0 : i.username)
                                                        ? t
                                                        : "Unknown User (".concat(n, ")");
                                            return (0, a.jsxs)(
                                                s.Text,
                                                {
                                                    variant: "text-xs/normal",
                                                    children: [l, ": ", f(r)],
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
                    className: p.panelRow,
                    children: (0, a.jsxs)(s.Kqy, {
                        gap: 8,
                        children: [
                            (0, a.jsxs)(s.Kqy, {
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
                                            o.Z.dispatch({ type: "DEV_TOOLS_GIFT_UNREAD_NOTIFICATION_COOLDOWN_RESET" });
                                        },
                                    }),
                                ],
                            }),
                            n.length > 0 &&
                                (0, a.jsxs)(s.Kqy, {
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
                    className: p.panelRow,
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
                                c.Z.sendGiftingNotificationIfEligible();
                            },
                        }),
                    ],
                }),
                (0, a.jsxs)("div", {
                    className: p.panelRow,
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
                                o.Z.dispatch({ type: "DEV_TOOLS_FRIENDS_LIST_GIFT_INTENTS_SHOWN_RESET" });
                            },
                        }),
                    ],
                }),
                (0, a.jsx)("div", {
                    className: p.panelRow,
                    children: (0, a.jsxs)(s.Kqy, {
                        gap: 8,
                        children: [
                            (0, a.jsxs)(s.Kqy, {
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
                                            o.Z.dispatch({
                                                type: "DEV_TOOLS_PROFILE_POPOUT_GIFT_INTENTS_DISMISS_RESET",
                                            });
                                        },
                                    }),
                                ],
                            }),
                            Object.keys(g).length > 0 &&
                                (0, a.jsxs)(s.Kqy, {
                                    gap: 4,
                                    children: [
                                        (0, a.jsx)(s.Text, {
                                            variant: "text-xs/semibold",
                                            children: "Profile Popout Gift Intents Dismissed:",
                                        }),
                                        Object.entries(g).map((e) => {
                                            var t;
                                            let [n, r] = e,
                                                i = m.default.getUser(n),
                                                l =
                                                    null != (t = null == i ? void 0 : i.username)
                                                        ? t
                                                        : "Unknown User (".concat(n, ")");
                                            return (0, a.jsxs)(
                                                s.Text,
                                                {
                                                    variant: "text-xs/normal",
                                                    children: [l, ": ", f(r)],
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
