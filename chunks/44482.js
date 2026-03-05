"use strict";
n.d(t, { c: () => d });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(508770),
    l = n(834730),
    u = n(336389),
    c = n(686724);
function d(e) {
    let { label: t, description: n, onClick: i, "aria-hidden": s, leading: o, trailing: d, inInput: f = !1 } = e,
        p = null;
    null != o && (p = (0, r.jsx)("div", { className: c.R4, children: (0, r.jsx)(_, { accessory: o, leading: !0 }) }));
    let h = null;
    null != d && (h = (0, r.jsx)("div", { className: c.ZY, children: (0, r.jsx)(_, { accessory: d }) }));
    let m = !f && null != n && "" !== n;
    return (0, r.jsxs)("div", {
        className: a()(u.uN, c.uK, { [u.MO]: f }),
        onClick: i,
        "aria-hidden": s,
        "data-has-description": m || void 0,
        children: [
            p,
            (0, r.jsx)(l.E, {
                variant: "text-md/normal",
                color: "currentColor",
                lineClamp: 1,
                style: { gridColumnStart: null != p ? "2" : "1", gridColumnEnd: null != h ? "2" : "3" },
                children: t,
            }),
            m &&
                (0, r.jsx)(l.E, {
                    variant: "text-sm/normal",
                    color: "text-subtle",
                    lineClamp: 1,
                    style: { gridColumnStart: null != p ? "2" : "1", gridColumnEnd: null != h ? "2" : "3" },
                    children: n,
                }),
            h,
        ],
    });
}
function _(e) {
    let { accessory: t, leading: n } = e;
    if (null == t) return null;
    if (i.isValidElement(t)) return (0, r.jsx)("div", { className: a()({ [c.MG]: n }), children: t });
    if ("string" == typeof t) return (0, r.jsx)(l.E, { variant: "text-sm/normal", color: "text-subtle", children: t });
    if ("object" == typeof t && "type" in t && "image" === t.type)
        return (0, r.jsx)("img", { "aria-hidden": !0, alt: "", src: t.src, className: c.mQ });
    if ("object" == typeof t && "type" in t && "avatar" === t.type)
        return (0, r.jsx)("img", { "aria-hidden": !0, alt: "", src: t.src, className: c.CD });
    if ("object" == typeof t && "type" in t && "badge" === t.type)
        return (0, r.jsx)(o.E, { type: t.badgeType, variant: "brand" });
    let s = t;
    return (0, r.jsx)("div", {
        className: c.MG,
        children: (0, r.jsx)(s, { size: "refresh_sm", color: "currentColor" }),
    });
}
