t.d(n, { Z: () => N }), t(47120);
var i = t(200651),
    s = t(192379),
    l = t(442837),
    a = t(481060),
    r = t(570140),
    o = t(600164),
    c = t(103879),
    d = t(236289),
    x = t(788080),
    m = t(613734),
    u = t(981631),
    h = t(388032),
    _ = t(174808),
    C = t(213597);
function N(e) {
    let { className: n, isDsaEligible: t, onClose: N, onNext: p, onBack: g } = e,
        j = (0, l.e7)([d.Z], () => d.Z.getAppealClassificationId()),
        { classification: I } = (0, m.YG)(null != j ? j : u.lds),
        k = (0, x.c7)(null == I ? void 0 : I.description),
        E = (0, l.e7)([d.Z], () => d.Z.getIsSubmitting()),
        T = (0, l.e7)([d.Z], () => d.Z.getAppealSignal()),
        v = (0, l.e7)([d.Z], () => d.Z.getFreeTextAppealReason()),
        [f, S] = s.useState(!1),
        [A, L] = s.useState(''),
        Z = s.useCallback((e) => {
            r.Z.dispatch({
                type: 'SAFETY_HUB_APPEAL_SIGNAL_CUSTOM_INPUT_CHANGE',
                userInput: e
            });
        }, []),
        b = s.useCallback(async () => {
            if (null !== j)
                try {
                    L(''), await c.uR(j, T, v), null == p || p();
                } catch (n) {
                    var e;
                    L((0, x.Zs)(null === (e = n.body) || void 0 === e ? void 0 : e.code));
                }
        }, [j, T, v, p]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)(a.xBx, {
                direction: o.Z.Direction.VERTICAL,
                className: C.header,
                separator: !1,
                children: [
                    (0, i.jsx)(a.X6q, {
                        className: C.title,
                        variant: 'heading-xl/semibold',
                        children: h.intl.string(h.t['C5q+pa'])
                    }),
                    (0, i.jsx)(a.Text, {
                        className: C.subtitle,
                        color: 'header-secondary',
                        variant: 'text-md/normal',
                        children: h.intl.string(h.t['G2g/g4'])
                    }),
                    null != N &&
                        (0, i.jsx)(a.olH, {
                            className: C.closeButton,
                            onClick: N
                        })
                ]
            }),
            (0, i.jsxs)(a.hzk, {
                className: n,
                paddingFix: !1,
                children: [
                    (0, i.jsx)('ul', {
                        className: _.listContainer,
                        children: [(0, x.ox)(T), v]
                            .filter((e) => e.length > 0)
                            .map((e, n) =>
                                (0, i.jsx)(
                                    'li',
                                    {
                                        className: _.listItem,
                                        children: (0, i.jsx)(a.Text, {
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
                            className: _.anchorContainer,
                            children: (0, i.jsx)(a.eee, {
                                onClick: () => S((e) => !e),
                                children: (0, i.jsx)(a.X6q, {
                                    variant: 'heading-md/normal',
                                    color: 'text-link',
                                    children: v.length > 0 ? h.intl.string(h.t.tnE3bW) : h.intl.string(h.t.uoQFIi)
                                })
                            })
                        }),
                    f &&
                        t &&
                        (0, i.jsx)('div', {
                            className: _.inputContainer,
                            children: (0, i.jsx)(a.Kx8, {
                                value: v,
                                onChange: Z
                            })
                        }),
                    (0, i.jsx)('div', {
                        className: C.policyContainer,
                        children: (0, i.jsx)(a.Text, {
                            variant: 'text-md/semibold',
                            children: k
                        })
                    }),
                    (0, i.jsx)(a.Text, {
                        variant: 'text-xs/medium',
                        color: 'header-secondary',
                        className: _.footerText,
                        children: h.intl.string(h.t.d6qgY2)
                    })
                ]
            }),
            (0, i.jsxs)(a.mzw, {
                direction: o.Z.Direction.VERTICAL,
                children: [
                    '' !== A &&
                        (0, i.jsx)(a.Text, {
                            className: _.errorText,
                            variant: 'text-lg/normal',
                            color: 'text-danger',
                            children: A
                        }),
                    (0, i.jsxs)('div', {
                        className: _.buttonContainer,
                        children: [
                            (0, i.jsx)(a.zxk, {
                                look: a.zxk.Looks.LINK,
                                color: a.zxk.Colors.PRIMARY,
                                onClick: g,
                                disabled: E,
                                children: h.intl.string(h.t['13/7kZ'])
                            }),
                            (0, i.jsx)(a.zxk, {
                                onClick: b,
                                color: a.zxk.Colors.RED,
                                submitting: E,
                                children: h.intl.string(h.t.geKm7u)
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
