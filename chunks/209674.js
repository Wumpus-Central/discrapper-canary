a.d(t, { default: () => u });
var e = a(627968);
a(64700);
var i = a(735438),
    l = a.n(i),
    n = a(976634),
    r = a(462887),
    d = a(935462),
    c = a(534514),
    g = a(834730),
    o = a(821609),
    m = a(736653),
    v = a(915089),
    _ = a(985018),
    b = a(602195);
let p = ["/assets/36668e0a5832822f.svg", "/assets/3a31d989497ba4f1.svg", "/assets/f959ee6e6a8d2d0b.svg"],
    x = ["/assets/6dadee9234160dc1.svg", "/assets/62d886a31822c89a.svg", "/assets/377cb29b8f197452.svg"],
    h = [
        () => _.intl.string(_.t["w2o/60"]),
        () => _.intl.string(_.t.FiAvKg),
        () => _.intl.string(_.t.vKUFek),
        () => _.intl.string(_.t.veQl5T),
        () => _.intl.string(_.t.Pxb7BR),
        () => _.intl.string(_.t["W03w++"]),
        () => _.intl.string(_.t["95HTb5"]),
        () => _.intl.string(_.t["+XFelz"]),
        () => _.intl.string(_.t.hedHel),
        () => _.intl.string(_.t.jgC65t),
    ],
    u = (s) => {
        let { transitionState: t, onClose: a } = s,
            i = (0, m.Ay)(),
            u = (0, v.GV)(),
            f = (0, r.M)(i) ? x : p,
            j = (0, n.A)(() => l().sample(f), [f]),
            k = (0, n.A)(() => l().sample(h), []);
        return (0, e.jsxs)(d.EO, {
            transitionState: t,
            className: b.zr,
            "aria-labelledby": u,
            parentComponent: "FollowSuccessModal",
            children: [
                (0, e.jsx)("img", { alt: "", src: j, className: b.Sl }),
                (0, e.jsxs)(d.$m, {
                    className: b.yl,
                    children: [
                        (0, e.jsx)(c.D, { variant: "heading-xl/semibold", className: b._J, id: u, children: k() }),
                        (0, e.jsx)(g.E, {
                            color: "text-muted",
                            variant: "text-md/medium",
                            className: b.rf,
                            children: _.intl.string(_.t["2QbSea"]),
                        }),
                        (0, e.jsx)(o.$, { variant: "primary", text: _.intl.string(_.t["+IrDzN"]), onClick: a }),
                    ],
                }),
            ],
        });
    };
