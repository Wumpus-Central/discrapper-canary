(n.d(e, { default: () => L }), n(953529));
var o = n(255367),
    i = n(73800),
    r = n(772848),
    s = n(755721),
    l = n(481060),
    c = n(138201),
    a = n(63063),
    _ = n(168107),
    d = n(480916),
    E = n(81643),
    u = n(981631),
    I = n(800530),
    N = n(388032),
    m = n(579474);
let L = function (t) {
    let { transitionState: e, entryPoint: n, onClose: L } = t,
        { loading: T, initiateAgeVerification: S } = (0, E.WD)(L),
        C = i.useMemo(() => (0, r.Z)(), []);
    i.useEffect(() => {
        (0, d.lA)(C, d.d_.RETRY, n);
    }, [C, n]);
    let A = i.useMemo(
        () => [
            {
                title: N.intl.string(N.t.FYkioq),
                description: N.intl.string(N.t.xMfbR0),
                buttonText: N.intl.string(N.t.RtOE1t),
                buttonColor: s.zx.Colors.BRAND,
                buttonIcon: l.Gr1,
                buttonIconColor: l.TVs.colors.WHITE,
                buttonLoading: T,
                onPress: () => {
                    (S(), (0, d.x3)(C, d.d_.RETRY, d.sU.GET_STARTED));
                }
            },
            {
                title: N.intl.string(N.t['LZO+HR']),
                description: N.intl.string(N.t.N2mHaG),
                buttonText: N.intl.string(N.t['LZO+HR']),
                buttonColor: s.zx.Colors.PRIMARY,
                buttonIcon: l.Gr1,
                buttonIconColor: l.TVs.colors.TEXT_PRIMARY,
                onPress: () => {
                    (_.Z.openUrl(I.sQ.APPEALS_LINK), (0, d.x3)(C, d.d_.RETRY, d.sU.MANUAL_REVIEW_REQUEST));
                }
            }
        ],
        [S, C, T]
    );
    return (0, o.jsx)(l.Y0X, {
        transitionState: e,
        className: m.root,
        parentComponent: 'AgeVerificationRetryModal',
        children: (0, o.jsxs)(l.hzk, {
            className: m.content,
            children: [
                (0, o.jsxs)('div', {
                    className: m.headersContainer,
                    children: [
                        (0, o.jsx)(l.X6q, {
                            variant: 'heading-xl/bold',
                            children: N.intl.string(N.t['5l3R/v'])
                        }),
                        (0, o.jsx)(l.X6q, {
                            variant: 'heading-md/medium',
                            color: 'text-default',
                            children: N.intl.string(N.t.O7SO0N)
                        }),
                        (0, o.jsx)(l.olH, {
                            className: m.modalClose,
                            onClick: L
                        })
                    ]
                }),
                A.map((t, e) => {
                    let { title: n, description: i, buttonText: r, buttonColor: s, buttonIcon: l, buttonIconColor: a, buttonLoading: _, onPress: d } = t;
                    return (0, o.jsx)(
                        c.ZP,
                        {
                            title: n,
                            description: i,
                            buttonText: r,
                            buttonColor: s,
                            onButtonPress: d,
                            buttonIcon: l,
                            buttonIconColor: a.css,
                            buttonLoading: _
                        },
                        e
                    );
                }),
                (0, o.jsx)(l.Text, {
                    variant: 'text-xs/medium',
                    color: 'text-muted',
                    className: m.learnMore,
                    children: N.intl.format(N.t['L+FgkZ'], {
                        handleOnHelpUrlHook: () => {
                            (_.Z.openUrl(a.Z.getArticleURL(u.BhN.TIGGER_PAWTECT_LEARN_MORE)), (0, d.x3)(C, d.d_.RETRY, d.sU.LEARN_MORE));
                        }
                    })
                })
            ]
        })
    });
};
