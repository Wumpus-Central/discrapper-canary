(t.d(n, {
    I: () => v,
    Z: () => y
}),
    t(388685),
    t(35282));
var l = t(255367),
    r = t(73800),
    i = t(442837),
    a = t(755721),
    o = t(481060),
    s = t(325708),
    c = t(213557),
    d = t(433355),
    u = t(324067),
    m = t(984933),
    h = t(430824),
    p = t(496675),
    f = t(626135),
    g = t(216306),
    x = t(775028),
    _ = t(981631),
    C = t(176505),
    j = t(388032),
    b = t(335204);
function v(e) {
    let { channelId: n } = e;
    return (0, l.jsx)(s.Z, {
        sidebarType: s.y.ThreadSidebar,
        maxWidth: 600,
        children: (0, l.jsx)(c.Z, {
            channelId: n,
            baseChannelId: C.oC.CHANNEL_BROWSER
        })
    });
}
function y(e) {
    let { guildId: n } = e,
        [s, c] = r.useState(''),
        v = (0, i.e7)([h.Z], () => h.Z.getGuild(n)),
        y = (0, i.e7)([m.ZP], () => m.ZP.getChannels(n)),
        O = (0, i.e7)([u.Z], () => u.Z.getCategories(n)),
        I = (0, g.Fo)(n, O, y, s),
        N = (0, i.e7)([p.Z], () => p.Z.canWithPartialContext(_.Plq.MANAGE_CHANNELS, { guildId: n })),
        Z = (0, i.e7)([d.ZP], () => null != d.ZP.getCurrentSidebarChannelId(C.oC.CHANNEL_BROWSER)),
        w = r.useCallback(() => c(''), [c]),
        P = r.useCallback(() => {
            (0, o.ZDy)(async () => {
                let { default: e } = await Promise.all([t.e('45094'), t.e('45822')]).then(t.bind(t, 218613));
                return (t) => {
                    var r, i;
                    return (0, l.jsx)(
                        e,
                        ((r = (function (e) {
                            for (var n = 1; n < arguments.length; n++) {
                                var t = null != arguments[n] ? arguments[n] : {},
                                    l = Object.keys(t);
                                ('function' == typeof Object.getOwnPropertySymbols &&
                                    (l = l.concat(
                                        Object.getOwnPropertySymbols(t).filter(function (e) {
                                            return Object.getOwnPropertyDescriptor(t, e).enumerable;
                                        })
                                    )),
                                    l.forEach(function (n) {
                                        var l;
                                        ((l = t[n]),
                                            n in e
                                                ? Object.defineProperty(e, n, {
                                                      value: l,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0
                                                  })
                                                : (e[n] = l));
                                    }));
                            }
                            return e;
                        })({}, t)),
                        (i = i =
                            {
                                channelType: null,
                                guildId: n
                            }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(i))
                            : (function (e, n) {
                                  var t = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var l = Object.getOwnPropertySymbols(e);
                                      t.push.apply(t, l);
                                  }
                                  return t;
                              })(Object(i)).forEach(function (e) {
                                  Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(i, e));
                              }),
                        r)
                    );
                };
            });
        }, [n]);
    return null == v
        ? null
        : (0, l.jsxs)('div', {
              className: b.pageBody,
              children: [
                  (0, l.jsxs)('div', {
                      className: b.header,
                      children: [
                          (0, l.jsx)(o.E1j, {
                              className: b.search,
                              size: o.E1j.Sizes.MEDIUM,
                              query: s,
                              onChange: (e) => {
                                  ('' === s && '' !== e && f.default.track(_.rMx.SEARCH_STARTED, { search_type: 'channel browser' }), c(e.toLowerCase()));
                              },
                              onClear: w,
                              placeholder: j.intl.string(j.t.s5MnmJ)
                          }),
                          N
                              ? (0, l.jsxs)(a.zx, {
                                    className: b.createButton,
                                    innerClassName: b.createButtonInner,
                                    onClick: P,
                                    children: [
                                        (0, l.jsx)(o.qJs, {
                                            size: 'sm',
                                            color: 'currentColor',
                                            className: b.createIcon
                                        }),
                                        j.intl.string(j.t.CumH4u)
                                    ]
                                })
                              : null
                      ]
                  }),
                  (0, l.jsx)(x.Z, {
                      className: b.browser,
                      channels: y,
                      categories: I,
                      guild: v,
                      hasSidebar: Z
                  })
              ]
          });
}
