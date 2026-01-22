n.d(t, {
    A: () => x,
});
var r = n(627968);
n(64700);
var i = n(503698),
    l = n.n(i),
    s = n(732955),
    a = n(397927),
    c = n(58149),
    o = n(289397),
    d = n(997509),
    u = n(954571),
    f = n(634654),
    g = n(652215),
    b = n(985018),
    m = n(587106);

function p(e) {
    let { pills: t } = e;
    return (0, r.jsx)("div", {
        className: m.nM,
        children: t.map((e) =>
            (0, r.jsx)(
                "div",
                {
                    className: m.Io,
                    children: (0, r.jsx)(a.Text, {
                        variant: "text-sm/normal",
                        children: e,
                    }),
                },
                e,
            ),
        ),
    });
}

function x(e) {
    let { guildId: t, showCTA: n, responsive: i = !0 } = e,
        x = [
            [b.intl.string(b.t["73h51J"]), b.intl.string(b.t["gbjs/6"])],
            [b.intl.string(b.t.mCoH0V), b.intl.string(b.t["l/BuSI"])],
            [b.intl.string(b.t.psQktv), b.intl.string(b.t.nMhIZQ)],
            [b.intl.string(b.t["0ItLmF"]), b.intl.string(b.t.yQHqsC)],
        ];
    return (0, r.jsx)("div", {
        className: l()({
            [m.no]: i,
        }),
        children: (0, r.jsxs)("div", {
            className: m.kL,
            children: [
                (0, r.jsxs)("div", {
                    className: m.Qs,
                    children: [
                        (0, r.jsx)("div", {
                            className: m.V_,
                            children: x.map((e, t) =>
                                (0, r.jsx)(
                                    p,
                                    {
                                        pills: e,
                                    },
                                    "pill-row-".concat(t),
                                ),
                            ),
                        }),
                        (0, r.jsxs)("div", {
                            className: m.mv,
                            children: [
                                (0, r.jsx)(a.Text, {
                                    variant: "text-lg/medium",
                                    color: "text-strong",
                                    children: b.intl.string(b.t["67arYL"]),
                                }),
                                n &&
                                    (0, r.jsx)(s.$nd, {
                                        text: b.intl.string(b.t.oyzLpD),
                                        icon: a.EdP,
                                        iconPosition: "end",
                                        size: "md",
                                        onClick: () => {
                                            var e, n;
                                            u.default.track(
                                                g.HAw.GUILD_SHOP_PREVIEW_CLICK,
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
                                                })({}, (0, c.H$)(t))),
                                                (n = n =
                                                    {
                                                        action_taken: f.hN.GET_STARTED_CLICK,
                                                    }),
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
                                                d.A.open(t, g.BEX.GUILD_PRODUCTS);
                                        },
                                    }),
                            ],
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: m.SN,
                    children: [
                        (0, r.jsx)("img", {
                            src: (0, o.n)("server_products/storefront/preview-mural.png"),
                            alt: "",
                            className: m.$G,
                        }),
                        (0, r.jsx)("img", {
                            src: (0, o.n)("server_products/storefront/preview-mural-reduced.png"),
                            alt: "",
                            className: m.rp,
                        }),
                    ],
                }),
            ],
        }),
    });
}
