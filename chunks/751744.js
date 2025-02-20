n.d(t, { default: () => b }), n(266796);
var r = n(200651),
    i = n(192379),
    o = n(442837),
    a = n(481060),
    l = n(191237),
    s = n(138201),
    c = n(331692),
    d = n(103879),
    u = n(236289),
    f = n(800530),
    x = n(388032),
    h = n(915086);
let m = [
        {
            title: x.NW.string(x.t['1+E7LC']),
            description: x.NW.string(x.t.BXiat7)
        },
        {
            title: x.NW.string(x.t.iMQXtL),
            description: x.NW.string(x.t.oQ0vws)
        },
        {
            title: x.NW.string(x.t['oY/z1d']),
            description: x.NW.string(x.t.wtj02d)
        }
    ],
    b = function (e) {
        let { onClose: t, transitionState: n } = e,
            b = (0, o.e7)([u.Z], () => u.Z.getAgeVerificationWebviewUrl()),
            g = (0, o.e7)([u.Z], () => u.Z.getIsLoadingAgeVerification()),
            N = i.useCallback(() => {
                t(), c.Z.close();
            }, [t]),
            p = i.useCallback(() => {
                c.Z.success(), N(), c.Z.start_verification_check();
            }, [N]);
        return (
            i.useEffect(() => {
                '' !== b &&
                    l.Z.showAgeVerification({
                        webviewUrl: b,
                        onComplete: p
                    });
            }, [b, p]),
            (0, r.jsxs)(a.Y0X, {
                transitionState: n,
                className: h.root,
                children: [
                    (0, r.jsxs)(a.hzk, {
                        className: h.content,
                        children: [
                            (0, r.jsxs)('div', {
                                className: h.header,
                                children: [
                                    (0, r.jsx)(a.X6q, {
                                        variant: 'heading-xl/bold',
                                        children: x.NW.string(x.t['9SDLnp'])
                                    }),
                                    (0, r.jsx)(a.X6q, {
                                        variant: 'heading-md/normal',
                                        color: 'header-secondary',
                                        children: x.NW.string(x.t['yvx///'])
                                    })
                                ]
                            }),
                            (0, r.jsx)('div', {
                                className: h.listContent,
                                children: (0, r.jsx)('div', {
                                    className: h.table,
                                    children: m.map((e, t) => {
                                        let { title: n, description: i } = e;
                                        return (0, r.jsx)(
                                            s.ZP,
                                            {
                                                title: n,
                                                description: i,
                                                index: t,
                                                listType: 'numbered',
                                                titleVariant: 'text-md/medium'
                                            },
                                            t
                                        );
                                    })
                                })
                            }),
                            (0, r.jsxs)('div', {
                                className: h.anotherOption,
                                children: [
                                    (0, r.jsx)(a.Text, {
                                        variant: 'text-sm/semibold',
                                        className: h.optionEyebrow,
                                        color: 'header-secondary',
                                        children: x.NW.string(x.t.WPwp1d)
                                    }),
                                    (0, r.jsx)('div', {
                                        className: h.table,
                                        children: (0, r.jsx)(s.ZP, {
                                            title: x.NW.string(x.t.N9WJMD),
                                            description: x.NW.string(x.t['NHq38/']),
                                            buttonText: x.NW.string(x.t['9iy4lJ']),
                                            buttonColor: a.zxk.Colors.PRIMARY,
                                            titleVariant: 'text-md/medium',
                                            onButtonPress: () => window.open(f.sQ.AGE_VERIFICATION_LINK, '_blank')
                                        })
                                    }),
                                    (0, r.jsx)('div', {
                                        className: h.learnMore,
                                        children: (0, r.jsx)(a.X6q, {
                                            variant: 'heading-sm/medium',
                                            color: 'text-secondary',
                                            children: x.NW.format(x.t.ZbWsOD, { learnMoreLink: f.sQ.LEARN_MORE_UU_APPEAL_LINK })
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    (0, r.jsxs)(a.mzw, {
                        className: h.footer,
                        children: [
                            (0, r.jsx)(a.zxk, {
                                onClick: d.FN,
                                submitting: g,
                                children: x.NW.string(x.t['54b8V1'])
                            }),
                            (0, r.jsx)(a.zxk, {
                                color: a.zxk.Colors.TRANSPARENT,
                                look: a.zxk.Looks.BLANK,
                                onClick: N,
                                className: h.cancelButton,
                                children: x.NW.string(x.t.dKacJy)
                            })
                        ]
                    })
                ]
            })
        );
    };
