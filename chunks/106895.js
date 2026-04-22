a.d(e, { default: () => h });
var i = a(627968),
    n = a(64700),
    s = a(189213),
    l = a(192308),
    r = a(834730),
    d = a(47167),
    c = a(769015),
    o = a(514810),
    x = a(985018),
    m = a(748386);
let h = (t) => {
    let { channel: e, application: h, onClose: p, transitionState: u } = t,
        j = (0, o.N)(e),
        v = n.useCallback(
            () => (
                p(),
                (0, l.openModalLazy)(async () => {
                    let { default: t } = await a.e("93154").then(a.bind(a, 428185));
                    return (a) => (0, i.jsx)(t, { ...a, channelId: e.id, application: h });
                })
            ),
            [h, e.id, p],
        ),
        y = (0, d.Ay)(e, !0);
    return (0, i.jsx)(s.Modal, {
        transitionState: u,
        "aria-label": x.intl.string(x.t.OJknhi),
        onClose: p,
        title: x.intl.string(x.t.OJknhi),
        actions: [
            { text: x.intl.string(x.t["ETE/oC"]), onClick: p, variant: "secondary" },
            { text: x.intl.string(x.t.LLWaxQ), onClick: v, variant: "critical-primary" },
        ],
        children: (0, i.jsxs)("div", {
            className: m.Qs,
            children: [
                (0, i.jsx)(c.A, { game: h, size: c.M.XLARGE }),
                (0, i.jsxs)("div", {
                    className: m.yu,
                    children: [
                        (0, i.jsxs)("div", {
                            className: m.py,
                            children: [
                                (0, i.jsx)(r.E, {
                                    variant: "text-md/semibold",
                                    color: "text-strong",
                                    children: h.name,
                                }),
                                (0, i.jsx)(r.E, {
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    children: x.intl.format(x.t["0NJZAU"], { channelName: y }),
                                }),
                            ],
                        }),
                        null != j &&
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)("div", { className: m.yF }),
                                    (0, i.jsx)(r.E, { variant: "text-xs/normal", color: "text-muted", children: j }),
                                ],
                            }),
                    ],
                }),
            ],
        }),
    });
};
