n.d(t, { default: () => A }), n(266796);
var i = n(200651),
    o = n(192379),
    r = n(772848),
    s = n(481060),
    l = n(600164),
    c = n(138201),
    a = n(63063),
    _ = n(168107),
    d = n(480916),
    E = n(469775),
    N = n(981631),
    u = n(800530),
    I = n(388032),
    m = n(165145);
let A = function (e) {
    let { transitionState: t, entryPoint: n } = e,
        A = o.useMemo(() => (0, r.Z)(), []);
    return (
        o.useEffect(() => {
            (0, d.lA)(A, d.d_.PRIMARY, n);
        }, [A, n]),
        (0, i.jsxs)(s.Y0X, {
            transitionState: t,
            className: m.root,
            children: [
                (0, i.jsxs)(s.hzk, {
                    className: m.content,
                    children: [
                        (0, i.jsxs)('div', {
                            className: m.headersContainer,
                            children: [
                                (0, i.jsx)(s.X6q, {
                                    variant: 'heading-xl/bold',
                                    children: I.NW.string(I.t['FQ+YOD'])
                                }),
                                (0, i.jsx)(s.X6q, {
                                    variant: 'heading-md/medium',
                                    color: 'text-normal',
                                    children: I.NW.string(I.t.Cc41tb)
                                })
                            ]
                        }),
                        (0, E.u)(A).map((e, t) => {
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
                            className: m.requestContainer,
                            children: I.NW.format(I.t.TYfgw8, {
                                handleOnRequestHook: () => {
                                    _.Z.openUrl(u.sQ.APPEALS_LINK), (0, d.x3)(A, d.d_.PRIMARY, d.sU.MANUAL_REVIEW_REQUEST);
                                }
                            })
                        })
                    ]
                }),
                (0, i.jsxs)(s.mzw, {
                    justify: l.Z.Justify.BETWEEN,
                    direction: l.Z.Direction.HORIZONTAL,
                    children: [
                        (0, i.jsxs)(s.zxk, {
                            innerClassName: m.button,
                            color: s.zxk.Colors.TRANSPARENT,
                            look: s.zxk.Looks.BLANK,
                            onClick: () => {
                                _.Z.openUrl(a.Z.getArticleURL(N.BhN.TIGGER_PAWTECT_UK_AND_AUS_ONLY_LEARN_MORE)), (0, d.x3)(A, d.d_.PRIMARY, d.sU.LEARN_MORE);
                            },
                            children: [
                                (0, i.jsx)(s.Text, {
                                    variant: 'text-sm/semibold',
                                    color: 'header-primary',
                                    children: I.NW.string(I.t.mXpKND)
                                }),
                                (0, i.jsx)(s.Gr1, {
                                    size: 'xs',
                                    color: s.TVs.colors.HEADER_PRIMARY
                                })
                            ]
                        }),
                        (0, i.jsxs)(s.zxk, {
                            innerClassName: m.button,
                            color: s.zxk.Colors.BRAND,
                            onClick: () => {
                                (0, d.x3)(A, d.d_.PRIMARY, d.sU.GET_STARTED);
                            },
                            children: [
                                (0, i.jsx)(s.Text, {
                                    variant: 'text-sm/semibold',
                                    color: 'always-white',
                                    children: I.NW.string(I.t.VLbVho)
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
