n.d(t, { A: () => A });
var l,
    r = n(627968);
n(64700);
var i = n(503698),
    s = n.n(i),
    o = n(607399),
    a = n(939249),
    u = n(285796),
    c = n(789645),
    T = n(834730),
    d = n(375708),
    E = n(288305),
    I = (((l = I || {}).DEFAULT = ""), (l.BOLD = "Bold"), (l.SOLID = "Solid"), l);
function A(e) {
    let { closeAction: t, variant: n = "", keybind: l, className: i } = e;
    return (0, r.jsxs)("div", {
        className: s()(E.kL, i),
        children: [
            (0, r.jsx)(a.D, {
                className: s()(E.b, { [E.EH]: "Bold" === n, [E.O3]: "Solid" === n }),
                onClick: t,
                "aria-label": d.intl.string(d.t.cpT0Cq),
                children:
                    "Solid" === n
                        ? (0, r.jsx)(u.a, { size: "md", color: "currentColor", "aria-hidden": !0 })
                        : (0, r.jsx)(c.P, { size: "sm", color: "currentColor", "aria-hidden": !0 }),
            }),
            o.Fr
                ? null
                : (0, r.jsx)(T.E, { variant: "text-xs/semibold", className: E.P, "aria-hidden": !0, children: l }),
        ],
    });
}
A.Variants = I;
