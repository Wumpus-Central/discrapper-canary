var n = a(477900),
    s = a(582128),
    e = a(189213),
    l = a(192308),
    r = a(834730),
    c = a(47167),
    d = a(769015),
    o = a(514810),
    m = a(792996),
    x = a(96749);
a.d(
    i,
    {},
    {
        default: function (t) {
            let { channel: i, application: h, onClose: u, transitionState: j } = t,
                p = (0, o.N)(i),
                v = s.useCallback(
                    () => (
                        u(),
                        (0, l.mM)(async () => {
                            let { default: t } = await Promise.all([a.e(421060), a.e(193154)]).then(a.bind(a, 428185));
                            return (a) => (0, n.jsx)(t, { ...a, channelId: i.id, application: h });
                        })
                    ),
                    [h, i.id, u],
                ),
                y = (0, c.Ay)(i, !0);
            return (0, n.jsx)(e.a, {
                transitionState: j,
                "aria-label": m.intl.string(m.t.OJknhi),
                onClose: u,
                title: m.intl.string(m.t.OJknhi),
                actions: [
                    { text: m.intl.string(m.t["ETE/oC"]), onClick: u, variant: "secondary" },
                    { text: m.intl.string(m.t.LLWaxQ), onClick: v, variant: "critical-primary" },
                ],
                children: (0, n.jsxs)("div", {
                    className: x.Qs,
                    children: [
                        (0, n.jsx)(d.A, { game: h, size: d.M.XLARGE }),
                        (0, n.jsxs)("div", {
                            className: x.yu,
                            children: [
                                (0, n.jsxs)("div", {
                                    className: x.py,
                                    children: [
                                        (0, n.jsx)(r.E, {
                                            variant: "body-md/semibold",
                                            color: "text-strong",
                                            children: h.name,
                                        }),
                                        (0, n.jsx)(r.E, {
                                            variant: "body-sm/normal",
                                            color: "text-muted",
                                            children: m.intl.format(m.t["0NJZAU"], { channelName: y }),
                                        }),
                                    ],
                                }),
                                null != p &&
                                    (0, n.jsxs)(n.Fragment, {
                                        children: [
                                            (0, n.jsx)("div", { className: x.yF }),
                                            (0, n.jsx)(r.E, {
                                                variant: "body-xs/normal",
                                                color: "text-muted",
                                                children: p,
                                            }),
                                        ],
                                    }),
                            ],
                        }),
                    ],
                }),
            });
        },
    },
);
