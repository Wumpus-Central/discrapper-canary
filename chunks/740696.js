a.d(t, { default: () => f }), a(47120);
var n = a(200651),
    r = a(192379),
    s = a(442837),
    i = a(481060),
    o = a(313201),
    c = a(430824),
    l = a(496675),
    d = a(228392),
    m = a(941848),
    g = a(710352),
    u = a(981631),
    N = a(921944),
    x = a(388032),
    p = a(74891);
let h = () => [
    {
        id: 0,
        name: x.NW.string(x.t.HTA519)
    },
    {
        id: 1,
        name: x.NW.string(x.t.IHjjY2)
    },
    {
        id: 2,
        name: x.NW.string(x.t.x3drh4)
    }
];
function f(e) {
    let { guildId: t, shouldUpsellCreation: f, transitionState: j, onClose: v } = e,
        b = (0, s.e7)([c.Z], () => c.Z.getGuild(t), [t]),
        y = (0, s.e7)([l.Z], () => l.Z.can(u.Plq.MANAGE_CHANNELS, b)),
        W = h(),
        [P, S] = r.useState(0),
        O = (0, o.Dt)();
    return (0, n.jsxs)(i.Y0X, {
        transitionState: j,
        'aria-labelledby': O,
        size: i.CgR.LARGE,
        children: [
            (0, n.jsxs)(i.xBx, {
                separator: !1,
                className: p.header,
                children: [
                    (0, n.jsx)(i.X6q, {
                        variant: 'heading-xl/semibold',
                        children: x.NW.string(x.t['6S6WCQ'])
                    }),
                    (0, n.jsx)(i.olH, { onClick: () => v() })
                ]
            }),
            (0, n.jsx)(i.hzk, {
                children: (0, n.jsxs)('div', {
                    className: p.content,
                    children: [
                        (0, n.jsx)(i.Text, {
                            color: 'header-secondary',
                            variant: 'text-md/normal',
                            children: x.NW.string(x.t.I2BA8P)
                        }),
                        (0, n.jsx)('div', {
                            className: p.tabBar,
                            children: (0, n.jsx)(i.njP, {
                                selectedItem: P,
                                type: 'top',
                                onItemSelect: (e) => {
                                    S(e), (0, d.ws)({ forumDemoId: e });
                                },
                                className: p.tags,
                                children: W.map((e, t) =>
                                    (0, n.jsx)(
                                        i.njP.Item,
                                        {
                                            id: t,
                                            children: e.name
                                        },
                                        t
                                    )
                                )
                            })
                        }),
                        (0, n.jsx)(m.Z, { id: P })
                    ]
                })
            }),
            y &&
                (0, n.jsxs)(i.mzw, {
                    className: p.footer,
                    children: [
                        (0, n.jsxs)('div', {
                            className: p.buttons,
                            children: [
                                (0, n.jsx)(i.zxk, {
                                    look: i.zxk.Looks.BLANK,
                                    color: i.zxk.Colors.PRIMARY,
                                    onClick: () => v(N.L.SECONDARY),
                                    className: p.button,
                                    children: f ? x.NW.string(x.t.TulDPj) : x.NW.string(x.t['NX+WJC'])
                                }),
                                f &&
                                    (0, n.jsx)(i.zxk, {
                                        onClick: () => {
                                            (0, i.ZDy)(async () => {
                                                let { default: e } = await Promise.all([a.e('45094'), a.e('45822')]).then(a.bind(a, 218613));
                                                return (a) => {
                                                    var r, s;
                                                    return (0, n.jsx)(
                                                        e,
                                                        ((r = (function (e) {
                                                            for (var t = 1; t < arguments.length; t++) {
                                                                var a = null != arguments[t] ? arguments[t] : {},
                                                                    n = Object.keys(a);
                                                                'function' == typeof Object.getOwnPropertySymbols &&
                                                                    (n = n.concat(
                                                                        Object.getOwnPropertySymbols(a).filter(function (e) {
                                                                            return Object.getOwnPropertyDescriptor(a, e).enumerable;
                                                                        })
                                                                    )),
                                                                    n.forEach(function (t) {
                                                                        var n;
                                                                        (n = a[t]),
                                                                            t in e
                                                                                ? Object.defineProperty(e, t, {
                                                                                      value: n,
                                                                                      enumerable: !0,
                                                                                      configurable: !0,
                                                                                      writable: !0
                                                                                  })
                                                                                : (e[t] = n);
                                                                    });
                                                            }
                                                            return e;
                                                        })({}, a)),
                                                        (s = s =
                                                            {
                                                                channelType: u.d4z.GUILD_FORUM,
                                                                guildId: t,
                                                                prefillChannelName: f ? x.NW.string(x.t['5z1Xam']) : void 0
                                                            }),
                                                        Object.getOwnPropertyDescriptors
                                                            ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(s))
                                                            : (function (e, t) {
                                                                  var a = Object.keys(e);
                                                                  if (Object.getOwnPropertySymbols) {
                                                                      var n = Object.getOwnPropertySymbols(e);
                                                                      a.push.apply(a, n);
                                                                  }
                                                                  return a;
                                                              })(Object(s)).forEach(function (e) {
                                                                  Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(s, e));
                                                              }),
                                                        r)
                                                    );
                                                };
                                            }),
                                                v(N.L.PRIMARY);
                                        },
                                        children: x.NW.string(x.t['1X8SKy'])
                                    })
                            ]
                        }),
                        (0, n.jsx)(i.zxk, {
                            look: i.zxk.Looks.LINK,
                            color: i.zxk.Colors.LINK,
                            onClick: () => {
                                open(g.V8);
                            },
                            children: x.NW.string(x.t.hvVgAQ)
                        })
                    ]
                })
        ]
    });
}
