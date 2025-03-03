n.d(t, { default: () => N }), n(266796);
var i = n(200651);
n(192379);
var r = n(481060),
    o = n(600164),
    s = n(138201),
    l = n(63063),
    a = n(469775),
    c = n(981631),
    _ = n(800530),
    d = n(388032),
    E = n(165145);
let N = function (e) {
    let { transitionState: t } = e;
    return (0, i.jsxs)(r.Y0X, {
        transitionState: t,
        className: E.root,
        children: [
            (0, i.jsxs)(r.hzk, {
                className: E.content,
                children: [
                    (0, i.jsxs)('div', {
                        className: E.headersContainer,
                        children: [
                            (0, i.jsx)(r.X6q, {
                                variant: 'heading-xl/bold',
                                children: d.NW.string(d.t['FQ+YOD'])
                            }),
                            (0, i.jsx)(r.X6q, {
                                variant: 'heading-md/medium',
                                color: 'text-normal',
                                children: d.NW.string(d.t.Cc41tb)
                            })
                        ]
                    }),
                    a.E.map((e, t) => {
                        let { title: n, description: r } = e;
                        return (0, i.jsx)(
                            s.ZP,
                            {
                                title: n,
                                description: r,
                                listType: 'numbered',
                                index: t
                            },
                            t
                        );
                    }),
                    (0, i.jsx)(r.Text, {
                        variant: 'text-xs/medium',
                        color: 'text-muted',
                        className: E.requestContainer,
                        children: d.NW.format(d.t.TYfgw8, { onRequest: () => window.open(_.sQ.APPEALS_LINK, '_blank') })
                    })
                ]
            }),
            (0, i.jsxs)(r.mzw, {
                justify: o.Z.Justify.BETWEEN,
                direction: o.Z.Direction.HORIZONTAL,
                children: [
                    (0, i.jsxs)(r.zxk, {
                        innerClassName: E.button,
                        color: r.zxk.Colors.TRANSPARENT,
                        look: r.zxk.Looks.BLANK,
                        onClick: () => window.open(l.Z.getArticleURL(c.BhN.TIGGER_PAWTECT_UK_AND_AUS_ONLY_GET_STARTED), '_blank'),
                        children: [
                            (0, i.jsx)(r.Text, {
                                variant: 'text-sm/semibold',
                                color: 'header-primary',
                                children: d.NW.string(d.t.mXpKND)
                            }),
                            (0, i.jsx)(r.Gr1, {
                                size: 'xs',
                                color: r.TVs.colors.HEADER_PRIMARY
                            })
                        ]
                    }),
                    (0, i.jsxs)(r.zxk, {
                        innerClassName: E.button,
                        color: r.zxk.Colors.BRAND,
                        children: [
                            (0, i.jsx)(r.Text, {
                                variant: 'text-sm/semibold',
                                color: 'always-white',
                                children: d.NW.string(d.t.VLbVho)
                            }),
                            (0, i.jsx)(r.Gr1, {
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
