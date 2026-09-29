i.d(e, { default: () => h });
var n = i(477900),
    s = i(582128),
    l = i(132500),
    r = i(772707),
    a = i(331322),
    o = i(512950),
    c = i(834730),
    d = i(632738),
    u = i(975571),
    p = i(379257),
    m = i(306537),
    R = i(36149),
    E = i(652215),
    g = i(375708),
    x = i(227746),
    T = i(700129);
let h = function (t) {
    let { transitionState: e, entryPoint: i, onClose: h } = t,
        { loading: b, initiateAgeVerification: k } = (0, R.nn)({ onComplete: h, entryPoint: m.q1.RETRY_MODAL }),
        A = s.useMemo(() => (0, l.A)(), []),
        _ = g.intl.string(g.t.JSdbBe),
        f = g.intl.string(g.t.JNK1ue),
        M = g.intl.string(g.t.mFvt9M);
    s.useEffect(() => {
        (0, m.Bs)(A, m.WU.RETRY, i);
    }, [A, i]);
    let C = s.useMemo(
        () => [
            {
                title: g.intl.string(g.t.FYkioq),
                description: g.intl.string(g.t.xMfbRz),
                buttonText: M,
                buttonLoading: b,
                onButtonPress: () => {
                    (k(), (0, m.St)(A, m.WU.RETRY, m._7.GET_STARTED));
                },
            },
        ],
        [k, A, b, M],
    );
    return (0, n.jsx)(r.k, {
        transitionState: e,
        onClose: h,
        gradientColor: "blue",
        graphic: { src: T.A, type: "image" },
        title: _,
        subtitle: f,
        children: (0, n.jsxs)(a.B, {
            direction: "vertical",
            gap: 16,
            children: [
                (0, n.jsx)(o.p, {
                    messageType: o.Y.INFO,
                    className: x.e,
                    textColor: "text-feedback-info",
                    textVariant: "text-sm/medium",
                    children: g.intl.string(g.t.El4aXl),
                }),
                C.map((t, e) => (0, n.jsx)(d.PQ, { variant: "clickable", ...t }, e)),
                (0, n.jsx)(c.E, {
                    variant: "text-xs/medium",
                    color: "text-muted",
                    className: x.Z,
                    children: g.intl.format(g.t["L+FgkZ"], {
                        handleOnHelpUrlHook: () => {
                            (p.A.openUrl(u.A.getArticleURL(E.MVz.TIGGER_PAWTECT_LEARN_MORE)),
                                (0, m.St)(A, m.WU.RETRY, m._7.LEARN_MORE));
                        },
                    }),
                }),
            ],
        }),
    });
};
