n.d(t, { Z: () => y });
var r = n(54381);
n(473749);
var i = n(120356),
    o = n.n(i),
    a = n(481060),
    s = n(785681),
    l = n(841409),
    c = n(880257),
    u = n(631885),
    d = n(568671),
    f = n(292352),
    p = n(435757),
    _ = n(388032),
    m = n(26919),
    h = n(519279),
    g = n(633488),
    E = n(361848);
let b = () => {
        let e = (0, u.AZ)(),
            t = (0, c.Z)(),
            { handleTabChange: n } = (0, l.Z)();
        return (0, u.VM)() || (t && e)
            ? null
            : (0, r.jsx)("div", {
                  className: m.button,
                  children: t
                      ? (0, r.jsx)(a.Button, {
                            variant: "primary",
                            text: _.intl.string(_.t.LhlgY9),
                            onClick: () => n(f.dG.REQUESTS),
                        })
                      : (0, r.jsx)(d.Z, {}),
              });
    },
    y = () => {
        let e = (0, c.Z)(),
            t = (0, s.o)(_.intl.string(p.default["T7GyW+"]), _.intl.string(p.default.goKE2b)),
            n = (0, s.o)(
                _.intl.format(p.default.MXjDSv, {
                    articleLink: "https://support.discord.com/hc/articles/14155060633623",
                }),
                _.intl.format(p.default.EMCf6j, {
                    articleLink: "https://support.discord.com/hc/articles/14155043715735",
                }),
            );
        return (0, r.jsxs)("div", {
            className: o()(m.container, h.box),
            children: [
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)("div", {
                            children: (0, r.jsxs)("div", {
                                className: m.headerText,
                                children: [
                                    (0, r.jsx)(a.Heading, {
                                        variant: "heading-xl/medium",
                                        children: (0, r.jsx)(a.y5t, { children: t }),
                                    }),
                                    (0, r.jsx)(a.Text, {
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
                    className: m.headerImage,
                    children: (0, r.jsx)("img", {
                        src: e ? g : E,
                        alt: _.intl.string(p.default.ffg6xd),
                    }),
                }),
            ],
        });
    };
