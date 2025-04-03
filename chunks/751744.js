n.d(e, { default: () => b }), n(266796);
var o = n(200651),
    i = n(192379),
    r = n(442837),
    s = n(481060),
    l = n(168107),
    a = n(138201),
    c = n(331692),
    d = n(103879),
    x = n(236289),
    u = n(800530),
    m = n(388032),
    f = n(822566);
let h = [
        {
            title: m.NW.string(m.t['1+E7LC']),
            description: m.NW.string(m.t.BXiat7)
        },
        {
            title: m.NW.string(m.t.iMQXtL),
            description: m.NW.string(m.t.oQ0vws)
        },
        {
            title: m.NW.string(m.t['oY/z1d']),
            description: m.NW.string(m.t.wtj02d)
        }
    ],
    b = function (t) {
        let { onClose: e, transitionState: n, classificationId: b } = t,
            N = (0, r.e7)([x.Z], () => x.Z.getAgeVerificationWebviewUrl()),
            _ = (0, r.e7)([x.Z], () => x.Z.getIsLoadingAgeVerification()),
            j = i.useCallback(() => {
                e(), c.Z.close();
            }, [e]),
            p = i.useCallback(() => {
                c.Z.success(), j(), c.Z.start_verification_check();
            }, [j]);
        return (
            i.useEffect(() => {
                '' !== N &&
                    l.Z.showAgeVerification({
                        webviewUrl: N,
                        onComplete: p,
                        useV1: !0
                    });
            }, [N, p]),
            (0, o.jsxs)(s.Y0X, {
                transitionState: n,
                className: f.root,
                children: [
                    (0, o.jsxs)(s.hzk, {
                        className: f.content,
                        children: [
                            (0, o.jsxs)('div', {
                                className: f.header,
                                children: [
                                    (0, o.jsx)(s.X6q, {
                                        variant: 'heading-xl/bold',
                                        children: m.NW.string(m.t['9SDLnp'])
                                    }),
                                    (0, o.jsx)(s.X6q, {
                                        variant: 'heading-md/normal',
                                        color: 'header-secondary',
                                        children: m.NW.string(m.t['yvx///'])
                                    })
                                ]
                            }),
                            (0, o.jsx)('div', {
                                className: f.listContent,
                                children: (0, o.jsx)('div', {
                                    className: f.table,
                                    children: h.map((t, e) => {
                                        let { title: n, description: i } = t;
                                        return (0, o.jsx)(
                                            a.ZP,
                                            {
                                                title: n,
                                                description: i,
                                                index: e,
                                                listType: 'numbered',
                                                titleVariant: 'text-md/medium'
                                            },
                                            e
                                        );
                                    })
                                })
                            }),
                            (0, o.jsxs)('div', {
                                className: f.anotherOption,
                                children: [
                                    (0, o.jsx)(s.Text, {
                                        variant: 'text-sm/semibold',
                                        className: f.optionEyebrow,
                                        color: 'header-secondary',
                                        children: m.NW.string(m.t.WPwp1d)
                                    }),
                                    (0, o.jsx)('div', {
                                        className: f.table,
                                        children: (0, o.jsx)(a.ZP, {
                                            title: m.NW.string(m.t.N9WJMD),
                                            description: m.NW.string(m.t['NHq38/']),
                                            buttonText: m.NW.string(m.t['9iy4lJ']),
                                            buttonColor: s.zxk.Colors.PRIMARY,
                                            titleVariant: 'text-md/medium',
                                            onButtonPress: () => window.open(u.sQ.AGE_VERIFICATION_LINK, '_blank')
                                        })
                                    }),
                                    (0, o.jsx)('div', {
                                        className: f.learnMore,
                                        children: (0, o.jsx)(s.X6q, {
                                            variant: 'heading-sm/medium',
                                            color: 'text-secondary',
                                            children: m.NW.format(m.t.ZbWsOD, { learnMoreLink: u.sQ.LEARN_MORE_UU_APPEAL_LINK })
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    (0, o.jsxs)(s.mzw, {
                        className: f.footer,
                        children: [
                            (0, o.jsx)(s.zxk, {
                                onClick: () => (0, d.FN)(b),
                                submitting: _,
                                children: m.NW.string(m.t['54b8V1'])
                            }),
                            (0, o.jsx)(s.zxk, {
                                color: s.zxk.Colors.TRANSPARENT,
                                look: s.zxk.Looks.BLANK,
                                onClick: j,
                                className: f.cancelButton,
                                children: m.NW.string(m.t.dKacJy)
                            })
                        ]
                    })
                ]
            })
        );
    };
