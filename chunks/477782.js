(t.d(n, { default: () => f }), t(388685));
var a = t(255367),
    i = t(73800),
    o = t(755721),
    r = t(481060),
    s = t(313201),
    l = t(117984),
    d = t(388032),
    c = t(788428);
function f(e) {
    let { onClose: n, transitionState: t } = e,
        f = (0, s.Dt)(),
        [u, h] = i.useState('');
    return (0, a.jsx)('form', {
        onSubmit: function (e) {
            (e.preventDefault(), (0, l.CM)(u), n());
        },
        children: (0, a.jsxs)(r.Y0X, {
            transitionState: t,
            'aria-labelledby': f,
            parentComponent: 'AddFavoriteCategoryModal',
            children: [
                (0, a.jsxs)(r.hzk, {
                    children: [
                        (0, a.jsx)(r.X6q, {
                            id: f,
                            className: c.header,
                            variant: 'heading-xl/semibold',
                            children: d.intl.string(d.t['ISN+ND'])
                        }),
                        (0, a.jsx)(r.olH, {
                            onClick: n,
                            className: c.closeButton
                        }),
                        (0, a.jsx)(r.xJW, {
                            title: d.intl.string(d.t.OCAkGB),
                            className: c.name,
                            children: (0, a.jsx)(o.Is, {
                                value: u,
                                onChange: h,
                                maxLength: 100,
                                placeholder: d.intl.string(d.t.eTVbt7),
                                className: c.__invalid_inputWrapper,
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
                                text: d.intl.string(d.t['ISN+ND']),
                                type: 'submit',
                                disabled: '' === u
                            }),
                            (0, a.jsx)(r.zxk, {
                                variant: 'secondary',
                                text: d.intl.string(d.t['ETE/oK']),
                                onClick: n
                            })
                        ]
                    })
                })
            ]
        })
    });
}
