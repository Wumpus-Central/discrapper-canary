n.d(t, { Z: () => b });
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
    m = n(981631),
    p = n(388032),
    f = n(689409);
function h(e) {
    let { pills: t } = e;
    return (0, r.jsx)("div", {
        className: f.row,
        children: t.map((e) =>
            (0, r.jsx)(
                "div",
                {
                    className: f.pill,
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
function b(e) {
    let { guildId: t, showCTA: n, responsive: i = !0 } = e,
        b = [
            [p.intl.string(p.t["73h51J"]), p.intl.string(p.t["gbjs/6"])],
            [p.intl.string(p.t.mCoH0V), p.intl.string(p.t["l/BuSI"])],
            [p.intl.string(p.t.psQktv), p.intl.string(p.t.nMhIZQ)],
            [p.intl.string(p.t["0ItLmF"]), p.intl.string(p.t.yQHqsC)],
        ];
    return (0, r.jsx)("div", {
        className: l()({ [f.responsive]: i }),
        children: (0, r.jsxs)("div", {
            className: f.container,
            children: [
                (0, r.jsxs)("div", {
                    className: f.content,
                    children: [
                        (0, r.jsx)("div", {
                            className: f.pillContainer,
                            children: b.map((e, t) => (0, r.jsx)(h, { pills: e }, "pill-row-".concat(t))),
                        }),
                        (0, r.jsxs)("div", {
                            className: f.ctaContent,
                            children: [
                                (0, r.jsx)(s.Text, {
                                    variant: "text-lg/medium",
                                    color: "header-primary",
                                    children: p.intl.string(p.t["67arYL"]),
                                }),
                                n &&
                                    (0, r.jsx)(a.zxk, {
                                        text: p.intl.string(p.t.oyzLpD),
                                        icon: s.ZSh,
                                        iconPosition: "end",
                                        size: "md",
                                        onClick: () => {
                                            var e, n;
                                            u.default.track(
                                                m.rMx.GUILD_SHOP_PREVIEW_CLICK,
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
                                                d.Z.open(t, m.pNK.GUILD_PRODUCTS);
                                        },
                                    }),
                            ],
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: f.muralImageContainer,
                    children: [
                        (0, r.jsx)("img", {
                            src: (0, c.b)("server_products/storefront/preview-mural.png"),
                            alt: "",
                            className: f.muralImage,
                        }),
                        (0, r.jsx)("img", {
                            src: (0, c.b)("server_products/storefront/preview-mural-reduced.png"),
                            alt: "",
                            className: f.muralImageReducedWidth,
                        }),
                    ],
                }),
            ],
        }),
    });
}
