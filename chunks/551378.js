n.d(t, { A: () => C });
var i = n(627968);
n(64700);
var s = n(503698),
    a = n.n(s),
    l = n(397927),
    r = n(294433),
    o = n(438732),
    c = n(809697),
    d = n(834981),
    u = n(796497),
    _ = n(191627),
    m = n(842130),
    A = n(985018),
    g = n(555064),
    h = n(896498),
    x = n(272673),
    p = n(607913);
let E = () => {
        let e = (0, d.Li)(),
            t = (0, o.A)(),
            { handleTabChange: n } = (0, c.A)();
        return (0, d.xr)() || (t && e)
            ? null
            : (0, i.jsx)("div", {
                  className: g.x6,
                  children: t
                      ? (0, i.jsx)(l.Button, {
                            variant: "primary",
                            text: A.intl.string(A.t.LhlgY9),
                            onClick: () => n(_.u9.REQUESTS),
                        })
                      : (0, i.jsx)(u.A, {}),
              });
    },
    C = () => {
        let e = (0, o.A)(),
            t = (0, r.y)(A.intl.string(m.default["T7GyW+"]), A.intl.string(m.default.goKE2b)),
            n = (0, r.y)(
                A.intl.format(m.default.MXjDSv, {
                    articleLink: "https://support.discord.com/hc/articles/14155060633623",
                }),
                A.intl.format(m.default.EMCf6j, {
                    articleLink: "https://support.discord.com/hc/articles/14155043715735",
                }),
            );
        return (0, i.jsxs)("div", {
            className: a()(g.kL, h.a),
            children: [
                (0, i.jsxs)("div", {
                    children: [
                        (0, i.jsx)("div", {
                            children: (0, i.jsxs)("div", {
                                className: g.TK,
                                children: [
                                    (0, i.jsx)(l.Heading, {
                                        variant: "heading-xl/medium",
                                        children: (0, i.jsx)(l.Fmo, { children: t }),
                                    }),
                                    (0, i.jsx)(l.Text, { variant: "text-sm/medium", color: "text-muted", children: n }),
                                ],
                            }),
                        }),
                        (0, i.jsx)(E, {}),
                    ],
                }),
                (0, i.jsx)("div", {
                    className: g.F0,
                    children: (0, i.jsx)("img", { src: e ? x : p, alt: A.intl.string(m.default.ffg6xd) }),
                }),
            ],
        });
    };
