i.d(e, { default: () => b }), i(321073);
var n = i(627968),
    r = i(64700),
    s = i(835245),
    l = i(772707),
    o = i(331322),
    a = i(512950),
    d = i(834730),
    c = i(632738),
    u = i(975571),
    E = i(139716),
    p = i(847599),
    R = i(36149),
    g = i(737567),
    m = i(652215),
    _ = i(239093),
    x = i(375708),
    A = i(280269),
    T = i(700129);
let b = function (t) {
    let { transitionState: e, entryPoint: i, onClose: b } = t,
        { loading: h, initiateAgeVerification: L } = (0, R.nn)({ onComplete: b, entryPoint: p.q1.RETRY_MODAL }),
        k = r.useMemo(() => (0, s.A)(), []),
        U = (0, g.I)("age_verification_retry_modal"),
        f = x.intl.string(x.t.JSdbBe),
        M = x.intl.string(x.t.JNK1ue),
        N = x.intl.string(x.t.mFvt9M);
    r.useEffect(() => {
        (0, p.Bs)(k, p.WU.RETRY, i);
    }, [k, i]);
    let S = r.useMemo(() => {
        let t = [
            {
                title: x.intl.string(x.t.FYkioq),
                description: x.intl.string(x.t.xMfbRz),
                buttonText: N,
                buttonLoading: h,
                onButtonPress: () => {
                    L(), (0, p.St)(k, p.WU.RETRY, p._7.GET_STARTED);
                },
            },
        ];
        return (
            U ||
                t.push({
                    title: x.intl.string(x.t["LZO+Hd"]),
                    description: x.intl.string(x.t.N2mHaK),
                    buttonText: x.intl.string(x.t["LZO+Hd"]),
                    buttonLoading: h,
                    onButtonPress: () => {
                        E.A.openUrl(_.d$.APPEALS_LINK), (0, p.St)(k, p.WU.RETRY, p._7.MANUAL_REVIEW_REQUEST);
                    },
                }),
            t
        );
    }, [L, k, h, U, N]);
    return (0, n.jsx)(l.k, {
        transitionState: e,
        onClose: b,
        gradientColor: "blue",
        graphic: { src: T.A, type: "image" },
        title: f,
        subtitle: M,
        children: (0, n.jsxs)(o.B, {
            direction: "vertical",
            gap: 16,
            children: [
                (0, n.jsx)(a.p, {
                    messageType: a.Y.INFO,
                    className: A.e,
                    textColor: "text-feedback-info",
                    textVariant: "text-sm/medium",
                    children: x.intl.string(x.t.El4aXl),
                }),
                S.map((t, e) => (0, n.jsx)(c.PQ, { variant: "clickable", ...t }, e)),
                (0, n.jsx)(d.E, {
                    variant: "text-xs/medium",
                    color: "text-muted",
                    className: A.Z,
                    children: x.intl.format(x.t["L+FgkZ"], {
                        handleOnHelpUrlHook: () => {
                            E.A.openUrl(u.A.getArticleURL(m.MVz.TIGGER_PAWTECT_LEARN_MORE)),
                                (0, p.St)(k, p.WU.RETRY, p._7.LEARN_MORE);
                        },
                    }),
                }),
            ],
        }),
    });
};
