n.d(e, { default: () => b }), n(388685), n(539854);
var a = n(54381),
    i = n(473749),
    r = n(793030),
    s = n(442837),
    o = n(481060),
    l = n(430824),
    c = n(496675),
    d = n(228392),
    g = n(941848),
    m = n(710352),
    u = n(981631),
    f = n(921944),
    x = n(388032),
    p = n(212553);
function b(t) {
    let { guildId: e, shouldUpsellCreation: b, transitionState: h, onClose: v } = t,
        j = (0, s.e7)([l.Z], () => l.Z.getGuild(e), [e]),
        y = (0, s.e7)([c.Z], () => c.Z.can(u.Plq.MANAGE_CHANNELS, j)),
        N = [
            {
                id: 0,
                name: x.intl.string(x.t.HTA517),
            },
            {
                id: 1,
                name: x.intl.string(x.t["IHjjY/"]),
            },
            {
                id: 2,
                name: x.intl.string(x.t.x3drh1),
            },
        ],
        [P, S] = i.useState(0),
        O = [
            {
                variant: b ? "secondary" : "primary",
                text: b ? x.intl.string(x.t.TulDPl) : x.intl.string(x.t["NX+WJN"]),
                onClick: () => v(f.L.SECONDARY),
            },
        ];
    return (
        b &&
            O.push({
                variant: "primary",
                text: x.intl.string(x.t["1X8SK/"]),
                onClick: () => {
                    (0, o.ZDy)(async () => {
                        let { default: t } = await Promise.all([n.e("29497"), n.e("59679")]).then(n.bind(n, 241865));
                        return (n) => {
                            var i, r;
                            return (0, a.jsx)(
                                t,
                                ((i = (function (t) {
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
                                (r = r =
                                    {
                                        channelType: u.d4z.GUILD_FORUM,
                                        guildId: e,
                                        prefillChannelName: b ? x.intl.string(x.t["5z1Xat"]) : void 0,
                                    }),
                                Object.getOwnPropertyDescriptors
                                    ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(r))
                                    : (function (t, e) {
                                          var n = Object.keys(t);
                                          if (Object.getOwnPropertySymbols) {
                                              var a = Object.getOwnPropertySymbols(t);
                                              n.push.apply(n, a);
                                          }
                                          return n;
                                      })(Object(r)).forEach(function (t) {
                                          Object.defineProperty(i, t, Object.getOwnPropertyDescriptor(r, t));
                                      }),
                                i),
                            );
                        };
                    }),
                        v(f.L.PRIMARY);
                },
            }),
        (0, a.jsxs)(r.IX, {
            transitionState: h,
            size: "xxl",
            onClose: async () => await v(),
            children: [
                (0, a.jsx)(r.xBx, {
                    title: x.intl.string(x.t["6S6WCQ"]),
                    subtitle: x.intl.string(x.t.I2BA8K),
                }),
                (0, a.jsxs)(r.fef, {
                    children: [
                        (0, a.jsx)(o.njP, {
                            selectedItem: P,
                            type: "top",
                            onItemSelect: (t) => {
                                S(t), (0, d.ws)({ forumDemoId: t });
                            },
                            className: p.tags,
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
                    (0, a.jsx)(r.Go$, {
                        leading: (0, a.jsx)(o.Button, {
                            variant: "secondary",
                            text: x.intl.string(x.t.hvVgAZ),
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
