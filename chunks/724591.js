"use strict";
n.d(t, { A: () => M });
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
    g = n(871123),
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
    v = n(652793),
    y = n(652215),
    j = n(49999),
    R = n(985018),
    O = n(811094),
    L = n(439706);
let M = s.memo(function (e) {
    let { guild: t, selected: l } = e,
        M = s.useRef(null),
        D = s.useRef(null),
        G = (0, d.useHasAnyModalOpen)(),
        U = (0, a.bG)([b.A], () => b.A.hasLayers()),
        P = (0, m.xr)((e) => e.fullScreenLayers.length > 0),
        w = (0, x.n)({ location: "GameShopChannelRow" });
    s.useEffect(() => {
        (0, _.Kh)(t.id);
    }, [t.id]);
    let k = (0, a.bG)([f.A], () => f.A.getAnnouncement(t.id)),
        V = k?.state === "success" ? k.announcement : void 0,
        [B, H] = (0, A.x_)(o.M.GAME_SHOP_NEW_BADGE, t.id, V?.id ?? ""),
        F = B === o.M.GAME_SHOP_NEW_BADGE && null != V,
        K = null == k || "loading" === k.state || F || t.id !== (0, g.zf)() || !w,
        [W, Y] = (0, A.RF)(K ? null : o.M.SLAYER_STOREFRONT_ORBS_REWARDS_ANNOUNCEMENT, 1),
        z = W === o.M.SLAYER_STOREFRONT_ORBS_REWARDS_ANNOUNCEMENT,
        q = F || z,
        X = s.useMemo(() => (F ? H : Y), [F, H, Y]);
    s.useEffect(() => {
        q && null != D.current && D.current.scrollIntoView({ block: "nearest", behavior: "smooth" });
    }, [q]),
        s.useEffect(() => {
            l && q && X(j.i.INDIRECT_ACTION);
        }, [X, l, q]);
    let J = s.useCallback(() => {
            X(j.i.TAKE_ACTION);
            let e = f.A.getStorefrontState(t.id)?.activePage ?? 0;
            (0, p.pX)(y.BVt.CHANNELS_GAME_SHOP(t.id, e));
        }, [t.id, X]),
        Q = s.useCallback(() => {
            (0, C.X)({ guildId: t.id, forceFetch: F });
        }, [t.id, F]),
        $ = s.useCallback(() => {
            X(j.i.USER_DISMISS);
        }, [X]),
        Z = s.useCallback(
            (e) => {
                null != t &&
                    (0, h.L3)(e, async () => {
                        let { default: e } = await n.e("99523").then(n.bind(n, 41614));
                        return (n) => (0, i.jsx)(e, { ...n, guild: t });
                    });
            },
            [t],
        ),
        ee = s.useCallback(() => {
            M.current?.onMouseEnter(null, 500);
        }, [M]),
        et = s.useCallback(
            (e, n, s, a) =>
                (0, i.jsx)(v.G, {
                    innerClassName: e,
                    ref: D,
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
                        children: t?.id === (0, g.zf)() ? R.intl.string(R.t.xFQAPs) : R.intl.string(R.t.vyaWs7),
                    }),
                    selected: l,
                    onMouseDown: Q,
                    onClick: J,
                    onContextMenu: Z,
                    trailing: (0, i.jsxs)(i.Fragment, {
                        children: [
                            F &&
                                (0, i.jsx)(u.LpS, {
                                    text: R.intl.string(R.t.y2b7CA),
                                    color: c.A.colors.BACKGROUND_BRAND.css,
                                }),
                            a,
                        ],
                    }),
                }),
            [t.id, l, Q, J, Z, F],
        ),
        en = s.useMemo(() => {
            if (null == V) return;
            let e = null != V.assetId ? T.A.toURLSafe((0, S.YE)(V.applicationId, V.assetId, 128, "webp")) : void 0,
                t =
                    null != V.backgroundImageAssetId
                        ? T.A.toURLSafe((0, S.YE)(V.applicationId, V.backgroundImageAssetId, 128, "webp"))
                        : void 0;
            if (null != e) return { imageUrl: e, backgroundImageUrl: t };
        }, [V]),
        ei = s.useCallback(() => {
            if (F) {
                let e = w
                    ? R.intl.string(R.t["z/QEIP"])
                    : R.intl.formatToPlainString(R.t["9J4h1a"], { applicationName: V.applicationName });
                return (0, i.jsx)(I.A, {
                    onActionClick: J,
                    onActionMouseDown: Q,
                    onRender: ee,
                    onRequestClose: $,
                    targetElementRef: D,
                    skuImageDetails: en,
                    title: R.intl.string(R.t["7PvvS9"]),
                    body: e,
                    overlayImageUrl: w ? L.A : void 0,
                });
            }
            return z
                ? (0, i.jsx)(E.A, {
                      onActionClick: J,
                      onActionMouseDown: Q,
                      onRender: ee,
                      onRequestClose: $,
                      targetElementRef: D,
                      applicationName: R.intl.string(R.t.Uu8hke),
                  })
                : null;
        }, [F, w, V, J, Q, ee, $, en, z]);
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(N.A, { ref: M, children: et }), !G && !U && !P && ei()] });
});
