e.d(n, { default: () => b });
var r = e(255367),
    o = e(73800),
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
let b = function (t) {
    let { transitionState: n, entryPoint: e, onClose: b } = t,
        { loading: h, initiateAgeVerification: p } = (0, u.WD)(b, !0),
        j = o.useMemo(() => (0, i.Z)(), []);
    o.useEffect(() => {
        (0, d.lA)(j, d.d_.RETRY, e);
    }, [j, e]);
    let R = o.useMemo(
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
    return (0, r.jsx)(a.Y0X, {
        transitionState: n,
        className: f.root,
        parentComponent: "AgeVerificationRetryModal",
        children: (0, r.jsxs)(a.hzk, {
            className: f.content,
            children: [
                (0, r.jsxs)("div", {
                    className: f.headersContainer,
                    children: [
                        (0, r.jsx)(a.X6q, {
                            variant: "heading-xl/bold",
                            children: _.intl.string(_.t["5l3R/v"]),
                        }),
                        (0, r.jsx)(a.X6q, {
                            variant: "heading-md/medium",
                            color: "text-default",
                            children: _.intl.string(_.t.O7SO0N),
                        }),
                        (0, r.jsx)(a.olH, {
                            className: f.modalClose,
                            onClick: b,
                        }),
                    ],
                }),
                R.map((t, n) =>
                    (0, r.jsx)(
                        l.JZ,
                        (function (t) {
                            for (var n = 1; n < arguments.length; n++) {
                                var e = null != arguments[n] ? arguments[n] : {},
                                    r = Object.keys(e);
                                "function" == typeof Object.getOwnPropertySymbols &&
                                    (r = r.concat(
                                        Object.getOwnPropertySymbols(e).filter(function (t) {
                                            return Object.getOwnPropertyDescriptor(e, t).enumerable;
                                        }),
                                    )),
                                    r.forEach(function (n) {
                                        var r;
                                        (r = e[n]),
                                            n in t
                                                ? Object.defineProperty(t, n, {
                                                      value: r,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0,
                                                  })
                                                : (t[n] = r);
                                    });
                            }
                            return t;
                        })({ buttonIconPosition: "end" }, t),
                        n,
                    ),
                ),
                (0, r.jsx)(a.Text, {
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
