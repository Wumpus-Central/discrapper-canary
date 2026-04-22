l.d(t, { A: () => T });
var n = l(627968);
l(64700);
var i = l(503698),
    s = l.n(i),
    a = l(821609),
    r = l(534514),
    d = l(707554),
    c = l(834730),
    u = l(294433),
    o = l(438732),
    x = l(809697),
    h = l(834981),
    m = l(796497),
    g = l(191627),
    j = l(602339),
    A = l(985018),
    v = l(555317),
    f = l(453287),
    E = l(272673),
    N = l(607913);
let p = () => {
        let e = (0, h.Li)(),
            t = (0, o.A)(),
            { handleTabChange: l } = (0, x.A)();
        return (0, h.xr)() || (t && e)
            ? null
            : (0, n.jsx)("div", {
                  className: v.x6,
                  children: t
                      ? (0, n.jsx)(a.$, {
                            variant: "primary",
                            text: A.intl.string(A.t.LhlgY9),
                            onClick: () => l(g.u9.REQUESTS),
                        })
                      : (0, n.jsx)(m.A, {}),
              });
    },
    T = () => {
        let e = (0, o.A)(),
            t = (0, u.y)(A.intl.string(j.default["T7GyW+"]), A.intl.string(j.default.goKE2b)),
            l = (0, u.y)(
                A.intl.format(j.default.MXjDSv, {
                    articleLink: "https://support.discord.com/hc/articles/14155060633623",
                }),
                A.intl.format(j.default.EMCf6j, {
                    articleLink: "https://support.discord.com/hc/articles/14155043715735",
                }),
            );
        return (0, n.jsxs)("div", {
            className: s()(v.kL, f.a),
            children: [
                (0, n.jsxs)("div", {
                    children: [
                        (0, n.jsx)("div", {
                            children: (0, n.jsxs)("div", {
                                className: v.TK,
                                children: [
                                    (0, n.jsx)(r.D, {
                                        variant: "heading-xl/medium",
                                        children: (0, n.jsx)(d.F, { children: t }),
                                    }),
                                    (0, n.jsx)(c.E, { variant: "text-sm/medium", color: "text-muted", children: l }),
                                ],
                            }),
                        }),
                        (0, n.jsx)(p, {}),
                    ],
                }),
                (0, n.jsx)("div", {
                    className: v.F0,
                    children: (0, n.jsx)("img", { src: e ? E : N, alt: A.intl.string(j.default.ffg6xd) }),
                }),
            ],
        });
    };
