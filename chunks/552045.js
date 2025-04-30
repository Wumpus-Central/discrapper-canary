n.d(t, { Z: () => E });
var i = n(200651);
n(192379);
var r = n(120356),
    s = n.n(r),
    l = n(481060),
    a = n(785681),
    o = n(841409),
    c = n(880257),
    d = n(631885),
    u = n(568671),
    m = n(292352),
    p = n(332495),
    g = n(388032),
    h = n(864903),
    f = n(589608),
    b = n(633488),
    _ = n(361848);
let x = () => {
        let e = (0, d.mq)(m.ne.ACTIVE),
            t = (0, c.Z)(),
            { handleTabChange: n } = (0, o.Z)();
        return (0, d.VM)() || (t && e.length > 0)
            ? null
            : (0, i.jsx)('div', {
                  className: h.button,
                  children: t
                      ? (0, i.jsx)(l.zxk, {
                            fullWidth: !1,
                            size: l.PhG.LARGE,
                            onClick: () => n(m.dG.REQUESTS),
                            children: g.intl.string(g.t.LhlgY2)
                        })
                      : (0, i.jsx)(u.Z, {})
              });
    },
    E = () => {
        let e = (0, c.Z)(),
            t = (0, a.o)(g.intl.string(p.default.T7GyW1), g.intl.string(p.default.goKE2d)),
            n = (0, a.o)(g.intl.format(p.default.MXjDSk, { articleLink: 'https://support.discord.com/hc/articles/14155060633623' }), g.intl.format(p.default.EMCf6u, { articleLink: 'https://support.discord.com/hc/articles/14155043715735' }));
        return (0, i.jsxs)('div', {
            className: s()(h.container, f.box),
            children: [
                (0, i.jsxs)('div', {
                    children: [
                        (0, i.jsx)('div', {
                            children: (0, i.jsxs)('div', {
                                className: h.headerText,
                                children: [
                                    (0, i.jsx)(l.X6q, {
                                        variant: 'heading-xl/medium',
                                        children: (0, i.jsx)(l.y5t, { children: t })
                                    }),
                                    (0, i.jsx)(l.Text, {
                                        variant: 'text-sm/medium',
                                        color: 'text-muted',
                                        children: n
                                    })
                                ]
                            })
                        }),
                        (0, i.jsx)(x, {})
                    ]
                }),
                (0, i.jsx)('div', {
                    className: h.headerImage,
                    children: (0, i.jsx)('img', {
                        src: e ? b : _,
                        alt: g.intl.string(p.default.ffg6xc)
                    })
                })
            ]
        });
    };
