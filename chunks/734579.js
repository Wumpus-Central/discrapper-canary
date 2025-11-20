n.d(t, { Z: () => v }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(442837),
    o = n(704215),
    a = n(952265),
    s = n(481060),
    c = n(239091),
    u = n(377171),
    d = n(243778),
    f = n(703656),
    p = n(164670),
    h = n(210218),
    g = n(445606),
    m = n(819640),
    b = n(434479),
    _ = n(981631),
    y = n(921944),
    O = n(388032);
let v = i.memo(function (e) {
    let { guild: t, selected: v } = e,
        j = i.useRef(null),
        x = (0, a.f9)(),
        C = (0, l.e7)([m.Z], () => m.Z.hasLayers()),
        [E, S] = (0, d.ZT)([o.z.GAME_SHOP_NEW_BADGE], t.id);
    i.useEffect(() => {
        v && E === o.z.GAME_SHOP_NEW_BADGE && S(y.L.INDIRECT_ACTION);
    }, [S, v, E]);
    let I = i.useCallback(() => {
            var e, n;
            S(y.L.USER_DISMISS);
            let r = null != (n = null == (e = h.Z.getStorefrontState(t.id)) ? void 0 : e.activePage) ? n : 0;
            (0, f.uL)(_.Z5c.CHANNELS_GAME_SHOP(t.id, r));
        }, [t, S]),
        P = i.useCallback(() => {
            S(y.L.USER_DISMISS);
        }, [S]),
        N = i.useCallback(
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
            (0, r.jsx)(b.m, {
                ref: j,
                id: "game-shop-".concat(t.id),
                renderIcon: (e) =>
                    (0, r.jsx)(s.EOn, {
                        size: "custom",
                        color: s.TVs.colors.CHANNEL_ICON,
                        width: 20,
                        height: 20,
                        className: e,
                    }),
                text:
                    (null == t ? void 0 : t.id) === (0, p.ac)() ? O.intl.string(O.t.xFQAPs) : O.intl.string(O.t.vyaWs7),
                selected: v,
                onClick: I,
                onContextMenu: N,
                trailing: (0, r.jsx)(s.IGR, {
                    text: O.intl.string(O.t.y2b7CA),
                    color: u.Z.BG_BRAND,
                }),
            }),
            x || C || (null == t ? void 0 : t.id) !== (0, p.ac)() || E !== o.z.GAME_SHOP_NEW_BADGE
                ? null
                : (0, r.jsx)(g.Z, {
                      onActionClick: I,
                      onRequestClose: P,
                      targetElementRef: j,
                  }),
        ],
    });
});
