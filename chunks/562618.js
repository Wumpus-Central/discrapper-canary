n.d(t, { Y: () => f });
var r = n(951288),
    i = n(120356),
    a = n.n(i),
    o = n(756715),
    s = n(446673),
    l = n(481060),
    c = n(254477);
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
    let { title: n, body: i, badge: s, className: u, textLink: d, hasBottomMargin: f = !1 } = e,
        p = null == (t = null == d ? void 0 : d.external) || t;
    return (0, r.jsxs)("div", {
        className: a()(c.header, u, { [c.hasActions]: f }),
        children: [
            (0, r.jsxs)("div", {
                children: [
                    (0, r.jsx)(_, { badge: s }),
                    (0, r.jsx)(l.X6q, {
                        variant: "heading-md/semibold",
                        className: c.title,
                        children: n,
                    }),
                ],
            }),
            null != i &&
                "" !== i &&
                (0, r.jsx)(l.Text, {
                    variant: "text-sm/normal",
                    className: c.headerBody,
                    children: i,
                }),
            null != d &&
                (0, r.jsx)(o.Anchor, {
                    href: d.link,
                    target: p ? "_blank" : void 0,
                    rel: p ? "noopener noreferrer" : void 0,
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
    let n = (0, s.R)(t);
    return (0, r.jsx)("div", {
        className: c.badgeContainer,
        children: (0, r.jsx)(s.C, d({}, n)),
    });
}
