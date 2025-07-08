(t.d(n, { default: () => c }), t(388685));
var i = t(255367),
    a = t(73800),
    o = t(481060),
    l = t(313201),
    s = t(117984),
    r = t(388032),
    d = t(788428);
function c(e) {
    let { onClose: n, transitionState: t } = e,
        c = (0, l.Dt)(),
        [f, u] = a.useState('');
    return (0, i.jsx)('form', {
        onSubmit: function (e) {
            (e.preventDefault(), (0, s.CM)(f), n());
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
                            children: r.intl.string(r.t['ISN+ND'])
                        }),
                        (0, i.jsx)(o.olH, {
                            onClick: n,
                            className: d.closeButton
                        }),
                        (0, i.jsx)(o.xJW, {
                            title: r.intl.string(r.t.OCAkGB),
                            className: d.name,
                            children: (0, i.jsx)(o.oil, {
                                value: f,
                                onChange: u,
                                maxLength: 100,
                                placeholder: r.intl.string(r.t.eTVbt7),
                                className: d.__invalid_inputWrapper,
                                autoFocus: !0
                            })
                        })
                    ]
                }),
                (0, i.jsxs)(o.mzw, {
                    children: [
                        (0, i.jsx)(o.zxk, {
                            type: 'submit',
                            disabled: '' === f,
                            children: r.intl.string(r.t['ISN+ND'])
                        }),
                        (0, i.jsx)(o.zxk, {
                            onClick: n,
                            look: o.zxk.Looks.LINK,
                            color: o.zxk.Colors.PRIMARY,
                            children: r.intl.string(r.t['ETE/oK'])
                        })
                    ]
                })
            ]
        })
    });
}
