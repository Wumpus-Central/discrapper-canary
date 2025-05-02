t.d(n, { default: () => f }), t(388685);
var i = t(200651),
    a = t(192379),
    o = t(481060),
    l = t(313201),
    s = t(117984),
    r = t(388032),
    c = t(788428);
function f(e) {
    let { onClose: n, transitionState: t } = e,
        f = (0, l.Dt)(),
        [d, u] = a.useState('');
    return (0, i.jsx)('form', {
        onSubmit: function (e) {
            e.preventDefault(), (0, s.CM)(d), n();
        },
        children: (0, i.jsxs)(o.Y0X, {
            transitionState: t,
            'aria-labelledby': f,
            children: [
                (0, i.jsxs)(o.hzk, {
                    children: [
                        (0, i.jsx)(o.X6q, {
                            id: f,
                            className: c.header,
                            variant: 'heading-xl/semibold',
                            children: r.intl.string(r.t['ISN+ND'])
                        }),
                        (0, i.jsx)(o.olH, {
                            onClick: n,
                            className: c.closeButton
                        }),
                        (0, i.jsx)(o.xJW, {
                            title: r.intl.string(r.t.OCAkGB),
                            className: c.name,
                            children: (0, i.jsx)(o.oil, {
                                value: d,
                                onChange: u,
                                maxLength: 100,
                                placeholder: r.intl.string(r.t.eTVbt7),
                                className: c.__invalid_inputWrapper,
                                autoFocus: !0
                            })
                        })
                    ]
                }),
                (0, i.jsxs)(o.mzw, {
                    children: [
                        (0, i.jsx)(o.zxk, {
                            type: 'submit',
                            disabled: '' === d,
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
