i.d(a, { default: () => m });
var n = i(477900),
    s = i(582128),
    e = i(189213),
    l = i(192308),
    r = i(834730),
    d = i(47167),
    c = i(769015),
    o = i(514810),
    x = i(105292),
    h = i(96749);
let m = function (t) {
    let { channel: a, application: m, onClose: u, transitionState: p } = t,
        j = (0, o.N)(a),
        y = s.useCallback(
            () => (
                u(),
                (0, l.openModalLazy)(async () => {
                    let { default: t } = await Promise.all([i.e("421060"), i.e("193154")]).then(i.bind(i, 428185));
                    return (i) => (0, n.jsx)(t, { ...i, channelId: a.id, application: m });
                })
            ),
            [m, a.id, u],
        ),
        v = (0, d.Ay)(a, !0);
    return (0, n.jsx)(e.a, {
        transitionState: p,
        "aria-label": x.intl.string(x.t.OJknhi),
        onClose: u,
        title: x.intl.string(x.t.OJknhi),
        actions: [
            { text: x.intl.string(x.t["ETE/oC"]), onClick: u, variant: "secondary" },
            { text: x.intl.string(x.t.LLWaxQ), onClick: y, variant: "critical-primary" },
        ],
        children: (0, n.jsxs)("div", {
            className: h.Qs,
            children: [
                (0, n.jsx)(c.A, { game: m, size: c.M.XLARGE }),
                (0, n.jsxs)("div", {
                    className: h.yu,
                    children: [
                        (0, n.jsxs)("div", {
                            className: h.py,
                            children: [
                                (0, n.jsx)(r.E, {
                                    variant: "body-md/semibold",
                                    color: "text-strong",
                                    children: m.name,
                                }),
                                (0, n.jsx)(r.E, {
                                    variant: "body-sm/normal",
                                    color: "text-muted",
                                    children: x.intl.format(x.t["0NJZAU"], { channelName: v }),
                                }),
                            ],
                        }),
                        null != j &&
                            (0, n.jsxs)(n.Fragment, {
                                children: [
                                    (0, n.jsx)("div", { className: h.yF }),
                                    (0, n.jsx)(r.E, { variant: "body-xs/normal", color: "text-muted", children: j }),
                                ],
                            }),
                    ],
                }),
            ],
        }),
    });
};
