n.d(t, { Z: () => S }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    o = n.n(l),
    a = n(442837),
    s = n(704215),
    c = n(692547),
    u = n(952265),
    d = n(481060),
    f = n(239091),
    h = n(243778),
    p = n(703656),
    g = n(164670),
    m = n(210218),
    b = n(705338),
    _ = n(445606),
    y = n(633667),
    O = n(819640),
    v = n(434479),
    j = n(981631),
    x = n(921944),
    C = n(388032),
    E = n(509612);
let S = i.memo(function (e) {
    let { guild: t, selected: l } = e,
        S = i.useRef(null),
        I = i.useRef(null),
        P = (0, u.useHasAnyModalOpen)(),
        N = (0, a.e7)([O.Z], () => O.Z.hasLayers()),
        [Z, w] = (0, h.ZT)([s.z.GAME_SHOP_NEW_BADGE], t.id);
    i.useEffect(() => {
        l && Z === s.z.GAME_SHOP_NEW_BADGE && w(x.L.INDIRECT_ACTION);
    }, [w, l, Z]);
    let T = i.useCallback(() => {
            var e, n;
            w(x.L.USER_DISMISS);
            let r = null != (n = null == (e = m.Z.getStorefrontState(t.id)) ? void 0 : e.activePage) ? n : 0;
            (0, p.uL)(j.Z5c.CHANNELS_GAME_SHOP(t.id, r));
        }, [t, w]),
        A = i.useCallback(() => {
            (0, b.eagerNavigateToSocialLayerStorefront)({ guildId: t.id });
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
        L = i.useCallback(() => {
            var e;
            null == (e = S.current) || e.onMouseEnter(null, 500);
        }, [S]),
        M = i.useCallback(
            (e, n, i, a) =>
                (0, r.jsx)(v.m, {
                    innerClassName: e,
                    ref: I,
                    id: "game-shop-".concat(t.id),
                    renderIcon: (e) =>
                        (0, r.jsx)(d.EOn, {
                            size: "custom",
                            color: "currentColor",
                            width: 20,
                            height: 20,
                            className: o()(e, i),
                        }),
                    text: (0, r.jsx)(d.Text, {
                        variant: "text-md/medium",
                        className: o()(E.name, n),
                        children:
                            (null == t ? void 0 : t.id) === (0, g.ac)()
                                ? C.intl.string(C.t.xFQAPs)
                                : C.intl.string(C.t.vyaWs7),
                    }),
                    selected: l,
                    onMouseDown: A,
                    onClick: T,
                    onContextMenu: D,
                    trailing: (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(d.IGR, {
                                text: C.intl.string(C.t.y2b7CA),
                                color: c.Z.colors.BG_BRAND.css,
                            }),
                            a,
                        ],
                    }),
                }),
            [t.id, l, A, T, D],
        );
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(y.Z, {
                ref: S,
                children: M,
            }),
            P || N || (null == t ? void 0 : t.id) !== (0, g.ac)() || Z !== s.z.GAME_SHOP_NEW_BADGE
                ? null
                : (0, r.jsx)(_.Z, {
                      onActionClick: T,
                      onRender: L,
                      onRequestClose: R,
                      targetElementRef: I,
                  }),
        ],
    });
});
