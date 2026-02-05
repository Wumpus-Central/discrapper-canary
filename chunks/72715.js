i.d(a, { default: () => h });
var n = i(627968);
i(64700);
var c = i(503698),
    t = i.n(c),
    r = i(158954),
    s = i(397927),
    _ = i(915089),
    l = i(225858),
    d = i(895600),
    o = i(985018),
    x = i(167451);
function h(e) {
    let { transitionState: a, onClose: i, guildTemplate: c } = e,
        { form: h, preview: f, handleSubmit: p } = (0, l.A)(c, !1),
        C = (0, _.GV)();
    return (0, n.jsxs)(r.dWK, {
        transitionState: a,
        onClose: i,
        size: "xxl",
        "aria-labelledby": C,
        children: [
            (0, n.jsxs)("div", {
                className: x.jT,
                children: [
                    (0, n.jsx)("div", {
                        className: t()(x.jx, x.Iz),
                        children: (0, n.jsx)("div", {
                            className: x.OQ,
                            children: (0, n.jsx)(d.A, { guildTemplate: c, headerId: C }),
                        }),
                    }),
                    (0, n.jsx)("div", {
                        className: t()(x.jx, x.gy),
                        children: (0, n.jsxs)(s.HOs, {
                            className: x.KJ,
                            children: [
                                (0, n.jsx)(s.Heading, {
                                    variant: "heading-xl/semibold",
                                    className: x.wx,
                                    children: o.intl.string(o.t.UNFvtM),
                                }),
                                (0, n.jsxs)(s.nVY, { children: [h, f] }),
                            ],
                        }),
                    }),
                ],
            }),
            (0, n.jsx)(r.H7u, {
                actions: [
                    { variant: "secondary", text: o.intl.string(o.t.cpT0Cq), onClick: i },
                    {
                        variant: "primary",
                        text: o.intl.string(o.t.CumH4u),
                        onClick: async () => {
                            null != (await p()) && i();
                        },
                    },
                ],
            }),
        ],
    });
}
