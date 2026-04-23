l.d(t, { A: () => g });
var n,
    i = l(627968);
l(64700);
var a = l(503698),
    s = l.n(a),
    r = l(607399),
    o = l(939249),
    u = l(285796),
    c = l(789645),
    d = l(985018),
    A = l(589753),
    h = (((n = h || {}).DEFAULT = ""), (n.BOLD = "Bold"), (n.SOLID = "Solid"), n);
function g(e) {
    let { closeAction: t, variant: l = "", keybind: n, className: a } = e;
    return (0, i.jsxs)("div", {
        className: s()(A.kL, a),
        children: [
            (0, i.jsx)(o.D, {
                className: s()(A.b, { [A.EH]: "Bold" === l, [A.O3]: "Solid" === l }),
                onClick: t,
                "aria-label": d.intl.string(d.t.cpT0Cq),
                children:
                    "Solid" === l
                        ? (0, i.jsx)(u.a, { size: "md", color: "currentColor", "aria-hidden": !0 })
                        : (0, i.jsx)(c.P, { size: "sm", color: "currentColor", "aria-hidden": !0 }),
            }),
            r.Fr ? null : (0, i.jsx)("div", { className: A.P, "aria-hidden": !0, children: n }),
        ],
    });
}
g.Variants = h;
