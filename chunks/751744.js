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
            title: f.intl.string(f.t["1+E7LC"]),
            description: f.intl.string(f.t.BXiat7),
        },
        {
            title: f.intl.string(f.t.iMQXtL),
            description: f.intl.string(f.t.oQ0vws),
        },
        {
            title: f.intl.string(f.t["oY/z1d"]),
            description: f.intl.string(f.t.wtj02d),
        },
    ],
    j = function (t) {
        let { onClose: e, transitionState: n, classificationId: j } = t,
            _ = (0, s.e7)([p.Z], () => p.Z.getAgeVerificationWebviewUrl()),
            v = (0, s.e7)([p.Z], () => p.Z.getIsLoadingAgeVerification()),
            b = r.useCallback(() => {
                e(), u.Z.close();
            }, [e]),
            N = r.useCallback(() => {
                u.Z.success(), b(), u.Z.start_verification_check();
            }, [b]);
        return (
            r.useEffect(() => {
                "" !== _ &&
                    o.Z.showAgeVerification({
                        webviewUrl: _,
                        onComplete: N,
                        useV1: !0,
                        entryPoint: a.cU.AUTOMATED_UNDERAGE_APPEALS,
                    });
            }, [_, N]),
            (0, i.jsx)(l.Modal, {
                onClose: e,
                transitionState: n,
                title: f.intl.string(f.t["9SDLnp"]),
                subtitle: f.intl.string(f.t["yvx///"]),
                actions: [
                    {
                        text: f.intl.string(f.t.dKacJy),
                        onClick: b,
                        variant: "secondary",
                    },
                    {
                        text: f.intl.string(f.t["54b8V1"]),
                        onClick: () => (0, m.FN)(j),
                        loading: v,
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
                                    title: f.intl.string(f.t.WPwp1d),
                                    children: (0, i.jsx)(x.JZ, {
                                        title: f.intl.string(f.t.N9WJMD),
                                        description: f.intl.string(f.t["NHq38/"]),
                                        buttonText: f.intl.string(f.t["9iy4lJ"]),
                                        titleVariant: "text-md/medium",
                                        onButtonPress: () => window.open(g.sQ.AGE_VERIFICATION_LINK, "_blank"),
                                    }),
                                }),
                                (0, i.jsx)(c.Kqy, {
                                    align: "center",
                                    children: (0, i.jsx)(c.Text, {
                                        variant: "text-sm/medium",
                                        color: "text-secondary",
                                        children: f.intl.format(f.t.ZbWsOD, {
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
