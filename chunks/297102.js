i.d(e, { default: () => T }), i(321073);
var n = i(627968),
    s = i(64700),
    r = i(835245),
    l = i(158954),
    o = i(397927),
    a = i(632738),
    d = i(975571),
    u = i(935649),
    c = i(847599),
    p = i(36149),
    g = i(737567),
    m = i(652215),
    E = i(239093),
    R = i(985018),
    _ = i(508926),
    x = i(700129);
let T = function (t) {
    let { transitionState: e, entryPoint: i, onClose: T } = t,
        { loading: f, initiateAgeVerification: A } = (0, p.nn)({
            onComplete: T,
            entryPoint: c.q1.RETRY_MODAL,
            isRetry: !0,
        }),
        h = s.useMemo(() => (0, r.A)(), []),
        b = (0, g.I)("age_verification_retry_modal"),
        L = R.intl.string(R.t.JSdbBe),
        k = R.intl.string(R.t.JNK1ue),
        M = R.intl.string(R.t.mFvt9M);
    s.useEffect(() => {
        (0, c.Bs)(h, c.WU.RETRY, i);
    }, [h, i]);
    let C = s.useMemo(() => {
        let t = [
            {
                title: R.intl.string(R.t.FYkioq),
                description: R.intl.string(R.t.xMfbRz),
                buttonText: M,
                buttonLoading: f,
                onButtonPress: () => {
                    A(), (0, c.St)(h, c.WU.RETRY, c._7.GET_STARTED);
                },
            },
        ];
        return (
            b ||
                t.push({
                    title: R.intl.string(R.t["LZO+Hd"]),
                    description: R.intl.string(R.t.N2mHaK),
                    buttonText: R.intl.string(R.t["LZO+Hd"]),
                    buttonLoading: f,
                    onButtonPress: () => {
                        u.A.openUrl(E.d$.APPEALS_LINK), (0, c.St)(h, c.WU.RETRY, c._7.MANUAL_REVIEW_REQUEST);
                    },
                }),
            t
        );
    }, [A, h, f, b, M]);
    return (0, n.jsx)(l.ExpressiveModal, {
        transitionState: e,
        onClose: T,
        gradientColor: "blue",
        graphic: { src: x.A, type: "image" },
        title: L,
        subtitle: k,
        children: (0, n.jsxs)(o.BJc, {
            direction: "vertical",
            gap: 16,
            children: [
                (0, n.jsx)(o.po8, {
                    messageType: o.YCn.INFO,
                    className: _.e,
                    textColor: "text-feedback-info",
                    textVariant: "text-sm/medium",
                    children: R.intl.string(R.t.El4aXl),
                }),
                C.map((t, e) => (0, n.jsx)(a.PQ, { variant: "clickable", ...t }, e)),
                (0, n.jsx)(o.Text, {
                    variant: "text-xs/medium",
                    color: "text-muted",
                    className: _.Z,
                    children: R.intl.format(R.t["L+FgkZ"], {
                        handleOnHelpUrlHook: () => {
                            u.A.openUrl(d.A.getArticleURL(m.MVz.TIGGER_PAWTECT_LEARN_MORE)),
                                (0, c.St)(h, c.WU.RETRY, c._7.LEARN_MORE);
                        },
                    }),
                }),
            ],
        }),
    });
};
