i.d(e, { default: () => f }), i(321073);
var n = i(627968),
    s = i(64700),
    r = i(835245),
    l = i(158954),
    o = i(397927),
    a = i(632738),
    d = i(975571),
    u = i(935649),
    c = i(847599),
    g = i(870383),
    R = i(36149),
    m = i(737567),
    p = i(652215),
    E = i(239093),
    _ = i(985018),
    x = i(935568),
    T = i(700129);
let f = function (t) {
    let { transitionState: e, entryPoint: i, onClose: f } = t,
        { loading: A, initiateAgeVerification: h } = (0, R.nn)({
            onComplete: f,
            entryPoint: c.q1.RETRY_MODAL,
            isRetry: !0,
        }),
        b = s.useMemo(() => (0, r.A)(), []),
        L = (0, m.I)("age_verification_retry_modal"),
        k = (0, g.W)(_.intl.string(_.t["5l3R/m"]), _.intl.string(_.t.JSdbBe)),
        M = (0, g.W)(_.intl.string(_.t.O7SO0D), _.intl.string(_.t.JNK1ue)),
        C = (0, g.W)(_.intl.string(_.t.RtOE1v), _.intl.string(_.t.mFvt9M));
    s.useEffect(() => {
        (0, c.Bs)(b, c.WU.RETRY, i);
    }, [b, i]);
    let O = s.useMemo(() => {
        let t = [
            {
                title: _.intl.string(_.t.FYkioq),
                description: _.intl.string(_.t.xMfbRz),
                buttonText: C,
                buttonLoading: A,
                onButtonPress: () => {
                    h(), (0, c.St)(b, c.WU.RETRY, c._7.GET_STARTED);
                },
            },
        ];
        return (
            L ||
                t.push({
                    title: _.intl.string(_.t["LZO+Hd"]),
                    description: _.intl.string(_.t.N2mHaK),
                    buttonText: _.intl.string(_.t["LZO+Hd"]),
                    buttonLoading: A,
                    onButtonPress: () => {
                        u.A.openUrl(E.d$.APPEALS_LINK), (0, c.St)(b, c.WU.RETRY, c._7.MANUAL_REVIEW_REQUEST);
                    },
                }),
            t
        );
    }, [h, b, A, L, C]);
    return (0, n.jsx)(l.ExpressiveModal, {
        transitionState: e,
        onClose: f,
        gradientColor: "blue",
        graphic: { src: T.A, type: "image" },
        title: k,
        subtitle: M,
        children: (0, n.jsxs)(o.BJc, {
            direction: "vertical",
            gap: 16,
            children: [
                (0, n.jsx)(o.po8, {
                    messageType: o.YCn.INFO,
                    className: x.e,
                    textColor: "text-feedback-info",
                    textVariant: "text-sm/medium",
                    children: _.intl.string(_.t.El4aXl),
                }),
                O.map((t, e) => (0, n.jsx)(a.PQ, { variant: "clickable", ...t }, e)),
                (0, n.jsx)(o.Text, {
                    variant: "text-xs/medium",
                    color: "text-muted",
                    className: x.Z,
                    children: _.intl.format(_.t["L+FgkZ"], {
                        handleOnHelpUrlHook: () => {
                            u.A.openUrl(d.A.getArticleURL(p.MVz.TIGGER_PAWTECT_LEARN_MORE)),
                                (0, c.St)(b, c.WU.RETRY, c._7.LEARN_MORE);
                        },
                    }),
                }),
            ],
        }),
    });
};
