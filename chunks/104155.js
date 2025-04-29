t.d(n, {
    I: () => b,
    Z: () => v
}),
    t(388685),
    t(35282);
var l = t(255367),
    r = t(73800),
    i = t(442837),
    a = t(481060),
    o = t(325708),
    s = t(213557),
    c = t(433355),
    d = t(324067),
    u = t(984933),
    m = t(430824),
    h = t(496675),
    p = t(626135),
    f = t(216306),
    g = t(775028),
    x = t(981631),
    _ = t(176505),
    C = t(388032),
    j = t(335204);
function b(e) {
    let { channelId: n } = e;
    return (0, l.jsx)(o.Z, {
        sidebarType: o.y.ThreadSidebar,
        maxWidth: 600,
        children: (0, l.jsx)(s.Z, {
            channelId: n,
            baseChannelId: _.oC.CHANNEL_BROWSER
        })
    });
}
function v(e) {
    let { guildId: n } = e,
        [o, s] = r.useState(''),
        b = (0, i.e7)([m.Z], () => m.Z.getGuild(n)),
        v = (0, i.e7)([u.ZP], () => u.ZP.getChannels(n)),
        y = (0, i.e7)([d.Z], () => d.Z.getCategories(n)),
        O = (0, f.Fo)(n, y, v, o),
        I = (0, i.e7)([h.Z], () => h.Z.canWithPartialContext(x.Plq.MANAGE_CHANNELS, { guildId: n })),
        N = (0, i.e7)([c.ZP], () => null != c.ZP.getCurrentSidebarChannelId(_.oC.CHANNEL_BROWSER)),
        Z = r.useCallback(() => s(''), [s]),
        w = r.useCallback(() => {
            (0, a.ZDy)(async () => {
                let { default: e } = await Promise.all([t.e('45094'), t.e('45822')]).then(t.bind(t, 218613));
                return (t) => {
                    var r, i;
                    return (0, l.jsx)(
                        e,
                        ((r = (function (e) {
                            for (var n = 1; n < arguments.length; n++) {
                                var t = null != arguments[n] ? arguments[n] : {},
                                    l = Object.keys(t);
                                'function' == typeof Object.getOwnPropertySymbols &&
                                    (l = l.concat(
                                        Object.getOwnPropertySymbols(t).filter(function (e) {
                                            return Object.getOwnPropertyDescriptor(t, e).enumerable;
                                        })
                                    )),
                                    l.forEach(function (n) {
                                        var l;
                                        (l = t[n]),
                                            n in e
                                                ? Object.defineProperty(e, n, {
                                                      value: l,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0
                                                  })
                                                : (e[n] = l);
                                    });
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
                                  '' === o && '' !== e && p.default.track(x.rMx.SEARCH_STARTED, { search_type: 'channel browser' }), s(e.toLowerCase());
                              },
                              onClear: Z,
                              placeholder: C.intl.string(C.t.s5MnmJ)
                          }),
                          I
                              ? (0, l.jsxs)(a.zxk, {
                                    className: j.createButton,
                                    innerClassName: j.createButtonInner,
                                    onClick: w,
                                    children: [
                                        (0, l.jsx)(a.qJs, {
                                            size: 'sm',
                                            color: 'currentColor',
                                            className: j.createIcon
                                        }),
                                        C.intl.string(C.t.CumH4u)
                                    ]
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
