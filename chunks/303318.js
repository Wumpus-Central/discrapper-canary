l.d(t, { default: () => P });
var a = l(627968),
    s = l(64700),
    r = l(311907),
    i = l(821609),
    n = l(935462),
    c = l(534514),
    d = l(289873),
    o = l(793574),
    u = l(688810),
    m = l(571827),
    p = l(725807),
    x = l(919395),
    _ = l(84540),
    h = l(696451),
    A = l(287809),
    g = l(954571),
    v = l(927578),
    j = l(979286),
    y = l(993408),
    E = l(821701),
    N = l(841702),
    b = l(738252),
    f = l(35314),
    I = l(652215),
    C = l(788868),
    w = l(985018),
    S = l(762279);
function M(e) {
    let {
            currentUser: t,
            categories: l,
            purchases: d,
            analyticsLocations: u,
            onClose: A,
            guildId: g,
            initialSelectedNameplate: N,
        } = e,
        I = (0, r.bG)([h.Ay], () => (null != g && null != t ? h.Ay.getMember(g, t.id) : null)),
        M = null != I ? I.collectibles?.nameplate : t.collectibles?.nameplate,
        { pendingNameplate: P } = (0, x.rv)(t, g),
        [U, k] = (0, s.useState)(() =>
            null != N
                ? N
                : void 0 !== P
                  ? P
                  : null == M
                    ? null
                    : ((0, y.zd)(d, l).find((e) => {
                          let { skuId: t } = e;
                          return t === M.skuId;
                      }) ?? null),
        ),
        L = (0, x.lw)({
            pendingValue: U,
            userValue: t?.collectibles?.nameplate,
            guildValue: I?.collectibles?.nameplate,
            guildId: g,
        }),
        { product: T, purchase: D } = (0, E.A)(U?.skuId),
        R = null != D ? (0, y.gA)(D) : (0, y.G0)(T),
        O = v.Ay.canUseCollectibles(t),
        G = void 0 === P ? U?.skuId === M?.skuId : U?.skuId === P?.skuId,
        H = (0, s.useCallback)(
            (e) => {
                A(),
                    (0, j.Cz)({
                        analyticsLocations: u,
                        analyticsSource: o.A.EDIT_NAMEPLATE_MODAL,
                        initialProductSkuId: e,
                    });
            },
            [u, A],
        );
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsxs)(n.rQ, {
                "data-migration-pending": !0,
                separator: !1,
                className: S.wx,
                children: [
                    (0, a.jsx)(c.D, { variant: "heading-lg/semibold", children: w.intl.string(w.t.BwdeM1) }),
                    (0, a.jsx)(n.s_, { "data-migration-pending": !0, className: S.b, onClick: A }),
                ],
            }),
            (0, a.jsxs)(n.$m, {
                "data-migration-pending": !0,
                className: S.Qs,
                scrollbarType: "none",
                children: [
                    (0, a.jsx)(f.A, { currentUser: t, selectedNameplate: U, guildId: g, onSelect: k, onOpenShop: H }),
                    (0, a.jsx)(b.A, { user: t, guildId: g, nameplate: L }),
                ],
            }),
            (0, a.jsxs)(n.jl, {
                "data-migration-pending": !0,
                className: S.Hx,
                children: [
                    (null != D && (!R || O)) || null === U
                        ? (0, a.jsx)(i.$, {
                              variant: "primary",
                              text: w.intl.string(w.t.Jh8fJz),
                              onClick: () => {
                                  (0, _.p)({ guildId: g, nameplate: U }), A();
                              },
                              disabled: G,
                          })
                        : null == D && (O || !R)
                          ? (0, a.jsx)(i.$, {
                                variant: "primary",
                                onClick: () => H(T?.skuId),
                                text: w.intl.string(w.t.fYfGgK),
                            })
                          : (0, a.jsx)(p.A, {
                                subscriptionTier: C.pe.TIER_2,
                                showGradient: !O,
                                textOptions: {
                                    textOverride: v.Ay.isPremium(t)
                                        ? w.intl.string(w.t.KXLX7l)
                                        : O
                                          ? w.intl.string(w.t.mr4K7D)
                                          : w.intl.string(w.t.pj0XBN),
                                },
                            }),
                    !O && R
                        ? (0, a.jsx)(m.A, { itemType: D?.type ?? T?.type, onClose: A })
                        : (0, a.jsx)(i.$, { variant: "secondary", text: w.intl.string(w.t["ETE/oC"]), onClick: A }),
                ],
            }),
        ],
    });
}
function P(e) {
    let { transitionState: t, analyticsLocations: l, onClose: i, guildId: c, initialSelectedNameplate: m } = e,
        p = (0, r.bG)([A.default], () => A.default.getCurrentUser()),
        { analyticsLocations: x } = (0, u.Ay)(l, o.A.EDIT_NAMEPLATE_MODAL),
        { categories: _, purchases: h, isFetchingCategories: v, isFetchingPurchases: j } = (0, N.Ay)(),
        y = v || (j && 0 === h.size);
    return ((0, s.useEffect)(() => {
        g.default.track(I.HAw.OPEN_MODAL, { type: I.JJy.NAMEPLATE_CUSTOMIZATION, location_stack: x });
    }, [x]),
    null == p)
        ? null
        : (0, a.jsx)(u.f5, {
              value: x,
              children: (0, a.jsx)(n.EO, {
                  transitionState: t,
                  size: y ? n.rI.DYNAMIC : n.rI.MEDIUM,
                  parentComponent: "NameplateModal",
                  "data-migration-pending": !0,
                  children: y
                      ? (0, a.jsx)(d.y, { className: S.u1, type: d.y.Type.SPINNING_CIRCLE })
                      : (0, a.jsx)(M, {
                            currentUser: p,
                            categories: _,
                            purchases: h,
                            analyticsLocations: x,
                            guildId: c,
                            initialSelectedNameplate: m,
                            onClose: i,
                        }),
              }),
          });
}
