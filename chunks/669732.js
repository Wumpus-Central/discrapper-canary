n.d(e, { default: () => p }), n(953529);
var r = n(255367);
n(73800);
var a = n(120356),
    i = n.n(a),
    s = n(481060),
    o = n(923928),
    l = n(600164),
    c = n(388032),
    m = n(804315),
    d = n(337667);
let p = (t) => {
    let { onClose: e, transitionState: n, showHideSuppressWarning: a = !1 } = t;
    return (0, r.jsx)(s.Y0X, {
        transitionState: n,
        className: m.container,
        'aria-label': c.intl.string(c.t['4Y2AS0']),
        children: (0, r.jsxs)('form', {
            onSubmit: (t) => {
                null == t || t.preventDefault(), o.Z.clearSuppressWarning(), null == e || e();
            },
            className: m.form,
            children: [
                (0, r.jsxs)(s.hzk, {
                    className: m.modalContent,
                    children: [
                        (0, r.jsx)('img', {
                            src: d,
                            alt: '',
                            className: m.hero
                        }),
                        (0, r.jsx)(s.Text, {
                            className: m.title,
                            color: 'header-primary',
                            variant: 'text-md/semibold',
                            children: c.intl.string(c.t.sDvH0d)
                        }),
                        (0, r.jsx)(s.Text, {
                            className: m.description,
                            color: 'header-secondary',
                            variant: 'text-sm/normal',
                            children: c.intl.string(c.t['CLpr//'])
                        })
                    ]
                }),
                (0, r.jsxs)(s.mzw, {
                    justify: l.Z.Justify.BETWEEN,
                    wrap: l.Z.Wrap.WRAP,
                    children: [
                        (0, r.jsx)(s.zxk, {
                            type: 'submit',
                            size: s.zxk.Sizes.LARGE,
                            className: i()(m.primaryButton, m.gutter),
                            autoFocus: !0,
                            children: c.intl.string(c.t['NX+WJC'])
                        }),
                        a &&
                            (0, r.jsx)(s.P3F, {
                                onClick: () => o.Z.clearSuppressWarning(!0),
                                className: m.minorContainer,
                                children: (0, r.jsx)(s.Text, {
                                    className: m.minorAction,
                                    variant: 'text-xs/normal',
                                    children: c.intl.string(c.t['5E9SBw'])
                                })
                            })
                    ]
                })
            ]
        })
    });
};
