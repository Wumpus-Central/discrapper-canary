n.d(t, { A: () => y });
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(397927),
    o = n(294433),
    l = n(809697),
    c = n(945276),
    u = n(834981),
    d = n(796497),
    f = n(191627),
    p = n(842130),
    _ = n(985018),
    h = n(555064),
    m = n(896498),
    g = n(272673),
    E = n(607913);
let b = () => {
        let e = (0, u.Li)(),
            t = (0, c.A)(),
            { handleTabChange: n } = (0, l.A)();
        return (0, u.xr)() || (t && e)
            ? null
            : (0, r.jsx)("div", {
                  className: h.x6,
                  children: t
                      ? (0, r.jsx)(s.Button, {
                            variant: "primary",
                            text: _.intl.string(_.t.LhlgY9),
                            onClick: () => n(f.u9.REQUESTS),
                        })
                      : (0, r.jsx)(d.A, {}),
              });
    },
    y = () => {
        let e = (0, c.A)(),
            t = (0, o.y)(_.intl.string(p.default["T7GyW+"]), _.intl.string(p.default.goKE2b)),
            n = (0, o.y)(
                _.intl.format(p.default.MXjDSv, {
                    articleLink: "https://support.discord.com/hc/articles/14155060633623",
                }),
                _.intl.format(p.default.EMCf6j, {
                    articleLink: "https://support.discord.com/hc/articles/14155043715735",
                }),
            );
        return (0, r.jsxs)("div", {
            className: a()(h.kL, m.a),
            children: [
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)("div", {
                            children: (0, r.jsxs)("div", {
                                className: h.TK,
                                children: [
                                    (0, r.jsx)(s.Heading, {
                                        variant: "heading-xl/medium",
                                        children: (0, r.jsx)(s.Fmo, { children: t }),
                                    }),
                                    (0, r.jsx)(s.Text, {
                                        variant: "text-sm/medium",
                                        color: "text-muted",
                                        children: n,
                                    }),
                                ],
                            }),
                        }),
                        (0, r.jsx)(b, {}),
                    ],
                }),
                (0, r.jsx)("div", {
                    className: h.F0,
                    children: (0, r.jsx)("img", {
                        src: e ? g : E,
                        alt: _.intl.string(p.default.ffg6xd),
                    }),
                }),
            ],
        });
    };
