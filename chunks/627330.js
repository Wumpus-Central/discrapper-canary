"use strict";
n.d(t, { D: () => c });
var r = n(627968),
    i = n(503698),
    a = n.n(i),
    s = n(508770),
    o = n(349288),
    l = n(397927),
    u = n(248789);
function c(e) {
    let { title: t, body: n, badge: i, className: s, textLink: c } = e,
        f = c?.external ?? !0;
    return (0, r.jsxs)("div", {
        className: a()(u.header, s),
        children: [
            (0, r.jsxs)("div", {
                children: [
                    (0, r.jsx)(d, { badge: i }),
                    (0, r.jsx)(l.Heading, { variant: "heading-md/semibold", className: u.title, children: t }),
                ],
            }),
            (0, r.jsx)(_, { body: n }),
            null != c &&
                (0, r.jsx)(o.Anchor, {
                    onClick: c.onClick,
                    href: c.link,
                    target: f && null != c.link ? "_blank" : void 0,
                    rel: f && null != c.link ? "noopener noreferrer" : void 0,
                    children: (0, r.jsx)(l.Text, {
                        variant: "text-sm/normal",
                        className: u.footerLink,
                        children: c.text,
                    }),
                }),
        ],
    });
}
function d(e) {
    let { badge: t } = e;
    if (null == t) return null;
    let n = (0, s.U)(t);
    return (0, r.jsx)("div", { className: u.badgeContainer, children: (0, r.jsx)(s.E, { variant: "brand", ...n }) });
}
function _(e) {
    let { body: t } = e;
    if (null == t) return null;
    let n = Array.isArray(t) ? t : [t];
    return 0 === n.length || n.every((e) => null == e || "" === e)
        ? null
        : (0, r.jsx)("div", {
              className: u.headerBody,
              children: n.map((e, t) =>
                  (0, r.jsx)(l.Text, { variant: "text-sm/normal", color: "none", children: e }, t),
              ),
          });
}
