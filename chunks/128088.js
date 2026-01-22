s.d(t, { A: () => h }), s(896048);
var r = s(627968),
    a = s(64700),
    n = s(503698),
    l = s.n(n),
    i = s(827734),
    c = s(397927),
    d = s(580630),
    o = s(652215),
    m = s(985018),
    x = s(230378);
function u(e) {
    for (var t = 1; t < arguments.length; t++) {
        var s = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(s);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(s).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(s, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = s[t]),
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
}
function j(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var s = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      s.push.apply(s, r);
                  }
                  return s;
              })(Object(t)).forEach(function (s) {
                  Object.defineProperty(e, s, Object.getOwnPropertyDescriptor(t, s));
              }),
        e
    );
}
function f(e) {
    let { price: t, selected: s, onClick: a } = e;
    return (0, r.jsxs)(c.DUT, {
        className: l()(x.y3, { [x.wH]: s }),
        onClick: a,
        children: [
            s
                ? (0, r.jsx)(c.yr3, {
                      size: "custom",
                      width: 20,
                      height: 20,
                      secondaryColor: i.A.unsafe_rawColors.WHITE.css,
                      color: i.A.unsafe_rawColors.BRAND_500.css,
                  })
                : (0, r.jsx)("svg", {
                      width: "20",
                      height: "20",
                      children: (0, r.jsx)("circle", {
                          cx: 10,
                          cy: 10,
                          r: 10,
                          className: x.n1,
                      }),
                  }),
            (0, r.jsxs)("div", {
                className: x.Z6,
                children: [
                    (0, r.jsx)(c.Text, {
                        variant: "text-sm/normal",
                        tag: "span",
                        children: (0, d.$g)(t, o.Yri.USD),
                    }),
                    (0, r.jsx)(c.Text, {
                        variant: "text-xxs/medium",
                        tag: "span",
                        children: "/mo.",
                    }),
                ],
            }),
        ],
    });
}
function h(e) {
    let { selectedTemplate: t, handleSelectTemplate: s, newPricesToPick: n } = e,
        [l, i] = a.useState(0);
    return (0, r.jsxs)("div", {
        className: x.kL,
        children: [
            (0, r.jsxs)("div", {
                className: x.Qs,
                children: [
                    (0, r.jsx)(c.Heading, {
                        variant: "heading-md/semibold",
                        children: m.intl.format(m.t["5WZ9Ct"], { tierName: t.listings[0].name }),
                    }),
                    (0, r.jsx)(c.Text, {
                        variant: "text-sm/normal",
                        className: x.G3,
                        children: m.intl.format(m.t["5i7Uhb"], {
                            price: (0, d.$g)(t.listings[0].price_tier, o.Yri.USD),
                        }),
                    }),
                    n.map((e, t) =>
                        (0, r.jsx)(
                            f,
                            {
                                price: e,
                                selected: t === l,
                                onClick: () => i(t),
                            },
                            e,
                        ),
                    ),
                ],
            }),
            (0, r.jsx)(c.Button, {
                variant: "primary",
                text: m.intl.string(m.t["1W7mCt"]),
                onClick: () => {
                    s(j(u({}, t), { listings: [j(u({}, t.listings[0]), { price_tier: n[l] })] }));
                },
            }),
        ],
    });
}
