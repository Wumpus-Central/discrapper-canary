n.d(e, {
    Z: function () {
        return d;
    }
});
var s = n(200651);
n(192379);
var r = n(481060),
    i = n(600164),
    l = n(7557),
    a = n(388905),
    o = n(388032),
    c = n(988750),
    u = n(232186);
function d(t) {
    let { title: e, subtitle: n, error: d, onSubmit: h, onCancel: p } = t;
    return (0, s.jsxs)(i.Z, {
        direction: i.Z.Direction.VERTICAL,
        children: [
            (0, s.jsx)(a.Dx, {
                className: u.marginBottom8,
                children: e
            }),
            (0, s.jsx)(a.DK, {
                className: c.subTitle,
                children: n
            }),
            (0, s.jsxs)('div', {
                children: [
                    (0, s.jsx)(l.Z, {
                        inputClassName: c.codeInput,
                        onSubmit: h
                    }),
                    null != d
                        ? (0, s.jsx)(r.Text, {
                              className: c.error,
                              variant: 'text-sm/normal',
                              children: d
                          })
                        : null
                ]
            }),
            null != p &&
                (0, s.jsx)(r.Button, {
                    className: c.button,
                    onClick: p,
                    color: r.Button.Colors.PRIMARY,
                    children: o.intl.string(o.t['ETE/oK'])
                })
        ]
    });
}
