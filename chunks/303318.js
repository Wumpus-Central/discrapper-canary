l.d(t, { default: () => b });
var n = l(627968),
    s = l(64700),
    i = l(311907),
    r = l(397927),
    a = l(793574),
    c = l(688810),
    o = l(571827),
    d = l(725807),
    u = l(919395),
    m = l(84540),
    p = l(696451),
    x = l(287809),
    A = l(954571),
    h = l(927578),
    g = l(979286),
    _ = l(993408),
    j = l(821701),
    C = l(841702),
    y = l(738252),
    v = l(35314),
    E = l(652215),
    f = l(788868),
    I = l(985018),
    T = l(88183);
function N(e) {
    let {
            currentUser: t,
            categories: l,
            purchases: c,
            analyticsLocations: x,
            onClose: A,
            guildId: C,
            initialSelectedNameplate: E,
        } = e,
        N = (0, i.bG)([p.Ay], () => (null != C && null != t ? p.Ay.getMember(C, t.id) : null)),
        b = null != N ? N.collectibles?.nameplate : t.collectibles?.nameplate,
        { pendingNameplate: P } = (0, u.rv)(t, C),
        [k, w] = (0, s.useState)(() =>
            null != E
                ? E
                : void 0 !== P
                  ? P
                  : null == b
                    ? null
                    : ((0, _.zd)(c, l).find((e) => {
                          let { skuId: t } = e;
                          return t === b.skuId;
                      }) ?? null),
        ),
        U = (0, u.lw)({
            pendingValue: k,
            userValue: t?.collectibles?.nameplate,
            guildValue: N?.collectibles?.nameplate,
            guildId: C,
        }),
        { product: L, purchase: O } = (0, j.A)(k?.skuId),
        M = null != O ? (0, _.gA)(O) : (0, _.G0)(L),
        S = h.Ay.canUseCollectibles(t),
        R = void 0 === P ? k?.skuId === b?.skuId : k?.skuId === P?.skuId,
        D = (0, s.useCallback)(
            (e) => {
                A(),
                    (0, g.Cz)({
                        analyticsLocations: x,
                        analyticsSource: a.A.EDIT_NAMEPLATE_MODAL,
                        initialProductSkuId: e,
                    });
            },
            [x, A],
        );
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsxs)(r.rQ0, {
                "data-migration-pending": !0,
                separator: !1,
                className: T.wx,
                children: [
                    (0, n.jsx)(r.Heading, { variant: "heading-lg/semibold", children: I.intl.string(I.t.BwdeM1) }),
                    (0, n.jsx)(r.s_y, { "data-migration-pending": !0, className: T.b, onClick: A }),
                ],
            }),
            (0, n.jsxs)(r.$mQ, {
                "data-migration-pending": !0,
                className: T.Qs,
                scrollbarType: "none",
                children: [
                    (0, n.jsx)(v.A, { currentUser: t, selectedNameplate: k, guildId: C, onSelect: w, onOpenShop: D }),
                    (0, n.jsx)(y.A, { user: t, guildId: C, nameplate: U }),
                ],
            }),
            (0, n.jsxs)(r.jlY, {
                "data-migration-pending": !0,
                className: T.Hx,
                children: [
                    (null != O && (!M || S)) || null === k
                        ? (0, n.jsx)(r.Button, {
                              variant: "primary",
                              text: I.intl.string(I.t.Jh8fJz),
                              onClick: () => {
                                  (0, m.p)({ guildId: C, nameplate: k }), A();
                              },
                              disabled: R,
                          })
                        : null == O && (S || !M)
                          ? (0, n.jsx)(r.Button, {
                                variant: "primary",
                                onClick: () => D(L?.skuId),
                                text: I.intl.string(I.t.fYfGgK),
                            })
                          : (0, n.jsx)(d.A, {
                                subscriptionTier: f.pe.TIER_2,
                                showGradient: !S,
                                textOptions: {
                                    textOverride: h.Ay.isPremium(t)
                                        ? I.intl.string(I.t.KXLX7l)
                                        : S
                                          ? I.intl.string(I.t.mr4K7D)
                                          : I.intl.string(I.t.pj0XBN),
                                },
                            }),
                    !S && M
                        ? (0, n.jsx)(o.A, { itemType: O?.type ?? L?.type, onClose: A })
                        : (0, n.jsx)(r.Button, {
                              variant: "secondary",
                              text: I.intl.string(I.t["ETE/oC"]),
                              onClick: A,
                          }),
                ],
            }),
        ],
    });
}
function b(e) {
    let { transitionState: t, analyticsLocations: l, onClose: o, guildId: d, initialSelectedNameplate: u } = e,
        m = (0, i.bG)([x.default], () => x.default.getCurrentUser()),
        { analyticsLocations: p } = (0, c.Ay)(l, a.A.EDIT_NAMEPLATE_MODAL),
        { categories: h, purchases: g, isFetchingCategories: _, isFetchingPurchases: j } = (0, C.Ay)(),
        y = _ || (j && 0 === g.size);
    return ((0, s.useEffect)(() => {
        A.default.track(E.HAw.OPEN_MODAL, { type: E.JJy.NAMEPLATE_CUSTOMIZATION, location_stack: p });
    }, [p]),
    null == m)
        ? null
        : (0, n.jsx)(c.f5, {
              value: p,
              children: (0, n.jsx)(r.EOs, {
                  transitionState: t,
                  size: y ? r.rIJ.DYNAMIC : r.rIJ.MEDIUM,
                  parentComponent: "NameplateModal",
                  "data-migration-pending": !0,
                  children: y
                      ? (0, n.jsx)(r.y$y, { className: T.u1, type: r.y$y.Type.SPINNING_CIRCLE })
                      : (0, n.jsx)(N, {
                            currentUser: m,
                            categories: h,
                            purchases: g,
                            analyticsLocations: p,
                            guildId: d,
                            initialSelectedNameplate: u,
                            onClose: o,
                        }),
              }),
          });
}
