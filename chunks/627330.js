n.d(t, {
    D: () => f,
});
var r = n(627968),
    i = n(503698),
    a = n.n(i),
    o = n(508770),
    s = n(349288),
    l = n(397927),
    c = n(248789);

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
                    (0, r.jsx)(p, {
                        badge: o,
                    }),
                    (0, r.jsx)(l.Heading, {
                        variant: "heading-md/semibold",
                        className: c.title,
                        children: n,
                    }),
                ],
            }),
            (0, r.jsx)(_, {
                body: i,
            }),
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

function p(e) {
    let { badge: t } = e;
    if (null == t) return null;
    let n = (0, o.U)(t);
    return (0, r.jsx)("div", {
        className: c.badgeContainer,
        children: (0, r.jsx)(
            o.E,
            d(
                {
                    variant: "brand",
                },
                n,
            ),
        ),
    });
}

function _(e) {
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
