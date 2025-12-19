n.d(t, { Z: () => N }), n(388685);
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
    b = n(411935),
    m = n(210218),
    y = n(705338),
    O = n(445606),
    v = n(633667),
    j = n(819640),
    C = n(73346),
    x = n(591759),
    E = n(434479),
    S = n(981631),
    I = n(921944),
    _ = n(388032),
    P = n(323453);
let N = i.memo(function (e) {
    var t;
    let { guild: l, selected: N } = e,
        Z = i.useRef(null),
        w = i.useRef(null),
        T = (0, u.useHasAnyModalOpen)(),
        A = (0, o.e7)([j.Z], () => j.Z.hasLayers());
    i.useEffect(() => {
        l.id === (0, g.ac)() && (0, b.Xp)(l.id);
    }, [l.id]);
    let R = (0, o.e7)([m.Z], () => m.Z.getAnnouncement(l.id)),
        [D, M] = (0, h.TE)(
            (null == R ? void 0 : R.id) != null ? s.z.GAME_SHOP_NEW_BADGE : null,
            null != (t = null == R ? void 0 : R.id) ? t : "",
        ),
        L = D === s.z.GAME_SHOP_NEW_BADGE;
    i.useEffect(() => {
        N && L && M(I.L.INDIRECT_ACTION);
    }, [M, N, L]);
    let k = i.useCallback(() => {
            var e, t;
            M(I.L.TAKE_ACTION);
            let n = null != (t = null == (e = m.Z.getStorefrontState(l.id)) ? void 0 : e.activePage) ? t : 0;
            (0, p.uL)(S.Z5c.CHANNELS_GAME_SHOP(l.id, n));
        }, [l.id, M]),
        G = i.useCallback(() => {
            (0, y.eagerNavigateToSocialLayerStorefront)({
                guildId: l.id,
                forceFetch: L,
            });
        }, [l.id, L]),
        U = i.useCallback(() => {
            M(I.L.USER_DISMISS);
        }, [M]),
        B = i.useCallback(
            (e) => {
                null != l &&
                    (0, f.jW)(e, async () => {
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
            null == (e = Z.current) || e.onMouseEnter(null, 500);
        }, [Z]),
        V = i.useCallback(
            (e, t, n, i) =>
                (0, r.jsx)(E.m, {
                    innerClassName: e,
                    ref: w,
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
                                ? _.intl.string(_.t.xFQAPs)
                                : _.intl.string(_.t.vyaWs7),
                    }),
                    selected: N,
                    onMouseDown: G,
                    onClick: k,
                    onContextMenu: B,
                    trailing: (0, r.jsxs)(r.Fragment, {
                        children: [
                            L &&
                                (0, r.jsx)(d.IGR, {
                                    text: _.intl.string(_.t.y2b7CA),
                                    color: c.Z.colors.BACKGROUND_BRAND.css,
                                }),
                            i,
                        ],
                    }),
                }),
            [l.id, N, G, k, B, L],
        ),
        H = i.useMemo(() => {
            let e =
                    null != R && null != R.assetId
                        ? x.Z.toURLSafe((0, C._W)(R.applicationId, R.assetId, 128, "webp"))
                        : void 0,
                t =
                    null != R && null != R.backgroundImageAssetId
                        ? x.Z.toURLSafe((0, C._W)(R.applicationId, R.backgroundImageAssetId, 128, "webp"))
                        : void 0;
            if (null != e)
                return {
                    imageUrl: e,
                    backgroundImageUrl: t,
                };
        }, [R]);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(v.Z, {
                ref: Z,
                children: V,
            }),
            T || A || (null == l ? void 0 : l.id) !== (0, g.ac)() || !L || null == R
                ? null
                : (0, r.jsx)(O.Z, {
                      onActionClick: k,
                      onActionMouseDown: G,
                      onRender: F,
                      onRequestClose: U,
                      targetElementRef: w,
                      skuImageDetails: H,
                      title: _.intl.string(_.t["7PvvS9"]),
                      body: _.intl.formatToPlainString(_.t["9J4h1a"], { applicationName: R.applicationName }),
                  }),
        ],
    });
});
