n.d(e, { default: () => g }), n(953529);
var i = n(255367),
    s = n(73800),
    o = n(442837),
    r = n(755721),
    a = n(481060),
    l = n(168107),
    c = n(138201),
    d = n(331692),
    f = n(103879),
    h = n(236289),
    x = n(800530),
    m = n(388032),
    p = n(822566);
let u = [
        {
            title: m.intl.string(m.t["1+E7LC"]),
            description: m.intl.string(m.t.BXiat7),
        },
        {
            title: m.intl.string(m.t.iMQXtL),
            description: m.intl.string(m.t.oQ0vws),
        },
        {
            title: m.intl.string(m.t["oY/z1d"]),
            description: m.intl.string(m.t.wtj02d),
        },
    ],
    g = function (t) {
        let { onClose: e, transitionState: n, classificationId: g } = t,
            N = (0, o.e7)([h.Z], () => h.Z.getAgeVerificationWebviewUrl()),
            _ = (0, o.e7)([h.Z], () => h.Z.getIsLoadingAgeVerification()),
            b = s.useCallback(() => {
                e(), d.Z.close();
            }, [e]),
            j = s.useCallback(() => {
                d.Z.success(), b(), d.Z.start_verification_check();
            }, [b]);
        return (
            s.useEffect(() => {
                "" !== N &&
                    l.Z.showAgeVerification({
                        webviewUrl: N,
                        onComplete: j,
                        useV1: !0,
                    });
            }, [N, j]),
            (0, i.jsxs)(a.Y0X, {
                transitionState: n,
                className: p.root,
                parentComponent: "AutomatedUnderageAppealModal",
                children: [
                    (0, i.jsxs)(a.hzk, {
                        className: p.content,
                        children: [
                            (0, i.jsxs)("div", {
                                className: p.header,
                                children: [
                                    (0, i.jsx)(a.X6q, {
                                        variant: "heading-xl/bold",
                                        children: m.intl.string(m.t["9SDLnp"]),
                                    }),
                                    (0, i.jsx)(a.X6q, {
                                        variant: "heading-md/normal",
                                        color: "header-secondary",
                                        children: m.intl.string(m.t["yvx///"]),
                                    }),
                                ],
                            }),
                            (0, i.jsx)("div", {
                                className: p.listContent,
                                children: (0, i.jsx)("div", {
                                    className: p.table,
                                    children: u.map((t, e) => {
                                        let { title: n, description: s } = t;
                                        return (0, i.jsx)(
                                            c.JZ,
                                            {
                                                title: n,
                                                description: s,
                                                index: e,
                                                listType: "numbered",
                                                titleVariant: "text-md/medium",
                                            },
                                            e,
                                        );
                                    }),
                                }),
                            }),
                            (0, i.jsxs)("div", {
                                className: p.anotherOption,
                                children: [
                                    (0, i.jsx)(a.Text, {
                                        variant: "text-sm/semibold",
                                        className: p.optionEyebrow,
                                        color: "header-secondary",
                                        children: m.intl.string(m.t.WPwp1d),
                                    }),
                                    (0, i.jsx)("div", {
                                        className: p.table,
                                        children: (0, i.jsx)(c.ZP, {
                                            title: m.intl.string(m.t.N9WJMD),
                                            description: m.intl.string(m.t["NHq38/"]),
                                            buttonText: m.intl.string(m.t["9iy4lJ"]),
                                            buttonColor: r.zx.Colors.PRIMARY,
                                            titleVariant: "text-md/medium",
                                            onButtonPress: () => window.open(x.sQ.AGE_VERIFICATION_LINK, "_blank"),
                                        }),
                                    }),
                                    (0, i.jsx)("div", {
                                        className: p.learnMore,
                                        children: (0, i.jsx)(a.X6q, {
                                            variant: "heading-sm/medium",
                                            color: "text-secondary",
                                            children: m.intl.format(m.t.ZbWsOD, {
                                                learnMoreLink: x.sQ.LEARN_MORE_UU_APPEAL_LINK,
                                            }),
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, i.jsxs)(a.mzw, {
                        className: p.footer,
                        children: [
                            (0, i.jsx)(a.zxk, {
                                variant: "primary",
                                text: m.intl.string(m.t["54b8V1"]),
                                onClick: () => (0, f.FN)(g),
                                loading: _,
                            }),
                            (0, i.jsx)(r.zx, {
                                color: r.zx.Colors.TRANSPARENT,
                                look: r.zx.Looks.BLANK,
                                onClick: b,
                                className: p.cancelButton,
                                children: m.intl.string(m.t.dKacJy),
                            }),
                        ],
                    }),
                ],
            })
        );
    };
