(n.d(t, { default: () => h }), n(388685));
var a = n(255367),
    i = n(73800),
    s = n(755721),
    r = n(481060),
    l = n(313201),
    o = n(117984),
    c = n(388032),
    d = n(788428);
function h(e) {
    let { onClose: t, transitionState: n } = e,
        h = (0, l.Dt)(),
        [u, x] = i.useState('');
    return (0, a.jsx)('form', {
        onSubmit: function (e) {
            (e.preventDefault(), (0, o.CM)(u), t());
        },
        children: (0, a.jsxs)(r.Y0X, {
            transitionState: n,
            'aria-labelledby': h,
            parentComponent: 'AddFavoriteCategoryModal',
            children: [
                (0, a.jsxs)(r.hzk, {
                    children: [
                        (0, a.jsx)(r.X6q, {
                            id: h,
                            className: d.header,
                            variant: 'heading-xl/semibold',
                            children: c.intl.string(c.t['ISN+ND'])
                        }),
                        (0, a.jsx)(r.olH, {
                            onClick: t,
                            className: d.closeButton
                        }),
                        (0, a.jsx)(r.xJW, {
                            title: c.intl.string(c.t.OCAkGB),
                            className: d.name,
                            children: (0, a.jsx)(s.Is, {
                                value: u,
                                onChange: x,
                                maxLength: 100,
                                placeholder: c.intl.string(c.t.eTVbt7),
                                className: d.__invalid_inputWrapper,
                                autoFocus: !0
                            })
                        })
                    ]
                }),
                (0, a.jsx)(r.mzw, {
                    children: (0, a.jsxs)(r.hE2, {
                        direction: 'horizontal-reverse',
                        children: [
                            (0, a.jsx)(r.zxk, {
                                variant: 'primary',
                                text: c.intl.string(c.t['ISN+ND']),
                                type: 'submit',
                                disabled: '' === u
                            }),
                            (0, a.jsx)(r.zxk, {
                                variant: 'secondary',
                                text: c.intl.string(c.t['ETE/oK']),
                                onClick: t
                            })
                        ]
                    })
                })
            ]
        })
    });
}
