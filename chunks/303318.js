l.d(t, { default: () => M });
var r = l(627968),
    a = l(64700),
    s = l(311907),
    n = l(821609),
    i = l(935462),
    c = l(534514),
    o = l(289873),
    u = l(793574),
    d = l(688810),
    m = l(571827),
    A = l(725807),
    p = l(919395),
    _ = l(84540),
    h = l(696451),
    g = l(287809),
    f = l(954571),
    x = l(927578),
    E = l(979286),
    I = l(993408),
    v = l(821701),
    C = l(841702),
    b = l(738252),
    N = l(35314),
    y = l(652215),
    T = l(788868),
    j = l(985018),
    R = l(762279);
function w(e) {
    let {
            currentUser: t,
            categories: l,
            purchases: o,
            analyticsLocations: d,
            onClose: g,
            guildId: f,
            initialSelectedNameplate: C,
        } = e,
        y = (0, s.bG)([h.Ay], () => (null != f && null != t ? h.Ay.getMember(f, t.id) : null)),
        w = null != y ? y.collectibles?.nameplate : t.collectibles?.nameplate,
        { pendingNameplate: M } = (0, p.rv)(t, f),
        [S, O] = (0, a.useState)(() =>
            null != C
                ? C
                : void 0 !== M
                  ? M
                  : null == w
                    ? null
                    : ((0, I.zd)(o, l).find((e) => {
                          let { skuId: t } = e;
                          return t === w.skuId;
                      }) ?? null),
        ),
        L = (0, p.lw)({
            pendingValue: S,
            userValue: t?.collectibles?.nameplate,
            guildValue: y?.collectibles?.nameplate,
            guildId: f,
        }),
        { product: P, purchase: U } = (0, v.A)(S?.skuId),
        D = null != U ? (0, I.gA)(U) : (0, I.G0)(P),
        k = x.Ay.canUseCollectibles(t),
        G = void 0 === M ? S?.skuId === w?.skuId : S?.skuId === M?.skuId,
        H = (0, a.useCallback)(
            (e) => {
                g(),
                    (0, E.Cz)({
                        analyticsLocations: d,
                        analyticsSource: u.A.EDIT_NAMEPLATE_MODAL,
                        initialProductSkuId: e,
                    });
            },
            [d, g],
        );
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)(i.rQ, {
                "data-migration-pending": !0,
                separator: !1,
                className: R.wx,
                children: [
                    (0, r.jsx)(c.D, { variant: "heading-lg/semibold", children: j.intl.string(j.t.BwdeM1) }),
                    (0, r.jsx)(i.s_, { "data-migration-pending": !0, className: R.b, onClick: g }),
                ],
            }),
            (0, r.jsxs)(i.$m, {
                "data-migration-pending": !0,
                className: R.Qs,
                scrollbarType: "none",
                children: [
                    (0, r.jsx)(N.A, { currentUser: t, selectedNameplate: S, guildId: f, onSelect: O, onOpenShop: H }),
                    (0, r.jsx)(b.A, { user: t, guildId: f, nameplate: L }),
                ],
            }),
            (0, r.jsxs)(i.jl, {
                "data-migration-pending": !0,
                className: R.Hx,
                children: [
                    (null != U && (!D || k)) || null === S
                        ? (0, r.jsx)(n.$, {
                              variant: "primary",
                              text: j.intl.string(j.t.Jh8fJz),
                              onClick: () => {
                                  (0, _.p)({ guildId: f, nameplate: S }), g();
                              },
                              disabled: G,
                          })
                        : null == U && (k || !D)
                          ? (0, r.jsx)(n.$, {
                                variant: "primary",
                                onClick: () => H(P?.skuId),
                                text: j.intl.string(j.t.fYfGgK),
                            })
                          : (0, r.jsx)(A.A, {
                                subscriptionTier: T.pe.TIER_2,
                                showGradient: !k,
                                textOptions: {
                                    textOverride: x.Ay.isPremium(t)
                                        ? j.intl.string(j.t.KXLX7l)
                                        : k
                                          ? j.intl.string(j.t.mr4K7D)
                                          : j.intl.string(j.t.pj0XBN),
                                },
                            }),
                    !k && D
                        ? (0, r.jsx)(m.A, { itemType: U?.type ?? P?.type, onClose: g })
                        : (0, r.jsx)(n.$, { variant: "secondary", text: j.intl.string(j.t["ETE/oC"]), onClick: g }),
                ],
            }),
        ],
    });
}
function M(e) {
    let { transitionState: t, analyticsLocations: l, onClose: n, guildId: c, initialSelectedNameplate: m } = e,
        A = (0, s.bG)([g.default], () => g.default.getCurrentUser()),
        { analyticsLocations: p } = (0, d.Ay)(l, u.A.EDIT_NAMEPLATE_MODAL),
        { categories: _, purchases: h, isFetchingCategories: x, isFetchingPurchases: E } = (0, C.Ay)(),
        I = x || (E && 0 === h.size);
    return ((0, a.useEffect)(() => {
        f.default.track(y.HAw.OPEN_MODAL, { type: y.JJy.NAMEPLATE_CUSTOMIZATION, location_stack: p });
    }, [p]),
    null == A)
        ? null
        : (0, r.jsx)(d.f5, {
              value: p,
              children: (0, r.jsx)(i.EO, {
                  transitionState: t,
                  size: I ? i.rI.DYNAMIC : i.rI.MEDIUM,
                  parentComponent: "NameplateModal",
                  "data-migration-pending": !0,
                  children: I
                      ? (0, r.jsx)(o.y, { className: R.u1, type: o.y.Type.SPINNING_CIRCLE })
                      : (0, r.jsx)(w, {
                            currentUser: A,
                            categories: _,
                            purchases: h,
                            analyticsLocations: p,
                            guildId: c,
                            initialSelectedNameplate: m,
                            onClose: n,
                        }),
              }),
          });
}
