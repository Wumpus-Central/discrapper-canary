n.d(t, { A: () => E });
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
    m = n(842130),
    g = n(985018),
    A = n(555064),
    x = n(896498),
    h = n(272673),
    p = n(607913);
let T = () => {
        let e = (0, c.Li)(),
            t = (0, o.A)(),
            { handleTabChange: n } = (0, d.A)();
        return (0, c.xr)() || (t && e)
            ? null
            : (0, i.jsx)("div", {
                  className: A.x6,
                  children: t
                      ? (0, i.jsx)(a.Button, {
                            variant: "primary",
                            text: g.intl.string(g.t.LhlgY9),
                            onClick: () => n(_.u9.REQUESTS),
                        })
                      : (0, i.jsx)(u.A, {}),
              });
    },
    E = () => {
        let e = (0, o.A)(),
            t = (0, r.y)(g.intl.string(m.default["T7GyW+"]), g.intl.string(m.default.goKE2b)),
            n = (0, r.y)(
                g.intl.format(m.default.MXjDSv, {
                    articleLink: "https://support.discord.com/hc/articles/14155060633623",
                }),
                g.intl.format(m.default.EMCf6j, {
                    articleLink: "https://support.discord.com/hc/articles/14155043715735",
                }),
            );
        return (0, i.jsxs)("div", {
            className: l()(A.kL, x.a),
            children: [
                (0, i.jsxs)("div", {
                    children: [
                        (0, i.jsx)("div", {
                            children: (0, i.jsxs)("div", {
                                className: A.TK,
                                children: [
                                    (0, i.jsx)(a.Heading, {
                                        variant: "heading-xl/medium",
                                        children: (0, i.jsx)(a.Fmo, { children: t }),
                                    }),
                                    (0, i.jsx)(a.Text, { variant: "text-sm/medium", color: "text-muted", children: n }),
                                ],
                            }),
                        }),
                        (0, i.jsx)(T, {}),
                    ],
                }),
                (0, i.jsx)("div", {
                    className: A.F0,
                    children: (0, i.jsx)("img", { src: e ? h : p, alt: g.intl.string(m.default.ffg6xd) }),
                }),
            ],
        });
    };
