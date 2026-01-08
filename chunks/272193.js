n.d(t, { Z: () => g }), n(388685);
var a = n(54381);
n(473749);
var r = n(913527),
    i = n.n(r),
    l = n(442837),
    s = n(199849),
    o = n(481060),
    c = n(570140),
    d = n(666086),
    u = n(441623),
    m = n(752048),
    p = n(594174),
    h = n(246992),
    f = n(555109),
    x = n(663618);
function b(e) {
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
function g() {
    let e = (0, l.e7)([u.ZP], () => u.ZP.getDevToolTotalFriendAnniversaries()),
        t = (0, l.e7)([u.ZP], () => u.ZP.getDevToolCurrentDate()),
        n = (0, l.e7)([u.ZP], () => u.ZP.getGiftUnreadNotificationLastDismissedTimes()),
        r = (0, l.e7)([u.ZP], () => u.ZP.getMessageGiftIntentLastShownMap()),
        g = (0, l.e7)([u.ZP], () => u.ZP.getHighestAffinityFriendAnniversaries()),
        v = (0, l.e7)([u.ZP], () => u.ZP.getHighAffinityFriendAnniversaries()),
        j = (0, l.e7)([u.ZP], () => u.ZP.getProfilePopoutGiftIntentsDismissMap()),
        y = (e) => {
            c.Z.dispatch({
                type: "DEV_TOOLS_SET_FRIEND_ANNIVERSARY_COUNT",
                total: e,
            });
        },
        C = (e) => {
            let t = m.Z.getUserAffinity(e);
            return (null == t ? void 0 : t.dmProbability) != null
                ? "".concat((100 * t.dmProbability).toFixed(3), "%")
                : "N/A";
        };
    return (0, a.jsx)(o.zJl, {
        className: x.panel,
        children: (0, a.jsxs)("div", {
            className: f.panelInner,
            children: [
                (0, a.jsx)(o.Text, {
                    className: f.panelHeader,
                    variant: "text-lg/bold",
                    children: "Friend Anniversary",
                }),
                (0, a.jsx)("div", {
                    className: f.panelRow,
                    children: (0, a.jsxs)(o.Kqy, {
                        gap: 8,
                        direction: "horizontal",
                        style: { flex: 1 },
                        children: [
                            (0, a.jsx)(o.Text, {
                                variant: "text-md/normal",
                                children: "Number of anniversaries to generate",
                            }),
                            (0, a.jsx)(s.y6, {
                                options: [
                                    {
                                        label: "None",
                                        value: null,
                                    },
                                    {
                                        label: "1",
                                        value: 1,
                                    },
                                    {
                                        label: "2",
                                        value: 2,
                                    },
                                    {
                                        label: "3",
                                        value: 3,
                                    },
                                    {
                                        label: "4",
                                        value: 4,
                                    },
                                    {
                                        label: "5",
                                        value: 5,
                                    },
                                    {
                                        label: "10",
                                        value: 10,
                                    },
                                    {
                                        label: "25",
                                        value: 25,
                                    },
                                ],
                                value: e,
                                onChange: (e) => {
                                    y(e);
                                },
                                popoutLayerContext: h.O$,
                            }),
                            (0, a.jsx)(o.Button, {
                                size: "sm",
                                variant: "secondary",
                                text: "Clear",
                                onClick: () => {
                                    y(null);
                                },
                            }),
                        ],
                    }),
                }),
                null != e &&
                    (0, a.jsx)("div", {
                        className: f.panelRow,
                        children: (0, a.jsxs)(o.Kqy, {
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
                                g.length > 0 &&
                                    (0, a.jsxs)(o.Kqy, {
                                        gap: 4,
                                        children: [
                                            (0, a.jsx)(o.Text, {
                                                variant: "text-xs/semibold",
                                                children:
                                                    "Highest Affinity Friend Anniversaries (Eligible for Notification):",
                                            }),
                                            g.map((e) => {
                                                var t;
                                                let n = p.default.getUser(e),
                                                    r =
                                                        null != (t = null == n ? void 0 : n.username)
                                                            ? t
                                                            : "Unknown User (".concat(e, ")");
                                                return (0, a.jsxs)(
                                                    o.Text,
                                                    {
                                                        variant: "text-xs/normal",
                                                        children: [r, " (", C(e), ")"],
                                                    },
                                                    e,
                                                );
                                            }),
                                        ],
                                    }),
                                v.length > 0 &&
                                    (0, a.jsxs)(o.Kqy, {
                                        gap: 4,
                                        children: [
                                            (0, a.jsx)(o.Text, {
                                                variant: "text-xs/semibold",
                                                children: "High Affinity Friend Anniversaries:",
                                            }),
                                            v.map((e) => {
                                                var t;
                                                let n = p.default.getUser(e),
                                                    r =
                                                        null != (t = null == n ? void 0 : n.username)
                                                            ? t
                                                            : "Unknown User (".concat(e, ")");
                                                return (0, a.jsxs)(
                                                    o.Text,
                                                    {
                                                        variant: "text-xs/normal",
                                                        children: [r, " (", C(e), ")"],
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
                    className: f.panelRow,
                    children: (0, a.jsxs)(o.Kqy, {
                        gap: 8,
                        direction: "horizontal",
                        children: [
                            (0, a.jsx)(o.Wrb, {
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
                                    c.Z.dispatch({
                                        type: "DEV_TOOLS_SET_CURRENT_DATE",
                                        date: n.valueOf(),
                                    });
                                },
                            }),
                            (0, a.jsx)(o.Button, {
                                variant: "secondary",
                                size: "sm",
                                text: "Clear",
                                onClick: () => {
                                    c.Z.dispatch({ type: "DEV_TOOLS_RESET_CURRENT_DATE" });
                                },
                            }),
                        ],
                    }),
                }),
                (0, a.jsx)("div", {
                    className: f.panelRow,
                    children: (0, a.jsxs)(o.Kqy, {
                        gap: 8,
                        children: [
                            (0, a.jsxs)(o.Kqy, {
                                gap: 8,
                                direction: "horizontal",
                                children: [
                                    (0, a.jsx)(o.Text, {
                                        variant: "text-md/normal",
                                        children: "Reset gift message cooldown",
                                    }),
                                    (0, a.jsx)(o.Button, {
                                        variant: "primary",
                                        size: "sm",
                                        text: "Reset",
                                        onClick: () => {
                                            c.Z.dispatch({ type: "DEV_TOOLS_GIFT_MESSAGE_COOLDOWN_RESET" });
                                        },
                                    }),
                                ],
                            }),
                            Object.keys(r).length > 0 &&
                                (0, a.jsxs)(o.Kqy, {
                                    gap: 4,
                                    children: [
                                        (0, a.jsx)(o.Text, {
                                            variant: "text-xs/semibold",
                                            children: "Gift Message Intent Last Shown:",
                                        }),
                                        Object.entries(r).map((e) => {
                                            var t;
                                            let [n, r] = e,
                                                i = p.default.getUser(n),
                                                l =
                                                    null != (t = null == i ? void 0 : i.username)
                                                        ? t
                                                        : "Unknown User (".concat(n, ")");
                                            return (0, a.jsxs)(
                                                o.Text,
                                                {
                                                    variant: "text-xs/normal",
                                                    children: [l, ": ", b(r)],
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
                    className: f.panelRow,
                    children: (0, a.jsxs)(o.Kqy, {
                        gap: 8,
                        children: [
                            (0, a.jsxs)(o.Kqy, {
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
                                            c.Z.dispatch({ type: "DEV_TOOLS_GIFT_UNREAD_NOTIFICATION_COOLDOWN_RESET" });
                                        },
                                    }),
                                ],
                            }),
                            n.length > 0 &&
                                (0, a.jsxs)(o.Kqy, {
                                    gap: 4,
                                    children: [
                                        (0, a.jsx)(o.Text, {
                                            variant: "text-xs/semibold",
                                            children: "Gift notification shown timestamps:",
                                        }),
                                        n.map((e, t) =>
                                            (0, a.jsx)(
                                                o.Text,
                                                {
                                                    variant: "text-xs/normal",
                                                    children: b(e),
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
                    className: f.panelRow,
                    children: [
                        (0, a.jsx)(o.Text, {
                            variant: "text-md/normal",
                            children: "Send gift notification",
                        }),
                        (0, a.jsx)(o.Button, {
                            variant: "primary",
                            size: "sm",
                            text: "Send",
                            onClick: () => {
                                d.Z.sendGiftingNotificationIfEligible();
                            },
                        }),
                    ],
                }),
                (0, a.jsxs)("div", {
                    className: f.panelRow,
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
                                c.Z.dispatch({ type: "DEV_TOOLS_FRIENDS_LIST_GIFT_INTENTS_SHOWN_RESET" });
                            },
                        }),
                    ],
                }),
                (0, a.jsx)("div", {
                    className: f.panelRow,
                    children: (0, a.jsxs)(o.Kqy, {
                        gap: 8,
                        children: [
                            (0, a.jsxs)(o.Kqy, {
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
                                            c.Z.dispatch({
                                                type: "DEV_TOOLS_PROFILE_POPOUT_GIFT_INTENTS_DISMISS_RESET",
                                            });
                                        },
                                    }),
                                ],
                            }),
                            Object.keys(j).length > 0 &&
                                (0, a.jsxs)(o.Kqy, {
                                    gap: 4,
                                    children: [
                                        (0, a.jsx)(o.Text, {
                                            variant: "text-xs/semibold",
                                            children: "Profile Popout Gift Intents Dismissed:",
                                        }),
                                        Object.entries(j).map((e) => {
                                            var t;
                                            let [n, r] = e,
                                                i = p.default.getUser(n),
                                                l =
                                                    null != (t = null == i ? void 0 : i.username)
                                                        ? t
                                                        : "Unknown User (".concat(n, ")");
                                            return (0, a.jsxs)(
                                                o.Text,
                                                {
                                                    variant: "text-xs/normal",
                                                    children: [l, ": ", b(r)],
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
