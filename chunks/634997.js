n.d(t, { default: () => S }), n(266796);
var i = n(200651),
    o = n(192379),
    r = n(772848),
    s = n(481060),
    l = n(600164),
    c = n(138201),
    a = n(63063),
    _ = n(168107),
    d = n(480916),
    E = n(81643),
    N = n(469775),
    u = n(981631),
    I = n(800530),
    m = n(388032),
    A = n(165145);
let S = function (e) {
    let { transitionState: t, entryPoint: n, onClose: S } = e,
        { loading: L, initiateAgeVerification: T } = (0, E.WD)(S),
        p = o.useMemo(() => (0, r.Z)(), []);
    return (
        o.useEffect(() => {
            (0, d.lA)(p, d.d_.PRIMARY, n);
        }, [p, n]),
        (0, i.jsxs)(s.Y0X, {
            transitionState: t,
            className: A.root,
            children: [
                (0, i.jsxs)(s.hzk, {
                    className: A.content,
                    children: [
                        (0, i.jsxs)('div', {
                            className: A.headersContainer,
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
                        (0, N.u)(p).map((e, t) => {
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
                            className: A.requestContainer,
                            children: m.NW.format(m.t.TYfgw8, {
                                handleOnRequestHook: () => {
                                    _.Z.openUrl(I.sQ.APPEALS_LINK), (0, d.x3)(p, d.d_.PRIMARY, d.sU.MANUAL_REVIEW_REQUEST);
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
                            innerClassName: A.button,
                            color: s.zxk.Colors.TRANSPARENT,
                            look: s.zxk.Looks.BLANK,
                            onClick: () => {
                                _.Z.openUrl(a.Z.getArticleURL(u.BhN.TIGGER_PAWTECT_UK_AND_AUS_ONLY_LEARN_MORE)), (0, d.x3)(p, d.d_.PRIMARY, d.sU.LEARN_MORE);
                            },
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
                            innerClassName: A.button,
                            color: s.zxk.Colors.BRAND,
                            onClick: () => {
                                (0, d.x3)(p, d.d_.PRIMARY, d.sU.GET_STARTED), T();
                            },
                            submitting: L,
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
