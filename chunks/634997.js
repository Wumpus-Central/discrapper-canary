n.d(t, { default: () => C }), n(266796);
var o = n(200651),
    i = n(192379),
    s = n(772848),
    r = n(481060),
    l = n(600164),
    a = n(138201),
    c = n(63063),
    _ = n(168107),
    d = n(480916),
    E = n(81643),
    u = n(469775),
    N = n(981631),
    m = n(800530),
    I = n(388032),
    L = n(631843);
let C = function (e) {
    let { transitionState: t, entryPoint: n, onClose: C } = e,
        { loading: A, initiateAgeVerification: S } = (0, E.WD)(C),
        x = i.useMemo(() => (0, s.Z)(), []);
    return (
        i.useEffect(() => {
            (0, d.lA)(x, d.d_.PRIMARY, n);
        }, [x, n]),
        (0, o.jsxs)(r.Y0X, {
            transitionState: t,
            className: L.root,
            children: [
                (0, o.jsxs)(r.hzk, {
                    className: L.content,
                    children: [
                        (0, o.jsxs)('div', {
                            className: L.headersContainer,
                            children: [
                                (0, o.jsx)(r.X6q, {
                                    variant: 'heading-xl/bold',
                                    children: I.NW.string(I.t['FQ+YOD'])
                                }),
                                (0, o.jsx)(r.X6q, {
                                    variant: 'heading-md/medium',
                                    color: 'text-normal',
                                    children: I.NW.string(I.t.Cc41tb)
                                }),
                                (0, o.jsx)(r.olH, {
                                    className: L.modalClose,
                                    onClick: C
                                })
                            ]
                        }),
                        (0, u.u)(x).map((e, t) => {
                            let { title: n, description: i } = e;
                            return (0, o.jsx)(
                                a.ZP,
                                {
                                    title: n,
                                    description: i,
                                    listType: 'numbered',
                                    index: t
                                },
                                t
                            );
                        }),
                        (0, o.jsx)(r.Text, {
                            variant: 'text-xs/medium',
                            color: 'text-muted',
                            className: L.requestContainer,
                            children: I.NW.format(I.t.TYfgw8, {
                                handleOnRequestHook: () => {
                                    _.Z.openUrl(m.sQ.APPEALS_LINK), (0, d.x3)(x, d.d_.PRIMARY, d.sU.MANUAL_REVIEW_REQUEST);
                                }
                            })
                        })
                    ]
                }),
                (0, o.jsxs)(r.mzw, {
                    justify: l.Z.Justify.BETWEEN,
                    direction: l.Z.Direction.HORIZONTAL,
                    className: L.modalFooter,
                    children: [
                        (0, o.jsxs)(r.zxk, {
                            innerClassName: L.button,
                            color: r.zxk.Colors.LINK,
                            look: r.zxk.Looks.LINK,
                            className: L.learnMoreButton,
                            onClick: () => {
                                _.Z.openUrl(c.Z.getArticleURL(N.BhN.TIGGER_PAWTECT_UK_AND_AUS_ONLY_LEARN_MORE)), (0, d.x3)(x, d.d_.PRIMARY, d.sU.LEARN_MORE);
                            },
                            children: [
                                (0, o.jsx)(r.Text, {
                                    variant: 'text-sm/semibold',
                                    color: 'currentColor',
                                    children: I.NW.string(I.t.mXpKND)
                                }),
                                (0, o.jsx)(r.Gr1, {
                                    size: 'xs',
                                    color: 'currentColor'
                                })
                            ]
                        }),
                        (0, o.jsxs)(r.zxk, {
                            innerClassName: L.button,
                            color: r.zxk.Colors.BRAND,
                            onClick: () => {
                                (0, d.x3)(x, d.d_.PRIMARY, d.sU.GET_STARTED), S();
                            },
                            submitting: A,
                            children: [
                                (0, o.jsx)(r.Text, {
                                    variant: 'text-sm/semibold',
                                    color: 'always-white',
                                    children: I.NW.string(I.t.VLbVho)
                                }),
                                (0, o.jsx)(r.Gr1, {
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
