n.d(t, { A: () => d });
var i = n(627968);
n(64700);
var l = n(503698),
    a = n.n(l),
    s = n(939249),
    r = n(789645),
    o = n(569989),
    c = n(84476);
function d(e) {
    let {
        className: t,
        roleColor: n,
        roleName: l,
        hasRemoveIcon: d = !1,
        onClick: u,
        disabled: h = !1,
        verified: m = !1,
    } = e;
    return (0, i.jsx)(s.D, {
        className: a()(t, c.x6, { [c.r9]: h }),
        onClick: h ? void 0 : u,
        "aria-disabled": h,
        role: "button",
        children: (0, i.jsx)(o.A, {
            className: c.JC,
            roleColor: n,
            roleName: l,
            verified: m,
            children:
                d &&
                (0, i.jsx)(r.P, {
                    size: "custom",
                    color: "currentColor",
                    height: 6,
                    width: 6,
                    className: c.Tj,
                    colorClass: c.eG,
                }),
        }),
    });
}
