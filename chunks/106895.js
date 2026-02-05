a.d(e, { default: () => m });
var i = a(627968),
    n = a(64700),
    s = a(158954),
    l = a(397927),
    r = a(47167),
    d = a(769015),
    c = a(514810),
    o = a(985018),
    x = a(869527);
let m = (t) => {
    let { channel: e, application: m, onClose: h, transitionState: u } = t,
        p = (0, c.N)(e),
        j = n.useCallback(
            () => (
                h(),
                (0, l.mMO)(async () => {
                    let { default: t } = await a.e("93154").then(a.bind(a, 428185));
                    return (a) => (0, i.jsx)(t, { ...a, channelId: e.id, application: m });
                })
            ),
            [m, e.id, h],
        ),
        v = (0, r.Ay)(e, !0);
    return (0, i.jsx)(s.Modal, {
        transitionState: u,
        "aria-label": o.intl.string(o.t.OJknhi),
        onClose: h,
        title: o.intl.string(o.t.OJknhi),
        actions: [
            { text: o.intl.string(o.t["ETE/oC"]), onClick: h, variant: "secondary" },
            { text: o.intl.string(o.t.LLWaxQ), onClick: j, variant: "critical-primary" },
        ],
        children: (0, i.jsxs)("div", {
            className: x.Qs,
            children: [
                (0, i.jsx)(d.A, { game: m, size: d.M.XLARGE }),
                (0, i.jsxs)("div", {
                    className: x.yu,
                    children: [
                        (0, i.jsxs)("div", {
                            className: x.py,
                            children: [
                                (0, i.jsx)(l.Text, {
                                    variant: "text-md/semibold",
                                    color: "text-strong",
                                    children: m.name,
                                }),
                                (0, i.jsx)(l.Text, {
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    children: o.intl.format(o.t["0NJZAU"], { channelName: v }),
                                }),
                            ],
                        }),
                        null != p &&
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)("div", { className: x.yF }),
                                    (0, i.jsx)(l.Text, { variant: "text-xs/normal", color: "text-muted", children: p }),
                                ],
                            }),
                    ],
                }),
            ],
        }),
    });
};
