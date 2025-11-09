n.d(t, { Z: () => y });
var r = n(951288);
n(647438);
var i = n(120356),
    a = n.n(i),
    o = n(481060),
    s = n(785681),
    l = n(841409),
    c = n(880257),
    u = n(631885),
    d = n(568671),
    f = n(292352),
    _ = n(382402),
    p = n(388032),
    h = n(906445),
    m = n(152269),
    g = n(633488),
    E = n(361848);
let b = () => {
        let e = (0, u.AZ)(),
            t = (0, c.Z)(),
            { handleTabChange: n } = (0, l.Z)();
        return (0, u.VM)() || (t && e)
            ? null
            : (0, r.jsx)("div", {
                  className: h.button,
                  children: t
                      ? (0, r.jsx)(o.Button, {
                            variant: "primary",
                            text: p.intl.string(p.t.LhlgY9),
                            onClick: () => n(f.dG.REQUESTS),
                        })
                      : (0, r.jsx)(d.Z, {}),
              });
    },
    y = () => {
        let e = (0, c.Z)(),
            t = (0, s.o)(p.intl.string(_.default["T7GyW+"]), p.intl.string(_.default.goKE2b)),
            n = (0, s.o)(
                p.intl.format(_.default.MXjDSv, {
                    articleLink: "https://support.discord.com/hc/articles/14155060633623",
                }),
                p.intl.format(_.default.EMCf6j, {
                    articleLink: "https://support.discord.com/hc/articles/14155043715735",
                }),
            );
        return (0, r.jsxs)("div", {
            className: a()(h.container, m.box),
            children: [
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)("div", {
                            children: (0, r.jsxs)("div", {
                                className: h.headerText,
                                children: [
                                    (0, r.jsx)(o.Heading, {
                                        variant: "heading-xl/medium",
                                        children: (0, r.jsx)(o.y5t, { children: t }),
                                    }),
                                    (0, r.jsx)(o.Text, {
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
                    className: h.headerImage,
                    children: (0, r.jsx)("img", {
                        src: e ? g : E,
                        alt: p.intl.string(_.default.ffg6xd),
                    }),
                }),
            ],
        });
    };
