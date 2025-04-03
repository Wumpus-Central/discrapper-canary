n.d(t, { Z: () => u });
var r = n(200651),
    i = n(192379),
    l = n(481060),
    o = n(128557),
    a = n(981631),
    s = n(388032),
    c = n(334814);
let u = (e) => {
    let { guild: t, onAddGuild: u } = e,
        d = i.useCallback(() => {
            (0, l.ZDy)(async () => {
                let { default: e } = await Promise.all([n.e('7654'), n.e('96814')]).then(n.bind(n, 560114));
                return (n) => {
                    var i, l;
                    return (0, r.jsx)(
                        e,
                        ((i = (function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {},
                                    r = Object.keys(n);
                                'function' == typeof Object.getOwnPropertySymbols &&
                                    (r = r.concat(
                                        Object.getOwnPropertySymbols(n).filter(function (e) {
                                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                        })
                                    )),
                                    r.forEach(function (t) {
                                        var r;
                                        (r = n[t]),
                                            t in e
                                                ? Object.defineProperty(e, t, {
                                                      value: r,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0
                                                  })
                                                : (e[t] = r);
                                    });
                            }
                            return e;
                        })({}, n)),
                        (l = l =
                            {
                                guild: t,
                                source: a.t4x.HUB_DIRECTORY,
                                analyticsLocation: { section: a.jXE.HUB_WELCOME_CTA }
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
                        i)
                    );
                };
            });
        }, [t]);
    return (0, r.jsxs)('div', {
        className: c.emptyWrapper,
        children: [
            (0, r.jsx)('img', {
                className: c.emptyImage,
                alt: '',
                src: n(705845)
            }),
            (0, r.jsx)(l.X6q, {
                className: c.emptyTitle,
                variant: 'heading-xl/semibold',
                children: s.NW.format(s.t.vyvrpK, { guildName: t.name })
            }),
            (0, r.jsx)(l.Text, {
                variant: 'text-md/normal',
                className: c.emptySubtitle,
                children: s.NW.string(s.t.WypE0t)
            }),
            null != u
                ? (0, r.jsx)(o.i, {
                      className: c.emptyCTA,
                      iconUrl: n(362827),
                      header: s.NW.string(s.t.hyK15u),
                      completed: !1,
                      onClick: u
                  })
                : null,
            (0, r.jsx)(o.i, {
                className: c.emptyCTA,
                iconUrl: n(538548),
                header: s.NW.string(s.t.L4bwJy),
                completed: !1,
                onClick: d
            })
        ]
    });
};
