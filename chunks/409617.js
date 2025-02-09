t.d(n, { Z: () => p }), t(47120);
var i = t(200651),
    s = t(192379),
    l = t(120356),
    a = t.n(l),
    r = t(442837),
    o = t(481060),
    c = t(570140),
    d = t(600164),
    x = t(236289),
    m = t(788080),
    u = t(613734),
    h = t(800530),
    _ = t(388032),
    C = t(804772),
    N = t(5517);
function p(e) {
    let { className: n, isDsaEligible: t = !1, onClose: l, onNext: p, onBack: g } = e,
        j = (0, u.U0)(),
        I = (0, r.e7)([x.Z], () => x.Z.getFreeTextAppealReason()),
        [k, E] = s.useState(''),
        [T, v] = s.useState(!1);
    s.useEffect(() => {
        E(null != I ? I : ''), v(j === h.bK.SOMETHING_ELSE);
    }, [I, j, t]);
    let f = (e) => {
            v(e === h.bK.SOMETHING_ELSE),
                e !== h.bK.SOMETHING_ELSE &&
                    (E(''),
                    c.Z.dispatch({
                        type: 'SAFETY_HUB_APPEAL_SIGNAL_CUSTOM_INPUT_CHANGE',
                        userInput: ''
                    })),
                c.Z.dispatch({
                    type: 'SAFETY_HUB_APPEAL_SIGNAL_SELECT',
                    signal: e
                });
        },
        S = h.RY.map((e) => ({
            value: e,
            name: (0, m.ox)(e)
        }));
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)(o.xBx, {
                direction: d.Z.Direction.VERTICAL,
                className: N.header,
                separator: !1,
                children: [
                    (0, i.jsx)(o.X6q, {
                        className: N.title,
                        variant: 'heading-xl/semibold',
                        children: _.intl.string(_.t['C5q+pa'])
                    }),
                    (0, i.jsx)(o.Text, {
                        className: N.subtitle,
                        color: 'header-secondary',
                        variant: 'text-md/normal',
                        children: _.intl.string(_.t.VEcRh4)
                    }),
                    null != l &&
                        (0, i.jsx)(o.olH, {
                            className: N.closeButton,
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
                        radioItemClassName: N.radioItem,
                        size: o.FXm.Sizes.NOT_SET,
                        value: j,
                        options: S,
                        onChange: (e) => {
                            let { value: n } = e;
                            return f(n);
                        }
                    }),
                    t &&
                        T &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)(o.Kx8, {
                                    rows: 4,
                                    maxLength: 1024,
                                    placeholder: _.intl.string(_.t.bQrZIC),
                                    value: k,
                                    onChange: E,
                                    autoFocus: !0
                                }),
                                (0, i.jsx)(o.Text, {
                                    variant: 'text-sm/normal',
                                    color: 'header-muted',
                                    children: _.intl.string(_.t.xfNY3N)
                                })
                            ]
                        }),
                    (0, i.jsx)(o.Text, {
                        variant: 'text-sm/normal',
                        className: C.disclaimer,
                        children: _.intl.format(_.t['8k9GCQ'], {})
                    })
                ]
            }),
            (0, i.jsxs)(o.mzw, {
                children: [
                    (0, i.jsx)(o.zxk, {
                        onClick: () => {
                            c.Z.dispatch({
                                type: 'SAFETY_HUB_APPEAL_SIGNAL_CUSTOM_INPUT_CHANGE',
                                userInput: k
                            }),
                                null == p || p();
                        },
                        color: o.zxk.Colors.BRAND,
                        children: _.intl.string(_.t.PDTjLC)
                    }),
                    (0, i.jsx)(o.zxk, {
                        onClick: () => {
                            c.Z.dispatch({
                                type: 'SAFETY_HUB_APPEAL_SIGNAL_CUSTOM_INPUT_CHANGE',
                                userInput: k
                            }),
                                null == g || g();
                        },
                        color: o.zxk.Colors.PRIMARY,
                        look: o.zxk.Looks.LINK,
                        children: _.intl.string(_.t['13/7kZ'])
                    })
                ]
            })
        ]
    });
}
