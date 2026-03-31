n.d(t, { A: () => L });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(311907),
    o = n(554146),
    c = n(827734),
    d = n(192308),
    u = n(397927),
    h = n(442433),
    A = n(932001),
    _ = n(361158),
    m = n(976860),
    g = n(733391),
    p = n(832163),
    f = n(133015),
    x = n(44724),
    E = n(94484),
    I = n(849134),
    C = n(203548),
    N = n(186111),
    T = n(371794),
    S = n(998218),
    b = n(652793),
    y = n(652215),
    v = n(49999),
    j = n(985018),
    R = n(567431),
    O = n(439706);
let L = l.memo(function (e) {
    let { guild: t, selected: s } = e,
        L = l.useRef(null),
        M = l.useRef(null),
        D = (0, d.useHasAnyModalOpen)(),
        U = (0, r.bG)([N.A], () => N.A.hasLayers()),
        G = (0, _.xr)((e) => e.fullScreenLayers.length > 0),
        P = (0, f.n)({ location: "GameShopChannelRow" });
    l.useEffect(() => {
        (0, g.Kh)(t.id);
    }, [t.id]);
    let k = (0, r.bG)([p.A], () => p.A.getAnnouncement(t.id)),
        w = k?.state === "success" ? k.announcement : void 0,
        [B, V] = (0, A.x_)(o.M.GAME_SHOP_NEW_BADGE, t.id, w?.id ?? "", void 0, !0),
        H = B === o.M.GAME_SHOP_NEW_BADGE && null != w,
        [F, K] = (0, A.x_)(o.M.GAME_SHOP_NEW_DROP_POPOVER, t.id, w?.id ?? ""),
        W = F === o.M.GAME_SHOP_NEW_DROP_POPOVER && null != w,
        Y = null == k || "loading" === k.state || W || !t.features.has(y.GuildFeatures.SOCIAL_LAYER_STOREFRONT) || !P,
        [z, q] = (0, A.RF)(Y ? null : o.M.SLAYER_STOREFRONT_ORBS_REWARDS_ANNOUNCEMENT, 1),
        X = z === o.M.SLAYER_STOREFRONT_ORBS_REWARDS_ANNOUNCEMENT,
        J = W || X,
        Q = l.useMemo(() => (W ? K : q), [W, K, q]);
    l.useEffect(() => {
        s && (H && V(v.i.INDIRECT_ACTION), J && Q(v.i.INDIRECT_ACTION));
    }, [V, Q, s, H, J]);
    let $ = l.useCallback(() => {
            V(v.i.TAKE_ACTION), Q(v.i.TAKE_ACTION);
            let e = p.A.getStorefrontState(t.id)?.activePage ?? 0;
            (0, m.pX)(y.BVt.CHANNELS_GAME_SHOP(t.id, e));
        }, [t.id, V, Q]),
        Z = l.useCallback(() => {
            (0, x.X)({ guildId: t.id, forceFetch: W });
        }, [t.id, W]),
        ee = l.useCallback(() => {
            Q(v.i.USER_DISMISS);
        }, [Q]),
        et = l.useCallback(
            (e) => {
                null != t &&
                    (0, h.L3)(e, async () => {
                        let { default: e } = await n.e("99523").then(n.bind(n, 41614));
                        return (n) => (0, i.jsx)(e, { ...n, guild: t });
                    });
            },
            [t],
        ),
        en = l.useCallback(() => {
            L.current?.onMouseEnter(null, 500);
        }, [L]),
        ei = l.useCallback(
            (e, n, l, r) =>
                (0, i.jsx)(b.G, {
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
                        className: a()(R.UU, n),
                        children: j.intl.string(j.t.vyaWs7),
                    }),
                    selected: s,
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
            [t.id, s, Z, $, et, H],
        ),
        el = l.useMemo(() => {
            if (null == w) return;
            let e = null != w.assetId ? S.A.toURLSafe((0, T.YE)(w.applicationId, w.assetId, 128, "webp")) : void 0,
                t =
                    null != w.backgroundImageAssetId
                        ? S.A.toURLSafe((0, T.YE)(w.applicationId, w.backgroundImageAssetId, 128, "webp"))
                        : void 0;
            if (null != e) return { imageUrl: e, backgroundImageUrl: t };
        }, [w]),
        es = l.useCallback(() => {
            if (W) {
                let e = P
                    ? j.intl.string(j.t["z/QEIP"])
                    : j.intl.formatToPlainString(j.t["9J4h1a"], { applicationName: w.applicationName });
                return (0, i.jsx)(I.A, {
                    onActionClick: $,
                    onActionMouseDown: Z,
                    onRender: en,
                    onRequestClose: ee,
                    targetElementRef: M,
                    skuImageDetails: el,
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
        }, [W, P, w, $, Z, en, ee, el, X]);
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(C.A, { ref: L, children: ei }), !D && !U && !G && es()] });
});
