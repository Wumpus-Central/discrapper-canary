"use strict";
n.d(t, { D: () => u });
var i = n(627968),
    r = n(503698),
    a = n.n(r),
    s = n(508770),
    l = n(349288),
    o = n(534514),
    d = n(834730),
    c = n(77006);
function u(e) {
    let { title: t, body: n, badge: r, className: s, textLink: u } = e,
        A = u?.external ?? !0;
    return (0, i.jsxs)("div", {
        className: a()(c.header, s),
        children: [
            (0, i.jsxs)("div", {
                children: [
                    (0, i.jsx)(_, { badge: r }),
                    (0, i.jsx)(o.D, { variant: "heading-md/semibold", className: c.title, children: t }),
                ],
            }),
            (0, i.jsx)(E, { body: n }),
            null != u &&
                (0, i.jsx)(l.Anchor, {
                    onClick: u.onClick,
                    href: u.link,
                    target: A && null != u.link ? "_blank" : void 0,
                    rel: A && null != u.link ? "noopener noreferrer" : void 0,
                    children: (0, i.jsx)(d.E, { variant: "text-sm/normal", className: c.footerLink, children: u.text }),
                }),
        ],
    });
}
function _(e) {
    let { badge: t } = e;
    if (null == t) return null;
    let n = (0, s.U)(t);
    return (0, i.jsx)("div", { className: c.badgeContainer, children: (0, i.jsx)(s.E, { variant: "brand", ...n }) });
}
function E(e) {
    let { body: t } = e;
    if (null == t) return null;
    let n = Array.isArray(t) ? t : [t];
    return 0 === n.length || n.every((e) => null == e || "" === e)
        ? null
        : (0, i.jsx)("div", {
              className: c.headerBody,
              children: n.map((e, t) => (0, i.jsx)(d.E, { variant: "text-sm/normal", color: "none", children: e }, t)),
          });
}
