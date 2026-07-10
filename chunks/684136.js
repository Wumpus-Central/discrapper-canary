"use strict";
n.d(t, { A: () => A });
var i,
    r = n(627968);
n(64700);
var a = n(503698),
    s = n.n(a),
    l = n(607399),
    o = n(939249),
    d = n(285796),
    c = n(789645),
    u = n(375708),
    _ = n(842681),
    E = (((i = E || {}).DEFAULT = ""), (i.BOLD = "Bold"), (i.SOLID = "Solid"), i);
function A(e) {
    let { closeAction: t, variant: n = "", keybind: i, className: a } = e;
    return (0, r.jsxs)("div", {
        className: s()(_.kL, a),
        children: [
            (0, r.jsx)(o.D, {
                className: s()(_.b, { [_.EH]: "Bold" === n, [_.O3]: "Solid" === n }),
                onClick: t,
                "aria-label": u.intl.string(u.t.cpT0Cq),
                children:
                    "Solid" === n
                        ? (0, r.jsx)(d.a, { size: "md", color: "currentColor", "aria-hidden": !0 })
                        : (0, r.jsx)(c.P, { size: "sm", color: "currentColor", "aria-hidden": !0 }),
            }),
            l.Fr ? null : (0, r.jsx)("div", { className: _.P, "aria-hidden": !0, children: i }),
        ],
    });
}
A.Variants = E;
