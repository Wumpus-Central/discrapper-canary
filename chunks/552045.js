n.d(t, { Z: () => O });
var i = n(255367);
n(73800);
var r = n(120356),
    s = n.n(r),
    a = n(755721),
    l = n(481060),
    o = n(785681),
    c = n(841409),
    d = n(880257),
    u = n(631885),
    m = n(568671),
    p = n(292352),
    g = n(916723),
    h = n(388032),
    f = n(864903),
    b = n(589608),
    x = n(633488),
    _ = n(361848);
let j = () => {
        let e = (0, u.mq)(p.ne.ACTIVE),
            t = (0, d.Z)(),
            { handleTabChange: n } = (0, c.Z)();
        return (0, u.VM)() || (t && e.length > 0)
            ? null
            : (0, i.jsx)('div', {
                  className: f.button,
                  children: t
                      ? (0, i.jsx)(a.zx, {
                            fullWidth: !1,
                            size: a.Ph.LARGE,
                            onClick: () => n(p.dG.REQUESTS),
                            children: h.intl.string(h.t.LhlgY2)
                        })
                      : (0, i.jsx)(m.Z, {})
              });
    },
    O = () => {
        let e = (0, d.Z)(),
            t = (0, o.o)(h.intl.string(g.default.T7GyW1), h.intl.string(g.default.goKE2d)),
            n = (0, o.o)(h.intl.format(g.default.MXjDSk, { articleLink: 'https://support.discord.com/hc/articles/14155060633623' }), h.intl.format(g.default.EMCf6u, { articleLink: 'https://support.discord.com/hc/articles/14155043715735' }));
        return (0, i.jsxs)('div', {
            className: s()(f.container, b.box),
            children: [
                (0, i.jsxs)('div', {
                    children: [
                        (0, i.jsx)('div', {
                            children: (0, i.jsxs)('div', {
                                className: f.headerText,
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
                        (0, i.jsx)(j, {})
                    ]
                }),
                (0, i.jsx)('div', {
                    className: f.headerImage,
                    children: (0, i.jsx)('img', {
                        src: e ? x : _,
                        alt: h.intl.string(g.default.ffg6xc)
                    })
                })
            ]
        });
    };
