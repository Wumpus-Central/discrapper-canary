n.d(t, { Z: () => p });
var r = n(255367);
n(73800);
var s = n(755721),
    i = n(481060),
    a = n(600164),
    l = n(7557),
    o = n(388905),
    c = n(388032),
    u = n(170533),
    d = n(881488);
function p(e) {
    let { title: t, subtitle: n, error: p, onSubmit: h, onCancel: f } = e;
    return (0, r.jsxs)(a.Z, {
        direction: a.Z.Direction.VERTICAL,
        children: [
            (0, r.jsx)(o.Dx, {
                className: d.marginBottom8,
                children: t,
            }),
            (0, r.jsx)(o.DK, {
                className: u.subTitle,
                children: n,
            }),
            (0, r.jsxs)("div", {
                children: [
                    (0, r.jsx)(l.Z, {
                        inputClassName: u.codeInput,
                        onSubmit: h,
                    }),
                    null != p
                        ? (0, r.jsx)(i.Text, {
                              className: u.error,
                              variant: "text-sm/normal",
                              children: p,
                          })
                        : null,
                ],
            }),
            null != f &&
                (0, r.jsx)(s.zx, {
                    className: u.button,
                    onClick: f,
                    color: s.zx.Colors.PRIMARY,
                    children: c.intl.string(c.t["ETE/oK"]),
                }),
        ],
    });
}
