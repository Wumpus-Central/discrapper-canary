n.d(e, { default: () => g });
var i = n(627968),
    l = n(64700),
    s = n(189213),
    r = n(17928),
    a = n(331322),
    c = n(834730),
    o = n(139716),
    d = n(847599),
    x = n(754302),
    u = n(632738),
    m = n(67521),
    h = n(308645),
    j = n(207913),
    v = n(239093),
    _ = n(985018);
let b = [
        { title: _.intl.string(_.t["1+E7LP"]), description: _.intl.string(_.t["BXiat/"]) },
        { title: _.intl.string(_.t.iMQXtK), description: _.intl.string(_.t.oQ0vwu) },
        { title: _.intl.string(_.t["oY/z1Q"]), description: _.intl.string(_.t.wtj02W) },
    ],
    g = function (t) {
        let { onClose: e, transitionState: n, classificationId: g } = t,
            f = (0, r.bG)([j.A], () => j.A.getAgeVerificationWebviewUrl()),
            N = (0, r.bG)([j.A], () => j.A.getIsLoadingAgeVerification()),
            p = l.useCallback(() => {
                e(), m.A.close();
            }, [e]),
            A = l.useCallback(() => {
                m.A.success(), p(), m.A.start_verification_check();
            }, [p]);
        return (
            l.useEffect(() => {
                "" !== f &&
                    o.A.showAgeVerification({
                        webviewUrl: f,
                        onComplete: A,
                        entryPoint: d.q1.AUTOMATED_UNDERAGE_APPEALS,
                    });
            }, [f, A]),
            (0, i.jsx)(s.Modal, {
                onClose: e,
                transitionState: n,
                title: _.intl.string(_.t["9SDLnj"]),
                subtitle: _.intl.string(_.t["yvx//1"]),
                actions: [
                    { text: _.intl.string(_.t.dKacJ8), onClick: p, variant: "secondary" },
                    { text: _.intl.string(_.t["54b8V0"]), onClick: () => (0, h.k9)(g), loading: N },
                ],
                children: (0, i.jsxs)(a.B, {
                    gap: 8,
                    direction: "vertical",
                    children: [
                        (0, i.jsx)(x.q, {
                            children: b.map((t, e) => {
                                let { title: n, description: l } = t;
                                return (0, i.jsx)(x.B, { title: n, description: l, index: e, listType: "numbered" }, e);
                            }),
                        }),
                        (0, i.jsxs)(a.B, {
                            gap: 8,
                            direction: "vertical",
                            children: [
                                (0, i.jsx)(u.Y0, {
                                    title: _.intl.string(_.t.WPwp1b),
                                    children: (0, i.jsx)(u.PQ, {
                                        title: _.intl.string(_.t.N9WJMM),
                                        description: _.intl.string(_.t.NHq382),
                                        buttonText: _.intl.string(_.t["9iy4lB"]),
                                        titleVariant: "text-md/medium",
                                        onButtonPress: () => window.open(v.d$.AGE_VERIFICATION_LINK, "_blank"),
                                    }),
                                }),
                                (0, i.jsx)(a.B, {
                                    align: "center",
                                    children: (0, i.jsx)(c.E, {
                                        variant: "text-sm/medium",
                                        color: "text-subtle",
                                        children: _.intl.format(_.t.ZbWsOF, {
                                            learnMoreLink: v.d$.LEARN_MORE_UU_APPEAL_LINK,
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
