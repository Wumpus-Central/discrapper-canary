i.d(e, { default: () => b }), i(953529);
var n = i(255367),
    r = i(73800),
    s = i(442837),
    l = i(82659),
    c = i(481060),
    a = i(168107),
    o = i(819557),
    d = i(138201),
    _ = i(331692),
    u = i(103879),
    p = i(236289),
    A = i(800530),
    E = i(388032);
let g = [
        {
            title: E.intl.string(E.t["1+E7LC"]),
            description: E.intl.string(E.t.BXiat7),
        },
        {
            title: E.intl.string(E.t.iMQXtL),
            description: E.intl.string(E.t.oQ0vws),
        },
        {
            title: E.intl.string(E.t["oY/z1d"]),
            description: E.intl.string(E.t.wtj02d),
        },
    ],
    b = function (t) {
        let { onClose: e, transitionState: i, classificationId: b } = t,
            f = (0, s.e7)([p.Z], () => p.Z.getAgeVerificationWebviewUrl()),
            y = (0, s.e7)([p.Z], () => p.Z.getIsLoadingAgeVerification()),
            h = r.useCallback(() => {
                e(), _.Z.close();
            }, [e]),
            T = r.useCallback(() => {
                _.Z.success(), h(), _.Z.start_verification_check();
            }, [h]);
        return (
            r.useEffect(() => {
                "" !== f &&
                    a.Z.showAgeVerification({
                        webviewUrl: f,
                        onComplete: T,
                        useV1: !0,
                    });
            }, [f, T]),
            (0, n.jsx)(l.Modal, {
                onClose: e,
                transitionState: i,
                title: E.intl.string(E.t["9SDLnp"]),
                subtitle: E.intl.string(E.t["yvx///"]),
                actions: [
                    {
                        text: E.intl.string(E.t.dKacJy),
                        onClick: h,
                        variant: "secondary",
                    },
                    {
                        text: E.intl.string(E.t["54b8V1"]),
                        onClick: () => (0, u.FN)(b),
                        loading: y,
                    },
                ],
                children: (0, n.jsxs)(c.Kqy, {
                    gap: 8,
                    direction: "vertical",
                    children: [
                        (0, n.jsx)(o.z, {
                            children: g.map((t, e) => {
                                let { title: i, description: r } = t;
                                return (0, n.jsx)(
                                    o.q,
                                    {
                                        title: i,
                                        description: r,
                                        index: e,
                                        listType: "numbered",
                                    },
                                    e,
                                );
                            }),
                        }),
                        (0, n.jsxs)(c.Kqy, {
                            gap: 8,
                            direction: "vertical",
                            children: [
                                (0, n.jsx)(d.rT, {
                                    title: E.intl.string(E.t.WPwp1d),
                                    children: (0, n.jsx)(d.JZ, {
                                        title: E.intl.string(E.t.N9WJMD),
                                        description: E.intl.string(E.t["NHq38/"]),
                                        buttonText: E.intl.string(E.t["9iy4lJ"]),
                                        titleVariant: "text-md/medium",
                                        onButtonPress: () => window.open(A.sQ.AGE_VERIFICATION_LINK, "_blank"),
                                    }),
                                }),
                                (0, n.jsx)(c.Kqy, {
                                    align: "center",
                                    children: (0, n.jsx)(c.Text, {
                                        variant: "text-sm/medium",
                                        color: "text-secondary",
                                        children: E.intl.format(E.t.ZbWsOD, {
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
