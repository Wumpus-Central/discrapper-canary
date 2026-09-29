l.d(t, { A: () => N });
var n,
    i = l(477900);
l(582128);
var r = l(503698),
    a = l.n(r),
    o = l(607399),
    s = l(939249),
    c = l(285796),
    u = l(789645),
    d = l(834730),
    T = l(375708),
    E = l(563744),
    h = (((n = h || {}).DEFAULT = ""), (n.BOLD = "Bold"), (n.SOLID = "Solid"), n);
function N(e) {
    let { closeAction: t, variant: l = "", keybind: n, className: r } = e;
    return (0, i.jsxs)("div", {
        className: a()(E.kL, r),
        children: [
            (0, i.jsx)(s.D, {
                className: a()(E.b, { [E.EH]: "Bold" === l, [E.O3]: "Solid" === l }),
                onClick: t,
                "aria-label": T.intl.string(T.t.cpT0Cq),
                children:
                    "Solid" === l
                        ? (0, i.jsx)(c.a, { size: "md", color: "currentColor", "aria-hidden": !0 })
                        : (0, i.jsx)(u.P, { size: "sm", color: "currentColor", "aria-hidden": !0 }),
            }),
            o.Fr
                ? null
                : (0, i.jsx)(d.E, { variant: "text-xs/semibold", className: E.P, "aria-hidden": !0, children: n }),
        ],
    });
}
N.Variants = h;
