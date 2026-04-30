"use strict";
n.d(t, { D: () => d });
var i = n(627968),
    r = n(503698),
    s = n.n(r),
    a = n(508770),
    o = n(349288),
    l = n(534514),
    u = n(834730),
    c = n(824078);
function d(e) {
    let { title: t, body: n, badge: r, className: a, textLink: d } = e,
        h = d?.external ?? !0;
    return (0, i.jsxs)("div", {
        className: s()(c.header, a),
        children: [
            (0, i.jsxs)("div", {
                children: [
                    (0, i.jsx)(_, { badge: r }),
                    (0, i.jsx)(l.D, { variant: "heading-md/semibold", className: c.title, children: t }),
                ],
            }),
            (0, i.jsx)(f, { body: n }),
            null != d &&
                (0, i.jsx)(o.Anchor, {
                    onClick: d.onClick,
                    href: d.link,
                    target: h && null != d.link ? "_blank" : void 0,
                    rel: h && null != d.link ? "noopener noreferrer" : void 0,
                    children: (0, i.jsx)(u.E, { variant: "text-sm/normal", className: c.footerLink, children: d.text }),
                }),
        ],
    });
}
function _(e) {
    let { badge: t } = e;
    if (null == t) return null;
    let n = (0, a.U)(t);
    return (0, i.jsx)("div", { className: c.badgeContainer, children: (0, i.jsx)(a.E, { variant: "brand", ...n }) });
}
function f(e) {
    let { body: t } = e;
    if (null == t) return null;
    let n = Array.isArray(t) ? t : [t];
    return 0 === n.length || n.every((e) => null == e || "" === e)
        ? null
        : (0, i.jsx)("div", {
              className: c.headerBody,
              children: n.map((e, t) => (0, i.jsx)(u.E, { variant: "text-sm/normal", color: "none", children: e }, t)),
          });
}
