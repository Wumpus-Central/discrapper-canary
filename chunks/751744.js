e.d(n, { default: () => b }), e(953529);
var i = e(200651),
    o = e(192379),
    r = e(442837),
    l = e(481060),
    s = e(168107),
    a = e(138201),
    c = e(331692),
    d = e(103879),
    x = e(236289),
    u = e(800530),
    m = e(388032),
    f = e(822566);
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
        let { onClose: n, transitionState: e, classificationId: b } = t,
            _ = (0, r.e7)([x.Z], () => x.Z.getAgeVerificationWebviewUrl()),
            j = (0, r.e7)([x.Z], () => x.Z.getIsLoadingAgeVerification()),
            N = o.useCallback(() => {
                n(), c.Z.close();
            }, [n]),
            p = o.useCallback(() => {
                c.Z.success(), N(), c.Z.start_verification_check();
            }, [N]);
        return (
            o.useEffect(() => {
                '' !== _ &&
                    s.Z.showAgeVerification({
                        webviewUrl: _,
                        onComplete: p,
                        useV1: !0
                    });
            }, [_, p]),
            (0, i.jsxs)(l.Y0X, {
                transitionState: e,
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
                                    children: h.map((t, n) => {
                                        let { title: e, description: o } = t;
                                        return (0, i.jsx)(
                                            a.ZP,
                                            {
                                                title: e,
                                                description: o,
                                                index: n,
                                                listType: 'numbered',
                                                titleVariant: 'text-md/medium'
                                            },
                                            n
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
                                onClick: () => (0, d.FN)(b),
                                submitting: j,
                                children: m.intl.string(m.t['54b8V1'])
                            }),
                            (0, i.jsx)(l.zxk, {
                                color: l.zxk.Colors.TRANSPARENT,
                                look: l.zxk.Looks.BLANK,
                                onClick: N,
                                className: f.cancelButton,
                                children: m.intl.string(m.t.dKacJy)
                            })
                        ]
                    })
                ]
            })
        );
    };
