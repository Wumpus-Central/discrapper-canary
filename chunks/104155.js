t.d(n, {
    I: () => b,
    Z: () => N
}),
    t(47120),
    t(301563);
var r = t(200651),
    l = t(192379),
    a = t(442837),
    i = t(481060),
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
    return (0, r.jsx)(o.Z, {
        sidebarType: o.y.ThreadSidebar,
        maxWidth: 600,
        children: (0, r.jsx)(s.Z, {
            channelId: n,
            baseChannelId: _.oC.CHANNEL_BROWSER
        })
    });
}
function N(e) {
    let { guildId: n } = e,
        [o, s] = l.useState(''),
        b = (0, a.e7)([m.Z], () => m.Z.getGuild(n)),
        N = (0, a.e7)([u.ZP], () => u.ZP.getChannels(n)),
        v = (0, a.e7)([d.Z], () => d.Z.getCategories(n)),
        y = (0, f.Fo)(n, v, N, o),
        O = (0, a.e7)([h.Z], () => h.Z.canWithPartialContext(x.Plq.MANAGE_CHANNELS, { guildId: n })),
        I = (0, a.e7)([c.ZP], () => null != c.ZP.getCurrentSidebarChannelId(_.oC.CHANNEL_BROWSER)),
        Z = l.useCallback(() => s(''), [s]),
        w = l.useCallback(() => {
            (0, i.ZDy)(async () => {
                let { default: e } = await Promise.all([t.e('45094'), t.e('45822')]).then(t.bind(t, 218613));
                return (t) => {
                    var l, a;
                    return (0, r.jsx)(
                        e,
                        ((l = (function (e) {
                            for (var n = 1; n < arguments.length; n++) {
                                var t = null != arguments[n] ? arguments[n] : {},
                                    r = Object.keys(t);
                                'function' == typeof Object.getOwnPropertySymbols &&
                                    (r = r.concat(
                                        Object.getOwnPropertySymbols(t).filter(function (e) {
                                            return Object.getOwnPropertyDescriptor(t, e).enumerable;
                                        })
                                    )),
                                    r.forEach(function (n) {
                                        var r;
                                        (r = t[n]),
                                            n in e
                                                ? Object.defineProperty(e, n, {
                                                      value: r,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0
                                                  })
                                                : (e[n] = r);
                                    });
                            }
                            return e;
                        })({}, t)),
                        (a = a =
                            {
                                channelType: null,
                                guildId: n
                            }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(a))
                            : (function (e, n) {
                                  var t = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var r = Object.getOwnPropertySymbols(e);
                                      t.push.apply(t, r);
                                  }
                                  return t;
                              })(Object(a)).forEach(function (e) {
                                  Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(a, e));
                              }),
                        l)
                    );
                };
            });
        }, [n]);
    return null == b
        ? null
        : (0, r.jsxs)('div', {
              className: j.pageBody,
              children: [
                  (0, r.jsxs)('div', {
                      className: j.header,
                      children: [
                          (0, r.jsx)(i.E1j, {
                              className: j.search,
                              size: i.E1j.Sizes.MEDIUM,
                              query: o,
                              onChange: (e) => {
                                  '' === o && '' !== e && p.default.track(x.rMx.SEARCH_STARTED, { search_type: 'channel browser' }), s(e.toLowerCase());
                              },
                              onClear: Z,
                              placeholder: C.NW.string(C.t.s5MnmJ)
                          }),
                          O
                              ? (0, r.jsxs)(i.zxk, {
                                    className: j.createButton,
                                    innerClassName: j.createButtonInner,
                                    onClick: w,
                                    children: [
                                        (0, r.jsx)(i.qJs, {
                                            size: 'sm',
                                            color: 'currentColor',
                                            className: j.createIcon
                                        }),
                                        C.NW.string(C.t.CumH4u)
                                    ]
                                })
                              : null
                      ]
                  }),
                  (0, r.jsx)(g.Z, {
                      className: j.browser,
                      channels: N,
                      categories: y,
                      guild: b,
                      hasSidebar: I
                  })
              ]
          });
}
