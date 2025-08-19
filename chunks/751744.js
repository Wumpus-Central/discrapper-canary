e.d(n, { default: () => j }), e(953529);
var i = e(951288),
    r = e(647438),
    l = e(442837),
    o = e(82659),
    s = e(481060),
    a = e(168107),
    c = e(819557),
    d = e(138201),
    x = e(331692),
    u = e(103879),
    m = e(236289),
    h = e(800530),
    f = e(388032);
let _ = [
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
        let { onClose: n, transitionState: e, classificationId: j } = t,
            p = (0, l.e7)([m.Z], () => m.Z.getAgeVerificationWebviewUrl()),
            v = (0, l.e7)([m.Z], () => m.Z.getIsLoadingAgeVerification()),
            b = r.useCallback(() => {
                n(), x.Z.close();
            }, [n]),
            g = r.useCallback(() => {
                x.Z.success(), b(), x.Z.start_verification_check();
            }, [b]);
        return (
            r.useEffect(() => {
                "" !== p &&
                    a.Z.showAgeVerification({
                        webviewUrl: p,
                        onComplete: g,
                        useV1: !0,
                    });
            }, [p, g]),
            (0, i.jsx)(o.Modal, {
                onClose: n,
                transitionState: e,
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
                        onClick: () => (0, u.FN)(j),
                        loading: v,
                    },
                ],
                children: (0, i.jsxs)(s.Kqy, {
                    gap: 8,
                    direction: "vertical",
                    children: [
                        (0, i.jsx)(c.z, {
                            children: _.map((t, n) => {
                                let { title: e, description: r } = t;
                                return (0, i.jsx)(
                                    c.q,
                                    {
                                        title: e,
                                        description: r,
                                        index: n,
                                        listType: "numbered",
                                    },
                                    n,
                                );
                            }),
                        }),
                        (0, i.jsxs)(s.Kqy, {
                            gap: 8,
                            direction: "vertical",
                            children: [
                                (0, i.jsx)(d.rT, {
                                    title: f.intl.string(f.t.WPwp1d),
                                    children: (0, i.jsx)(d.JZ, {
                                        title: f.intl.string(f.t.N9WJMD),
                                        description: f.intl.string(f.t["NHq38/"]),
                                        buttonText: f.intl.string(f.t["9iy4lJ"]),
                                        titleVariant: "text-md/medium",
                                        onButtonPress: () => window.open(h.sQ.AGE_VERIFICATION_LINK, "_blank"),
                                    }),
                                }),
                                (0, i.jsx)(s.Kqy, {
                                    align: "center",
                                    children: (0, i.jsx)(s.Text, {
                                        variant: "text-sm/medium",
                                        color: "text-secondary",
                                        children: f.intl.format(f.t.ZbWsOD, {
                                            learnMoreLink: h.sQ.LEARN_MORE_UU_APPEAL_LINK,
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
