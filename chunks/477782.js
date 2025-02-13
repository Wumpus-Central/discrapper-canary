n.d(t, { default: () => d }), n(47120);
var s = n(200651),
    i = n(192379),
    l = n(481060),
    a = n(313201),
    o = n(117984),
    r = n(388032),
    c = n(774318);
function d(e) {
    let { onClose: t, transitionState: n } = e,
        d = (0, a.Dt)(),
        [h, u] = i.useState('');
    return (0, s.jsx)('form', {
        onSubmit: function (e) {
            e.preventDefault(), (0, o.CM)(h), t();
        },
        children: (0, s.jsxs)(l.Y0X, {
            transitionState: n,
            'aria-labelledby': d,
            children: [
                (0, s.jsxs)(l.hzk, {
                    children: [
                        (0, s.jsx)(l.X6q, {
                            id: d,
                            className: c.header,
                            variant: 'heading-xl/semibold',
                            children: r.intl.string(r.t['ISN+ND'])
                        }),
                        (0, s.jsx)(l.olH, {
                            onClick: t,
                            className: c.closeButton
                        }),
                        (0, s.jsx)(l.xJW, {
                            title: r.intl.string(r.t.OCAkGB),
                            className: c.name,
                            children: (0, s.jsx)(l.oil, {
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
                (0, s.jsxs)(l.mzw, {
                    children: [
                        (0, s.jsx)(l.zxk, {
                            type: 'submit',
                            disabled: '' === h,
                            children: r.intl.string(r.t['ISN+ND'])
                        }),
                        (0, s.jsx)(l.zxk, {
                            onClick: t,
                            look: l.zxk.Looks.LINK,
                            color: l.zxk.Colors.PRIMARY,
                            children: r.intl.string(r.t['ETE/oK'])
                        })
                    ]
                })
            ]
        })
    });
}
