n.d(t, { Z: () => _ });
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
    p = n(635357),
    g = n(388032),
    h = n(684553),
    f = n(828859),
    b = n(633488),
    N = n(361848);
let x = () => {
        let e = (0, d.mq)(m.ne.ACTIVE),
            t = (0, c.Z)(),
            { handleTabChange: n } = (0, o.Z)();
        return (0, d.VM)() || (t && e.length > 0)
            ? null
            : (0, r.jsx)('div', {
                  className: h.button,
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
    _ = () => {
        let e = (0, c.Z)(),
            t = (0, l.o)(g.NW.string(p.Z.T7GyW1), g.NW.string(p.Z.goKE2d)),
            n = (0, l.o)(g.NW.format(p.Z.MXjDSk, { articleLink: 'https://support.discord.com/hc/articles/14155060633623' }), g.NW.format(p.Z.EMCf6u, { articleLink: 'https://support.discord.com/hc/articles/14155043715735' }));
        return (0, r.jsxs)('div', {
            className: s()(h.container, f.box),
            children: [
                (0, r.jsxs)('div', {
                    children: [
                        (0, r.jsx)('div', {
                            children: (0, r.jsxs)('div', {
                                className: h.headerText,
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
                        (0, r.jsx)(x, {})
                    ]
                }),
                (0, r.jsx)('div', {
                    className: h.headerImage,
                    children: (0, r.jsx)('img', {
                        src: e ? b : N,
                        alt: g.NW.string(p.Z.ffg6xc)
                    })
                })
            ]
        });
    };
