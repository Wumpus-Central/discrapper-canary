var n = i(477900),
    a = i(582128),
    s = i(503698),
    r = i.n(s),
    l = i(821578),
    c = i(855986),
    o = i(189213),
    d = i(939249),
    u = i(834730),
    m = i(964486),
    p = i(734057),
    b = i(303227),
    g = i(920639),
    k = i(538638),
    h = i(558076),
    y = i(538517),
    C = i(687782),
    x = i(792996),
    A = i(692772);
i.d(
    e,
    {},
    {
        default: function (t) {
            let { channelId: e, transitionState: i, onClose: s } = t,
                j = (0, c.bG)([h.A], () => h.A.getRoom(e)?.background ?? l.I.DEFAULT),
                [N, f] = (0, a.useState)(j),
                v = (0, a.useMemo)(
                    () =>
                        Object.entries(y.iX).map((t) => {
                            let [e, i] = t;
                            return { ...i, key: e };
                        }),
                    [],
                ),
                _ = (0, c.bG)([p.A], () => p.A.getChannel(e)?.guild_id),
                E = j === N;
            return (
                (0, m.Ay)(() => {
                    (0, g.n0)({ guildId: _, channelId: e, interactionType: "room_selector_opened" });
                }),
                (0, n.jsx)(o.a, {
                    transitionState: i,
                    title: x.intl.string(C.default.kmzWUc),
                    subtitle: x.intl.string(C.default["Rqmi9/"]),
                    actions: [
                        { text: x.intl.string(x.t["ETE/oC"]), onClick: s, variant: "secondary" },
                        {
                            text: x.intl.string(x.t["1Qm822"]),
                            variant: "primary",
                            type: "submit",
                            onClick: function () {
                                null == _ || E || ((0, b.AQ)(_, e, { background: N }).catch((t) => (0, k.b)()), s());
                            },
                            disabled: E,
                        },
                    ],
                    onClose: s,
                    children: (0, n.jsx)("div", {
                        className: A.Qs,
                        children: v.map((t) =>
                            (0, n.jsxs)(
                                d.D,
                                {
                                    onClick: () => {
                                        f(Number(t.key));
                                    },
                                    className: r()(A.eh, { [A.wH]: N.toString() === t.key }),
                                    children: [
                                        (0, n.jsx)("img", {
                                            src: t.background,
                                            alt: t.getName(),
                                            style: { aspectRatio: t.aspectRatio },
                                            className: A.Sl,
                                        }),
                                        (0, n.jsx)(u.E, { variant: "body-sm/semibold", children: t.getName() }),
                                    ],
                                },
                                t.key,
                            ),
                        ),
                    }),
                })
            );
        },
    },
);
