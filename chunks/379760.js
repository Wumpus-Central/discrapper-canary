r.d(t, { Z: () => d });
var n = r(54381);
r(473749);
var s = r(481060),
    i = r(600164),
    a = r(7557),
    o = r(388905),
    l = r(388032),
    c = r(158017),
    u = r(197571);
function d(e) {
    let { title: t, subtitle: r, error: d, onSubmit: h, onCancel: p } = e;
    return (0, n.jsxs)(i.Z, {
        direction: i.Z.Direction.VERTICAL,
        children: [
            (0, n.jsx)(o.Dx, {
                className: u.marginBottom8,
                children: t,
            }),
            (0, n.jsx)(o.DK, {
                className: c.subTitle,
                children: r,
            }),
            (0, n.jsxs)("div", {
                children: [
                    (0, n.jsx)(a.Z, {
                        inputClassName: c.codeInput,
                        onSubmit: h,
                    }),
                    null != d
                        ? (0, n.jsx)(s.Text, {
                              className: c.error,
                              variant: "text-sm/normal",
                              children: d,
                          })
                        : null,
                ],
            }),
            null != p &&
                (0, n.jsx)("div", {
                    className: c.button,
                    children: (0, n.jsx)(s.Button, {
                        text: l.intl.string(l.t["ETE/oC"]),
                        variant: "secondary",
                        fullWidth: !0,
                        onClick: p,
                    }),
                }),
        ],
    });
}
