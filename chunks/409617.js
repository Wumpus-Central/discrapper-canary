t.d(n, {
    Z: function () {
        return g;
    }
}),
    t(47120);
var i = t(200651),
    l = t(192379),
    a = t(120356),
    s = t.n(a),
    o = t(442837),
    r = t(481060),
    c = t(570140),
    d = t(600164),
    u = t(236289),
    x = t(788080),
    m = t(613734),
    C = t(800530),
    h = t(388032),
    N = t(681242),
    p = t(816742);
function g(e) {
    let { className: n, isDsaEligible: t = !1, onClose: a, onNext: g, onBack: _ } = e,
        j = (0, m.U0)(),
        b = (0, o.e7)([u.Z], () => u.Z.getFreeTextAppealReason()),
        [I, E] = l.useState(''),
        [T, S] = l.useState(!1);
    l.useEffect(() => {
        E(null != b ? b : ''), S(j === C.bK.SOMETHING_ELSE);
    }, [b, j, t]);
    let v = (e) => {
            S(e === C.bK.SOMETHING_ELSE),
                e !== C.bK.SOMETHING_ELSE &&
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
        f = C.RY.map((e) => ({
            value: e,
            name: (0, x.ox)(e)
        }));
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)(r.ModalHeader, {
                direction: d.Z.Direction.VERTICAL,
                className: p.header,
                separator: !1,
                children: [
                    (0, i.jsx)(r.Heading, {
                        className: p.title,
                        variant: 'heading-xl/semibold',
                        children: h.intl.string(h.t['C5q+pa'])
                    }),
                    (0, i.jsx)(r.Text, {
                        className: p.subtitle,
                        color: 'header-secondary',
                        variant: 'text-md/normal',
                        children: h.intl.string(h.t.VEcRh4)
                    }),
                    null != a &&
                        (0, i.jsx)(r.ModalCloseButton, {
                            className: p.closeButton,
                            onClick: a
                        })
                ]
            }),
            (0, i.jsxs)(r.ModalContent, {
                className: s()(N.modalContent, n),
                paddingFix: !1,
                children: [
                    (0, i.jsx)(r.RadioGroup, {
                        radioPosition: 'right',
                        radioItemClassName: p.radioItem,
                        size: r.RadioGroup.Sizes.NOT_SET,
                        value: j,
                        options: f,
                        onChange: (e) => {
                            let { value: n } = e;
                            return v(n);
                        }
                    }),
                    t &&
                        T &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)(r.TextArea, {
                                    rows: 4,
                                    maxLength: 1024,
                                    placeholder: h.intl.string(h.t.bQrZIC),
                                    value: I,
                                    onChange: E,
                                    autoFocus: !0
                                }),
                                (0, i.jsx)(r.Text, {
                                    variant: 'text-sm/normal',
                                    color: 'header-muted',
                                    children: h.intl.string(h.t.xfNY3N)
                                })
                            ]
                        }),
                    (0, i.jsx)(r.Text, {
                        variant: 'text-sm/normal',
                        className: N.disclaimer,
                        children: h.intl.format(h.t['8k9GCQ'], {})
                    })
                ]
            }),
            (0, i.jsxs)(r.ModalFooter, {
                children: [
                    (0, i.jsx)(r.Button, {
                        onClick: () => {
                            c.Z.dispatch({
                                type: 'SAFETY_HUB_APPEAL_SIGNAL_CUSTOM_INPUT_CHANGE',
                                userInput: I
                            }),
                                null == g || g();
                        },
                        color: r.Button.Colors.BRAND,
                        children: h.intl.string(h.t.PDTjLC)
                    }),
                    (0, i.jsx)(r.Button, {
                        onClick: () => {
                            c.Z.dispatch({
                                type: 'SAFETY_HUB_APPEAL_SIGNAL_CUSTOM_INPUT_CHANGE',
                                userInput: I
                            }),
                                null == _ || _();
                        },
                        color: r.Button.Colors.PRIMARY,
                        look: r.Button.Looks.LINK,
                        children: h.intl.string(h.t['13/7kZ'])
                    })
                ]
            })
        ]
    });
}
