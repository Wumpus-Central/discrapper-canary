"use strict";
n.d(t, { c: () => d });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(508770),
    l = n(834730),
    u = n(336389),
    c = n(686724);
function d(e) {
    let { label: t, onClick: n, "aria-hidden": i, leading: a, trailing: o, inInput: d = !1 } = e,
        f = null;
    null != a && (f = (0, r.jsx)("div", { className: c.R4, children: (0, r.jsx)(_, { accessory: a, leading: !0 }) }));
    let p = null;
    return (
        null != o && (p = (0, r.jsx)("div", { className: c.ZY, children: (0, r.jsx)(_, { accessory: o }) })),
        (0, r.jsxs)("div", {
            className: s()(u.uN, c.uK, { [u.MO]: d }),
            onClick: n,
            "aria-hidden": i,
            children: [
                f,
                (0, r.jsx)(l.E, {
                    variant: "text-md/normal",
                    color: "currentColor",
                    lineClamp: 1,
                    style: { gridColumnStart: null != f ? "2" : "1", gridColumnEnd: null != p ? "2" : "3" },
                    children: t,
                }),
                p,
            ],
        })
    );
}
function _(e) {
    let { accessory: t, leading: n } = e;
    if (null == t) return null;
    if (i.isValidElement(t)) return (0, r.jsx)("div", { className: s()({ [c.MG]: n }), children: t });
    if ("string" == typeof t) return (0, r.jsx)(l.E, { variant: "text-sm/normal", color: "text-subtle", children: t });
    if ("object" == typeof t && "type" in t && "image" === t.type)
        return (0, r.jsx)("img", { "aria-hidden": !0, alt: "", src: t.src, className: c.mQ });
    if ("object" == typeof t && "type" in t && "avatar" === t.type)
        return (0, r.jsx)("img", { "aria-hidden": !0, alt: "", src: t.src, className: c.CD });
    if ("object" == typeof t && "type" in t && "badge" === t.type)
        return (0, r.jsx)(o.E, { type: t.badgeType, variant: "brand" });
    let a = t;
    return (0, r.jsx)("div", {
        className: c.MG,
        children: (0, r.jsx)(a, { size: "refresh_sm", color: "currentColor" }),
    });
}
