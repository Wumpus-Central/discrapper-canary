n.d(i, { default: () => k });
var e = n(627968),
    r = n(64700),
    s = n(189213),
    l = n(17928),
    c = n(331322),
    o = n(834730),
    a = n(139716),
    d = n(847599),
    g = n(754302),
    u = n(632738),
    A = n(67521),
    p = n(308645),
    x = n(207913),
    b = n(239093),
    h = n(375708);
let _ = [
        { title: h.intl.string(h.t["1+E7LP"]), description: h.intl.string(h.t["BXiat/"]) },
        { title: h.intl.string(h.t.iMQXtK), description: h.intl.string(h.t.oQ0vwu) },
        { title: h.intl.string(h.t["oY/z1Q"]), description: h.intl.string(h.t.wtj02W) },
    ],
    k = function (t) {
        let { onClose: i, transitionState: n, classificationId: k } = t,
            E = (0, l.bG)([x.A], () => x.A.getAgeVerificationWebviewUrl()),
            j = (0, l.bG)([x.A], () => x.A.getIsLoadingAgeVerification()),
            f = r.useCallback(() => {
                i(), A.A.close();
            }, [i]),
            m = r.useCallback(() => {
                A.A.success(), f(), A.A.start_verification_check();
            }, [f]);
        return (
            r.useEffect(() => {
                "" !== E &&
                    a.A.showAgeVerification({
                        webviewUrl: E,
                        onComplete: m,
                        entryPoint: d.q1.AUTOMATED_UNDERAGE_APPEALS,
                    });
            }, [E, m]),
            (0, e.jsx)(s.Modal, {
                onClose: i,
                transitionState: n,
                title: h.intl.string(h.t["9SDLnj"]),
                subtitle: h.intl.string(h.t["yvx//1"]),
                actions: [
                    { text: h.intl.string(h.t.dKacJ8), onClick: f, variant: "secondary" },
                    { text: h.intl.string(h.t["54b8V0"]), onClick: () => (0, p.k9)(k), loading: j },
                ],
                children: (0, e.jsxs)(c.B, {
                    gap: 8,
                    direction: "vertical",
                    children: [
                        (0, e.jsx)(g.q, {
                            children: _.map((t, i) => {
                                let { title: n, description: r } = t;
                                return (0, e.jsx)(g.B, { title: n, description: r, index: i, listType: "numbered" }, i);
                            }),
                        }),
                        (0, e.jsxs)(c.B, {
                            gap: 8,
                            direction: "vertical",
                            children: [
                                (0, e.jsx)(u.Y0, {
                                    title: h.intl.string(h.t.WPwp1b),
                                    children: (0, e.jsx)(u.PQ, {
                                        title: h.intl.string(h.t.N9WJMM),
                                        description: h.intl.string(h.t.NHq382),
                                        buttonText: h.intl.string(h.t["9iy4lB"]),
                                        titleVariant: "text-md/medium",
                                        onButtonPress: function () {
                                            return window.open(b.d$.AGE_VERIFICATION_LINK, "_blank");
                                        },
                                    }),
                                }),
                                (0, e.jsx)(c.B, {
                                    align: "center",
                                    children: (0, e.jsx)(o.E, {
                                        variant: "text-sm/medium",
                                        color: "text-subtle",
                                        children: h.intl.format(h.t.ZbWsOF, {
                                            learnMoreLink: b.d$.LEARN_MORE_UU_APPEAL_LINK,
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
