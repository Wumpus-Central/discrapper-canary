"use strict";
a.d(t, { A: () => u });
var n,
    i = a(627968);
a(64700);
var r = a(503698),
    s = a.n(r),
    o = a(607399),
    l = a(397927),
    c = a(985018),
    _ = a(494697),
    d = (((n = d || {}).DEFAULT = ""), (n.BOLD = "Bold"), (n.SOLID = "Solid"), n);
function u(e) {
    let { closeAction: t, variant: a = "", keybind: n, className: r } = e;
    return (0, i.jsxs)("div", {
        className: s()(_.kL, r),
        children: [
            (0, i.jsx)(l.DUT, {
                className: s()(_.b, { [_.EH]: "Bold" === a, [_.O3]: "Solid" === a }),
                onClick: t,
                "aria-label": c.intl.string(c.t.cpT0Cq),
                children:
                    "Solid" === a
                        ? (0, i.jsx)(l.aXh, { size: "md", color: "currentColor", "aria-hidden": !0 })
                        : (0, i.jsx)(l.PGe, { size: "sm", color: "currentColor", "aria-hidden": !0 }),
            }),
            o.Fr ? null : (0, i.jsx)("div", { className: _.P, "aria-hidden": !0, children: n }),
        ],
    });
}
u.Variants = d;
