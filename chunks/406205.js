n.d(t, { Z: () => E }), n(47120), n(789020);
var i = n(200651),
    s = n(192379),
    l = n(120356),
    a = n.n(l),
    r = n(399606),
    o = n(481060),
    d = n(87051),
    c = n(9156),
    u = n(621600),
    h = n(113449),
    g = n(748756),
    m = n(732760),
    x = n(686660),
    p = n(981631),
    v = n(490897),
    N = n(526761),
    S = n(388032),
    j = n(920245),
    C = n(650455);
let f = () => [
    {
        value: x.s8.ALL_MESSAGES,
        name: S.intl.string(S.t.hZrr6u)
    },
    {
        value: x.s8.MENTIONS,
        name: S.intl.string(S.t.y59NJi)
    },
    {
        value: x.s8.NOTHING,
        name: S.intl.string(S.t['pGn/bG'])
    },
    {
        value: x.s8.CUSTOM,
        name: S.intl.string(S.t['32yow8'])
    }
];
function E(e) {
    let { guildId: t } = e,
        n = (0, r.e7)([c.ZP], () => c.ZP.getGuildFlags(t)),
        l = (0, r.e7)([c.ZP], () => {
            let e = c.ZP.getGuildUnreadSetting(t),
                n = c.ZP.getMessageNotifications(t);
            return e === v.i.UNSET ? (n === p.bL.ALL_MESSAGES ? v.i.ALL_MESSAGES : v.i.ONLY_MENTIONS) : e;
        }),
        a = (0, r.e7)([c.ZP], () => c.ZP.getMessageNotifications(t)),
        [C, E] = (0, s.useState)(!1),
        _ = C ? x.s8.CUSTOM : (0, x.gs)(l, a),
        T = (e) => {
            if (e === x.s8.CUSTOM) {
                E(!0);
                return;
            }
            E(!1), (0, g.V)(t, e);
        };
    return (0, i.jsxs)('div', {
        children: [
            (0, i.jsx)('div', {
                className: j.segmentedControlsContainer,
                children: (0, i.jsx)(o.sY7, {
                    value: _,
                    options: f(),
                    onChange: (e) => {
                        let { value: t } = e;
                        return T(t);
                    },
                    className: j.segmentedControl,
                    look: 'pill'
                })
            }),
            (0, i.jsx)('div', { className: j.presetSeparator }),
            (0, i.jsxs)('div', {
                className: j.customPresetsContainer,
                children: [
                    (0, i.jsxs)('div', {
                        className: j.grid,
                        children: [(0, i.jsx)(Z, { unreadSetting: l }), (0, i.jsx)(b, { notificationSetting: a })]
                    }),
                    (0, i.jsxs)('div', {
                        className: j.grid,
                        children: [
                            (0, i.jsxs)('div', {
                                children: [
                                    (0, i.jsx)(o.Text, {
                                        variant: 'text-sm/semibold',
                                        color: 'header-primary',
                                        children: S.intl.string(S.t.Tqd1AQ)
                                    }),
                                    (0, i.jsx)(o.Text, {
                                        variant: 'text-xs/medium',
                                        color: 'text-muted',
                                        children: S.intl.string(S.t.RpQgm5)
                                    })
                                ]
                            }),
                            (0, i.jsxs)('div', {
                                children: [
                                    (0, i.jsx)(o.Text, {
                                        variant: 'text-sm/semibold',
                                        color: 'header-primary',
                                        children: S.intl.string(S.t['1m22ZG'])
                                    }),
                                    (0, i.jsx)(o.Text, {
                                        variant: 'text-xs/medium',
                                        color: 'text-muted',
                                        children: S.intl.string(S.t['4bP2ZW'])
                                    })
                                ]
                            })
                        ]
                    }),
                    (0, i.jsxs)('div', {
                        className: j.grid,
                        children: [
                            (0, i.jsx)(o.q4e, {
                                value: l,
                                className: j.input,
                                onChange: (e) => {
                                    E(!1), d.Z.updateGuildNotificationSettings(t, { flags: (0, h.Q4)(n, e === v.i.ALL_MESSAGES ? N.vc.UNREADS_ALL_MESSAGES : N.vc.UNREADS_ONLY_MENTIONS) }, u.UE.unreads(e));
                                },
                                options: (0, m.y)({ notificationSetting: a }),
                                renderOptionLabel: (e) => {
                                    let t = e.disabled && e.value === v.i.ONLY_MENTIONS && l !== v.i.ONLY_MENTIONS;
                                    return (0, i.jsxs)(i.Fragment, {
                                        children: [
                                            (0, i.jsx)('div', {
                                                children: (0, i.jsx)(o.Text, {
                                                    variant: 'text-md/normal',
                                                    color: e.disabled ? 'text-muted' : void 0,
                                                    children: e.label
                                                })
                                            }),
                                            t &&
                                                (0, i.jsx)(o.ua7, {
                                                    text: S.intl.string(S.t.eP8yWV),
                                                    children: (e) =>
                                                        (0, i.jsx)(o.t6m, {
                                                            size: 'custom',
                                                            ...e,
                                                            width: 20,
                                                            height: 20,
                                                            className: j.muted
                                                        })
                                                })
                                        ]
                                    });
                                }
                            }),
                            (0, i.jsx)(o.q4e, {
                                className: j.input,
                                value: a,
                                onChange: (e) => {
                                    E(!1);
                                    let n = { message_notifications: e };
                                    e === p.bL.ALL_MESSAGES && l !== v.i.ALL_MESSAGES && (n.flags = (0, h.Q4)(c.ZP.getGuildFlags(t), N.vc.UNREADS_ALL_MESSAGES)), d.Z.updateGuildNotificationSettings(t, n, u.UE.notifications(e));
                                },
                                options: (0, m.d)({ notificationSetting: a }),
                                renderOptionLabel: (e) => {
                                    let t = e.value === p.bL.ALL_MESSAGES && l !== v.i.ALL_MESSAGES && a !== p.bL.ALL_MESSAGES;
                                    return (0, i.jsxs)(i.Fragment, {
                                        children: [
                                            (0, i.jsx)(o.Text, {
                                                variant: 'text-md/normal',
                                                children: e.label
                                            }),
                                            t &&
                                                (0, i.jsx)(o.ua7, {
                                                    text: S.intl.string(S.t.idXSbG),
                                                    children: (e) =>
                                                        (0, i.jsx)(o.d3s, {
                                                            size: 'custom',
                                                            ...e,
                                                            width: 20,
                                                            height: 20,
                                                            className: j.muted
                                                        })
                                                })
                                        ]
                                    });
                                }
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
function Z(e) {
    let { unreadSetting: t } = e,
        n = [
            {
                badged: !0,
                unread: !0,
                muted: !1,
                name: S.intl.string(S.t.EjLobG)
            },
            {
                badged: !1,
                unread: !0,
                muted: !0,
                name: S.intl.string(S.t.Wgpwpq)
            },
            {
                badged: !1,
                unread: !1,
                muted: !0,
                name: S.intl.string(S.t.g9VImp)
            }
        ];
    return (
        t === v.i.ALL_MESSAGES && (n[1].muted = !1),
        (0, i.jsx)('div', {
            className: j.channeList,
            children: n.map((e) =>
                (0, i.jsxs)(
                    'div',
                    {
                        className: j.channelListChannel,
                        children: [
                            (0, i.jsxs)('div', {
                                className: j.channelListChannelName,
                                children: [
                                    (0, i.jsx)('div', {
                                        className: a()(j.unread, {
                                            [j.hidden]: !e.unread,
                                            [j.unreadMuted]: e.muted
                                        })
                                    }),
                                    (0, i.jsx)(o.VL1, {
                                        size: 'xxs',
                                        color: 'currentColor',
                                        className: a()(j.channelListChannelIcon, { [j.muted]: e.muted })
                                    }),
                                    (0, i.jsx)(o.Text, {
                                        variant: 'text-xs/normal',
                                        color: e.muted ? 'text-muted' : void 0,
                                        children: e.name
                                    })
                                ]
                            }),
                            (0, i.jsx)('div', {
                                className: a()(j.badge, { [j.hidden]: !e.badged }),
                                children: (0, i.jsx)(o.mAB, { count: 1 })
                            })
                        ]
                    },
                    e.name
                )
            )
        })
    );
}
function b(e) {
    return (0, i.jsxs)('div', {
        className: j.mockMessage,
        children: [
            e.notificationSetting === p.bL.NO_MESSAGES && (0, i.jsx)('div', { className: j.mockMessageDisabled }),
            (0, i.jsx)('div', {
                children: (0, i.jsx)('img', {
                    className: j.mockMessageAvatar,
                    src: C,
                    alt: ''
                })
            }),
            (0, i.jsxs)('div', {
                children: [
                    (0, i.jsx)(o.Text, {
                        variant: 'text-xs/medium',
                        children: S.intl.string(S.t.qSq0tL)
                    }),
                    e.notificationSetting === p.bL.ALL_MESSAGES &&
                        (0, i.jsx)(o.Text, {
                            variant: 'text-xs/normal',
                            color: 'text-muted',
                            children: S.intl.string(S.t.WYyzIy)
                        }),
                    e.notificationSetting !== p.bL.ALL_MESSAGES &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsxs)(o.Text, {
                                    variant: 'text-xs/normal',
                                    color: 'text-link',
                                    tag: 'span',
                                    children: ['@Roka', ' ']
                                }),
                                (0, i.jsx)(o.Text, {
                                    variant: 'text-xs/normal',
                                    color: 'text-muted',
                                    tag: 'span',
                                    children: S.intl.string(S.t.WYyzIy)
                                })
                            ]
                        })
                ]
            })
        ]
    });
}
