n.d(e, {
    default: () => x,
}),
    n(321073);
var i = n(627968),
    r = n(64700),
    l = n(835245),
    o = n(158954),
    a = n(397927),
    s = n(632738),
    c = n(975571),
    u = n(935649),
    d = n(847599),
    p = n(81091),
    g = n(36149),
    b = n(737567),
    f = n(652215),
    m = n(239093),
    E = n(985018),
    R = n(935568),
    _ = n(700129);
let x = function (t) {
    let { transitionState: e, entryPoint: n, onClose: x } = t,
        { loading: O, initiateAgeVerification: T } = (0, g.nn)({
            onComplete: x,
            entryPoint: d.q1.RETRY_MODAL,
            isRetry: !0,
        }),
        h = r.useMemo(() => (0, l.A)(), []),
        A = (0, b.I)("age_verification_retry_modal"),
        y = (0, p.t)("age_verification_retry_modal");
    r.useEffect(() => {
        (0, d.Bs)(h, d.WU.RETRY, n);
    }, [h, n]);
    let v = r.useMemo(() => {
        let t = [
            {
                title: E.intl.string(E.t.FYkioq),
                description: y ? null : E.intl.string(E.t.xMfbRz),
                buttonText: E.intl.string(E.t.RtOE1v),
                buttonLoading: O,
                onButtonPress: () => {
                    T(), (0, d.St)(h, d.WU.RETRY, d._7.GET_STARTED);
                },
            },
        ];
        return (
            A ||
                t.push({
                    title: E.intl.string(E.t["LZO+Hd"]),
                    description: E.intl.string(E.t.N2mHaK),
                    buttonText: E.intl.string(E.t["LZO+Hd"]),
                    buttonLoading: O,
                    onButtonPress: () => {
                        u.A.openUrl(m.d$.APPEALS_LINK), (0, d.St)(h, d.WU.RETRY, d._7.MANUAL_REVIEW_REQUEST);
                    },
                }),
            t
        );
    }, [T, h, O, A, y]);
    return (0, i.jsx)(o.ExpressiveModal, {
        transitionState: e,
        onClose: x,
        gradientColor: "blue",
        graphic: {
            src: _.A,
            type: "image",
        },
        title: E.intl.string(E.t["5l3R/m"]),
        subtitle: E.intl.string(E.t.O7SO0D),
        children: (0, i.jsxs)(a.BJc, {
            direction: "vertical",
            gap: 16,
            children: [
                (0, i.jsx)(a.po8, {
                    messageType: a.YCn.INFO,
                    className: R.e,
                    textColor: "text-feedback-info",
                    textVariant: "text-sm/medium",
                    children: E.intl.string(E.t.El4aXl),
                }),
                v.map((t, e) =>
                    (0, i.jsx)(
                        s.PQ,
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
                (0, i.jsx)(a.Text, {
                    variant: "text-xs/medium",
                    color: "text-muted",
                    className: R.Z,
                    children: E.intl.format(E.t["L+FgkZ"], {
                        handleOnHelpUrlHook: () => {
                            u.A.openUrl(c.A.getArticleURL(f.MVz.TIGGER_PAWTECT_LEARN_MORE)),
                                (0, d.St)(h, d.WU.RETRY, d._7.LEARN_MORE);
                        },
                    }),
                }),
            ],
        }),
    });
};
