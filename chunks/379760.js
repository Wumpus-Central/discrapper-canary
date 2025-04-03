r.d(t, { Z: () => d });
var n = r(200651);
r(192379);
var s = r(481060),
    i = r(600164),
    a = r(7557),
    l = r(388905),
    o = r(388032),
    c = r(621198),
    u = r(20493);
function d(e) {
    let { title: t, subtitle: r, error: d, onSubmit: h, onCancel: p } = e;
    return (0, n.jsxs)(i.Z, {
        direction: i.Z.Direction.VERTICAL,
        children: [
            (0, n.jsx)(l.Dx, {
                className: u.marginBottom8,
                children: t
            }),
            (0, n.jsx)(l.DK, {
                className: c.subTitle,
                children: r
            }),
            (0, n.jsxs)('div', {
                children: [
                    (0, n.jsx)(a.Z, {
                        inputClassName: c.codeInput,
                        onSubmit: h
                    }),
                    null != d
                        ? (0, n.jsx)(s.Text, {
                              className: c.error,
                              variant: 'text-sm/normal',
                              children: d
                          })
                        : null
                ]
            }),
            null != p &&
                (0, n.jsx)(s.zxk, {
                    className: c.button,
                    onClick: p,
                    color: s.zxk.Colors.PRIMARY,
                    children: o.NW.string(o.t['ETE/oK'])
                })
        ]
    });
}
