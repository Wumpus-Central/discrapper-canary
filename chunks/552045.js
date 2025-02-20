n.d(t, { Z: () => x });
var r = n(200651);
n(192379);
var i = n(120356),
    s = n.n(i),
    a = n(481060),
    l = n(785681),
    o = n(841409),
    c = n(880257),
    d = n(631885),
    u = n(568671),
    m = n(292352),
    g = n(388032),
    p = n(383033),
    h = n(236837),
    f = n(633488),
    b = n(361848);
let N = () => {
        let e = (0, d.mq)(m.ne.ACTIVE),
            t = (0, c.Z)(),
            { handleTabChange: n } = (0, o.Z)();
        return (0, d.VM)() || (t && e.length > 0)
            ? null
            : (0, r.jsx)('div', {
                  className: p.button,
                  children: t
                      ? (0, r.jsx)(a.zxk, {
                            fullWidth: !1,
                            size: a.PhG.LARGE,
                            onClick: () => n(m.dG.REQUESTS),
                            children: g.NW.string(g.t.LhlgY2)
                        })
                      : (0, r.jsx)(u.Z, {})
              });
    },
    x = () => {
        let e = (0, c.Z)(),
            t = (0, l.o)(g.NW.string(g.t.T7GyW1), g.NW.string(g.t.goKE2d)),
            n = (0, l.o)(g.NW.format(g.t.MXjDSk, { articleLink: 'https://support.discord.com/hc/articles/14155060633623' }), g.NW.format(g.t.EMCf6u, { articleLink: 'https://support.discord.com/hc/articles/14155043715735' }));
        return (0, r.jsxs)('div', {
            className: s()(p.container, h.box),
            children: [
                (0, r.jsxs)('div', {
                    children: [
                        (0, r.jsx)('div', {
                            children: (0, r.jsxs)('div', {
                                className: p.headerText,
                                children: [
                                    (0, r.jsx)(a.X6q, {
                                        variant: 'heading-xl/medium',
                                        children: (0, r.jsx)(a.y5t, { children: t })
                                    }),
                                    (0, r.jsx)(a.Text, {
                                        variant: 'text-sm/medium',
                                        color: 'text-muted',
                                        children: n
                                    })
                                ]
                            })
                        }),
                        (0, r.jsx)(N, {})
                    ]
                }),
                (0, r.jsx)('div', {
                    className: p.headerImage,
                    children: (0, r.jsx)('img', {
                        src: e ? f : b,
                        alt: g.NW.string(g.t.ffg6xc)
                    })
                })
            ]
        });
    };
