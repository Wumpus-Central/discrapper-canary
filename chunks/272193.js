n.d(t, { Z: () => m });
var a = n(951288);
n(647438);
var i = n(442837),
    l = n(755721),
    r = n(481060),
    s = n(570140),
    o = n(441623),
    c = n(246992),
    d = n(636503),
    u = n(451429);
function m() {
    let e = (0, i.e7)([o.Z], () => o.Z.getDevToolTotalFriendAnniversaries()),
        t = (e) => {
            s.Z.dispatch({
                type: "DEV_TOOLS_SET_FRIEND_ANNIVERSARY_COUNT",
                total: e,
            });
        };
    return (0, a.jsx)(r.zJl, {
        className: u.panel,
        children: (0, a.jsxs)("div", {
            className: d.panelInner,
            children: [
                (0, a.jsx)(r.Text, {
                    className: d.panelHeader,
                    variant: "text-lg/bold",
                    children: "Friend Anniversary",
                }),
                (0, a.jsxs)("div", {
                    className: d.panelRow,
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
                                s.Z.dispatch({ type: "DEV_TOOLS_GIFT_MESSAGE_COOLDOWN_RESET" });
                            },
                        }),
                    ],
                }),
                (0, a.jsxs)("div", {
                    className: d.panelRow,
                    children: [
                        (0, a.jsx)(r.Text, {
                            variant: "text-md/normal",
                            children: "Reset badge cooldown",
                        }),
                        (0, a.jsx)(r.Button, {
                            variant: "primary",
                            size: "sm",
                            text: "Reset",
                            onClick: () => {
                                s.Z.dispatch({ type: "DEV_TOOLS_FRIENDS_TAB_BADGE_COOLDOWN_RESET" });
                            },
                        }),
                    ],
                }),
                (0, a.jsxs)("div", {
                    className: d.panelRow,
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
                                s.Z.dispatch({ type: "DEV_TOOLS_FRIENDS_LIST_GIFT_INTENTS_SHOWN_RESET" });
                            },
                        }),
                    ],
                }),
                (0, a.jsxs)("div", {
                    className: d.panelRow,
                    children: [
                        (0, a.jsx)(r.Text, {
                            variant: "text-md/normal",
                            children: "Select number of friend anniversaries to generate",
                        }),
                        (0, a.jsx)(r.q4e, {
                            className: d.anniversaryCountSelect,
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
                            popoutLayerContext: c.O$,
                        }),
                        (0, a.jsx)(l.zx, {
                            look: l.zx.Looks.LINK,
                            className: d.anniversaryCountResetButton,
                            onClick: () => {
                                t(null);
                            },
                            children: "Reset to None",
                        }),
                    ],
                }),
            ],
        }),
    });
}
