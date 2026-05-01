"use strict";
n.d(t, { A: () => h });
var i,
    r = n(627968);
n(64700);
var s = n(503698),
    a = n.n(s),
    o = n(607399),
    l = n(939249),
    u = n(285796),
    c = n(789645),
    d = n(375708),
    _ = n(589753),
    f = (((i = f || {}).DEFAULT = ""), (i.BOLD = "Bold"), (i.SOLID = "Solid"), i);
function h(e) {
    let { closeAction: t, variant: n = "", keybind: i, className: s } = e;
    return (0, r.jsxs)("div", {
        className: a()(_.kL, s),
        children: [
            (0, r.jsx)(l.D, {
                className: a()(_.b, { [_.EH]: "Bold" === n, [_.O3]: "Solid" === n }),
                onClick: t,
                "aria-label": d.intl.string(d.t.cpT0Cq),
                children:
                    "Solid" === n
                        ? (0, r.jsx)(u.a, { size: "md", color: "currentColor", "aria-hidden": !0 })
                        : (0, r.jsx)(c.P, { size: "sm", color: "currentColor", "aria-hidden": !0 }),
            }),
            o.Fr ? null : (0, r.jsx)("div", { className: _.P, "aria-hidden": !0, children: i }),
        ],
    });
}
h.Variants = f;
