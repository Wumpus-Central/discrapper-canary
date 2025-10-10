n.d(e, { default: () => b });
var i = n(951288),
    r = n(647438),
    o = n(772848),
    l = n(793030),
    s = n(481060),
    a = n(138201),
    c = n(63063),
    u = n(168107),
    d = n(480916),
    p = n(81643),
    R = n(981631),
    f = n(800530),
    x = n(388032),
    g = n(740076),
    E = n(736056);
let b = function (t) {
    let { transitionState: e, entryPoint: n, onClose: b } = t,
        { loading: m, initiateAgeVerification: O } = (0, p.WD)({
            onComplete: b,
            isRetry: !0,
        }),
        _ = r.useMemo(() => (0, o.Z)(), []);
    r.useEffect(() => {
        (0, d.lA)(_, d.d_.RETRY, n);
    }, [_, n]);
    let T = r.useMemo(
        () => [
            {
                title: x.intl.string(x.t.FYkioq),
                description: x.intl.string(x.t.xMfbR0),
                buttonText: x.intl.string(x.t.RtOE1t),
                buttonLoading: m,
                onButtonPress: () => {
                    O(d.cU.RETRY_MODAL), (0, d.x3)(_, d.d_.RETRY, d.sU.GET_STARTED);
                },
            },
            {
                title: x.intl.string(x.t["LZO+HR"]),
                description: x.intl.string(x.t.N2mHaG),
                buttonText: x.intl.string(x.t["LZO+HR"]),
                buttonLoading: m,
                onButtonPress: () => {
                    u.Z.openUrl(f.sQ.APPEALS_LINK), (0, d.x3)(_, d.d_.RETRY, d.sU.MANUAL_REVIEW_REQUEST);
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
        title: x.intl.string(x.t["5l3R/v"]),
        subtitle: x.intl.string(x.t.O7SO0N),
        children: (0, i.jsxs)(s.Kqy, {
            direction: "vertical",
            gap: 16,
            children: [
                (0, i.jsx)(s.Wn, {
                    messageType: s.QYI.INFO,
                    className: g.infoBox,
                    textColor: "text-feedback-info",
                    textVariant: "text-sm/medium",
                    children: x.intl.string(x.t.El4aXl),
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
                    children: x.intl.format(x.t["L+FgkZ"], {
                        handleOnHelpUrlHook: () => {
                            u.Z.openUrl(c.Z.getArticleURL(R.BhN.TIGGER_PAWTECT_LEARN_MORE)),
                                (0, d.x3)(_, d.d_.RETRY, d.sU.LEARN_MORE);
                        },
                    }),
                }),
            ],
        }),
    });
};
