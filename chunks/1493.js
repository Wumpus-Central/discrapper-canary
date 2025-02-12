r.d(n, { default: () => o }), r(47120);
var t = r(200651),
    a = r(192379),
    s = r(481060),
    l = r(388032),
    i = r(428303);
function o(e) {
    let { onConfirm: n, onClose: r, validationText: o, errorText: c, header: x, className: d, cancelText: u, confirmText: h, instructionText: p, transitionState: m, children: g } = e,
        [j, k] = a.useState(''),
        [b, f] = a.useState(null),
        C =
            a.Children.count(g) > 0
                ? (0, t.jsx)(s.Zbd, {
                      type: s.Zbd.Types.WARNING,
                      className: i.card,
                      children: (0, t.jsx)(s.Text, {
                          className: i.warning,
                          variant: 'text-md/normal',
                          children: g
                      })
                  })
                : null;
    return (0, t.jsx)(s.Y0X, {
        transitionState: m,
        className: d,
        children: (0, t.jsxs)('form', {
            onSubmit: function (e) {
                if ((e.preventDefault(), j.toLowerCase() !== o.toLowerCase())) {
                    f(c);
                    return;
                }
                null == n || n(), r();
            },
            children: [
                (0, t.jsx)(s.xBx, {
                    separator: !1,
                    children: (0, t.jsx)(s.X6q, {
                        variant: 'heading-lg/semibold',
                        children: x
                    })
                }),
                (0, t.jsxs)(s.hzk, {
                    children: [
                        C,
                        (0, t.jsxs)(s.xJW, {
                            title: p,
                            className: i.spacing,
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
                                          className: i.error,
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
                            children: null != h ? h : l.intl.string(l.t['cY+Ooa'])
                        }),
                        (0, t.jsx)(s.zxk, {
                            onClick: r,
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
