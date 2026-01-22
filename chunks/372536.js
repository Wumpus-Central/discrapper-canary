n.d(t, {
    A: () => u,
});
var r = n(627968),
    l = n(64700),
    i = n(397927),
    a = n(825244),
    s = n(652215),
    o = n(985018),
    c = n(729934);
let u = (e) => {
    let { guild: t, onAddGuild: u } = e,
        d = l.useCallback(() => {
            (0, i.mMO)(async () => {
                let { default: e } = await Promise.all([n.e("43600"), n.e("65202")]).then(n.bind(n, 234355));
                return (n) => {
                    var l, i;
                    return (0, r.jsx)(
                        e,
                        ((l = (function (e) {
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
                        })({}, n)),
                        (i = i =
                            {
                                guild: t,
                                source: s.PE1.HUB_DIRECTORY,
                                analyticsLocation: {
                                    section: s.JJy.HUB_WELCOME_CTA,
                                },
                            }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(i))
                            : (function (e, t) {
                                  var n = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var r = Object.getOwnPropertySymbols(e);
                                      n.push.apply(n, r);
                                  }
                                  return n;
                              })(Object(i)).forEach(function (e) {
                                  Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(i, e));
                              }),
                        l),
                    );
                };
            });
        }, [t]);
    return (0, r.jsxs)("div", {
        className: c.h2,
        children: [
            (0, r.jsx)("img", {
                className: c.hd,
                alt: "",
                src: n(668778),
            }),
            (0, r.jsx)(i.Heading, {
                className: c._U,
                variant: "heading-xl/semibold",
                children: o.intl.format(o.t.vyvrpC, {
                    guildName: t.name,
                }),
            }),
            (0, r.jsx)(i.Text, {
                variant: "text-md/normal",
                className: c.YI,
                children: o.intl.string(o.t.WypE0i),
            }),
            null != u
                ? (0, r.jsx)(a.E, {
                      className: c.c5,
                      iconUrl: n(928202),
                      header: o.intl.string(o.t.hyK15i),
                      completed: !1,
                      onClick: u,
                  })
                : null,
            (0, r.jsx)(a.E, {
                className: c.c5,
                iconUrl: n(576877),
                header: o.intl.string(o.t.L4bwJ9),
                completed: !1,
                onClick: d,
            }),
        ],
    });
};
