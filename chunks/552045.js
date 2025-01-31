n.d(t, { Z: () => C });
var i = n(200651);
n(192379);
var s = n(120356),
    r = n.n(s),
    l = n(481060),
    a = n(785681),
    o = n(841409),
    c = n(880257),
    d = n(631885),
    u = n(568671),
    m = n(292352),
    h = n(388032),
    g = n(852402),
    _ = n(441685),
    x = n(633488),
    p = n(361848);
let E = () => {
        let e = (0, d.mq)(m.ne.ACTIVE),
            t = (0, c.Z)(),
            { handleTabChange: n } = (0, o.Z)();
        return (0, d.VM)() || (t && e.length > 0)
            ? null
            : (0, i.jsx)('div', {
                  className: g.button,
                  children: t
                      ? (0, i.jsx)(l.zxk, {
                            fullWidth: !1,
                            size: l.PhG.LARGE,
                            onClick: () => n(m.dG.REQUESTS),
                            children: h.intl.string(h.t.LhlgY2)
                        })
                      : (0, i.jsx)(u.Z, {})
              });
    },
    C = () => {
        let e = (0, c.Z)(),
            t = (0, a.o)(h.intl.string(h.t.T7GyW1), h.intl.string(h.t.goKE2d)),
            n = (0, a.o)(h.intl.format(h.t.MXjDSk, { articleLink: 'https://support.discord.com/hc/articles/14155060633623' }), h.intl.format(h.t.EMCf6u, { articleLink: 'https://support.discord.com/hc/articles/14155043715735' }));
        return (0, i.jsxs)('div', {
            className: r()(g.container, _.box),
            children: [
                (0, i.jsxs)('div', {
                    children: [
                        (0, i.jsx)('div', {
                            children: (0, i.jsxs)('div', {
                                className: g.headerText,
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
                        (0, i.jsx)(E, {})
                    ]
                }),
                (0, i.jsx)('div', {
                    className: g.headerImage,
                    children: (0, i.jsx)('img', {
                        src: e ? x : p,
                        alt: h.intl.string(h.t.ffg6xc)
                    })
                })
            ]
        });
    };
