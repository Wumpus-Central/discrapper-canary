s.d(t, { default: () => d }), s(47120);
var n = s(200651),
    i = s(192379),
    a = s(481060),
    l = s(313201),
    o = s(117984),
    r = s(388032),
    c = s(788428);
function d(e) {
    let { onClose: t, transitionState: s } = e,
        d = (0, l.Dt)(),
        [h, u] = i.useState('');
    return (0, n.jsx)('form', {
        onSubmit: function (e) {
            e.preventDefault(), (0, o.CM)(h), t();
        },
        children: (0, n.jsxs)(a.Y0X, {
            transitionState: s,
            'aria-labelledby': d,
            children: [
                (0, n.jsxs)(a.hzk, {
                    children: [
                        (0, n.jsx)(a.X6q, {
                            id: d,
                            className: c.header,
                            variant: 'heading-xl/semibold',
                            children: r.NW.string(r.t['ISN+ND'])
                        }),
                        (0, n.jsx)(a.olH, {
                            onClick: t,
                            className: c.closeButton
                        }),
                        (0, n.jsx)(a.xJW, {
                            title: r.NW.string(r.t.OCAkGB),
                            className: c.name,
                            children: (0, n.jsx)(a.oil, {
                                value: h,
                                onChange: u,
                                maxLength: 100,
                                placeholder: r.NW.string(r.t.eTVbt7),
                                className: c.__invalid_inputWrapper,
                                autoFocus: !0
                            })
                        })
                    ]
                }),
                (0, n.jsxs)(a.mzw, {
                    children: [
                        (0, n.jsx)(a.zxk, {
                            type: 'submit',
                            disabled: '' === h,
                            children: r.NW.string(r.t['ISN+ND'])
                        }),
                        (0, n.jsx)(a.zxk, {
                            onClick: t,
                            look: a.zxk.Looks.LINK,
                            color: a.zxk.Colors.PRIMARY,
                            children: r.NW.string(r.t['ETE/oK'])
                        })
                    ]
                })
            ]
        })
    });
}
