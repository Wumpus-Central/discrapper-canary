n.d(e, { default: () => m }), n(953529);
var i = n(951288),
    r = n(647438),
    o = n(442837),
    l = n(82659),
    a = n(481060),
    s = n(168107),
    c = n(480916),
    d = n(819557),
    u = n(138201),
    _ = n(331692),
    x = n(103879),
    p = n(236289),
    A = n(800530),
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
            h = (0, o.e7)([p.Z], () => p.Z.getAgeVerificationWebviewUrl()),
            E = (0, o.e7)([p.Z], () => p.Z.getIsLoadingAgeVerification()),
            g = r.useCallback(() => {
                e(), _.Z.close();
            }, [e]),
            v = r.useCallback(() => {
                _.Z.success(), g(), _.Z.start_verification_check();
            }, [g]);
        return (
            r.useEffect(() => {
                "" !== h &&
                    s.Z.showAgeVerification({
                        webviewUrl: h,
                        onComplete: v,
                        useV1: !0,
                        entryPoint: c.cU.AUTOMATED_UNDERAGE_APPEALS,
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
                        onClick: () => (0, x.FN)(m),
                        loading: E,
                    },
                ],
                children: (0, i.jsxs)(a.Kqy, {
                    gap: 8,
                    direction: "vertical",
                    children: [
                        (0, i.jsx)(d.z, {
                            children: f.map((t, e) => {
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
                        (0, i.jsxs)(a.Kqy, {
                            gap: 8,
                            direction: "vertical",
                            children: [
                                (0, i.jsx)(u.rT, {
                                    title: b.intl.string(b.t.WPwp1d),
                                    children: (0, i.jsx)(u.JZ, {
                                        title: b.intl.string(b.t.N9WJMD),
                                        description: b.intl.string(b.t["NHq38/"]),
                                        buttonText: b.intl.string(b.t["9iy4lJ"]),
                                        titleVariant: "text-md/medium",
                                        onButtonPress: () => window.open(A.sQ.AGE_VERIFICATION_LINK, "_blank"),
                                    }),
                                }),
                                (0, i.jsx)(a.Kqy, {
                                    align: "center",
                                    children: (0, i.jsx)(a.Text, {
                                        variant: "text-sm/medium",
                                        color: "text-secondary",
                                        children: b.intl.format(b.t.ZbWsOD, {
                                            learnMoreLink: A.sQ.LEARN_MORE_UU_APPEAL_LINK,
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
