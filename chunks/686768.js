e.d(t, { default: () => b });
var o = e(951288),
    r = e(647438),
    i = e(772848),
    a = e(481060),
    l = e(138201),
    s = e(63063),
    c = e(168107),
    d = e(480916),
    u = e(81643),
    x = e(981631),
    m = e(800530),
    _ = e(388032),
    f = e(740076);
let b = function (n) {
    let { transitionState: t, entryPoint: e, onClose: b } = n,
        { loading: h, initiateAgeVerification: p } = (0, u.WD)(b, !0),
        j = r.useMemo(() => (0, i.Z)(), []);
    r.useEffect(() => {
        (0, d.lA)(j, d.d_.RETRY, e);
    }, [j, e]);
    let R = r.useMemo(
        () => [
            {
                title: _.intl.string(_.t.FYkioq),
                description: _.intl.string(_.t.xMfbR0),
                buttonText: _.intl.string(_.t.RtOE1t),
                buttonVariant: "primary",
                buttonIcon: a.Gr1,
                buttonLoading: h,
                onButtonPress: () => {
                    p(), (0, d.x3)(j, d.d_.RETRY, d.sU.GET_STARTED);
                },
            },
            {
                title: _.intl.string(_.t["LZO+HR"]),
                description: _.intl.string(_.t.N2mHaG),
                buttonText: _.intl.string(_.t["LZO+HR"]),
                buttonIcon: a.Gr1,
                onButtonPress: () => {
                    c.Z.openUrl(m.sQ.APPEALS_LINK), (0, d.x3)(j, d.d_.RETRY, d.sU.MANUAL_REVIEW_REQUEST);
                },
            },
        ],
        [p, j, h],
    );
    return (0, o.jsx)(a.Y0X, {
        transitionState: t,
        className: f.root,
        parentComponent: "AgeVerificationRetryModal",
        children: (0, o.jsxs)(a.hzk, {
            className: f.content,
            children: [
                (0, o.jsxs)("div", {
                    className: f.headersContainer,
                    children: [
                        (0, o.jsx)(a.X6q, {
                            variant: "heading-xl/bold",
                            children: _.intl.string(_.t["5l3R/v"]),
                        }),
                        (0, o.jsx)(a.X6q, {
                            variant: "heading-md/medium",
                            color: "text-default",
                            children: _.intl.string(_.t.O7SO0N),
                        }),
                        (0, o.jsx)(a.olH, {
                            className: f.modalClose,
                            onClick: b,
                        }),
                    ],
                }),
                R.map((n, t) =>
                    (0, o.jsx)(
                        l.JZ,
                        (function (n) {
                            for (var t = 1; t < arguments.length; t++) {
                                var e = null != arguments[t] ? arguments[t] : {},
                                    o = Object.keys(e);
                                "function" == typeof Object.getOwnPropertySymbols &&
                                    (o = o.concat(
                                        Object.getOwnPropertySymbols(e).filter(function (n) {
                                            return Object.getOwnPropertyDescriptor(e, n).enumerable;
                                        }),
                                    )),
                                    o.forEach(function (t) {
                                        var o;
                                        (o = e[t]),
                                            t in n
                                                ? Object.defineProperty(n, t, {
                                                      value: o,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0,
                                                  })
                                                : (n[t] = o);
                                    });
                            }
                            return n;
                        })({ buttonIconPosition: "end" }, n),
                        t,
                    ),
                ),
                (0, o.jsx)(a.Text, {
                    variant: "text-xs/medium",
                    color: "text-muted",
                    className: f.learnMore,
                    children: _.intl.format(_.t["L+FgkZ"], {
                        handleOnHelpUrlHook: () => {
                            c.Z.openUrl(s.Z.getArticleURL(x.BhN.TIGGER_PAWTECT_LEARN_MORE)),
                                (0, d.x3)(j, d.d_.RETRY, d.sU.LEARN_MORE);
                        },
                    }),
                }),
            ],
        }),
    });
};
