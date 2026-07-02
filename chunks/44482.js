"use strict";
n.d(t, { c: () => _ });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(508770),
    l = n(379261),
    u = n(834730),
    d = n(329296),
    c = n(149937);
function _(e) {
    let { label: t, description: n, onClick: r, "aria-hidden": s, leading: o, trailing: _, inInput: f = !1 } = e,
        E = null;
    null != o && (E = (0, i.jsx)("div", { className: c.R4, children: (0, i.jsx)(h, { accessory: o, leading: !0 }) }));
    let p = null;
    null != _ && (p = (0, i.jsx)("div", { className: c.ZY, children: (0, i.jsx)(h, { accessory: _ }) }));
    let m = !f && null != n && "" !== n,
        g = { gridColumnStart: null != E ? "2" : "1", gridColumnEnd: null != p ? "2" : "3" };
    return (0, i.jsxs)("div", {
        className: a()(d.uN, c.uK, { [d.MO]: f }),
        onClick: r,
        "aria-hidden": s,
        "data-has-description": m || void 0,
        children: [
            E,
            f
                ? (0, i.jsx)(u.E, {
                      variant: "text-md/normal",
                      color: "currentColor",
                      lineClamp: 1,
                      style: g,
                      children: t,
                  })
                : (0, i.jsx)(l.r, {
                      style: g,
                      children: (0, i.jsx)(u.E, {
                          tag: "span",
                          variant: "text-md/normal",
                          color: "currentColor",
                          children: t,
                      }),
                  }),
            m &&
                (0, i.jsx)(u.E, {
                    variant: "text-sm/normal",
                    color: "text-subtle",
                    lineClamp: 1,
                    style: { gridColumnStart: null != E ? "2" : "1", gridColumnEnd: null != p ? "2" : "3" },
                    children: n,
                }),
            p,
        ],
    });
}
function h(e) {
    let { accessory: t, leading: n } = e;
    if (null == t) return null;
    if (r.isValidElement(t)) return (0, i.jsx)("div", { className: a()({ [c.MG]: n }), children: t });
    if ("string" == typeof t) return (0, i.jsx)(u.E, { variant: "text-sm/normal", color: "text-subtle", children: t });
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
