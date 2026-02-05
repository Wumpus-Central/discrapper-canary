e.d(i, { default: () => j });
var n = e(627968),
    s = e(64700),
    l = e(158954),
    r = e(311907),
    c = e(397927),
    a = e(935649),
    o = e(847599),
    d = e(754302),
    x = e(632738),
    u = e(67521),
    m = e(308645),
    g = e(207913),
    h = e(239093),
    A = e(985018);
let f = [
        { title: A.intl.string(A.t["1+E7LP"]), description: A.intl.string(A.t["BXiat/"]) },
        { title: A.intl.string(A.t.iMQXtK), description: A.intl.string(A.t.oQ0vwu) },
        { title: A.intl.string(A.t["oY/z1Q"]), description: A.intl.string(A.t.wtj02W) },
    ],
    j = function (t) {
        let { onClose: i, transitionState: e, classificationId: j } = t,
            p = (0, r.bG)([g.A], () => g.A.getAgeVerificationWebviewUrl()),
            b = (0, r.bG)([g.A], () => g.A.getIsLoadingAgeVerification()),
            _ = s.useCallback(() => {
                i(), u.A.close();
            }, [i]),
            v = s.useCallback(() => {
                u.A.success(), _(), u.A.start_verification_check();
            }, [_]);
        return (
            s.useEffect(() => {
                "" !== p &&
                    a.A.showAgeVerification({
                        webviewUrl: p,
                        onComplete: v,
                        entryPoint: o.q1.AUTOMATED_UNDERAGE_APPEALS,
                    });
            }, [p, v]),
            (0, n.jsx)(l.Modal, {
                onClose: i,
                transitionState: e,
                title: A.intl.string(A.t["9SDLnj"]),
                subtitle: A.intl.string(A.t["yvx//1"]),
                actions: [
                    { text: A.intl.string(A.t.dKacJ8), onClick: _, variant: "secondary" },
                    { text: A.intl.string(A.t["54b8V0"]), onClick: () => (0, m.k9)(j), loading: b },
                ],
                children: (0, n.jsxs)(c.BJc, {
                    gap: 8,
                    direction: "vertical",
                    children: [
                        (0, n.jsx)(d.q, {
                            children: f.map((t, i) => {
                                let { title: e, description: s } = t;
                                return (0, n.jsx)(d.B, { title: e, description: s, index: i, listType: "numbered" }, i);
                            }),
                        }),
                        (0, n.jsxs)(c.BJc, {
                            gap: 8,
                            direction: "vertical",
                            children: [
                                (0, n.jsx)(x.Y0, {
                                    title: A.intl.string(A.t.WPwp1b),
                                    children: (0, n.jsx)(x.PQ, {
                                        title: A.intl.string(A.t.N9WJMM),
                                        description: A.intl.string(A.t.NHq382),
                                        buttonText: A.intl.string(A.t["9iy4lB"]),
                                        titleVariant: "text-md/medium",
                                        onButtonPress: () => window.open(h.d$.AGE_VERIFICATION_LINK, "_blank"),
                                    }),
                                }),
                                (0, n.jsx)(c.BJc, {
                                    align: "center",
                                    children: (0, n.jsx)(c.Text, {
                                        variant: "text-sm/medium",
                                        color: "text-subtle",
                                        children: A.intl.format(A.t.ZbWsOF, {
                                            learnMoreLink: h.d$.LEARN_MORE_UU_APPEAL_LINK,
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
