var i = n(200651);
n(192379);
var r = n(120356),
    s = n.n(r),
    a = n(481060),
    l = n(785681),
    o = n(841409),
    c = n(880257),
    d = n(631885),
    u = n(568671),
    m = n(292352),
    g = n(388032),
    h = n(852402),
    p = n(441685),
    x = n(633488),
    f = n(361848);
let E = () => {
    let e = (0, d.mq)(m.ne.ACTIVE),
        t = (0, c.Z)(),
        { handleTabChange: n } = (0, o.Z)();
    return (0, d.VM)() || (t && e.length > 0)
        ? null
        : (0, i.jsx)('div', {
              className: h.button,
              children: t
                  ? (0, i.jsx)(a.Button, {
                        fullWidth: !1,
                        size: a.ButtonSizes.LARGE,
                        onClick: () => n(m.dG.REQUESTS),
                        children: g.intl.string(g.t.LhlgY2)
                    })
                  : (0, i.jsx)(u.Z, {})
          });
};
t.Z = () => {
    let e = (0, c.Z)(),
        t = (0, l.o)(g.intl.string(g.t.T7GyW1), g.intl.string(g.t.goKE2d)),
        n = (0, l.o)(g.intl.format(g.t.MXjDSk, { articleLink: 'https://support.discord.com/hc/articles/14155060633623' }), g.intl.format(g.t.EMCf6u, { articleLink: 'https://support.discord.com/hc/articles/14155043715735' }));
    return (0, i.jsxs)('div', {
        className: s()(h.container, p.box),
        children: [
            (0, i.jsxs)('div', {
                children: [
                    (0, i.jsx)('div', {
                        children: (0, i.jsxs)('div', {
                            className: h.headerText,
                            children: [
                                (0, i.jsx)(a.Heading, {
                                    variant: 'heading-xl/medium',
                                    children: (0, i.jsx)(a.HeadingLevel, { children: t })
                                }),
                                (0, i.jsx)(a.Text, {
                                    variant: 'text-sm/medium',
                                    color: 'text-muted',
                                    children: n
                                })
                            ]
                        })
                    }),
                    (0, i.jsx)(E, {})
                ]
            }),
            (0, i.jsx)('div', {
                className: h.headerImage,
                children: (0, i.jsx)('img', {
                    src: e ? x : f,
                    alt: g.intl.string(g.t.ffg6xc)
                })
            })
        ]
    });
};
