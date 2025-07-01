(e.d(n, { default: () => b }), e(953529));
var o = e(255367),
    i = e(73800),
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
            p = (0, r.e7)([x.Z], () => x.Z.getIsLoadingAgeVerification()),
            j = i.useCallback(() => {
                (n(), c.Z.close());
            }, [n]),
            N = i.useCallback(() => {
                (c.Z.success(), j(), c.Z.start_verification_check());
            }, [j]);
        return (
            i.useEffect(() => {
                '' !== _ &&
                    s.Z.showAgeVerification({
                        webviewUrl: _,
                        onComplete: N,
                        useV1: !0
                    });
            }, [_, N]),
            (0, o.jsxs)(l.Y0X, {
                transitionState: e,
                className: f.root,
                parentComponent: 'AutomatedUnderageAppealModal',
                children: [
                    (0, o.jsxs)(l.hzk, {
                        className: f.content,
                        children: [
                            (0, o.jsxs)('div', {
                                className: f.header,
                                children: [
                                    (0, o.jsx)(l.X6q, {
                                        variant: 'heading-xl/bold',
                                        children: m.intl.string(m.t['9SDLnp'])
                                    }),
                                    (0, o.jsx)(l.X6q, {
                                        variant: 'heading-md/normal',
                                        color: 'header-secondary',
                                        children: m.intl.string(m.t['yvx///'])
                                    })
                                ]
                            }),
                            (0, o.jsx)('div', {
                                className: f.listContent,
                                children: (0, o.jsx)('div', {
                                    className: f.table,
                                    children: h.map((t, n) => {
                                        let { title: e, description: i } = t;
                                        return (0, o.jsx)(
                                            a.ZP,
                                            {
                                                title: e,
                                                description: i,
                                                index: n,
                                                listType: 'numbered',
                                                titleVariant: 'text-md/medium'
                                            },
                                            n
                                        );
                                    })
                                })
                            }),
                            (0, o.jsxs)('div', {
                                className: f.anotherOption,
                                children: [
                                    (0, o.jsx)(l.Text, {
                                        variant: 'text-sm/semibold',
                                        className: f.optionEyebrow,
                                        color: 'header-secondary',
                                        children: m.intl.string(m.t.WPwp1d)
                                    }),
                                    (0, o.jsx)('div', {
                                        className: f.table,
                                        children: (0, o.jsx)(a.ZP, {
                                            title: m.intl.string(m.t.N9WJMD),
                                            description: m.intl.string(m.t['NHq38/']),
                                            buttonText: m.intl.string(m.t['9iy4lJ']),
                                            buttonColor: l.zxk.Colors.PRIMARY,
                                            titleVariant: 'text-md/medium',
                                            onButtonPress: () => window.open(u.sQ.AGE_VERIFICATION_LINK, '_blank')
                                        })
                                    }),
                                    (0, o.jsx)('div', {
                                        className: f.learnMore,
                                        children: (0, o.jsx)(l.X6q, {
                                            variant: 'heading-sm/medium',
                                            color: 'text-secondary',
                                            children: m.intl.format(m.t.ZbWsOD, { learnMoreLink: u.sQ.LEARN_MORE_UU_APPEAL_LINK })
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    (0, o.jsxs)(l.mzw, {
                        className: f.footer,
                        children: [
                            (0, o.jsx)(l.zxk, {
                                onClick: () => (0, d.FN)(b),
                                submitting: p,
                                children: m.intl.string(m.t['54b8V1'])
                            }),
                            (0, o.jsx)(l.zxk, {
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
