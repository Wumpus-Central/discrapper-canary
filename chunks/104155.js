t.d(n, {
    I: () => j,
    Z: () => v,
}),
    t(388685);
var l = t(951288),
    r = t(647438),
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
    b = t(855733);
function j(e) {
    let { channelId: n } = e;
    return (0, l.jsx)(o.Z, {
        sidebarType: o.y.ThreadSidebar,
        maxWidth: 600,
        children: (0, l.jsx)(s.Z, {
            channelId: n,
            baseChannelId: _.oC.CHANNEL_BROWSER,
        }),
    });
}
function v(e) {
    let { guildId: n } = e,
        [o, s] = r.useState(""),
        j = (0, i.e7)([m.Z], () => m.Z.getGuild(n)),
        v = (0, i.e7)([u.ZP], () => u.ZP.getChannels(n)),
        y = (0, i.e7)([d.Z], () => d.Z.getCategories(n)),
        O = (0, f.Fo)(n, y, v, o),
        N = (0, i.e7)([h.Z], () => h.Z.canWithPartialContext(x.Plq.MANAGE_CHANNELS, { guildId: n })),
        Z = (0, i.e7)([c.ZP], () => null != c.ZP.getCurrentSidebarChannelId(_.oC.CHANNEL_BROWSER)),
        I = r.useCallback(() => s(""), [s]),
        w = r.useCallback(() => {
            (0, a.ZDy)(async () => {
                let { default: e } = await Promise.all([t.e("29497"), t.e("53781")]).then(t.bind(t, 241865));
                return (t) => {
                    var r, i;
                    return (0, l.jsx)(
                        e,
                        ((r = (function (e) {
                            for (var n = 1; n < arguments.length; n++) {
                                var t = null != arguments[n] ? arguments[n] : {},
                                    l = Object.keys(t);
                                "function" == typeof Object.getOwnPropertySymbols &&
                                    (l = l.concat(
                                        Object.getOwnPropertySymbols(t).filter(function (e) {
                                            return Object.getOwnPropertyDescriptor(t, e).enumerable;
                                        }),
                                    )),
                                    l.forEach(function (n) {
                                        var l;
                                        (l = t[n]),
                                            n in e
                                                ? Object.defineProperty(e, n, {
                                                      value: l,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0,
                                                  })
                                                : (e[n] = l);
                                    });
                            }
                            return e;
                        })({}, t)),
                        (i = i =
                            {
                                channelType: null,
                                guildId: n,
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
                        r),
                    );
                };
            });
        }, [n]);
    return null == j
        ? null
        : (0, l.jsxs)("div", {
              className: b.pageBody,
              children: [
                  (0, l.jsxs)("div", {
                      className: b.header,
                      children: [
                          (0, l.jsx)(a.E1j, {
                              query: o,
                              onChange: (e) => {
                                  "" === o &&
                                      "" !== e &&
                                      p.default.track(x.rMx.SEARCH_STARTED, { search_type: "channel browser" }),
                                      s(e.toLowerCase());
                              },
                              onClear: I,
                              placeholder: C.intl.string(C.t.s5MnmC),
                          }),
                          N
                              ? (0, l.jsx)(a.Button, {
                                    icon: a.qJs,
                                    onClick: w,
                                    text: C.intl.string(C.t.CumH4u),
                                })
                              : null,
                      ],
                  }),
                  (0, l.jsx)(g.Z, {
                      className: b.browser,
                      channels: v,
                      categories: O,
                      guild: j,
                      hasSidebar: Z,
                  }),
              ],
          });
}
