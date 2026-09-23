n.d(t, { Zt: () => eh, yo: () => ex });
var i,
    l,
    r,
    s = n(477900),
    o = n(582128),
    a = n(365199),
    u = n(922016),
    c = n(980707),
    d = n(477782),
    E = n(793574),
    f = n(688810);
let R = (0, n(945810).mj)({
    name: "2026-07-shop-this-look",
    kind: "user",
    defaultConfig: { shopThisLookEnabled: !1 },
    variations: { 0: { shopThisLookEnabled: !1 }, 1: { shopThisLookEnabled: !0 } },
});
function p(e) {
    return R.useConfig({ location: e }).shopThisLookEnabled;
}
var I = n(17928),
    _ = n(540737),
    A = n(999291),
    g = n(287809),
    m = n(259464),
    O = n(449582);
function h(e, t) {
    let n = (0, I.bG)([g.default], () => g.default.getUser(e), [e]),
        i = (0, A.Ay)(e, t),
        l = (0, m.Z)(n, t),
        r = (0, O.r)({ user: n, guildId: t }),
        s = l?.skuId,
        a = r?.skuId,
        u = i?.profileEffect?.skuId,
        c = i?.profileFrame?.skuId;
    return o.useMemo(() => [s, a, u, c].filter((e) => null != e), [s, a, u, c]);
}
var x = n(575593),
    b = n(174459),
    N = n(652215),
    v =
        (((i = {}).MENU_VIEWED = "menu_viewed"),
        (i.COACHMARK_VIEWED = "coachmark_viewed"),
        (i.COACHMARK_CTA_CLICKED = "coachmark_cta_clicked"),
        (i.COACHMARK_DISMISSED = "coachmark_dismissed"),
        (i.RED_DOT_VIEWED = "red_dot_viewed"),
        (i.RED_DOT_DISMISSED = "red_dot_dismissed"),
        i),
    T = (((l = {}).ROW_VIEWED = "row_viewed"), (l.ROW_CLICKED = "row_clicked"), l);
function C(e, t) {
    b.default.track(N.HAw.SHOP_THIS_LOOK_MENU_ACTION, { action: e, source: t ?? void 0 });
}
function S(e) {
    let { action: t, skuId: n, productType: i, isDisabled: l, source: r } = e;
    b.default.track(N.HAw.SHOP_THIS_LOOK_ROW_ACTION, {
        action: t,
        sku_id: n,
        product_type: (function (e) {
            switch (e) {
                case x.R.PROFILE_FRAME:
                    return "profile_frame";
                case x.R.PROFILE_EFFECT:
                    return "profile_effect";
                case x.R.AVATAR_DECORATION:
                    return "avatar_decoration";
                case x.R.NAMEPLATE:
                    return "nameplate";
                default:
                    return;
            }
        })(i),
        is_disabled: l,
        source: r ?? void 0,
    });
}
var M = n(554146),
    j = n(131607);
function P(e, t, n) {
    let i = h(e, t).length > 0,
        [l, r] = (0, j.kn)(n && i ? [M.M.SHOP_THIS_LOOK_WEB_MARKETING] : [], void 0, !0);
    return { isVisible: null != l, markAsDismissed: r };
}
var D = n(43105),
    k = n(49999),
    U = n(996988),
    L = n(375708),
    y = n(227143);
function G(e) {
    let { user: t, guildId: n, shouldShow: i, isMenuOpen: l, targetElementRef: r, onClick: a } = e,
        u = p("UserProfileMarketing"),
        { isVisible: c, markAsDismissed: d } = P(t.id, n, i && u);
    return (o.useEffect(() => {
        if (c)
            return () => {
                (C(v.COACHMARK_DISMISSED, U.d.POPOUT), d(k.i.AUTO_DISMISS));
            };
    }, [c, d]),
    o.useEffect(() => {
        i && c && C(v.COACHMARK_VIEWED, U.d.POPOUT);
    }, [i, c]),
    o.useEffect(() => {
        i && c && l && d(k.i.TAKE_ACTION);
    }, [i, c, l, d]),
    c)
        ? (0, s.jsx)(D.A, {
              badge: "beta",
              graphic: { type: "image", src: y.A },
              title: L.intl.string(L.t.TrOccu),
              body: L.intl.string(L.t["Eh5+1F"]),
              position: "right",
              alignmentStrategy: "edge",
              align: "top",
              caretConfig: { align: "start" },
              targetElementRef: r,
              onRequestClose: () => d(k.i.USER_DISMISS),
              actions: [
                  {
                      text: L.intl.string(L.t["bqZVd/"]),
                      variant: "primary",
                      onClick: () => {
                          (C(v.COACHMARK_CTA_CLICKED, U.d.POPOUT), d(k.i.TAKE_ACTION), a());
                      },
                  },
              ],
          })
        : null;
}
var F = n(821925),
    V = n(280450),
    w = n(722258),
    K =
        (((r = {})[(r.SHOP = 1)] = "SHOP"),
        (r[(r.QUEST = 2)] = "QUEST"),
        (r[(r.PREMIUM_PROMOTION = 3)] = "PREMIUM_PROMOTION"),
        (r[(r.REWARD = 4)] = "REWARD"),
        (r[(r.INTERNAL = 5)] = "INTERNAL"),
        r),
    W = n(38405),
    H = n(503698),
    q = n.n(H),
    B = n(834730),
    Q = n(682301),
    Y = n(623373),
    X = n(536572),
    $ = n(14702),
    z = n(728500);
function Z() {
    return (0, s.jsxs)("div", {
        className: z.nM,
        "aria-hidden": !0,
        children: [
            (0, s.jsx)("div", { className: z.VH, children: (0, s.jsx)("div", { className: z.Qc }) }),
            (0, s.jsxs)("div", {
                className: q()(z.Qq, z.Um),
                children: [(0, s.jsx)("div", { className: z.Iz }), (0, s.jsx)("div", { className: z.wS })],
            }),
        ],
    });
}
function J(e) {
    let { skuId: t, disabled: n = !1, source: i } = e,
        { product: l, state: r } = (0, Q.IK)(t, { needsCategory: !1, shouldFetchProduct: !1 }),
        a = (0, I.bG)(
            [F.A],
            () =>
                F.A.getProductsForSku(t)
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
                S({ action: T.ROW_VIEWED, skuId: t, productType: (0, Y.YW)(l) ?? void 0, isDisabled: n, source: i }));
        }, [l, t, n, i]),
        "loading" === r)
    )
        return (0, s.jsx)(Z, {});
    if (null == l) return null;
    let c = (0, Y.YW)(l),
        d =
            null != c
                ? (function (e) {
                      switch (e) {
                          case x.R.AVATAR_DECORATION:
                              return L.intl.string(L.t["7v0T9P"]);
                          case x.R.PROFILE_EFFECT:
                              return L.intl.string(L.t.wR5wOo);
                          case x.R.NAMEPLATE:
                              return L.intl.string(L.t.x5CoXR);
                          case x.R.PROFILE_FRAME:
                              return L.intl.string(L.t.GWrZOd);
                          default:
                              return;
                      }
                  })(c)
                : void 0;
    return (0, s.jsxs)("div", {
        className: q()(z.nM, { [z.r9]: n }),
        children: [
            (0, s.jsx)("div", { className: z.VH, children: (0, s.jsx)($.O, { product: l, sku: a }) }),
            (0, s.jsxs)("div", {
                className: z.Qq,
                children: [
                    (0, s.jsx)(B.E, { variant: "text-sm/medium", color: "text-default", children: (0, X.VG)(l) }),
                    null != d && (0, s.jsx)(B.E, { variant: "text-xs/normal", color: "text-subtle", children: d }),
                ],
            }),
        ],
    });
}
function ee(e, t) {
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
var et = n(239211),
    en = n(284009),
    ei = n.n(en),
    el = n(50268),
    er = n(486503),
    es = n(342053),
    eo = n(640794),
    ea = n(885386),
    eu = n(957565),
    ec = n(518477),
    ed = n(399476),
    eE = n(889460),
    ef = n(865116),
    eR = n(928658);
let ep = (0, n(600975).C)({
    kind: "user",
    id: "2023-09_iar_user_reporting",
    label: "Safety Experience IAR User Reporting",
    defaultConfig: { enabled: !1 },
    treatments: [{ id: 1, label: "Enabled", config: { enabled: !0 } }],
});
var eI = n(183555),
    e_ = n(254384),
    eA = n(939496),
    eg = n(993401),
    em = n(719687);
function eO(e) {
    var t;
    let n,
        {
            user: i,
            guildId: l,
            viewProfileItem: r,
            appContext: R,
            popoutTargetRef: m,
            shouldShow: O,
            onRequestOpen: x,
            onRequestClose: b,
            children: M,
        } = e,
        { themeType: j } = (0, eA.E)(),
        { trackUserProfileAction: P } = (0, eI.NJ)(),
        { analyticsLocations: D, newestAnalyticsLocation: k } = (0, f.Ay)(E.A.USER_PROFILE_OVERFLOW_MENU),
        U = p("UserProfileOverflowMenuButton");
    ((t = i.id),
        (n = h(t, l)),
        o.useEffect(() => {
            U && 0 !== n.length && (0, _.tu)({ skuIds: n });
        }, [U, n]));
    let y = {
            action: ec.pt.PRESS_OPTIONS,
            icon: a.MoreHorizontalIcon,
            tooltipText: L.intl.string(L.t["UKOtz+"]),
            "aria-label": L.intl.string(L.t["UKOtz+"]),
        },
        G = (0, eE.A)({
            user: i,
            guildId: l,
            onAction: () => P({ action: "PRESS_INVITE_TO_SERVER", analyticsLocations: D }),
        }),
        H = (0, et.A)({
            user: i,
            guildId: l,
            location: k,
            appContext: R,
            onBlock: () => P({ action: "BLOCK", analyticsLocations: D }),
            onIgnore: () => P({ action: "IGNORE", analyticsLocations: D }),
            onUnblock: () => P({ action: "UNBLOCK", analyticsLocations: D }),
        }),
        q = (0, ed.A)({
            user: i,
            guildId: l,
            location: k,
            appContext: R,
            onBlock: () => P({ action: "BLOCK", analyticsLocations: D }),
            onIgnore: () => P({ action: "IGNORE", analyticsLocations: D }),
            onUnignore: () => P({ action: "UNIGNORE", analyticsLocations: D }),
        }),
        B = (function (e) {
            let { user: t, guildId: n, color: i, onAction: l, location: r = E.A.CONTEXT_MENU, appContext: o } = e,
                a = ep.useExperiment({ location: r }, { autoTrackExposure: !0 }).enabled,
                u = (0, I.bG)([V.default], () => V.default.getId() === t.id);
            return !a || u || t.isNonUserBot()
                ? null
                : (0, s.jsx)(d.Dr, {
                      id: "report-user",
                      color: i,
                      label: L.intl.string(L.t.A1MM3D),
                      action: () => (0, eR.NW)(t, n === N.ME ? void 0 : n, l, o),
                  });
        })({
            user: i,
            guildId: l,
            location: k,
            appContext: R,
            color: "danger",
            onAction: () => P({ action: "REPORT", analyticsLocations: D }),
        }),
        Q = (function (e) {
            let { user: t, guildId: n, color: i, onAction: l, appContext: r } = e,
                o = (0, I.bG)([ef.Ay], () => ef.Ay.get("iar_testing")),
                a = (0, I.bG)([g.default], () => g.default.getCurrentUser());
            return null != a && (t.id === a.id || t.isNonUserBot() || !a.isStaff() || !o)
                ? null
                : (0, s.jsx)(d.Dr, {
                      id: "staff-test-report-user",
                      color: i,
                      label: "[STAFF] Test Profile Report",
                      action: () => (0, eR.RR)(t, n === N.ME ? void 0 : n, l, r),
                  });
        })({
            user: i,
            guildId: l,
            location: k,
            appContext: R,
            color: "danger",
            onAction: () => P({ action: "REPORT", analyticsLocations: D }),
        }),
        Y = (function (e) {
            let { user: t, guildId: n, onSuccess: i } = e,
                l = (0, A.Ay)(t.id, n ?? void 0),
                r = ea.Q_.useSetting(),
                { tidaWebformEnabled: a } = er.A.useExperiment(
                    { location: "useCopyUserInfoItem" },
                    { autoTrackExposure: !1 },
                ),
                u = (0, es.g)("useCopyUserInfoItem"),
                c = (0, el.A)({
                    id: t.id,
                    label: L.intl.string(L.t["/AXYnE"]),
                    onSuccess: () => i?.(ec.pt.COPY_USER_ID),
                }),
                E = o.useMemo(() => (null == l ? null : l.getBannerURL({ canAnimate: !0, size: N.XAf })), [l]),
                f = o.useCallback(() => {
                    ((0, eu.C)(t.id), i?.(ec.pt.COPY_USER_ID));
                }, [t.id, i]),
                R = o.useCallback(() => {
                    ((0, eu.C)((0, eo.A)(t.id)), i?.(ec.pt.COPY_PROFILE_LINK));
                }, [t.id, i]),
                p = o.useCallback(() => {
                    let e = t.getAvatarURL(n, N.XAf, !0);
                    (ei()(null != e, "cannot copy null avatar URL"), (0, eu.C)(e), i?.(ec.pt.COPY_AVATAR_IMAGE_LINK));
                }, [t, n, i]),
                I = o.useCallback(() => {
                    (ei()(null != E, "cannot copy null banner URL"), (0, eu.C)(E), i?.(ec.pt.COPY_BANNER_IMAGE_LINK));
                }, [E, i]);
            return !__OVERLAY__ && r && eu.p5 && null != t.id
                ? a
                    ? (0, s.jsxs)(d.Dr, {
                          id: "copy-user-info",
                          label: L.intl.string(L.t.QvQeLv),
                          children: [
                              (0, s.jsx)(d.Dr, { id: "copy-user-id", label: L.intl.string(L.t["/AXYnE"]), action: f }),
                              u &&
                                  (0, s.jsx)(d.Dr, {
                                      id: "copy-user-profile-link",
                                      label: L.intl.string(L.t["E+rSVy"]),
                                      action: R,
                                  }),
                              (null != t.avatar || t.hasAvatarForGuild(n)) &&
                                  (0, s.jsx)(d.Dr, {
                                      id: "copy-user-avatar-link",
                                      label: L.intl.string(L.t.gERDvM),
                                      action: p,
                                  }),
                              null != E &&
                                  (0, s.jsx)(d.Dr, {
                                      id: "copy-user-banner-link",
                                      label: L.intl.string(L.t.hsNv0R),
                                      action: I,
                                  }),
                          ],
                      })
                    : c
                : null;
        })({ user: i, guildId: l, onSuccess: (e) => P({ action: e, analyticsLocations: D }) }),
        X = (function (e, t, n) {
            let i = p("UserProfileOverflowMenu"),
                l = (0, I.bG)([V.default], () => V.default.getId() === e.id),
                r = h(e.id, t),
                { analyticsLocations: o } = (0, f.Ay)(E.A.USER_PROFILE_OVERFLOW_MENU),
                a = (0, I.bG)(
                    [F.A],
                    () =>
                        r.map((e) => {
                            let t = F.A.getProductsForSku(e)
                                ?.flatMap((e) => e.skus)
                                .find((t) => t.id === e);
                            return {
                                skuId: e,
                                isShoppableItem:
                                    null != t &&
                                    ("function" != typeof t.isAvailable
                                        ? (W.A.captureMessage("isShoppableCollectibleSku: sku missing isAvailable()", {
                                              extra: { skuId: t.id, skuType: t.type },
                                          }),
                                          !1)
                                        : t.isAvailable() && t.tenantMetadata?.collectibles?.sourceType === K.SHOP),
                                productType: t?.tenantMetadata?.collectibles?.type,
                            };
                        }),
                    [r],
                    ee,
                );
            return !i || l || 0 === r.length
                ? null
                : (0, s.jsx)(d.Dr, {
                      id: "shop-this-look",
                      label: L.intl.string(L.t.xNdRDO),
                      badge: "beta",
                      children: a.map((e) => {
                          let { skuId: t, isShoppableItem: i, productType: l } = e;
                          return (0, s.jsx)(
                              d.Dr,
                              {
                                  id: `shop-this-look-${t}`,
                                  navigable: i,
                                  disabled: !i,
                                  keepItemStyles: i,
                                  render: (e) => {
                                      let { disabled: i } = e;
                                      return (0, s.jsx)(J, { skuId: t, disabled: i, source: n });
                                  },
                                  action: i
                                      ? () => {
                                            (S({
                                                action: T.ROW_CLICKED,
                                                skuId: t,
                                                productType: l,
                                                isDisabled: !1,
                                                source: n,
                                            }),
                                                (0, w.B)({
                                                    skuId: t,
                                                    analyticsLocations: o,
                                                    analyticsSource: E.A.USER_PROFILE_OVERFLOW_MENU,
                                                }));
                                        }
                                      : void 0,
                              },
                              t,
                          );
                      }),
                  });
        })(i, l, j),
        $ = [[r, (0, e_.A)({ user: i, location: "UserProfileOverflowMenuButton" }), X, G], [q, H, B, Q], [Y]];
    return $.every((e) => e.every((e) => null == e))
        ? null
        : (0, s.jsx)(f.f5, {
              value: D,
              children: (0, s.jsx)(u.Y, {
                  targetElementRef: m,
                  shouldShow: O,
                  onRequestOpen: () => {
                      (null != X && C(v.MENU_VIEWED, j), x?.());
                  },
                  onRequestClose: b,
                  renderPopout: (e) => {
                      let { closePopout: t } = e;
                      return (0, s.jsx)(c.W, {
                          "data-menu-migrated-auto": !0,
                          navId: "user-profile-overflow-menu",
                          onSelect: void 0,
                          onClose: t,
                          "aria-label": L.intl.string(L.t.AXIHpV),
                          children: $.map((e, t) => (0, s.jsx)(d.rX, { children: e.map((e) => e) }, t)),
                      });
                  },
                  children: (e) => M({ ...e, ...y }),
              }),
          });
}
function eh(e) {
    let t = o.useRef(null);
    return (0, s.jsx)(eO, { ...e, popoutTargetRef: t, children: (e) => (0, s.jsx)(eg.q3, { buttonRef: t, ...e }) });
}
function ex(e) {
    let t = o.useRef(null),
        { themeType: n } = (0, eA.E)(),
        i = n === U.d.POPOUT,
        l = n === U.d.SIDEBAR,
        r = p("UserProfileMarketing"),
        { isVisible: a, markAsDismissed: u } = P(e.user.id, e.guildId, l && r);
    o.useEffect(() => {
        a && C(v.RED_DOT_VIEWED, n);
    }, [a, n]);
    let [c, d] = o.useState(!1),
        E = o.useCallback(() => {
            (d(!0), a && (C(v.RED_DOT_DISMISSED, n), u(k.i.TAKE_ACTION)));
        }, [a, u, n]);
    return (0, s.jsxs)("div", {
        className: em.g2,
        children: [
            (0, s.jsx)("div", {
                className: a ? em.t8 : void 0,
                children: (0, s.jsx)(eO, {
                    ...e,
                    popoutTargetRef: t,
                    shouldShow: i ? c : void 0,
                    onRequestOpen: E,
                    onRequestClose: () => d(!1),
                    children: (e) => (0, s.jsx)(eg.br, { buttonRef: t, ...e }),
                }),
            }),
            a && (0, s.jsx)("div", { className: em.Vx, "aria-hidden": !0 }),
            (0, s.jsx)(G, {
                user: e.user,
                guildId: e.guildId,
                shouldShow: i,
                isMenuOpen: c,
                targetElementRef: t,
                onClick: () => {
                    (C(v.MENU_VIEWED, n), d(!0));
                },
            }),
        ],
    });
}
