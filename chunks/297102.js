n.d(e, {
    default: () => O,
}),
    n(321073);
var i = n(627968),
    r = n(64700),
    l = n(835245),
    o = n(158954),
    s = n(397927),
    a = n(632738),
    c = n(975571),
    u = n(935649),
    d = n(847599),
    g = n(870383),
    p = n(81091),
    b = n(36149),
    m = n(737567),
    f = n(652215),
    E = n(239093),
    R = n(985018),
    _ = n(935568),
    x = n(700129);
let O = function (t) {
    let { transitionState: e, entryPoint: n, onClose: O } = t,
        { loading: T, initiateAgeVerification: h } = (0, b.nn)({
            onComplete: O,
            entryPoint: d.q1.RETRY_MODAL,
            isRetry: !0,
        }),
        A = r.useMemo(() => (0, l.A)(), []),
        v = (0, m.I)("age_verification_retry_modal"),
        y = (0, p.t)("age_verification_retry_modal"),
        k = (0, g.W)(R.intl.string(R.t["5l3R/m"]), R.intl.string(R.t.JSdbBe)),
        L = (0, g.W)(R.intl.string(R.t.O7SO0D), R.intl.string(R.t.JNK1ue)),
        j = (0, g.W)(R.intl.string(R.t.RtOE1v), R.intl.string(R.t.mFvt9M));
    r.useEffect(() => {
        (0, d.Bs)(A, d.WU.RETRY, n);
    }, [A, n]);
    let P = r.useMemo(() => {
        let t = [
            {
                title: R.intl.string(R.t.FYkioq),
                description: y ? null : R.intl.string(R.t.xMfbRz),
                buttonText: j,
                buttonLoading: T,
                onButtonPress: () => {
                    h(), (0, d.St)(A, d.WU.RETRY, d._7.GET_STARTED);
                },
            },
        ];
        return (
            v ||
                t.push({
                    title: R.intl.string(R.t["LZO+Hd"]),
                    description: R.intl.string(R.t.N2mHaK),
                    buttonText: R.intl.string(R.t["LZO+Hd"]),
                    buttonLoading: T,
                    onButtonPress: () => {
                        u.A.openUrl(E.d$.APPEALS_LINK), (0, d.St)(A, d.WU.RETRY, d._7.MANUAL_REVIEW_REQUEST);
                    },
                }),
            t
        );
    }, [h, A, T, v, y, j]);
    return (0, i.jsx)(o.ExpressiveModal, {
        transitionState: e,
        onClose: O,
        gradientColor: "blue",
        graphic: {
            src: x.A,
            type: "image",
        },
        title: k,
        subtitle: L,
        children: (0, i.jsxs)(s.BJc, {
            direction: "vertical",
            gap: 16,
            children: [
                (0, i.jsx)(s.po8, {
                    messageType: s.YCn.INFO,
                    className: _.e,
                    textColor: "text-feedback-info",
                    textVariant: "text-sm/medium",
                    children: R.intl.string(R.t.El4aXl),
                }),
                P.map((t, e) =>
                    (0, i.jsx)(
                        a.PQ,
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
                        })(
                            {
                                variant: "clickable",
                            },
                            t,
                        ),
                        e,
                    ),
                ),
                (0, i.jsx)(s.Text, {
                    variant: "text-xs/medium",
                    color: "text-muted",
                    className: _.Z,
                    children: R.intl.format(R.t["L+FgkZ"], {
                        handleOnHelpUrlHook: () => {
                            u.A.openUrl(c.A.getArticleURL(f.MVz.TIGGER_PAWTECT_LEARN_MORE)),
                                (0, d.St)(A, d.WU.RETRY, d._7.LEARN_MORE);
                        },
                    }),
                }),
            ],
        }),
    });
};
