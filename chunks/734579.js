n.d(t, { Z: () => I }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    o = n(442837),
    s = n(704215),
    c = n(692547),
    u = n(952265),
    d = n(481060),
    f = n(239091),
    h = n(243778),
    p = n(703656),
    g = n(164670),
    b = n(210218),
    m = n(705338),
    y = n(445606),
    O = n(633667),
    v = n(819640),
    j = n(434479),
    C = n(981631),
    x = n(921944),
    E = n(388032),
    S = n(323453);
let I = i.memo(function (e) {
    let { guild: t, selected: l } = e,
        I = i.useRef(null),
        _ = i.useRef(null),
        P = (0, u.useHasAnyModalOpen)(),
        N = (0, o.e7)([v.Z], () => v.Z.hasLayers()),
        [Z, w] = (0, h.ZT)([s.z.GAME_SHOP_NEW_BADGE], t.id);
    i.useEffect(() => {
        l && Z === s.z.GAME_SHOP_NEW_BADGE && w(x.L.INDIRECT_ACTION);
    }, [w, l, Z]);
    let T = i.useCallback(() => {
            var e, n;
            w(x.L.USER_DISMISS);
            let r = null != (n = null == (e = b.Z.getStorefrontState(t.id)) ? void 0 : e.activePage) ? n : 0;
            (0, p.uL)(C.Z5c.CHANNELS_GAME_SHOP(t.id, r));
        }, [t, w]),
        A = i.useCallback(() => {
            (0, m.eagerNavigateToSocialLayerStorefront)({ guildId: t.id });
        }, [t.id]),
        R = i.useCallback(() => {
            w(x.L.USER_DISMISS);
        }, [w]),
        D = i.useCallback(
            (e) => {
                null != t &&
                    (0, f.jW)(e, async () => {
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
        ),
        M = i.useCallback(() => {
            var e;
            null == (e = I.current) || e.onMouseEnter(null, 500);
        }, [I]),
        L = i.useCallback(
            (e, n, i, o) =>
                (0, r.jsx)(j.m, {
                    innerClassName: e,
                    ref: _,
                    id: "game-shop-".concat(t.id),
                    renderIcon: (e) =>
                        (0, r.jsx)(d.EOn, {
                            size: "custom",
                            color: "currentColor",
                            width: 20,
                            height: 20,
                            className: a()(e, i),
                        }),
                    text: (0, r.jsx)(d.Text, {
                        variant: "text-md/medium",
                        className: a()(S.name, n),
                        children:
                            (null == t ? void 0 : t.id) === (0, g.ac)()
                                ? E.intl.string(E.t.xFQAPs)
                                : E.intl.string(E.t.vyaWs7),
                    }),
                    selected: l,
                    onMouseDown: A,
                    onClick: T,
                    onContextMenu: D,
                    trailing: (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(d.IGR, {
                                text: E.intl.string(E.t.y2b7CA),
                                color: c.Z.colors.BACKGROUND_BRAND.css,
                            }),
                            o,
                        ],
                    }),
                }),
            [t.id, l, A, T, D],
        );
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(O.Z, {
                ref: I,
                children: L,
            }),
            P || N || (null == t ? void 0 : t.id) !== (0, g.ac)() || Z !== s.z.GAME_SHOP_NEW_BADGE
                ? null
                : (0, r.jsx)(y.Z, {
                      onActionClick: T,
                      onRender: M,
                      onRequestClose: R,
                      targetElementRef: _,
                  }),
        ],
    });
});
