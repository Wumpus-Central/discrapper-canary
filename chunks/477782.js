(n.d(t, { default: () => d }), n(388685));
var i = n(255367),
    a = n(73800),
    s = n(481060),
    r = n(313201),
    l = n(117984),
    o = n(388032),
    c = n(788428);
function d(e) {
    let { onClose: t, transitionState: n } = e,
        d = (0, r.Dt)(),
        [h, u] = a.useState('');
    return (0, i.jsx)('form', {
        onSubmit: function (e) {
            (e.preventDefault(), (0, l.CM)(h), t());
        },
        children: (0, i.jsxs)(s.Y0X, {
            transitionState: n,
            'aria-labelledby': d,
            parentComponent: 'AddFavoriteCategoryModal',
            children: [
                (0, i.jsxs)(s.hzk, {
                    children: [
                        (0, i.jsx)(s.X6q, {
                            id: d,
                            className: c.header,
                            variant: 'heading-xl/semibold',
                            children: o.intl.string(o.t['ISN+ND'])
                        }),
                        (0, i.jsx)(s.olH, {
                            onClick: t,
                            className: c.closeButton
                        }),
                        (0, i.jsx)(s.xJW, {
                            title: o.intl.string(o.t.OCAkGB),
                            className: c.name,
                            children: (0, i.jsx)(s.oil, {
                                value: h,
                                onChange: u,
                                maxLength: 100,
                                placeholder: o.intl.string(o.t.eTVbt7),
                                className: c.__invalid_inputWrapper,
                                autoFocus: !0
                            })
                        })
                    ]
                }),
                (0, i.jsx)(s.mzw, {
                    children: (0, i.jsxs)(s.hE2, {
                        direction: 'horizontal-reverse',
                        children: [
                            (0, i.jsx)(s.zxk, {
                                variant: 'primary',
                                text: o.intl.string(o.t['ISN+ND']),
                                type: 'submit',
                                disabled: '' === h
                            }),
                            (0, i.jsx)(s.zxk, {
                                variant: 'secondary',
                                text: o.intl.string(o.t['ETE/oK']),
                                onClick: t
                            })
                        ]
                    })
                })
            ]
        })
    });
}
