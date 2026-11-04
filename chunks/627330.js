var r = l(477900),
    i = l(503698),
    a = l.n(i),
    s = l(805251),
    t = l(534514),
    d = l(28863),
    o = l(834730),
    c = l(489387);
function u(n) {
    let { badge: e } = n;
    if (null == e) return null;
    let l = (0, s.U)(e);
    return (0, r.jsx)("div", { className: c.badgeContainer, children: (0, r.jsx)(s.E, { variant: "primary", ...l }) });
}
function h(n) {
    let { body: e } = n;
    if (null == e) return null;
    let l = Array.isArray(e) ? e : [e];
    return 0 === l.length || l.every((n) => null == n || "" === n)
        ? null
        : (0, r.jsx)("div", {
              className: c.headerBody,
              children: l.map((n, e) => (0, r.jsx)(o.E, { variant: "body-sm/normal", color: "none", children: n }, e)),
          });
}
l.d(
    e,
    {},
    {
        D: function (n) {
            let { title: e, body: l, badge: i, className: s, textLink: m } = n,
                x = m?.external ?? !0;
            return (0, r.jsxs)("div", {
                className: a()(c.header, s),
                children: [
                    (0, r.jsxs)("div", {
                        children: [
                            (0, r.jsx)(u, { badge: i }),
                            (0, r.jsx)(t.D, { variant: "heading-sm/semibold", className: c.title, children: e }),
                        ],
                    }),
                    (0, r.jsx)(h, { body: l }),
                    null != m &&
                        (0, r.jsx)(d.Anchor, {
                            onClick: m.onClick,
                            href: m.link,
                            target: x && null != m.link ? "_blank" : void 0,
                            rel: x && null != m.link ? "noopener noreferrer" : void 0,
                            children: (0, r.jsx)(o.E, {
                                variant: "body-sm/normal",
                                className: c.footerLink,
                                children: m.text,
                            }),
                        }),
                ],
            });
        },
    },
);
