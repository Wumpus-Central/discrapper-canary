n.d(t, { Z: () => O }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(442837),
    o = n(704215),
    a = n(952265),
    s = n(481060),
    c = n(239091),
    u = n(377171),
    d = n(243778),
    p = n(703656),
    h = n(210218),
    f = n(445606),
    g = n(819640),
    m = n(434479),
    b = n(981631),
    _ = n(921944),
    y = n(388032);
let O = i.memo(function (e) {
    let { guild: t, selected: O } = e,
        v = i.useRef(null),
        j = (0, a.f9)(),
        x = (0, l.e7)([g.Z], () => g.Z.hasLayers()),
        [C, E] = (0, d.ZT)([o.z.GAME_SHOP_NEW_BADGE], t.id);
    i.useEffect(() => {
        O && C === o.z.GAME_SHOP_NEW_BADGE && E(_.L.INDIRECT_ACTION);
    }, [E, O, C]);
    let S = i.useCallback(() => {
            var e, n;
            E(_.L.USER_DISMISS);
            let r = null != (n = null == (e = h.Z.getStorefrontState(t.id)) ? void 0 : e.activePage) ? n : 0;
            (0, p.uL)(b.Z5c.CHANNELS_GAME_SHOP(t.id, r));
        }, [t, E]),
        I = i.useCallback(() => {
            E(_.L.USER_DISMISS);
        }, [E]),
        P = i.useCallback(
            (e) => {
                null != t &&
                    (0, c.jW)(e, async () => {
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
            [t],
        );
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(m.m, {
                ref: v,
                id: "game-shop-".concat(t.id),
                renderIcon: (e) =>
                    (0, r.jsx)(s.EOn, {
                        size: "custom",
                        color: s.TVs.colors.CHANNEL_ICON,
                        width: 20,
                        height: 20,
                        className: e,
                    }),
                text: y.intl.string(y.t.vyaWs7),
                selected: O,
                onClick: S,
                onContextMenu: P,
                trailing:
                    C === o.z.GAME_SHOP_NEW_BADGE
                        ? (0, r.jsx)(s.IGR, {
                              text: y.intl.string(y.t.y2b7CA),
                              color: u.Z.BG_BRAND,
                          })
                        : null,
            }),
            j || x || C !== o.z.GAME_SHOP_NEW_BADGE
                ? null
                : (0, r.jsx)(f.Z, {
                      onActionClick: S,
                      onRequestClose: I,
                      targetElementRef: v,
                  }),
        ],
    });
});
