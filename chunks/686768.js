(n.d(t, { default: () => T }), n(953529));
var o = n(255367),
    i = n(73800),
    r = n(772848),
    s = n(755721),
    l = n(481060),
    a = n(138201),
    c = n(63063),
    d = n(168107),
    _ = n(480916),
    u = n(81643),
    E = n(981631),
    m = n(800530),
    I = n(388032),
    N = n(579474);
let T = function (e) {
    let { transitionState: t, entryPoint: n, onClose: T } = e,
        { loading: x, initiateAgeVerification: L } = (0, u.WD)(T, !0),
        C = i.useMemo(() => (0, r.Z)(), []);
    i.useEffect(() => {
        (0, _.lA)(C, _.d_.RETRY, n);
    }, [C, n]);
    let S = i.useMemo(
        () => [
            {
                title: I.intl.string(I.t.FYkioq),
                description: I.intl.string(I.t.xMfbR0),
                buttonText: I.intl.string(I.t.RtOE1t),
                buttonColor: s.zx.Colors.BRAND,
                buttonIcon: l.Gr1,
                buttonIconColor: l.TVs.colors.WHITE,
                buttonLoading: x,
                onPress: () => {
                    (L(), (0, _.x3)(C, _.d_.RETRY, _.sU.GET_STARTED));
                }
            },
            {
                title: I.intl.string(I.t['LZO+HR']),
                description: I.intl.string(I.t.N2mHaG),
                buttonText: I.intl.string(I.t['LZO+HR']),
                buttonColor: s.zx.Colors.PRIMARY,
                buttonIcon: l.Gr1,
                buttonIconColor: l.TVs.colors.TEXT_PRIMARY,
                onPress: () => {
                    (d.Z.openUrl(m.sQ.APPEALS_LINK), (0, _.x3)(C, _.d_.RETRY, _.sU.MANUAL_REVIEW_REQUEST));
                }
            }
        ],
        [L, C, x]
    );
    return (0, o.jsx)(l.Y0X, {
        transitionState: t,
        className: N.root,
        parentComponent: 'AgeVerificationRetryModal',
        children: (0, o.jsxs)(l.hzk, {
            className: N.content,
            children: [
                (0, o.jsxs)('div', {
                    className: N.headersContainer,
                    children: [
                        (0, o.jsx)(l.X6q, {
                            variant: 'heading-xl/bold',
                            children: I.intl.string(I.t['5l3R/v'])
                        }),
                        (0, o.jsx)(l.X6q, {
                            variant: 'heading-md/medium',
                            color: 'text-default',
                            children: I.intl.string(I.t.O7SO0N)
                        }),
                        (0, o.jsx)(l.olH, {
                            className: N.modalClose,
                            onClick: T
                        })
                    ]
                }),
                S.map((e, t) => {
                    let { title: n, description: i, buttonText: r, buttonColor: s, buttonIcon: l, buttonIconColor: c, buttonLoading: d, onPress: _ } = e;
                    return (0, o.jsx)(
                        a.ZP,
                        {
                            title: n,
                            description: i,
                            buttonText: r,
                            buttonColor: s,
                            onButtonPress: _,
                            buttonIcon: l,
                            buttonIconColor: c.css,
                            buttonLoading: d
                        },
                        t
                    );
                }),
                (0, o.jsx)(l.Text, {
                    variant: 'text-xs/medium',
                    color: 'text-muted',
                    className: N.learnMore,
                    children: I.intl.format(I.t['L+FgkZ'], {
                        handleOnHelpUrlHook: () => {
                            (d.Z.openUrl(c.Z.getArticleURL(E.BhN.TIGGER_PAWTECT_LEARN_MORE)), (0, _.x3)(C, _.d_.RETRY, _.sU.LEARN_MORE));
                        }
                    })
                })
            ]
        })
    });
};
