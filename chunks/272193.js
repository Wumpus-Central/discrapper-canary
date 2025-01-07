n.d(t, {
    Z: function () {
        return m;
    }
});
var r = n(200651);
n(192379);
var a = n(120356),
    l = n.n(a),
    i = n(442837),
    o = n(481060),
    s = n(570140),
    c = n(441623),
    d = n(246992),
    u = n(562708),
    h = n(941469);
function m() {
    let e = (0, i.e7)([c.Z], () => c.Z.getDevToolTotalFriendAnniversaries()),
        t = (e) => {
            s.Z.dispatch({
                type: 'DEV_TOOLS_SET_FRIEND_ANNIVERSARY_COUNT',
                total: e
            });
        };
    return (0, r.jsx)(o.ScrollerThin, {
        className: l()(h.panel),
        children: (0, r.jsxs)('div', {
            className: u.panelInner,
            children: [
                (0, r.jsx)(o.Text, {
                    className: u.panelHeader,
                    variant: 'text-lg/bold',
                    children: 'Friend Anniversary'
                }),
                (0, r.jsxs)('div', {
                    className: u.panelRow,
                    children: [
                        (0, r.jsx)(o.Text, {
                            variant: 'text-md/normal',
                            children: 'Reset gift message cooldown'
                        }),
                        (0, r.jsx)(o.Button, {
                            size: o.Button.Sizes.SMALL,
                            onClick: () => {
                                s.Z.dispatch({ type: 'DEV_TOOLS_GIFT_MESSAGE_COOLDOWN_RESET' });
                            },
                            children: 'Reset'
                        })
                    ]
                }),
                (0, r.jsxs)('div', {
                    className: u.panelRow,
                    children: [
                        (0, r.jsx)(o.Text, {
                            variant: 'text-md/normal',
                            children: 'Reset badge cooldown'
                        }),
                        (0, r.jsx)(o.Button, {
                            size: o.Button.Sizes.SMALL,
                            onClick: () => {
                                s.Z.dispatch({ type: 'DEV_TOOLS_FRIENDS_TAB_BADGE_COOLDOWN_RESET' });
                            },
                            children: 'Reset'
                        })
                    ]
                }),
                (0, r.jsxs)('div', {
                    className: u.panelRow,
                    children: [
                        (0, r.jsx)(o.Text, {
                            variant: 'text-md/normal',
                            children: 'Clear last seen friend anniversaries in All Friends'
                        }),
                        (0, r.jsx)(o.Button, {
                            size: o.Button.Sizes.SMALL,
                            onClick: () => {
                                s.Z.dispatch({ type: 'DEV_TOOLS_FRIENDS_LIST_GIFT_INTENTS_SHOWN_RESET' });
                            },
                            children: 'Clear'
                        })
                    ]
                }),
                (0, r.jsxs)('div', {
                    className: u.panelRow,
                    children: [
                        (0, r.jsx)(o.Text, {
                            variant: 'text-md/normal',
                            children: 'Select number of friend anniversaries to generate'
                        }),
                        (0, r.jsx)(o.SingleSelect, {
                            className: u.anniversaryCountSelect,
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
                            popoutLayerContext: d.O$
                        }),
                        (0, r.jsx)(o.Button, {
                            look: o.Button.Looks.LINK,
                            className: u.anniversaryCountResetButton,
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
