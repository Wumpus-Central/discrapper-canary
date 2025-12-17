n.d(t, {
    I: () => v,
    Z: () => O,
}),
    n(388685);
var a = n(54381),
    r = n(473749),
    l = n(442837),
    i = n(481060),
    o = n(325708),
    c = n(213557),
    d = n(433355),
    s = n(324067),
    u = n(984933),
    b = n(430824),
    p = n(496675),
    f = n(626135),
    h = n(216306),
    m = n(775028),
    g = n(981631),
    x = n(176505),
    C = n(388032),
    j = n(516390);
function v(e) {
    let { channelId: t } = e;
    return (0, a.jsx)(o.Z, {
        sidebarType: o.y.ThreadSidebar,
        maxWidth: 600,
        children: (0, a.jsx)(c.Z, {
            channelId: t,
            baseChannelId: x.oC.CHANNEL_BROWSER,
        }),
    });
}
function O(e) {
    let { guildId: t } = e,
        [o, c] = r.useState(""),
        v = (0, l.e7)([b.Z], () => b.Z.getGuild(t)),
        O = (0, l.e7)([u.ZP], () => u.ZP.getChannels(t)),
        y = (0, l.e7)([s.Z], () => s.Z.getCategories(t)),
        N = (0, h.Fo)(t, y, O, o),
        _ = (0, l.e7)([p.Z], () => p.Z.canWithPartialContext(g.Plq.MANAGE_CHANNELS, { guildId: t })),
        w = (0, l.e7)([d.ZP], () => null != d.ZP.getCurrentSidebarChannelId(x.oC.CHANNEL_BROWSER)),
        Z = r.useCallback(() => c(""), [c]),
        I = r.useCallback(() => {
            (0, i.ZDy)(async () => {
                let { default: e } = await Promise.all([n.e("29497"), n.e("59679")]).then(n.bind(n, 241865));
                return (n) => {
                    var r, l;
                    return (0, a.jsx)(
                        e,
                        ((r = (function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {},
                                    a = Object.keys(n);
                                "function" == typeof Object.getOwnPropertySymbols &&
                                    (a = a.concat(
                                        Object.getOwnPropertySymbols(n).filter(function (e) {
                                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                        }),
                                    )),
                                    a.forEach(function (t) {
                                        var a;
                                        (a = n[t]),
                                            t in e
                                                ? Object.defineProperty(e, t, {
                                                      value: a,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0,
                                                  })
                                                : (e[t] = a);
                                    });
                            }
                            return e;
                        })({}, n)),
                        (l = l =
                            {
                                channelType: null,
                                guildId: t,
                            }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(l))
                            : (function (e, t) {
                                  var n = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var a = Object.getOwnPropertySymbols(e);
                                      n.push.apply(n, a);
                                  }
                                  return n;
                              })(Object(l)).forEach(function (e) {
                                  Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(l, e));
                              }),
                        r),
                    );
                };
            });
        }, [t]);
    return null == v
        ? null
        : (0, a.jsxs)("div", {
              className: j.pageBody,
              children: [
                  (0, a.jsxs)("div", {
                      className: j.header,
                      children: [
                          (0, a.jsx)(i.E1j, {
                              query: o,
                              onChange: (e) => {
                                  "" === o &&
                                      "" !== e &&
                                      f.default.track(g.rMx.SEARCH_STARTED, { search_type: "channel browser" }),
                                      c(e.toLowerCase());
                              },
                              onClear: Z,
                              placeholder: C.intl.string(C.t.s5MnmC),
                          }),
                          _
                              ? (0, a.jsx)(i.Button, {
                                    icon: i.qJs,
                                    onClick: I,
                                    text: C.intl.string(C.t.CumH4u),
                                })
                              : null,
                      ],
                  }),
                  (0, a.jsx)(m.Z, {
                      className: j.browser,
                      channels: O,
                      categories: N,
                      guild: v,
                      hasSidebar: w,
                  }),
              ],
          });
}
