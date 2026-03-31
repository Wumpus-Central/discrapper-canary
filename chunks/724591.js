"use strict";
n.d(t, { A: () => L });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(311907),
    o = n(554146),
    c = n(827734),
    d = n(192308),
    u = n(397927),
    h = n(442433),
    A = n(932001),
    m = n(361158),
    _ = n(976860),
    g = n(733391),
    p = n(832163),
    f = n(133015),
    x = n(44724),
    E = n(94484),
    C = n(849134),
    I = n(203548),
    N = n(186111),
    S = n(371794),
    b = n(998218),
    T = n(652793),
    v = n(652215),
    y = n(49999),
    j = n(985018),
    R = n(567431),
    O = n(439706);
let L = s.memo(function (e) {
    let { guild: t, selected: l } = e,
        L = s.useRef(null),
        M = s.useRef(null),
        D = (0, d.useHasAnyModalOpen)(),
        G = (0, r.bG)([N.A], () => N.A.hasLayers()),
        U = (0, m.xr)((e) => e.fullScreenLayers.length > 0),
        P = (0, f.n)({ location: "GameShopChannelRow" });
    s.useEffect(() => {
        (0, g.Kh)(t.id);
    }, [t.id]);
    let w = (0, r.bG)([p.A], () => p.A.getAnnouncement(t.id)),
        k = w?.state === "success" ? w.announcement : void 0,
        [V, B] = (0, A.x_)(o.M.GAME_SHOP_NEW_BADGE, t.id, k?.id ?? "", void 0, !0),
        H = V === o.M.GAME_SHOP_NEW_BADGE && null != k,
        [F, K] = (0, A.x_)(o.M.GAME_SHOP_NEW_DROP_POPOVER, t.id, k?.id ?? ""),
        W = F === o.M.GAME_SHOP_NEW_DROP_POPOVER && null != k,
        Y = null == w || "loading" === w.state || W || !t.features.has(v.GuildFeatures.SOCIAL_LAYER_STOREFRONT) || !P,
        [z, q] = (0, A.RF)(Y ? null : o.M.SLAYER_STOREFRONT_ORBS_REWARDS_ANNOUNCEMENT, 1),
        X = z === o.M.SLAYER_STOREFRONT_ORBS_REWARDS_ANNOUNCEMENT,
        Q = W || X,
        J = s.useMemo(() => (W ? K : q), [W, K, q]);
    s.useEffect(() => {
        l && (H && B(y.i.INDIRECT_ACTION), Q && J(y.i.INDIRECT_ACTION));
    }, [B, J, l, H, Q]);
    let $ = s.useCallback(() => {
            B(y.i.TAKE_ACTION), J(y.i.TAKE_ACTION);
            let e = p.A.getStorefrontState(t.id)?.activePage ?? 0;
            (0, _.pX)(v.BVt.CHANNELS_GAME_SHOP(t.id, e));
        }, [t.id, B, J]),
        Z = s.useCallback(() => {
            (0, x.X)({ guildId: t.id, forceFetch: W });
        }, [t.id, W]),
        ee = s.useCallback(() => {
            J(y.i.USER_DISMISS);
        }, [J]),
        et = s.useCallback(
            (e) => {
                null != t &&
                    (0, h.L3)(e, async () => {
                        let { default: e } = await n.e("99523").then(n.bind(n, 41614));
                        return (n) => (0, i.jsx)(e, { ...n, guild: t });
                    });
            },
            [t],
        ),
        en = s.useCallback(() => {
            L.current?.onMouseEnter(null, 500);
        }, [L]),
        ei = s.useCallback(
            (e, n, s, r) =>
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
                            className: a()(e, s),
                        }),
                    text: (0, i.jsx)(u.Text, {
                        variant: "text-md/medium",
                        className: a()(R.UU, n),
                        children: j.intl.string(j.t.vyaWs7),
                    }),
                    selected: l,
                    onMouseDown: Z,
                    onClick: $,
                    onContextMenu: et,
                    trailing: (0, i.jsxs)(i.Fragment, {
                        children: [
                            H &&
                                (0, i.jsx)(u.LpS, {
                                    text: j.intl.string(j.t.y2b7CA),
                                    color: c.A.colors.BACKGROUND_BRAND.css,
                                }),
                            r,
                        ],
                    }),
                }),
            [t.id, l, Z, $, et, H],
        ),
        es = s.useMemo(() => {
            if (null == k) return;
            let e = null != k.assetId ? b.A.toURLSafe((0, S.YE)(k.applicationId, k.assetId, 128, "webp")) : void 0,
                t =
                    null != k.backgroundImageAssetId
                        ? b.A.toURLSafe((0, S.YE)(k.applicationId, k.backgroundImageAssetId, 128, "webp"))
                        : void 0;
            if (null != e) return { imageUrl: e, backgroundImageUrl: t };
        }, [k]),
        el = s.useCallback(() => {
            if (W) {
                let e = P
                    ? j.intl.string(j.t["z/QEIP"])
                    : j.intl.formatToPlainString(j.t["9J4h1a"], { applicationName: k.applicationName });
                return (0, i.jsx)(C.A, {
                    onActionClick: $,
                    onActionMouseDown: Z,
                    onRender: en,
                    onRequestClose: ee,
                    targetElementRef: M,
                    skuImageDetails: es,
                    title: j.intl.string(j.t["7PvvS9"]),
                    body: e,
                    overlayImageUrl: P ? O.A : void 0,
                });
            }
            return X
                ? (0, i.jsx)(E.A, {
                      onActionClick: $,
                      onActionMouseDown: Z,
                      onRender: en,
                      onRequestClose: ee,
                      targetElementRef: M,
                      applicationName: j.intl.string(j.t.Uu8hke),
                  })
                : null;
        }, [W, P, k, $, Z, en, ee, es, X]);
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(I.A, { ref: L, children: ei }), !D && !G && !U && el()] });
});
