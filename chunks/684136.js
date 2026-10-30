l.d(t, { A: () => N });
var n,
    i = l(477900);
l(582128);
var a = l(503698),
    r = l.n(a),
    s = l(607399),
    o = l(939249),
    c = l(285796),
    d = l(789645),
    u = l(834730),
    h = l(105292),
    T = l(563744),
    E = (((n = E || {}).DEFAULT = ""), (n.BOLD = "Bold"), (n.SOLID = "Solid"), n);
function N(e) {
    let { closeAction: t, variant: l = "", keybind: n, className: a } = e;
    return (0, i.jsxs)("div", {
        className: r()(T.kL, a),
        children: [
            (0, i.jsx)(o.D, {
                className: r()(T.b, { [T.EH]: "Bold" === l, [T.O3]: "Solid" === l }),
                onClick: t,
                "aria-label": h.intl.string(h.t.cpT0Cq),
                children:
                    "Solid" === l
                        ? (0, i.jsx)(c.a, { size: "md", color: "currentColor", "aria-hidden": !0 })
                        : (0, i.jsx)(d.P, { size: "sm", color: "currentColor", "aria-hidden": !0 }),
            }),
            s.Fr
                ? null
                : (0, i.jsx)(u.E, { variant: "text-xs/semibold", className: T.P, "aria-hidden": !0, children: n }),
        ],
    });
}
N.Variants = E;
