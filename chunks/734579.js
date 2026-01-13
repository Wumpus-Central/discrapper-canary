n.d(t, { Z: () => Z }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    o = n(442837),
    s = n(704215),
    c = n(692547),
    u = n(952265),
    d = n(481060),
    p = n(239091),
    f = n(243778),
    h = n(703656),
    g = n(164670),
    m = n(411935),
    b = n(210218),
    y = n(705338),
    v = n(445606),
    O = n(633667),
    j = n(819640),
    x = n(73346),
    C = n(591759),
    E = n(434479),
    S = n(981631),
    _ = n(921944),
    I = n(388032),
    P = n(323453);
let Z = i.memo(function (e) {
    var t;
    let { guild: l, selected: Z } = e,
        N = i.useRef(null),
        T = i.useRef(null),
        A = (0, u.useHasAnyModalOpen)(),
        w = (0, o.e7)([j.Z], () => j.Z.hasLayers());
    i.useEffect(() => {
        (0, m.Xp)(l.id);
    }, [l.id]);
    let R = (0, o.e7)([b.Z], () => b.Z.getAnnouncement(l.id)),
        [D, M] = (0, f.ar)(s.z.GAME_SHOP_NEW_BADGE, l.id, null != (t = null == R ? void 0 : R.id) ? t : ""),
        k = D === s.z.GAME_SHOP_NEW_BADGE;
    i.useEffect(() => {
        Z && k && M(_.L.INDIRECT_ACTION);
    }, [M, Z, k]);
    let L = i.useCallback(() => {
            var e, t;
            M(_.L.TAKE_ACTION);
            let n = null != (t = null == (e = b.Z.getStorefrontState(l.id)) ? void 0 : e.activePage) ? t : 0;
            (0, h.uL)(S.Z5c.CHANNELS_GAME_SHOP(l.id, n));
        }, [l.id, M]),
        U = i.useCallback(() => {
            (0, y.eagerNavigateToSocialLayerStorefront)({
                guildId: l.id,
                forceFetch: k,
            });
        }, [l.id, k]),
        G = i.useCallback(() => {
            M(_.L.USER_DISMISS);
        }, [M]),
        B = i.useCallback(
            (e) => {
                null != l &&
                    (0, p.jW)(e, async () => {
                        let { default: e } = await n.e("73848").then(n.bind(n, 98409));
                        return (t) => {
                            var n, i;
                            return (0, r.jsx)(
                                e,
                                ((n = (function (e) {
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
                                })({}, t)),
                                (i = i = { guild: l }),
                                Object.getOwnPropertyDescriptors
                                    ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i))
                                    : (function (e, t) {
                                          var n = Object.keys(e);
                                          if (Object.getOwnPropertySymbols) {
                                              var r = Object.getOwnPropertySymbols(e);
                                              n.push.apply(n, r);
                                          }
                                          return n;
                                      })(Object(i)).forEach(function (e) {
                                          Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e));
                                      }),
                                n),
                            );
                        };
                    });
            },
            [l],
        ),
        F = i.useCallback(() => {
            var e;
            null == (e = N.current) || e.onMouseEnter(null, 500);
        }, [N]),
        H = i.useCallback(
            (e, t, n, i) =>
                (0, r.jsx)(E.m, {
                    innerClassName: e,
                    ref: T,
                    id: "game-shop-".concat(l.id),
                    renderIcon: (e) =>
                        (0, r.jsx)(d.EOn, {
                            size: "custom",
                            color: "currentColor",
                            width: 20,
                            height: 20,
                            className: a()(e, n),
                        }),
                    text: (0, r.jsx)(d.Text, {
                        variant: "text-md/medium",
                        className: a()(P.name, t),
                        children:
                            (null == l ? void 0 : l.id) === (0, g.ac)()
                                ? I.intl.string(I.t.xFQAPs)
                                : I.intl.string(I.t.vyaWs7),
                    }),
                    selected: Z,
                    onMouseDown: U,
                    onClick: L,
                    onContextMenu: B,
                    trailing: (0, r.jsxs)(r.Fragment, {
                        children: [
                            k &&
                                (0, r.jsx)(d.IGR, {
                                    text: I.intl.string(I.t.y2b7CA),
                                    color: c.Z.colors.BACKGROUND_BRAND.css,
                                }),
                            i,
                        ],
                    }),
                }),
            [l.id, Z, U, L, B, k],
        ),
        V = i.useMemo(() => {
            let e =
                    null != R && null != R.assetId
                        ? C.Z.toURLSafe((0, x._W)(R.applicationId, R.assetId, 128, "webp"))
                        : void 0,
                t =
                    null != R && null != R.backgroundImageAssetId
                        ? C.Z.toURLSafe((0, x._W)(R.applicationId, R.backgroundImageAssetId, 128, "webp"))
                        : void 0;
            if (null != e)
                return {
                    imageUrl: e,
                    backgroundImageUrl: t,
                };
        }, [R]);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(O.Z, {
                ref: N,
                children: H,
            }),
            A || w || !k || null == R
                ? null
                : (0, r.jsx)(v.Z, {
                      onActionClick: L,
                      onActionMouseDown: U,
                      onRender: F,
                      onRequestClose: G,
                      targetElementRef: T,
                      skuImageDetails: V,
                      title: I.intl.string(I.t["7PvvS9"]),
                      body: I.intl.formatToPlainString(I.t["9J4h1a"], { applicationName: R.applicationName }),
                  }),
        ],
    });
});
