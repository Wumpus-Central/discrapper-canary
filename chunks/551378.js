n.d(t, { A: () => T });
var i = n(627968);
n(64700);
var s = n(503698),
    l = n.n(s),
    a = n(397927),
    r = n(294433),
    o = n(438732),
    d = n(809697),
    c = n(834981),
    u = n(796497),
    _ = n(191627),
    g = n(870236),
    A = n(985018),
    m = n(28138),
    h = n(609132),
    p = n(272673),
    x = n(607913);
let E = () => {
        let e = (0, c.Li)(),
            t = (0, o.A)(),
            { handleTabChange: n } = (0, d.A)();
        return (0, c.xr)() || (t && e)
            ? null
            : (0, i.jsx)("div", {
                  className: m.x6,
                  children: t
                      ? (0, i.jsx)(a.Button, {
                            variant: "primary",
                            text: A.intl.string(A.t.LhlgY9),
                            onClick: () => n(_.u9.REQUESTS),
                        })
                      : (0, i.jsx)(u.A, {}),
              });
    },
    T = () => {
        let e = (0, o.A)(),
            t = (0, r.y)(A.intl.string(g.default["T7GyW+"]), A.intl.string(g.default.goKE2b)),
            n = (0, r.y)(
                A.intl.format(g.default.MXjDSv, {
                    articleLink: "https://support.discord.com/hc/articles/14155060633623",
                }),
                A.intl.format(g.default.EMCf6j, {
                    articleLink: "https://support.discord.com/hc/articles/14155043715735",
                }),
            );
        return (0, i.jsxs)("div", {
            className: l()(m.kL, h.a),
            children: [
                (0, i.jsxs)("div", {
                    children: [
                        (0, i.jsx)("div", {
                            children: (0, i.jsxs)("div", {
                                className: m.TK,
                                children: [
                                    (0, i.jsx)(a.Heading, {
                                        variant: "heading-xl/medium",
                                        children: (0, i.jsx)(a.Fmo, { children: t }),
                                    }),
                                    (0, i.jsx)(a.Text, { variant: "text-sm/medium", color: "text-muted", children: n }),
                                ],
                            }),
                        }),
                        (0, i.jsx)(E, {}),
                    ],
                }),
                (0, i.jsx)("div", {
                    className: m.F0,
                    children: (0, i.jsx)("img", { src: e ? p : x, alt: A.intl.string(g.default.ffg6xd) }),
                }),
            ],
        });
    };
