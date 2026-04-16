n.d(t, { A: () => c });
var i = n(627968);
n(64700);
var l = n(503698),
    a = n.n(l),
    s = n(397927),
    r = n(569989),
    o = n(84476);
function c(e) {
    let {
        className: t,
        roleColor: n,
        roleName: l,
        hasRemoveIcon: c = !1,
        onClick: d,
        disabled: u = !1,
        verified: h = !1,
    } = e;
    return (0, i.jsx)(s.DUT, {
        className: a()(t, o.x6, { [o.r9]: u }),
        onClick: u ? void 0 : d,
        "aria-disabled": u,
        role: "button",
        children: (0, i.jsx)(r.A, {
            className: o.JC,
            roleColor: n,
            roleName: l,
            verified: h,
            children:
                c &&
                (0, i.jsx)(s.PGe, {
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
