l.d(t, { A: () => N });
var n,
    i = l(627968);
l(64700);
var r = l(503698),
    s = l.n(r),
    a = l(607399),
    o = l(939249),
    c = l(285796),
    d = l(789645),
    u = l(834730),
    h = l(375708),
    T = l(288305),
    E = (((n = E || {}).DEFAULT = ""), (n.BOLD = "Bold"), (n.SOLID = "Solid"), n);
function N(e) {
    let { closeAction: t, variant: l = "", keybind: n, className: r } = e;
    return (0, i.jsxs)("div", {
        className: s()(T.kL, r),
        children: [
            (0, i.jsx)(o.D, {
                className: s()(T.b, { [T.EH]: "Bold" === l, [T.O3]: "Solid" === l }),
                onClick: t,
                "aria-label": h.intl.string(h.t.cpT0Cq),
                children:
                    "Solid" === l
                        ? (0, i.jsx)(c.a, { size: "md", color: "currentColor", "aria-hidden": !0 })
                        : (0, i.jsx)(d.P, { size: "sm", color: "currentColor", "aria-hidden": !0 }),
            }),
            a.Fr
                ? null
                : (0, i.jsx)(u.E, { variant: "text-xs/semibold", className: T.P, "aria-hidden": !0, children: n }),
        ],
    });
}
N.Variants = E;
