s.d(t, { Z: () => u });
var n = s(200651);
s(192379);
var r = s(481060),
    i = s(600164),
    l = s(7557),
    a = s(388905),
    o = s(388032),
    c = s(988750),
    d = s(232186);
function u(e) {
    let { title: t, subtitle: s, error: u, onSubmit: h, onCancel: m } = e;
    return (0, n.jsxs)(i.Z, {
        direction: i.Z.Direction.VERTICAL,
        children: [
            (0, n.jsx)(a.Dx, {
                className: d.marginBottom8,
                children: t
            }),
            (0, n.jsx)(a.DK, {
                className: c.subTitle,
                children: s
            }),
            (0, n.jsxs)('div', {
                children: [
                    (0, n.jsx)(l.Z, {
                        inputClassName: c.codeInput,
                        onSubmit: h
                    }),
                    null != u
                        ? (0, n.jsx)(r.Text, {
                              className: c.error,
                              variant: 'text-sm/normal',
                              children: u
                          })
                        : null
                ]
            }),
            null != m &&
                (0, n.jsx)(r.zxk, {
                    className: c.button,
                    onClick: m,
                    color: r.zxk.Colors.PRIMARY,
                    children: o.intl.string(o.t['ETE/oK'])
                })
        ]
    });
}
