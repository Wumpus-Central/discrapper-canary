(n.d(t, {
    I: () => b,
    Z: () => v
}),
    n(388685),
    n(35282));
var l = n(255367),
    r = n(73800),
    i = n(442837),
    a = n(481060),
    o = n(325708),
    s = n(213557),
    c = n(433355),
    d = n(324067),
    u = n(984933),
    m = n(430824),
    h = n(496675),
    p = n(626135),
    f = n(216306),
    g = n(775028),
    x = n(981631),
    _ = n(176505),
    C = n(388032),
    j = n(335204);
function b(e) {
    let { channelId: t } = e;
    return (0, l.jsx)(o.Z, {
        sidebarType: o.y.ThreadSidebar,
        maxWidth: 600,
        children: (0, l.jsx)(s.Z, {
            channelId: t,
            baseChannelId: _.oC.CHANNEL_BROWSER
        })
    });
}
function v(e) {
    let { guildId: t } = e,
        [o, s] = r.useState(''),
        b = (0, i.e7)([m.Z], () => m.Z.getGuild(t)),
        v = (0, i.e7)([u.ZP], () => u.ZP.getChannels(t)),
        y = (0, i.e7)([d.Z], () => d.Z.getCategories(t)),
        O = (0, f.Fo)(t, y, v, o),
        Z = (0, i.e7)([h.Z], () => h.Z.canWithPartialContext(x.Plq.MANAGE_CHANNELS, { guildId: t })),
        N = (0, i.e7)([c.ZP], () => null != c.ZP.getCurrentSidebarChannelId(_.oC.CHANNEL_BROWSER)),
        I = r.useCallback(() => s(''), [s]),
        w = r.useCallback(() => {
            (0, a.ZDy)(async () => {
                let { default: e } = await Promise.all([n.e('45094'), n.e('45822')]).then(n.bind(n, 218613));
                return (n) => {
                    var r, i;
                    return (0, l.jsx)(
                        e,
                        ((r = (function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {},
                                    l = Object.keys(n);
                                ('function' == typeof Object.getOwnPropertySymbols &&
                                    (l = l.concat(
                                        Object.getOwnPropertySymbols(n).filter(function (e) {
                                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                        })
                                    )),
                                    l.forEach(function (t) {
                                        var l;
                                        ((l = n[t]),
                                            t in e
                                                ? Object.defineProperty(e, t, {
                                                      value: l,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0
                                                  })
                                                : (e[t] = l));
                                    }));
                            }
                            return e;
                        })({}, n)),
                        (i = i =
                            {
                                channelType: null,
                                guildId: t
                            }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(i))
                            : (function (e, t) {
                                  var n = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var l = Object.getOwnPropertySymbols(e);
                                      n.push.apply(n, l);
                                  }
                                  return n;
                              })(Object(i)).forEach(function (e) {
                                  Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(i, e));
                              }),
                        r)
                    );
                };
            });
        }, [t]);
    return null == b
        ? null
        : (0, l.jsxs)('div', {
              className: j.pageBody,
              children: [
                  (0, l.jsxs)('div', {
                      className: j.header,
                      children: [
                          (0, l.jsx)(a.E1j, {
                              className: j.search,
                              size: a.E1j.Sizes.MEDIUM,
                              query: o,
                              onChange: (e) => {
                                  ('' === o && '' !== e && p.default.track(x.rMx.SEARCH_STARTED, { search_type: 'channel browser' }), s(e.toLowerCase()));
                              },
                              onClear: I,
                              placeholder: C.intl.string(C.t.s5MnmJ)
                          }),
                          Z
                              ? (0, l.jsx)(a.zxk, {
                                    icon: a.qJs,
                                    onClick: w,
                                    text: C.intl.string(C.t.CumH4u)
                                })
                              : null
                      ]
                  }),
                  (0, l.jsx)(g.Z, {
                      className: j.browser,
                      channels: v,
                      categories: O,
                      guild: b,
                      hasSidebar: N
                  })
              ]
          });
}
