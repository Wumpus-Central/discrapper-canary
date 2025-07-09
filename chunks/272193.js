a.d(t, { Z: () => m });
var n = a(255367);
a(73800);
var r = a(442837),
    l = a(755721),
    i = a(481060),
    s = a(570140),
    o = a(441623),
    c = a(246992),
    d = a(455459),
    u = a(616257);
function m() {
    let e = (0, r.e7)([o.Z], () => o.Z.getDevToolTotalFriendAnniversaries()),
        t = (e) => {
            s.Z.dispatch({
                type: 'DEV_TOOLS_SET_FRIEND_ANNIVERSARY_COUNT',
                total: e
            });
        };
    return (0, n.jsx)(i.zJl, {
        className: u.panel,
        children: (0, n.jsxs)('div', {
            className: d.panelInner,
            children: [
                (0, n.jsx)(i.Text, {
                    className: d.panelHeader,
                    variant: 'text-lg/bold',
                    children: 'Friend Anniversary'
                }),
                (0, n.jsxs)('div', {
                    className: d.panelRow,
                    children: [
                        (0, n.jsx)(i.Text, {
                            variant: 'text-md/normal',
                            children: 'Reset gift message cooldown'
                        }),
                        (0, n.jsx)(i.zxk, {
                            variant: 'primary',
                            size: 'sm',
                            text: 'Reset',
                            onClick: () => {
                                s.Z.dispatch({ type: 'DEV_TOOLS_GIFT_MESSAGE_COOLDOWN_RESET' });
                            }
                        })
                    ]
                }),
                (0, n.jsxs)('div', {
                    className: d.panelRow,
                    children: [
                        (0, n.jsx)(i.Text, {
                            variant: 'text-md/normal',
                            children: 'Reset badge cooldown'
                        }),
                        (0, n.jsx)(i.zxk, {
                            variant: 'primary',
                            size: 'sm',
                            text: 'Reset',
                            onClick: () => {
                                s.Z.dispatch({ type: 'DEV_TOOLS_FRIENDS_TAB_BADGE_COOLDOWN_RESET' });
                            }
                        })
                    ]
                }),
                (0, n.jsxs)('div', {
                    className: d.panelRow,
                    children: [
                        (0, n.jsx)(i.Text, {
                            variant: 'text-md/normal',
                            children: 'Clear last seen friend anniversaries in All Friends'
                        }),
                        (0, n.jsx)(i.zxk, {
                            variant: 'primary',
                            size: 'sm',
                            text: 'Clear',
                            onClick: () => {
                                s.Z.dispatch({ type: 'DEV_TOOLS_FRIENDS_LIST_GIFT_INTENTS_SHOWN_RESET' });
                            }
                        })
                    ]
                }),
                (0, n.jsxs)('div', {
                    className: d.panelRow,
                    children: [
                        (0, n.jsx)(i.Text, {
                            variant: 'text-md/normal',
                            children: 'Select number of friend anniversaries to generate'
                        }),
                        (0, n.jsx)(i.q4e, {
                            className: d.anniversaryCountSelect,
                            options: [
                                {
                                    label: 'None',
                                    value: null
                                },
                                {
                                    label: '1',
                                    value: 1
                                },
                                {
                                    label: '2',
                                    value: 2
                                },
                                {
                                    label: '3',
                                    value: 3
                                },
                                {
                                    label: '4',
                                    value: 4
                                },
                                {
                                    label: '5',
                                    value: 5
                                },
                                {
                                    label: '10',
                                    value: 10
                                },
                                {
                                    label: '25',
                                    value: 25
                                }
                            ],
                            value: e,
                            onChange: (e) => {
                                t(e);
                            },
                            popoutLayerContext: c.O$
                        }),
                        (0, n.jsx)(l.zx, {
                            look: l.zx.Looks.LINK,
                            className: d.anniversaryCountResetButton,
                            onClick: () => {
                                t(null);
                            },
                            children: 'Reset to None'
                        })
                    ]
                })
            ]
        })
    });
}
