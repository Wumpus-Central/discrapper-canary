i.d(e, { default: () => h });
var n = i(477900),
    s = i(582128),
    l = i(132500),
    r = i(772707),
    o = i(331322),
    a = i(683071),
    c = i(834730),
    d = i(632738),
    u = i(975571),
    p = i(379257),
    R = i(306537),
    E = i(750481),
    g = i(652215),
    m = i(105292),
    A = i(227746),
    b = i(700129);
let h = function (t) {
    let { transitionState: e, entryPoint: i, onClose: h } = t,
        { loading: _, initiateAgeVerification: k } = (0, E.n)({ onComplete: h, entryPoint: R.q1.RETRY_MODAL }),
        x = s.useMemo(() => (0, l.A)(), []),
        T = m.intl.string(m.t.JSdbBe),
        M = m.intl.string(m.t.JNK1ue),
        f = m.intl.string(m.t.mFvt9M);
    s.useEffect(() => {
        (0, R.Bs)(x, R.WU.RETRY, i);
    }, [x, i]);
    let C = s.useMemo(
        () => [
            {
                title: m.intl.string(m.t.FYkioq),
                description: m.intl.string(m.t.xMfbRz),
                buttonText: f,
                buttonLoading: _,
                onButtonPress: () => {
                    (k(), (0, R.St)(x, R.WU.RETRY, R._7.GET_STARTED));
                },
            },
        ],
        [k, x, _, f],
    );
    return (0, n.jsx)(r.k, {
        transitionState: e,
        onClose: h,
        gradientColor: "blue",
        graphic: { src: b.A, type: "image" },
        title: T,
        subtitle: M,
        children: (0, n.jsxs)(o.B, {
            direction: "vertical",
            gap: 16,
            children: [
                (0, n.jsx)(a.w, { type: "info", message: m.intl.string(m.t.El4aXl), role: "none" }),
                C.map((t, e) => (0, n.jsx)(d.PQ, { variant: "clickable", ...t }, e)),
                (0, n.jsx)(c.E, {
                    variant: "body-xs/medium",
                    color: "text-muted",
                    className: A.Z,
                    children: m.intl.format(m.t["L+FgkZ"], {
                        handleOnHelpUrlHook: () => {
                            (p.A.openUrl(u.A.getArticleURL(g.MVz.AGE_VERIFICATION_LEARN_MORE)),
                                (0, R.St)(x, R.WU.RETRY, R._7.LEARN_MORE));
                        },
                    }),
                }),
            ],
        }),
    });
};
