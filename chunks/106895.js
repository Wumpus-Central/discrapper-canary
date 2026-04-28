i.d(a, { default: () => m });
var e = i(627968),
    n = i(64700),
    s = i(189213),
    l = i(192308),
    r = i(834730),
    c = i(47167),
    d = i(137177),
    o = i(514810),
    x = i(985018),
    h = i(748386);
let m = (t) => {
    let { channel: a, application: m, onClose: u, transitionState: p } = t,
        j = (0, o.N)(a),
        v = n.useCallback(
            () => (
                u(),
                (0, l.openModalLazy)(async () => {
                    let { default: t } = await Promise.all([i.e("21060"), i.e("93154")]).then(i.bind(i, 428185));
                    return (i) => (0, e.jsx)(t, { ...i, channelId: a.id, application: m });
                })
            ),
            [m, a.id, u],
        ),
        k = (0, c.Ay)(a, !0);
    return (0, e.jsx)(s.Modal, {
        transitionState: p,
        "aria-label": x.intl.string(x.t.OJknhi),
        onClose: u,
        title: x.intl.string(x.t.OJknhi),
        actions: [
            { text: x.intl.string(x.t["ETE/oC"]), onClick: u, variant: "secondary" },
            { text: x.intl.string(x.t.LLWaxQ), onClick: v, variant: "critical-primary" },
        ],
        children: (0, e.jsxs)("div", {
            className: h.Qs,
            children: [
                (0, e.jsx)(d.A, { game: m, size: d.M.XLARGE }),
                (0, e.jsxs)("div", {
                    className: h.yu,
                    children: [
                        (0, e.jsxs)("div", {
                            className: h.py,
                            children: [
                                (0, e.jsx)(r.E, {
                                    variant: "text-md/semibold",
                                    color: "text-strong",
                                    children: m.name,
                                }),
                                (0, e.jsx)(r.E, {
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    children: x.intl.format(x.t["0NJZAU"], { channelName: k }),
                                }),
                            ],
                        }),
                        null != j &&
                            (0, e.jsxs)(e.Fragment, {
                                children: [
                                    (0, e.jsx)("div", { className: h.yF }),
                                    (0, e.jsx)(r.E, { variant: "text-xs/normal", color: "text-muted", children: j }),
                                ],
                            }),
                    ],
                }),
            ],
        }),
    });
};
