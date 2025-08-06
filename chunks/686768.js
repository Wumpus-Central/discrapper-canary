n.d(o, { default: () => T }), n(953529);
var e = n(255367),
    r = n(73800),
    s = n(772848),
    l = n(755721),
    i = n(481060),
    a = n(138201),
    d = n(63063),
    c = n(168107),
    u = n(480916),
    R = n(81643),
    _ = n(981631),
    x = n(800530),
    E = n(388032),
    m = n(579474);
let T = function (t) {
    let { transitionState: o, entryPoint: n, onClose: T } = t,
        { loading: h, initiateAgeVerification: C } = (0, R.WD)(T, !0),
        b = r.useMemo(() => (0, s.Z)(), []);
    r.useEffect(() => {
        (0, u.lA)(b, u.d_.RETRY, n);
    }, [b, n]);
    let p = r.useMemo(
        () => [
            {
                title: E.intl.string(E.t.FYkioq),
                description: E.intl.string(E.t.xMfbR0),
                buttonText: E.intl.string(E.t.RtOE1t),
                buttonColor: l.zx.Colors.BRAND,
                buttonIcon: i.Gr1,
                buttonIconColor: i.TVs.colors.WHITE,
                buttonLoading: h,
                onPress: () => {
                    C(), (0, u.x3)(b, u.d_.RETRY, u.sU.GET_STARTED);
                },
            },
            {
                title: E.intl.string(E.t["LZO+HR"]),
                description: E.intl.string(E.t.N2mHaG),
                buttonText: E.intl.string(E.t["LZO+HR"]),
                buttonColor: l.zx.Colors.PRIMARY,
                buttonIcon: i.Gr1,
                buttonIconColor: i.TVs.colors.TEXT_PRIMARY,
                onPress: () => {
                    c.Z.openUrl(x.sQ.APPEALS_LINK), (0, u.x3)(b, u.d_.RETRY, u.sU.MANUAL_REVIEW_REQUEST);
                },
            },
        ],
        [C, b, h],
    );
    return (0, e.jsx)(i.Y0X, {
        transitionState: o,
        className: m.root,
        parentComponent: "AgeVerificationRetryModal",
        children: (0, e.jsxs)(i.hzk, {
            className: m.content,
            children: [
                (0, e.jsxs)("div", {
                    className: m.headersContainer,
                    children: [
                        (0, e.jsx)(i.X6q, {
                            variant: "heading-xl/bold",
                            children: E.intl.string(E.t["5l3R/v"]),
                        }),
                        (0, e.jsx)(i.X6q, {
                            variant: "heading-md/medium",
                            color: "text-default",
                            children: E.intl.string(E.t.O7SO0N),
                        }),
                        (0, e.jsx)(i.olH, {
                            className: m.modalClose,
                            onClick: T,
                        }),
                    ],
                }),
                p.map((t, o) => {
                    let {
                        title: n,
                        description: r,
                        buttonText: s,
                        buttonColor: l,
                        buttonIcon: i,
                        buttonIconColor: d,
                        buttonLoading: c,
                        onPress: u,
                    } = t;
                    return (0, e.jsx)(
                        a.ZP,
                        {
                            title: n,
                            description: r,
                            buttonText: s,
                            buttonColor: l,
                            onButtonPress: u,
                            buttonIcon: i,
                            buttonIconColor: d.css,
                            buttonLoading: c,
                        },
                        o,
                    );
                }),
                (0, e.jsx)(i.Text, {
                    variant: "text-xs/medium",
                    color: "text-muted",
                    className: m.learnMore,
                    children: E.intl.format(E.t["L+FgkZ"], {
                        handleOnHelpUrlHook: () => {
                            c.Z.openUrl(d.Z.getArticleURL(_.BhN.TIGGER_PAWTECT_LEARN_MORE)),
                                (0, u.x3)(b, u.d_.RETRY, u.sU.LEARN_MORE);
                        },
                    }),
                }),
            ],
        }),
    });
};
