(e.d(n, { default: () => j }), e(953529));
var i = e(255367),
    o = e(73800),
    r = e(442837),
    l = e(755721),
    s = e(481060),
    a = e(168107),
    c = e(138201),
    d = e(331692),
    x = e(103879),
    u = e(236289),
    m = e(800530),
    h = e(388032),
    b = e(822566);
let f = [
        {
            title: h.intl.string(h.t['1+E7LC']),
            description: h.intl.string(h.t.BXiat7)
        },
        {
            title: h.intl.string(h.t.iMQXtL),
            description: h.intl.string(h.t.oQ0vws)
        },
        {
            title: h.intl.string(h.t['oY/z1d']),
            description: h.intl.string(h.t.wtj02d)
        }
    ],
    j = function (t) {
        let { onClose: n, transitionState: e, classificationId: j } = t,
            _ = (0, r.e7)([u.Z], () => u.Z.getAgeVerificationWebviewUrl()),
            v = (0, r.e7)([u.Z], () => u.Z.getIsLoadingAgeVerification()),
            N = o.useCallback(() => {
                (n(), d.Z.close());
            }, [n]),
            p = o.useCallback(() => {
                (d.Z.success(), N(), d.Z.start_verification_check());
            }, [N]);
        return (
            o.useEffect(() => {
                '' !== _ &&
                    a.Z.showAgeVerification({
                        webviewUrl: _,
                        onComplete: p,
                        useV1: !0
                    });
            }, [_, p]),
            (0, i.jsxs)(s.Y0X, {
                transitionState: e,
                className: b.root,
                parentComponent: 'AutomatedUnderageAppealModal',
                children: [
                    (0, i.jsxs)(s.hzk, {
                        className: b.content,
                        children: [
                            (0, i.jsxs)('div', {
                                className: b.header,
                                children: [
                                    (0, i.jsx)(s.X6q, {
                                        variant: 'heading-xl/bold',
                                        children: h.intl.string(h.t['9SDLnp'])
                                    }),
                                    (0, i.jsx)(s.X6q, {
                                        variant: 'heading-md/normal',
                                        color: 'header-secondary',
                                        children: h.intl.string(h.t['yvx///'])
                                    })
                                ]
                            }),
                            (0, i.jsx)('div', {
                                className: b.listContent,
                                children: (0, i.jsx)('div', {
                                    className: b.table,
                                    children: f.map((t, n) => {
                                        let { title: e, description: o } = t;
                                        return (0, i.jsx)(
                                            c.JZ,
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
                                className: b.anotherOption,
                                children: [
                                    (0, i.jsx)(s.Text, {
                                        variant: 'text-sm/semibold',
                                        className: b.optionEyebrow,
                                        color: 'header-secondary',
                                        children: h.intl.string(h.t.WPwp1d)
                                    }),
                                    (0, i.jsx)('div', {
                                        className: b.table,
                                        children: (0, i.jsx)(c.ZP, {
                                            title: h.intl.string(h.t.N9WJMD),
                                            description: h.intl.string(h.t['NHq38/']),
                                            buttonText: h.intl.string(h.t['9iy4lJ']),
                                            buttonColor: l.zx.Colors.PRIMARY,
                                            titleVariant: 'text-md/medium',
                                            onButtonPress: () => window.open(m.sQ.AGE_VERIFICATION_LINK, '_blank')
                                        })
                                    }),
                                    (0, i.jsx)('div', {
                                        className: b.learnMore,
                                        children: (0, i.jsx)(s.X6q, {
                                            variant: 'heading-sm/medium',
                                            color: 'text-secondary',
                                            children: h.intl.format(h.t.ZbWsOD, { learnMoreLink: m.sQ.LEARN_MORE_UU_APPEAL_LINK })
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    (0, i.jsxs)(s.mzw, {
                        className: b.footer,
                        children: [
                            (0, i.jsx)(s.zxk, {
                                variant: 'primary',
                                text: h.intl.string(h.t['54b8V1']),
                                onClick: () => (0, x.FN)(j),
                                loading: v
                            }),
                            (0, i.jsx)(l.zx, {
                                color: l.zx.Colors.TRANSPARENT,
                                look: l.zx.Looks.BLANK,
                                onClick: N,
                                className: b.cancelButton,
                                children: h.intl.string(h.t.dKacJy)
                            })
                        ]
                    })
                ]
            })
        );
    };
