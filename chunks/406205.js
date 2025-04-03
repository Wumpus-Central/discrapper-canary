n.d(t, { Z: () => E }), n(47120), n(789020);
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
    N = n(981631),
    p = n(490897),
    v = n(526761),
    j = n(388032),
    S = n(77851),
    f = n(650455);
function b(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = i);
            });
    }
    return e;
}
function C(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let O = () => [
    {
        value: x.s8.ALL_MESSAGES,
        name: j.NW.string(j.t.hZrr6u)
    },
    {
        value: x.s8.MENTIONS,
        name: j.NW.string(j.t.y59NJi)
    },
    {
        value: x.s8.NOTHING,
        name: j.NW.string(j.t['pGn/bG'])
    },
    {
        value: x.s8.CUSTOM,
        name: j.NW.string(j.t['32yow8'])
    }
];
function E(e) {
    let { guildId: t } = e,
        n = (0, a.e7)([c.ZP], () => c.ZP.getGuildFlags(t)),
        l = (0, a.e7)([c.ZP], () => {
            let e = c.ZP.getGuildUnreadSetting(t),
                n = c.ZP.getMessageNotifications(t);
            return e === p.i.UNSET ? (n === N.bL.ALL_MESSAGES ? p.i.ALL_MESSAGES : p.i.ONLY_MENTIONS) : e;
        }),
        r = (0, a.e7)([c.ZP], () => c.ZP.getMessageNotifications(t)),
        [f, E] = (0, s.useState)(!1),
        T = f ? x.s8.CUSTOM : (0, x.gs)(l, r),
        L = (e) => {
            if (e === x.s8.CUSTOM) return void E(!0);
            E(!1), (0, g.V)(t, e);
        };
    return (0, i.jsxs)('div', {
        children: [
            (0, i.jsx)('div', {
                className: S.segmentedControlsContainer,
                children: (0, i.jsx)(o.sY7, {
                    value: T,
                    options: O(),
                    onChange: (e) => {
                        let { value: t } = e;
                        return L(t);
                    },
                    className: S.segmentedControl,
                    look: 'pill'
                })
            }),
            (0, i.jsx)('div', { className: S.presetSeparator }),
            (0, i.jsxs)('div', {
                className: S.customPresetsContainer,
                children: [
                    (0, i.jsxs)('div', {
                        className: S.grid,
                        children: [(0, i.jsx)(Z, { unreadSetting: l }), (0, i.jsx)(_, { notificationSetting: r })]
                    }),
                    (0, i.jsxs)('div', {
                        className: S.grid,
                        children: [
                            (0, i.jsxs)('div', {
                                children: [
                                    (0, i.jsx)(o.Text, {
                                        variant: 'text-sm/semibold',
                                        color: 'header-primary',
                                        children: j.NW.string(j.t.Tqd1AQ)
                                    }),
                                    (0, i.jsx)(o.Text, {
                                        variant: 'text-xs/medium',
                                        color: 'text-muted',
                                        children: j.NW.string(j.t.RpQgm5)
                                    })
                                ]
                            }),
                            (0, i.jsxs)('div', {
                                children: [
                                    (0, i.jsx)(o.Text, {
                                        variant: 'text-sm/semibold',
                                        color: 'header-primary',
                                        children: j.NW.string(j.t['1m22ZG'])
                                    }),
                                    (0, i.jsx)(o.Text, {
                                        variant: 'text-xs/medium',
                                        color: 'text-muted',
                                        children: j.NW.string(j.t['4bP2ZW'])
                                    })
                                ]
                            })
                        ]
                    }),
                    (0, i.jsxs)('div', {
                        className: S.grid,
                        children: [
                            (0, i.jsx)(o.q4e, {
                                value: l,
                                className: S.input,
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
                                                (0, i.jsx)(o.ua7, {
                                                    text: j.NW.string(j.t.eP8yWV),
                                                    children: (e) =>
                                                        (0, i.jsx)(
                                                            o.t6m,
                                                            C(b({ size: 'custom' }, e), {
                                                                width: 20,
                                                                height: 20,
                                                                className: S.muted
                                                            })
                                                        )
                                                })
                                        ]
                                    });
                                }
                            }),
                            (0, i.jsx)(o.q4e, {
                                className: S.input,
                                value: r,
                                onChange: (e) => {
                                    E(!1);
                                    let n = { message_notifications: e };
                                    e === N.bL.ALL_MESSAGES && l !== p.i.ALL_MESSAGES && (n.flags = (0, h.Q4)(c.ZP.getGuildFlags(t), v.vc.UNREADS_ALL_MESSAGES)), d.Z.updateGuildNotificationSettings(t, n, u.UE.notifications(e));
                                },
                                options: (0, m.d)({ notificationSetting: r }),
                                renderOptionLabel: (e) => {
                                    let t = e.value === N.bL.ALL_MESSAGES && l !== p.i.ALL_MESSAGES && r !== N.bL.ALL_MESSAGES;
                                    return (0, i.jsxs)(i.Fragment, {
                                        children: [
                                            (0, i.jsx)(o.Text, {
                                                variant: 'text-md/normal',
                                                children: e.label
                                            }),
                                            t &&
                                                (0, i.jsx)(o.ua7, {
                                                    text: j.NW.string(j.t.idXSbG),
                                                    children: (e) =>
                                                        (0, i.jsx)(
                                                            o.d3s,
                                                            C(b({ size: 'custom' }, e), {
                                                                width: 20,
                                                                height: 20,
                                                                className: S.muted
                                                            })
                                                        )
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
                name: j.NW.string(j.t.EjLobG)
            },
            {
                badged: !1,
                unread: !0,
                muted: !0,
                name: j.NW.string(j.t.Wgpwpq)
            },
            {
                badged: !1,
                unread: !1,
                muted: !0,
                name: j.NW.string(j.t.g9VImp)
            }
        ];
    return (
        t === p.i.ALL_MESSAGES && (n[1].muted = !1),
        (0, i.jsx)('div', {
            className: S.channeList,
            children: n.map((e) =>
                (0, i.jsxs)(
                    'div',
                    {
                        className: S.channelListChannel,
                        children: [
                            (0, i.jsxs)('div', {
                                className: S.channelListChannelName,
                                children: [
                                    (0, i.jsx)('div', {
                                        className: r()(S.unread, {
                                            [S.hidden]: !e.unread,
                                            [S.unreadMuted]: e.muted
                                        })
                                    }),
                                    (0, i.jsx)(o.VL1, {
                                        size: 'xxs',
                                        color: 'currentColor',
                                        className: r()(S.channelListChannelIcon, { [S.muted]: e.muted })
                                    }),
                                    (0, i.jsx)(o.Text, {
                                        variant: 'text-xs/normal',
                                        color: e.muted ? 'text-muted' : void 0,
                                        children: e.name
                                    })
                                ]
                            }),
                            (0, i.jsx)('div', {
                                className: r()(S.badge, { [S.hidden]: !e.badged }),
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
function _(e) {
    return (0, i.jsxs)('div', {
        className: S.mockMessage,
        children: [
            e.notificationSetting === N.bL.NO_MESSAGES && (0, i.jsx)('div', { className: S.mockMessageDisabled }),
            (0, i.jsx)('div', {
                children: (0, i.jsx)('img', {
                    className: S.mockMessageAvatar,
                    src: f,
                    alt: ''
                })
            }),
            (0, i.jsxs)('div', {
                children: [
                    (0, i.jsx)(o.Text, {
                        variant: 'text-xs/medium',
                        children: j.NW.string(j.t.qSq0tL)
                    }),
                    e.notificationSetting === N.bL.ALL_MESSAGES &&
                        (0, i.jsx)(o.Text, {
                            variant: 'text-xs/normal',
                            color: 'text-muted',
                            children: j.NW.string(j.t.WYyzIy)
                        }),
                    e.notificationSetting !== N.bL.ALL_MESSAGES &&
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
                                    children: j.NW.string(j.t.WYyzIy)
                                })
                            ]
                        })
                ]
            })
        ]
    });
}
