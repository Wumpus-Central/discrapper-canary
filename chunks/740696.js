n.d(e, { default: () => f }), n(388685), n(539854);
var a = n(951288),
    r = n(647438),
    i = n(793030),
    s = n(442837),
    o = n(481060),
    l = n(430824),
    c = n(496675),
    g = n(228392),
    d = n(941848),
    m = n(710352),
    u = n(981631),
    p = n(921944),
    x = n(388032),
    h = n(87612);
function f(t) {
    let { guildId: e, shouldUpsellCreation: f, transitionState: j, onClose: v } = t,
        b = (0, s.e7)([l.Z], () => l.Z.getGuild(e), [e]),
        y = (0, s.e7)([c.Z], () => c.Z.can(u.Plq.MANAGE_CHANNELS, b)),
        P = [
            {
                id: 0,
                name: x.intl.string(x.t.HTA519),
            },
            {
                id: 1,
                name: x.intl.string(x.t.IHjjY2),
            },
            {
                id: 2,
                name: x.intl.string(x.t.x3drh4),
            },
        ],
        [N, S] = r.useState(0),
        O = [
            {
                variant: f ? "secondary" : "primary",
                text: f ? x.intl.string(x.t.TulDPj) : x.intl.string(x.t["NX+WJC"]),
                onClick: () => v(p.L.SECONDARY),
            },
        ];
    return (
        f &&
            O.push({
                variant: "primary",
                text: x.intl.string(x.t["1X8SKy"]),
                onClick: () => {
                    (0, o.ZDy)(async () => {
                        let { default: t } = await Promise.all([n.e("29497"), n.e("53781")]).then(n.bind(n, 241865));
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
                                        channelType: u.d4z.GUILD_FORUM,
                                        guildId: e,
                                        prefillChannelName: f ? x.intl.string(x.t["5z1Xam"]) : void 0,
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
                        v(p.L.PRIMARY);
                },
            }),
        (0, a.jsxs)(i.IX, {
            transitionState: j,
            size: "xl",
            onClose: async () => await v(),
            children: [
                (0, a.jsx)(i.xBx, {
                    title: x.intl.string(x.t["6S6WCQ"]),
                    subtitle: x.intl.string(x.t.I2BA8P),
                }),
                (0, a.jsxs)(i.fef, {
                    children: [
                        (0, a.jsx)(o.njP, {
                            selectedItem: N,
                            type: "top",
                            onItemSelect: (t) => {
                                S(t), (0, g.ws)({ forumDemoId: t });
                            },
                            className: h.tags,
                            children: P.map((t, e) =>
                                (0, a.jsx)(
                                    o.njP.Item,
                                    {
                                        id: e,
                                        children: t.name,
                                    },
                                    e,
                                ),
                            ),
                        }),
                        (0, a.jsx)(d.Z, { id: N }),
                    ],
                }),
                y &&
                    (0, a.jsx)(i.Go$, {
                        leading: (0, a.jsx)(o.Button, {
                            variant: "secondary",
                            text: x.intl.string(x.t.hvVgAQ),
                            icon: o.Gr1,
                            iconPosition: "end",
                            role: "link",
                            onClick: () => {
                                open(m.V8);
                            },
                        }),
                        actions: O,
                    }),
            ],
        })
    );
}
