t.d(n, { Z: () => C }), t(266796), t(47120);
var i = t(200651),
    s = t(192379),
    a = t(442837),
    l = t(481060),
    r = t(570140),
    o = t(600164),
    c = t(103879),
    d = t(236289),
    x = t(788080),
    m = t(613734),
    N = t(981631),
    u = t(388032),
    h = t(67164),
    _ = t(91463);
function C(e) {
    let { className: n, isDsaEligible: t, onClose: C, onNext: p, onBack: g } = e,
        j = (0, a.e7)([d.Z], () => d.Z.getAppealClassificationId()),
        { classification: I } = (0, m.YG)(null != j ? j : N.lds),
        k = (0, x.c7)(null == I ? void 0 : I.description),
        E = (0, a.e7)([d.Z], () => d.Z.getIsSubmitting()),
        T = (0, a.e7)([d.Z], () => d.Z.getAppealSignal()),
        f = (0, a.e7)([d.Z], () => d.Z.getFreeTextAppealReason()),
        [S, v] = s.useState(!1),
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
                    L(''), await c.uR(j, T, f), null == p || p();
                } catch (n) {
                    var e;
                    L((0, x.Zs)(null == (e = n.body) ? void 0 : e.code));
                }
        }, [j, T, f, p]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)(l.xBx, {
                direction: o.Z.Direction.VERTICAL,
                className: _.header,
                separator: !1,
                children: [
                    (0, i.jsx)(l.X6q, {
                        className: _.title,
                        variant: 'heading-xl/semibold',
                        children: u.NW.string(u.t['C5q+pa'])
                    }),
                    (0, i.jsx)(l.Text, {
                        className: _.subtitle,
                        color: 'header-secondary',
                        variant: 'text-md/normal',
                        children: u.NW.string(u.t['G2g/g4'])
                    }),
                    null != C &&
                        (0, i.jsx)(l.olH, {
                            className: _.closeButton,
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
                        children: [(0, x.ox)(T), f]
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
                                onClick: () => v((e) => !e),
                                children: (0, i.jsx)(l.X6q, {
                                    variant: 'heading-md/normal',
                                    color: 'text-link',
                                    children: f.length > 0 ? u.NW.string(u.t.tnE3bW) : u.NW.string(u.t.uoQFIi)
                                })
                            })
                        }),
                    S &&
                        t &&
                        (0, i.jsx)('div', {
                            className: h.inputContainer,
                            children: (0, i.jsx)(l.Kx8, {
                                value: f,
                                onChange: Z
                            })
                        }),
                    (0, i.jsx)('div', {
                        className: _.policyContainer,
                        children: (0, i.jsx)(l.Text, {
                            variant: 'text-md/semibold',
                            children: k
                        })
                    }),
                    (0, i.jsx)(l.Text, {
                        variant: 'text-xs/medium',
                        color: 'header-secondary',
                        className: h.footerText,
                        children: u.NW.string(u.t.d6qgY2)
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
                    (0, i.jsxs)('div', {
                        className: h.buttonContainer,
                        children: [
                            (0, i.jsx)(l.zxk, {
                                look: l.zxk.Looks.LINK,
                                color: l.zxk.Colors.PRIMARY,
                                onClick: g,
                                disabled: E,
                                children: u.NW.string(u.t['13/7kZ'])
                            }),
                            (0, i.jsx)(l.zxk, {
                                onClick: b,
                                color: l.zxk.Colors.RED,
                                submitting: E,
                                children: u.NW.string(u.t.geKm7u)
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
