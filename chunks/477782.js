n.d(t, { default: () => d }), n(388685);
var i = n(255367),
    s = n(73800),
    a = n(481060),
    l = n(313201),
    o = n(117984),
    r = n(388032),
    c = n(788428);
function d(e) {
    let { onClose: t, transitionState: n } = e,
        d = (0, l.Dt)(),
        [h, u] = s.useState('');
    return (0, i.jsx)('form', {
        onSubmit: function (e) {
            e.preventDefault(), (0, o.CM)(h), t();
        },
        children: (0, i.jsxs)(a.Y0X, {
            transitionState: n,
            'aria-labelledby': d,
            parentComponent: 'AddFavoriteCategoryModal',
            children: [
                (0, i.jsxs)(a.hzk, {
                    children: [
                        (0, i.jsx)(a.X6q, {
                            id: d,
                            className: c.header,
                            variant: 'heading-xl/semibold',
                            children: r.intl.string(r.t['ISN+ND'])
                        }),
                        (0, i.jsx)(a.olH, {
                            onClick: t,
                            className: c.closeButton
                        }),
                        (0, i.jsx)(a.xJW, {
                            title: r.intl.string(r.t.OCAkGB),
                            className: c.name,
                            children: (0, i.jsx)(a.oil, {
                                value: h,
                                onChange: u,
                                maxLength: 100,
                                placeholder: r.intl.string(r.t.eTVbt7),
                                className: c.__invalid_inputWrapper,
                                autoFocus: !0
                            })
                        })
                    ]
                }),
                (0, i.jsxs)(a.mzw, {
                    children: [
                        (0, i.jsx)(a.zxk, {
                            type: 'submit',
                            disabled: '' === h,
                            children: r.intl.string(r.t['ISN+ND'])
                        }),
                        (0, i.jsx)(a.zxk, {
                            onClick: t,
                            look: a.zxk.Looks.LINK,
                            color: a.zxk.Colors.PRIMARY,
                            children: r.intl.string(r.t['ETE/oK'])
                        })
                    ]
                })
            ]
        })
    });
}
