n.d(e, { default: () => j }), n(953529);
var i = n(951288),
    r = n(647438),
    l = n(793030),
    s = n(442837),
    c = n(481060),
    o = n(168107),
    a = n(480916),
    d = n(819557),
    x = n(138201),
    u = n(331692),
    m = n(103879),
    p = n(236289),
    g = n(800530),
    f = n(388032);
let h = [
        {
            title: f.intl.string(f.t["1+E7LP"]),
            description: f.intl.string(f.t["BXiat/"]),
        },
        {
            title: f.intl.string(f.t.iMQXtK),
            description: f.intl.string(f.t.oQ0vwu),
        },
        {
            title: f.intl.string(f.t["oY/z1Q"]),
            description: f.intl.string(f.t.wtj02W),
        },
    ],
    j = function (t) {
        let { onClose: e, transitionState: n, classificationId: j } = t,
            _ = (0, s.e7)([p.Z], () => p.Z.getAgeVerificationWebviewUrl()),
            b = (0, s.e7)([p.Z], () => p.Z.getIsLoadingAgeVerification()),
            v = r.useCallback(() => {
                e(), u.Z.close();
            }, [e]),
            N = r.useCallback(() => {
                u.Z.success(), v(), u.Z.start_verification_check();
            }, [v]);
        return (
            r.useEffect(() => {
                "" !== _ &&
                    o.Z.showAgeVerification({
                        webviewUrl: _,
                        onComplete: N,
                        entryPoint: a.cU.AUTOMATED_UNDERAGE_APPEALS,
                    });
            }, [_, N]),
            (0, i.jsx)(l.Modal, {
                onClose: e,
                transitionState: n,
                title: f.intl.string(f.t["9SDLnj"]),
                subtitle: f.intl.string(f.t["yvx//1"]),
                actions: [
                    {
                        text: f.intl.string(f.t.dKacJ8),
                        onClick: v,
                        variant: "secondary",
                    },
                    {
                        text: f.intl.string(f.t["54b8V0"]),
                        onClick: () => (0, m.FN)(j),
                        loading: b,
                    },
                ],
                children: (0, i.jsxs)(c.Kqy, {
                    gap: 8,
                    direction: "vertical",
                    children: [
                        (0, i.jsx)(d.z, {
                            children: h.map((t, e) => {
                                let { title: n, description: r } = t;
                                return (0, i.jsx)(
                                    d.q,
                                    {
                                        title: n,
                                        description: r,
                                        index: e,
                                        listType: "numbered",
                                    },
                                    e,
                                );
                            }),
                        }),
                        (0, i.jsxs)(c.Kqy, {
                            gap: 8,
                            direction: "vertical",
                            children: [
                                (0, i.jsx)(x.rT, {
                                    title: f.intl.string(f.t.WPwp1b),
                                    children: (0, i.jsx)(x.JZ, {
                                        title: f.intl.string(f.t.N9WJMM),
                                        description: f.intl.string(f.t.NHq382),
                                        buttonText: f.intl.string(f.t["9iy4lB"]),
                                        titleVariant: "text-md/medium",
                                        onButtonPress: () => window.open(g.sQ.AGE_VERIFICATION_LINK, "_blank"),
                                    }),
                                }),
                                (0, i.jsx)(c.Kqy, {
                                    align: "center",
                                    children: (0, i.jsx)(c.Text, {
                                        variant: "text-sm/medium",
                                        color: "text-secondary",
                                        children: f.intl.format(f.t.ZbWsOF, {
                                            learnMoreLink: g.sQ.LEARN_MORE_UU_APPEAL_LINK,
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
