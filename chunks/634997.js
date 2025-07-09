(t.d(n, { default: () => A }), t(953529));
var i = t(255367),
    o = t(73800),
    s = t(772848),
    r = t(755721),
    l = t(481060),
    a = t(600164),
    c = t(138201),
    _ = t(63063),
    d = t(168107),
    E = t(480916),
    u = t(81643),
    I = t(469775),
    N = t(981631),
    m = t(800530),
    L = t(388032),
    C = t(631843);
let A = function (e) {
    let { transitionState: n, entryPoint: t, onClose: A } = e,
        { loading: S, initiateAgeVerification: x } = (0, u.WD)(A),
        T = o.useMemo(() => (0, s.Z)(), []);
    return (
        o.useEffect(() => {
            (0, E.lA)(T, E.d_.PRIMARY, t);
        }, [T, t]),
        (0, i.jsxs)(l.Y0X, {
            transitionState: n,
            parentComponent: 'AgeVerificationGetStartedModal',
            children: [
                (0, i.jsxs)(l.hzk, {
                    className: C.content,
                    children: [
                        (0, i.jsxs)('div', {
                            className: C.headersContainer,
                            children: [
                                (0, i.jsx)(l.X6q, {
                                    variant: 'heading-xl/bold',
                                    children: L.intl.string(L.t.JHNunp)
                                }),
                                (0, i.jsx)(l.X6q, {
                                    variant: 'heading-md/medium',
                                    color: 'text-default',
                                    children: L.intl.string(L.t['+BLIGh'])
                                }),
                                (0, i.jsx)(l.olH, {
                                    className: C.modalClose,
                                    onClick: A
                                })
                            ]
                        }),
                        (0, I.uH)(T).map((e, n) => {
                            let { title: t, description: o } = e;
                            return (0, i.jsx)(
                                c.ZP,
                                {
                                    title: t,
                                    description: o,
                                    listType: 'numbered',
                                    index: n
                                },
                                n
                            );
                        }),
                        (0, i.jsx)(l.Text, {
                            variant: 'text-xs/medium',
                            color: 'text-muted',
                            className: C.requestContainer,
                            children: L.intl.format(L.t.pJAxgY, {
                                handleOnRequestHook: () => {
                                    (d.Z.openUrl(m.sQ.APPEALS_LINK), (0, E.x3)(T, E.d_.PRIMARY, E.sU.MANUAL_REVIEW_REQUEST));
                                }
                            })
                        })
                    ]
                }),
                (0, i.jsxs)(l.mzw, {
                    justify: a.Z.Justify.BETWEEN,
                    direction: a.Z.Direction.HORIZONTAL,
                    children: [
                        (0, i.jsxs)(r.zx, {
                            innerClassName: C.button,
                            color: r.zx.Colors.LINK,
                            look: r.zx.Looks.LINK,
                            className: C.learnMoreButton,
                            onClick: () => {
                                (d.Z.openUrl(_.Z.getArticleURL(N.BhN.TIGGER_PAWTECT_LEARN_MORE)), (0, E.x3)(T, E.d_.PRIMARY, E.sU.LEARN_MORE));
                            },
                            children: [
                                (0, i.jsx)(l.Text, {
                                    variant: 'text-sm/semibold',
                                    color: 'currentColor',
                                    children: L.intl.string(L.t['aA6q//'])
                                }),
                                (0, i.jsx)(l.Gr1, {
                                    size: 'xs',
                                    color: 'currentColor'
                                })
                            ]
                        }),
                        (0, i.jsxs)(r.zx, {
                            innerClassName: C.button,
                            color: r.zx.Colors.BRAND,
                            onClick: () => {
                                ((0, E.x3)(T, E.d_.PRIMARY, E.sU.GET_STARTED), x());
                            },
                            submitting: S,
                            children: [
                                (0, i.jsx)(l.Text, {
                                    variant: 'text-sm/semibold',
                                    color: 'always-white',
                                    children: L.intl.string(L.t.SJMnkZ)
                                }),
                                (0, i.jsx)(l.Gr1, {
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
