n.d(t, { default: () => I }), n(266796);
var i = n(200651),
    o = n(192379),
    r = n(772848),
    s = n(481060),
    l = n(600164),
    c = n(138201),
    a = n(63063),
    _ = n(480916),
    d = n(469775),
    E = n(981631),
    N = n(800530),
    m = n(388032),
    u = n(165145);
let I = function (e) {
    let { transitionState: t, entryPoint: n } = e,
        I = o.useMemo(() => (0, r.Z)(), []);
    return (
        o.useEffect(() => {
            (0, _.lA)(I, _.d_.PRIMARY, n);
        }, [I, n]),
        (0, i.jsxs)(s.Y0X, {
            transitionState: t,
            className: u.root,
            children: [
                (0, i.jsxs)(s.hzk, {
                    className: u.content,
                    children: [
                        (0, i.jsxs)('div', {
                            className: u.headersContainer,
                            children: [
                                (0, i.jsx)(s.X6q, {
                                    variant: 'heading-xl/bold',
                                    children: m.NW.string(m.t['FQ+YOD'])
                                }),
                                (0, i.jsx)(s.X6q, {
                                    variant: 'heading-md/medium',
                                    color: 'text-normal',
                                    children: m.NW.string(m.t.Cc41tb)
                                })
                            ]
                        }),
                        d.E.map((e, t) => {
                            let { title: n, description: o } = e;
                            return (0, i.jsx)(
                                c.ZP,
                                {
                                    title: n,
                                    description: o,
                                    listType: 'numbered',
                                    index: t
                                },
                                t
                            );
                        }),
                        (0, i.jsx)(s.Text, {
                            variant: 'text-xs/medium',
                            color: 'text-muted',
                            className: u.requestContainer,
                            children: m.NW.format(m.t.TYfgw8, { onRequest: () => window.open(N.sQ.APPEALS_LINK, '_blank') })
                        })
                    ]
                }),
                (0, i.jsxs)(s.mzw, {
                    justify: l.Z.Justify.BETWEEN,
                    direction: l.Z.Direction.HORIZONTAL,
                    children: [
                        (0, i.jsxs)(s.zxk, {
                            innerClassName: u.button,
                            color: s.zxk.Colors.TRANSPARENT,
                            look: s.zxk.Looks.BLANK,
                            onClick: () => window.open(a.Z.getArticleURL(E.BhN.TIGGER_PAWTECT_UK_AND_AUS_ONLY_GET_STARTED), '_blank'),
                            children: [
                                (0, i.jsx)(s.Text, {
                                    variant: 'text-sm/semibold',
                                    color: 'header-primary',
                                    children: m.NW.string(m.t.mXpKND)
                                }),
                                (0, i.jsx)(s.Gr1, {
                                    size: 'xs',
                                    color: s.TVs.colors.HEADER_PRIMARY
                                })
                            ]
                        }),
                        (0, i.jsxs)(s.zxk, {
                            innerClassName: u.button,
                            color: s.zxk.Colors.BRAND,
                            children: [
                                (0, i.jsx)(s.Text, {
                                    variant: 'text-sm/semibold',
                                    color: 'always-white',
                                    children: m.NW.string(m.t.VLbVho)
                                }),
                                (0, i.jsx)(s.Gr1, {
                                    size: 'xs',
                                    color: 'currentColor'
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    );
};
