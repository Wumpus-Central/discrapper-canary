n.d(t, { A: () => O });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(311907),
    o = n(554146),
    d = n(827734),
    c = n(192308),
    u = n(397927),
    h = n(442433),
    A = n(379848),
    g = n(976860),
    m = n(871123),
    p = n(733391),
    _ = n(832163),
    x = n(938289),
    f = n(44724),
    E = n(849134),
    C = n(874100),
    I = n(203548),
    S = n(186111),
    b = n(371794),
    N = n(998218),
    T = n(652793),
    j = n(652215),
    v = n(49999),
    y = n(985018),
    R = n(811094);
let O = l.memo(function (e) {
    let { guild: t, selected: s } = e,
        O = l.useRef(null),
        L = l.useRef(null),
        D = (0, c.useHasAnyModalOpen)(),
        M = (0, r.bG)([S.A], () => S.A.hasLayers()),
        G = (0, x.n)({ location: "game_shop_channel_row" });
    l.useEffect(() => {
        (0, p.Kh)(t.id);
    }, [t.id]);
    let U = (0, r.bG)([_.A], () => _.A.getAnnouncement(t.id)),
        P = U?.state === "success" ? U.announcement : void 0,
        [k, w] = (0, A.x_)(o.M.GAME_SHOP_NEW_BADGE, t.id, P?.id ?? ""),
        V = k === o.M.GAME_SHOP_NEW_BADGE && null != P,
        B = !G || null == U || "loading" === U.state || V || t.id !== (0, m.zf)(),
        [H, F] = (0, A.kn)(B ? [] : [o.M.SLAYER_STOREFRONT_XBOX_ANNOUNCEMENT]),
        Y = H === o.M.SLAYER_STOREFRONT_XBOX_ANNOUNCEMENT,
        W = V || Y,
        K = l.useMemo(() => (V ? w : F), [V, w, F]);
    l.useEffect(() => {
        s && W && K(v.i.INDIRECT_ACTION);
    }, [K, s, W]);
    let z = l.useCallback(() => {
            K(v.i.TAKE_ACTION);
            let e = _.A.getStorefrontState(t.id)?.activePage ?? 0;
            (0, g.pX)(j.BVt.CHANNELS_GAME_SHOP(t.id, e));
        }, [t.id, K]),
        X = l.useCallback(() => {
            (0, f.X)({ guildId: t.id, forceFetch: V });
        }, [t.id, V]),
        q = l.useCallback(() => {
            K(v.i.USER_DISMISS);
        }, [K]),
        J = l.useCallback(
            (e) => {
                null != t &&
                    (0, h.L3)(e, async () => {
                        let { default: e } = await n.e("99523").then(n.bind(n, 41614));
                        return (n) => (0, i.jsx)(e, { ...n, guild: t });
                    });
            },
            [t],
        ),
        Q = l.useCallback(() => {
            O.current?.onMouseEnter(null, 500);
        }, [O]),
        Z = l.useCallback(
            (e, n, l, r) =>
                (0, i.jsx)(T.G, {
                    innerClassName: e,
                    ref: L,
                    id: `game-shop-${t.id}`,
                    renderIcon: (e) =>
                        (0, i.jsx)(u.U1X, {
                            size: "custom",
                            color: "currentColor",
                            width: 20,
                            height: 20,
                            className: a()(e, l),
                        }),
                    text: (0, i.jsx)(u.Text, {
                        variant: "text-md/medium",
                        className: a()(R.UU, n),
                        children: t?.id === (0, m.zf)() ? y.intl.string(y.t.xFQAPs) : y.intl.string(y.t.vyaWs7),
                    }),
                    selected: s,
                    onMouseDown: X,
                    onClick: z,
                    onContextMenu: J,
                    trailing: (0, i.jsxs)(i.Fragment, {
                        children: [
                            V &&
                                (0, i.jsx)(u.LpS, {
                                    text: y.intl.string(y.t.y2b7CA),
                                    color: d.A.colors.BACKGROUND_BRAND.css,
                                }),
                            r,
                        ],
                    }),
                }),
            [t.id, s, X, z, J, V],
        ),
        $ = l.useMemo(() => {
            if (null == P) return;
            let e = null != P.assetId ? N.A.toURLSafe((0, b.YE)(P.applicationId, P.assetId, 128, "webp")) : void 0,
                t =
                    null != P.backgroundImageAssetId
                        ? N.A.toURLSafe((0, b.YE)(P.applicationId, P.backgroundImageAssetId, 128, "webp"))
                        : void 0;
            if (null != e) return { imageUrl: e, backgroundImageUrl: t };
        }, [P]),
        ee = l.useCallback(
            () =>
                V
                    ? (0, i.jsx)(E.A, {
                          onActionClick: z,
                          onActionMouseDown: X,
                          onRender: Q,
                          onRequestClose: q,
                          targetElementRef: L,
                          skuImageDetails: $,
                          title: y.intl.string(y.t["7PvvS9"]),
                          body: y.intl.formatToPlainString(y.t["9J4h1a"], { applicationName: P.applicationName }),
                      })
                    : Y
                      ? (0, i.jsx)(C.A, {
                            onActionClick: z,
                            onActionMouseDown: X,
                            onRender: Q,
                            onRequestClose: q,
                            targetElementRef: L,
                        })
                      : null,
            [V, P, z, X, Q, q, $, Y],
        );
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(I.A, { ref: O, children: Z }), !D && !M && ee()] });
});
