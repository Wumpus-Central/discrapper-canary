n.d(e, { default: () => h });
var i = n(627968),
    s = n(64700),
    o = n(835245),
    a = n(189213),
    l = n(509434),
    r = n(834730),
    c = n(95035),
    A = n(632738),
    d = n(975571),
    R = n(139716),
    u = n(847599),
    _ = n(36149),
    p = n(737567),
    E = n(40449),
    m = n(652215),
    x = n(239093),
    I = n(375708),
    M = n(481446);
let h = function (t) {
    let { transitionState: e, entryPoint: n, onClose: h } = t,
        { loading: P, initiateAgeVerification: S } = (0, _.nn)({ onComplete: h, entryPoint: n }),
        T = s.useMemo(() => (0, o.A)(), []),
        U = (0, p.I)("age_verification_get_started_modal");
    return (
        s.useEffect(() => {
            (0, u.Bs)(T, u.WU.PRIMARY, n);
        }, [T, n]),
        (0, i.jsxs)(a.Modal, {
            transitionState: e,
            onClose: h,
            title: (0, _.ST)(n),
            subtitle: (0, _.mK)(n),
            actions: [
                {
                    text: I.intl.string(I.t.SJMnkX),
                    loading: P,
                    icon: l.I,
                    iconPosition: "end",
                    onClick: async () => {
                        (0, u.St)(T, u.WU.PRIMARY, u._7.GET_STARTED), await S();
                    },
                },
            ],
            actionBarInput: (0, i.jsxs)(c.A, {
                onClick: () => {
                    R.A.openUrl(d.A.getArticleURL(m.MVz.TIGGER_PAWTECT_LEARN_MORE)),
                        (0, u.St)(T, u.WU.PRIMARY, u._7.LEARN_MORE);
                },
                className: M.A,
                children: [I.intl.string(I.t["aA6q/z"]), (0, i.jsx)(l.I, { size: "xs", color: "currentColor" })],
            }),
            children: [
                (0, E.f6)(T).map((t, e) => {
                    let { title: n, description: s } = t;
                    return (0, i.jsx)(A.PQ, { title: n, description: s, listType: "numbered", index: e }, e);
                }),
                !U &&
                    (0, i.jsx)(r.E, {
                        variant: "text-xs/medium",
                        color: "text-muted",
                        className: M.B,
                        children: I.intl.format(I.t.pJAxgQ, {
                            handleOnRequestHook: () => {
                                R.A.openUrl(x.d$.APPEALS_LINK), (0, u.St)(T, u.WU.PRIMARY, u._7.MANUAL_REVIEW_REQUEST);
                            },
                        }),
                    }),
            ],
        })
    );
};
