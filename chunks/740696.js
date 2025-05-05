n.d(e, { default: () => j }), n(388685);
var a = n(255367),
    r = n(73800),
    i = n(442837),
    s = n(481060),
    o = n(313201),
    l = n(430824),
    c = n(496675),
    d = n(228392),
    m = n(941848),
    g = n(710352),
    u = n(981631),
    x = n(921944),
    p = n(388032),
    h = n(74891);
let f = () => [
    {
        id: 0,
        name: p.intl.string(p.t.HTA519)
    },
    {
        id: 1,
        name: p.intl.string(p.t.IHjjY2)
    },
    {
        id: 2,
        name: p.intl.string(p.t.x3drh4)
    }
];
function j(t) {
    let { guildId: e, shouldUpsellCreation: j, transitionState: v, onClose: b } = t,
        y = (0, i.e7)([l.Z], () => l.Z.getGuild(e), [e]),
        N = (0, i.e7)([c.Z], () => c.Z.can(u.Plq.MANAGE_CHANNELS, y)),
        P = f(),
        [S, O] = r.useState(0),
        C = (0, o.Dt)();
    return (0, a.jsxs)(s.Y0X, {
        transitionState: v,
        'aria-labelledby': C,
        size: s.CgR.LARGE,
        children: [
            (0, a.jsxs)(s.xBx, {
                separator: !1,
                className: h.header,
                children: [
                    (0, a.jsx)(s.X6q, {
                        variant: 'heading-xl/semibold',
                        children: p.intl.string(p.t['6S6WCQ'])
                    }),
                    (0, a.jsx)(s.olH, { onClick: () => b() })
                ]
            }),
            (0, a.jsx)(s.hzk, {
                children: (0, a.jsxs)('div', {
                    className: h.content,
                    children: [
                        (0, a.jsx)(s.Text, {
                            color: 'header-secondary',
                            variant: 'text-md/normal',
                            children: p.intl.string(p.t.I2BA8P)
                        }),
                        (0, a.jsx)('div', {
                            className: h.tabBar,
                            children: (0, a.jsx)(s.njP, {
                                selectedItem: S,
                                type: 'top',
                                onItemSelect: (t) => {
                                    O(t), (0, d.ws)({ forumDemoId: t });
                                },
                                className: h.tags,
                                children: P.map((t, e) =>
                                    (0, a.jsx)(
                                        s.njP.Item,
                                        {
                                            id: e,
                                            children: t.name
                                        },
                                        e
                                    )
                                )
                            })
                        }),
                        (0, a.jsx)(m.Z, { id: S })
                    ]
                })
            }),
            N &&
                (0, a.jsxs)(s.mzw, {
                    className: h.footer,
                    children: [
                        (0, a.jsxs)('div', {
                            className: h.buttons,
                            children: [
                                (0, a.jsx)(s.zxk, {
                                    look: s.zxk.Looks.BLANK,
                                    color: s.zxk.Colors.PRIMARY,
                                    onClick: () => b(x.L.SECONDARY),
                                    className: h.button,
                                    children: j ? p.intl.string(p.t.TulDPj) : p.intl.string(p.t['NX+WJC'])
                                }),
                                j &&
                                    (0, a.jsx)(s.zxk, {
                                        onClick: () => {
                                            (0, s.ZDy)(async () => {
                                                let { default: t } = await Promise.all([n.e('45094'), n.e('45822')]).then(n.bind(n, 218613));
                                                return (n) => {
                                                    var r, i;
                                                    return (0, a.jsx)(
                                                        t,
                                                        ((r = (function (t) {
                                                            for (var e = 1; e < arguments.length; e++) {
                                                                var n = null != arguments[e] ? arguments[e] : {},
                                                                    a = Object.keys(n);
                                                                'function' == typeof Object.getOwnPropertySymbols &&
                                                                    (a = a.concat(
                                                                        Object.getOwnPropertySymbols(n).filter(function (t) {
                                                                            return Object.getOwnPropertyDescriptor(n, t).enumerable;
                                                                        })
                                                                    )),
                                                                    a.forEach(function (e) {
                                                                        var a;
                                                                        (a = n[e]),
                                                                            e in t
                                                                                ? Object.defineProperty(t, e, {
                                                                                      value: a,
                                                                                      enumerable: !0,
                                                                                      configurable: !0,
                                                                                      writable: !0
                                                                                  })
                                                                                : (t[e] = a);
                                                                    });
                                                            }
                                                            return t;
                                                        })({}, n)),
                                                        (i = i =
                                                            {
                                                                channelType: u.d4z.GUILD_FORUM,
                                                                guildId: e,
                                                                prefillChannelName: j ? p.intl.string(p.t['5z1Xam']) : void 0
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
                                                b(x.L.PRIMARY);
                                        },
                                        children: p.intl.string(p.t['1X8SKy'])
                                    })
                            ]
                        }),
                        (0, a.jsx)(s.zxk, {
                            look: s.zxk.Looks.LINK,
                            color: s.zxk.Colors.LINK,
                            onClick: () => {
                                open(g.V8);
                            },
                            children: p.intl.string(p.t.hvVgAQ)
                        })
                    ]
                })
        ]
    });
}
