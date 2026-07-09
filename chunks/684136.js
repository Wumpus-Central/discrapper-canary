t.d(l, { A: () => E });
var n,
    i = t(627968);
t(64700);
var r = t(503698),
    s = t.n(r),
    a = t(607399),
    o = t(939249),
    c = t(285796),
    d = t(789645),
    u = t(375708),
    h = t(842681),
    T = (((n = T || {}).DEFAULT = ""), (n.BOLD = "Bold"), (n.SOLID = "Solid"), n);
function E(e) {
    let { closeAction: l, variant: t = "", keybind: n, className: r } = e;
    return (0, i.jsxs)("div", {
        className: s()(h.kL, r),
        children: [
            (0, i.jsx)(o.D, {
                className: s()(h.b, { [h.EH]: "Bold" === t, [h.O3]: "Solid" === t }),
                onClick: l,
                "aria-label": u.intl.string(u.t.cpT0Cq),
                children:
                    "Solid" === t
                        ? (0, i.jsx)(c.a, { size: "md", color: "currentColor", "aria-hidden": !0 })
                        : (0, i.jsx)(d.P, { size: "sm", color: "currentColor", "aria-hidden": !0 }),
            }),
            a.Fr ? null : (0, i.jsx)("div", { className: h.P, "aria-hidden": !0, children: n }),
        ],
    });
}
E.Variants = T;
