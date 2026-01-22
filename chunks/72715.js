s.d(a, {
    default: () => _,
});
var c = s(627968);
s(64700);
var d = s(503698),
    i = s.n(d),
    t = s(158954),
    b = s(397927),
    f = s(915089),
    n = s(225858),
    l = s(895600),
    r = s(985018),
    x = s(167451);

function _(e) {
    let { transitionState: a, onClose: s, guildTemplate: d } = e,
        { form: _, preview: o, handleSubmit: p } = (0, n.A)(d, !1),
        h = (0, f.GV)();
    return (0, c.jsxs)(t.dWK, {
        transitionState: a,
        onClose: s,
        size: "xxl",
        "aria-labelledby": h,
        children: [
            (0, c.jsxs)("div", {
                className: x.jT,
                children: [
                    (0, c.jsx)("div", {
                        className: i()(x.jx, x.Iz),
                        children: (0, c.jsx)("div", {
                            className: x.OQ,
                            children: (0, c.jsx)(l.A, {
                                guildTemplate: d,
                                headerId: h,
                            }),
                        }),
                    }),
                    (0, c.jsx)("div", {
                        className: i()(x.jx, x.gy),
                        children: (0, c.jsxs)(b.HOs, {
                            className: x.KJ,
                            children: [
                                (0, c.jsx)(b.Heading, {
                                    variant: "heading-xl/semibold",
                                    className: x.wx,
                                    children: r.intl.string(r.t.UNFvtM),
                                }),
                                (0, c.jsxs)(b.nVY, {
                                    children: [_, o],
                                }),
                            ],
                        }),
                    }),
                ],
            }),
            (0, c.jsx)(t.H7u, {
                actions: [
                    {
                        variant: "secondary",
                        text: r.intl.string(r.t.cpT0Cq),
                        onClick: s,
                    },
                    {
                        variant: "primary",
                        text: r.intl.string(r.t.CumH4u),
                        onClick: async () => {
                            null != (await p()) && s();
                        },
                    },
                ],
            }),
        ],
    });
}
