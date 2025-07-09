(r.d(t, { default: () => o }), r(388685));
var n = r(255367),
    a = r(73800),
    i = r(481060),
    s = r(388032),
    l = r(910282);
function o(e) {
    let { onConfirm: t, onClose: r, validationText: o, errorText: c, header: d, className: x, cancelText: u, confirmText: h, instructionText: p, transitionState: m, children: j } = e,
        [f, b] = a.useState(''),
        [C, g] = a.useState(null),
        v =
            a.Children.count(j) > 0
                ? (0, n.jsx)(i.Zbd, {
                      type: i.Zbd.Types.WARNING,
                      className: l.card,
                      children: (0, n.jsx)(i.Text, {
                          color: 'currentColor',
                          variant: 'text-md/normal',
                          children: j
                      })
                  })
                : null;
    return (0, n.jsx)(i.Y0X, {
        transitionState: m,
        className: x,
        parentComponent: 'TextEntryConfirm',
        children: (0, n.jsxs)('form', {
            onSubmit: function (e) {
                if ((e.preventDefault(), f.toLowerCase() !== o.toLowerCase())) return void g(c);
                (null == t || t(), r());
            },
            children: [
                (0, n.jsx)(i.xBx, {
                    separator: !1,
                    children: (0, n.jsx)(i.X6q, {
                        variant: 'heading-lg/semibold',
                        children: d
                    })
                }),
                (0, n.jsxs)(i.hzk, {
                    children: [
                        v,
                        (0, n.jsxs)(i.xJW, {
                            title: p,
                            className: l.spacing,
                            children: [
                                (0, n.jsx)(i.oil, {
                                    id: 'text-entry-confirm',
                                    type: 'text',
                                    value: f,
                                    autoComplete: 'off',
                                    onChange: b,
                                    autoFocus: !0
                                }),
                                null != C && '' !== C
                                    ? (0, n.jsx)(i.Text, {
                                          color: 'text-danger',
                                          variant: 'text-xs/normal',
                                          className: l.error,
                                          children: C
                                      })
                                    : null
                            ]
                        })
                    ]
                }),
                (0, n.jsx)(i.mzw, {
                    children: (0, n.jsxs)(i.hE2, {
                        direction: 'horizontal-reverse',
                        children: [
                            (0, n.jsx)(i.zxk, {
                                variant: 'critical-primary',
                                text: null != h ? h : s.intl.string(s.t['cY+Ooa']),
                                type: 'submit'
                            }),
                            (0, n.jsx)(i.zxk, {
                                variant: 'secondary',
                                text: null != u ? u : s.intl.string(s.t['ETE/oK']),
                                onClick: r
                            })
                        ]
                    })
                })
            ]
        })
    });
}
