n.d(t, { Zt: () => eC, yo: () => eS });
var i,
    l,
    r,
    a = n(477900),
    o = n(582128),
    s = n(365199),
    u = n(922016),
    c = n(980707),
    d = n(477782),
    E = n(793574),
    f = n(688810),
    R = n(17928),
    A = n(540737),
    _ = n(999291),
    p = n(287809),
    I = n(259464),
    g = n(449582);
function m(e, t) {
    let n = (0, R.bG)([p.default], () => p.default.getUser(e), [e]),
        i = (0, _.Ay)(e, t),
        l = (0, I.Z)(n, t),
        r = (0, g.r)({ user: n, guildId: t }),
        a = l?.skuId,
        s = r?.skuId,
        u = i?.profileEffect?.skuId,
        c = i?.profileFrame?.skuId;
    return o.useMemo(() => [a, s, u, c].filter((e) => null != e), [a, s, u, c]);
}
var O = n(575593),
    x = n(174459),
    b = n(652215),
    N =
        (((i = {}).MENU_VIEWED = "menu_viewed"),
        (i.COACHMARK_VIEWED = "coachmark_viewed"),
        (i.COACHMARK_CTA_CLICKED = "coachmark_cta_clicked"),
        (i.COACHMARK_DISMISSED = "coachmark_dismissed"),
        (i.RED_DOT_VIEWED = "red_dot_viewed"),
        (i.RED_DOT_DISMISSED = "red_dot_dismissed"),
        i),
    h = (((l = {}).ROW_VIEWED = "row_viewed"), (l.ROW_CLICKED = "row_clicked"), l);
function v(e, t) {
    x.default.track(b.HAw.SHOP_THIS_LOOK_MENU_ACTION, { action: e, source: t ?? void 0 });
}
function C(e) {
    let { action: t, skuId: n, productType: i, isDisabled: l, source: r } = e;
    x.default.track(b.HAw.SHOP_THIS_LOOK_ROW_ACTION, {
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
        })(i),
        is_disabled: l,
        source: r ?? void 0,
    });
}
var S = n(554146),
    T = n(131607);
function M(e, t, n) {
    let i = m(e, t).length > 0,
        [l, r] = (0, T.kn)(n && i ? [S.M.SHOP_THIS_LOOK_WEB_MARKETING] : [], void 0, !0);
    return { isVisible: null != l, markAsDismissed: r };
}
var j = n(43105),
    D = n(49999),
    P = n(996988),
    k = n(375708),
    U = n(227143);
function L(e) {
    let { user: t, guildId: n, shouldShow: i, isMenuOpen: l, targetElementRef: r, onClick: s } = e,
        { isVisible: u, markAsDismissed: c } = M(t.id, n, i);
    return (o.useEffect(() => {
        if (u)
            return () => {
                (v(N.COACHMARK_DISMISSED, P.d.POPOUT), c(D.i.AUTO_DISMISS));
            };
    }, [u, c]),
    o.useEffect(() => {
        i && u && v(N.COACHMARK_VIEWED, P.d.POPOUT);
    }, [i, u]),
    o.useEffect(() => {
        i && u && l && c(D.i.TAKE_ACTION);
    }, [i, u, l, c]),
    u)
        ? (0, a.jsx)(j.A, {
              badge: "beta",
              graphic: { type: "image", src: U.A },
              title: k.intl.string(k.t.TrOccu),
              body: k.intl.string(k.t["Eh5+1F"]),
              position: "right",
              alignmentStrategy: "edge",
              align: "top",
              caretConfig: { align: "start" },
              targetElementRef: r,
              onRequestClose: () => c(D.i.USER_DISMISS),
              actions: [
                  {
                      text: k.intl.string(k.t["bqZVd/"]),
                      variant: "primary",
                      onClick: () => {
                          (v(N.COACHMARK_CTA_CLICKED, P.d.POPOUT), c(D.i.TAKE_ACTION), s());
                      },
                  },
              ],
          })
        : null;
}
var y = n(821925),
    G = n(280450),
    F = n(722258),
    V =
        (((r = {})[(r.SHOP = 1)] = "SHOP"),
        (r[(r.QUEST = 2)] = "QUEST"),
        (r[(r.PREMIUM_PROMOTION = 3)] = "PREMIUM_PROMOTION"),
        (r[(r.REWARD = 4)] = "REWARD"),
        (r[(r.INTERNAL = 5)] = "INTERNAL"),
        r),
    w = n(38405),
    K = n(503698),
    W = n.n(K),
    H = n(834730),
    q = n(682301),
    B = n(623373),
    Q = n(536572),
    Y = n(14702),
    z = n(728500);
function X() {
    return (0, a.jsxs)("div", {
        className: z.nM,
        "aria-hidden": !0,
        children: [
            (0, a.jsx)("div", { className: z.VH, children: (0, a.jsx)("div", { className: z.Qc }) }),
            (0, a.jsxs)("div", {
                className: W()(z.Qq, z.Um),
                children: [(0, a.jsx)("div", { className: z.Iz }), (0, a.jsx)("div", { className: z.wS })],
            }),
        ],
    });
}
function $(e) {
    let { skuId: t, disabled: n = !1, source: i } = e,
        { product: l, state: r } = (0, q.IK)(t, { needsCategory: !1, shouldFetchProduct: !1 }),
        s = (0, R.bG)(
            [y.A],
            () =>
                y.A.getProductsForSku(t)
                    ?.flatMap((e) => e.skus)
                    .find((e) => e.id === t),
            [t],
        ),
        u = o.useRef(!1);
    if (
        (o.useEffect(() => {
            null == l ||
                u.current ||
                ((u.current = !0),
                C({ action: h.ROW_VIEWED, skuId: t, productType: (0, B.YW)(l) ?? void 0, isDisabled: n, source: i }));
        }, [l, t, n, i]),
        "loading" === r)
    )
        return (0, a.jsx)(X, {});
    if (null == l) return null;
    let c = (0, B.YW)(l),
        d =
            null != c
                ? (function (e) {
                      switch (e) {
                          case O.R.AVATAR_DECORATION:
                              return k.intl.string(k.t["7v0T9P"]);
                          case O.R.PROFILE_EFFECT:
                              return k.intl.string(k.t.wR5wOo);
                          case O.R.NAMEPLATE:
                              return k.intl.string(k.t.x5CoXR);
                          case O.R.PROFILE_FRAME:
                              return k.intl.string(k.t.GWrZOd);
                          default:
                              return;
                      }
                  })(c)
                : void 0;
    return (0, a.jsxs)("div", {
        className: W()(z.nM, { [z.r9]: n }),
        children: [
            (0, a.jsx)("div", { className: z.VH, children: (0, a.jsx)(Y.O, { product: l, sku: s }) }),
            (0, a.jsxs)("div", {
                className: z.Qq,
                children: [
                    (0, a.jsx)(H.E, { variant: "text-sm/medium", color: "text-default", children: (0, Q.VG)(l) }),
                    null != d && (0, a.jsx)(H.E, { variant: "text-xs/normal", color: "text-subtle", children: d }),
                ],
            }),
        ],
    });
}
function J(e, t) {
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
var Z = n(192308),
    ee = n(403581),
    et = n(427358),
    en = n(994500),
    ei = n(851746);
let el = (0, n(945810).mj)({
    name: "2026-09-referral-profile-contextual-menu-upsell",
    kind: "user",
    defaultConfig: !1,
    variations: { 0: !1, 1: !0 },
});
var er = n(103411),
    ea = n(239211),
    eo = n(284009),
    es = n.n(eo),
    eu = n(50268),
    ec = n(486503),
    ed = n(342053),
    eE = n(640794),
    ef = n(885386),
    eR = n(957565),
    eA = n(518477),
    e_ = n(399476),
    ep = n(889460),
    eI = n(865116),
    eg = n(928658);
let em = (0, n(600975).C)({
    kind: "user",
    id: "2023-09_iar_user_reporting",
    label: "Safety Experience IAR User Reporting",
    defaultConfig: { enabled: !1 },
    treatments: [{ id: 1, label: "Enabled", config: { enabled: !0 } }],
});
var eO = n(183555),
    ex = n(254384),
    eb = n(939496),
    eN = n(993401),
    eh = n(719687);
function ev(e) {
    var t;
    let i,
        {
            user: l,
            guildId: r,
            viewProfileItem: I,
            appContext: g,
            popoutTargetRef: O,
            shouldShow: S,
            onRequestOpen: T,
            onRequestClose: M,
            children: j,
        } = e,
        { themeType: D } = (0, eb.E)(),
        { trackUserProfileAction: P } = (0, eO.NJ)(),
        { analyticsLocations: U, newestAnalyticsLocation: L } = (0, f.Ay)(E.A.USER_PROFILE_OVERFLOW_MENU);
    ((t = l.id),
        (i = m(t, r)),
        o.useEffect(() => {
            0 !== i.length && (0, A.tu)({ skuIds: i });
        }, [!0, i]));
    let K = {
            action: eA.pt.PRESS_OPTIONS,
            icon: s.MoreHorizontalIcon,
            tooltipText: k.intl.string(k.t["UKOtz+"]),
            "aria-label": k.intl.string(k.t["UKOtz+"]),
        },
        W = (0, ep.A)({
            user: l,
            guildId: r,
            onAction: () => P({ action: "PRESS_INVITE_TO_SERVER", analyticsLocations: U }),
        }),
        H = (0, ea.A)({
            user: l,
            guildId: r,
            location: L,
            appContext: g,
            onBlock: () => P({ action: "BLOCK", analyticsLocations: U }),
            onIgnore: () => P({ action: "IGNORE", analyticsLocations: U }),
            onUnblock: () => P({ action: "UNBLOCK", analyticsLocations: U }),
        }),
        q = (0, e_.A)({
            user: l,
            guildId: r,
            location: L,
            appContext: g,
            onBlock: () => P({ action: "BLOCK", analyticsLocations: U }),
            onIgnore: () => P({ action: "IGNORE", analyticsLocations: U }),
            onUnignore: () => P({ action: "UNIGNORE", analyticsLocations: U }),
        }),
        B = (function (e) {
            let { user: t, guildId: n, color: i, onAction: l, location: r = E.A.CONTEXT_MENU, appContext: o } = e,
                s = em.useExperiment({ location: r }, { autoTrackExposure: !0 }).enabled,
                u = (0, R.bG)([G.default], () => G.default.getId() === t.id);
            return !s || u || t.isNonUserBot()
                ? null
                : (0, a.jsx)(d.Dr, {
                      id: "report-user",
                      color: i,
                      label: k.intl.string(k.t.A1MM3D),
                      action: () => (0, eg.NW)(t, n === b.ME ? void 0 : n, l, o),
                  });
        })({
            user: l,
            guildId: r,
            location: L,
            appContext: g,
            color: "danger",
            onAction: () => P({ action: "REPORT", analyticsLocations: U }),
        }),
        Q = (function (e) {
            let { user: t, guildId: n, color: i, onAction: l, appContext: r } = e,
                o = (0, R.bG)([eI.Ay], () => eI.Ay.get("iar_testing")),
                s = (0, R.bG)([p.default], () => p.default.getCurrentUser());
            return null != s && (t.id === s.id || t.isNonUserBot() || !s.isStaff() || !o)
                ? null
                : (0, a.jsx)(d.Dr, {
                      id: "staff-test-report-user",
                      color: i,
                      label: "[STAFF] Test Profile Report",
                      action: () => (0, eg.RR)(t, n === b.ME ? void 0 : n, l, r),
                  });
        })({
            user: l,
            guildId: r,
            location: L,
            appContext: g,
            color: "danger",
            onAction: () => P({ action: "REPORT", analyticsLocations: U }),
        }),
        Y = (function (e) {
            let { user: t, guildId: n, onSuccess: i } = e,
                l = (0, _.Ay)(t.id, n ?? void 0),
                r = ef.Q_.useSetting(),
                { tidaWebformEnabled: s } = ec.A.useExperiment(
                    { location: "useCopyUserInfoItem" },
                    { autoTrackExposure: !1 },
                ),
                u = (0, ed.g)("useCopyUserInfoItem"),
                c = (0, eu.A)({
                    id: t.id,
                    label: k.intl.string(k.t["/AXYnE"]),
                    onSuccess: () => i?.(eA.pt.COPY_USER_ID),
                }),
                E = o.useMemo(() => (null == l ? null : l.getBannerURL({ canAnimate: !0, size: b.XAf })), [l]),
                f = o.useCallback(() => {
                    ((0, eR.C)(t.id), i?.(eA.pt.COPY_USER_ID));
                }, [t.id, i]),
                R = o.useCallback(() => {
                    ((0, eR.C)((0, eE.A)(t.id)), i?.(eA.pt.COPY_PROFILE_LINK));
                }, [t.id, i]),
                A = o.useCallback(() => {
                    let e = t.getAvatarURL(n, b.XAf, !0);
                    (es()(null != e, "cannot copy null avatar URL"), (0, eR.C)(e), i?.(eA.pt.COPY_AVATAR_IMAGE_LINK));
                }, [t, n, i]),
                p = o.useCallback(() => {
                    (es()(null != E, "cannot copy null banner URL"), (0, eR.C)(E), i?.(eA.pt.COPY_BANNER_IMAGE_LINK));
                }, [E, i]);
            return !__OVERLAY__ && r && eR.p5 && null != t.id
                ? s
                    ? (0, a.jsxs)(d.Dr, {
                          id: "copy-user-info",
                          label: k.intl.string(k.t.QvQeLv),
                          children: [
                              (0, a.jsx)(d.Dr, { id: "copy-user-id", label: k.intl.string(k.t["/AXYnE"]), action: f }),
                              u &&
                                  (0, a.jsx)(d.Dr, {
                                      id: "copy-user-profile-link",
                                      label: k.intl.string(k.t["E+rSVy"]),
                                      action: R,
                                  }),
                              (null != t.avatar || t.hasAvatarForGuild(n)) &&
                                  (0, a.jsx)(d.Dr, {
                                      id: "copy-user-avatar-link",
                                      label: k.intl.string(k.t.gERDvM),
                                      action: A,
                                  }),
                              null != E &&
                                  (0, a.jsx)(d.Dr, {
                                      id: "copy-user-banner-link",
                                      label: k.intl.string(k.t.hsNv0R),
                                      action: p,
                                  }),
                          ],
                      })
                    : c
                : null;
        })({ user: l, guildId: r, onSuccess: (e) => P({ action: e, analyticsLocations: U }) }),
        z = (function (e, t, n) {
            let i = (0, R.bG)([G.default], () => G.default.getId() === e.id),
                l = m(e.id, t),
                { analyticsLocations: r } = (0, f.Ay)(E.A.USER_PROFILE_OVERFLOW_MENU),
                o = (0, R.bG)(
                    [y.A],
                    () =>
                        l.map((e) => {
                            let t = y.A.getProductsForSku(e)
                                ?.flatMap((e) => e.skus)
                                .find((t) => t.id === e);
                            return {
                                skuId: e,
                                isShoppableItem:
                                    null != t &&
                                    ("function" != typeof t.isAvailable
                                        ? (w.A.captureMessage("isShoppableCollectibleSku: sku missing isAvailable()", {
                                              extra: { skuId: t.id, skuType: t.type },
                                          }),
                                          !1)
                                        : t.isAvailable() && t.tenantMetadata?.collectibles?.sourceType === V.SHOP),
                                productType: t?.tenantMetadata?.collectibles?.type,
                            };
                        }),
                    [l],
                    J,
                );
            return i || 0 === l.length
                ? null
                : (0, a.jsx)(d.Dr, {
                      id: "shop-this-look",
                      label: k.intl.string(k.t.xNdRDO),
                      badge: "beta",
                      children: o.map((e) => {
                          let { skuId: t, isShoppableItem: i, productType: l } = e;
                          return (0, a.jsx)(
                              d.Dr,
                              {
                                  id: `shop-this-look-${t}`,
                                  navigable: i,
                                  disabled: !i,
                                  keepItemStyles: i,
                                  render: (e) => {
                                      let { disabled: i } = e;
                                      return (0, a.jsx)($, { skuId: t, disabled: i, source: n });
                                  },
                                  action: i
                                      ? () => {
                                            (C({
                                                action: h.ROW_CLICKED,
                                                skuId: t,
                                                productType: l,
                                                isDisabled: !1,
                                                source: n,
                                            }),
                                                (0, F.B)({
                                                    skuId: t,
                                                    analyticsLocations: r,
                                                    analyticsSource: E.A.USER_PROFILE_OVERFLOW_MENU,
                                                }));
                                        }
                                      : void 0,
                              },
                              t,
                          );
                      }),
                  });
        })(l, r, D),
        X = [
            [
                I,
                (0, ex.A)({ user: l, location: "UserProfileOverflowMenuButton" }),
                z,
                W,
                (function (e) {
                    let { user: t } = e,
                        i = (function (e) {
                            let { user: t, exposureLocation: n } = e,
                                i = el.useConfig({ location: n }),
                                l = (0, er.m)(),
                                r = (0, R.bG)([ei.A], () => ei.A.getReferralsRemaining()),
                                a = (0, R.bG)([G.default], () => G.default.getId() === t.id),
                                o = (0, R.bG)([en.A], () => en.A.isBlockedOrIgnored(t.id)),
                                s = (0, R.bG)([et.A], () => {
                                    let e = et.A.getUserAffinity(t.id);
                                    return null != e && null != e.communicationRank && e.communicationRank <= 20;
                                });
                            return !!i && !a && !0 !== t.bot && !o && !!l && null != r && !(r <= 0) && !!s && !0;
                        })({ user: t, exposureLocation: "user_profile_overflow_menu" }),
                        { analyticsLocations: l } = (0, f.Ay)(E.A.USER_PROFILE_OVERFLOW_MENU),
                        r = o.useCallback(() => {
                            (x.default.track(b.HAw.REFERRAL_PROGRAM_SHARE_MODAL_CTA_CLICKED, { location_stack: l }),
                                (0, Z.openModalLazy)(async () => {
                                    let { default: e } = await Promise.all([
                                        n.e("962811"),
                                        n.e("492599"),
                                        n.e("868214"),
                                        n.e("661814"),
                                        n.e("733314"),
                                        n.e("313699"),
                                    ]).then(n.bind(n, 536110));
                                    return (n) =>
                                        (0, a.jsx)(e, {
                                            ...n,
                                            recipient: t,
                                            sourceAnalyticsLocation: E.A.USER_PROFILE_OVERFLOW_MENU,
                                        });
                                }));
                        }, [l, t]);
                    return i
                        ? (0, a.jsx)(d.Dr, {
                              id: "referral-profile-share-nitro",
                              label: k.intl.string(k.t.JSSBzo),
                              iconLeft: ee.t,
                              leadingAccessory: { type: "icon", icon: ee.t, size: "sm" },
                              action: r,
                          })
                        : null;
                })({ user: l }),
            ],
            [q, H, B, Q],
            [Y],
        ];
    return X.every((e) => e.every((e) => null == e))
        ? null
        : (0, a.jsx)(f.f5, {
              value: U,
              children: (0, a.jsx)(u.Y, {
                  targetElementRef: O,
                  shouldShow: S,
                  onRequestOpen: () => {
                      (null != z && v(N.MENU_VIEWED, D), T?.());
                  },
                  onRequestClose: M,
                  renderPopout: (e) => {
                      let { closePopout: t } = e;
                      return (0, a.jsx)(c.W, {
                          "data-menu-migrated-auto": !0,
                          navId: "user-profile-overflow-menu",
                          onSelect: void 0,
                          onClose: t,
                          "aria-label": k.intl.string(k.t.AXIHpV),
                          children: X.map((e, t) => (0, a.jsx)(d.rX, { children: e.map((e) => e) }, t)),
                      });
                  },
                  children: (e) => j({ ...e, ...K }),
              }),
          });
}
function eC(e) {
    let t = o.useRef(null);
    return (0, a.jsx)(ev, { ...e, popoutTargetRef: t, children: (e) => (0, a.jsx)(eN.q3, { buttonRef: t, ...e }) });
}
function eS(e) {
    let t = o.useRef(null),
        { themeType: n } = (0, eb.E)(),
        i = n === P.d.POPOUT,
        l = n === P.d.SIDEBAR,
        { isVisible: r, markAsDismissed: s } = M(e.user.id, e.guildId, l);
    o.useEffect(() => {
        r && v(N.RED_DOT_VIEWED, n);
    }, [r, n]);
    let [u, c] = o.useState(!1),
        d = o.useCallback(() => {
            (c(!0), r && (v(N.RED_DOT_DISMISSED, n), s(D.i.TAKE_ACTION)));
        }, [r, s, n]);
    return (0, a.jsxs)("div", {
        className: eh.g2,
        children: [
            (0, a.jsx)("div", {
                className: r ? eh.t8 : void 0,
                children: (0, a.jsx)(ev, {
                    ...e,
                    popoutTargetRef: t,
                    shouldShow: i ? u : void 0,
                    onRequestOpen: d,
                    onRequestClose: () => c(!1),
                    children: (e) => (0, a.jsx)(eN.br, { buttonRef: t, ...e }),
                }),
            }),
            r && (0, a.jsx)("div", { className: eh.Vx, "aria-hidden": !0 }),
            (0, a.jsx)(L, {
                user: e.user,
                guildId: e.guildId,
                shouldShow: i,
                isMenuOpen: u,
                targetElementRef: t,
                onClick: () => {
                    (v(N.MENU_VIEWED, n), c(!0));
                },
            }),
        ],
    });
}
