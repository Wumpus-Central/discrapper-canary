a.r(t), a.d(t, { default: () => A });
var l = a(627968),
    d = a(64700),
    s = a(503698),
    i = a.n(s),
    n = a(289873),
    r = a(17928),
    u = a(944791),
    o = a(710195),
    c = a(976860),
    p = a(495544),
    I = a(832163),
    f = a(81341),
    S = a(44724),
    g = a(865949),
    L = a(964395),
    C = a(901123),
    k = a(253004);
function A(e) {
    let { applicationId: t, pageIndex: a, skuId: s, slug: A } = e,
        { guildId: E, configFetchState: h } = (0, r.cf)([I.A], () => ({
            guildId: I.A.getGuildIdFromApplicationId(t),
            configFetchState: I.A.getConfigFetchState(),
        })),
        _ = (0, r.bG)([p.default], () => p.default.getId()),
        O = (0, r.bG)([o.A], () => o.A.hasLoaded(_)),
        x = (0, f.I)({ location: "SocialLayerStorefrontApplicationWrapper" }),
        b = null != a ? parseInt(a, 10) : 0;
    d.useEffect(() => {
        (0, u.I)(C.BV.COLLECTIBLES_SHOP_GAME_SHOP(t, isNaN(b) ? void 0 : b, s, A));
    }, [t, b, s, A]),
        d.useEffect(() => {
            O &&
                "idle" !== h.state &&
                "loading" !== h.state &&
                (x ||
                    null == E ||
                    (0, S.default)({
                        guildId: E,
                        skuId: s ?? void 0,
                        pageIndex: isNaN(b) ? void 0 : b,
                        slug: A ?? void 0,
                    }),
                null == E && (0, c.pX)(C.BV.COLLECTIBLES_SHOP));
        }, [x, E, O, h.state, s, b, A]);
    let v = d.useCallback(
            (e, t) => (null == E ? null : (0, l.jsx)(L.A, { guildId: E, storefront: t, selectedPageIndex: e })),
            [E],
        ),
        B = d.useCallback((e, a, l) => C.BV.COLLECTIBLES_SHOP_GAME_SHOP(t, e, a, l), [t]);
    return null != E && O && x && "success" === h.state
        ? (0, l.jsx)(g.SocialLayerStorefrontInnerWrapper, {
              guildId: E,
              skuId: s,
              pageIndex: b,
              renderHeader: v,
              getSocialLayerStorefrontLink: B,
          })
        : (0, l.jsx)("div", { className: i()(k.u, k.k), children: (0, l.jsx)(n.y, {}) });
}
