a.d(e, {
    default: () => b,
}),
    a(896048),
    a(321073);
var n = a(627968),
    r = a(64700),
    s = a(158954),
    i = a(311907),
    l = a(397927),
    c = a(71393),
    o = a(576705),
    d = a(853742),
    g = a(728645),
    m = a(253913),
    u = a(652215),
    x = a(49999),
    f = a(985018),
    p = a(864562);

function b(t) {
    let { guildId: e, shouldUpsellCreation: b, transitionState: h, onClose: j } = t,
        v = (0, i.bG)([c.A], () => c.A.getGuild(e), [e]),
        y = (0, i.bG)([o.A], () => o.A.can(u.xBc.MANAGE_CHANNELS, v)),
        N = [
            {
                id: 0,
                name: f.intl.string(f.t.HTA517),
            },
            {
                id: 1,
                name: f.intl.string(f.t["IHjjY/"]),
            },
            {
                id: 2,
                name: f.intl.string(f.t.x3drh1),
            },
        ],
        [O, P] = r.useState(0),
        S = [
            {
                variant: b ? "secondary" : "primary",
                text: b ? f.intl.string(f.t.TulDPl) : f.intl.string(f.t["NX+WJN"]),
                onClick: () => j(x.i.SECONDARY),
            },
        ];
    return (
        b &&
            S.push({
                variant: "primary",
                text: f.intl.string(f.t["1X8SK/"]),
                onClick: () => {
                    (0, l.mMO)(async () => {
                        let { default: t } = await Promise.all([a.e("64233"), a.e("9743")]).then(a.bind(a, 409200));
                        return (a) => {
                            var r, s;
                            return (0, n.jsx)(
                                t,
                                ((r = (function (t) {
                                    for (var e = 1; e < arguments.length; e++) {
                                        var a = null != arguments[e] ? arguments[e] : {},
                                            n = Object.keys(a);
                                        "function" == typeof Object.getOwnPropertySymbols &&
                                            (n = n.concat(
                                                Object.getOwnPropertySymbols(a).filter(function (t) {
                                                    return Object.getOwnPropertyDescriptor(a, t).enumerable;
                                                }),
                                            )),
                                            n.forEach(function (e) {
                                                var n;
                                                (n = a[e]),
                                                    e in t
                                                        ? Object.defineProperty(t, e, {
                                                              value: n,
                                                              enumerable: !0,
                                                              configurable: !0,
                                                              writable: !0,
                                                          })
                                                        : (t[e] = n);
                                            });
                                    }
                                    return t;
                                })({}, a)),
                                (s = s =
                                    {
                                        channelType: u.rbe.GUILD_FORUM,
                                        guildId: e,
                                        prefillChannelName: b ? f.intl.string(f.t["5z1Xat"]) : void 0,
                                    }),
                                Object.getOwnPropertyDescriptors
                                    ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(s))
                                    : (function (t, e) {
                                          var a = Object.keys(t);
                                          if (Object.getOwnPropertySymbols) {
                                              var n = Object.getOwnPropertySymbols(t);
                                              a.push.apply(a, n);
                                          }
                                          return a;
                                      })(Object(s)).forEach(function (t) {
                                          Object.defineProperty(r, t, Object.getOwnPropertyDescriptor(s, t));
                                      }),
                                r),
                            );
                        };
                    }),
                        j(x.i.PRIMARY);
                },
            }),
        (0, n.jsxs)(s.dWK, {
            transitionState: h,
            size: "xxl",
            onClose: async () => await j(),
            children: [
                (0, n.jsx)(s.rQ0, {
                    title: f.intl.string(f.t["6S6WCQ"]),
                    subtitle: f.intl.string(f.t.I2BA8K),
                }),
                (0, n.jsxs)(s.cwr, {
                    children: [
                        (0, n.jsx)(l.VQ0, {
                            selectedItem: O,
                            type: "top",
                            onItemSelect: (t) => {
                                P(t),
                                    (0, d.Bd)({
                                        forumDemoId: t,
                                    });
                            },
                            className: p._,
                            children: N.map((t, e) =>
                                (0, n.jsx)(
                                    l.VQ0.Item,
                                    {
                                        id: e,
                                        children: t.name,
                                    },
                                    e,
                                ),
                            ),
                        }),
                        (0, n.jsx)(g.A, {
                            id: O,
                        }),
                    ],
                }),
                y &&
                    (0, n.jsx)(s.H7u, {
                        leading: (0, n.jsx)(l.Button, {
                            variant: "secondary",
                            text: f.intl.string(f.t.hvVgAZ),
                            icon: l.I9m,
                            iconPosition: "end",
                            role: "link",
                            onClick: () => {
                                open(m.X_);
                            },
                        }),
                        actions: S,
                    }),
            ],
        })
    );
}
