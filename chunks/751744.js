t.d(n, { default: () => p }), t(953529);
var i = t(951288),
    r = t(647438),
    l = t(793030),
    o = t(442837),
    c = t(481060),
    s = t(168107),
    a = t(480916),
    d = t(819557),
    u = t(138201),
    x = t(331692),
    m = t(103879),
    b = t(236289),
    f = t(800530),
    j = t(388032);
let h = [
        {
            title: j.intl.string(j.t["1+E7LC"]),
            description: j.intl.string(j.t.BXiat7),
        },
        {
            title: j.intl.string(j.t.iMQXtL),
            description: j.intl.string(j.t.oQ0vws),
        },
        {
            title: j.intl.string(j.t["oY/z1d"]),
            description: j.intl.string(j.t.wtj02d),
        },
    ],
    p = function (e) {
        let { onClose: n, transitionState: t, classificationId: p } = e,
            v = (0, o.e7)([b.Z], () => b.Z.getAgeVerificationWebviewUrl()),
            g = (0, o.e7)([b.Z], () => b.Z.getIsLoadingAgeVerification()),
            _ = r.useCallback(() => {
                n(), x.Z.close();
            }, [n]),
            y = r.useCallback(() => {
                x.Z.success(), _(), x.Z.start_verification_check();
            }, [_]);
        return (
            r.useEffect(() => {
                "" !== v &&
                    s.Z.showAgeVerification({
                        webviewUrl: v,
                        onComplete: y,
                        useV1: !0,
                        entryPoint: a.cU.AUTOMATED_UNDERAGE_APPEALS,
                    });
            }, [v, y]),
            (0, i.jsx)(l.Modal, {
                onClose: n,
                transitionState: t,
                title: j.intl.string(j.t["9SDLnp"]),
                subtitle: j.intl.string(j.t["yvx///"]),
                actions: [
                    {
                        text: j.intl.string(j.t.dKacJy),
                        onClick: _,
                        variant: "secondary",
                    },
                    {
                        text: j.intl.string(j.t["54b8V1"]),
                        onClick: () => (0, m.FN)(p),
                        loading: g,
                    },
                ],
                children: (0, i.jsxs)(c.Kqy, {
                    gap: 8,
                    direction: "vertical",
                    children: [
                        (0, i.jsx)(d.z, {
                            children: h.map((e, n) => {
                                let { title: t, description: r } = e;
                                return (0, i.jsx)(
                                    d.q,
                                    {
                                        title: t,
                                        description: r,
                                        index: n,
                                        listType: "numbered",
                                    },
                                    n,
                                );
                            }),
                        }),
                        (0, i.jsxs)(c.Kqy, {
                            gap: 8,
                            direction: "vertical",
                            children: [
                                (0, i.jsx)(u.rT, {
                                    title: j.intl.string(j.t.WPwp1d),
                                    children: (0, i.jsx)(u.JZ, {
                                        title: j.intl.string(j.t.N9WJMD),
                                        description: j.intl.string(j.t["NHq38/"]),
                                        buttonText: j.intl.string(j.t["9iy4lJ"]),
                                        titleVariant: "text-md/medium",
                                        onButtonPress: () => window.open(f.sQ.AGE_VERIFICATION_LINK, "_blank"),
                                    }),
                                }),
                                (0, i.jsx)(c.Kqy, {
                                    align: "center",
                                    children: (0, i.jsx)(c.Text, {
                                        variant: "text-sm/medium",
                                        color: "text-secondary",
                                        children: j.intl.format(j.t.ZbWsOD, {
                                            learnMoreLink: f.sQ.LEARN_MORE_UU_APPEAL_LINK,
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
