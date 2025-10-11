n.d(t, { Z: () => d });
var r = n(951288);
n(647438);
var i = n(481060),
    l = n(239091),
    o = n(703656),
    a = n(210218),
    s = n(434479),
    c = n(981631),
    u = n(388032);
function d(e) {
    let { guild: t, selected: d } = e;
    return (0, r.jsx)(s.m, {
        id: "shop-".concat(t.id),
        renderIcon: (e) =>
            (0, r.jsx)(i.EOn, {
                size: "custom",
                color: i.TVs.colors.CHANNEL_ICON,
                width: 20,
                height: 20,
                className: e,
            }),
        text: u.intl.string(u.t.vyaWs7),
        selected: d,
        onClick: () => {
            var e, n;
            let r = null != (n = null == (e = a.Z.getStorefrontState(t.id)) ? void 0 : e.activePage) ? n : 0;
            (0, o.uL)(c.Z5c.CHANNELS_GAME_SHOP(t.id, r));
        },
        onContextMenu: (e) => {
            null != t &&
                (0, l.jW)(e, async () => {
                    let { default: e } = await n.e("73848").then(n.bind(n, 98409));
                    return (n) => {
                        var i, l;
                        return (0, r.jsx)(
                            e,
                            ((i = (function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {},
                                        r = Object.keys(n);
                                    "function" == typeof Object.getOwnPropertySymbols &&
                                        (r = r.concat(
                                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                            }),
                                        )),
                                        r.forEach(function (t) {
                                            var r;
                                            (r = n[t]),
                                                t in e
                                                    ? Object.defineProperty(e, t, {
                                                          value: r,
                                                          enumerable: !0,
                                                          configurable: !0,
                                                          writable: !0,
                                                      })
                                                    : (e[t] = r);
                                        });
                                }
                                return e;
                            })({}, n)),
                            (l = l = { guild: t }),
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
                            i),
                        );
                    };
                });
        },
    });
}
