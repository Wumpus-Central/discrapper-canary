"use strict";
n.d(t, { D: () => d });
var r = n(627968),
    i = n(503698),
    s = n.n(i),
    a = n(508770),
    o = n(349288),
    l = n(534514),
    u = n(834730),
    c = n(824078);
function d(e) {
    let { title: t, body: n, badge: i, className: a, textLink: d } = e,
        p = d?.external ?? !0;
    return (0, r.jsxs)("div", {
        className: s()(c.header, a),
        children: [
            (0, r.jsxs)("div", {
                children: [
                    (0, r.jsx)(_, { badge: i }),
                    (0, r.jsx)(l.D, { variant: "heading-md/semibold", className: c.title, children: t }),
                ],
            }),
            (0, r.jsx)(f, { body: n }),
            null != d &&
                (0, r.jsx)(o.Anchor, {
                    onClick: d.onClick,
                    href: d.link,
                    target: p && null != d.link ? "_blank" : void 0,
                    rel: p && null != d.link ? "noopener noreferrer" : void 0,
                    children: (0, r.jsx)(u.E, { variant: "text-sm/normal", className: c.footerLink, children: d.text }),
                }),
        ],
    });
}
function _(e) {
    let { badge: t } = e;
    if (null == t) return null;
    let n = (0, a.U)(t);
    return (0, r.jsx)("div", { className: c.badgeContainer, children: (0, r.jsx)(a.E, { variant: "brand", ...n }) });
}
function f(e) {
    let { body: t } = e;
    if (null == t) return null;
    let n = Array.isArray(t) ? t : [t];
    return 0 === n.length || n.every((e) => null == e || "" === e)
        ? null
        : (0, r.jsx)("div", {
              className: c.headerBody,
              children: n.map((e, t) => (0, r.jsx)(u.E, { variant: "text-sm/normal", color: "none", children: e }, t)),
          });
}
