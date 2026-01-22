l.d(t, { A: () => f });
var n = l(627968);
l(64700);
var r = l(172218),
    s = l(397927),
    a = l(854818),
    i = l(212407),
    o = l(815280),
    c = l(985018),
    u = l(922868);
function d(e) {
    for (var t = 1; t < arguments.length; t++) {
        var l = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(l);
        "function" == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(l).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(l, e).enumerable;
                }),
            )),
            n.forEach(function (t) {
                var n;
                (n = l[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = n);
            });
    }
    return e;
}
let f = (e) => {
    let { immersiveBannerBlock: t, onVisibilityChange: l } = e,
        f = (0, r.K)(
            (e) => {
                null == l || l(e);
            },
            0.33,
            null != l,
        ),
        { bannerUrl: b, bannerAnimatedUrl: g } = (0, i.qY)(t),
        p = null != t.textColor ? { color: t.textColor } : void 0,
        m = null != t.body && "" !== t.body,
        h = null != t.helpCenterUrl && "" !== t.helpCenterUrl;
    return (0, n.jsxs)("div", {
        ref: f,
        className: u.BX,
        children: [
            (0, n.jsx)("div", {
                className: u.vK,
                children:
                    null != b &&
                    (0, n.jsx)(o.A, {
                        bannerStatic: b,
                        bannerAnimated: g,
                    }),
            }),
            (0, n.jsx)("div", {
                className: u.HQ,
                children: (0, n.jsxs)("div", {
                    className: u.Yn,
                    children: [
                        null != t.endTime
                            ? (0, n.jsx)(a.e, {
                                  endDate: t.endTime,
                                  size: "lg",
                              })
                            : null,
                        (0, n.jsx)(s.Heading, {
                            variant: "heading-xxl/bold",
                            className: u.DD,
                            color: "text-strong",
                            style: d({}, p),
                            children: t.title,
                        }),
                        m || h
                            ? (0, n.jsxs)(s.Text, {
                                  variant: "text-md/medium",
                                  style: d({}, p),
                                  children: [
                                      m && t.body,
                                      m && h && " ",
                                      h &&
                                          (0, n.jsx)(s.MzZ, {
                                              href: t.helpCenterUrl,
                                              className: u.CU,
                                              style: d({}, p),
                                              children: c.intl.string(c.t.O7ADgv),
                                          }),
                                  ],
                              })
                            : null,
                    ],
                }),
            }),
        ],
    });
};
