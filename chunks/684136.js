"use strict";
n.d(t, { A: () => h });
var i,
    r = n(477900);
n(582128);
var a = n(503698),
    s = n.n(a),
    l = n(607399),
    o = n(939249),
    d = n(285796),
    c = n(789645),
    u = n(834730),
    _ = n(375708),
    E = n(288305),
    A = (((i = A || {}).DEFAULT = ""), (i.BOLD = "Bold"), (i.SOLID = "Solid"), i);
function h(e) {
    let { closeAction: t, variant: n = "", keybind: i, className: a } = e;
    return (0, r.jsxs)("div", {
        className: s()(E.kL, a),
        children: [
            (0, r.jsx)(o.D, {
                className: s()(E.b, { [E.EH]: "Bold" === n, [E.O3]: "Solid" === n }),
                onClick: t,
                "aria-label": _.intl.string(_.t.cpT0Cq),
                children:
                    "Solid" === n
                        ? (0, r.jsx)(d.a, { size: "md", color: "currentColor", "aria-hidden": !0 })
                        : (0, r.jsx)(c.P, { size: "sm", color: "currentColor", "aria-hidden": !0 }),
            }),
            l.Fr
                ? null
                : (0, r.jsx)(u.E, { variant: "text-xs/semibold", className: E.P, "aria-hidden": !0, children: i }),
        ],
    });
}
h.Variants = A;
