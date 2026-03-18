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
    A = n(932001),
    m = n(361158),
    p = n(976860),
    g = n(733391),
    _ = n(832163),
    f = n(133015),
    x = n(44724),
    C = n(94484),
    E = n(849134),
    I = n(203548),
    N = n(186111),
    b = n(371794),
    S = n(998218),
    T = n(652793),
    v = n(652215),
    y = n(49999),
    j = n(985018),
    R = n(811094),
    O = n(439706);
let L = s.memo(function (e) {
    let { guild: t, selected: l } = e,
        L = s.useRef(null),
        M = s.useRef(null),
        D = (0, d.useHasAnyModalOpen)(),
        G = (0, a.bG)([N.A], () => N.A.hasLayers()),
        U = (0, m.xr)((e) => e.fullScreenLayers.length > 0),
        P = (0, f.n)({ location: "GameShopChannelRow" });
    s.useEffect(() => {
        (0, g.Kh)(t.id);
    }, [t.id]);
    let w = (0, a.bG)([_.A], () => _.A.getAnnouncement(t.id)),
        k = w?.state === "success" ? w.announcement : void 0,
        [V, B] = (0, A.x_)(o.M.GAME_SHOP_NEW_BADGE, t.id, k?.id ?? ""),
        H = V === o.M.GAME_SHOP_NEW_BADGE && null != k,
        F = null == w || "loading" === w.state || H || !t.features.has(v.GuildFeatures.SOCIAL_LAYER_STOREFRONT) || !P,
        [K, W] = (0, A.RF)(F ? null : o.M.SLAYER_STOREFRONT_ORBS_REWARDS_ANNOUNCEMENT, 1),
        Y = K === o.M.SLAYER_STOREFRONT_ORBS_REWARDS_ANNOUNCEMENT,
        z = H || Y,
        q = s.useMemo(() => (H ? B : W), [H, B, W]);
    s.useEffect(() => {
        l && z && q(y.i.INDIRECT_ACTION);
    }, [q, l, z]);
    let X = s.useCallback(() => {
            q(y.i.TAKE_ACTION);
            let e = _.A.getStorefrontState(t.id)?.activePage ?? 0;
            (0, p.pX)(v.BVt.CHANNELS_GAME_SHOP(t.id, e));
        }, [t.id, q]),
        J = s.useCallback(() => {
            (0, x.X)({ guildId: t.id, forceFetch: H });
        }, [t.id, H]),
        Q = s.useCallback(() => {
            q(y.i.USER_DISMISS);
        }, [q]),
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
                (0, i.jsx)(T.G, {
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
                        className: r()(R.UU, n),
                        children: j.intl.string(j.t.vyaWs7),
                    }),
                    selected: l,
                    onMouseDown: J,
                    onClick: X,
                    onContextMenu: $,
                    trailing: (0, i.jsxs)(i.Fragment, {
                        children: [
                            H &&
                                (0, i.jsx)(u.LpS, {
                                    text: j.intl.string(j.t.y2b7CA),
                                    color: c.A.colors.BACKGROUND_BRAND.css,
                                }),
                            a,
                        ],
                    }),
                }),
            [t.id, l, J, X, $, H],
        ),
        et = s.useMemo(() => {
            if (null == k) return;
            let e = null != k.assetId ? S.A.toURLSafe((0, b.YE)(k.applicationId, k.assetId, 128, "webp")) : void 0,
                t =
                    null != k.backgroundImageAssetId
                        ? S.A.toURLSafe((0, b.YE)(k.applicationId, k.backgroundImageAssetId, 128, "webp"))
                        : void 0;
            if (null != e) return { imageUrl: e, backgroundImageUrl: t };
        }, [k]),
        en = s.useCallback(() => {
            if (H) {
                let e = P
                    ? j.intl.string(j.t["z/QEIP"])
                    : j.intl.formatToPlainString(j.t["9J4h1a"], { applicationName: k.applicationName });
                return (0, i.jsx)(E.A, {
                    onActionClick: X,
                    onActionMouseDown: J,
                    onRender: Z,
                    onRequestClose: Q,
                    targetElementRef: M,
                    skuImageDetails: et,
                    title: j.intl.string(j.t["7PvvS9"]),
                    body: e,
                    overlayImageUrl: P ? O.A : void 0,
                });
            }
            return Y
                ? (0, i.jsx)(C.A, {
                      onActionClick: X,
                      onActionMouseDown: J,
                      onRender: Z,
                      onRequestClose: Q,
                      targetElementRef: M,
                      applicationName: j.intl.string(j.t.Uu8hke),
                  })
                : null;
        }, [H, P, k, X, J, Z, Q, et, Y]);
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(I.A, { ref: L, children: ee }), !D && !G && !U && en()] });
});
