n.d(t, { D: () => d });
var r = n(477900),
    a = n(503698),
    l = n.n(a),
    o = n(508770),
    s = n(297264),
    i = n(28863),
    c = n(834730),
    u = n(489387);
function d(e) {
    let { title: t, body: n, badge: a, className: o, textLink: d } = e,
        h = d?.external ?? !0;
    return (0, r.jsxs)("div", {
        className: l()(u.header, o),
        children: [
            (0, r.jsxs)("div", {
                children: [
                    (0, r.jsx)(f, { badge: a }),
                    (0, r.jsx)(s.D, { variant: "heading-md/semibold", className: u.title, children: t }),
                ],
            }),
            (0, r.jsx)(p, { body: n }),
            null != d &&
                (0, r.jsx)(i.Anchor, {
                    onClick: d.onClick,
                    href: d.link,
                    target: h && null != d.link ? "_blank" : void 0,
                    rel: h && null != d.link ? "noopener noreferrer" : void 0,
                    children: (0, r.jsx)(c.E, { variant: "text-sm/normal", className: u.footerLink, children: d.text }),
                }),
        ],
    });
}
function f(e) {
    let { badge: t } = e;
    if (null == t) return null;
    let n = (0, o.U)(t);
    return (0, r.jsx)("div", { className: u.badgeContainer, children: (0, r.jsx)(o.E, { variant: "brand", ...n }) });
}
function p(e) {
    let { body: t } = e;
    if (null == t) return null;
    let n = Array.isArray(t) ? t : [t];
    return 0 === n.length || n.every((e) => null == e || "" === e)
        ? null
        : (0, r.jsx)("div", {
              className: u.headerBody,
              children: n.map((e, t) => (0, r.jsx)(c.E, { variant: "text-sm/normal", color: "none", children: e }, t)),
          });
}
