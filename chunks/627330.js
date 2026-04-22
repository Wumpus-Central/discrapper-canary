a.d(t, { D: () => u });
var n = a(627968),
    r = a(503698),
    l = a.n(r),
    i = a(508770),
    s = a(349288),
    o = a(534514),
    c = a(834730),
    d = a(77006);
function u(e) {
    let { title: t, body: a, badge: r, className: i, textLink: u } = e,
        p = u?.external ?? !0;
    return (0, n.jsxs)("div", {
        className: l()(d.header, i),
        children: [
            (0, n.jsxs)("div", {
                children: [
                    (0, n.jsx)(h, { badge: r }),
                    (0, n.jsx)(o.D, { variant: "heading-md/semibold", className: d.title, children: t }),
                ],
            }),
            (0, n.jsx)(m, { body: a }),
            null != u &&
                (0, n.jsx)(s.Anchor, {
                    onClick: u.onClick,
                    href: u.link,
                    target: p && null != u.link ? "_blank" : void 0,
                    rel: p && null != u.link ? "noopener noreferrer" : void 0,
                    children: (0, n.jsx)(c.E, { variant: "text-sm/normal", className: d.footerLink, children: u.text }),
                }),
        ],
    });
}
function h(e) {
    let { badge: t } = e;
    if (null == t) return null;
    let a = (0, i.U)(t);
    return (0, n.jsx)("div", { className: d.badgeContainer, children: (0, n.jsx)(i.E, { variant: "brand", ...a }) });
}
function m(e) {
    let { body: t } = e;
    if (null == t) return null;
    let a = Array.isArray(t) ? t : [t];
    return 0 === a.length || a.every((e) => null == e || "" === e)
        ? null
        : (0, n.jsx)("div", {
              className: d.headerBody,
              children: a.map((e, t) => (0, n.jsx)(c.E, { variant: "text-sm/normal", color: "none", children: e }, t)),
          });
}
