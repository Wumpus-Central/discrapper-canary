n.d(t, {
    A: () => P,
}),
    n(896048);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    s = n.n(i),
    a = n(311907),
    o = n(554146),
    c = n(827734),
    u = n(192308),
    d = n(397927),
    p = n(442433),
    h = n(379848),
    g = n(976860),
    f = n(871123),
    m = n(733391),
    b = n(832163),
    A = n(938289),
    y = n(44724),
    O = n(849134),
    j = n(874100),
    _ = n(203548),
    x = n(186111),
    v = n(371794),
    E = n(998218),
    C = n(652793),
    S = n(652215),
    I = n(49999),
    N = n(985018),
    T = n(811094);
let P = l.memo(function (e) {
    var t;
    let { guild: i, selected: P } = e,
        w = l.useRef(null),
        R = l.useRef(null),
        D = (0, u.useHasAnyModalOpen)(),
        L = (0, a.bG)([x.A], () => x.A.hasLayers()),
        M = (0, A.n)({
            location: "game_shop_channel_row",
        });
    l.useEffect(() => {
        (0, m.Kh)(i.id);
    }, [i.id]);
    let G = (0, a.bG)([b.A], () => b.A.getAnnouncement(i.id)),
        k = (null == G ? void 0 : G.state) === "success" ? G.announcement : void 0,
        [U, V] = (0, h.x_)(o.M.GAME_SHOP_NEW_BADGE, i.id, null != (t = null == k ? void 0 : k.id) ? t : ""),
        B = U === o.M.GAME_SHOP_NEW_BADGE && null != k,
        H = !M || null == G || "loading" === G.state || B || i.id !== (0, f.zf)(),
        [F, Y] = (0, h.kn)(H ? [] : [o.M.SLAYER_STOREFRONT_XBOX_ANNOUNCEMENT]),
        K = F === o.M.SLAYER_STOREFRONT_XBOX_ANNOUNCEMENT,
        W = B || K,
        z = l.useMemo(() => (B ? V : Y), [B, V, Y]);
    l.useEffect(() => {
        P && W && z(I.i.INDIRECT_ACTION);
    }, [z, P, W]);
    let X = l.useCallback(() => {
            var e, t;
            z(I.i.TAKE_ACTION);
            let n = null != (e = null == (t = b.A.getStorefrontState(i.id)) ? void 0 : t.activePage) ? e : 0;
            (0, g.pX)(S.BVt.CHANNELS_GAME_SHOP(i.id, n));
        }, [i.id, z]),
        q = l.useCallback(() => {
            (0, y.X)({
                guildId: i.id,
                forceFetch: B,
            });
        }, [i.id, B]),
        J = l.useCallback(() => {
            z(I.i.USER_DISMISS);
        }, [z]),
        Q = l.useCallback(
            (e) => {
                null != i &&
                    (0, p.L3)(e, async () => {
                        let { default: e } = await n.e("99523").then(n.bind(n, 41614));
                        return (t) => {
                            var n, l;
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
                                (l = l =
                                    {
                                        guild: i,
                                    }),
                                Object.getOwnPropertyDescriptors
                                    ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(l))
                                    : (function (e, t) {
                                          var n = Object.keys(e);
                                          if (Object.getOwnPropertySymbols) {
                                              var r = Object.getOwnPropertySymbols(e);
                                              n.push.apply(n, r);
                                          }
                                          return n;
                                      })(Object(l)).forEach(function (e) {
                                          Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(l, e));
                                      }),
                                n),
                            );
                        };
                    });
            },
            [i],
        ),
        Z = l.useCallback(() => {
            var e;
            null == (e = w.current) || e.onMouseEnter(null, 500);
        }, [w]),
        $ = l.useCallback(
            (e, t, n, l) =>
                (0, r.jsx)(C.G, {
                    innerClassName: e,
                    ref: R,
                    id: "game-shop-".concat(i.id),
                    renderIcon: (e) =>
                        (0, r.jsx)(d.U1X, {
                            size: "custom",
                            color: "currentColor",
                            width: 20,
                            height: 20,
                            className: s()(e, n),
                        }),
                    text: (0, r.jsx)(d.Text, {
                        variant: "text-md/medium",
                        className: s()(T.UU, t),
                        children:
                            (null == i ? void 0 : i.id) === (0, f.zf)()
                                ? N.intl.string(N.t.xFQAPs)
                                : N.intl.string(N.t.vyaWs7),
                    }),
                    selected: P,
                    onMouseDown: q,
                    onClick: X,
                    onContextMenu: Q,
                    trailing: (0, r.jsxs)(r.Fragment, {
                        children: [
                            B &&
                                (0, r.jsx)(d.LpS, {
                                    text: N.intl.string(N.t.y2b7CA),
                                    color: c.A.colors.BACKGROUND_BRAND.css,
                                }),
                            l,
                        ],
                    }),
                }),
            [i.id, P, q, X, Q, B],
        ),
        ee = l.useMemo(() => {
            if (null == k) return;
            let e = null != k.assetId ? E.A.toURLSafe((0, v.YE)(k.applicationId, k.assetId, 128, "webp")) : void 0,
                t =
                    null != k.backgroundImageAssetId
                        ? E.A.toURLSafe((0, v.YE)(k.applicationId, k.backgroundImageAssetId, 128, "webp"))
                        : void 0;
            if (null != e)
                return {
                    imageUrl: e,
                    backgroundImageUrl: t,
                };
        }, [k]),
        et = l.useCallback(
            () =>
                B
                    ? (0, r.jsx)(O.A, {
                          onActionClick: X,
                          onActionMouseDown: q,
                          onRender: Z,
                          onRequestClose: J,
                          targetElementRef: R,
                          skuImageDetails: ee,
                          title: N.intl.string(N.t["7PvvS9"]),
                          body: N.intl.formatToPlainString(N.t["9J4h1a"], {
                              applicationName: k.applicationName,
                          }),
                      })
                    : K
                      ? (0, r.jsx)(j.A, {
                            onActionClick: X,
                            onActionMouseDown: q,
                            onRender: Z,
                            onRequestClose: J,
                            targetElementRef: R,
                        })
                      : null,
            [B, k, X, q, Z, J, ee, K],
        );
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(_.A, {
                ref: w,
                children: $,
            }),
            !D && !L && et(),
        ],
    });
});
