n.d(t, { Z: () => O }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(442837),
    o = n(704215),
    a = n(952265),
    s = n(907862),
    c = n(481060),
    u = n(239091),
    d = n(377171),
    p = n(243778),
    h = n(703656),
    f = n(210218),
    g = n(819640),
    m = n(434479),
    b = n(981631),
    _ = n(921944),
    y = n(388032);
let O = i.memo(function (e) {
    let { guild: t, selected: O } = e,
        v = i.useRef(null),
        j = (0, a.f9)(),
        C = (0, l.e7)([g.Z], () => g.Z.hasLayers()),
        [E, x] = (0, p.ZT)([o.z.GAME_SHOP_NEW_BADGE], t.id),
        S = i.useCallback(() => {
            var e, n;
            x(_.L.USER_DISMISS);
            let r = null != (n = null == (e = f.Z.getStorefrontState(t.id)) ? void 0 : e.activePage) ? n : 0;
            (0, h.uL)(b.Z5c.CHANNELS_GAME_SHOP(t.id, r));
        }, [t, x]),
        I = i.useCallback(
            () =>
                (0, r.jsx)(s.J2, {
                    size: "lg",
                    shouldShow: !0,
                    position: "right",
                    caretConfig: { align: "start" },
                    align: "top",
                    badge: {
                        type: "new",
                        variant: "default",
                    },
                    onRequestClose: () => x(_.L.USER_DISMISS),
                    actions: [
                        {
                            text: y.intl.string(y.t.RzWDqY),
                            variant: "primary",
                            onClick: S,
                        },
                    ],
                    targetElementRef: v,
                    title: y.intl.string(y.t.Ylu2JM),
                    body: y.intl.string(y.t.vgylLQ),
                }),
            [x, S],
        ),
        P = i.useCallback(
            (e) => {
                null != t &&
                    (0, u.jW)(e, async () => {
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
                    (0, r.jsx)(c.EOn, {
                        size: "custom",
                        color: c.TVs.colors.CHANNEL_ICON,
                        width: 20,
                        height: 20,
                        className: e,
                    }),
                text: y.intl.string(y.t.vyaWs7),
                selected: O,
                onClick: S,
                onContextMenu: P,
                trailing:
                    E === o.z.GAME_SHOP_NEW_BADGE
                        ? (0, r.jsx)(c.IGR, {
                              text: y.intl.string(y.t.y2b7CA),
                              color: d.Z.BG_BRAND,
                          })
                        : null,
            }),
            !j && !C && E === o.z.GAME_SHOP_NEW_BADGE && I(),
        ],
    });
});
