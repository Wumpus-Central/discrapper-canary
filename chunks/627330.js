n.d(t, { D: () => d });
var i = n(477900),
    s = n(503698),
    a = n.n(s),
    l = n(508770),
    r = n(297264),
    E = n(834730),
    o = n(349288),
    c = n(753094);
function d(e) {
    let { title: t, body: n, badge: s, className: l, textLink: d } = e,
        u = d?.external ?? !0;
    return (0, i.jsxs)("div", {
        className: a()(c.header, l),
        children: [
            (0, i.jsxs)("div", {
                children: [
                    (0, i.jsx)(_, { badge: s }),
                    (0, i.jsx)(r.D, { variant: "heading-md/semibold", className: c.title, children: t }),
                ],
            }),
            (0, i.jsx)(S, { body: n }),
            null != d &&
                (0, i.jsx)(o.Anchor, {
                    onClick: d.onClick,
                    href: d.link,
                    target: u && null != d.link ? "_blank" : void 0,
                    rel: u && null != d.link ? "noopener noreferrer" : void 0,
                    children: (0, i.jsx)(E.E, { variant: "text-sm/normal", className: c.footerLink, children: d.text }),
                }),
        ],
    });
}
function _(e) {
    let { badge: t } = e;
    if (null == t) return null;
    let n = (0, l.U)(t);
    return (0, i.jsx)("div", { className: c.badgeContainer, children: (0, i.jsx)(l.E, { variant: "brand", ...n }) });
}
function S(e) {
    let { body: t } = e;
    if (null == t) return null;
    let n = Array.isArray(t) ? t : [t];
    return 0 === n.length || n.every((e) => null == e || "" === e)
        ? null
        : (0, i.jsx)("div", {
              className: c.headerBody,
              children: n.map((e, t) => (0, i.jsx)(E.E, { variant: "text-sm/normal", color: "none", children: e }, t)),
          });
}
