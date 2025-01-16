n.d(t, {
    Z: function () {
        return E;
    }
}),
    n(47120),
    n(789020);
var i = n(200651),
    s = n(192379),
    l = n(120356),
    r = n.n(l),
    a = n(399606),
    o = n(481060),
    d = n(87051),
    c = n(9156),
    u = n(621600),
    h = n(113449),
    g = n(748756),
    m = n(732760),
    x = n(686660),
    S = n(981631),
    p = n(490897),
    v = n(526761),
    N = n(388032),
    j = n(249704),
    C = n(650455);
let f = () => [
    {
        value: x.s8.ALL_MESSAGES,
        name: N.intl.string(N.t.hZrr6u)
    },
    {
        value: x.s8.MENTIONS,
        name: N.intl.string(N.t.y59NJi)
    },
    {
        value: x.s8.NOTHING,
        name: N.intl.string(N.t['pGn/bG'])
    },
    {
        value: x.s8.CUSTOM,
        name: N.intl.string(N.t['32yow8'])
    }
];
function E(e) {
    let { guildId: t } = e,
        n = (0, a.e7)([c.ZP], () => c.ZP.getGuildFlags(t)),
        l = (0, a.e7)([c.ZP], () => {
            let e = c.ZP.getGuildUnreadSetting(t),
                n = c.ZP.getMessageNotifications(t);
            return e === p.i.UNSET ? (n === S.bL.ALL_MESSAGES ? p.i.ALL_MESSAGES : p.i.ONLY_MENTIONS) : e;
        }),
        r = (0, a.e7)([c.ZP], () => c.ZP.getMessageNotifications(t)),
        [C, E] = (0, s.useState)(!1),
        T = C ? x.s8.CUSTOM : (0, x.gs)(l, r),
        Z = (e) => {
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
                children: (0, i.jsx)(o.SegmentedControl, {
                    value: T,
                    options: f(),
                    onChange: (e) => {
                        let { value: t } = e;
                        return Z(t);
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
                        children: [(0, i.jsx)(b, { unreadSetting: l }), (0, i.jsx)(_, { notificationSetting: r })]
                    }),
                    (0, i.jsxs)('div', {
                        className: j.grid,
                        children: [
                            (0, i.jsxs)('div', {
                                children: [
                                    (0, i.jsx)(o.Text, {
                                        variant: 'text-sm/semibold',
                                        color: 'header-primary',
                                        children: N.intl.string(N.t.Tqd1AQ)
                                    }),
                                    (0, i.jsx)(o.Text, {
                                        variant: 'text-xs/medium',
                                        color: 'text-muted',
                                        children: N.intl.string(N.t.RpQgm5)
                                    })
                                ]
                            }),
                            (0, i.jsxs)('div', {
                                children: [
                                    (0, i.jsx)(o.Text, {
                                        variant: 'text-sm/semibold',
                                        color: 'header-primary',
                                        children: N.intl.string(N.t['1m22ZG'])
                                    }),
                                    (0, i.jsx)(o.Text, {
                                        variant: 'text-xs/medium',
                                        color: 'text-muted',
                                        children: N.intl.string(N.t['4bP2ZW'])
                                    })
                                ]
                            })
                        ]
                    }),
                    (0, i.jsxs)('div', {
                        className: j.grid,
                        children: [
                            (0, i.jsx)(o.SingleSelect, {
                                value: l,
                                className: j.input,
                                onChange: (e) => {
                                    E(!1), d.Z.updateGuildNotificationSettings(t, { flags: (0, h.Q4)(n, e === p.i.ALL_MESSAGES ? v.vc.UNREADS_ALL_MESSAGES : v.vc.UNREADS_ONLY_MENTIONS) }, u.UE.unreads(e));
                                },
                                options: (0, m.y)({ notificationSetting: r }),
                                renderOptionLabel: (e) => {
                                    let t = e.disabled && e.value === p.i.ONLY_MENTIONS && l !== p.i.ONLY_MENTIONS;
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
                                                (0, i.jsx)(o.Tooltip, {
                                                    text: N.intl.string(N.t.eP8yWV),
                                                    children: (e) =>
                                                        (0, i.jsx)(o.DenyIcon, {
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
                            (0, i.jsx)(o.SingleSelect, {
                                className: j.input,
                                value: r,
                                onChange: (e) => {
                                    E(!1);
                                    let n = { message_notifications: e };
                                    e === S.bL.ALL_MESSAGES && l !== p.i.ALL_MESSAGES && (n.flags = (0, h.Q4)(c.ZP.getGuildFlags(t), v.vc.UNREADS_ALL_MESSAGES)), d.Z.updateGuildNotificationSettings(t, n, u.UE.notifications(e));
                                },
                                options: (0, m.d)({ notificationSetting: r }),
                                renderOptionLabel: (e) => {
                                    let t = e.value === S.bL.ALL_MESSAGES && l !== p.i.ALL_MESSAGES && r !== S.bL.ALL_MESSAGES;
                                    return (0, i.jsxs)(i.Fragment, {
                                        children: [
                                            (0, i.jsx)(o.Text, {
                                                variant: 'text-md/normal',
                                                children: e.label
                                            }),
                                            t &&
                                                (0, i.jsx)(o.Tooltip, {
                                                    text: N.intl.string(N.t.idXSbG),
                                                    children: (e) =>
                                                        (0, i.jsx)(o.CircleInformationIcon, {
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
function b(e) {
    let { unreadSetting: t } = e,
        n = [
            {
                badged: !0,
                unread: !0,
                muted: !1,
                name: N.intl.string(N.t.EjLobG)
            },
            {
                badged: !1,
                unread: !0,
                muted: !0,
                name: N.intl.string(N.t.Wgpwpq)
            },
            {
                badged: !1,
                unread: !1,
                muted: !0,
                name: N.intl.string(N.t.g9VImp)
            }
        ];
    return (
        t === p.i.ALL_MESSAGES && (n[1].muted = !1),
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
                                        className: r()(j.unread, {
                                            [j.hidden]: !e.unread,
                                            [j.unreadMuted]: e.muted
                                        })
                                    }),
                                    (0, i.jsx)(o.TextIcon, {
                                        size: 'xxs',
                                        color: 'currentColor',
                                        className: r()(j.channelListChannelIcon, { [j.muted]: e.muted })
                                    }),
                                    (0, i.jsx)(o.Text, {
                                        variant: 'text-xs/normal',
                                        color: e.muted ? 'text-muted' : void 0,
                                        children: e.name
                                    })
                                ]
                            }),
                            (0, i.jsx)('div', {
                                className: r()(j.badge, { [j.hidden]: !e.badged }),
                                children: (0, i.jsx)(o.NumberBadge, { count: 1 })
                            })
                        ]
                    },
                    e.name
                )
            )
        })
    );
}
function _(e) {
    return (0, i.jsxs)('div', {
        className: j.mockMessage,
        children: [
            e.notificationSetting === S.bL.NO_MESSAGES && (0, i.jsx)('div', { className: j.mockMessageDisabled }),
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
                        children: N.intl.string(N.t.qSq0tL)
                    }),
                    e.notificationSetting === S.bL.ALL_MESSAGES &&
                        (0, i.jsx)(o.Text, {
                            variant: 'text-xs/normal',
                            color: 'text-muted',
                            children: N.intl.string(N.t.WYyzIy)
                        }),
                    e.notificationSetting !== S.bL.ALL_MESSAGES &&
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
                                    children: N.intl.string(N.t.WYyzIy)
                                })
                            ]
                        })
                ]
            })
        ]
    });
}
