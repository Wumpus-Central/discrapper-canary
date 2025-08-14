n.d(i, { default: () => k }), n(953529);
var e = n(255367),
    s = n(73800),
    r = n(442837),
    l = n(82659),
    c = n(481060),
    o = n(168107),
    a = n(819557),
    d = n(138201),
    g = n(331692),
    p = n(103879),
    u = n(236289),
    x = n(800530),
    h = n(388032);
let b = [
        {
            title: h.intl.string(h.t["1+E7LC"]),
            description: h.intl.string(h.t.BXiat7),
        },
        {
            title: h.intl.string(h.t.iMQXtL),
            description: h.intl.string(h.t.oQ0vws),
        },
        {
            title: h.intl.string(h.t["oY/z1d"]),
            description: h.intl.string(h.t.wtj02d),
        },
    ],
    k = function (t) {
        let { onClose: i, transitionState: n, classificationId: k } = t,
            _ = (0, r.e7)([u.Z], () => u.Z.getAgeVerificationWebviewUrl()),
            f = (0, r.e7)([u.Z], () => u.Z.getIsLoadingAgeVerification()),
            j = s.useCallback(() => {
                i(), g.Z.close();
            }, [i]),
            m = s.useCallback(() => {
                g.Z.success(), j(), g.Z.start_verification_check();
            }, [j]);
        return (
            s.useEffect(() => {
                "" !== _ &&
                    o.Z.showAgeVerification({
                        webviewUrl: _,
                        onComplete: m,
                        useV1: !0,
                    });
            }, [_, m]),
            (0, e.jsx)(l.Modal, {
                onClose: i,
                transitionState: n,
                title: h.intl.string(h.t["9SDLnp"]),
                subtitle: h.intl.string(h.t["yvx///"]),
                actions: [
                    {
                        text: h.intl.string(h.t.dKacJy),
                        onClick: j,
                        variant: "secondary",
                    },
                    {
                        text: h.intl.string(h.t["54b8V1"]),
                        onClick: () => (0, p.FN)(k),
                        loading: f,
                    },
                ],
                children: (0, e.jsxs)(c.Kqy, {
                    gap: 8,
                    direction: "vertical",
                    children: [
                        (0, e.jsx)(a.z, {
                            children: b.map((t, i) => {
                                let { title: n, description: s } = t;
                                return (0, e.jsx)(
                                    a.q,
                                    {
                                        title: n,
                                        description: s,
                                        index: i,
                                        listType: "numbered",
                                    },
                                    i,
                                );
                            }),
                        }),
                        (0, e.jsxs)(c.Kqy, {
                            gap: 8,
                            direction: "vertical",
                            children: [
                                (0, e.jsx)(d.rT, {
                                    title: h.intl.string(h.t.WPwp1d),
                                    children: (0, e.jsx)(d.JZ, {
                                        title: h.intl.string(h.t.N9WJMD),
                                        description: h.intl.string(h.t["NHq38/"]),
                                        buttonText: h.intl.string(h.t["9iy4lJ"]),
                                        titleVariant: "text-md/medium",
                                        onButtonPress: () => window.open(x.sQ.AGE_VERIFICATION_LINK, "_blank"),
                                    }),
                                }),
                                (0, e.jsx)(c.Kqy, {
                                    align: "center",
                                    children: (0, e.jsx)(c.Text, {
                                        variant: "text-sm/medium",
                                        color: "text-secondary",
                                        children: h.intl.format(h.t.ZbWsOD, {
                                            learnMoreLink: x.sQ.LEARN_MORE_UU_APPEAL_LINK,
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
