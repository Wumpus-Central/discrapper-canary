n.d(t, { A: () => j });
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
    A = n(932001),
    _ = n(361158),
    m = n(976860),
    g = n(733391),
    p = n(832163),
    f = n(44724),
    x = n(849134),
    E = n(203548),
    I = n(186111),
    C = n(371794),
    N = n(998218),
    T = n(652793),
    S = n(652215),
    b = n(49999),
    y = n(985018),
    v = n(567431);
let j = l.memo(function (e) {
    let { guild: t, selected: s } = e,
        j = l.useRef(null),
        R = l.useRef(null),
        O = (0, c.useHasAnyModalOpen)(),
        L = (0, r.bG)([I.A], () => I.A.hasLayers()),
        M = (0, _.xr)((e) => e.fullScreenLayers.length > 0);
    l.useEffect(() => {
        (0, g.Kh)(t.id);
    }, [t.id]);
    let D = (0, r.bG)([p.A], () => p.A.getAnnouncement(t.id)),
        U = D?.state === "success" ? D.announcement : void 0,
        [G, P] = (0, A.x_)(o.M.GAME_SHOP_NEW_BADGE, t.id, U?.id ?? "", void 0, !0),
        k = G === o.M.GAME_SHOP_NEW_BADGE && null != U,
        [w, B] = (0, A.x_)(o.M.GAME_SHOP_NEW_DROP_POPOVER, t.id, U?.id ?? ""),
        V = w === o.M.GAME_SHOP_NEW_DROP_POPOVER && null != U;
    l.useEffect(() => {
        s && (k && P(b.i.INDIRECT_ACTION), V && B(b.i.INDIRECT_ACTION));
    }, [P, B, s, k, V]);
    let H = l.useCallback(() => {
            P(b.i.TAKE_ACTION), B(b.i.TAKE_ACTION);
            let e = p.A.getStorefrontState(t.id)?.activePage ?? 0;
            (0, m.pX)(S.BVt.CHANNELS_GAME_SHOP(t.id, e));
        }, [t.id, P, B]),
        F = l.useCallback(() => {
            (0, f.X)({ guildId: t.id, forceFetch: V });
        }, [t.id, V]),
        K = l.useCallback(() => {
            B(b.i.USER_DISMISS);
        }, [B]),
        W = l.useCallback(
            (e) => {
                null != t &&
                    (0, h.L3)(e, async () => {
                        let { default: e } = await n.e("99523").then(n.bind(n, 41614));
                        return (n) => (0, i.jsx)(e, { ...n, guild: t });
                    });
            },
            [t],
        ),
        Y = l.useCallback(() => {
            j.current?.onMouseEnter(null, 500);
        }, [j]),
        z = l.useCallback(
            (e, n, l, r) =>
                (0, i.jsx)(T.G, {
                    innerClassName: e,
                    ref: R,
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
                        className: a()(v.UU, n),
                        children: y.intl.string(y.t.vyaWs7),
                    }),
                    selected: s,
                    onMouseDown: F,
                    onClick: H,
                    onContextMenu: W,
                    trailing: (0, i.jsxs)(i.Fragment, {
                        children: [
                            k &&
                                (0, i.jsx)(u.LpS, {
                                    text: y.intl.string(y.t.y2b7CA),
                                    color: d.A.colors.BACKGROUND_BRAND.css,
                                }),
                            r,
                        ],
                    }),
                }),
            [t.id, s, F, H, W, k],
        ),
        q = l.useMemo(() => {
            if (null == U) return;
            let e = null != U.assetId ? N.A.toURLSafe((0, C.YE)(U.applicationId, U.assetId, 128, "webp")) : void 0,
                t =
                    null != U.backgroundImageAssetId
                        ? N.A.toURLSafe((0, C.YE)(U.applicationId, U.backgroundImageAssetId, 128, "webp"))
                        : void 0;
            if (null != e) return { imageUrl: e, backgroundImageUrl: t };
        }, [U]),
        X = l.useCallback(
            () =>
                V
                    ? (0, i.jsx)(x.A, {
                          onActionClick: H,
                          onActionMouseDown: F,
                          onRender: Y,
                          onRequestClose: K,
                          targetElementRef: R,
                          skuImageDetails: q,
                          title: y.intl.string(y.t["7PvvS9"]),
                          body: y.intl.formatToPlainString(y.t["9J4h1a"], { applicationName: U.applicationName }),
                      })
                    : null,
            [V, U, H, F, Y, K, q],
        );
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(E.A, { ref: j, children: z }), !O && !L && !M && X()] });
});
