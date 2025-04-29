n.d(e, { default: () => m }), n(953529);
var o = n(255367),
    i = n(73800),
    s = n(772848),
    r = n(481060),
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
        { loading: T, initiateAgeVerification: L } = (0, d.WD)(m),
        S = i.useMemo(() => (0, s.Z)(), []);
    i.useEffect(() => {
        (0, _.lA)(S, _.d_.RETRY, n);
    }, [S, n]);
    let A = i.useMemo(
        () => [
            {
                title: I.intl.string(I.t.lx3Owc),
                description: I.intl.string(I.t['N5+M3d']),
                buttonText: I.intl.string(I.t.JrEDy8),
                buttonColor: r.zxk.Colors.BRAND,
                buttonIcon: r.Gr1,
                buttonIconColor: r.TVs.colors.WHITE,
                buttonLoading: T,
                onPress: () => {
                    L(), (0, _.x3)(S, _.d_.RETRY, _.sU.GET_STARTED);
                }
            },
            {
                title: I.intl.string(I.t.NpmOHx),
                description: I.intl.string(I.t.FevsfH),
                buttonText: I.intl.string(I.t.NpmOHx),
                buttonColor: r.zxk.Colors.PRIMARY,
                buttonIcon: r.Gr1,
                buttonIconColor: r.TVs.colors.TEXT_PRIMARY,
                onPress: () => {
                    a.Z.openUrl(u.sQ.APPEALS_LINK), (0, _.x3)(S, _.d_.RETRY, _.sU.MANUAL_REVIEW_REQUEST);
                }
            }
        ],
        [L, S, T]
    );
    return (0, o.jsx)(r.Y0X, {
        transitionState: e,
        className: N.root,
        children: (0, o.jsxs)(r.hzk, {
            className: N.content,
            children: [
                (0, o.jsxs)('div', {
                    className: N.headersContainer,
                    children: [
                        (0, o.jsx)(r.X6q, {
                            variant: 'heading-xl/bold',
                            children: I.intl.string(I.t.Bx15q6)
                        }),
                        (0, o.jsx)(r.X6q, {
                            variant: 'heading-md/medium',
                            color: 'text-normal',
                            children: I.intl.string(I.t['bG+/SE'])
                        }),
                        (0, o.jsx)(r.olH, {
                            className: N.modalClose,
                            onClick: m
                        })
                    ]
                }),
                A.map((t, e) => {
                    let { title: n, description: i, buttonText: s, buttonColor: r, buttonIcon: c, buttonIconColor: a, buttonLoading: _, onPress: d } = t;
                    return (0, o.jsx)(
                        l.ZP,
                        {
                            title: n,
                            description: i,
                            buttonText: s,
                            buttonColor: r,
                            onButtonPress: d,
                            buttonIcon: c,
                            buttonIconColor: a.css,
                            buttonLoading: _
                        },
                        e
                    );
                }),
                (0, o.jsx)(r.Text, {
                    variant: 'text-xs/medium',
                    color: 'text-muted',
                    className: N.learnMore,
                    children: I.intl.format(I.t.RV75dn, {
                        handleOnHelpUrlHook: () => {
                            a.Z.openUrl(c.Z.getArticleURL(E.BhN.TIGGER_PAWTECT_UK_AND_AUS_ONLY_LEARN_MORE)), (0, _.x3)(S, _.d_.RETRY, _.sU.LEARN_MORE);
                        }
                    })
                })
            ]
        })
    });
};
