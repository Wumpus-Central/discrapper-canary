t.d(n, {
    I: () => j,
    Z: () => O,
}),
    t(388685);
var r = t(951288),
    l = t(647438),
    i = t(442837),
    a = t(481060),
    o = t(325708),
    s = t(213557),
    c = t(433355),
    d = t(324067),
    u = t(984933),
    p = t(430824),
    h = t(496675),
    m = t(626135),
    f = t(216306),
    g = t(775028),
    _ = t(981631),
    x = t(176505),
    b = t(388032),
    C = t(855733);
function j(e) {
    let { channelId: n } = e;
    return (0, r.jsx)(o.Z, {
        sidebarType: o.y.ThreadSidebar,
        maxWidth: 600,
        children: (0, r.jsx)(s.Z, {
            channelId: n,
            baseChannelId: x.oC.CHANNEL_BROWSER,
        }),
    });
}
function O(e) {
    let { guildId: n } = e,
        [o, s] = l.useState(""),
        j = (0, i.e7)([p.Z], () => p.Z.getGuild(n)),
        O = (0, i.e7)([u.ZP], () => u.ZP.getChannels(n)),
        v = (0, i.e7)([d.Z], () => d.Z.getCategories(n)),
        y = (0, f.Fo)(n, v, O, o),
        N = (0, i.e7)([h.Z], () => h.Z.canWithPartialContext(_.Plq.MANAGE_CHANNELS, { guildId: n })),
        I = (0, i.e7)([c.ZP], () => null != c.ZP.getCurrentSidebarChannelId(x.oC.CHANNEL_BROWSER)),
        w = l.useCallback(() => s(""), [s]),
        Z = l.useCallback(() => {
            (0, a.ZDy)(async () => {
                let { default: e } = await Promise.all([t.e("29497"), t.e("53781")]).then(t.bind(t, 241865));
                return (t) => {
                    var l, i;
                    return (0, r.jsx)(
                        e,
                        ((l = (function (e) {
                            for (var n = 1; n < arguments.length; n++) {
                                var t = null != arguments[n] ? arguments[n] : {},
                                    r = Object.keys(t);
                                "function" == typeof Object.getOwnPropertySymbols &&
                                    (r = r.concat(
                                        Object.getOwnPropertySymbols(t).filter(function (e) {
                                            return Object.getOwnPropertyDescriptor(t, e).enumerable;
                                        }),
                                    )),
                                    r.forEach(function (n) {
                                        var r;
                                        (r = t[n]),
                                            n in e
                                                ? Object.defineProperty(e, n, {
                                                      value: r,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0,
                                                  })
                                                : (e[n] = r);
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
                            ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(i))
                            : (function (e, n) {
                                  var t = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var r = Object.getOwnPropertySymbols(e);
                                      t.push.apply(t, r);
                                  }
                                  return t;
                              })(Object(i)).forEach(function (e) {
                                  Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(i, e));
                              }),
                        l),
                    );
                };
            });
        }, [n]);
    return null == j
        ? null
        : (0, r.jsxs)("div", {
              className: C.pageBody,
              children: [
                  (0, r.jsxs)("div", {
                      className: C.header,
                      children: [
                          (0, r.jsx)(a.E1j, {
                              query: o,
                              onChange: (e) => {
                                  "" === o &&
                                      "" !== e &&
                                      m.default.track(_.rMx.SEARCH_STARTED, { search_type: "channel browser" }),
                                      s(e.toLowerCase());
                              },
                              onClear: w,
                              placeholder: b.intl.string(b.t.s5MnmC),
                          }),
                          N
                              ? (0, r.jsx)(a.Button, {
                                    icon: a.qJs,
                                    onClick: Z,
                                    text: b.intl.string(b.t.CumH4u),
                                })
                              : null,
                      ],
                  }),
                  (0, r.jsx)(g.Z, {
                      className: C.browser,
                      channels: O,
                      categories: y,
                      guild: j,
                      hasSidebar: I,
                  }),
              ],
          });
}
