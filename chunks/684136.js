n.d(t, { A: () => _ });
var i,
    a = n(627968);
n(64700);
var r = n(503698),
    l = n.n(r),
    s = n(607399),
    o = n(397927),
    d = n(985018),
    c = n(31004),
    u = (((i = u || {}).DEFAULT = ""), (i.BOLD = "Bold"), (i.SOLID = "Solid"), i);
function _(e) {
    let { closeAction: t, variant: n = "", keybind: i, className: r } = e;
    return (0, a.jsxs)("div", {
        className: l()(c.kL, r),
        children: [
            (0, a.jsx)(o.DUT, {
                className: l()(c.b, { [c.EH]: "Bold" === n, [c.O3]: "Solid" === n }),
                onClick: t,
                "aria-label": d.intl.string(d.t.cpT0Cq),
                children:
                    "Solid" === n
                        ? (0, a.jsx)(o.aXh, { size: "md", color: "currentColor", "aria-hidden": !0 })
                        : (0, a.jsx)(o.PGe, { size: "sm", color: "currentColor", "aria-hidden": !0 }),
            }),
            s.Fr ? null : (0, a.jsx)("div", { className: c.P, "aria-hidden": !0, children: i }),
        ],
    });
}
_.Variants = u;
