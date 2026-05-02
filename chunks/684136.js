l.d(t, { A: () => h });
var n,
    i = l(627968);
l(64700);
var r = l(503698),
    a = l.n(r),
    o = l(607399),
    s = l(939249),
    c = l(285796),
    d = l(789645),
    u = l(375708),
    T = l(589753),
    E = (((n = E || {}).DEFAULT = ""), (n.BOLD = "Bold"), (n.SOLID = "Solid"), n);
function h(e) {
    let { closeAction: t, variant: l = "", keybind: n, className: r } = e;
    return (0, i.jsxs)("div", {
        className: a()(T.kL, r),
        children: [
            (0, i.jsx)(s.D, {
                className: a()(T.b, { [T.EH]: "Bold" === l, [T.O3]: "Solid" === l }),
                onClick: t,
                "aria-label": u.intl.string(u.t.cpT0Cq),
                children:
                    "Solid" === l
                        ? (0, i.jsx)(c.a, { size: "md", color: "currentColor", "aria-hidden": !0 })
                        : (0, i.jsx)(d.P, { size: "sm", color: "currentColor", "aria-hidden": !0 }),
            }),
            o.Fr ? null : (0, i.jsx)("div", { className: T.P, "aria-hidden": !0, children: n }),
        ],
    });
}
h.Variants = E;
