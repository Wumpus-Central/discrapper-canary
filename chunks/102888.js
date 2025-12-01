n.d(t, { Z: () => d });
var r = n(54381),
    i = n(473749),
    l = n(481060),
    a = n(128557),
    s = n(981631),
    o = n(388032),
    c = n(957717);
let d = (e) => {
    let { guild: t, onAddGuild: d } = e,
        u = i.useCallback(() => {
            (0, l.ZDy)(async () => {
                let { default: e } = await Promise.all([n.e("7654"), n.e("77653")]).then(n.bind(n, 560114));
                return (n) => {
                    var i, l;
                    return (0, r.jsx)(
                        e,
                        ((i = (function (e) {
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
                        (l = l =
                            {
                                guild: t,
                                source: s.t4x.HUB_DIRECTORY,
                                analyticsLocation: { section: s.jXE.HUB_WELCOME_CTA },
                            }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(l))
                            : (function (e, t) {
                                  var n = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var r = Object.getOwnPropertySymbols(e);
                                      n.push.apply(n, r);
                                  }
                                  return n;
                              })(Object(l)).forEach(function (e) {
                                  Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(l, e));
                              }),
                        i),
                    );
                };
            });
        }, [t]);
    return (0, r.jsxs)("div", {
        className: c.emptyWrapper,
        children: [
            (0, r.jsx)("img", {
                className: c.emptyImage,
                alt: "",
                src: n(705845),
            }),
            (0, r.jsx)(l.Heading, {
                className: c.emptyTitle,
                variant: "heading-xl/semibold",
                children: o.intl.format(o.t.vyvrpC, { guildName: t.name }),
            }),
            (0, r.jsx)(l.Text, {
                variant: "text-md/normal",
                className: c.emptySubtitle,
                children: o.intl.string(o.t.WypE0i),
            }),
            null != d
                ? (0, r.jsx)(a.i, {
                      className: c.emptyCTA,
                      iconUrl: n(362827),
                      header: o.intl.string(o.t.hyK15i),
                      completed: !1,
                      onClick: d,
                  })
                : null,
            (0, r.jsx)(a.i, {
                className: c.emptyCTA,
                iconUrl: n(538548),
                header: o.intl.string(o.t.L4bwJ9),
                completed: !1,
                onClick: u,
            }),
        ],
    });
};
