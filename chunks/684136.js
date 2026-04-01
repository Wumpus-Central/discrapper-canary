n.d(t, { A: () => u });
var a,
    i = n(627968);
n(64700);
var r = n(503698),
    l = n.n(r),
    o = n(607399),
    s = n(397927),
    c = n(985018),
    d = n(494697),
    _ = (((a = _ || {}).DEFAULT = ""), (a.BOLD = "Bold"), (a.SOLID = "Solid"), a);
function u(e) {
    let { closeAction: t, variant: n = "", keybind: a, className: r } = e;
    return (0, i.jsxs)("div", {
        className: l()(d.kL, r),
        children: [
            (0, i.jsx)(s.DUT, {
                className: l()(d.b, { [d.EH]: "Bold" === n, [d.O3]: "Solid" === n }),
                onClick: t,
                "aria-label": c.intl.string(c.t.cpT0Cq),
                children:
                    "Solid" === n
                        ? (0, i.jsx)(s.aXh, { size: "md", color: "currentColor", "aria-hidden": !0 })
                        : (0, i.jsx)(s.PGe, { size: "sm", color: "currentColor", "aria-hidden": !0 }),
            }),
            o.Fr ? null : (0, i.jsx)("div", { className: d.P, "aria-hidden": !0, children: a }),
        ],
    });
}
u.Variants = _;
