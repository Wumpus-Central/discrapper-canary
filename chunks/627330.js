r.d(t, { D: () => d });
var n = r(627968),
    a = r(503698),
    l = r.n(a),
    s = r(508770),
    i = r(349288),
    o = r(534514),
    c = r(834730),
    u = r(824078);
function d(e) {
    let { title: t, body: r, badge: a, className: s, textLink: d } = e,
        f = d?.external ?? !0;
    return (0, n.jsxs)("div", {
        className: l()(u.header, s),
        children: [
            (0, n.jsxs)("div", {
                children: [
                    (0, n.jsx)(h, { badge: a }),
                    (0, n.jsx)(o.D, { variant: "heading-md/semibold", className: u.title, children: t }),
                ],
            }),
            (0, n.jsx)(p, { body: r }),
            null != d &&
                (0, n.jsx)(i.Anchor, {
                    onClick: d.onClick,
                    href: d.link,
                    target: f && null != d.link ? "_blank" : void 0,
                    rel: f && null != d.link ? "noopener noreferrer" : void 0,
                    children: (0, n.jsx)(c.E, { variant: "text-sm/normal", className: u.footerLink, children: d.text }),
                }),
        ],
    });
}
function h(e) {
    let { badge: t } = e;
    if (null == t) return null;
    let r = (0, s.U)(t);
    return (0, n.jsx)("div", { className: u.badgeContainer, children: (0, n.jsx)(s.E, { variant: "brand", ...r }) });
}
function p(e) {
    let { body: t } = e;
    if (null == t) return null;
    let r = Array.isArray(t) ? t : [t];
    return 0 === r.length || r.every((e) => null == e || "" === e)
        ? null
        : (0, n.jsx)("div", {
              className: u.headerBody,
              children: r.map((e, t) => (0, n.jsx)(c.E, { variant: "text-sm/normal", color: "none", children: e }, t)),
          });
}
