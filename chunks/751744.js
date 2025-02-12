n.d(e, { default: () => b });
var i = n(200651),
    r = n(192379),
    o = n(442837),
    l = n(481060),
    a = n(191237),
    s = n(138201),
    c = n(331692),
    d = n(103879),
    u = n(236289),
    x = n(800530),
    f = n(388032),
    m = n(116739);
let h = [
        {
            title: f.intl.string(f.t['1+E7LC']),
            description: f.intl.string(f.t.BXiat7)
        },
        {
            title: f.intl.string(f.t.iMQXtL),
            description: f.intl.string(f.t.oQ0vws)
        },
        {
            title: f.intl.string(f.t['oY/z1d']),
            description: f.intl.string(f.t.wtj02d)
        }
    ],
    b = function (t) {
        let { onClose: e, transitionState: n } = t,
            b = (0, o.e7)([u.Z], () => u.Z.getAgeVerificationWebviewUrl()),
            g = (0, o.e7)([u.Z], () => u.Z.getIsLoadingAgeVerification()),
            _ = r.useCallback(() => {
                e(), c.Z.close();
            }, [e]),
            p = r.useCallback(() => {
                c.Z.success(), _(), c.Z.start_verification_check();
            }, [_]);
        return (
            r.useEffect(() => {
                '' !== b &&
                    a.Z.showAgeVerification({
                        webviewUrl: b,
                        onComplete: p
                    });
            }, [b, p]),
            (0, i.jsxs)(l.Y0X, {
                transitionState: n,
                className: m.root,
                children: [
                    (0, i.jsxs)(l.hzk, {
                        className: m.content,
                        children: [
                            (0, i.jsxs)('div', {
                                className: m.header,
                                children: [
                                    (0, i.jsx)(l.X6q, {
                                        variant: 'heading-xl/bold',
                                        children: f.intl.string(f.t['9SDLnp'])
                                    }),
                                    (0, i.jsx)(l.X6q, {
                                        variant: 'heading-md/normal',
                                        color: 'header-secondary',
                                        children: f.intl.string(f.t['yvx///'])
                                    })
                                ]
                            }),
                            (0, i.jsx)('div', {
                                className: m.listContent,
                                children: (0, i.jsx)('div', {
                                    className: m.table,
                                    children: h.map((t, e) => {
                                        let { title: n, description: r } = t;
                                        return (0, i.jsx)(
                                            s.ZP,
                                            {
                                                title: n,
                                                description: r,
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
                                    (0, i.jsx)(l.Text, {
                                        variant: 'text-sm/semibold',
                                        className: m.optionEyebrow,
                                        color: 'header-secondary',
                                        children: f.intl.string(f.t.WPwp1d)
                                    }),
                                    (0, i.jsx)('div', {
                                        className: m.table,
                                        children: (0, i.jsx)(s.ZP, {
                                            title: f.intl.string(f.t.N9WJMD),
                                            description: f.intl.string(f.t['NHq38/']),
                                            buttonText: f.intl.string(f.t['9iy4lJ']),
                                            buttonColor: l.zxk.Colors.PRIMARY,
                                            titleVariant: 'text-md/medium',
                                            onButtonPress: () => window.open(x.sQ.AGE_VERIFICATION_LINK, '_blank')
                                        })
                                    }),
                                    (0, i.jsx)('div', {
                                        className: m.learnMore,
                                        children: (0, i.jsx)(l.X6q, {
                                            variant: 'heading-sm/medium',
                                            color: 'text-secondary',
                                            children: f.intl.format(f.t.ZbWsOD, { learnMoreLink: x.sQ.LEARN_MORE_UU_APPEAL_LINK })
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    (0, i.jsxs)(l.mzw, {
                        className: m.footer,
                        children: [
                            (0, i.jsx)(l.zxk, {
                                onClick: d.FN,
                                submitting: g,
                                children: f.intl.string(f.t['54b8V1'])
                            }),
                            (0, i.jsx)(l.zxk, {
                                color: l.zxk.Colors.TRANSPARENT,
                                look: l.zxk.Looks.BLANK,
                                onClick: _,
                                className: m.cancelButton,
                                children: f.intl.string(f.t.dKacJy)
                            })
                        ]
                    })
                ]
            })
        );
    };
