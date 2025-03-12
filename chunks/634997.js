n.d(t, { default: () => L }), n(266796);
var o = n(200651),
    i = n(192379),
    r = n(772848),
    s = n(481060),
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
let L = function (e) {
    let { transitionState: t, entryPoint: n, onClose: L } = e,
        { loading: S, initiateAgeVerification: T } = (0, E.WD)(L),
        C = i.useMemo(() => (0, r.Z)(), []);
    return (
        i.useEffect(() => {
            (0, d.lA)(C, d.d_.PRIMARY, n);
        }, [C, n]),
        (0, o.jsxs)(s.Y0X, {
            transitionState: t,
            className: A.root,
            children: [
                (0, o.jsxs)(s.hzk, {
                    className: A.content,
                    children: [
                        (0, o.jsxs)('div', {
                            className: A.headersContainer,
                            children: [
                                (0, o.jsx)(s.X6q, {
                                    variant: 'heading-xl/bold',
                                    children: I.NW.string(I.t['FQ+YOD'])
                                }),
                                (0, o.jsx)(s.X6q, {
                                    variant: 'heading-md/medium',
                                    color: 'text-normal',
                                    children: I.NW.string(I.t.Cc41tb)
                                }),
                                (0, o.jsx)(s.olH, {
                                    className: A.modalClose,
                                    onClick: L
                                })
                            ]
                        }),
                        (0, N.u)(C).map((e, t) => {
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
                        (0, o.jsx)(s.Text, {
                            variant: 'text-xs/medium',
                            color: 'text-muted',
                            className: A.requestContainer,
                            children: I.NW.format(I.t.TYfgw8, {
                                handleOnRequestHook: () => {
                                    _.Z.openUrl(u.sQ.APPEALS_LINK), (0, d.x3)(C, d.d_.PRIMARY, d.sU.MANUAL_REVIEW_REQUEST);
                                }
                            })
                        })
                    ]
                }),
                (0, o.jsxs)(s.mzw, {
                    justify: l.Z.Justify.BETWEEN,
                    direction: l.Z.Direction.HORIZONTAL,
                    className: A.modalFooter,
                    children: [
                        (0, o.jsxs)(s.zxk, {
                            innerClassName: A.button,
                            color: s.zxk.Colors.LINK,
                            look: s.zxk.Looks.LINK,
                            className: A.learnMoreButton,
                            onClick: () => {
                                _.Z.openUrl(c.Z.getArticleURL(m.BhN.TIGGER_PAWTECT_UK_AND_AUS_ONLY_LEARN_MORE)), (0, d.x3)(C, d.d_.PRIMARY, d.sU.LEARN_MORE);
                            },
                            children: [
                                (0, o.jsx)(s.Text, {
                                    variant: 'text-sm/semibold',
                                    color: 'currentColor',
                                    children: I.NW.string(I.t.mXpKND)
                                }),
                                (0, o.jsx)(s.Gr1, {
                                    size: 'xs',
                                    color: 'currentColor'
                                })
                            ]
                        }),
                        (0, o.jsxs)(s.zxk, {
                            innerClassName: A.button,
                            color: s.zxk.Colors.BRAND,
                            onClick: () => {
                                (0, d.x3)(C, d.d_.PRIMARY, d.sU.GET_STARTED), T();
                            },
                            submitting: S,
                            children: [
                                (0, o.jsx)(s.Text, {
                                    variant: 'text-sm/semibold',
                                    color: 'always-white',
                                    children: I.NW.string(I.t.VLbVho)
                                }),
                                (0, o.jsx)(s.Gr1, {
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
