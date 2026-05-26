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
    let { label: t, description: n, onClick: r, "aria-hidden": s, leading: o, trailing: d, inInput: f = !1 } = e,
        h = null;
    null != o && (h = (0, i.jsx)("div", { className: c.R4, children: (0, i.jsx)(_, { accessory: o, leading: !0 }) }));
    let p = null;
    null != d && (p = (0, i.jsx)("div", { className: c.ZY, children: (0, i.jsx)(_, { accessory: d }) }));
    let E = !f && null != n && "" !== n;
    return (0, i.jsxs)("div", {
        className: a()(u.uN, c.uK, { [u.MO]: f }),
        onClick: r,
        "aria-hidden": s,
        "data-has-description": E || void 0,
        children: [
            h,
            (0, i.jsx)(l.E, {
                variant: "text-md/normal",
                color: "currentColor",
                lineClamp: 1,
                style: { gridColumnStart: null != h ? "2" : "1", gridColumnEnd: null != p ? "2" : "3" },
                children: t,
            }),
            E &&
                (0, i.jsx)(l.E, {
                    variant: "text-sm/normal",
                    color: "text-subtle",
                    lineClamp: 1,
                    style: { gridColumnStart: null != h ? "2" : "1", gridColumnEnd: null != p ? "2" : "3" },
                    children: n,
                }),
            p,
        ],
    });
}
function _(e) {
    let { accessory: t, leading: n } = e;
    return null == t
        ? null
        : r.isValidElement(t)
          ? (0, i.jsx)("div", { className: a()({ [c.MG]: n }), children: t })
          : "string" == typeof t
            ? (0, i.jsx)(l.E, { variant: "text-sm/normal", color: "text-subtle", children: t })
            : "object" == typeof t && "type" in t && "image" === t.type
              ? (0, i.jsx)("img", { "aria-hidden": !0, alt: "", src: t.src, className: c.mQ })
              : "object" == typeof t && "type" in t && "avatar" === t.type
                ? (0, i.jsx)("img", { "aria-hidden": !0, alt: "", src: t.src, className: c.CD })
                : "object" == typeof t && "type" in t && "badge" === t.type
                  ? (0, i.jsx)(o.E, { type: t.badgeType, variant: "brand" })
                  : (0, i.jsx)("div", {
                        className: c.MG,
                        children: (0, i.jsx)(t, { size: "refresh_sm", color: "currentColor" }),
                    });
}
