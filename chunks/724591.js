n.d(t, { A: () => L });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(311907),
    o = n(554146),
    d = n(827734),
    c = n(192308),
    u = n(34188),
    h = n(834730),
    A = n(777666),
    _ = n(442433),
    m = n(932001),
    g = n(361158),
    p = n(976860),
    f = n(733391),
    E = n(832163),
    x = n(44724),
    I = n(849134),
    C = n(203548),
    b = n(186111),
    N = n(371794),
    S = n(998218),
    v = n(652793),
    T = n(652215),
    y = n(49999),
    R = n(985018),
    j = n(645591);
let L = l.memo(function (e) {
    let { guild: t, selected: s } = e,
        L = l.useRef(null),
        O = l.useRef(null),
        G = (0, c.useHasAnyModalOpen)(),
        D = (0, r.bG)([b.A], () => b.A.hasLayers()),
        M = (0, g.xr)((e) => e.fullScreenLayers.length > 0);
    l.useEffect(() => {
        (0, f.Kh)(t.id);
    }, [t.id]);
    let U = (0, r.bG)([E.A], () => E.A.getAnnouncement(t.id)),
        P = U?.state === "success" ? U.announcement : void 0,
        [w, k] = (0, m.x_)(o.M.GAME_SHOP_NEW_BADGE, t.id, P?.id ?? "", void 0, !0),
        V = w === o.M.GAME_SHOP_NEW_BADGE && null != P,
        [B, H] = (0, m.x_)(o.M.GAME_SHOP_NEW_DROP_POPOVER, t.id, P?.id ?? ""),
        F = B === o.M.GAME_SHOP_NEW_DROP_POPOVER && null != P;
    l.useEffect(() => {
        s && (V && k(y.i.INDIRECT_ACTION), F && H(y.i.INDIRECT_ACTION));
    }, [k, H, s, V, F]);
    let W = l.useCallback(() => {
            k(y.i.TAKE_ACTION), H(y.i.TAKE_ACTION);
            let e = E.A.getStorefrontState(t.id)?.activePage ?? 0;
            (0, p.pX)(T.BVt.CHANNELS_GAME_SHOP(t.id, e));
        }, [t.id, k, H]),
        Y = l.useCallback(() => {
            (0, x.X)({ guildId: t.id, forceFetch: F });
        }, [t.id, F]),
        K = l.useCallback(() => {
            H(y.i.USER_DISMISS);
        }, [H]),
        z = l.useCallback(
            (e) => {
                null != t &&
                    (0, _.L3)(e, async () => {
                        let { default: e } = await n.e("99523").then(n.bind(n, 819233));
                        return (n) => (0, i.jsx)(e, { ...n, guild: t });
                    });
            },
            [t],
        ),
        q = l.useCallback(() => {
            L.current?.onMouseEnter(null, 500);
        }, [L]),
        X = l.useCallback(
            (e, n, l, r) =>
                (0, i.jsx)(v.G, {
                    innerClassName: e,
                    ref: O,
                    id: `game-shop-${t.id}`,
                    renderIcon: (e) =>
                        (0, i.jsx)(u.U, {
                            size: "custom",
                            color: "currentColor",
                            width: 20,
                            height: 20,
                            className: a()(e, l),
                        }),
                    text: (0, i.jsx)(h.E, {
                        variant: "text-md/medium",
                        className: a()(j.UU, n),
                        children: R.intl.string(R.t.vyaWs7),
                    }),
                    selected: s,
                    onMouseDown: Y,
                    onClick: W,
                    onContextMenu: z,
                    trailing: (0, i.jsxs)(i.Fragment, {
                        children: [
                            V &&
                                (0, i.jsx)(A.Lp, {
                                    text: R.intl.string(R.t.y2b7CA),
                                    color: d.A.colors.BACKGROUND_BRAND.css,
                                }),
                            r,
                        ],
                    }),
                }),
            [t.id, s, Y, W, z, V],
        ),
        Q = l.useMemo(() => {
            if (null == P) return;
            let e = null != P.assetId ? S.A.toURLSafe((0, N.YE)(P.applicationId, P.assetId, 128, "webp")) : void 0,
                t =
                    null != P.backgroundImageAssetId
                        ? S.A.toURLSafe((0, N.YE)(P.applicationId, P.backgroundImageAssetId, 128, "webp"))
                        : void 0;
            if (null != e) return { imageUrl: e, backgroundImageUrl: t };
        }, [P]),
        J = l.useCallback(
            () =>
                F
                    ? (0, i.jsx)(I.A, {
                          onActionClick: W,
                          onActionMouseDown: Y,
                          onRender: q,
                          onRequestClose: K,
                          targetElementRef: O,
                          skuImageDetails: Q,
                          title: R.intl.string(R.t["7PvvS9"]),
                          body: R.intl.formatToPlainString(R.t["9J4h1a"], { applicationName: P.applicationName }),
                      })
                    : null,
            [F, P, W, Y, q, K, Q],
        );
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(C.A, { ref: L, children: X }), !G && !D && !M && J()] });
});
