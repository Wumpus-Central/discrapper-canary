n.d(e, { default: () => p }), n(953529);
var i = n(951288),
    r = n(647438),
    l = n(442837),
    o = n(82659),
    s = n(481060),
    a = n(168107),
    c = n(819557),
    d = n(138201),
    x = n(331692),
    u = n(103879),
    m = n(236289),
    h = n(800530),
    f = n(388032);
let j = [
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
    p = function (t) {
        let { onClose: e, transitionState: n, classificationId: p } = t,
            v = (0, l.e7)([m.Z], () => m.Z.getAgeVerificationWebviewUrl()),
            _ = (0, l.e7)([m.Z], () => m.Z.getIsLoadingAgeVerification()),
            b = r.useCallback(() => {
                e(), x.Z.close();
            }, [e]),
            g = r.useCallback(() => {
                x.Z.success(), b(), x.Z.start_verification_check();
            }, [b]);
        return (
            r.useEffect(() => {
                "" !== v &&
                    a.Z.showAgeVerification({
                        webviewUrl: v,
                        onComplete: g,
                        useV1: !0,
                    });
            }, [v, g]),
            (0, i.jsx)(o.Modal, {
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
                        onClick: () => (0, u.FN)(p),
                        loading: _,
                    },
                ],
                children: (0, i.jsxs)(s.Kqy, {
                    gap: 8,
                    direction: "vertical",
                    children: [
                        (0, i.jsx)(c.z, {
                            children: j.map((t, e) => {
                                let { title: n, description: r } = t;
                                return (0, i.jsx)(
                                    c.q,
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
