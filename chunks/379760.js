r.d(t, { Z: () => d });
var n = r(255367);
r(73800);
var s = r(755721),
    i = r(481060),
    l = r(600164),
    o = r(7557),
    a = r(388905),
    c = r(388032),
    u = r(621198),
    h = r(20493);
function d(e) {
    let { title: t, subtitle: r, error: d, onSubmit: p, onCancel: m } = e;
    return (0, n.jsxs)(l.Z, {
        direction: l.Z.Direction.VERTICAL,
        children: [
            (0, n.jsx)(a.Dx, {
                className: h.marginBottom8,
                children: t
            }),
            (0, n.jsx)(a.DK, {
                className: u.subTitle,
                children: r
            }),
            (0, n.jsxs)('div', {
                children: [
                    (0, n.jsx)(o.Z, {
                        inputClassName: u.codeInput,
                        onSubmit: p
                    }),
                    null != d
                        ? (0, n.jsx)(i.Text, {
                              className: u.error,
                              variant: 'text-sm/normal',
                              children: d
                          })
                        : null
                ]
            }),
            null != m &&
                (0, n.jsx)(s.zx, {
                    className: u.button,
                    onClick: m,
                    color: s.zx.Colors.PRIMARY,
                    children: c.intl.string(c.t['ETE/oK'])
                })
        ]
    });
}
