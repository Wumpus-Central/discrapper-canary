i.d(e, { default: () => A }), i(321073);
var n = i(627968),
    r = i(64700),
    s = i(835245),
    l = i(158954),
    o = i(397927),
    a = i(632738),
    d = i(975571),
    u = i(935649),
    c = i(847599),
    g = i(870383),
    _ = i(81091),
    m = i(36149),
    R = i(737567),
    p = i(652215),
    E = i(239093),
    x = i(985018),
    T = i(935568),
    f = i(700129);
let A = function (t) {
    let { transitionState: e, entryPoint: i, onClose: A } = t,
        { loading: h, initiateAgeVerification: b } = (0, m.nn)({
            onComplete: A,
            entryPoint: c.q1.RETRY_MODAL,
            isRetry: !0,
        }),
        L = r.useMemo(() => (0, s.A)(), []),
        k = (0, R.I)("age_verification_retry_modal"),
        M = (0, _.t)("age_verification_retry_modal"),
        v = (0, g.W)(x.intl.string(x.t["5l3R/m"]), x.intl.string(x.t.JSdbBe)),
        C = (0, g.W)(x.intl.string(x.t.O7SO0D), x.intl.string(x.t.JNK1ue)),
        O = (0, g.W)(x.intl.string(x.t.RtOE1v), x.intl.string(x.t.mFvt9M));
    r.useEffect(() => {
        (0, c.Bs)(L, c.WU.RETRY, i);
    }, [L, i]);
    let U = r.useMemo(() => {
        let t = [
            {
                title: x.intl.string(x.t.FYkioq),
                description: M ? null : x.intl.string(x.t.xMfbRz),
                buttonText: O,
                buttonLoading: h,
                onButtonPress: () => {
                    b(), (0, c.St)(L, c.WU.RETRY, c._7.GET_STARTED);
                },
            },
        ];
        return (
            k ||
                t.push({
                    title: x.intl.string(x.t["LZO+Hd"]),
                    description: x.intl.string(x.t.N2mHaK),
                    buttonText: x.intl.string(x.t["LZO+Hd"]),
                    buttonLoading: h,
                    onButtonPress: () => {
                        u.A.openUrl(E.d$.APPEALS_LINK), (0, c.St)(L, c.WU.RETRY, c._7.MANUAL_REVIEW_REQUEST);
                    },
                }),
            t
        );
    }, [b, L, h, k, M, O]);
    return (0, n.jsx)(l.ExpressiveModal, {
        transitionState: e,
        onClose: A,
        gradientColor: "blue",
        graphic: { src: f.A, type: "image" },
        title: v,
        subtitle: C,
        children: (0, n.jsxs)(o.BJc, {
            direction: "vertical",
            gap: 16,
            children: [
                (0, n.jsx)(o.po8, {
                    messageType: o.YCn.INFO,
                    className: T.e,
                    textColor: "text-feedback-info",
                    textVariant: "text-sm/medium",
                    children: x.intl.string(x.t.El4aXl),
                }),
                U.map((t, e) => (0, n.jsx)(a.PQ, { variant: "clickable", ...t }, e)),
                (0, n.jsx)(o.Text, {
                    variant: "text-xs/medium",
                    color: "text-muted",
                    className: T.Z,
                    children: x.intl.format(x.t["L+FgkZ"], {
                        handleOnHelpUrlHook: () => {
                            u.A.openUrl(d.A.getArticleURL(p.MVz.TIGGER_PAWTECT_LEARN_MORE)),
                                (0, c.St)(L, c.WU.RETRY, c._7.LEARN_MORE);
                        },
                    }),
                }),
            ],
        }),
    });
};
