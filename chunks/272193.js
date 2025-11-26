n.d(t, { Z: () => u });
var a = n(54381);
n(473749);
var l = n(442837),
    i = n(481060),
    r = n(570140),
    s = n(441623),
    o = n(246992),
    c = n(636503),
    d = n(451429);
function u() {
    let e = (0, l.e7)([s.ZP], () => s.ZP.getDevToolTotalFriendAnniversaries()),
        t = (e) => {
            r.Z.dispatch({
                type: "DEV_TOOLS_SET_FRIEND_ANNIVERSARY_COUNT",
                total: e,
            });
        };
    return (0, a.jsx)(i.zJl, {
        className: d.panel,
        children: (0, a.jsxs)("div", {
            className: c.panelInner,
            children: [
                (0, a.jsx)(i.Text, {
                    className: c.panelHeader,
                    variant: "text-lg/bold",
                    children: "Friend Anniversary",
                }),
                (0, a.jsxs)("div", {
                    className: c.panelRow,
                    children: [
                        (0, a.jsx)(i.Text, {
                            variant: "text-md/normal",
                            children: "Reset gift message cooldown",
                        }),
                        (0, a.jsx)(i.Button, {
                            variant: "primary",
                            size: "sm",
                            text: "Reset",
                            onClick: () => {
                                r.Z.dispatch({ type: "DEV_TOOLS_GIFT_MESSAGE_COOLDOWN_RESET" });
                            },
                        }),
                    ],
                }),
                (0, a.jsxs)("div", {
                    className: c.panelRow,
                    children: [
                        (0, a.jsx)(i.Text, {
                            variant: "text-md/normal",
                            children: "Reset gift unread notification cooldown",
                        }),
                        (0, a.jsx)(i.Button, {
                            variant: "primary",
                            size: "sm",
                            text: "Reset",
                            onClick: () => {
                                r.Z.dispatch({ type: "DEV_TOOLS_GIFT_UNREAD_NOTIFICATION_COOLDOWN_RESET" });
                            },
                        }),
                    ],
                }),
                (0, a.jsxs)("div", {
                    className: c.panelRow,
                    children: [
                        (0, a.jsx)(i.Text, {
                            variant: "text-md/normal",
                            children: "Clear last seen friend anniversaries in All Friends",
                        }),
                        (0, a.jsx)(i.Button, {
                            variant: "primary",
                            size: "sm",
                            text: "Clear",
                            onClick: () => {
                                r.Z.dispatch({ type: "DEV_TOOLS_FRIENDS_LIST_GIFT_INTENTS_SHOWN_RESET" });
                            },
                        }),
                    ],
                }),
                (0, a.jsxs)("div", {
                    className: c.panelRow,
                    children: [
                        (0, a.jsx)(i.Text, {
                            variant: "text-md/normal",
                            children: "Select number of friend anniversaries to generate",
                        }),
                        (0, a.jsx)(i.q4e, {
                            size: "sm",
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
                                t(e);
                            },
                            popoutLayerContext: o.O$,
                        }),
                        (0, a.jsx)(i.Button, {
                            size: "sm",
                            variant: "secondary",
                            text: "Reset to None",
                            onClick: () => {
                                t(null);
                            },
                        }),
                    ],
                }),
            ],
        }),
    });
}
