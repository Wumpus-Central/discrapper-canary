var n,
    a = l(477900);
l(582128);
var i = l(503698),
    r = l.n(i),
    s = l(607399),
    o = l(939249),
    c = l(285796),
    d = l(789645),
    h = l(834730),
    u = l(792996),
    T = l(563744),
    E = (((n = E || {}).DEFAULT = ""), (n.BOLD = "Bold"), (n.SOLID = "Solid"), n);
function N(e) {
    let { closeAction: t, variant: l = "", keybind: n, className: i } = e;
    return (0, a.jsxs)("div", {
        className: r()(T.kL, i),
        children: [
            (0, a.jsx)(o.D, {
                className: r()(T.b, { [T.EH]: "Bold" === l, [T.O3]: "Solid" === l }),
                onClick: t,
                "aria-label": u.intl.string(u.t.cpT0Cq),
                children:
                    "Solid" === l
                        ? (0, a.jsx)(c.a, { size: "md", color: "currentColor", "aria-hidden": !0 })
                        : (0, a.jsx)(d.P, { size: "sm", color: "currentColor", "aria-hidden": !0 }),
            }),
            s.Fr
                ? null
                : (0, a.jsx)(h.E, { variant: "body-xs/semibold", className: T.P, "aria-hidden": !0, children: n }),
        ],
    });
}
((N.Variants = E), l.d(t, {}, { A: N }));
