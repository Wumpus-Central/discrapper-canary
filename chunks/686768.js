n.d(t, { default: () => m }), n(266796);
var o = n(200651),
    i = n(192379),
    s = n(772848),
    r = n(481060),
    l = n(138201),
    c = n(63063),
    a = n(168107),
    _ = n(480916),
    d = n(81643),
    E = n(981631),
    u = n(800530),
    N = n(388032),
    I = n(579474);
let m = function (e) {
    let { transitionState: t, entryPoint: n, onClose: m } = e,
        { loading: T, initiateAgeVerification: L } = (0, d.WD)(m),
        S = i.useMemo(() => (0, s.Z)(), []);
    i.useEffect(() => {
        (0, _.lA)(S, _.d_.RETRY, n);
    }, [S, n]);
    let A = i.useMemo(
        () => [
            {
                title: N.NW.string(N.t.lx3Owc),
                description: N.NW.string(N.t['N5+M3d']),
                buttonText: N.NW.string(N.t.JrEDy8),
                buttonColor: r.zxk.Colors.BRAND,
                buttonIcon: r.Gr1,
                buttonIconColor: r.TVs.colors.WHITE,
                buttonLoading: T,
                onPress: () => {
                    L(), (0, _.x3)(S, _.d_.RETRY, _.sU.GET_STARTED);
                }
            },
            {
                title: N.NW.string(N.t.NpmOHx),
                description: N.NW.string(N.t.FevsfH),
                buttonText: N.NW.string(N.t.NpmOHx),
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
        transitionState: t,
        className: I.root,
        children: (0, o.jsxs)(r.hzk, {
            className: I.content,
            children: [
                (0, o.jsxs)('div', {
                    className: I.headersContainer,
                    children: [
                        (0, o.jsx)(r.X6q, {
                            variant: 'heading-xl/bold',
                            children: N.NW.string(N.t.Bx15q6)
                        }),
                        (0, o.jsx)(r.X6q, {
                            variant: 'heading-md/medium',
                            color: 'text-normal',
                            children: N.NW.string(N.t['bG+/SE'])
                        }),
                        (0, o.jsx)(r.olH, {
                            className: I.modalClose,
                            onClick: m
                        })
                    ]
                }),
                A.map((e, t) => {
                    let { title: n, description: i, buttonText: s, buttonColor: r, buttonIcon: c, buttonIconColor: a, buttonLoading: _, onPress: d } = e;
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
                        t
                    );
                }),
                (0, o.jsx)(r.Text, {
                    variant: 'text-xs/medium',
                    color: 'text-muted',
                    className: I.learnMore,
                    children: N.NW.format(N.t.RV75dn, {
                        handleOnHelpUrlHook: () => {
                            a.Z.openUrl(c.Z.getArticleURL(E.BhN.TIGGER_PAWTECT_UK_AND_AUS_ONLY_LEARN_MORE)), (0, _.x3)(S, _.d_.RETRY, _.sU.LEARN_MORE);
                        }
                    })
                })
            ]
        })
    });
};
