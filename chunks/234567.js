n.d(t, {
    A: () => c,
});
var r = n(627968);
n(64700);
var l = n(503698),
    i = n.n(l),
    a = n(397927),
    s = n(569989),
    o = n(630487);

function c(e) {
    let {
        className: t,
        roleColor: n,
        roleName: l,
        hasRemoveIcon: c = !1,
        onClick: u,
        disabled: d = !1,
        verified: f = !1,
    } = e;
    return (0, r.jsx)(a.DUT, {
        className: i()(t, o.x6, {
            [o.r9]: d,
        }),
        onClick: d ? void 0 : u,
        "aria-disabled": d,
        role: "button",
        children: (0, r.jsx)(s.A, {
            className: o.JC,
            roleColor: n,
            roleName: l,
            verified: f,
            children:
                c &&
                (0, r.jsx)(a.PGe, {
                    size: "custom",
                    color: "currentColor",
                    height: 6,
                    width: 6,
                    className: o.Tj,
                    colorClass: o.eG,
                }),
        }),
    });
}
