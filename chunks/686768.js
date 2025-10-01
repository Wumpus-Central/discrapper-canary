n.d(e, { default: () => b });
var i = n(951288),
    r = n(647438),
    o = n(772848),
    l = n(667202),
    s = n(481060),
    a = n(138201),
    c = n(63063),
    u = n(168107),
    d = n(480916),
    p = n(81643),
    f = n(981631),
    x = n(800530),
    R = n(388032),
    g = n(740076),
    E = n(736056);
let b = function (t) {
    let { transitionState: e, entryPoint: n, onClose: b } = t,
        { loading: m, initiateAgeVerification: O } = (0, p.WD)(b, !0),
        _ = r.useMemo(() => (0, o.Z)(), []);
    r.useEffect(() => {
        (0, d.lA)(_, d.d_.RETRY, n);
    }, [_, n]);
    let T = r.useMemo(
        () => [
            {
                title: R.intl.string(R.t.FYkioq),
                description: R.intl.string(R.t.xMfbR0),
                buttonText: R.intl.string(R.t.RtOE1t),
                buttonLoading: m,
                onButtonPress: () => {
                    O(d.cU.RETRY_MODAL), (0, d.x3)(_, d.d_.RETRY, d.sU.GET_STARTED);
                },
            },
            {
                title: R.intl.string(R.t["LZO+HR"]),
                description: R.intl.string(R.t.N2mHaG),
                buttonText: R.intl.string(R.t["LZO+HR"]),
                buttonLoading: m,
                onButtonPress: () => {
                    u.Z.openUrl(x.sQ.APPEALS_LINK), (0, d.x3)(_, d.d_.RETRY, d.sU.MANUAL_REVIEW_REQUEST);
                },
            },
        ],
        [O, _, m],
    );
    return (0, i.jsx)(l.ExpressiveModal, {
        transitionState: e,
        onClose: b,
        gradientColor: "blue",
        graphic: {
            src: E.Z,
            type: "image",
        },
        title: R.intl.string(R.t["5l3R/v"]),
        subtitle: R.intl.string(R.t.O7SO0N),
        children: (0, i.jsxs)(s.Kqy, {
            direction: "vertical",
            gap: 16,
            children: [
                (0, i.jsx)(s.Wn, {
                    messageType: s.QYI.INFO,
                    className: g.infoBox,
                    textColor: "text-feedback-info",
                    textVariant: "text-sm/medium",
                    children: R.intl.string(R.t.El4aXl),
                }),
                T.map((t, e) =>
                    (0, i.jsx)(
                        a.JZ,
                        (function (t) {
                            for (var e = 1; e < arguments.length; e++) {
                                var n = null != arguments[e] ? arguments[e] : {},
                                    i = Object.keys(n);
                                "function" == typeof Object.getOwnPropertySymbols &&
                                    (i = i.concat(
                                        Object.getOwnPropertySymbols(n).filter(function (t) {
                                            return Object.getOwnPropertyDescriptor(n, t).enumerable;
                                        }),
                                    )),
                                    i.forEach(function (e) {
                                        var i;
                                        (i = n[e]),
                                            e in t
                                                ? Object.defineProperty(t, e, {
                                                      value: i,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0,
                                                  })
                                                : (t[e] = i);
                                    });
                            }
                            return t;
                        })({ variant: "clickable" }, t),
                        e,
                    ),
                ),
                (0, i.jsx)(s.Text, {
                    variant: "text-xs/medium",
                    color: "text-muted",
                    children: R.intl.format(R.t["L+FgkZ"], {
                        handleOnHelpUrlHook: () => {
                            u.Z.openUrl(c.Z.getArticleURL(f.BhN.TIGGER_PAWTECT_LEARN_MORE)),
                                (0, d.x3)(_, d.d_.RETRY, d.sU.LEARN_MORE);
                        },
                    }),
                }),
            ],
        }),
    });
};
