n.d(t, { A: () => L });
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
    p = n(361158),
    m = n(976860),
    g = n(871123),
    _ = n(733391),
    f = n(832163),
    x = n(938289),
    C = n(44724),
    E = n(849134),
    I = n(874100),
    b = n(203548),
    N = n(186111),
    S = n(371794),
    T = n(998218),
    v = n(652793),
    y = n(652215),
    j = n(49999),
    R = n(985018),
    O = n(811094);
let L = l.memo(function (e) {
    let { guild: t, selected: s } = e,
        L = l.useRef(null),
        M = l.useRef(null),
        D = (0, c.useHasAnyModalOpen)(),
        G = (0, r.bG)([N.A], () => N.A.hasLayers()),
        U = (0, p.xr)((e) => e.fullScreenLayers.length > 0),
        P = (0, x.n)({ location: "game_shop_channel_row" });
    l.useEffect(() => {
        (0, _.Kh)(t.id);
    }, [t.id]);
    let w = (0, r.bG)([f.A], () => f.A.getAnnouncement(t.id)),
        k = w?.state === "success" ? w.announcement : void 0,
        [V, B] = (0, A.x_)(o.M.GAME_SHOP_NEW_BADGE, t.id, k?.id ?? ""),
        H = V === o.M.GAME_SHOP_NEW_BADGE && null != k,
        F = !P || null == w || "loading" === w.state || H || t.id !== (0, g.zf)(),
        [K, W] = (0, A.kn)(F ? [] : [o.M.SLAYER_STOREFRONT_XBOX_ANNOUNCEMENT]),
        Y = K === o.M.SLAYER_STOREFRONT_XBOX_ANNOUNCEMENT,
        z = H || Y,
        X = l.useMemo(() => (H ? B : W), [H, B, W]);
    l.useEffect(() => {
        s && z && X(j.i.INDIRECT_ACTION);
    }, [X, s, z]);
    let q = l.useCallback(() => {
            X(j.i.TAKE_ACTION);
            let e = f.A.getStorefrontState(t.id)?.activePage ?? 0;
            (0, m.pX)(y.BVt.CHANNELS_GAME_SHOP(t.id, e));
        }, [t.id, X]),
        J = l.useCallback(() => {
            (0, C.X)({ guildId: t.id, forceFetch: H });
        }, [t.id, H]),
        Q = l.useCallback(() => {
            X(j.i.USER_DISMISS);
        }, [X]),
        $ = l.useCallback(
            (e) => {
                null != t &&
                    (0, h.L3)(e, async () => {
                        let { default: e } = await n.e("99523").then(n.bind(n, 41614));
                        return (n) => (0, i.jsx)(e, { ...n, guild: t });
                    });
            },
            [t],
        ),
        Z = l.useCallback(() => {
            L.current?.onMouseEnter(null, 500);
        }, [L]),
        ee = l.useCallback(
            (e, n, l, r) =>
                (0, i.jsx)(v.G, {
                    innerClassName: e,
                    ref: M,
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
                        className: a()(O.UU, n),
                        children: t?.id === (0, g.zf)() ? R.intl.string(R.t.xFQAPs) : R.intl.string(R.t.vyaWs7),
                    }),
                    selected: s,
                    onMouseDown: J,
                    onClick: q,
                    onContextMenu: $,
                    trailing: (0, i.jsxs)(i.Fragment, {
                        children: [
                            H &&
                                (0, i.jsx)(u.LpS, {
                                    text: R.intl.string(R.t.y2b7CA),
                                    color: d.A.colors.BACKGROUND_BRAND.css,
                                }),
                            r,
                        ],
                    }),
                }),
            [t.id, s, J, q, $, H],
        ),
        et = l.useMemo(() => {
            if (null == k) return;
            let e = null != k.assetId ? T.A.toURLSafe((0, S.YE)(k.applicationId, k.assetId, 128, "webp")) : void 0,
                t =
                    null != k.backgroundImageAssetId
                        ? T.A.toURLSafe((0, S.YE)(k.applicationId, k.backgroundImageAssetId, 128, "webp"))
                        : void 0;
            if (null != e) return { imageUrl: e, backgroundImageUrl: t };
        }, [k]),
        en = l.useCallback(
            () =>
                H
                    ? (0, i.jsx)(E.A, {
                          onActionClick: q,
                          onActionMouseDown: J,
                          onRender: Z,
                          onRequestClose: Q,
                          targetElementRef: M,
                          skuImageDetails: et,
                          title: R.intl.string(R.t["7PvvS9"]),
                          body: R.intl.formatToPlainString(R.t["9J4h1a"], { applicationName: k.applicationName }),
                      })
                    : Y
                      ? (0, i.jsx)(I.A, {
                            onActionClick: q,
                            onActionMouseDown: J,
                            onRender: Z,
                            onRequestClose: Q,
                            targetElementRef: M,
                        })
                      : null,
            [H, k, q, J, Z, Q, et, Y],
        );
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(b.A, { ref: L, children: ee }), !D && !G && !U && en()] });
});
