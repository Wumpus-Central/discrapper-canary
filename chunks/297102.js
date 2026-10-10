i.d(e, { default: () => x });
var n = i(477900),
    s = i(582128),
    l = i(132500),
    r = i(772707),
    o = i(331322),
    a = i(683071),
    c = i(834730),
    u = i(632738),
    d = i(975571),
    p = i(379257),
    R = i(306537),
    E = i(750481),
    g = i(652215),
    m = i(660183),
    T = i(227746),
    h = i(700129);
let x = function (t) {
    let { transitionState: e, entryPoint: i, onClose: x } = t,
        { loading: A, initiateAgeVerification: _ } = (0, E.n)({ onComplete: x, entryPoint: R.q1.RETRY_MODAL }),
        b = s.useMemo(() => (0, l.A)(), []),
        k = m.intl.string(m.t.JSdbBe),
        M = m.intl.string(m.t.JNK1ue),
        f = m.intl.string(m.t.mFvt9M);
    s.useEffect(() => {
        (0, R.Bs)(b, R.WU.RETRY, i);
    }, [b, i]);
    let C = s.useMemo(
        () => [
            {
                title: m.intl.string(m.t.FYkioq),
                description: m.intl.string(m.t.xMfbRz),
                buttonText: f,
                buttonLoading: A,
                onButtonPress: () => {
                    (_(), (0, R.St)(b, R.WU.RETRY, R._7.GET_STARTED));
                },
            },
        ],
        [_, b, A, f],
    );
    return (0, n.jsx)(r.k, {
        transitionState: e,
        onClose: x,
        gradientColor: "blue",
        graphic: { src: h.A, type: "image" },
        title: k,
        subtitle: M,
        children: (0, n.jsxs)(o.B, {
            direction: "vertical",
            gap: 16,
            children: [
                (0, n.jsx)(a.w, { type: "info", message: m.intl.string(m.t.El4aXl), role: "static" }),
                C.map((t, e) => (0, n.jsx)(u.PQ, { variant: "clickable", ...t }, e)),
                (0, n.jsx)(c.E, {
                    variant: "text-xs/medium",
                    color: "text-muted",
                    className: T.Z,
                    children: m.intl.format(m.t["L+FgkZ"], {
                        handleOnHelpUrlHook: () => {
                            (p.A.openUrl(d.A.getArticleURL(g.MVz.TIGGER_PAWTECT_LEARN_MORE)),
                                (0, R.St)(b, R.WU.RETRY, R._7.LEARN_MORE));
                        },
                    }),
                }),
            ],
        }),
    });
};
