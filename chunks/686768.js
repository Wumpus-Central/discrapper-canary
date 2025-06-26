n.d(e, { default: () => m }), n(953529);
var o = n(255367),
    i = n(73800),
    r = n(772848),
    s = n(481060),
    l = n(138201),
    c = n(63063),
    a = n(168107),
    _ = n(480916),
    d = n(81643),
    E = n(981631),
    u = n(800530),
    I = n(388032),
    N = n(579474);
let m = function (t) {
    let { transitionState: e, entryPoint: n, onClose: m } = t,
        { loading: L, initiateAgeVerification: T } = (0, d.WD)(m),
        S = i.useMemo(() => (0, r.Z)(), []);
    i.useEffect(() => {
        (0, _.lA)(S, _.d_.RETRY, n);
    }, [S, n]);
    let C = i.useMemo(
        () => [
            {
                title: I.intl.string(I.t.FYkioq),
                description: I.intl.string(I.t.xMfbR0),
                buttonText: I.intl.string(I.t.RtOE1t),
                buttonColor: s.zxk.Colors.BRAND,
                buttonIcon: s.Gr1,
                buttonIconColor: s.TVs.colors.WHITE,
                buttonLoading: L,
                onPress: () => {
                    T(), (0, _.x3)(S, _.d_.RETRY, _.sU.GET_STARTED);
                }
            },
            {
                title: I.intl.string(I.t['LZO+HR']),
                description: I.intl.string(I.t.N2mHaG),
                buttonText: I.intl.string(I.t['LZO+HR']),
                buttonColor: s.zxk.Colors.PRIMARY,
                buttonIcon: s.Gr1,
                buttonIconColor: s.TVs.colors.TEXT_PRIMARY,
                onPress: () => {
                    a.Z.openUrl(u.sQ.APPEALS_LINK), (0, _.x3)(S, _.d_.RETRY, _.sU.MANUAL_REVIEW_REQUEST);
                }
            }
        ],
        [T, S, L]
    );
    return (0, o.jsx)(s.Y0X, {
        transitionState: e,
        className: N.root,
        parentComponent: 'AgeVerificationRetryModal',
        children: (0, o.jsxs)(s.hzk, {
            className: N.content,
            children: [
                (0, o.jsxs)('div', {
                    className: N.headersContainer,
                    children: [
                        (0, o.jsx)(s.X6q, {
                            variant: 'heading-xl/bold',
                            children: I.intl.string(I.t['5l3R/v'])
                        }),
                        (0, o.jsx)(s.X6q, {
                            variant: 'heading-md/medium',
                            color: 'text-default',
                            children: I.intl.string(I.t.O7SO0N)
                        }),
                        (0, o.jsx)(s.olH, {
                            className: N.modalClose,
                            onClick: m
                        })
                    ]
                }),
                C.map((t, e) => {
                    let { title: n, description: i, buttonText: r, buttonColor: s, buttonIcon: c, buttonIconColor: a, buttonLoading: _, onPress: d } = t;
                    return (0, o.jsx)(
                        l.ZP,
                        {
                            title: n,
                            description: i,
                            buttonText: r,
                            buttonColor: s,
                            onButtonPress: d,
                            buttonIcon: c,
                            buttonIconColor: a.css,
                            buttonLoading: _
                        },
                        e
                    );
                }),
                (0, o.jsx)(s.Text, {
                    variant: 'text-xs/medium',
                    color: 'text-muted',
                    className: N.learnMore,
                    children: I.intl.format(I.t['L+FgkZ'], {
                        handleOnHelpUrlHook: () => {
                            a.Z.openUrl(c.Z.getArticleURL(E.BhN.TIGGER_PAWTECT_LEARN_MORE)), (0, _.x3)(S, _.d_.RETRY, _.sU.LEARN_MORE);
                        }
                    })
                })
            ]
        })
    });
};
