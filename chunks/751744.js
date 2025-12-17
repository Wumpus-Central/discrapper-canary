n.d(e, { default: () => h }), n(953529);
var i = n(54381),
    l = n(473749),
    r = n(793030),
    s = n(442837),
    c = n(481060),
    o = n(168107),
    a = n(480916),
    d = n(819557),
    u = n(138201),
    x = n(331692),
    m = n(103879),
    b = n(236289),
    g = n(800530),
    p = n(388032);
let f = [
        {
            title: p.intl.string(p.t["1+E7LP"]),
            description: p.intl.string(p.t["BXiat/"]),
        },
        {
            title: p.intl.string(p.t.iMQXtK),
            description: p.intl.string(p.t.oQ0vwu),
        },
        {
            title: p.intl.string(p.t["oY/z1Q"]),
            description: p.intl.string(p.t.wtj02W),
        },
    ],
    h = function (t) {
        let { onClose: e, transitionState: n, classificationId: h } = t,
            j = (0, s.e7)([b.Z], () => b.Z.getAgeVerificationWebviewUrl()),
            v = (0, s.e7)([b.Z], () => b.Z.getIsLoadingAgeVerification()),
            N = l.useCallback(() => {
                e(), x.Z.close();
            }, [e]),
            C = l.useCallback(() => {
                x.Z.success(), N(), x.Z.start_verification_check();
            }, [N]);
        return (
            l.useEffect(() => {
                "" !== j &&
                    o.Z.showAgeVerification({
                        webviewUrl: j,
                        onComplete: C,
                        entryPoint: a.cU.AUTOMATED_UNDERAGE_APPEALS,
                    });
            }, [j, C]),
            (0, i.jsx)(r.Modal, {
                onClose: e,
                transitionState: n,
                title: p.intl.string(p.t["9SDLnj"]),
                subtitle: p.intl.string(p.t["yvx//1"]),
                actions: [
                    {
                        text: p.intl.string(p.t.dKacJ8),
                        onClick: N,
                        variant: "secondary",
                    },
                    {
                        text: p.intl.string(p.t["54b8V0"]),
                        onClick: () => (0, m.FN)(h),
                        loading: v,
                    },
                ],
                children: (0, i.jsxs)(c.Kqy, {
                    gap: 8,
                    direction: "vertical",
                    children: [
                        (0, i.jsx)(d.z, {
                            children: f.map((t, e) => {
                                let { title: n, description: l } = t;
                                return (0, i.jsx)(
                                    d.q,
                                    {
                                        title: n,
                                        description: l,
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
                                (0, i.jsx)(u.rT, {
                                    title: p.intl.string(p.t.WPwp1b),
                                    children: (0, i.jsx)(u.JZ, {
                                        title: p.intl.string(p.t.N9WJMM),
                                        description: p.intl.string(p.t.NHq382),
                                        buttonText: p.intl.string(p.t["9iy4lB"]),
                                        titleVariant: "text-md/medium",
                                        onButtonPress: () => window.open(g.sQ.AGE_VERIFICATION_LINK, "_blank"),
                                    }),
                                }),
                                (0, i.jsx)(c.Kqy, {
                                    align: "center",
                                    children: (0, i.jsx)(c.Text, {
                                        variant: "text-sm/medium",
                                        color: "text-subtle",
                                        children: p.intl.format(p.t.ZbWsOF, {
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
