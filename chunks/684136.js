t.d(l, { A: () => I });
var n,
    r = t(627968);
t(64700);
var s = t(503698),
    i = t.n(s),
    o = t(607399),
    a = t(939249),
    E = t(285796),
    d = t(789645),
    c = t(375708),
    u = t(589753),
    _ = (((n = _ || {}).DEFAULT = ""), (n.BOLD = "Bold"), (n.SOLID = "Solid"), n);
function I(e) {
    let { closeAction: l, variant: t = "", keybind: n, className: s } = e;
    return (0, r.jsxs)("div", {
        className: i()(u.kL, s),
        children: [
            (0, r.jsx)(a.D, {
                className: i()(u.b, { [u.EH]: "Bold" === t, [u.O3]: "Solid" === t }),
                onClick: l,
                "aria-label": c.intl.string(c.t.cpT0Cq),
                children:
                    "Solid" === t
                        ? (0, r.jsx)(E.a, { size: "md", color: "currentColor", "aria-hidden": !0 })
                        : (0, r.jsx)(d.P, { size: "sm", color: "currentColor", "aria-hidden": !0 }),
            }),
            o.Fr ? null : (0, r.jsx)("div", { className: u.P, "aria-hidden": !0, children: n }),
        ],
    });
}
I.Variants = _;
