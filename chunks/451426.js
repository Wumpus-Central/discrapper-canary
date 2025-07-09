(t.d(n, { Z: () => C }), t(953529), t(388685));
var i = t(255367),
    s = t(73800),
    a = t(442837),
    l = t(481060),
    r = t(570140),
    o = t(600164),
    c = t(103879),
    d = t(236289),
    x = t(788080),
    m = t(613734),
    u = t(981631),
    _ = t(388032),
    h = t(67164),
    p = t(91463);
function C(e) {
    let { className: n, isDsaEligible: t, onClose: C, onNext: N, onBack: g } = e,
        j = (0, a.e7)([d.Z], () => d.Z.getAppealClassificationId()),
        { classification: I } = (0, m.YG)(null != j ? j : u.lds),
        E = (0, x.c7)(null == I ? void 0 : I.description),
        T = (0, a.e7)([d.Z], () => d.Z.getIsSubmitting()),
        v = (0, a.e7)([d.Z], () => d.Z.getAppealSignal()),
        f = (0, a.e7)([d.Z], () => d.Z.getFreeTextAppealReason()),
        [S, k] = s.useState(!1),
        [A, Z] = s.useState(''),
        L = s.useCallback((e) => {
            r.Z.dispatch({
                type: 'SAFETY_HUB_APPEAL_SIGNAL_CUSTOM_INPUT_CHANGE',
                userInput: e
            });
        }, []),
        b = s.useCallback(async () => {
            if (null !== j)
                try {
                    (Z(''), await c.uR(j, v, f), null == N || N());
                } catch (n) {
                    var e;
                    Z((0, x.Zs)(null == (e = n.body) ? void 0 : e.code));
                }
        }, [j, v, f, N]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)(l.xBx, {
                direction: o.Z.Direction.VERTICAL,
                className: p.header,
                separator: !1,
                children: [
                    (0, i.jsx)(l.X6q, {
                        className: p.title,
                        variant: 'heading-xl/semibold',
                        children: _.intl.string(_.t['C5q+pa'])
                    }),
                    (0, i.jsx)(l.Text, {
                        className: p.subtitle,
                        color: 'header-secondary',
                        variant: 'text-md/normal',
                        children: _.intl.string(_.t['G2g/g4'])
                    }),
                    null != C &&
                        (0, i.jsx)(l.olH, {
                            className: p.closeButton,
                            onClick: C
                        })
                ]
            }),
            (0, i.jsxs)(l.hzk, {
                className: n,
                paddingFix: !1,
                children: [
                    (0, i.jsx)('ul', {
                        className: h.listContainer,
                        children: [(0, x.ox)(v), f]
                            .filter((e) => e.length > 0)
                            .map((e, n) =>
                                (0, i.jsx)(
                                    'li',
                                    {
                                        className: h.listItem,
                                        children: (0, i.jsx)(l.Text, {
                                            tag: 'span',
                                            variant: 'text-md/normal',
                                            children: e
                                        })
                                    },
                                    n
                                )
                            )
                    }),
                    t &&
                        (0, i.jsx)('div', {
                            className: h.anchorContainer,
                            children: (0, i.jsx)(l.eee, {
                                onClick: () => k((e) => !e),
                                children: (0, i.jsx)(l.X6q, {
                                    variant: 'heading-md/normal',
                                    color: 'text-link',
                                    children: f.length > 0 ? _.intl.string(_.t.tnE3bW) : _.intl.string(_.t.uoQFIi)
                                })
                            })
                        }),
                    S &&
                        t &&
                        (0, i.jsx)('div', {
                            className: h.inputContainer,
                            children: (0, i.jsx)(l.Kx8, {
                                value: f,
                                onChange: L
                            })
                        }),
                    (0, i.jsx)('div', {
                        className: p.policyContainer,
                        children: (0, i.jsx)(l.Text, {
                            variant: 'text-md/semibold',
                            children: E
                        })
                    }),
                    (0, i.jsx)(l.Text, {
                        variant: 'text-xs/medium',
                        color: 'header-secondary',
                        className: h.footerText,
                        children: _.intl.string(_.t.d6qgY2)
                    })
                ]
            }),
            (0, i.jsxs)(l.mzw, {
                direction: o.Z.Direction.VERTICAL,
                children: [
                    '' !== A &&
                        (0, i.jsx)(l.Text, {
                            className: h.errorText,
                            variant: 'text-lg/normal',
                            color: 'text-danger',
                            children: A
                        }),
                    (0, i.jsx)('div', {
                        className: h.buttonContainer,
                        children: (0, i.jsxs)(l.hE2, {
                            direction: 'horizontal-reverse',
                            children: [
                                (0, i.jsx)(l.zxk, {
                                    variant: 'secondary',
                                    text: _.intl.string(_.t['13/7kZ']),
                                    onClick: g,
                                    disabled: T
                                }),
                                (0, i.jsx)(l.zxk, {
                                    variant: 'critical-primary',
                                    text: _.intl.string(_.t.geKm7u),
                                    onClick: b,
                                    loading: T
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
}
