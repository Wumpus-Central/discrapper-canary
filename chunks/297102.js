n.d(e, { default: () => v }), n(321073);
var i = n(627968),
    l = n(64700),
    s = n(835245),
    r = n(772707),
    a = n(331322),
    o = n(512950),
    d = n(834730),
    c = n(632738),
    u = n(975571),
    x = n(935649),
    m = n(847599),
    b = n(36149),
    _ = n(737567),
    f = n(652215),
    h = n(239093),
    g = n(985018),
    j = n(280269),
    p = n(700129);
let v = function (t) {
    let { transitionState: e, entryPoint: n, onClose: v } = t,
        { loading: E, initiateAgeVerification: k } = (0, b.nn)({
            onComplete: v,
            entryPoint: m.q1.RETRY_MODAL,
            isRetry: !0,
        }),
        N = l.useMemo(() => (0, s.A)(), []),
        R = (0, _.I)("age_verification_retry_modal"),
        A = g.intl.string(g.t.JSdbBe),
        C = g.intl.string(g.t.JNK1ue),
        T = g.intl.string(g.t.mFvt9M);
    l.useEffect(() => {
        (0, m.Bs)(N, m.WU.RETRY, n);
    }, [N, n]);
    let M = l.useMemo(() => {
        let t = [
            {
                title: g.intl.string(g.t.FYkioq),
                description: g.intl.string(g.t.xMfbRz),
                buttonText: T,
                buttonLoading: E,
                onButtonPress: () => {
                    k(), (0, m.St)(N, m.WU.RETRY, m._7.GET_STARTED);
                },
            },
        ];
        return (
            R ||
                t.push({
                    title: g.intl.string(g.t["LZO+Hd"]),
                    description: g.intl.string(g.t.N2mHaK),
                    buttonText: g.intl.string(g.t["LZO+Hd"]),
                    buttonLoading: E,
                    onButtonPress: () => {
                        x.A.openUrl(h.d$.APPEALS_LINK), (0, m.St)(N, m.WU.RETRY, m._7.MANUAL_REVIEW_REQUEST);
                    },
                }),
            t
        );
    }, [k, N, E, R, T]);
    return (0, i.jsx)(r.k, {
        transitionState: e,
        onClose: v,
        gradientColor: "blue",
        graphic: { src: p.A, type: "image" },
        title: A,
        subtitle: C,
        children: (0, i.jsxs)(a.B, {
            direction: "vertical",
            gap: 16,
            children: [
                (0, i.jsx)(o.p, {
                    messageType: o.Y.INFO,
                    className: j.e,
                    textColor: "text-feedback-info",
                    textVariant: "text-sm/medium",
                    children: g.intl.string(g.t.El4aXl),
                }),
                M.map((t, e) => (0, i.jsx)(c.PQ, { variant: "clickable", ...t }, e)),
                (0, i.jsx)(d.E, {
                    variant: "text-xs/medium",
                    color: "text-muted",
                    className: j.Z,
                    children: g.intl.format(g.t["L+FgkZ"], {
                        handleOnHelpUrlHook: () => {
                            x.A.openUrl(u.A.getArticleURL(f.MVz.TIGGER_PAWTECT_LEARN_MORE)),
                                (0, m.St)(N, m.WU.RETRY, m._7.LEARN_MORE);
                        },
                    }),
                }),
            ],
        }),
    });
};
