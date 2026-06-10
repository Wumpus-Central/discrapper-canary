"use strict";
n.d(t, { c: () => d });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(508770),
    l = n(834730),
    u = n(329296),
    c = n(149937);
function d(e) {
    let { label: t, description: n, onClick: r, "aria-hidden": s, leading: o, trailing: d, inInput: h = !1 } = e,
        f = null;
    null != o && (f = (0, i.jsx)("div", { className: c.R4, children: (0, i.jsx)(_, { accessory: o, leading: !0 }) }));
    let p = null;
    null != d && (p = (0, i.jsx)("div", { className: c.ZY, children: (0, i.jsx)(_, { accessory: d }) }));
    let E = !h && null != n && "" !== n;
    return (0, i.jsxs)("div", {
        className: a()(u.uN, c.uK, { [u.MO]: h }),
        onClick: r,
        "aria-hidden": s,
        "data-has-description": E || void 0,
        children: [
            f,
            (0, i.jsx)(l.E, {
                variant: "text-md/normal",
                color: "currentColor",
                lineClamp: 1,
                style: { gridColumnStart: null != f ? "2" : "1", gridColumnEnd: null != p ? "2" : "3" },
                children: t,
            }),
            E &&
                (0, i.jsx)(l.E, {
                    variant: "text-sm/normal",
                    color: "text-subtle",
                    lineClamp: 1,
                    style: { gridColumnStart: null != f ? "2" : "1", gridColumnEnd: null != p ? "2" : "3" },
                    children: n,
                }),
            p,
        ],
    });
}
function _(e) {
    let { accessory: t, leading: n } = e;
    if (null == t) return null;
    if (r.isValidElement(t)) return (0, i.jsx)("div", { className: a()({ [c.MG]: n }), children: t });
    if ("string" == typeof t) return (0, i.jsx)(l.E, { variant: "text-sm/normal", color: "text-subtle", children: t });
    if ("object" == typeof t && "type" in t)
        switch (t.type) {
            case "image":
                return (0, i.jsx)("img", { "aria-hidden": !0, alt: "", src: t.src, className: c.mQ });
            case "avatar":
                return (0, i.jsx)("img", { "aria-hidden": !0, alt: "", src: t.src, className: c.CD });
            case "badge":
                return (0, i.jsx)(o.E, { type: t.badgeType, variant: "brand" });
            default:
                return null;
        }
    return (0, i.jsx)("div", {
        className: c.MG,
        children: (0, i.jsx)(t, { size: "refresh_sm", color: "currentColor" }),
    });
}
