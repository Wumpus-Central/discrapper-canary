t.d(n, { default: () => i }), t(388685);
var r = t(255367),
    a = t(73800),
    s = t(481060),
    l = t(388032),
    o = t(910282);
function i(e) {
    let { onConfirm: n, onClose: t, validationText: i, errorText: c, header: x, className: d, cancelText: u, confirmText: h, instructionText: p, transitionState: m, children: g } = e,
        [j, k] = a.useState(''),
        [b, f] = a.useState(null),
        C =
            a.Children.count(g) > 0
                ? (0, r.jsx)(s.Zbd, {
                      type: s.Zbd.Types.WARNING,
                      className: o.card,
                      children: (0, r.jsx)(s.Text, {
                          className: o.warning,
                          variant: 'text-md/normal',
                          children: g
                      })
                  })
                : null;
    return (0, r.jsx)(s.Y0X, {
        transitionState: m,
        className: d,
        parentComponent: 'TextEntryConfirm',
        children: (0, r.jsxs)('form', {
            onSubmit: function (e) {
                if ((e.preventDefault(), j.toLowerCase() !== i.toLowerCase())) return void f(c);
                null == n || n(), t();
            },
            children: [
                (0, r.jsx)(s.xBx, {
                    separator: !1,
                    children: (0, r.jsx)(s.X6q, {
                        variant: 'heading-lg/semibold',
                        children: x
                    })
                }),
                (0, r.jsxs)(s.hzk, {
                    children: [
                        C,
                        (0, r.jsxs)(s.xJW, {
                            title: p,
                            className: o.spacing,
                            children: [
                                (0, r.jsx)(s.oil, {
                                    id: 'text-entry-confirm',
                                    type: 'text',
                                    value: j,
                                    autoComplete: 'off',
                                    onChange: k,
                                    autoFocus: !0
                                }),
                                null != b && '' !== b
                                    ? (0, r.jsx)(s.Text, {
                                          color: 'text-danger',
                                          variant: 'text-xs/normal',
                                          className: o.error,
                                          children: b
                                      })
                                    : null
                            ]
                        })
                    ]
                }),
                (0, r.jsxs)(s.mzw, {
                    children: [
                        (0, r.jsx)(s.zxk, {
                            type: 'submit',
                            color: s.zxk.Colors.RED,
                            children: null != h ? h : l.intl.string(l.t['cY+Ooa'])
                        }),
                        (0, r.jsx)(s.zxk, {
                            onClick: t,
                            look: s.zxk.Looks.LINK,
                            color: s.zxk.Colors.PRIMARY,
                            children: null != u ? u : l.intl.string(l.t['ETE/oK'])
                        })
                    ]
                })
            ]
        })
    });
}
