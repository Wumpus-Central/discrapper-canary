t.d(l, { A: () => I });
var n,
    s = t(627968);
t(64700);
var r = t(503698),
    i = t.n(r),
    o = t(607399),
    a = t(939249),
    E = t(285796),
    d = t(789645),
    c = t(375708),
    _ = t(589753),
    u = (((n = u || {}).DEFAULT = ""), (n.BOLD = "Bold"), (n.SOLID = "Solid"), n);
function I(e) {
    let { closeAction: l, variant: t = "", keybind: n, className: r } = e;
    return (0, s.jsxs)("div", {
        className: i()(_.kL, r),
        children: [
            (0, s.jsx)(a.D, {
                className: i()(_.b, { [_.EH]: "Bold" === t, [_.O3]: "Solid" === t }),
                onClick: l,
                "aria-label": c.intl.string(c.t.cpT0Cq),
                children:
                    "Solid" === t
                        ? (0, s.jsx)(E.a, { size: "md", color: "currentColor", "aria-hidden": !0 })
                        : (0, s.jsx)(d.P, { size: "sm", color: "currentColor", "aria-hidden": !0 }),
            }),
            o.Fr ? null : (0, s.jsx)("div", { className: _.P, "aria-hidden": !0, children: n }),
        ],
    });
}
I.Variants = u;
