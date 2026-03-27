"use strict";
n.d(t, { A: () => d });
var r = n(627968);
n(64700);
var i = n(503698),
    s = n.n(i),
    a = n(607399),
    o = n(397927),
    l = n(985018),
    u = n(494697),
    c = (function (e) {
        return (e.DEFAULT = ""), (e.BOLD = "Bold"), (e.SOLID = "Solid"), e;
    })(c || {});
function d(e) {
    let { closeAction: t, variant: n = "", keybind: i, className: c } = e;
    return (0, r.jsxs)("div", {
        className: s()(u.kL, c),
        children: [
            (0, r.jsx)(o.DUT, {
                className: s()(u.b, { [u.EH]: "Bold" === n, [u.O3]: "Solid" === n }),
                onClick: t,
                "aria-label": l.intl.string(l.t.cpT0Cq),
                children:
                    "Solid" === n
                        ? (0, r.jsx)(o.aXh, { size: "md", color: "currentColor", "aria-hidden": !0 })
                        : (0, r.jsx)(o.PGe, { size: "sm", color: "currentColor", "aria-hidden": !0 }),
            }),
            a.Fr ? null : (0, r.jsx)("div", { className: u.P, "aria-hidden": !0, children: i }),
        ],
    });
}
d.Variants = c;
