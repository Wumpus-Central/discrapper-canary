a.d(t, { A: () => u });
var n,
    i = a(627968);
a(64700);
var r = a(503698),
    l = a.n(r),
    s = a(607399),
    o = a(397927),
    _ = a(985018),
    c = a(31004),
    d = (((n = d || {}).DEFAULT = ""), (n.BOLD = "Bold"), (n.SOLID = "Solid"), n);
function u(e) {
    let { closeAction: t, variant: a = "", keybind: n, className: r } = e;
    return (0, i.jsxs)("div", {
        className: l()(c.kL, r),
        children: [
            (0, i.jsx)(o.DUT, {
                className: l()(c.b, { [c.EH]: "Bold" === a, [c.O3]: "Solid" === a }),
                onClick: t,
                "aria-label": _.intl.string(_.t.cpT0Cq),
                children:
                    "Solid" === a
                        ? (0, i.jsx)(o.aXh, { size: "md", color: "currentColor", "aria-hidden": !0 })
                        : (0, i.jsx)(o.PGe, { size: "sm", color: "currentColor", "aria-hidden": !0 }),
            }),
            s.Fr ? null : (0, i.jsx)("div", { className: c.P, "aria-hidden": !0, children: n }),
        ],
    });
}
u.Variants = d;
