n.d(t, { Z: () => u });
var a = n(200651);
n(192379);
var r = n(442837),
    l = n(481060),
    i = n(570140),
    s = n(441623),
    o = n(246992),
    c = n(332793),
    d = n(482479);
function u() {
    let e = (0, r.e7)([s.Z], () => s.Z.getDevToolTotalFriendAnniversaries()),
        t = (e) => {
            i.Z.dispatch({
                type: 'DEV_TOOLS_SET_FRIEND_ANNIVERSARY_COUNT',
                total: e
            });
        };
    return (0, a.jsx)(l.zJl, {
        className: d.panel,
        children: (0, a.jsxs)('div', {
            className: c.panelInner,
            children: [
                (0, a.jsx)(l.Text, {
                    className: c.panelHeader,
                    variant: 'text-lg/bold',
                    children: 'Friend Anniversary'
                }),
                (0, a.jsxs)('div', {
                    className: c.panelRow,
                    children: [
                        (0, a.jsx)(l.Text, {
                            variant: 'text-md/normal',
                            children: 'Reset gift message cooldown'
                        }),
                        (0, a.jsx)(l.zxk, {
                            size: l.zxk.Sizes.SMALL,
                            onClick: () => {
                                i.Z.dispatch({ type: 'DEV_TOOLS_GIFT_MESSAGE_COOLDOWN_RESET' });
                            },
                            children: 'Reset'
                        })
                    ]
                }),
                (0, a.jsxs)('div', {
                    className: c.panelRow,
                    children: [
                        (0, a.jsx)(l.Text, {
                            variant: 'text-md/normal',
                            children: 'Reset badge cooldown'
                        }),
                        (0, a.jsx)(l.zxk, {
                            size: l.zxk.Sizes.SMALL,
                            onClick: () => {
                                i.Z.dispatch({ type: 'DEV_TOOLS_FRIENDS_TAB_BADGE_COOLDOWN_RESET' });
                            },
                            children: 'Reset'
                        })
                    ]
                }),
                (0, a.jsxs)('div', {
                    className: c.panelRow,
                    children: [
                        (0, a.jsx)(l.Text, {
                            variant: 'text-md/normal',
                            children: 'Clear last seen friend anniversaries in All Friends'
                        }),
                        (0, a.jsx)(l.zxk, {
                            size: l.zxk.Sizes.SMALL,
                            onClick: () => {
                                i.Z.dispatch({ type: 'DEV_TOOLS_FRIENDS_LIST_GIFT_INTENTS_SHOWN_RESET' });
                            },
                            children: 'Clear'
                        })
                    ]
                }),
                (0, a.jsxs)('div', {
                    className: c.panelRow,
                    children: [
                        (0, a.jsx)(l.Text, {
                            variant: 'text-md/normal',
                            children: 'Select number of friend anniversaries to generate'
                        }),
                        (0, a.jsx)(l.q4e, {
                            className: c.anniversaryCountSelect,
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
                            popoutLayerContext: o.O$
                        }),
                        (0, a.jsx)(l.zxk, {
                            look: l.zxk.Looks.LINK,
                            className: c.anniversaryCountResetButton,
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
