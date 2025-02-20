r.d(e, { default: () => p }), r(266796);
var a = r(200651);
r(192379);
var n = r(120356),
    s = r.n(n),
    i = r(481060),
    o = r(923928),
    c = r(600164),
    l = r(388032),
    m = r(265992),
    d = r(337667);
let p = (t) => {
    let { onClose: e, transitionState: r, showHideSuppressWarning: n = !1 } = t;
    return (0, a.jsx)(i.Y0X, {
        transitionState: r,
        className: m.container,
        'aria-label': l.NW.string(l.t['4Y2AS0']),
        children: (0, a.jsxs)('form', {
            onSubmit: (t) => {
                null == t || t.preventDefault(), o.Z.clearSuppressWarning(), null == e || e();
            },
            className: m.form,
            children: [
                (0, a.jsxs)(i.hzk, {
                    className: m.modalContent,
                    children: [
                        (0, a.jsx)('img', {
                            src: d,
                            alt: '',
                            className: m.hero
                        }),
                        (0, a.jsx)(i.Text, {
                            className: m.title,
                            color: 'header-primary',
                            variant: 'text-md/semibold',
                            children: l.NW.string(l.t.sDvH0d)
                        }),
                        (0, a.jsx)(i.Text, {
                            className: m.description,
                            color: 'header-secondary',
                            variant: 'text-sm/normal',
                            children: l.NW.string(l.t['CLpr//'])
                        })
                    ]
                }),
                (0, a.jsxs)(i.mzw, {
                    justify: c.Z.Justify.BETWEEN,
                    wrap: c.Z.Wrap.WRAP,
                    children: [
                        (0, a.jsx)(i.zxk, {
                            type: 'submit',
                            size: i.zxk.Sizes.LARGE,
                            className: s()(m.primaryButton, m.gutter),
                            autoFocus: !0,
                            children: l.NW.string(l.t['NX+WJC'])
                        }),
                        n &&
                            (0, a.jsx)(i.P3F, {
                                onClick: () => o.Z.clearSuppressWarning(!0),
                                className: m.minorContainer,
                                children: (0, a.jsx)(i.Text, {
                                    className: m.minorAction,
                                    variant: 'text-xs/normal',
                                    children: l.NW.string(l.t['5E9SBw'])
                                })
                            })
                    ]
                })
            ]
        })
    });
};
