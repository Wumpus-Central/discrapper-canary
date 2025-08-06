n.d(e, { default: () => u }), n(953529);
var i = n(255367),
    s = n(73800),
    r = n(442837),
    o = n(755721),
    a = n(481060),
    l = n(168107),
    c = n(138201),
    d = n(331692),
    f = n(103879),
    h = n(236289),
    m = n(800530),
    x = n(388032),
    p = n(822566);
let g = [
        {
            title: x.intl.string(x.t["1+E7LC"]),
            description: x.intl.string(x.t.BXiat7),
        },
        {
            title: x.intl.string(x.t.iMQXtL),
            description: x.intl.string(x.t.oQ0vws),
        },
        {
            title: x.intl.string(x.t["oY/z1d"]),
            description: x.intl.string(x.t.wtj02d),
        },
    ],
    u = function (t) {
        let { onClose: e, transitionState: n, classificationId: u } = t,
            N = (0, r.e7)([h.Z], () => h.Z.getAgeVerificationWebviewUrl()),
            _ = (0, r.e7)([h.Z], () => h.Z.getIsLoadingAgeVerification()),
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
                                        children: x.intl.string(x.t["9SDLnp"]),
                                    }),
                                    (0, i.jsx)(a.X6q, {
                                        variant: "heading-md/normal",
                                        color: "header-secondary",
                                        children: x.intl.string(x.t["yvx///"]),
                                    }),
                                ],
                            }),
                            (0, i.jsx)("div", {
                                className: p.listContent,
                                children: (0, i.jsx)("div", {
                                    className: p.table,
                                    children: g.map((t, e) => {
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
                                        children: x.intl.string(x.t.WPwp1d),
                                    }),
                                    (0, i.jsx)("div", {
                                        className: p.table,
                                        children: (0, i.jsx)(c.JZ, {
                                            title: x.intl.string(x.t.N9WJMD),
                                            description: x.intl.string(x.t["NHq38/"]),
                                            buttonText: x.intl.string(x.t["9iy4lJ"]),
                                            titleVariant: "text-md/medium",
                                            onButtonPress: () => window.open(m.sQ.AGE_VERIFICATION_LINK, "_blank"),
                                        }),
                                    }),
                                    (0, i.jsx)("div", {
                                        className: p.learnMore,
                                        children: (0, i.jsx)(a.X6q, {
                                            variant: "heading-sm/medium",
                                            color: "text-secondary",
                                            children: x.intl.format(x.t.ZbWsOD, {
                                                learnMoreLink: m.sQ.LEARN_MORE_UU_APPEAL_LINK,
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
                                text: x.intl.string(x.t["54b8V1"]),
                                onClick: () => (0, f.FN)(u),
                                loading: _,
                            }),
                            (0, i.jsx)(o.zx, {
                                color: o.zx.Colors.TRANSPARENT,
                                look: o.zx.Looks.BLANK,
                                onClick: b,
                                className: p.cancelButton,
                                children: x.intl.string(x.t.dKacJy),
                            }),
                        ],
                    }),
                ],
            })
        );
    };
