i.d(e, { default: () => f }), i(953529);
var n = i(951288),
    r = i(647438),
    s = i(793030),
    l = i(442837),
    c = i(481060),
    a = i(168107),
    o = i(480916),
    d = i(819557),
    A = i(138201),
    _ = i(331692),
    u = i(103879),
    p = i(236289),
    E = i(800530),
    g = i(388032);
let b = [
        {
            title: g.intl.string(g.t["1+E7LC"]),
            description: g.intl.string(g.t.BXiat7),
        },
        {
            title: g.intl.string(g.t.iMQXtL),
            description: g.intl.string(g.t.oQ0vws),
        },
        {
            title: g.intl.string(g.t["oY/z1d"]),
            description: g.intl.string(g.t.wtj02d),
        },
    ],
    f = function (t) {
        let { onClose: e, transitionState: i, classificationId: f } = t,
            y = (0, l.e7)([p.Z], () => p.Z.getAgeVerificationWebviewUrl()),
            T = (0, l.e7)([p.Z], () => p.Z.getIsLoadingAgeVerification()),
            h = r.useCallback(() => {
                e(), _.Z.close();
            }, [e]),
            O = r.useCallback(() => {
                _.Z.success(), h(), _.Z.start_verification_check();
            }, [h]);
        return (
            r.useEffect(() => {
                "" !== y &&
                    a.Z.showAgeVerification({
                        webviewUrl: y,
                        onComplete: O,
                        useV1: !0,
                        entryPoint: o.cU.AUTOMATED_UNDERAGE_APPEALS,
                    });
            }, [y, O]),
            (0, n.jsx)(s.Modal, {
                onClose: e,
                transitionState: i,
                title: g.intl.string(g.t["9SDLnp"]),
                subtitle: g.intl.string(g.t["yvx///"]),
                actions: [
                    {
                        text: g.intl.string(g.t.dKacJy),
                        onClick: h,
                        variant: "secondary",
                    },
                    {
                        text: g.intl.string(g.t["54b8V1"]),
                        onClick: () => (0, u.FN)(f),
                        loading: T,
                    },
                ],
                children: (0, n.jsxs)(c.Kqy, {
                    gap: 8,
                    direction: "vertical",
                    children: [
                        (0, n.jsx)(d.z, {
                            children: b.map((t, e) => {
                                let { title: i, description: r } = t;
                                return (0, n.jsx)(
                                    d.q,
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
                                (0, n.jsx)(A.rT, {
                                    title: g.intl.string(g.t.WPwp1d),
                                    children: (0, n.jsx)(A.JZ, {
                                        title: g.intl.string(g.t.N9WJMD),
                                        description: g.intl.string(g.t["NHq38/"]),
                                        buttonText: g.intl.string(g.t["9iy4lJ"]),
                                        titleVariant: "text-md/medium",
                                        onButtonPress: () => window.open(E.sQ.AGE_VERIFICATION_LINK, "_blank"),
                                    }),
                                }),
                                (0, n.jsx)(c.Kqy, {
                                    align: "center",
                                    children: (0, n.jsx)(c.Text, {
                                        variant: "text-sm/medium",
                                        color: "text-secondary",
                                        children: g.intl.format(g.t.ZbWsOD, {
                                            learnMoreLink: E.sQ.LEARN_MORE_UU_APPEAL_LINK,
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
