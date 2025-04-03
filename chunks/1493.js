r.d(n, { default: () => i }), r(47120);
var t = r(200651),
    a = r(192379),
    s = r(481060),
    l = r(388032),
    o = r(910282);
function i(e) {
    let { onConfirm: n, onClose: r, validationText: i, errorText: c, header: d, className: x, cancelText: u, confirmText: h, instructionText: p, transitionState: m, children: g } = e,
        [j, k] = a.useState(''),
        [b, f] = a.useState(null),
        C =
            a.Children.count(g) > 0
                ? (0, t.jsx)(s.Zbd, {
                      type: s.Zbd.Types.WARNING,
                      className: o.card,
                      children: (0, t.jsx)(s.Text, {
                          className: o.warning,
                          variant: 'text-md/normal',
                          children: g
                      })
                  })
                : null;
    return (0, t.jsx)(s.Y0X, {
        transitionState: m,
        className: x,
        children: (0, t.jsxs)('form', {
            onSubmit: function (e) {
                if ((e.preventDefault(), j.toLowerCase() !== i.toLowerCase())) return void f(c);
                null == n || n(), r();
            },
            children: [
                (0, t.jsx)(s.xBx, {
                    separator: !1,
                    children: (0, t.jsx)(s.X6q, {
                        variant: 'heading-lg/semibold',
                        children: d
                    })
                }),
                (0, t.jsxs)(s.hzk, {
                    children: [
                        C,
                        (0, t.jsxs)(s.xJW, {
                            title: p,
                            className: o.spacing,
                            children: [
                                (0, t.jsx)(s.oil, {
                                    id: 'text-entry-confirm',
                                    type: 'text',
                                    value: j,
                                    autoComplete: 'off',
                                    onChange: k,
                                    autoFocus: !0
                                }),
                                null != b && '' !== b
                                    ? (0, t.jsx)(s.Text, {
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
                (0, t.jsxs)(s.mzw, {
                    children: [
                        (0, t.jsx)(s.zxk, {
                            type: 'submit',
                            color: s.zxk.Colors.RED,
                            children: null != h ? h : l.NW.string(l.t['cY+Ooa'])
                        }),
                        (0, t.jsx)(s.zxk, {
                            onClick: r,
                            look: s.zxk.Looks.LINK,
                            color: s.zxk.Colors.PRIMARY,
                            children: null != u ? u : l.NW.string(l.t['ETE/oK'])
                        })
                    ]
                })
            ]
        })
    });
}
