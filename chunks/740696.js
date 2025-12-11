n.d(e, { default: () => h }), n(388685), n(539854);
var a = n(54381),
    r = n(473749),
    i = n(793030),
    s = n(442837),
    o = n(481060),
    l = n(430824),
    c = n(496675),
    d = n(228392),
    g = n(941848),
    m = n(710352),
    u = n(981631),
    f = n(921944),
    p = n(388032),
    x = n(212553);
function h(t) {
    let { guildId: e, shouldUpsellCreation: h, transitionState: b, onClose: v } = t,
        j = (0, s.e7)([l.Z], () => l.Z.getGuild(e), [e]),
        y = (0, s.e7)([c.Z], () => c.Z.can(u.Plq.MANAGE_CHANNELS, j)),
        N = [
            {
                id: 0,
                name: p.intl.string(p.t.HTA517),
            },
            {
                id: 1,
                name: p.intl.string(p.t["IHjjY/"]),
            },
            {
                id: 2,
                name: p.intl.string(p.t.x3drh1),
            },
        ],
        [P, S] = r.useState(0),
        O = [
            {
                variant: h ? "secondary" : "primary",
                text: h ? p.intl.string(p.t.TulDPl) : p.intl.string(p.t["NX+WJN"]),
                onClick: () => v(f.L.SECONDARY),
            },
        ];
    return (
        h &&
            O.push({
                variant: "primary",
                text: p.intl.string(p.t["1X8SK/"]),
                onClick: () => {
                    (0, o.ZDy)(async () => {
                        let { default: t } = await Promise.all([n.e("29497"), n.e("59679")]).then(n.bind(n, 241865));
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
                                        prefillChannelName: h ? p.intl.string(p.t["5z1Xat"]) : void 0,
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
                        v(f.L.PRIMARY);
                },
            }),
        (0, a.jsxs)(i.IX, {
            transitionState: b,
            size: "xxl",
            onClose: async () => await v(),
            children: [
                (0, a.jsx)(i.xBx, {
                    title: p.intl.string(p.t["6S6WCQ"]),
                    subtitle: p.intl.string(p.t.I2BA8K),
                }),
                (0, a.jsxs)(i.fef, {
                    children: [
                        (0, a.jsx)(o.njP, {
                            selectedItem: P,
                            type: "top",
                            onItemSelect: (t) => {
                                S(t), (0, d.ws)({ forumDemoId: t });
                            },
                            className: x.tags,
                            children: N.map((t, e) =>
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
                        (0, a.jsx)(g.Z, { id: P }),
                    ],
                }),
                y &&
                    (0, a.jsx)(i.Go$, {
                        leading: (0, a.jsx)(o.Button, {
                            variant: "secondary",
                            text: p.intl.string(p.t.hvVgAZ),
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
