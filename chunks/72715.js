a.d(i, { default: () => u });
var e = a(627968);
a(64700);
var n = a(503698),
    t = a.n(n),
    l = a(224640),
    r = a(696208),
    d = a(364522),
    c = a(297264),
    x = a(270003),
    h = a(915089),
    j = a(871194),
    o = a(895600),
    p = a(375708),
    m = a(31208);
function u(s) {
    let { transitionState: i, onClose: a, guildTemplate: n } = s,
        { form: u, preview: v, handleSubmit: C } = (0, j.A)(n, !1),
        N = (0, h.GV)();
    return (0, e.jsxs)(l.d, {
        transitionState: i,
        onClose: a,
        size: "xxl",
        "aria-labelledby": N,
        children: [
            (0, e.jsxs)("div", {
                className: m.jT,
                children: [
                    (0, e.jsx)("div", {
                        className: t()(m.jx, m.Iz),
                        children: (0, e.jsx)("div", {
                            className: m.OQ,
                            children: (0, e.jsx)(o.A, { guildTemplate: n, headerId: N }),
                        }),
                    }),
                    (0, e.jsx)("div", {
                        className: t()(m.jx, m.gy),
                        children: (0, e.jsxs)(d.Ip, {
                            className: m.KJ,
                            children: [
                                (0, e.jsx)(c.D, {
                                    variant: "heading-xl/semibold",
                                    className: m.wx,
                                    children: p.intl.string(p.t.UNFvtM),
                                }),
                                (0, e.jsxs)(x.n, { children: [u, v] }),
                            ],
                        }),
                    }),
                ],
            }),
            (0, e.jsx)(r.H, {
                actions: [
                    { variant: "secondary", text: p.intl.string(p.t.cpT0Cq), onClick: a },
                    {
                        variant: "primary",
                        text: p.intl.string(p.t.CumH4u),
                        onClick: () => {
                            C();
                        },
                    },
                ],
            }),
        ],
    });
}
