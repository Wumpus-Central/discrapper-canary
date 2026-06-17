a.d(t, { default: () => j });
var e = a(627968);
a(64700);
var i = a(735438),
    l = a.n(i),
    n = a(976634),
    r = a(462887),
    d = a(935462),
    c = a(534514),
    g = a(834730),
    m = a(821609),
    v = a(736653),
    o = a(915089),
    b = a(375708),
    p = a(83136);
let h = ["/assets/36668e0a5832822f.svg", "/assets/3a31d989497ba4f1.svg", "/assets/f959ee6e6a8d2d0b.svg"],
    x = ["/assets/6dadee9234160dc1.svg", "/assets/62d886a31822c89a.svg", "/assets/377cb29b8f197452.svg"],
    u = [
        () => b.intl.string(b.t["w2o/60"]),
        () => b.intl.string(b.t.FiAvKg),
        () => b.intl.string(b.t.vKUFek),
        () => b.intl.string(b.t.veQl5T),
        () => b.intl.string(b.t.Pxb7BR),
        () => b.intl.string(b.t["W03w++"]),
        () => b.intl.string(b.t["95HTb5"]),
        () => b.intl.string(b.t["+XFelz"]),
        () => b.intl.string(b.t.hedHel),
        () => b.intl.string(b.t.jgC65t),
    ],
    j = (s) => {
        let { transitionState: t, onClose: a } = s,
            i = (0, v.Ay)(),
            j = (0, o.GV)(),
            f = (0, r.M)(i) ? x : h,
            k = (0, n.A)(() => l().sample(f), [f]),
            N = (0, n.A)(() => l().sample(u), []);
        return (0, e.jsxs)(d.EO, {
            transitionState: t,
            className: p.zr,
            "aria-labelledby": j,
            parentComponent: "FollowSuccessModal",
            children: [
                (0, e.jsx)("img", { alt: "", src: k, className: p.Sl }),
                (0, e.jsxs)(d.$m, {
                    className: p.yl,
                    children: [
                        (0, e.jsx)(c.D, { variant: "heading-xl/semibold", className: p._J, id: j, children: N() }),
                        (0, e.jsx)(g.E, {
                            color: "text-muted",
                            variant: "text-md/medium",
                            className: p.rf,
                            children: b.intl.string(b.t["2QbSea"]),
                        }),
                        (0, e.jsx)(m.$, { variant: "primary", text: b.intl.string(b.t["+IrDzN"]), onClick: a }),
                    ],
                }),
            ],
        });
    };
