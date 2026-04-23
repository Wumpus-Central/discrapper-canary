n.d(a, { default: () => m });
var t = n(627968);
n(64700);
var i = n(503698),
    c = n.n(i),
    _ = n(224640),
    r = n(696208),
    o = n(573613),
    s = n(534514),
    l = n(270003),
    d = n(915089),
    f = n(225858),
    x = n(895600),
    h = n(985018),
    p = n(31208);
function m(e) {
    let { transitionState: a, onClose: n, guildTemplate: i } = e,
        { form: m, preview: u, handleSubmit: C } = (0, f.A)(i, !1),
        v = (0, d.GV)();
    return (0, t.jsxs)(_.d, {
        transitionState: a,
        onClose: n,
        size: "xxl",
        "aria-labelledby": v,
        children: [
            (0, t.jsxs)("div", {
                className: p.jT,
                children: [
                    (0, t.jsx)("div", {
                        className: c()(p.jx, p.Iz),
                        children: (0, t.jsx)("div", {
                            className: p.OQ,
                            children: (0, t.jsx)(x.A, { guildTemplate: i, headerId: v }),
                        }),
                    }),
                    (0, t.jsx)("div", {
                        className: c()(p.jx, p.gy),
                        children: (0, t.jsxs)(o.Ip, {
                            className: p.KJ,
                            children: [
                                (0, t.jsx)(s.D, {
                                    variant: "heading-xl/semibold",
                                    className: p.wx,
                                    children: h.intl.string(h.t.UNFvtM),
                                }),
                                (0, t.jsxs)(l.n, { children: [m, u] }),
                            ],
                        }),
                    }),
                ],
            }),
            (0, t.jsx)(r.H, {
                actions: [
                    { variant: "secondary", text: h.intl.string(h.t.cpT0Cq), onClick: n },
                    {
                        variant: "primary",
                        text: h.intl.string(h.t.CumH4u),
                        onClick: async () => {
                            null != (await C()) && n();
                        },
                    },
                ],
            }),
        ],
    });
}
