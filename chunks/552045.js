n.d(t, { Z: () => E });
var i = n(200651);
n(192379);
var r = n(120356),
    a = n.n(r),
    s = n(481060),
    l = n(785681),
    o = n(841409),
    c = n(880257),
    d = n(631885),
    u = n(568671),
    m = n(292352),
    g = n(388032),
    _ = n(40322),
    p = n(308803),
    f = n(633488),
    h = n(361848);
let x = () => {
        let e = (0, d.mq)(m.ne.ACTIVE),
            t = (0, c.Z)(),
            { handleTabChange: n } = (0, o.Z)();
        return (0, d.VM)() || (t && e.length > 0)
            ? null
            : (0, i.jsx)('div', {
                  className: _.button,
                  children: t
                      ? (0, i.jsx)(s.zxk, {
                            fullWidth: !1,
                            size: s.PhG.LARGE,
                            onClick: () => n(m.dG.REQUESTS),
                            children: g.intl.string(g.t.LhlgY2)
                        })
                      : (0, i.jsx)(u.Z, {})
              });
    },
    E = () => {
        let e = (0, c.Z)(),
            t = (0, l.o)(g.intl.string(g.t.T7GyW1), g.intl.string(g.t.goKE2d)),
            n = (0, l.o)(g.intl.format(g.t.MXjDSk, { articleLink: 'https://support.discord.com/hc/articles/14155060633623' }), g.intl.format(g.t.EMCf6u, { articleLink: 'https://support.discord.com/hc/articles/14155043715735' }));
        return (0, i.jsxs)('div', {
            className: a()(_.container, p.box),
            children: [
                (0, i.jsxs)('div', {
                    children: [
                        (0, i.jsx)('div', {
                            children: (0, i.jsxs)('div', {
                                className: _.headerText,
                                children: [
                                    (0, i.jsx)(s.X6q, {
                                        variant: 'heading-xl/medium',
                                        children: (0, i.jsx)(s.y5t, { children: t })
                                    }),
                                    (0, i.jsx)(s.Text, {
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
                    className: _.headerImage,
                    children: (0, i.jsx)('img', {
                        src: e ? f : h,
                        alt: g.intl.string(g.t.ffg6xc)
                    })
                })
            ]
        });
    };
