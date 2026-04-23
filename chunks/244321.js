e.d(i, { default: () => g });
var n = e(627968),
    s = e(64700),
    l = e(189213),
    a = e(17928),
    r = e(331322),
    c = e(834730),
    A = e(139716),
    o = e(847599),
    _ = e(754302),
    d = e(632738),
    E = e(67521),
    p = e(308645),
    h = e(207913),
    u = e(239093),
    T = e(985018);
let P = [
        { title: T.intl.string(T.t["1+E7LP"]), description: T.intl.string(T.t["BXiat/"]) },
        { title: T.intl.string(T.t.iMQXtK), description: T.intl.string(T.t.oQ0vwu) },
        { title: T.intl.string(T.t["oY/z1Q"]), description: T.intl.string(T.t.wtj02W) },
    ],
    g = function (t) {
        let { onClose: i, transitionState: e, classificationId: g } = t,
            U = (0, a.bG)([h.A], () => h.A.getAgeVerificationWebviewUrl()),
            L = (0, a.bG)([h.A], () => h.A.getIsLoadingAgeVerification()),
            b = s.useCallback(() => {
                i(), E.A.close();
            }, [i]),
            x = s.useCallback(() => {
                E.A.success(), b(), E.A.start_verification_check();
            }, [b]);
        return (
            s.useEffect(() => {
                "" !== U &&
                    A.A.showAgeVerification({
                        webviewUrl: U,
                        onComplete: x,
                        entryPoint: o.q1.AUTOMATED_UNDERAGE_APPEALS,
                    });
            }, [U, x]),
            (0, n.jsx)(l.Modal, {
                onClose: i,
                transitionState: e,
                title: T.intl.string(T.t["9SDLnj"]),
                subtitle: T.intl.string(T.t["yvx//1"]),
                actions: [
                    { text: T.intl.string(T.t.dKacJ8), onClick: b, variant: "secondary" },
                    { text: T.intl.string(T.t["54b8V0"]), onClick: () => (0, p.k9)(g), loading: L },
                ],
                children: (0, n.jsxs)(r.B, {
                    gap: 8,
                    direction: "vertical",
                    children: [
                        (0, n.jsx)(_.q, {
                            children: P.map((t, i) => {
                                let { title: e, description: s } = t;
                                return (0, n.jsx)(_.B, { title: e, description: s, index: i, listType: "numbered" }, i);
                            }),
                        }),
                        (0, n.jsxs)(r.B, {
                            gap: 8,
                            direction: "vertical",
                            children: [
                                (0, n.jsx)(d.Y0, {
                                    title: T.intl.string(T.t.WPwp1b),
                                    children: (0, n.jsx)(d.PQ, {
                                        title: T.intl.string(T.t.N9WJMM),
                                        description: T.intl.string(T.t.NHq382),
                                        buttonText: T.intl.string(T.t["9iy4lB"]),
                                        titleVariant: "text-md/medium",
                                        onButtonPress: () => window.open(u.d$.AGE_VERIFICATION_LINK, "_blank"),
                                    }),
                                }),
                                (0, n.jsx)(r.B, {
                                    align: "center",
                                    children: (0, n.jsx)(c.E, {
                                        variant: "text-sm/medium",
                                        color: "text-subtle",
                                        children: T.intl.format(T.t.ZbWsOF, {
                                            learnMoreLink: u.d$.LEARN_MORE_UU_APPEAL_LINK,
                                        }),
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
            })
        );
    };
