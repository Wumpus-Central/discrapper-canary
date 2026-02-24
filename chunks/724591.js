"use strict";
n.d(t, { A: () => L });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(311907),
    o = n(554146),
    c = n(827734),
    d = n(192308),
    u = n(397927),
    h = n(442433),
    A = n(379848),
    p = n(361158),
    g = n(976860),
    m = n(871123),
    _ = n(733391),
    f = n(832163),
    x = n(133015),
    C = n(44724),
    E = n(94484),
    I = n(849134),
    N = n(203548),
    b = n(186111),
    S = n(371794),
    T = n(998218),
    y = n(652793),
    v = n(652215),
    j = n(49999),
    R = n(985018),
    O = n(811094);
let L = s.memo(function (e) {
    let { guild: t, selected: l } = e,
        L = s.useRef(null),
        M = s.useRef(null),
        D = (0, d.useHasAnyModalOpen)(),
        G = (0, a.bG)([b.A], () => b.A.hasLayers()),
        U = (0, p.xr)((e) => e.fullScreenLayers.length > 0),
        P = (0, x.n)({ location: "GameShopChannelRow" });
    s.useEffect(() => {
        (0, _.Kh)(t.id);
    }, [t.id]);
    let w = (0, a.bG)([f.A], () => f.A.getAnnouncement(t.id)),
        k = w?.state === "success" ? w.announcement : void 0,
        [V, B] = (0, A.x_)(o.M.GAME_SHOP_NEW_BADGE, t.id, k?.id ?? ""),
        H = V === o.M.GAME_SHOP_NEW_BADGE && null != k,
        F = null == w || "loading" === w.state || H || t.id !== (0, m.zf)() || !P,
        [K, W] = (0, A.RF)(F ? null : o.M.SLAYER_STOREFRONT_ORBS_REWARDS_ANNOUNCEMENT, 1),
        Y = K === o.M.SLAYER_STOREFRONT_ORBS_REWARDS_ANNOUNCEMENT,
        z = H || Y,
        X = s.useMemo(() => (H ? B : W), [H, B, W]);
    s.useEffect(() => {
        l && z && X(j.i.INDIRECT_ACTION);
    }, [X, l, z]);
    let q = s.useCallback(() => {
            X(j.i.TAKE_ACTION);
            let e = f.A.getStorefrontState(t.id)?.activePage ?? 0;
            (0, g.pX)(v.BVt.CHANNELS_GAME_SHOP(t.id, e));
        }, [t.id, X]),
        J = s.useCallback(() => {
            (0, C.X)({ guildId: t.id, forceFetch: H });
        }, [t.id, H]),
        Q = s.useCallback(() => {
            X(j.i.USER_DISMISS);
        }, [X]),
        $ = s.useCallback(
            (e) => {
                null != t &&
                    (0, h.L3)(e, async () => {
                        let { default: e } = await n.e("99523").then(n.bind(n, 41614));
                        return (n) => (0, i.jsx)(e, { ...n, guild: t });
                    });
            },
            [t],
        ),
        Z = s.useCallback(() => {
            L.current?.onMouseEnter(null, 500);
        }, [L]),
        ee = s.useCallback(
            (e, n, s, a) =>
                (0, i.jsx)(y.G, {
                    innerClassName: e,
                    ref: M,
                    id: `game-shop-${t.id}`,
                    renderIcon: (e) =>
                        (0, i.jsx)(u.U1X, {
                            size: "custom",
                            color: "currentColor",
                            width: 20,
                            height: 20,
                            className: r()(e, s),
                        }),
                    text: (0, i.jsx)(u.Text, {
                        variant: "text-md/medium",
                        className: r()(O.UU, n),
                        children: t?.id === (0, m.zf)() ? R.intl.string(R.t.xFQAPs) : R.intl.string(R.t.vyaWs7),
                    }),
                    selected: l,
                    onMouseDown: J,
                    onClick: q,
                    onContextMenu: $,
                    trailing: (0, i.jsxs)(i.Fragment, {
                        children: [
                            H &&
                                (0, i.jsx)(u.LpS, {
                                    text: R.intl.string(R.t.y2b7CA),
                                    color: c.A.colors.BACKGROUND_BRAND.css,
                                }),
                            a,
                        ],
                    }),
                }),
            [t.id, l, J, q, $, H],
        ),
        et = s.useMemo(() => {
            if (null == k) return;
            let e = null != k.assetId ? T.A.toURLSafe((0, S.YE)(k.applicationId, k.assetId, 128, "webp")) : void 0,
                t =
                    null != k.backgroundImageAssetId
                        ? T.A.toURLSafe((0, S.YE)(k.applicationId, k.backgroundImageAssetId, 128, "webp"))
                        : void 0;
            if (null != e) return { imageUrl: e, backgroundImageUrl: t };
        }, [k]),
        en = s.useCallback(
            () =>
                H
                    ? (0, i.jsx)(I.A, {
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
                      ? (0, i.jsx)(E.A, {
                            onActionClick: q,
                            onActionMouseDown: J,
                            onRender: Z,
                            onRequestClose: Q,
                            targetElementRef: M,
                            applicationName: R.intl.string(R.t.Uu8hke),
                        })
                      : null,
            [H, k, q, J, Z, Q, et, Y],
        );
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(N.A, { ref: L, children: ee }), !D && !G && !U && en()] });
});
