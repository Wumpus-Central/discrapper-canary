(t.d(n, { Z: () => N }), t(388685));
var i = t(255367),
    s = t(73800),
    a = t(120356),
    l = t.n(a),
    r = t(442837),
    o = t(481060),
    c = t(570140),
    d = t(600164),
    x = t(236289),
    m = t(788080),
    u = t(613734),
    _ = t(800530),
    h = t(388032),
    p = t(473787),
    C = t(91463);
function N(e) {
    let { className: n, isDsaEligible: t = !1, onClose: a, onNext: N, onBack: g } = e,
        j = (0, u.U0)(),
        I = (0, r.e7)([x.Z], () => x.Z.getFreeTextAppealReason()),
        [E, T] = s.useState(''),
        [v, f] = s.useState(!1);
    s.useEffect(() => {
        (T(null != I ? I : ''), f(j === _.bK.SOMETHING_ELSE));
    }, [I, j, t]);
    let S = (e) => {
            (f(e === _.bK.SOMETHING_ELSE),
                e !== _.bK.SOMETHING_ELSE &&
                    (T(''),
                    c.Z.dispatch({
                        type: 'SAFETY_HUB_APPEAL_SIGNAL_CUSTOM_INPUT_CHANGE',
                        userInput: ''
                    })),
                c.Z.dispatch({
                    type: 'SAFETY_HUB_APPEAL_SIGNAL_SELECT',
                    signal: e
                }));
        },
        k = _.RY.map((e) => ({
            value: e,
            name: (0, m.ox)(e)
        }));
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)(o.xBx, {
                direction: d.Z.Direction.VERTICAL,
                className: C.header,
                separator: !1,
                children: [
                    (0, i.jsx)(o.X6q, {
                        className: C.title,
                        variant: 'heading-xl/semibold',
                        children: h.intl.string(h.t['C5q+pa'])
                    }),
                    (0, i.jsx)(o.Text, {
                        className: C.subtitle,
                        color: 'header-secondary',
                        variant: 'text-md/normal',
                        children: h.intl.string(h.t.VEcRh4)
                    }),
                    null != a &&
                        (0, i.jsx)(o.olH, {
                            className: C.closeButton,
                            onClick: a
                        })
                ]
            }),
            (0, i.jsxs)(o.hzk, {
                className: l()(p.modalContent, n),
                paddingFix: !1,
                children: [
                    (0, i.jsx)(o.FXm, {
                        radioPosition: 'right',
                        radioItemClassName: C.radioItem,
                        size: o.FXm.Sizes.NOT_SET,
                        value: j,
                        options: k,
                        onChange: (e) => {
                            let { value: n } = e;
                            return S(n);
                        }
                    }),
                    t &&
                        v &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)(o.Kx8, {
                                    rows: 4,
                                    maxLength: 1024,
                                    placeholder: h.intl.string(h.t.bQrZIC),
                                    value: E,
                                    onChange: T,
                                    autoFocus: !0
                                }),
                                (0, i.jsx)(o.Text, {
                                    variant: 'text-sm/normal',
                                    color: 'header-muted',
                                    children: h.intl.string(h.t.xfNY3N)
                                })
                            ]
                        }),
                    (0, i.jsx)(o.Text, {
                        variant: 'text-sm/normal',
                        className: p.disclaimer,
                        children: h.intl.format(h.t['8k9GCQ'], {})
                    })
                ]
            }),
            (0, i.jsx)(o.mzw, {
                children: (0, i.jsxs)(o.hE2, {
                    direction: 'horizontal-reverse',
                    children: [
                        (0, i.jsx)(o.zxk, {
                            variant: 'primary',
                            text: h.intl.string(h.t.PDTjLC),
                            onClick: () => {
                                (c.Z.dispatch({
                                    type: 'SAFETY_HUB_APPEAL_SIGNAL_CUSTOM_INPUT_CHANGE',
                                    userInput: E
                                }),
                                    null == N || N());
                            }
                        }),
                        (0, i.jsx)(o.zxk, {
                            variant: 'secondary',
                            text: h.intl.string(h.t['13/7kZ']),
                            onClick: () => {
                                (c.Z.dispatch({
                                    type: 'SAFETY_HUB_APPEAL_SIGNAL_CUSTOM_INPUT_CHANGE',
                                    userInput: E
                                }),
                                    null == g || g());
                            }
                        })
                    ]
                })
            })
        ]
    });
}
