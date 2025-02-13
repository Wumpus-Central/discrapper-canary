n.d(e, { default: () => b });
var i = n(200651),
    o = n(192379),
    r = n(442837),
    l = n(481060),
    s = n(191237),
    a = n(138201),
    c = n(331692),
    d = n(103879),
    x = n(236289),
    u = n(800530),
    m = n(388032),
    f = n(680877);
let h = [
        {
            title: m.intl.string(m.t['1+E7LC']),
            description: m.intl.string(m.t.BXiat7)
        },
        {
            title: m.intl.string(m.t.iMQXtL),
            description: m.intl.string(m.t.oQ0vws)
        },
        {
            title: m.intl.string(m.t['oY/z1d']),
            description: m.intl.string(m.t.wtj02d)
        }
    ],
    b = function (t) {
        let { onClose: e, transitionState: n } = t,
            b = (0, r.e7)([x.Z], () => x.Z.getAgeVerificationWebviewUrl()),
            _ = (0, r.e7)([x.Z], () => x.Z.getIsLoadingAgeVerification()),
            j = o.useCallback(() => {
                e(), c.Z.close();
            }, [e]),
            p = o.useCallback(() => {
                c.Z.success(), j(), c.Z.start_verification_check();
            }, [j]);
        return (
            o.useEffect(() => {
                '' !== b &&
                    s.Z.showAgeVerification({
                        webviewUrl: b,
                        onComplete: p
                    });
            }, [b, p]),
            (0, i.jsxs)(l.Y0X, {
                transitionState: n,
                className: f.root,
                children: [
                    (0, i.jsxs)(l.hzk, {
                        className: f.content,
                        children: [
                            (0, i.jsxs)('div', {
                                className: f.header,
                                children: [
                                    (0, i.jsx)(l.X6q, {
                                        variant: 'heading-xl/bold',
                                        children: m.intl.string(m.t['9SDLnp'])
                                    }),
                                    (0, i.jsx)(l.X6q, {
                                        variant: 'heading-md/normal',
                                        color: 'header-secondary',
                                        children: m.intl.string(m.t['yvx///'])
                                    })
                                ]
                            }),
                            (0, i.jsx)('div', {
                                className: f.listContent,
                                children: (0, i.jsx)('div', {
                                    className: f.table,
                                    children: h.map((t, e) => {
                                        let { title: n, description: o } = t;
                                        return (0, i.jsx)(
                                            a.ZP,
                                            {
                                                title: n,
                                                description: o,
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
                                className: f.anotherOption,
                                children: [
                                    (0, i.jsx)(l.Text, {
                                        variant: 'text-sm/semibold',
                                        className: f.optionEyebrow,
                                        color: 'header-secondary',
                                        children: m.intl.string(m.t.WPwp1d)
                                    }),
                                    (0, i.jsx)('div', {
                                        className: f.table,
                                        children: (0, i.jsx)(a.ZP, {
                                            title: m.intl.string(m.t.N9WJMD),
                                            description: m.intl.string(m.t['NHq38/']),
                                            buttonText: m.intl.string(m.t['9iy4lJ']),
                                            buttonColor: l.zxk.Colors.PRIMARY,
                                            titleVariant: 'text-md/medium',
                                            onButtonPress: () => window.open(u.sQ.AGE_VERIFICATION_LINK, '_blank')
                                        })
                                    }),
                                    (0, i.jsx)('div', {
                                        className: f.learnMore,
                                        children: (0, i.jsx)(l.X6q, {
                                            variant: 'heading-sm/medium',
                                            color: 'text-secondary',
                                            children: m.intl.format(m.t.ZbWsOD, { learnMoreLink: u.sQ.LEARN_MORE_UU_APPEAL_LINK })
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    (0, i.jsxs)(l.mzw, {
                        className: f.footer,
                        children: [
                            (0, i.jsx)(l.zxk, {
                                onClick: d.FN,
                                submitting: _,
                                children: m.intl.string(m.t['54b8V1'])
                            }),
                            (0, i.jsx)(l.zxk, {
                                color: l.zxk.Colors.TRANSPARENT,
                                look: l.zxk.Looks.BLANK,
                                onClick: j,
                                className: f.cancelButton,
                                children: m.intl.string(m.t.dKacJy)
                            })
                        ]
                    })
                ]
            })
        );
    };
