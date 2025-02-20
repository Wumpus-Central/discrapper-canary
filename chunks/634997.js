n.d(t, { default: () => d }), n(266796);
var r = n(200651);
n(192379);
var o = n(481060),
    i = n(600164),
    s = n(138201),
    a = n(469775),
    l = n(388032),
    c = n(916087);
let d = function (e) {
    let { transitionState: t } = e;
    return (0, r.jsxs)(o.Y0X, {
        transitionState: t,
        className: c.root,
        children: [
            (0, r.jsxs)(o.hzk, {
                className: c.content,
                children: [
                    (0, r.jsxs)('div', {
                        className: c.headersContainer,
                        children: [
                            (0, r.jsx)(o.X6q, {
                                variant: 'heading-xl/bold',
                                children: l.NW.string(l.t.JHNunp)
                            }),
                            (0, r.jsx)(o.X6q, {
                                variant: 'heading-md/medium',
                                color: 'text-normal',
                                children: l.NW.string(l.t['+BLIGh'])
                            })
                        ]
                    }),
                    a.E.map((e, t) => {
                        let { title: n, description: o } = e;
                        return (0, r.jsx)(
                            s.ZP,
                            {
                                title: n,
                                description: o,
                                listType: 'numbered',
                                index: t
                            },
                            t
                        );
                    }),
                    (0, r.jsx)(o.Text, {
                        variant: 'text-xs/medium',
                        color: 'text-muted',
                        className: c.requestContainer,
                        children: l.NW.format(l.t['5HcUPj'], {
                            onRequest: () => {}
                        })
                    })
                ]
            }),
            (0, r.jsxs)(o.mzw, {
                justify: i.Z.Justify.BETWEEN,
                direction: i.Z.Direction.HORIZONTAL,
                children: [
                    (0, r.jsxs)(o.zxk, {
                        innerClassName: c.button,
                        color: o.zxk.Colors.TRANSPARENT,
                        look: o.zxk.Looks.BLANK,
                        children: [
                            (0, r.jsx)(o.Text, {
                                variant: 'text-sm/semibold',
                                color: 'header-primary',
                                children: l.NW.string(l.t['aA6q//'])
                            }),
                            (0, r.jsx)(o.Gr1, {
                                size: 'xs',
                                color: o.TVs.colors.HEADER_PRIMARY
                            })
                        ]
                    }),
                    (0, r.jsxs)(o.zxk, {
                        innerClassName: c.button,
                        color: o.zxk.Colors.BRAND,
                        children: [
                            (0, r.jsx)(o.Text, {
                                variant: 'text-sm/semibold',
                                color: 'always-white',
                                children: l.NW.string(l.t.Vk6xpK)
                            }),
                            (0, r.jsx)(o.Gr1, {
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
