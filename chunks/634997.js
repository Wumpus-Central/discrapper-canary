t.d(n, { default: () => C }), t(953529);
var i = t(255367),
    o = t(73800),
    s = t(772848),
    r = t(481060),
    l = t(600164),
    a = t(138201),
    c = t(63063),
    _ = t(168107),
    d = t(480916),
    E = t(81643),
    u = t(469775),
    I = t(981631),
    N = t(800530),
    m = t(388032),
    L = t(631843);
let C = function (e) {
    let { transitionState: n, entryPoint: t, onClose: C } = e,
        { loading: A, initiateAgeVerification: S } = (0, E.WD)(C),
        x = o.useMemo(() => (0, s.Z)(), []);
    return (
        o.useEffect(() => {
            (0, d.lA)(x, d.d_.PRIMARY, t);
        }, [x, t]),
        (0, i.jsxs)(r.Y0X, {
            transitionState: n,
            parentComponent: 'AgeVerificationGetStartedModal',
            children: [
                (0, i.jsxs)(r.hzk, {
                    className: L.content,
                    children: [
                        (0, i.jsxs)('div', {
                            className: L.headersContainer,
                            children: [
                                (0, i.jsx)(r.X6q, {
                                    variant: 'heading-xl/bold',
                                    children: m.intl.string(m.t.JHNunp)
                                }),
                                (0, i.jsx)(r.X6q, {
                                    variant: 'heading-md/medium',
                                    color: 'text-default',
                                    children: m.intl.string(m.t['+BLIGh'])
                                }),
                                (0, i.jsx)(r.olH, {
                                    className: L.modalClose,
                                    onClick: C
                                })
                            ]
                        }),
                        (0, u.uH)(x).map((e, n) => {
                            let { title: t, description: o } = e;
                            return (0, i.jsx)(
                                a.ZP,
                                {
                                    title: t,
                                    description: o,
                                    listType: 'numbered',
                                    index: n
                                },
                                n
                            );
                        }),
                        (0, i.jsx)(r.Text, {
                            variant: 'text-xs/medium',
                            color: 'text-muted',
                            className: L.requestContainer,
                            children: m.intl.format(m.t.pJAxgY, {
                                handleOnRequestHook: () => {
                                    _.Z.openUrl(N.sQ.APPEALS_LINK), (0, d.x3)(x, d.d_.PRIMARY, d.sU.MANUAL_REVIEW_REQUEST);
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
                            innerClassName: L.button,
                            color: r.zxk.Colors.LINK,
                            look: r.zxk.Looks.LINK,
                            className: L.learnMoreButton,
                            onClick: () => {
                                _.Z.openUrl(c.Z.getArticleURL(I.BhN.TIGGER_PAWTECT_LEARN_MORE)), (0, d.x3)(x, d.d_.PRIMARY, d.sU.LEARN_MORE);
                            },
                            children: [
                                (0, i.jsx)(r.Text, {
                                    variant: 'text-sm/semibold',
                                    color: 'currentColor',
                                    children: m.intl.string(m.t['aA6q//'])
                                }),
                                (0, i.jsx)(r.Gr1, {
                                    size: 'xs',
                                    color: 'currentColor'
                                })
                            ]
                        }),
                        (0, i.jsxs)(r.zxk, {
                            innerClassName: L.button,
                            color: r.zxk.Colors.BRAND,
                            onClick: () => {
                                (0, d.x3)(x, d.d_.PRIMARY, d.sU.GET_STARTED), S();
                            },
                            submitting: A,
                            children: [
                                (0, i.jsx)(r.Text, {
                                    variant: 'text-sm/semibold',
                                    color: 'always-white',
                                    children: m.intl.string(m.t.SJMnkZ)
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
