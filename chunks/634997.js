n.d(t, { default: () => S }), n(266796);
var i = n(200651),
    o = n(192379),
    s = n(772848),
    r = n(481060),
    l = n(600164),
    a = n(138201),
    c = n(63063),
    _ = n(168107),
    d = n(480916),
    E = n(81643),
    N = n(469775),
    m = n(981631),
    u = n(800530),
    I = n(388032),
    A = n(165145);
let S = function (e) {
    let { transitionState: t, entryPoint: n, onClose: S } = e,
        { loading: L, initiateAgeVerification: T } = (0, E.WD)(S),
        x = o.useMemo(() => (0, s.Z)(), []);
    return (
        o.useEffect(() => {
            (0, d.lA)(x, d.d_.PRIMARY, n);
        }, [x, n]),
        (0, i.jsxs)(r.Y0X, {
            transitionState: t,
            className: A.root,
            children: [
                (0, i.jsxs)(r.hzk, {
                    className: A.content,
                    children: [
                        (0, i.jsxs)('div', {
                            className: A.headersContainer,
                            children: [
                                (0, i.jsx)(r.X6q, {
                                    variant: 'heading-xl/bold',
                                    children: I.NW.string(I.t['FQ+YOD'])
                                }),
                                (0, i.jsx)(r.X6q, {
                                    variant: 'heading-md/medium',
                                    color: 'text-normal',
                                    children: I.NW.string(I.t.Cc41tb)
                                }),
                                (0, i.jsx)(r.olH, {
                                    className: A.modalClose,
                                    onClick: S
                                })
                            ]
                        }),
                        (0, N.u)(x).map((e, t) => {
                            let { title: n, description: o } = e;
                            return (0, i.jsx)(
                                a.ZP,
                                {
                                    title: n,
                                    description: o,
                                    listType: 'numbered',
                                    index: t
                                },
                                t
                            );
                        }),
                        (0, i.jsx)(r.Text, {
                            variant: 'text-xs/medium',
                            color: 'text-muted',
                            className: A.requestContainer,
                            children: I.NW.format(I.t.TYfgw8, {
                                handleOnRequestHook: () => {
                                    _.Z.openUrl(u.sQ.APPEALS_LINK), (0, d.x3)(x, d.d_.PRIMARY, d.sU.MANUAL_REVIEW_REQUEST);
                                }
                            })
                        })
                    ]
                }),
                (0, i.jsxs)(r.mzw, {
                    justify: l.Z.Justify.BETWEEN,
                    direction: l.Z.Direction.HORIZONTAL,
                    children: [
                        (0, i.jsxs)(r.zxk, {
                            innerClassName: A.button,
                            color: r.zxk.Colors.TRANSPARENT,
                            look: r.zxk.Looks.BLANK,
                            onClick: () => {
                                _.Z.openUrl(c.Z.getArticleURL(m.BhN.TIGGER_PAWTECT_UK_AND_AUS_ONLY_LEARN_MORE)), (0, d.x3)(x, d.d_.PRIMARY, d.sU.LEARN_MORE);
                            },
                            children: [
                                (0, i.jsx)(r.Text, {
                                    variant: 'text-sm/semibold',
                                    color: 'header-primary',
                                    children: I.NW.string(I.t.mXpKND)
                                }),
                                (0, i.jsx)(r.Gr1, {
                                    size: 'xs',
                                    color: r.TVs.colors.HEADER_PRIMARY
                                })
                            ]
                        }),
                        (0, i.jsxs)(r.zxk, {
                            innerClassName: A.button,
                            color: r.zxk.Colors.BRAND,
                            onClick: () => {
                                (0, d.x3)(x, d.d_.PRIMARY, d.sU.GET_STARTED), T();
                            },
                            submitting: L,
                            children: [
                                (0, i.jsx)(r.Text, {
                                    variant: 'text-sm/semibold',
                                    color: 'always-white',
                                    children: I.NW.string(I.t.VLbVho)
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
        })
    );
};
