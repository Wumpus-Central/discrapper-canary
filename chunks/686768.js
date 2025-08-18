n.d(t, { default: () => N });
var i = n(951288),
    o = n(647438),
    r = n(772848),
    s = n(481060),
    l = n(138201),
    a = n(63063),
    c = n(168107),
    _ = n(480916),
    d = n(81643),
    E = n(981631),
    u = n(800530),
    I = n(388032),
    m = n(740076);
let N = function (e) {
    let { transitionState: t, entryPoint: n, onClose: N } = e,
        { loading: p, initiateAgeVerification: S } = (0, d.WD)(N, !0),
        L = o.useMemo(() => (0, r.Z)(), []);
    o.useEffect(() => {
        (0, _.lA)(L, _.d_.RETRY, n);
    }, [L, n]);
    let T = o.useMemo(
        () => [
            {
                title: I.intl.string(I.t.FYkioq),
                description: I.intl.string(I.t.xMfbR0),
                buttonText: I.intl.string(I.t.RtOE1t),
                buttonVariant: "primary",
                buttonIcon: s.Gr1,
                buttonLoading: p,
                onButtonPress: () => {
                    S(), (0, _.x3)(L, _.d_.RETRY, _.sU.GET_STARTED);
                },
            },
            {
                title: I.intl.string(I.t["LZO+HR"]),
                description: I.intl.string(I.t.N2mHaG),
                buttonText: I.intl.string(I.t["LZO+HR"]),
                buttonIcon: s.Gr1,
                onButtonPress: () => {
                    c.Z.openUrl(u.sQ.APPEALS_LINK), (0, _.x3)(L, _.d_.RETRY, _.sU.MANUAL_REVIEW_REQUEST);
                },
            },
        ],
        [S, L, p],
    );
    return (0, i.jsx)(s.Y0X, {
        transitionState: t,
        className: m.root,
        parentComponent: "AgeVerificationRetryModal",
        children: (0, i.jsxs)(s.hzk, {
            className: m.content,
            children: [
                (0, i.jsxs)("div", {
                    className: m.headersContainer,
                    children: [
                        (0, i.jsx)(s.X6q, {
                            variant: "heading-xl/bold",
                            children: I.intl.string(I.t["5l3R/v"]),
                        }),
                        (0, i.jsx)(s.X6q, {
                            variant: "heading-md/medium",
                            color: "text-default",
                            children: I.intl.string(I.t.O7SO0N),
                        }),
                        (0, i.jsx)(s.olH, {
                            className: m.modalClose,
                            onClick: N,
                        }),
                    ],
                }),
                T.map((e, t) =>
                    (0, i.jsx)(
                        l.JZ,
                        (function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {},
                                    i = Object.keys(n);
                                "function" == typeof Object.getOwnPropertySymbols &&
                                    (i = i.concat(
                                        Object.getOwnPropertySymbols(n).filter(function (e) {
                                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                        }),
                                    )),
                                    i.forEach(function (t) {
                                        var i;
                                        (i = n[t]),
                                            t in e
                                                ? Object.defineProperty(e, t, {
                                                      value: i,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0,
                                                  })
                                                : (e[t] = i);
                                    });
                            }
                            return e;
                        })({ buttonIconPosition: "end" }, e),
                        t,
                    ),
                ),
                (0, i.jsx)(s.Text, {
                    variant: "text-xs/medium",
                    color: "text-muted",
                    className: m.learnMore,
                    children: I.intl.format(I.t["L+FgkZ"], {
                        handleOnHelpUrlHook: () => {
                            c.Z.openUrl(a.Z.getArticleURL(E.BhN.TIGGER_PAWTECT_LEARN_MORE)),
                                (0, _.x3)(L, _.d_.RETRY, _.sU.LEARN_MORE);
                        },
                    }),
                }),
            ],
        }),
    });
};
