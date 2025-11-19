n.d(e, { default: () => b });
var i = n(54381),
    r = n(473749),
    o = n(772848),
    l = n(793030),
    s = n(481060),
    a = n(138201),
    c = n(63063),
    u = n(168107),
    d = n(480916),
    p = n(81643),
    f = n(981631),
    x = n(800530),
    g = n(388032),
    E = n(396723),
    R = n(736056);
let b = function (t) {
    let { transitionState: e, entryPoint: n, onClose: b } = t,
        { loading: m, initiateAgeVerification: O } = (0, p.WD)({
            onComplete: b,
            entryPoint: d.cU.RETRY_MODAL,
            isRetry: !0,
        }),
        _ = r.useMemo(() => (0, o.Z)(), []);
    r.useEffect(() => {
        (0, d.lA)(_, d.d_.RETRY, n);
    }, [_, n]);
    let T = r.useMemo(
        () => [
            {
                title: g.intl.string(g.t.FYkioq),
                description: g.intl.string(g.t.xMfbRz),
                buttonText: g.intl.string(g.t.RtOE1v),
                buttonLoading: m,
                onButtonPress: () => {
                    O(), (0, d.x3)(_, d.d_.RETRY, d.sU.GET_STARTED);
                },
            },
            {
                title: g.intl.string(g.t["LZO+Hd"]),
                description: g.intl.string(g.t.N2mHaK),
                buttonText: g.intl.string(g.t["LZO+Hd"]),
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
            src: R.Z,
            type: "image",
        },
        title: g.intl.string(g.t["5l3R/m"]),
        subtitle: g.intl.string(g.t.O7SO0D),
        children: (0, i.jsxs)(s.Kqy, {
            direction: "vertical",
            gap: 16,
            children: [
                (0, i.jsx)(s.Wn, {
                    messageType: s.QYI.INFO,
                    className: E.infoBox,
                    textColor: "text-feedback-info",
                    textVariant: "text-sm/medium",
                    children: g.intl.string(g.t.El4aXl),
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
                    children: g.intl.format(g.t["L+FgkZ"], {
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
