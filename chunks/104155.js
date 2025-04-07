n.d(t, {
    I: () => j,
    Z: () => N
}),
    n(388685),
    n(35282);
var r = n(200651),
    l = n(192379),
    a = n(442837),
    i = n(481060),
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
    b = n(335204);
function j(e) {
    let { channelId: t } = e;
    return (0, r.jsx)(o.Z, {
        sidebarType: o.y.ThreadSidebar,
        maxWidth: 600,
        children: (0, r.jsx)(s.Z, {
            channelId: t,
            baseChannelId: _.oC.CHANNEL_BROWSER
        })
    });
}
function N(e) {
    let { guildId: t } = e,
        [o, s] = l.useState(''),
        j = (0, a.e7)([m.Z], () => m.Z.getGuild(t)),
        N = (0, a.e7)([u.ZP], () => u.ZP.getChannels(t)),
        v = (0, a.e7)([d.Z], () => d.Z.getCategories(t)),
        y = (0, f.Fo)(t, v, N, o),
        O = (0, a.e7)([h.Z], () => h.Z.canWithPartialContext(x.Plq.MANAGE_CHANNELS, { guildId: t })),
        I = (0, a.e7)([c.ZP], () => null != c.ZP.getCurrentSidebarChannelId(_.oC.CHANNEL_BROWSER)),
        Z = l.useCallback(() => s(''), [s]),
        w = l.useCallback(() => {
            (0, i.ZDy)(async () => {
                let { default: e } = await Promise.all([n.e('45094'), n.e('45822')]).then(n.bind(n, 218613));
                return (n) => {
                    var l, a;
                    return (0, r.jsx)(
                        e,
                        ((l = (function (e) {
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
                        (a = a =
                            {
                                channelType: null,
                                guildId: t
                            }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(a))
                            : (function (e, t) {
                                  var n = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var r = Object.getOwnPropertySymbols(e);
                                      n.push.apply(n, r);
                                  }
                                  return n;
                              })(Object(a)).forEach(function (e) {
                                  Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(a, e));
                              }),
                        l)
                    );
                };
            });
        }, [t]);
    return null == j
        ? null
        : (0, r.jsxs)('div', {
              className: b.pageBody,
              children: [
                  (0, r.jsxs)('div', {
                      className: b.header,
                      children: [
                          (0, r.jsx)(i.E1j, {
                              className: b.search,
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
                                    className: b.createButton,
                                    innerClassName: b.createButtonInner,
                                    onClick: w,
                                    children: [
                                        (0, r.jsx)(i.qJs, {
                                            size: 'sm',
                                            color: 'currentColor',
                                            className: b.createIcon
                                        }),
                                        C.NW.string(C.t.CumH4u)
                                    ]
                                })
                              : null
                      ]
                  }),
                  (0, r.jsx)(g.Z, {
                      className: b.browser,
                      channels: N,
                      categories: y,
                      guild: j,
                      hasSidebar: I
                  })
              ]
          });
}
