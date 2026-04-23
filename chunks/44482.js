"use strict";
n.d(t, { c: () => c });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(508770),
    l = n(834730),
    u = n(329296),
    d = n(149937);
function c(e) {
    let { label: t, description: n, onClick: i, "aria-hidden": s, leading: o, trailing: c, inInput: f = !1 } = e,
        E = null;
    null != o && (E = (0, r.jsx)("div", { className: d.R4, children: (0, r.jsx)(_, { accessory: o, leading: !0 }) }));
    let h = null;
    null != c && (h = (0, r.jsx)("div", { className: d.ZY, children: (0, r.jsx)(_, { accessory: c }) }));
    let p = !f && null != n && "" !== n;
    return (0, r.jsxs)("div", {
        className: a()(u.uN, d.uK, { [u.MO]: f }),
        onClick: i,
        "aria-hidden": s,
        "data-has-description": p || void 0,
        children: [
            E,
            (0, r.jsx)(l.E, {
                variant: "text-md/normal",
                color: "currentColor",
                lineClamp: 1,
                style: { gridColumnStart: null != E ? "2" : "1", gridColumnEnd: null != h ? "2" : "3" },
                children: t,
            }),
            p &&
                (0, r.jsx)(l.E, {
                    variant: "text-sm/normal",
                    color: "text-subtle",
                    lineClamp: 1,
                    style: { gridColumnStart: null != E ? "2" : "1", gridColumnEnd: null != h ? "2" : "3" },
                    children: n,
                }),
            h,
        ],
    });
}
function _(e) {
    let { accessory: t, leading: n } = e;
    return null == t
        ? null
        : i.isValidElement(t)
          ? (0, r.jsx)("div", { className: a()({ [d.MG]: n }), children: t })
          : "string" == typeof t
            ? (0, r.jsx)(l.E, { variant: "text-sm/normal", color: "text-subtle", children: t })
            : "object" == typeof t && "type" in t && "image" === t.type
              ? (0, r.jsx)("img", { "aria-hidden": !0, alt: "", src: t.src, className: d.mQ })
              : "object" == typeof t && "type" in t && "avatar" === t.type
                ? (0, r.jsx)("img", { "aria-hidden": !0, alt: "", src: t.src, className: d.CD })
                : "object" == typeof t && "type" in t && "badge" === t.type
                  ? (0, r.jsx)(o.E, { type: t.badgeType, variant: "brand" })
                  : (0, r.jsx)("div", {
                        className: d.MG,
                        children: (0, r.jsx)(t, { size: "refresh_sm", color: "currentColor" }),
                    });
}
