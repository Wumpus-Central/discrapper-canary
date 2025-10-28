i.d(e, { default: () => f }), i(953529);
var n = i(951288),
    r = i(647438),
    s = i(793030),
    c = i(442837),
    l = i(481060),
    a = i(168107),
    o = i(480916),
    A = i(819557),
    _ = i(138201),
    d = i(331692),
    E = i(103879),
    u = i(236289),
    p = i(800530),
    g = i(388032);
let T = [
        {
            title: g.intl.string(g.t["1+E7LP"]),
            description: g.intl.string(g.t["BXiat/"]),
        },
        {
            title: g.intl.string(g.t.iMQXtK),
            description: g.intl.string(g.t.oQ0vwu),
        },
        {
            title: g.intl.string(g.t["oY/z1Q"]),
            description: g.intl.string(g.t.wtj02W),
        },
    ],
    f = function (t) {
        let { onClose: e, transitionState: i, classificationId: f } = t,
            P = (0, c.e7)([u.Z], () => u.Z.getAgeVerificationWebviewUrl()),
            b = (0, c.e7)([u.Z], () => u.Z.getIsLoadingAgeVerification()),
            y = r.useCallback(() => {
                e(), d.Z.close();
            }, [e]),
            U = r.useCallback(() => {
                d.Z.success(), y(), d.Z.start_verification_check();
            }, [y]);
        return (
            r.useEffect(() => {
                "" !== P &&
                    a.Z.showAgeVerification({
                        webviewUrl: P,
                        onComplete: U,
                        entryPoint: o.cU.AUTOMATED_UNDERAGE_APPEALS,
                    });
            }, [P, U]),
            (0, n.jsx)(s.Modal, {
                onClose: e,
                transitionState: i,
                title: g.intl.string(g.t["9SDLnj"]),
                subtitle: g.intl.string(g.t["yvx//1"]),
                actions: [
                    {
                        text: g.intl.string(g.t.dKacJ8),
                        onClick: y,
                        variant: "secondary",
                    },
                    {
                        text: g.intl.string(g.t["54b8V0"]),
                        onClick: () => (0, E.FN)(f),
                        loading: b,
                    },
                ],
                children: (0, n.jsxs)(l.Kqy, {
                    gap: 8,
                    direction: "vertical",
                    children: [
                        (0, n.jsx)(A.z, {
                            children: T.map((t, e) => {
                                let { title: i, description: r } = t;
                                return (0, n.jsx)(
                                    A.q,
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
                        (0, n.jsxs)(l.Kqy, {
                            gap: 8,
                            direction: "vertical",
                            children: [
                                (0, n.jsx)(_.rT, {
                                    title: g.intl.string(g.t.WPwp1b),
                                    children: (0, n.jsx)(_.JZ, {
                                        title: g.intl.string(g.t.N9WJMM),
                                        description: g.intl.string(g.t.NHq382),
                                        buttonText: g.intl.string(g.t["9iy4lB"]),
                                        titleVariant: "text-md/medium",
                                        onButtonPress: () => window.open(p.sQ.AGE_VERIFICATION_LINK, "_blank"),
                                    }),
                                }),
                                (0, n.jsx)(l.Kqy, {
                                    align: "center",
                                    children: (0, n.jsx)(l.Text, {
                                        variant: "text-sm/medium",
                                        color: "text-secondary",
                                        children: g.intl.format(g.t.ZbWsOF, {
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
