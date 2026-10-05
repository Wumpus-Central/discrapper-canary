n.d(t, { Zt: () => ep, yo: () => eA });
var l,
    i,
    r = n(477900),
    o = n(582128),
    a = n(365199),
    s = n(922016),
    u = n(980707),
    c = n(477782),
    d = n(793574),
    f = n(688810),
    E = n(17928),
    R = n(540737),
    p = n(999291),
    A = n(287809),
    m = n(259464),
    g = n(449582);
function I(e, t) {
    let n = (0, E.bG)([A.default], () => A.default.getUser(e), [e]),
        l = (0, p.Ay)(e, t),
        i = (0, m.Z)(n, t),
        r = (0, g.r)({ user: n, guildId: t }),
        a = i?.skuId,
        s = r?.skuId,
        u = l?.profileEffect?.skuId,
        c = l?.profileFrame?.skuId;
    return o.useMemo(() => [a, s, u, c].filter((e) => null != e), [a, s, u, c]);
}
var x = n(821925),
    _ = n(280450),
    b = n(722258),
    O = n(575593),
    N = n(174459),
    h = n(652215),
    v = (((l = {}).ROW_VIEWED = "row_viewed"), (l.ROW_CLICKED = "row_clicked"), l);
function j(e) {
    let { action: t, skuId: n, productType: l, isDisabled: i, source: r } = e;
    N.default.track(h.HAw.SHOP_THIS_LOOK_ROW_ACTION, {
        action: t,
        sku_id: n,
        product_type: (function (e) {
            switch (e) {
                case O.R.PROFILE_FRAME:
                    return "profile_frame";
                case O.R.PROFILE_EFFECT:
                    return "profile_effect";
                case O.R.AVATAR_DECORATION:
                    return "avatar_decoration";
                case O.R.NAMEPLATE:
                    return "nameplate";
                default:
                    return;
            }
        })(l),
        is_disabled: i,
        source: r ?? void 0,
    });
}
var P =
        (((i = {})[(i.SHOP = 1)] = "SHOP"),
        (i[(i.QUEST = 2)] = "QUEST"),
        (i[(i.PREMIUM_PROMOTION = 3)] = "PREMIUM_PROMOTION"),
        (i[(i.REWARD = 4)] = "REWARD"),
        (i[(i.INTERNAL = 5)] = "INTERNAL"),
        i),
    C = n(38405),
    M = n(503698),
    T = n.n(M),
    S = n(834730),
    k = n(682301),
    L = n(623373),
    y = n(536572),
    G = n(14702),
    U = n(375708),
    D = n(728500);
function F() {
    return (0, r.jsxs)("div", {
        className: D.nM,
        "aria-hidden": !0,
        children: [
            (0, r.jsx)("div", { className: D.VH, children: (0, r.jsx)("div", { className: D.Qc }) }),
            (0, r.jsxs)("div", {
                className: T()(D.Qq, D.Um),
                children: [(0, r.jsx)("div", { className: D.Iz }), (0, r.jsx)("div", { className: D.wS })],
            }),
        ],
    });
}
function w(e) {
    let { skuId: t, disabled: n = !1, source: l } = e,
        { product: i, state: a } = (0, k.IK)(t, { needsCategory: !1, shouldFetchProduct: !1 }),
        s = (0, E.bG)(
            [x.A],
            () =>
                x.A.getProductsForSku(t)
                    ?.flatMap((e) => e.skus)
                    .find((e) => e.id === t),
            [t],
        ),
        u = o.useRef(!1);
    if (
        (o.useEffect(() => {
            null == i ||
                u.current ||
                ((u.current = !0),
                j({ action: v.ROW_VIEWED, skuId: t, productType: (0, L.YW)(i) ?? void 0, isDisabled: n, source: l }));
        }, [i, t, n, l]),
        "loading" === a)
    )
        return (0, r.jsx)(F, {});
    if (null == i) return null;
    let c = (0, L.YW)(i),
        d =
            null != c
                ? (function (e) {
                      switch (e) {
                          case O.R.AVATAR_DECORATION:
                              return U.intl.string(U.t["7v0T9P"]);
                          case O.R.PROFILE_EFFECT:
                              return U.intl.string(U.t.wR5wOo);
                          case O.R.NAMEPLATE:
                              return U.intl.string(U.t.x5CoXR);
                          case O.R.PROFILE_FRAME:
                              return U.intl.string(U.t.GWrZOd);
                          default:
                              return;
                      }
                  })(c)
                : void 0;
    return (0, r.jsxs)("div", {
        className: T()(D.nM, { [D.r9]: n }),
        children: [
            (0, r.jsx)("div", { className: D.VH, children: (0, r.jsx)(G.O, { product: i, sku: s }) }),
            (0, r.jsxs)("div", {
                className: D.Qq,
                children: [
                    (0, r.jsx)(S.E, { variant: "text-sm/medium", color: "text-default", children: (0, y.VG)(i) }),
                    null != d && (0, r.jsx)(S.E, { variant: "text-xs/normal", color: "text-subtle", children: d }),
                ],
            }),
        ],
    });
}
function V(e, t) {
    return (
        e.length === t.length &&
        e.every(
            (e, n) =>
                e.skuId === t[n].skuId &&
                e.isShoppableItem === t[n].isShoppableItem &&
                e.productType === t[n].productType,
        )
    );
}
var W = n(192308),
    K = n(403581),
    B = n(427358),
    Q = n(994500),
    q = n(851746);
let H = (0, n(945810).mj)({
    name: "2026-09-referral-profile-contextual-menu-upsell",
    kind: "user",
    defaultConfig: !1,
    variations: { 0: !1, 1: !0 },
});
var Y = n(103411),
    z = n(239211),
    X = n(284009),
    $ = n.n(X),
    J = n(50268),
    Z = n(486503),
    ee = n(342053),
    et = n(640794),
    en = n(885386),
    el = n(957565),
    ei = n(518477),
    er = n(399476),
    eo = n(889460),
    ea = n(865116),
    es = n(928658);
let eu = (0, n(600975).C)({
    kind: "user",
    id: "2023-09_iar_user_reporting",
    label: "Safety Experience IAR User Reporting",
    defaultConfig: { enabled: !1 },
    treatments: [{ id: 1, label: "Enabled", config: { enabled: !0 } }],
});
var ec = n(183555),
    ed = n(254384),
    ef = n(939496),
    eE = n(993401);
function eR(e) {
    var t;
    let l,
        {
            user: i,
            guildId: m,
            viewProfileItem: g,
            appContext: O,
            popoutTargetRef: M,
            shouldShow: T,
            onRequestOpen: S,
            onRequestClose: k,
            children: L,
        } = e,
        { themeType: y } = (0, ef.E)(),
        { trackUserProfileAction: G } = (0, ec.NJ)(),
        { analyticsLocations: D, newestAnalyticsLocation: F } = (0, f.Ay)(d.A.USER_PROFILE_OVERFLOW_MENU);
    ((t = i.id),
        (l = I(t, m)),
        o.useEffect(() => {
            0 !== l.length && (0, R.tu)({ skuIds: l });
        }, [!0, l]));
    let X = {
            action: ei.pt.PRESS_OPTIONS,
            icon: a.MoreHorizontalIcon,
            tooltipText: U.intl.string(U.t["UKOtz+"]),
            "aria-label": U.intl.string(U.t["UKOtz+"]),
        },
        eE = (0, eo.A)({
            user: i,
            guildId: m,
            onAction: () => G({ action: "PRESS_INVITE_TO_SERVER", analyticsLocations: D }),
        }),
        eR = (0, z.A)({
            user: i,
            guildId: m,
            location: F,
            appContext: O,
            onBlock: () => G({ action: "BLOCK", analyticsLocations: D }),
            onIgnore: () => G({ action: "IGNORE", analyticsLocations: D }),
            onUnblock: () => G({ action: "UNBLOCK", analyticsLocations: D }),
        }),
        ep = (0, er.A)({
            user: i,
            guildId: m,
            location: F,
            appContext: O,
            onBlock: () => G({ action: "BLOCK", analyticsLocations: D }),
            onIgnore: () => G({ action: "IGNORE", analyticsLocations: D }),
            onUnignore: () => G({ action: "UNIGNORE", analyticsLocations: D }),
        }),
        eA = (function (e) {
            let { user: t, guildId: n, color: l, onAction: i, location: o = d.A.CONTEXT_MENU, appContext: a } = e,
                s = eu.useExperiment({ location: o }, { autoTrackExposure: !0 }).enabled,
                u = (0, E.bG)([_.default], () => _.default.getId() === t.id);
            return !s || u || t.isNonUserBot()
                ? null
                : (0, r.jsx)(c.Dr, {
                      id: "report-user",
                      color: l,
                      label: U.intl.string(U.t.A1MM3D),
                      action: () => (0, es.NW)(t, n === h.ME ? void 0 : n, i, a),
                  });
        })({
            user: i,
            guildId: m,
            location: F,
            appContext: O,
            color: "danger",
            onAction: () => G({ action: "REPORT", analyticsLocations: D }),
        }),
        em = (function (e) {
            let { user: t, guildId: n, color: l, onAction: i, appContext: o } = e,
                a = (0, E.bG)([ea.Ay], () => ea.Ay.get("iar_testing")),
                s = (0, E.bG)([A.default], () => A.default.getCurrentUser());
            return null != s && (t.id === s.id || t.isNonUserBot() || !s.isStaff() || !a)
                ? null
                : (0, r.jsx)(c.Dr, {
                      id: "staff-test-report-user",
                      color: l,
                      label: "[STAFF] Test Profile Report",
                      action: () => (0, es.RR)(t, n === h.ME ? void 0 : n, i, o),
                  });
        })({
            user: i,
            guildId: m,
            location: F,
            appContext: O,
            color: "danger",
            onAction: () => G({ action: "REPORT", analyticsLocations: D }),
        }),
        eg = (function (e) {
            let { user: t, guildId: n, onSuccess: l } = e,
                i = (0, p.Ay)(t.id, n ?? void 0),
                a = en.Q_.useSetting(),
                { tidaWebformEnabled: s } = Z.A.useExperiment(
                    { location: "useCopyUserInfoItem" },
                    { autoTrackExposure: !1 },
                ),
                u = (0, ee.g)("useCopyUserInfoItem"),
                d = (0, J.A)({
                    id: t.id,
                    label: U.intl.string(U.t["/AXYnE"]),
                    onSuccess: () => l?.(ei.pt.COPY_USER_ID),
                }),
                f = o.useMemo(() => (null == i ? null : i.getBannerURL({ canAnimate: !0, size: h.XAf })), [i]),
                E = o.useCallback(() => {
                    ((0, el.C)(t.id), l?.(ei.pt.COPY_USER_ID));
                }, [t.id, l]),
                R = o.useCallback(() => {
                    ((0, el.C)((0, et.A)(t.id)), l?.(ei.pt.COPY_PROFILE_LINK));
                }, [t.id, l]),
                A = o.useCallback(() => {
                    let e = t.getAvatarURL(n, h.XAf, !0);
                    ($()(null != e, "cannot copy null avatar URL"), (0, el.C)(e), l?.(ei.pt.COPY_AVATAR_IMAGE_LINK));
                }, [t, n, l]),
                m = o.useCallback(() => {
                    ($()(null != f, "cannot copy null banner URL"), (0, el.C)(f), l?.(ei.pt.COPY_BANNER_IMAGE_LINK));
                }, [f, l]);
            return !__OVERLAY__ && a && el.p5 && null != t.id
                ? s
                    ? (0, r.jsxs)(c.Dr, {
                          id: "copy-user-info",
                          label: U.intl.string(U.t.QvQeLv),
                          children: [
                              (0, r.jsx)(c.Dr, { id: "copy-user-id", label: U.intl.string(U.t["/AXYnE"]), action: E }),
                              u &&
                                  (0, r.jsx)(c.Dr, {
                                      id: "copy-user-profile-link",
                                      label: U.intl.string(U.t["E+rSVy"]),
                                      action: R,
                                  }),
                              (null != t.avatar || t.hasAvatarForGuild(n)) &&
                                  (0, r.jsx)(c.Dr, {
                                      id: "copy-user-avatar-link",
                                      label: U.intl.string(U.t.gERDvM),
                                      action: A,
                                  }),
                              null != f &&
                                  (0, r.jsx)(c.Dr, {
                                      id: "copy-user-banner-link",
                                      label: U.intl.string(U.t.hsNv0R),
                                      action: m,
                                  }),
                          ],
                      })
                    : d
                : null;
        })({ user: i, guildId: m, onSuccess: (e) => G({ action: e, analyticsLocations: D }) }),
        eI = (function (e, t, n) {
            let l = (0, E.bG)([_.default], () => _.default.getId() === e.id),
                i = I(e.id, t),
                { analyticsLocations: o } = (0, f.Ay)(d.A.USER_PROFILE_OVERFLOW_MENU),
                a = (0, E.bG)(
                    [x.A],
                    () =>
                        i.map((e) => {
                            let t = x.A.getProductsForSku(e)
                                ?.flatMap((e) => e.skus)
                                .find((t) => t.id === e);
                            return {
                                skuId: e,
                                isShoppableItem:
                                    null != t &&
                                    ("function" != typeof t.isAvailable
                                        ? (C.A.captureMessage("isShoppableCollectibleSku: sku missing isAvailable()", {
                                              extra: { skuId: t.id, skuType: t.type },
                                          }),
                                          !1)
                                        : t.isAvailable() && t.tenantMetadata?.collectibles?.sourceType === P.SHOP),
                                productType: t?.tenantMetadata?.collectibles?.type,
                            };
                        }),
                    [i],
                    V,
                );
            return l || 0 === i.length
                ? null
                : (0, r.jsx)(c.Dr, {
                      id: "shop-this-look",
                      label: U.intl.string(U.t.xNdRDO),
                      children: a.map((e) => {
                          let { skuId: t, isShoppableItem: l, productType: i } = e;
                          return (0, r.jsx)(
                              c.Dr,
                              {
                                  id: `shop-this-look-${t}`,
                                  navigable: l,
                                  disabled: !l,
                                  keepItemStyles: l,
                                  render: (e) => {
                                      let { disabled: l } = e;
                                      return (0, r.jsx)(w, { skuId: t, disabled: l, source: n });
                                  },
                                  action: l
                                      ? () => {
                                            (j({
                                                action: v.ROW_CLICKED,
                                                skuId: t,
                                                productType: i,
                                                isDisabled: !1,
                                                source: n,
                                            }),
                                                (0, b.B)({
                                                    skuId: t,
                                                    analyticsLocations: o,
                                                    analyticsSource: d.A.USER_PROFILE_OVERFLOW_MENU,
                                                }));
                                        }
                                      : void 0,
                              },
                              t,
                          );
                      }),
                  });
        })(i, m, y),
        ex = [
            [
                g,
                (0, ed.A)({ user: i, location: "UserProfileOverflowMenuButton" }),
                eI,
                eE,
                (function (e) {
                    let { user: t } = e,
                        l = (function (e) {
                            let { user: t, exposureLocation: n } = e,
                                l = H.useConfig({ location: n }),
                                i = (0, Y.m)(),
                                r = (0, E.bG)([q.A], () => q.A.getReferralsRemaining()),
                                o = (0, E.bG)([_.default], () => _.default.getId() === t.id),
                                a = (0, E.bG)([Q.A], () => Q.A.isBlockedOrIgnored(t.id)),
                                s = (0, E.bG)([B.A], () => {
                                    let e = B.A.getUserAffinity(t.id);
                                    return null != e && null != e.communicationRank && e.communicationRank <= 20;
                                });
                            return !!l && !o && !0 !== t.bot && !a && !!i && null != r && !(r <= 0) && !!s && !0;
                        })({ user: t, exposureLocation: "user_profile_overflow_menu" }),
                        { analyticsLocations: i } = (0, f.Ay)(d.A.USER_PROFILE_OVERFLOW_MENU),
                        a = o.useCallback(() => {
                            (N.default.track(h.HAw.REFERRAL_PROGRAM_SHARE_MODAL_CTA_CLICKED, { location_stack: i }),
                                (0, W.openModalLazy)(async () => {
                                    let { default: e } = await Promise.all([
                                        n.e("962811"),
                                        n.e("492599"),
                                        n.e("868214"),
                                        n.e("661814"),
                                        n.e("733314"),
                                        n.e("313699"),
                                    ]).then(n.bind(n, 536110));
                                    return (n) =>
                                        (0, r.jsx)(e, {
                                            ...n,
                                            recipient: t,
                                            sourceAnalyticsLocation: d.A.USER_PROFILE_OVERFLOW_MENU,
                                        });
                                }));
                        }, [i, t]);
                    return l
                        ? (0, r.jsx)(c.Dr, {
                              id: "referral-profile-share-nitro",
                              label: U.intl.string(U.t.JSSBzo),
                              iconLeft: K.t,
                              leadingAccessory: { type: "icon", icon: K.t, size: "sm" },
                              action: a,
                          })
                        : null;
                })({ user: i }),
            ],
            [ep, eR, eA, em],
            [eg],
        ];
    return ex.every((e) => e.every((e) => null == e))
        ? null
        : (0, r.jsx)(f.f5, {
              value: D,
              children: (0, r.jsx)(s.Y, {
                  targetElementRef: M,
                  shouldShow: T,
                  onRequestOpen: S,
                  onRequestClose: k,
                  renderPopout: (e) => {
                      let { closePopout: t } = e;
                      return (0, r.jsx)(u.W, {
                          "data-menu-migrated-auto": !0,
                          navId: "user-profile-overflow-menu",
                          onSelect: void 0,
                          onClose: t,
                          "aria-label": U.intl.string(U.t.AXIHpV),
                          children: ex.map((e, t) => (0, r.jsx)(c.rX, { children: e.map((e) => e) }, t)),
                      });
                  },
                  children: (e) => L({ ...e, ...X }),
              }),
          });
}
function ep(e) {
    let t = o.useRef(null);
    return (0, r.jsx)(eR, { ...e, popoutTargetRef: t, children: (e) => (0, r.jsx)(eE.q3, { buttonRef: t, ...e }) });
}
function eA(e) {
    let t = o.useRef(null);
    return (0, r.jsx)(eR, { ...e, popoutTargetRef: t, children: (e) => (0, r.jsx)(eE.br, { buttonRef: t, ...e }) });
}
