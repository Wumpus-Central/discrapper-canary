n.d(e, { default: () => g });
var i = n(200651),
    s = n(192379),
    r = n(442837),
    o = n(481060),
    l = n(191237),
    a = n(138201),
    c = n(331692),
    d = n(103879),
    f = n(236289),
    h = n(800530),
    x = n(388032),
    m = n(177872);
let u = [
        {
            title: x.intl.string(x.t['1+E7LC']),
            description: x.intl.string(x.t.BXiat7)
        },
        {
            title: x.intl.string(x.t.iMQXtL),
            description: x.intl.string(x.t.oQ0vws)
        },
        {
            title: x.intl.string(x.t['oY/z1d']),
            description: x.intl.string(x.t.wtj02d)
        }
    ],
    g = function (t) {
        let { onClose: e, transitionState: n } = t,
            g = (0, r.e7)([f.Z], () => f.Z.getAgeVerificationWebviewUrl()),
            p = (0, r.e7)([f.Z], () => f.Z.getIsLoadingAgeVerification()),
            b = s.useCallback(() => {
                e(), c.Z.close();
            }, [e]),
            N = s.useCallback(() => {
                c.Z.success(), b(), c.Z.start_verification_check();
            }, [b]);
        return (
            s.useEffect(() => {
                '' !== g &&
                    l.Z.showAgeVerification({
                        webviewUrl: g,
                        onComplete: N
                    });
            }, [g, N]),
            (0, i.jsxs)(o.Y0X, {
                transitionState: n,
                className: m.root,
                children: [
                    (0, i.jsxs)(o.hzk, {
                        className: m.content,
                        children: [
                            (0, i.jsxs)('div', {
                                className: m.header,
                                children: [
                                    (0, i.jsx)(o.X6q, {
                                        variant: 'heading-xl/bold',
                                        children: x.intl.string(x.t['9SDLnp'])
                                    }),
                                    (0, i.jsx)(o.X6q, {
                                        variant: 'heading-md/normal',
                                        color: 'header-secondary',
                                        children: x.intl.string(x.t['yvx///'])
                                    })
                                ]
                            }),
                            (0, i.jsx)('div', {
                                className: m.listContent,
                                children: (0, i.jsx)('div', {
                                    className: m.table,
                                    children: u.map((t, e) => {
                                        let { title: n, description: s } = t;
                                        return (0, i.jsx)(
                                            a.ZP,
                                            {
                                                title: n,
                                                description: s,
                                                index: e,
                                                listType: 'numbered',
                                                titleVariant: 'text-md/medium'
                                            },
                                            e
                                        );
                                    })
                                })
                            }),
                            (0, i.jsxs)('div', {
                                className: m.anotherOption,
                                children: [
                                    (0, i.jsx)(o.Text, {
                                        variant: 'text-sm/semibold',
                                        className: m.optionEyebrow,
                                        color: 'header-secondary',
                                        children: x.intl.string(x.t.WPwp1d)
                                    }),
                                    (0, i.jsx)('div', {
                                        className: m.table,
                                        children: (0, i.jsx)(a.ZP, {
                                            title: x.intl.string(x.t.N9WJMD),
                                            description: x.intl.string(x.t['NHq38/']),
                                            buttonText: x.intl.string(x.t['9iy4lJ']),
                                            buttonColor: o.zxk.Colors.PRIMARY,
                                            titleVariant: 'text-md/medium',
                                            onButtonPress: () => window.open(h.sQ.AGE_VERIFICATION_LINK, '_blank')
                                        })
                                    }),
                                    (0, i.jsx)('div', {
                                        className: m.learnMore,
                                        children: (0, i.jsx)(o.X6q, {
                                            variant: 'heading-sm/medium',
                                            color: 'text-secondary',
                                            children: x.intl.format(x.t.ZbWsOD, { learnMoreLink: h.sQ.LEARN_MORE_UU_APPEAL_LINK })
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    (0, i.jsxs)(o.mzw, {
                        className: m.footer,
                        children: [
                            (0, i.jsx)(o.zxk, {
                                onClick: d.FN,
                                submitting: p,
                                children: x.intl.string(x.t['54b8V1'])
                            }),
                            (0, i.jsx)(o.zxk, {
                                color: o.zxk.Colors.TRANSPARENT,
                                look: o.zxk.Looks.BLANK,
                                onClick: b,
                                className: m.cancelButton,
                                children: x.intl.string(x.t.dKacJy)
                            })
                        ]
                    })
                ]
            })
        );
    };
