(t.d(n, { Z: () => N }), t(388685));
var i = t(255367),
    s = t(73800),
    l = t(120356),
    a = t.n(l),
    r = t(442837),
    o = t(481060),
    c = t(570140),
    d = t(600164),
    x = t(236289),
    m = t(788080),
    u = t(613734),
    _ = t(800530),
    h = t(388032),
    C = t(473787),
    p = t(91463);
function N(e) {
    let { className: n, isDsaEligible: t = !1, onClose: l, onNext: N, onBack: g } = e,
        j = (0, u.U0)(),
        I = (0, r.e7)([x.Z], () => x.Z.getFreeTextAppealReason()),
        [k, E] = s.useState(''),
        [T, f] = s.useState(!1);
    s.useEffect(() => {
        (E(null != I ? I : ''), f(j === _.bK.SOMETHING_ELSE));
    }, [I, j, t]);
    let A = (e) => {
            (f(e === _.bK.SOMETHING_ELSE),
                e !== _.bK.SOMETHING_ELSE &&
                    (E(''),
                    c.Z.dispatch({
                        type: 'SAFETY_HUB_APPEAL_SIGNAL_CUSTOM_INPUT_CHANGE',
                        userInput: ''
                    })),
                c.Z.dispatch({
                    type: 'SAFETY_HUB_APPEAL_SIGNAL_SELECT',
                    signal: e
                }));
        },
        S = _.RY.map((e) => ({
            value: e,
            name: (0, m.ox)(e)
        }));
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)(o.xBx, {
                direction: d.Z.Direction.VERTICAL,
                className: p.header,
                separator: !1,
                children: [
                    (0, i.jsx)(o.X6q, {
                        className: p.title,
                        variant: 'heading-xl/semibold',
                        children: h.intl.string(h.t['C5q+pa'])
                    }),
                    (0, i.jsx)(o.Text, {
                        className: p.subtitle,
                        color: 'header-secondary',
                        variant: 'text-md/normal',
                        children: h.intl.string(h.t.VEcRh4)
                    }),
                    null != l &&
                        (0, i.jsx)(o.olH, {
                            className: p.closeButton,
                            onClick: l
                        })
                ]
            }),
            (0, i.jsxs)(o.hzk, {
                className: a()(C.modalContent, n),
                paddingFix: !1,
                children: [
                    (0, i.jsx)(o.FXm, {
                        radioPosition: 'right',
                        radioItemClassName: p.radioItem,
                        size: o.FXm.Sizes.NOT_SET,
                        value: j,
                        options: S,
                        onChange: (e) => {
                            let { value: n } = e;
                            return A(n);
                        }
                    }),
                    t &&
                        T &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)(o.Kx8, {
                                    rows: 4,
                                    maxLength: 1024,
                                    placeholder: h.intl.string(h.t.bQrZIC),
                                    value: k,
                                    onChange: E,
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
                        className: C.disclaimer,
                        children: h.intl.format(h.t['8k9GCQ'], {})
                    })
                ]
            }),
            (0, i.jsxs)(o.mzw, {
                children: [
                    (0, i.jsx)(o.zxk, {
                        onClick: () => {
                            (c.Z.dispatch({
                                type: 'SAFETY_HUB_APPEAL_SIGNAL_CUSTOM_INPUT_CHANGE',
                                userInput: k
                            }),
                                null == N || N());
                        },
                        color: o.zxk.Colors.BRAND,
                        children: h.intl.string(h.t.PDTjLC)
                    }),
                    (0, i.jsx)(o.zxk, {
                        onClick: () => {
                            (c.Z.dispatch({
                                type: 'SAFETY_HUB_APPEAL_SIGNAL_CUSTOM_INPUT_CHANGE',
                                userInput: k
                            }),
                                null == g || g());
                        },
                        color: o.zxk.Colors.PRIMARY,
                        look: o.zxk.Looks.LINK,
                        children: h.intl.string(h.t['13/7kZ'])
                    })
                ]
            })
        ]
    });
}
