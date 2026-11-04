var n,
    i = t(477900);
t(582128);
var a = t(503698),
    r = t.n(a),
    s = t(607399),
    o = t(939249),
    c = t(285796),
    d = t(789645),
    u = t(834730),
    h = t(792996),
    T = t(563744),
    E = (((n = E || {}).DEFAULT = ""), (n.BOLD = "Bold"), (n.SOLID = "Solid"), n);
function N(e) {
    let { closeAction: l, variant: t = "", keybind: n, className: a } = e;
    return (0, i.jsxs)("div", {
        className: r()(T.kL, a),
        children: [
            (0, i.jsx)(o.D, {
                className: r()(T.b, { [T.EH]: "Bold" === t, [T.O3]: "Solid" === t }),
                onClick: l,
                "aria-label": h.intl.string(h.t.cpT0Cq),
                children:
                    "Solid" === t
                        ? (0, i.jsx)(c.a, { size: "md", color: "currentColor", "aria-hidden": !0 })
                        : (0, i.jsx)(d.P, { size: "sm", color: "currentColor", "aria-hidden": !0 }),
            }),
            s.Fr
                ? null
                : (0, i.jsx)(u.E, { variant: "body-xs/semibold", className: T.P, "aria-hidden": !0, children: n }),
        ],
    });
}
((N.Variants = E), t.d(l, {}, { A: N }));
