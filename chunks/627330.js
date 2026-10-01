l.d(e, { D: () => u });
var r = l(477900),
    i = l(503698),
    a = l.n(i),
    t = l(508770),
    s = l(297264),
    d = l(28863),
    c = l(834730),
    o = l(489387);
function u(n) {
    let { title: e, body: l, badge: i, className: t, textLink: u } = n,
        m = u?.external ?? !0;
    return (0, r.jsxs)("div", {
        className: a()(o.header, t),
        children: [
            (0, r.jsxs)("div", {
                children: [
                    (0, r.jsx)(h, { badge: i }),
                    (0, r.jsx)(s.D, { variant: "heading-md/semibold", className: o.title, children: e }),
                ],
            }),
            (0, r.jsx)(x, { body: l }),
            null != u &&
                (0, r.jsx)(d.Anchor, {
                    onClick: u.onClick,
                    href: u.link,
                    target: m && null != u.link ? "_blank" : void 0,
                    rel: m && null != u.link ? "noopener noreferrer" : void 0,
                    children: (0, r.jsx)(c.E, { variant: "text-sm/normal", className: o.footerLink, children: u.text }),
                }),
        ],
    });
}
function h(n) {
    let { badge: e } = n;
    if (null == e) return null;
    let l = (0, t.U)(e);
    return (0, r.jsx)("div", { className: o.badgeContainer, children: (0, r.jsx)(t.E, { variant: "brand", ...l }) });
}
function x(n) {
    let { body: e } = n;
    if (null == e) return null;
    let l = Array.isArray(e) ? e : [e];
    return 0 === l.length || l.every((n) => null == n || "" === n)
        ? null
        : (0, r.jsx)("div", {
              className: o.headerBody,
              children: l.map((n, e) => (0, r.jsx)(c.E, { variant: "text-sm/normal", color: "none", children: n }, e)),
          });
}
