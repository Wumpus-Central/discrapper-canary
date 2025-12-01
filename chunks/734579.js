n.d(t, { Z: () => E }), n(388685);
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
    b = n(445606),
    _ = n(633667),
    y = n(819640),
    O = n(434479),
    v = n(981631),
    j = n(921944),
    x = n(388032),
    C = n(509612);
let E = i.memo(function (e) {
    let { guild: t, selected: l } = e,
        E = i.useRef(null),
        S = i.useRef(null),
        I = (0, u.f9)(),
        P = (0, a.e7)([y.Z], () => y.Z.hasLayers()),
        [N, Z] = (0, h.ZT)([s.z.GAME_SHOP_NEW_BADGE], t.id);
    i.useEffect(() => {
        l && N === s.z.GAME_SHOP_NEW_BADGE && Z(j.L.INDIRECT_ACTION);
    }, [Z, l, N]);
    let w = i.useCallback(() => {
            var e, n;
            Z(j.L.USER_DISMISS);
            let r = null != (n = null == (e = m.Z.getStorefrontState(t.id)) ? void 0 : e.activePage) ? n : 0;
            (0, p.uL)(v.Z5c.CHANNELS_GAME_SHOP(t.id, r));
        }, [t, Z]),
        T = i.useCallback(() => {
            Z(j.L.USER_DISMISS);
        }, [Z]),
        A = i.useCallback(
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
        R = i.useCallback(() => {
            var e;
            null == (e = E.current) || e.onMouseEnter(null, 500);
        }, [E]),
        D = i.useCallback(
            (e, n, i, a) =>
                (0, r.jsx)(O.m, {
                    innerClassName: e,
                    ref: S,
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
                        className: o()(C.name, n),
                        children:
                            (null == t ? void 0 : t.id) === (0, g.ac)()
                                ? x.intl.string(x.t.xFQAPs)
                                : x.intl.string(x.t.vyaWs7),
                    }),
                    selected: l,
                    onClick: w,
                    onContextMenu: A,
                    trailing: (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(d.IGR, {
                                text: x.intl.string(x.t.y2b7CA),
                                color: c.Z.colors.BG_BRAND.css,
                            }),
                            a,
                        ],
                    }),
                }),
            [t, l, w, A],
        );
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(_.Z, {
                ref: E,
                children: D,
            }),
            I || P || (null == t ? void 0 : t.id) !== (0, g.ac)() || N !== s.z.GAME_SHOP_NEW_BADGE
                ? null
                : (0, r.jsx)(b.Z, {
                      onActionClick: w,
                      onRender: R,
                      onRequestClose: T,
                      targetElementRef: S,
                  }),
        ],
    });
});
