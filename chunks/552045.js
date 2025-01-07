var i = n(200651);
n(192379);
var r = n(481060),
    a = n(785681),
    s = n(841409),
    l = n(880257),
    o = n(631885),
    c = n(568671),
    d = n(292352),
    u = n(388032),
    g = n(852402),
    m = n(633488),
    f = n(361848);
let p = () => {
    let e = (0, o.mq)(d.ne.ACTIVE),
        t = (0, l.Z)(),
        { handleTabChange: n } = (0, s.Z)();
    return (0, o.VM)() || (t && e.length > 0)
        ? null
        : (0, i.jsx)('div', {
              className: g.button,
              children: t
                  ? (0, i.jsx)(r.Button, {
                        fullWidth: !1,
                        size: r.ButtonSizes.LARGE,
                        onClick: () => n(d.dG.REQUESTS),
                        children: u.intl.string(u.t.LhlgY2)
                    })
                  : (0, i.jsx)(c.Z, {})
          });
};
t.Z = () => {
    let e = (0, l.Z)(),
        t = (0, a.o)(u.intl.string(u.t.T7GyW1), u.intl.string(u.t.goKE2d)),
        n = (0, a.o)(u.intl.format(u.t.MXjDSk, { articleLink: 'https://support.discord.com/hc/articles/14155060633623' }), u.intl.format(u.t.EMCf6u, { articleLink: 'https://support.discord.com/hc/articles/14155043715735' }));
    return (0, i.jsxs)('div', {
        className: g.container,
        children: [
            (0, i.jsxs)('div', {
                children: [
                    (0, i.jsx)('div', {
                        children: (0, i.jsxs)('div', {
                            className: g.headerText,
                            children: [
                                (0, i.jsx)(r.Heading, {
                                    variant: 'heading-xl/medium',
                                    children: (0, i.jsx)(r.HeadingLevel, { children: t })
                                }),
                                (0, i.jsx)(r.Text, {
                                    variant: 'text-sm/medium',
                                    color: 'text-muted',
                                    children: n
                                })
                            ]
                        })
                    }),
                    (0, i.jsx)(p, {})
                ]
            }),
            (0, i.jsx)('div', {
                className: g.headerImage,
                children: (0, i.jsx)('img', {
                    src: e ? m : f,
                    alt: u.intl.string(u.t.ffg6xc)
                })
            })
        ]
    });
};
