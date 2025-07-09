(t.d(n, { default: () => c }), t(388685));
var i = t(255367),
    a = t(73800),
    o = t(481060),
    r = t(313201),
    l = t(117984),
    s = t(388032),
    d = t(788428);
function c(e) {
    let { onClose: n, transitionState: t } = e,
        c = (0, r.Dt)(),
        [f, u] = a.useState('');
    return (0, i.jsx)('form', {
        onSubmit: function (e) {
            (e.preventDefault(), (0, l.CM)(f), n());
        },
        children: (0, i.jsxs)(o.Y0X, {
            transitionState: t,
            'aria-labelledby': c,
            parentComponent: 'AddFavoriteCategoryModal',
            children: [
                (0, i.jsxs)(o.hzk, {
                    children: [
                        (0, i.jsx)(o.X6q, {
                            id: c,
                            className: d.header,
                            variant: 'heading-xl/semibold',
                            children: s.intl.string(s.t['ISN+ND'])
                        }),
                        (0, i.jsx)(o.olH, {
                            onClick: n,
                            className: d.closeButton
                        }),
                        (0, i.jsx)(o.xJW, {
                            title: s.intl.string(s.t.OCAkGB),
                            className: d.name,
                            children: (0, i.jsx)(o.oil, {
                                value: f,
                                onChange: u,
                                maxLength: 100,
                                placeholder: s.intl.string(s.t.eTVbt7),
                                className: d.__invalid_inputWrapper,
                                autoFocus: !0
                            })
                        })
                    ]
                }),
                (0, i.jsx)(o.mzw, {
                    children: (0, i.jsxs)(o.hE2, {
                        direction: 'horizontal-reverse',
                        children: [
                            (0, i.jsx)(o.zxk, {
                                variant: 'primary',
                                text: s.intl.string(s.t['ISN+ND']),
                                type: 'submit',
                                disabled: '' === f
                            }),
                            (0, i.jsx)(o.zxk, {
                                variant: 'secondary',
                                text: s.intl.string(s.t['ETE/oK']),
                                onClick: n
                            })
                        ]
                    })
                })
            ]
        })
    });
}
