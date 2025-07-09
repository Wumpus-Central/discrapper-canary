(e.d(n, { default: () => _ }), e(953529));
var o = e(255367),
    i = e(73800),
    r = e(442837),
    l = e(755721),
    s = e(481060),
    a = e(168107),
    c = e(138201),
    d = e(331692),
    x = e(103879),
    u = e(236289),
    m = e(800530),
    f = e(388032),
    h = e(822566);
let b = [
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
    _ = function (t) {
        let { onClose: n, transitionState: e, classificationId: _ } = t,
            p = (0, r.e7)([u.Z], () => u.Z.getAgeVerificationWebviewUrl()),
            j = (0, r.e7)([u.Z], () => u.Z.getIsLoadingAgeVerification()),
            N = i.useCallback(() => {
                (n(), d.Z.close());
            }, [n]),
            v = i.useCallback(() => {
                (d.Z.success(), N(), d.Z.start_verification_check());
            }, [N]);
        return (
            i.useEffect(() => {
                '' !== p &&
                    a.Z.showAgeVerification({
                        webviewUrl: p,
                        onComplete: v,
                        useV1: !0
                    });
            }, [p, v]),
            (0, o.jsxs)(s.Y0X, {
                transitionState: e,
                className: h.root,
                parentComponent: 'AutomatedUnderageAppealModal',
                children: [
                    (0, o.jsxs)(s.hzk, {
                        className: h.content,
                        children: [
                            (0, o.jsxs)('div', {
                                className: h.header,
                                children: [
                                    (0, o.jsx)(s.X6q, {
                                        variant: 'heading-xl/bold',
                                        children: f.intl.string(f.t['9SDLnp'])
                                    }),
                                    (0, o.jsx)(s.X6q, {
                                        variant: 'heading-md/normal',
                                        color: 'header-secondary',
                                        children: f.intl.string(f.t['yvx///'])
                                    })
                                ]
                            }),
                            (0, o.jsx)('div', {
                                className: h.listContent,
                                children: (0, o.jsx)('div', {
                                    className: h.table,
                                    children: b.map((t, n) => {
                                        let { title: e, description: i } = t;
                                        return (0, o.jsx)(
                                            c.ZP,
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
                                className: h.anotherOption,
                                children: [
                                    (0, o.jsx)(s.Text, {
                                        variant: 'text-sm/semibold',
                                        className: h.optionEyebrow,
                                        color: 'header-secondary',
                                        children: f.intl.string(f.t.WPwp1d)
                                    }),
                                    (0, o.jsx)('div', {
                                        className: h.table,
                                        children: (0, o.jsx)(c.ZP, {
                                            title: f.intl.string(f.t.N9WJMD),
                                            description: f.intl.string(f.t['NHq38/']),
                                            buttonText: f.intl.string(f.t['9iy4lJ']),
                                            buttonColor: l.zx.Colors.PRIMARY,
                                            titleVariant: 'text-md/medium',
                                            onButtonPress: () => window.open(m.sQ.AGE_VERIFICATION_LINK, '_blank')
                                        })
                                    }),
                                    (0, o.jsx)('div', {
                                        className: h.learnMore,
                                        children: (0, o.jsx)(s.X6q, {
                                            variant: 'heading-sm/medium',
                                            color: 'text-secondary',
                                            children: f.intl.format(f.t.ZbWsOD, { learnMoreLink: m.sQ.LEARN_MORE_UU_APPEAL_LINK })
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    (0, o.jsxs)(s.mzw, {
                        className: h.footer,
                        children: [
                            (0, o.jsx)(s.zxk, {
                                variant: 'primary',
                                text: f.intl.string(f.t['54b8V1']),
                                onClick: () => (0, x.FN)(_),
                                loading: j
                            }),
                            (0, o.jsx)(l.zx, {
                                color: l.zx.Colors.TRANSPARENT,
                                look: l.zx.Looks.BLANK,
                                onClick: N,
                                className: h.cancelButton,
                                children: f.intl.string(f.t.dKacJy)
                            })
                        ]
                    })
                ]
            })
        );
    };
