n.d(t, { Y: () => f });
var r = n(54381),
    i = n(120356),
    a = n.n(i),
    o = n(313666),
    s = n(756715),
    l = n(481060),
    c = n(929618);
function u(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function d(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                u(e, t, n[t]);
            });
    }
    return e;
}
function f(e) {
    var t;
    let { title: n, body: i, badge: o, className: u, textLink: d } = e,
        f = null == (t = null == d ? void 0 : d.external) || t;
    return (0, r.jsxs)("div", {
        className: a()(c.header, u),
        children: [
            (0, r.jsxs)("div", {
                children: [
                    (0, r.jsx)(_, { badge: o }),
                    (0, r.jsx)(l.Heading, {
                        variant: "heading-md/semibold",
                        className: c.title,
                        children: n,
                    }),
                ],
            }),
            (0, r.jsx)(p, { body: i }),
            null != d &&
                (0, r.jsx)(s.Anchor, {
                    onClick: d.onClick,
                    href: d.link,
                    target: f && null != d.link ? "_blank" : void 0,
                    rel: f && null != d.link ? "noopener noreferrer" : void 0,
                    children: (0, r.jsx)(l.Text, {
                        variant: "text-sm/normal",
                        className: c.footerLink,
                        children: d.text,
                    }),
                }),
        ],
    });
}
function _(e) {
    let { badge: t } = e;
    if (null == t) return null;
    let n = (0, o.R)(t);
    return (0, r.jsx)("div", {
        className: c.badgeContainer,
        children: (0, r.jsx)(o.C, d({}, n)),
    });
}
function p(e) {
    let { body: t } = e;
    if (null == t) return null;
    let n = Array.isArray(t) ? t : [t];
    return 0 === n.length || n.every((e) => null == e || "" === e)
        ? null
        : (0, r.jsx)("div", {
              className: c.headerBody,
              children: n.map((e, t) =>
                  (0, r.jsx)(
                      l.Text,
                      {
                          variant: "text-sm/normal",
                          color: "none",
                          children: e,
                      },
                      t,
                  ),
              ),
          });
}
