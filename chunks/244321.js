e.d(i, { default: () => f }), e(228524);
var n = e(627968),
    s = e(64700),
    l = e(158954),
    r = e(311907),
    a = e(397927),
    c = e(935649),
    d = e(847599),
    o = e(754302),
    x = e(632738),
    u = e(67521),
    b = e(308645),
    g = e(207913),
    m = e(239093),
    h = e(985018);
let A = [
        {
            title: h.intl.string(h.t["1+E7LP"]),
            description: h.intl.string(h.t["BXiat/"]),
        },
        {
            title: h.intl.string(h.t.iMQXtK),
            description: h.intl.string(h.t.oQ0vwu),
        },
        {
            title: h.intl.string(h.t["oY/z1Q"]),
            description: h.intl.string(h.t.wtj02W),
        },
    ],
    f = function (t) {
        let { onClose: i, transitionState: e, classificationId: f } = t,
            j = (0, r.bG)([g.A], () => g.A.getAgeVerificationWebviewUrl()),
            p = (0, r.bG)([g.A], () => g.A.getIsLoadingAgeVerification()),
            v = s.useCallback(() => {
                i(), u.A.close();
            }, [i]),
            N = s.useCallback(() => {
                u.A.success(), v(), u.A.start_verification_check();
            }, [v]);
        return (
            s.useEffect(() => {
                "" !== j &&
                    c.A.showAgeVerification({
                        webviewUrl: j,
                        onComplete: N,
                        entryPoint: d.q1.AUTOMATED_UNDERAGE_APPEALS,
                    });
            }, [j, N]),
            (0, n.jsx)(l.Modal, {
                onClose: i,
                transitionState: e,
                title: h.intl.string(h.t["9SDLnj"]),
                subtitle: h.intl.string(h.t["yvx//1"]),
                actions: [
                    {
                        text: h.intl.string(h.t.dKacJ8),
                        onClick: v,
                        variant: "secondary",
                    },
                    {
                        text: h.intl.string(h.t["54b8V0"]),
                        onClick: () => (0, b.k9)(f),
                        loading: p,
                    },
                ],
                children: (0, n.jsxs)(a.BJc, {
                    gap: 8,
                    direction: "vertical",
                    children: [
                        (0, n.jsx)(o.q, {
                            children: A.map((t, i) => {
                                let { title: e, description: s } = t;
                                return (0, n.jsx)(
                                    o.B,
                                    {
                                        title: e,
                                        description: s,
                                        index: i,
                                        listType: "numbered",
                                    },
                                    i,
                                );
                            }),
                        }),
                        (0, n.jsxs)(a.BJc, {
                            gap: 8,
                            direction: "vertical",
                            children: [
                                (0, n.jsx)(x.Y0, {
                                    title: h.intl.string(h.t.WPwp1b),
                                    children: (0, n.jsx)(x.PQ, {
                                        title: h.intl.string(h.t.N9WJMM),
                                        description: h.intl.string(h.t.NHq382),
                                        buttonText: h.intl.string(h.t["9iy4lB"]),
                                        titleVariant: "text-md/medium",
                                        onButtonPress: () => window.open(m.d$.AGE_VERIFICATION_LINK, "_blank"),
                                    }),
                                }),
                                (0, n.jsx)(a.BJc, {
                                    align: "center",
                                    children: (0, n.jsx)(a.Text, {
                                        variant: "text-sm/medium",
                                        color: "text-subtle",
                                        children: h.intl.format(h.t.ZbWsOF, {
                                            learnMoreLink: m.d$.LEARN_MORE_UU_APPEAL_LINK,
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
