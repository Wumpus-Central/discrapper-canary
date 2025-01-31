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
    C = t(388032),
    h = t(734517),
    _ = t(816742);
function N(e) {
    let { className: n, isDsaEligible: t, onClose: N, onNext: p, onBack: g } = e,
        j = (0, l.e7)([d.Z], () => d.Z.getAppealClassificationId()),
        { classification: I } = (0, m.YG)(null != j ? j : u.lds),
        k = (0, x.c7)(null == I ? void 0 : I.description),
        E = (0, l.e7)([d.Z], () => d.Z.getIsSubmitting()),
        T = (0, l.e7)([d.Z], () => d.Z.getAppealSignal()),
        v = (0, l.e7)([d.Z], () => d.Z.getFreeTextAppealReason()),
        [f, S] = s.useState(!1),
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
                    Z(''), await c.uR(j, T, v), null == p || p();
                } catch (n) {
                    var e;
                    Z((0, x.Zs)(null === (e = n.body) || void 0 === e ? void 0 : e.code));
                }
        }, [j, T, v, p]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)(a.xBx, {
                direction: o.Z.Direction.VERTICAL,
                className: _.header,
                separator: !1,
                children: [
                    (0, i.jsx)(a.X6q, {
                        className: _.title,
                        variant: 'heading-xl/semibold',
                        children: C.intl.string(C.t['C5q+pa'])
                    }),
                    (0, i.jsx)(a.Text, {
                        className: _.subtitle,
                        color: 'header-secondary',
                        variant: 'text-md/normal',
                        children: C.intl.string(C.t['G2g/g4'])
                    }),
                    null != N &&
                        (0, i.jsx)(a.olH, {
                            className: _.closeButton,
                            onClick: N
                        })
                ]
            }),
            (0, i.jsxs)(a.hzk, {
                className: n,
                paddingFix: !1,
                children: [
                    (0, i.jsx)('ul', {
                        className: h.listContainer,
                        children: [(0, x.ox)(T), v]
                            .filter((e) => e.length > 0)
                            .map((e, n) =>
                                (0, i.jsx)(
                                    'li',
                                    {
                                        className: h.listItem,
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
                            className: h.anchorContainer,
                            children: (0, i.jsx)(a.eee, {
                                onClick: () => S((e) => !e),
                                children: (0, i.jsx)(a.X6q, {
                                    variant: 'heading-md/normal',
                                    color: 'text-link',
                                    children: v.length > 0 ? C.intl.string(C.t.tnE3bW) : C.intl.string(C.t.uoQFIi)
                                })
                            })
                        }),
                    f &&
                        t &&
                        (0, i.jsx)('div', {
                            className: h.inputContainer,
                            children: (0, i.jsx)(a.Kx8, {
                                value: v,
                                onChange: L
                            })
                        }),
                    (0, i.jsx)('div', {
                        className: _.policyContainer,
                        children: (0, i.jsx)(a.Text, {
                            variant: 'text-md/semibold',
                            children: k
                        })
                    }),
                    (0, i.jsx)(a.Text, {
                        variant: 'text-xs/medium',
                        color: 'header-secondary',
                        className: h.footerText,
                        children: C.intl.string(C.t.d6qgY2)
                    })
                ]
            }),
            (0, i.jsxs)(a.mzw, {
                direction: o.Z.Direction.VERTICAL,
                children: [
                    '' !== A &&
                        (0, i.jsx)(a.Text, {
                            className: h.errorText,
                            variant: 'text-lg/normal',
                            color: 'text-danger',
                            children: A
                        }),
                    (0, i.jsxs)('div', {
                        className: h.buttonContainer,
                        children: [
                            (0, i.jsx)(a.zxk, {
                                look: a.zxk.Looks.LINK,
                                color: a.zxk.Colors.PRIMARY,
                                onClick: g,
                                disabled: E,
                                children: C.intl.string(C.t['13/7kZ'])
                            }),
                            (0, i.jsx)(a.zxk, {
                                onClick: b,
                                color: a.zxk.Colors.RED,
                                submitting: E,
                                children: C.intl.string(C.t.geKm7u)
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
