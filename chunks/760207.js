n.d(t, {
    A: () => C,
    W: () => O,
}),
    n(896048);
var l = n(627968),
    r = n(64700),
    i = n(311907),
    a = n(397927),
    s = n(812771),
    c = n(274541),
    d = n(761640),
    o = n(769765),
    u = n(808728),
    f = n(71393),
    b = n(576705),
    h = n(954571),
    p = n(637248),
    g = n(743015),
    m = n(652215),
    x = n(746080),
    A = n(985018),
    j = n(896743);

function O(e) {
    let { channelId: t } = e;
    return (0, l.jsx)(s.A, {
        sidebarType: s.X.ThreadSidebar,
        maxWidth: 600,
        children: (0, l.jsx)(c.A, {
            channelId: t,
            baseChannelId: x.VV.CHANNEL_BROWSER,
        }),
    });
}

function C(e) {
    let { guildId: t } = e,
        [s, c] = r.useState(""),
        O = (0, i.bG)([f.A], () => f.A.getGuild(t)),
        C = (0, i.bG)([u.Ay], () => u.Ay.getChannels(t)),
        y = (0, i.bG)([o.A], () => o.A.getCategories(t)),
        v = (0, p.vh)(t, y, C, s),
        _ = (0, i.bG)([b.A], () =>
            b.A.canWithPartialContext(m.xBc.MANAGE_CHANNELS, {
                guildId: t,
            }),
        ),
        N = (0, i.bG)([d.Ay], () => null != d.Ay.getCurrentSidebarChannelId(x.VV.CHANNEL_BROWSER)),
        w = r.useCallback(() => c(""), [c]),
        E = r.useCallback(() => {
            (0, a.mMO)(async () => {
                let { default: e } = await Promise.all([n.e("64233"), n.e("9743")]).then(n.bind(n, 409200));
                return (n) => {
                    var r, i;
                    return (0, l.jsx)(
                        e,
                        ((r = (function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {},
                                    l = Object.keys(n);
                                "function" == typeof Object.getOwnPropertySymbols &&
                                    (l = l.concat(
                                        Object.getOwnPropertySymbols(n).filter(function (e) {
                                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                        }),
                                    )),
                                    l.forEach(function (t) {
                                        var l;
                                        (l = n[t]),
                                            t in e
                                                ? Object.defineProperty(e, t, {
                                                      value: l,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0,
                                                  })
                                                : (e[t] = l);
                                    });
                            }
                            return e;
                        })({}, n)),
                        (i = i =
                            {
                                channelType: null,
                                guildId: t,
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
                        r),
                    );
                };
            });
        }, [t]);
    return null == O
        ? null
        : (0, l.jsxs)("div", {
              className: j.kw,
              children: [
                  (0, l.jsxs)("div", {
                      className: j.wx,
                      children: [
                          (0, l.jsx)(a.IWV, {
                              query: s,
                              onChange: (e) => {
                                  "" === s &&
                                      "" !== e &&
                                      h.default.track(m.HAw.SEARCH_STARTED, {
                                          search_type: "channel browser",
                                      }),
                                      c(e.toLowerCase());
                              },
                              onClear: w,
                              placeholder: A.intl.string(A.t.s5MnmC),
                          }),
                          _
                              ? (0, l.jsx)(a.Button, {
                                    icon: a.j96,
                                    onClick: E,
                                    text: A.intl.string(A.t.CumH4u),
                                })
                              : null,
                      ],
                  }),
                  (0, l.jsx)(g.A, {
                      className: j.T,
                      channels: C,
                      categories: v,
                      guild: O,
                      hasSidebar: N,
                  }),
              ],
          });
}
