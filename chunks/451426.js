t.d(n, {
    Z: function () {
        return p;
    }
}),
    t(47120);
var i = t(200651),
    l = t(192379),
    a = t(442837),
    s = t(481060),
    o = t(570140),
    r = t(600164),
    c = t(103879),
    d = t(236289),
    u = t(788080),
    x = t(613734),
    m = t(981631),
    C = t(388032),
    h = t(734517),
    N = t(816742);
function p(e) {
    let { className: n, isDsaEligible: t, onClose: p, onNext: g, onBack: _ } = e,
        j = (0, a.e7)([d.Z], () => d.Z.getAppealClassificationId()),
        { classification: b } = (0, x.YG)(null != j ? j : m.lds),
        I = (0, u.c7)(null == b ? void 0 : b.description),
        E = (0, a.e7)([d.Z], () => d.Z.getIsSubmitting()),
        T = (0, a.e7)([d.Z], () => d.Z.getAppealSignal()),
        S = (0, a.e7)([d.Z], () => d.Z.getFreeTextAppealReason()),
        [v, f] = l.useState(!1),
        [A, k] = l.useState(''),
        Z = l.useCallback((e) => {
            o.Z.dispatch({
                type: 'SAFETY_HUB_APPEAL_SIGNAL_CUSTOM_INPUT_CHANGE',
                userInput: e
            });
        }, []),
        L = l.useCallback(async () => {
            if (null !== j)
                try {
                    k(''), await c.uR(j, T, S), null == g || g();
                } catch (n) {
                    var e;
                    k((0, u.Zs)(null === (e = n.body) || void 0 === e ? void 0 : e.code));
                }
        }, [j, T, S, g]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)(s.ModalHeader, {
                direction: r.Z.Direction.VERTICAL,
                className: N.header,
                separator: !1,
                children: [
                    (0, i.jsx)(s.Heading, {
                        className: N.title,
                        variant: 'heading-xl/semibold',
                        children: C.intl.string(C.t['C5q+pa'])
                    }),
                    (0, i.jsx)(s.Text, {
                        className: N.subtitle,
                        color: 'header-secondary',
                        variant: 'text-md/normal',
                        children: C.intl.string(C.t['G2g/g4'])
                    }),
                    null != p &&
                        (0, i.jsx)(s.ModalCloseButton, {
                            className: N.closeButton,
                            onClick: p
                        })
                ]
            }),
            (0, i.jsxs)(s.ModalContent, {
                className: n,
                paddingFix: !1,
                children: [
                    (0, i.jsx)('ul', {
                        className: h.listContainer,
                        children: [(0, u.ox)(T), S]
                            .filter((e) => e.length > 0)
                            .map((e, n) =>
                                (0, i.jsx)(
                                    'li',
                                    {
                                        className: h.listItem,
                                        children: (0, i.jsx)(s.Text, {
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
                            children: (0, i.jsx)(s.Anchor, {
                                onClick: () => f((e) => !e),
                                children: (0, i.jsx)(s.Heading, {
                                    variant: 'heading-md/normal',
                                    color: 'text-link',
                                    children: S.length > 0 ? C.intl.string(C.t.tnE3bW) : C.intl.string(C.t.uoQFIi)
                                })
                            })
                        }),
                    v &&
                        t &&
                        (0, i.jsx)('div', {
                            className: h.inputContainer,
                            children: (0, i.jsx)(s.TextArea, {
                                value: S,
                                onChange: Z
                            })
                        }),
                    (0, i.jsx)('div', {
                        className: N.policyContainer,
                        children: (0, i.jsx)(s.Text, {
                            variant: 'text-md/semibold',
                            children: I
                        })
                    }),
                    (0, i.jsx)(s.Text, {
                        variant: 'text-xs/medium',
                        color: 'header-secondary',
                        className: h.footerText,
                        children: C.intl.string(C.t.d6qgY2)
                    })
                ]
            }),
            (0, i.jsxs)(s.ModalFooter, {
                direction: r.Z.Direction.VERTICAL,
                children: [
                    '' !== A &&
                        (0, i.jsx)(s.Text, {
                            className: h.errorText,
                            variant: 'text-lg/normal',
                            color: 'text-danger',
                            children: A
                        }),
                    (0, i.jsxs)('div', {
                        className: h.buttonContainer,
                        children: [
                            (0, i.jsx)(s.Button, {
                                look: s.Button.Looks.LINK,
                                color: s.Button.Colors.PRIMARY,
                                onClick: _,
                                disabled: E,
                                children: C.intl.string(C.t['13/7kZ'])
                            }),
                            (0, i.jsx)(s.Button, {
                                onClick: L,
                                color: s.Button.Colors.RED,
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
