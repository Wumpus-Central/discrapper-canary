(n.d(t, { default: () => i }), n(388685));
var r = n(255367),
    o = n(73800),
    l = n(481060),
    s = n(388032),
    a = n(910282);
function i(e) {
    let { onConfirm: t, onClose: n, validationText: i, errorText: c, header: x, className: d, cancelText: u, confirmText: h, instructionText: p, transitionState: m, children: j } = e,
        [k, C] = o.useState(''),
        [f, b] = o.useState(null),
        g =
            o.Children.count(j) > 0
                ? (0, r.jsx)(l.Zbd, {
                      type: l.Zbd.Types.WARNING,
                      className: a.card,
                      children: (0, r.jsx)(l.Text, {
                          color: 'currentColor',
                          variant: 'text-md/normal',
                          children: j
                      })
                  })
                : null;
    return (0, r.jsx)(l.Y0X, {
        transitionState: m,
        className: d,
        parentComponent: 'TextEntryConfirm',
        children: (0, r.jsxs)('form', {
            onSubmit: function (e) {
                if ((e.preventDefault(), k.toLowerCase() !== i.toLowerCase())) return void b(c);
                (null == t || t(), n());
            },
            children: [
                (0, r.jsx)(l.xBx, {
                    separator: !1,
                    children: (0, r.jsx)(l.X6q, {
                        variant: 'heading-lg/semibold',
                        children: x
                    })
                }),
                (0, r.jsxs)(l.hzk, {
                    children: [
                        g,
                        (0, r.jsxs)(l.xJW, {
                            title: p,
                            className: a.spacing,
                            children: [
                                (0, r.jsx)(l.oil, {
                                    id: 'text-entry-confirm',
                                    type: 'text',
                                    value: k,
                                    autoComplete: 'off',
                                    onChange: C,
                                    autoFocus: !0
                                }),
                                null != f && '' !== f
                                    ? (0, r.jsx)(l.Text, {
                                          color: 'text-danger',
                                          variant: 'text-xs/normal',
                                          className: a.error,
                                          children: f
                                      })
                                    : null
                            ]
                        })
                    ]
                }),
                (0, r.jsxs)(l.mzw, {
                    children: [
                        (0, r.jsx)(l.zxk, {
                            type: 'submit',
                            color: l.zxk.Colors.RED,
                            children: null != h ? h : s.intl.string(s.t['cY+Ooa'])
                        }),
                        (0, r.jsx)(l.zxk, {
                            onClick: n,
                            look: l.zxk.Looks.LINK,
                            color: l.zxk.Colors.PRIMARY,
                            children: null != u ? u : s.intl.string(s.t['ETE/oK'])
                        })
                    ]
                })
            ]
        })
    });
}
