t.d(n, { Z: () => p }), t(47120);
var i = t(200651),
    s = t(192379),
    a = t(120356),
    l = t.n(a),
    r = t(442837),
    o = t(481060),
    c = t(570140),
    d = t(600164),
    x = t(236289),
    m = t(788080),
    N = t(613734),
    u = t(800530),
    h = t(388032),
    _ = t(473787),
    C = t(91463);
function p(e) {
    let { className: n, isDsaEligible: t = !1, onClose: a, onNext: p, onBack: g } = e,
        j = (0, N.U0)(),
        I = (0, r.e7)([x.Z], () => x.Z.getFreeTextAppealReason()),
        [k, E] = s.useState(''),
        [T, f] = s.useState(!1);
    s.useEffect(() => {
        E(null != I ? I : ''), f(j === u.bK.SOMETHING_ELSE);
    }, [I, j, t]);
    let S = (e) => {
            f(e === u.bK.SOMETHING_ELSE),
                e !== u.bK.SOMETHING_ELSE &&
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
        v = u.RY.map((e) => ({
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
                        children: h.NW.string(h.t['C5q+pa'])
                    }),
                    (0, i.jsx)(o.Text, {
                        className: C.subtitle,
                        color: 'header-secondary',
                        variant: 'text-md/normal',
                        children: h.NW.string(h.t.VEcRh4)
                    }),
                    null != a &&
                        (0, i.jsx)(o.olH, {
                            className: C.closeButton,
                            onClick: a
                        })
                ]
            }),
            (0, i.jsxs)(o.hzk, {
                className: l()(_.modalContent, n),
                paddingFix: !1,
                children: [
                    (0, i.jsx)(o.FXm, {
                        radioPosition: 'right',
                        radioItemClassName: C.radioItem,
                        size: o.FXm.Sizes.NOT_SET,
                        value: j,
                        options: v,
                        onChange: (e) => {
                            let { value: n } = e;
                            return S(n);
                        }
                    }),
                    t &&
                        T &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)(o.Kx8, {
                                    rows: 4,
                                    maxLength: 1024,
                                    placeholder: h.NW.string(h.t.bQrZIC),
                                    value: k,
                                    onChange: E,
                                    autoFocus: !0
                                }),
                                (0, i.jsx)(o.Text, {
                                    variant: 'text-sm/normal',
                                    color: 'header-muted',
                                    children: h.NW.string(h.t.xfNY3N)
                                })
                            ]
                        }),
                    (0, i.jsx)(o.Text, {
                        variant: 'text-sm/normal',
                        className: _.disclaimer,
                        children: h.NW.format(h.t['8k9GCQ'], {})
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
                        children: h.NW.string(h.t.PDTjLC)
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
                        children: h.NW.string(h.t['13/7kZ'])
                    })
                ]
            })
        ]
    });
}
