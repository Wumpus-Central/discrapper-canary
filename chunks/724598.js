n.d(t, { Z: () => h });
var r = n(54381);
n(473749);
var i = n(120356),
    l = n.n(i),
    a = n(159691),
    s = n(481060),
    o = n(367907),
    c = n(357352),
    d = n(434404),
    u = n(626135),
    g = n(629481),
    f = n(981631),
    m = n(388032),
    b = n(692831);
function p(e) {
    let { pills: t } = e;
    return (0, r.jsx)("div", {
        className: b.row,
        children: t.map((e) =>
            (0, r.jsx)(
                "div",
                {
                    className: b.pill,
                    children: (0, r.jsx)(s.Text, {
                        variant: "text-sm/normal",
                        children: e,
                    }),
                },
                e,
            ),
        ),
    });
}
function h(e) {
    let { guildId: t, showCTA: n, responsive: i = !0 } = e,
        h = [
            [m.intl.string(m.t["73h51J"]), m.intl.string(m.t["gbjs/6"])],
            [m.intl.string(m.t.mCoH0V), m.intl.string(m.t["l/BuSI"])],
            [m.intl.string(m.t.psQktv), m.intl.string(m.t.nMhIZQ)],
            [m.intl.string(m.t["0ItLmF"]), m.intl.string(m.t.yQHqsC)],
        ];
    return (0, r.jsx)("div", {
        className: l()({ [b.responsive]: i }),
        children: (0, r.jsxs)("div", {
            className: b.container,
            children: [
                (0, r.jsxs)("div", {
                    className: b.content,
                    children: [
                        (0, r.jsx)("div", {
                            className: b.pillContainer,
                            children: h.map((e, t) => (0, r.jsx)(p, { pills: e }, "pill-row-".concat(t))),
                        }),
                        (0, r.jsxs)("div", {
                            className: b.ctaContent,
                            children: [
                                (0, r.jsx)(s.Text, {
                                    variant: "text-lg/medium",
                                    color: "text-strong",
                                    children: m.intl.string(m.t["67arYL"]),
                                }),
                                n &&
                                    (0, r.jsx)(a.zxk, {
                                        text: m.intl.string(m.t.oyzLpD),
                                        icon: s.ZSh,
                                        iconPosition: "end",
                                        size: "md",
                                        onClick: () => {
                                            var e, n;
                                            u.default.track(
                                                f.rMx.GUILD_SHOP_PREVIEW_CLICK,
                                                ((e = (function (e) {
                                                    for (var t = 1; t < arguments.length; t++) {
                                                        var n = null != arguments[t] ? arguments[t] : {},
                                                            r = Object.keys(n);
                                                        "function" == typeof Object.getOwnPropertySymbols &&
                                                            (r = r.concat(
                                                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                                                    return Object.getOwnPropertyDescriptor(n, e)
                                                                        .enumerable;
                                                                }),
                                                            )),
                                                            r.forEach(function (t) {
                                                                var r;
                                                                (r = n[t]),
                                                                    t in e
                                                                        ? Object.defineProperty(e, t, {
                                                                              value: r,
                                                                              enumerable: !0,
                                                                              configurable: !0,
                                                                              writable: !0,
                                                                          })
                                                                        : (e[t] = r);
                                                            });
                                                    }
                                                    return e;
                                                })({}, (0, o.hH)(t))),
                                                (n = n = { action_taken: g.mz.GET_STARTED_CLICK }),
                                                Object.getOwnPropertyDescriptors
                                                    ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                                                    : (function (e, t) {
                                                          var n = Object.keys(e);
                                                          if (Object.getOwnPropertySymbols) {
                                                              var r = Object.getOwnPropertySymbols(e);
                                                              n.push.apply(n, r);
                                                          }
                                                          return n;
                                                      })(Object(n)).forEach(function (t) {
                                                          Object.defineProperty(
                                                              e,
                                                              t,
                                                              Object.getOwnPropertyDescriptor(n, t),
                                                          );
                                                      }),
                                                e),
                                            ),
                                                d.Z.open(t, f.pNK.GUILD_PRODUCTS);
                                        },
                                    }),
                            ],
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: b.muralImageContainer,
                    children: [
                        (0, r.jsx)("img", {
                            src: (0, c.b)("server_products/storefront/preview-mural.png"),
                            alt: "",
                            className: b.muralImage,
                        }),
                        (0, r.jsx)("img", {
                            src: (0, c.b)("server_products/storefront/preview-mural-reduced.png"),
                            alt: "",
                            className: b.muralImageReducedWidth,
                        }),
                    ],
                }),
            ],
        }),
    });
}
