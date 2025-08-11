n.d(e, { default: () => R });
var r = n(255367),
    o = n(73800),
    i = n(772848),
    l = n(481060),
    s = n(138201),
    a = n(63063),
    c = n(168107),
    d = n(480916),
    u = n(81643),
    f = n(981631),
    m = n(800530),
    _ = n(388032),
    p = n(579474);
let R = function (t) {
    let { transitionState: e, entryPoint: n, onClose: R } = t,
        { loading: b, initiateAgeVerification: h } = (0, u.WD)(R, !0),
        x = o.useMemo(() => (0, i.Z)(), []);
    o.useEffect(() => {
        (0, d.lA)(x, d.d_.RETRY, n);
    }, [x, n]);
    let E = o.useMemo(
        () => [
            {
                title: _.intl.string(_.t.FYkioq),
                description: _.intl.string(_.t.xMfbR0),
                buttonText: _.intl.string(_.t.RtOE1t),
                buttonVariant: "primary",
                buttonIcon: l.Gr1,
                buttonLoading: b,
                onButtonPress: () => {
                    h(), (0, d.x3)(x, d.d_.RETRY, d.sU.GET_STARTED);
                },
            },
            {
                title: _.intl.string(_.t["LZO+HR"]),
                description: _.intl.string(_.t.N2mHaG),
                buttonText: _.intl.string(_.t["LZO+HR"]),
                buttonIcon: l.Gr1,
                onButtonPress: () => {
                    c.Z.openUrl(m.sQ.APPEALS_LINK), (0, d.x3)(x, d.d_.RETRY, d.sU.MANUAL_REVIEW_REQUEST);
                },
            },
        ],
        [h, x, b],
    );
    return (0, r.jsx)(l.Y0X, {
        transitionState: e,
        className: p.root,
        parentComponent: "AgeVerificationRetryModal",
        children: (0, r.jsxs)(l.hzk, {
            className: p.content,
            children: [
                (0, r.jsxs)("div", {
                    className: p.headersContainer,
                    children: [
                        (0, r.jsx)(l.X6q, {
                            variant: "heading-xl/bold",
                            children: _.intl.string(_.t["5l3R/v"]),
                        }),
                        (0, r.jsx)(l.X6q, {
                            variant: "heading-md/medium",
                            color: "text-default",
                            children: _.intl.string(_.t.O7SO0N),
                        }),
                        (0, r.jsx)(l.olH, {
                            className: p.modalClose,
                            onClick: R,
                        }),
                    ],
                }),
                E.map((t, e) =>
                    (0, r.jsx)(
                        s.JZ,
                        (function (t) {
                            for (var e = 1; e < arguments.length; e++) {
                                var n = null != arguments[e] ? arguments[e] : {},
                                    r = Object.keys(n);
                                "function" == typeof Object.getOwnPropertySymbols &&
                                    (r = r.concat(
                                        Object.getOwnPropertySymbols(n).filter(function (t) {
                                            return Object.getOwnPropertyDescriptor(n, t).enumerable;
                                        }),
                                    )),
                                    r.forEach(function (e) {
                                        var r;
                                        (r = n[e]),
                                            e in t
                                                ? Object.defineProperty(t, e, {
                                                      value: r,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0,
                                                  })
                                                : (t[e] = r);
                                    });
                            }
                            return t;
                        })({ buttonIconPosition: "end" }, t),
                        e,
                    ),
                ),
                (0, r.jsx)(l.Text, {
                    variant: "text-xs/medium",
                    color: "text-muted",
                    className: p.learnMore,
                    children: _.intl.format(_.t["L+FgkZ"], {
                        handleOnHelpUrlHook: () => {
                            c.Z.openUrl(a.Z.getArticleURL(f.BhN.TIGGER_PAWTECT_LEARN_MORE)),
                                (0, d.x3)(x, d.d_.RETRY, d.sU.LEARN_MORE);
                        },
                    }),
                }),
            ],
        }),
    });
};
