e.d(n, { default: () => d });
var r = e(200651);
e(192379);
var i = e(481060),
    o = e(600164),
    s = e(138201),
    l = e(469775),
    a = e(388032),
    c = e(711963);
let d = function (t) {
    let { transitionState: n } = t;
    return (0, r.jsxs)(i.Y0X, {
        transitionState: n,
        className: c.root,
        children: [
            (0, r.jsxs)(i.hzk, {
                className: c.content,
                children: [
                    (0, r.jsxs)('div', {
                        className: c.headersContainer,
                        children: [
                            (0, r.jsx)(i.X6q, {
                                variant: 'heading-xl/bold',
                                children: a.intl.string(a.t.JHNunp)
                            }),
                            (0, r.jsx)(i.X6q, {
                                variant: 'heading-md/medium',
                                color: 'text-normal',
                                children: a.intl.string(a.t['+BLIGh'])
                            })
                        ]
                    }),
                    l.E.map((t, n) => {
                        let { title: e, description: i } = t;
                        return (0, r.jsx)(
                            s.ZP,
                            {
                                title: e,
                                description: i,
                                listType: 'numbered',
                                index: n
                            },
                            n
                        );
                    }),
                    (0, r.jsx)(i.Text, {
                        variant: 'text-xs/medium',
                        color: 'text-muted',
                        className: c.requestContainer,
                        children: a.intl.format(a.t['5HcUPj'], {
                            onRequest: () => {}
                        })
                    })
                ]
            }),
            (0, r.jsxs)(i.mzw, {
                justify: o.Z.Justify.BETWEEN,
                direction: o.Z.Direction.HORIZONTAL,
                children: [
                    (0, r.jsxs)(i.zxk, {
                        innerClassName: c.button,
                        color: i.zxk.Colors.TRANSPARENT,
                        look: i.zxk.Looks.BLANK,
                        children: [
                            (0, r.jsx)(i.Text, {
                                variant: 'text-sm/semibold',
                                color: 'header-primary',
                                children: a.intl.string(a.t['aA6q//'])
                            }),
                            (0, r.jsx)(i.Gr1, {
                                size: 'xs',
                                color: i.TVs.colors.HEADER_PRIMARY
                            })
                        ]
                    }),
                    (0, r.jsxs)(i.zxk, {
                        innerClassName: c.button,
                        color: i.zxk.Colors.BRAND,
                        children: [
                            (0, r.jsx)(i.Text, {
                                variant: 'text-sm/semibold',
                                color: 'always-white',
                                children: a.intl.string(a.t.Vk6xpK)
                            }),
                            (0, r.jsx)(i.Gr1, {
                                size: 'xs',
                                color: 'currentColor'
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
