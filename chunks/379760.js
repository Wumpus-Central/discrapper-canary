n.d(t, { Z: () => h });
var r = n(255367);
n(73800);
var s = n(755721),
    i = n(481060),
    l = n(600164),
    a = n(7557),
    o = n(388905),
    c = n(388032),
    u = n(621198),
    d = n(20493);
function h(e) {
    let { title: t, subtitle: n, error: h, onSubmit: p, onCancel: m } = e;
    return (0, r.jsxs)(l.Z, {
        direction: l.Z.Direction.VERTICAL,
        children: [
            (0, r.jsx)(o.Dx, {
                className: d.marginBottom8,
                children: t
            }),
            (0, r.jsx)(o.DK, {
                className: u.subTitle,
                children: n
            }),
            (0, r.jsxs)('div', {
                children: [
                    (0, r.jsx)(a.Z, {
                        inputClassName: u.codeInput,
                        onSubmit: p
                    }),
                    null != h
                        ? (0, r.jsx)(i.Text, {
                              className: u.error,
                              variant: 'text-sm/normal',
                              children: h
                          })
                        : null
                ]
            }),
            null != m &&
                (0, r.jsx)(s.zx, {
                    className: u.button,
                    onClick: m,
                    color: s.zx.Colors.PRIMARY,
                    children: c.intl.string(c.t['ETE/oK'])
                })
        ]
    });
}
