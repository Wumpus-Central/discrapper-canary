"use strict";
n.d(t, { c: () => _ });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    s = n.n(a),
    l = n(508770),
    o = n(379261),
    d = n(834730),
    c = n(329296),
    u = n(149937);
function _(e) {
    let { label: t, description: n, onClick: r, "aria-hidden": a, leading: l, trailing: _, inInput: A = !1 } = e,
        h = null;
    null != l && (h = (0, i.jsx)("div", { className: u.R4, children: (0, i.jsx)(E, { accessory: l, leading: !0 }) }));
    let I = null;
    null != _ && (I = (0, i.jsx)("div", { className: u.ZY, children: (0, i.jsx)(E, { accessory: _ }) }));
    let f = !A && null != n && "" !== n,
        p = { gridColumnStart: null != h ? "2" : "1", gridColumnEnd: null != I ? "2" : "3" };
    return (0, i.jsxs)("div", {
        className: s()(c.uN, u.uK, { [c.MO]: A }),
        onClick: r,
        "aria-hidden": a,
        "data-has-description": f || void 0,
        children: [
            h,
            A
                ? (0, i.jsx)(d.E, {
                      variant: "text-md/normal",
                      color: "currentColor",
                      lineClamp: 1,
                      style: p,
                      children: t,
                  })
                : (0, i.jsx)(o.r, {
                      style: p,
                      children: (0, i.jsx)(d.E, {
                          tag: "span",
                          variant: "text-md/normal",
                          color: "currentColor",
                          children: t,
                      }),
                  }),
            f &&
                (0, i.jsx)(d.E, {
                    variant: "text-sm/normal",
                    color: "text-subtle",
                    lineClamp: 1,
                    style: { gridColumnStart: null != h ? "2" : "1", gridColumnEnd: null != I ? "2" : "3" },
                    children: n,
                }),
            I,
        ],
    });
}
function E(e) {
    let { accessory: t, leading: n } = e;
    if (null == t) return null;
    if (r.isValidElement(t)) return (0, i.jsx)("div", { className: s()({ [u.MG]: n }), children: t });
    if ("string" == typeof t) return (0, i.jsx)(d.E, { variant: "text-sm/normal", color: "text-subtle", children: t });
    if ("object" == typeof t && "type" in t)
        switch (t.type) {
            case "image":
                return (0, i.jsx)("img", { "aria-hidden": !0, alt: "", src: t.src, className: u.mQ });
            case "avatar":
                return (0, i.jsx)("img", { "aria-hidden": !0, alt: "", src: t.src, className: u.CD });
            case "badge":
                return (0, i.jsx)(l.E, { type: t.badgeType, variant: "brand" });
            default:
                return null;
        }
    return (0, i.jsx)("div", {
        className: u.MG,
        children: (0, i.jsx)(t, { size: "refresh_sm", color: "currentColor" }),
    });
}
