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
    m = n(388032),
    I = n(740076);
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
                title: m.intl.string(m.t.FYkioq),
                description: m.intl.string(m.t.xMfbR0),
                buttonText: m.intl.string(m.t.RtOE1t),
                buttonVariant: "primary",
                buttonIcon: s.Gr1,
                buttonLoading: p,
                onButtonPress: () => {
                    S(), (0, _.x3)(L, _.d_.RETRY, _.sU.GET_STARTED);
                },
            },
            {
                title: m.intl.string(m.t["LZO+HR"]),
                description: m.intl.string(m.t.N2mHaG),
                buttonText: m.intl.string(m.t["LZO+HR"]),
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
        className: I.root,
        parentComponent: "AgeVerificationRetryModal",
        children: (0, i.jsxs)(s.hzk, {
            className: I.content,
            children: [
                (0, i.jsxs)("div", {
                    className: I.headersContainer,
                    children: [
                        (0, i.jsx)(s.X6q, {
                            variant: "heading-xl/bold",
                            children: m.intl.string(m.t["5l3R/v"]),
                        }),
                        (0, i.jsx)(s.X6q, {
                            variant: "heading-md/medium",
                            color: "text-default",
                            children: m.intl.string(m.t.O7SO0N),
                        }),
                        (0, i.jsx)(s.olH, {
                            className: I.modalClose,
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
                    className: I.learnMore,
                    children: m.intl.format(m.t["L+FgkZ"], {
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
