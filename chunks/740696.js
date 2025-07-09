(n.d(e, { default: () => v }), n(388685));
var a = n(255367),
    r = n(73800),
    i = n(442837),
    s = n(755721),
    o = n(481060),
    l = n(313201),
    c = n(430824),
    d = n(496675),
    m = n(228392),
    g = n(941848),
    u = n(710352),
    p = n(981631),
    x = n(921944),
    h = n(388032),
    f = n(74891);
let j = () => [
    {
        id: 0,
        name: h.intl.string(h.t.HTA519)
    },
    {
        id: 1,
        name: h.intl.string(h.t.IHjjY2)
    },
    {
        id: 2,
        name: h.intl.string(h.t.x3drh4)
    }
];
function v(t) {
    let { guildId: e, shouldUpsellCreation: v, transitionState: b, onClose: y } = t,
        N = (0, i.e7)([c.Z], () => c.Z.getGuild(e), [e]),
        P = (0, i.e7)([d.Z], () => d.Z.can(p.Plq.MANAGE_CHANNELS, N)),
        S = j(),
        [O, C] = r.useState(0),
        _ = (0, l.Dt)();
    return (0, a.jsxs)(o.Y0X, {
        transitionState: b,
        'aria-labelledby': _,
        size: o.CgR.LARGE,
        parentComponent: 'ForumChannelUpsellModal',
        children: [
            (0, a.jsxs)(o.xBx, {
                separator: !1,
                className: f.header,
                children: [
                    (0, a.jsx)(o.X6q, {
                        variant: 'heading-xl/semibold',
                        children: h.intl.string(h.t['6S6WCQ'])
                    }),
                    (0, a.jsx)(o.olH, { onClick: () => y() })
                ]
            }),
            (0, a.jsx)(o.hzk, {
                children: (0, a.jsxs)('div', {
                    className: f.content,
                    children: [
                        (0, a.jsx)(o.Text, {
                            color: 'header-secondary',
                            variant: 'text-md/normal',
                            children: h.intl.string(h.t.I2BA8P)
                        }),
                        (0, a.jsx)('div', {
                            className: f.tabBar,
                            children: (0, a.jsx)(o.njP, {
                                selectedItem: O,
                                type: 'top',
                                onItemSelect: (t) => {
                                    (C(t), (0, m.ws)({ forumDemoId: t }));
                                },
                                className: f.tags,
                                children: S.map((t, e) =>
                                    (0, a.jsx)(
                                        o.njP.Item,
                                        {
                                            id: e,
                                            children: t.name
                                        },
                                        e
                                    )
                                )
                            })
                        }),
                        (0, a.jsx)(g.Z, { id: O })
                    ]
                })
            }),
            P &&
                (0, a.jsxs)(o.mzw, {
                    className: f.footer,
                    children: [
                        (0, a.jsxs)('div', {
                            className: f.buttons,
                            children: [
                                (0, a.jsx)(s.zx, {
                                    look: s.zx.Looks.BLANK,
                                    color: s.zx.Colors.PRIMARY,
                                    onClick: () => y(x.L.SECONDARY),
                                    className: f.button,
                                    children: v ? h.intl.string(h.t.TulDPj) : h.intl.string(h.t['NX+WJC'])
                                }),
                                v &&
                                    (0, a.jsx)(o.zxk, {
                                        variant: 'primary',
                                        text: h.intl.string(h.t['1X8SKy']),
                                        onClick: () => {
                                            ((0, o.ZDy)(async () => {
                                                let { default: t } = await Promise.all([n.e('45094'), n.e('45822')]).then(n.bind(n, 218613));
                                                return (n) => {
                                                    var r, i;
                                                    return (0, a.jsx)(
                                                        t,
                                                        ((r = (function (t) {
                                                            for (var e = 1; e < arguments.length; e++) {
                                                                var n = null != arguments[e] ? arguments[e] : {},
                                                                    a = Object.keys(n);
                                                                ('function' == typeof Object.getOwnPropertySymbols &&
                                                                    (a = a.concat(
                                                                        Object.getOwnPropertySymbols(n).filter(function (t) {
                                                                            return Object.getOwnPropertyDescriptor(n, t).enumerable;
                                                                        })
                                                                    )),
                                                                    a.forEach(function (e) {
                                                                        var a;
                                                                        ((a = n[e]),
                                                                            e in t
                                                                                ? Object.defineProperty(t, e, {
                                                                                      value: a,
                                                                                      enumerable: !0,
                                                                                      configurable: !0,
                                                                                      writable: !0
                                                                                  })
                                                                                : (t[e] = a));
                                                                    }));
                                                            }
                                                            return t;
                                                        })({}, n)),
                                                        (i = i =
                                                            {
                                                                channelType: p.d4z.GUILD_FORUM,
                                                                guildId: e,
                                                                prefillChannelName: v ? h.intl.string(h.t['5z1Xam']) : void 0
                                                            }),
                                                        Object.getOwnPropertyDescriptors
                                                            ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(i))
                                                            : (function (t, e) {
                                                                  var n = Object.keys(t);
                                                                  if (Object.getOwnPropertySymbols) {
                                                                      var a = Object.getOwnPropertySymbols(t);
                                                                      n.push.apply(n, a);
                                                                  }
                                                                  return n;
                                                              })(Object(i)).forEach(function (t) {
                                                                  Object.defineProperty(r, t, Object.getOwnPropertyDescriptor(i, t));
                                                              }),
                                                        r)
                                                    );
                                                };
                                            }),
                                                y(x.L.PRIMARY));
                                        }
                                    })
                            ]
                        }),
                        (0, a.jsx)(o.Avr, {
                            variant: 'primary',
                            text: h.intl.string(h.t.hvVgAQ),
                            onClick: () => {
                                open(u.V8);
                            }
                        })
                    ]
                })
        ]
    });
}
