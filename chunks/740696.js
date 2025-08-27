n.d(e, { default: () => b }), n(388685), n(539854);
var a = n(951288),
    r = n(647438),
    i = n(442837),
    s = n(257465),
    o = n(369585),
    l = n(103866),
    c = n(37148),
    g = n(481060),
    d = n(430824),
    m = n(496675),
    u = n(228392),
    p = n(941848),
    x = n(710352),
    h = n(981631),
    f = n(921944),
    j = n(388032),
    v = n(87612);
function b(t) {
    let { guildId: e, shouldUpsellCreation: b, transitionState: y, onClose: P } = t,
        N = (0, i.e7)([d.Z], () => d.Z.getGuild(e), [e]),
        S = (0, i.e7)([m.Z], () => m.Z.can(h.Plq.MANAGE_CHANNELS, N)),
        O = [
            {
                id: 0,
                name: j.intl.string(j.t.HTA519),
            },
            {
                id: 1,
                name: j.intl.string(j.t.IHjjY2),
            },
            {
                id: 2,
                name: j.intl.string(j.t.x3drh4),
            },
        ],
        [C, w] = r.useState(0),
        k = [
            {
                variant: b ? "secondary" : "primary",
                text: b ? j.intl.string(j.t.TulDPj) : j.intl.string(j.t["NX+WJC"]),
                onClick: () => P(f.L.SECONDARY),
            },
        ];
    return (
        b &&
            k.push({
                variant: "primary",
                text: j.intl.string(j.t["1X8SKy"]),
                onClick: () => {
                    (0, g.ZDy)(async () => {
                        let { default: t } = await Promise.all([n.e("45094"), n.e("67133")]).then(n.bind(n, 218613));
                        return (n) => {
                            var r, i;
                            return (0, a.jsx)(
                                t,
                                ((r = (function (t) {
                                    for (var e = 1; e < arguments.length; e++) {
                                        var n = null != arguments[e] ? arguments[e] : {},
                                            a = Object.keys(n);
                                        "function" == typeof Object.getOwnPropertySymbols &&
                                            (a = a.concat(
                                                Object.getOwnPropertySymbols(n).filter(function (t) {
                                                    return Object.getOwnPropertyDescriptor(n, t).enumerable;
                                                }),
                                            )),
                                            a.forEach(function (e) {
                                                var a;
                                                (a = n[e]),
                                                    e in t
                                                        ? Object.defineProperty(t, e, {
                                                              value: a,
                                                              enumerable: !0,
                                                              configurable: !0,
                                                              writable: !0,
                                                          })
                                                        : (t[e] = a);
                                            });
                                    }
                                    return t;
                                })({}, n)),
                                (i = i =
                                    {
                                        channelType: h.d4z.GUILD_FORUM,
                                        guildId: e,
                                        prefillChannelName: b ? j.intl.string(j.t["5z1Xam"]) : void 0,
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
                                r),
                            );
                        };
                    }),
                        P(f.L.PRIMARY);
                },
            }),
        (0, a.jsxs)(s.I, {
            transitionState: y,
            size: "xl",
            onClose: async () => await P(),
            children: [
                (0, a.jsx)(c.x, {
                    title: j.intl.string(j.t["6S6WCQ"]),
                    subtitle: j.intl.string(j.t.I2BA8P),
                }),
                (0, a.jsxs)(l.f, {
                    children: [
                        (0, a.jsx)(g.njP, {
                            selectedItem: C,
                            type: "top",
                            onItemSelect: (t) => {
                                w(t), (0, u.ws)({ forumDemoId: t });
                            },
                            className: v.tags,
                            children: O.map((t, e) =>
                                (0, a.jsx)(
                                    g.njP.Item,
                                    {
                                        id: e,
                                        children: t.name,
                                    },
                                    e,
                                ),
                            ),
                        }),
                        (0, a.jsx)(p.Z, { id: C }),
                    ],
                }),
                S &&
                    (0, a.jsx)(o.G, {
                        leading: (0, a.jsx)(g.zxk, {
                            variant: "secondary",
                            text: j.intl.string(j.t.hvVgAQ),
                            icon: g.Gr1,
                            iconPosition: "end",
                            role: "link",
                            onClick: () => {
                                open(x.V8);
                            },
                        }),
                        actions: k,
                    }),
            ],
        })
    );
}
