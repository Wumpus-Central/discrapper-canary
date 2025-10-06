r.d(t, { Z: () => h });
var n = r(951288);
r(647438);
var s = r(755721),
    i = r(481060),
    o = r(600164),
    a = r(7557),
    l = r(388905),
    c = r(388032),
    u = r(158017),
    d = r(197571);
function h(e) {
    let { title: t, subtitle: r, error: h, onSubmit: p, onCancel: f } = e;
    return (0, n.jsxs)(o.Z, {
        direction: o.Z.Direction.VERTICAL,
        children: [
            (0, n.jsx)(l.Dx, {
                className: d.marginBottom8,
                children: t,
            }),
            (0, n.jsx)(l.DK, {
                className: u.subTitle,
                children: r,
            }),
            (0, n.jsxs)("div", {
                children: [
                    (0, n.jsx)(a.Z, {
                        inputClassName: u.codeInput,
                        onSubmit: p,
                    }),
                    null != h
                        ? (0, n.jsx)(i.Text, {
                              className: u.error,
                              variant: "text-sm/normal",
                              children: h,
                          })
                        : null,
                ],
            }),
            null != f &&
                (0, n.jsx)(s.zx, {
                    className: u.button,
                    onClick: f,
                    color: s.zx.Colors.PRIMARY,
                    children: c.intl.string(c.t["ETE/oK"]),
                }),
        ],
    });
}
