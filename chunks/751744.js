n.d(e, { default: () => m }), n(953529);
var i = n(951288),
    r = n(647438),
    o = n(442837),
    l = n(82659),
    a = n(481060),
    s = n(168107),
    c = n(819557),
    d = n(138201),
    u = n(331692),
    _ = n(103879),
    x = n(236289),
    p = n(800530),
    b = n(388032);
let f = [
        {
            title: b.intl.string(b.t["1+E7LC"]),
            description: b.intl.string(b.t.BXiat7),
        },
        {
            title: b.intl.string(b.t.iMQXtL),
            description: b.intl.string(b.t.oQ0vws),
        },
        {
            title: b.intl.string(b.t["oY/z1d"]),
            description: b.intl.string(b.t.wtj02d),
        },
    ],
    m = function (t) {
        let { onClose: e, transitionState: n, classificationId: m } = t,
            h = (0, o.e7)([x.Z], () => x.Z.getAgeVerificationWebviewUrl()),
            A = (0, o.e7)([x.Z], () => x.Z.getIsLoadingAgeVerification()),
            g = r.useCallback(() => {
                e(), u.Z.close();
            }, [e]),
            v = r.useCallback(() => {
                u.Z.success(), g(), u.Z.start_verification_check();
            }, [g]);
        return (
            r.useEffect(() => {
                "" !== h &&
                    s.Z.showAgeVerification({
                        webviewUrl: h,
                        onComplete: v,
                        useV1: !0,
                    });
            }, [h, v]),
            (0, i.jsx)(l.Modal, {
                onClose: e,
                transitionState: n,
                title: b.intl.string(b.t["9SDLnp"]),
                subtitle: b.intl.string(b.t["yvx///"]),
                actions: [
                    {
                        text: b.intl.string(b.t.dKacJy),
                        onClick: g,
                        variant: "secondary",
                    },
                    {
                        text: b.intl.string(b.t["54b8V1"]),
                        onClick: () => (0, _.FN)(m),
                        loading: A,
                    },
                ],
                children: (0, i.jsxs)(a.Kqy, {
                    gap: 8,
                    direction: "vertical",
                    children: [
                        (0, i.jsx)(c.z, {
                            children: f.map((t, e) => {
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
                        (0, i.jsxs)(a.Kqy, {
                            gap: 8,
                            direction: "vertical",
                            children: [
                                (0, i.jsx)(d.rT, {
                                    title: b.intl.string(b.t.WPwp1d),
                                    children: (0, i.jsx)(d.JZ, {
                                        title: b.intl.string(b.t.N9WJMD),
                                        description: b.intl.string(b.t["NHq38/"]),
                                        buttonText: b.intl.string(b.t["9iy4lJ"]),
                                        titleVariant: "text-md/medium",
                                        onButtonPress: () => window.open(p.sQ.AGE_VERIFICATION_LINK, "_blank"),
                                    }),
                                }),
                                (0, i.jsx)(a.Kqy, {
                                    align: "center",
                                    children: (0, i.jsx)(a.Text, {
                                        variant: "text-sm/medium",
                                        color: "text-secondary",
                                        children: b.intl.format(b.t.ZbWsOD, {
                                            learnMoreLink: p.sQ.LEARN_MORE_UU_APPEAL_LINK,
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
