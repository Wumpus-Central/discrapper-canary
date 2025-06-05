n.d(t, { default: () => C }), n(953529);
var o = n(255367),
    i = n(73800),
    r = n(772848),
    s = n(481060),
    l = n(600164),
    a = n(138201),
    c = n(63063),
    _ = n(168107),
    d = n(480916),
    E = n(81643),
    u = n(469775),
    m = n(981631),
    I = n(800530),
    N = n(388032),
    L = n(631843);
let C = function (e) {
    let { transitionState: t, entryPoint: n, onClose: C } = e,
        { loading: A, initiateAgeVerification: S } = (0, E.WD)(C),
        x = i.useMemo(() => (0, r.Z)(), []);
    return (
        i.useEffect(() => {
            (0, d.lA)(x, d.d_.PRIMARY, n);
        }, [x, n]),
        (0, o.jsxs)(s.Y0X, {
            transitionState: t,
            className: L.root,
            parentComponent: 'AgeVerificationGetStartedModal',
            children: [
                (0, o.jsxs)(s.hzk, {
                    className: L.content,
                    children: [
                        (0, o.jsxs)('div', {
                            className: L.headersContainer,
                            children: [
                                (0, o.jsx)(s.X6q, {
                                    variant: 'heading-xl/bold',
                                    children: N.intl.string(N.t.JHNunp)
                                }),
                                (0, o.jsx)(s.X6q, {
                                    variant: 'heading-md/medium',
                                    color: 'text-normal',
                                    children: N.intl.string(N.t['+BLIGh'])
                                }),
                                (0, o.jsx)(s.olH, {
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
                        (0, o.jsx)(s.Text, {
                            variant: 'text-xs/medium',
                            color: 'text-muted',
                            className: L.requestContainer,
                            children: N.intl.format(N.t.pJAxgY, {
                                handleOnRequestHook: () => {
                                    _.Z.openUrl(I.sQ.APPEALS_LINK), (0, d.x3)(x, d.d_.PRIMARY, d.sU.MANUAL_REVIEW_REQUEST);
                                }
                            })
                        })
                    ]
                }),
                (0, o.jsxs)(s.mzw, {
                    justify: l.Z.Justify.BETWEEN,
                    direction: l.Z.Direction.HORIZONTAL,
                    className: L.modalFooter,
                    children: [
                        (0, o.jsxs)(s.zxk, {
                            innerClassName: L.button,
                            color: s.zxk.Colors.LINK,
                            look: s.zxk.Looks.LINK,
                            className: L.learnMoreButton,
                            onClick: () => {
                                _.Z.openUrl(c.Z.getArticleURL(m.BhN.TIGGER_PAWTECT_LEARN_MORE)), (0, d.x3)(x, d.d_.PRIMARY, d.sU.LEARN_MORE);
                            },
                            children: [
                                (0, o.jsx)(s.Text, {
                                    variant: 'text-sm/semibold',
                                    color: 'currentColor',
                                    children: N.intl.string(N.t['aA6q//'])
                                }),
                                (0, o.jsx)(s.Gr1, {
                                    size: 'xs',
                                    color: 'currentColor'
                                })
                            ]
                        }),
                        (0, o.jsxs)(s.zxk, {
                            innerClassName: L.button,
                            color: s.zxk.Colors.BRAND,
                            onClick: () => {
                                (0, d.x3)(x, d.d_.PRIMARY, d.sU.GET_STARTED), S();
                            },
                            submitting: A,
                            children: [
                                (0, o.jsx)(s.Text, {
                                    variant: 'text-sm/semibold',
                                    color: 'always-white',
                                    children: N.intl.string(N.t.SJMnkZ)
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
