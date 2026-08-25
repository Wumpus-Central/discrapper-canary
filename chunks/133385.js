n.d(t, { Zt: () => eO, yo: () => em });
var i,
    l,
    r,
    o = n(477900),
    s = n(582128),
    a = n(365199),
    u = n(922016),
    d = n(980707),
    c = n(477782),
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
    g = n(540737),
    A = n(999291),
    _ = n(287809),
    O = n(259464),
    m = n(449582);
function h(e, t) {
    let n = (0, I.bG)([_.default], () => _.default.getUser(e), [e]),
        i = (0, A.Ay)(e, t),
        l = (0, O.Z)(n, t),
        r = (0, m.r)({ user: n, guildId: t }),
        o = l?.skuId,
        a = r?.skuId,
        u = i?.profileEffect?.skuId,
        d = i?.profileFrame?.skuId;
    return s.useMemo(() => [o, a, u, d].filter((e) => null != e), [o, a, u, d]);
}
var b = n(575593),
    x = n(174459),
    N = n(652215),
    T =
        (((i = {}).MENU_VIEWED = "menu_viewed"),
        (i.COACHMARK_VIEWED = "coachmark_viewed"),
        (i.COACHMARK_CTA_CLICKED = "coachmark_cta_clicked"),
        (i.COACHMARK_DISMISSED = "coachmark_dismissed"),
        (i.RED_DOT_VIEWED = "red_dot_viewed"),
        (i.RED_DOT_DISMISSED = "red_dot_dismissed"),
        i),
    v = (((l = {}).ROW_VIEWED = "row_viewed"), (l.ROW_CLICKED = "row_clicked"), l);
function S(e, t) {
    x.default.track(N.HAw.SHOP_THIS_LOOK_MENU_ACTION, { action: e, source: t ?? void 0 });
}
function C(e) {
    let { action: t, skuId: n, productType: i, isDisabled: l, source: r } = e;
    x.default.track(N.HAw.SHOP_THIS_LOOK_ROW_ACTION, {
        action: t,
        sku_id: n,
        product_type: (function (e) {
            switch (e) {
                case b.R.PROFILE_FRAME:
                    return "profile_frame";
                case b.R.PROFILE_EFFECT:
                    return "profile_effect";
                case b.R.AVATAR_DECORATION:
                    return "avatar_decoration";
                case b.R.NAMEPLATE:
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
    D = n(131607);
function j(e, t, n) {
    let i = h(e, t).length > 0,
        [l, r] = (0, D.kn)(n && i ? [M.M.SHOP_THIS_LOOK_WEB_MARKETING] : [], void 0, !0);
    return { isVisible: null != l, markAsDismissed: r };
}
var P = n(43105),
    k = n(49999),
    U = n(996988),
    L = n(375708),
    y = n(227143);
function G(e) {
    let { user: t, guildId: n, shouldShow: i, isMenuOpen: l, targetElementRef: r, onClick: a } = e,
        u = p("UserProfileMarketing"),
        { isVisible: d, markAsDismissed: c } = j(t.id, n, i && u);
    return (s.useEffect(() => {
        if (d)
            return () => {
                S(T.COACHMARK_DISMISSED, U.d.POPOUT), c(k.i.AUTO_DISMISS);
            };
    }, [d, c]),
    s.useEffect(() => {
        i && d && S(T.COACHMARK_VIEWED, U.d.POPOUT);
    }, [i, d]),
    s.useEffect(() => {
        i && d && l && c(k.i.TAKE_ACTION);
    }, [i, d, l, c]),
    d)
        ? (0, o.jsx)(P.A, {
              badge: "beta",
              graphic: { type: "image", src: y.A },
              title: L.intl.string(L.t.TrOccu),
              body: L.intl.string(L.t["Eh5+1F"]),
              position: "right",
              alignmentStrategy: "edge",
              align: "top",
              caretConfig: { align: "start" },
              targetElementRef: r,
              onRequestClose: () => c(k.i.USER_DISMISS),
              actions: [
                  {
                      text: L.intl.string(L.t["bqZVd/"]),
                      variant: "primary",
                      onClick: () => {
                          S(T.COACHMARK_CTA_CLICKED, U.d.POPOUT), c(k.i.TAKE_ACTION), a();
                      },
                  },
              ],
          })
        : null;
}
var F = n(821925),
    w = n(280450),
    V = n(722258),
    W =
        (((r = {})[(r.SHOP = 1)] = "SHOP"),
        (r[(r.QUEST = 2)] = "QUEST"),
        (r[(r.PREMIUM_PROMOTION = 3)] = "PREMIUM_PROMOTION"),
        (r[(r.REWARD = 4)] = "REWARD"),
        (r[(r.INTERNAL = 5)] = "INTERNAL"),
        r),
    K = n(38405),
    H = n(503698),
    q = n.n(H),
    B = n(834730),
    Q = n(650959),
    X = n(623373),
    $ = n(536572),
    Y = n(14702),
    z = n(728500);
function J() {
    return (0, o.jsxs)("div", {
        className: z.nM,
        "aria-hidden": !0,
        children: [
            (0, o.jsx)("div", { className: z.VH, children: (0, o.jsx)("div", { className: z.Qc }) }),
            (0, o.jsxs)("div", {
                className: q()(z.Qq, z.Um),
                children: [(0, o.jsx)("div", { className: z.Iz }), (0, o.jsx)("div", { className: z.wS })],
            }),
        ],
    });
}
function Z(e) {
    let { skuId: t, disabled: n = !1, source: i } = e,
        { product: l, state: r } = (0, Q.I)(t, { needsCategory: !1, shouldFetchProduct: !1 }),
        a = (0, I.bG)(
            [F.A],
            () =>
                F.A.getProductsForSku(t)
                    ?.flatMap((e) => e.skus)
                    .find((e) => e.id === t),
            [t],
        ),
        u = s.useRef(!1);
    if (
        (s.useEffect(() => {
            null == l ||
                u.current ||
                ((u.current = !0),
                C({ action: v.ROW_VIEWED, skuId: t, productType: (0, X.YW)(l) ?? void 0, isDisabled: n, source: i }));
        }, [l, t, n, i]),
        "loading" === r)
    )
        return (0, o.jsx)(J, {});
    if (null == l) return null;
    let d = (0, X.YW)(l),
        c =
            null != d
                ? (function (e) {
                      switch (e) {
                          case b.R.AVATAR_DECORATION:
                              return L.intl.string(L.t["7v0T9P"]);
                          case b.R.PROFILE_EFFECT:
                              return L.intl.string(L.t.wR5wOo);
                          case b.R.NAMEPLATE:
                              return L.intl.string(L.t.x5CoXR);
                          case b.R.PROFILE_FRAME:
                              return L.intl.string(L.t.GWrZOd);
                          default:
                              return;
                      }
                  })(d)
                : void 0;
    return (0, o.jsxs)("div", {
        className: q()(z.nM, { [z.r9]: n }),
        children: [
            (0, o.jsx)("div", { className: z.VH, children: (0, o.jsx)(Y.O, { product: l, sku: a }) }),
            (0, o.jsxs)("div", {
                className: z.Qq,
                children: [
                    (0, o.jsx)(B.E, { variant: "text-sm/medium", color: "text-default", children: (0, $.VG)(l) }),
                    null != c && (0, o.jsx)(B.E, { variant: "text-xs/normal", color: "text-subtle", children: c }),
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
    eo = n(885386),
    es = n(957565),
    ea = n(399476),
    eu = n(889460),
    ed = n(865116),
    ec = n(928658);
let eE = (0, n(600975).C)({
    kind: "user",
    id: "2023-09_iar_user_reporting",
    label: "Safety Experience IAR User Reporting",
    defaultConfig: { enabled: !1 },
    treatments: [{ id: 1, label: "Enabled", config: { enabled: !0 } }],
});
var ef = n(183555),
    eR = n(254384),
    ep = n(939496),
    eI = n(993401),
    eg = n(518477),
    eA = n(719687);
function e_(e) {
    var t;
    let n,
        {
            user: i,
            guildId: l,
            viewProfileItem: r,
            appContext: R,
            popoutTargetRef: O,
            shouldShow: m,
            onRequestOpen: b,
            onRequestClose: x,
            children: M,
        } = e,
        { themeType: D } = (0, ep.E)(),
        { trackUserProfileAction: j } = (0, ef.NJ)(),
        { analyticsLocations: P, newestAnalyticsLocation: k } = (0, f.Ay)(E.A.USER_PROFILE_OVERFLOW_MENU),
        U = p("UserProfileOverflowMenuButton");
    (t = i.id),
        (n = h(t, l)),
        s.useEffect(() => {
            U && 0 !== n.length && (0, g.tu)({ skuIds: n });
        }, [U, n]);
    let y = {
            action: eg.pt.PRESS_OPTIONS,
            icon: a.MoreHorizontalIcon,
            tooltipText: L.intl.string(L.t["UKOtz+"]),
            "aria-label": L.intl.string(L.t["UKOtz+"]),
        },
        G = (0, eu.A)({
            user: i,
            guildId: l,
            onAction: () => j({ action: "PRESS_INVITE_TO_SERVER", analyticsLocations: P }),
        }),
        H = (0, et.A)({
            user: i,
            guildId: l,
            location: k,
            appContext: R,
            onBlock: () => j({ action: "BLOCK", analyticsLocations: P }),
            onIgnore: () => j({ action: "IGNORE", analyticsLocations: P }),
            onUnblock: () => j({ action: "UNBLOCK", analyticsLocations: P }),
        }),
        q = (0, ea.A)({
            user: i,
            guildId: l,
            location: k,
            appContext: R,
            onBlock: () => j({ action: "BLOCK", analyticsLocations: P }),
            onIgnore: () => j({ action: "IGNORE", analyticsLocations: P }),
            onUnignore: () => j({ action: "UNIGNORE", analyticsLocations: P }),
        }),
        B = (function (e) {
            let { user: t, guildId: n, color: i, onAction: l, location: r = E.A.CONTEXT_MENU, appContext: s } = e,
                a = eE.useExperiment({ location: r }, { autoTrackExposure: !0 }).enabled,
                u = (0, I.bG)([w.default], () => w.default.getId() === t.id);
            return !a || u || t.isNonUserBot()
                ? null
                : (0, o.jsx)(c.Dr, {
                      id: "report-user",
                      color: i,
                      label: L.intl.string(L.t.A1MM3D),
                      action: () => (0, ec.NW)(t, n === N.ME ? void 0 : n, l, s),
                  });
        })({
            user: i,
            guildId: l,
            location: k,
            appContext: R,
            color: "danger",
            onAction: () => j({ action: "REPORT", analyticsLocations: P }),
        }),
        Q = (function (e) {
            let { user: t, guildId: n, color: i, onAction: l, appContext: r } = e,
                s = (0, I.bG)([ed.Ay], () => ed.Ay.get("iar_testing")),
                a = (0, I.bG)([_.default], () => _.default.getCurrentUser());
            return null != a && (t.id === a.id || t.isNonUserBot() || !a.isStaff() || !s)
                ? null
                : (0, o.jsx)(c.Dr, {
                      id: "staff-test-report-user",
                      color: i,
                      label: "[STAFF] Test Profile Report",
                      action: () => (0, ec.RR)(t, n === N.ME ? void 0 : n, l, r),
                  });
        })({
            user: i,
            guildId: l,
            location: k,
            appContext: R,
            color: "danger",
            onAction: () => j({ action: "REPORT", analyticsLocations: P }),
        }),
        X = (function (e) {
            let { user: t, guildId: n, onSuccess: i } = e,
                l = (0, A.Ay)(t.id, n ?? void 0),
                r = eo.Q_.useSetting(),
                { tidaWebformEnabled: a } = er.A.useExperiment(
                    { location: "useCopyUserInfoItem" },
                    { autoTrackExposure: !1 },
                ),
                u = (0, el.A)({ id: t.id, label: L.intl.string(L.t["/AXYnE"]), onSuccess: i }),
                d = s.useMemo(() => (null == l ? null : l.getBannerURL({ canAnimate: !0, size: N.XAf })), [l]),
                E = s.useCallback(() => {
                    (0, es.C)(t.id), i?.();
                }, [t.id, i]),
                f = s.useCallback(() => {
                    let e = t.getAvatarURL(n, N.XAf, !0);
                    ei()(null != e, "cannot copy null avatar URL"), (0, es.C)(e), i?.();
                }, [t, n, i]),
                R = s.useCallback(() => {
                    ei()(null != d, "cannot copy null banner URL"), (0, es.C)(d), i?.();
                }, [d, i]);
            return !__OVERLAY__ && r && es.p5 && null != t.id
                ? a
                    ? (0, o.jsxs)(c.Dr, {
                          id: "copy-user-info",
                          label: L.intl.string(L.t.QvQeLv),
                          children: [
                              (0, o.jsx)(c.Dr, { id: "copy-user-id", label: L.intl.string(L.t["/AXYnE"]), action: E }),
                              (null != t.avatar || t.hasAvatarForGuild(n)) &&
                                  (0, o.jsx)(c.Dr, {
                                      id: "copy-user-avatar-link",
                                      label: L.intl.string(L.t.gERDvM),
                                      action: f,
                                  }),
                              null != d &&
                                  (0, o.jsx)(c.Dr, {
                                      id: "copy-user-banner-link",
                                      label: L.intl.string(L.t.hsNv0R),
                                      action: R,
                                  }),
                          ],
                      })
                    : u
                : null;
        })({ user: i, guildId: l, onSuccess: () => j({ action: "COPY_USER_ID", analyticsLocations: P }) }),
        $ = (function (e, t, n) {
            let i = p("UserProfileOverflowMenu"),
                l = (0, I.bG)([w.default], () => w.default.getId() === e.id),
                r = h(e.id, t),
                { analyticsLocations: s } = (0, f.Ay)(E.A.USER_PROFILE_OVERFLOW_MENU),
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
                                        ? (K.A.captureMessage("isShoppableCollectibleSku: sku missing isAvailable()", {
                                              extra: { skuId: t.id, skuType: t.type },
                                          }),
                                          !1)
                                        : t.isAvailable() && t.tenantMetadata?.collectibles?.sourceType === W.SHOP),
                                productType: t?.tenantMetadata?.collectibles?.type,
                            };
                        }),
                    [r],
                    ee,
                );
            return !i || l || 0 === r.length
                ? null
                : (0, o.jsx)(c.Dr, {
                      id: "shop-this-look",
                      label: L.intl.string(L.t.xNdRDO),
                      badge: "beta",
                      children: a.map((e) => {
                          let { skuId: t, isShoppableItem: i, productType: l } = e;
                          return (0, o.jsx)(
                              c.Dr,
                              {
                                  id: `shop-this-look-${t}`,
                                  navigable: i,
                                  disabled: !i,
                                  keepItemStyles: i,
                                  render: (e) => {
                                      let { disabled: i } = e;
                                      return (0, o.jsx)(Z, { skuId: t, disabled: i, source: n });
                                  },
                                  action: i
                                      ? () => {
                                            C({
                                                action: v.ROW_CLICKED,
                                                skuId: t,
                                                productType: l,
                                                isDisabled: !1,
                                                source: n,
                                            }),
                                                (0, V.B)({
                                                    skuId: t,
                                                    analyticsLocations: s,
                                                    analyticsSource: E.A.USER_PROFILE_OVERFLOW_MENU,
                                                });
                                        }
                                      : void 0,
                              },
                              t,
                          );
                      }),
                  });
        })(i, l, D),
        Y = [[r, $, (0, eR.A)({ user: i, location: "UserProfileOverflowMenuButton" }), G], [q, H, B, Q], [X]];
    return Y.every((e) => e.every((e) => null == e))
        ? null
        : (0, o.jsx)(f.f5, {
              value: P,
              children: (0, o.jsx)(u.Y, {
                  targetElementRef: O,
                  shouldShow: m,
                  onRequestOpen: () => {
                      null != $ && S(T.MENU_VIEWED, D), b?.();
                  },
                  onRequestClose: x,
                  renderPopout: (e) => {
                      let { closePopout: t } = e;
                      return (0, o.jsx)(d.W, {
                          "data-menu-migrated-auto": !0,
                          navId: "user-profile-overflow-menu",
                          onSelect: void 0,
                          onClose: t,
                          "aria-label": L.intl.string(L.t.AXIHpV),
                          children: Y.map((e, t) => (0, o.jsx)(c.rX, { children: e.map((e) => e) }, t)),
                      });
                  },
                  children: (e) => M({ ...e, ...y }),
              }),
          });
}
function eO(e) {
    let t = s.useRef(null);
    return (0, o.jsx)(e_, { ...e, popoutTargetRef: t, children: (e) => (0, o.jsx)(eI.q3, { buttonRef: t, ...e }) });
}
function em(e) {
    let t = s.useRef(null),
        { themeType: n } = (0, ep.E)(),
        i = n === U.d.POPOUT,
        l = n === U.d.SIDEBAR,
        r = p("UserProfileMarketing"),
        { isVisible: a, markAsDismissed: u } = j(e.user.id, e.guildId, l && r);
    s.useEffect(() => {
        a && S(T.RED_DOT_VIEWED, n);
    }, [a, n]);
    let [d, c] = s.useState(!1),
        E = s.useCallback(() => {
            c(!0), a && (S(T.RED_DOT_DISMISSED, n), u(k.i.TAKE_ACTION));
        }, [a, u, n]);
    return (0, o.jsxs)("div", {
        className: eA.g2,
        children: [
            (0, o.jsx)("div", {
                className: a ? eA.t8 : void 0,
                children: (0, o.jsx)(e_, {
                    ...e,
                    popoutTargetRef: t,
                    shouldShow: i ? d : void 0,
                    onRequestOpen: E,
                    onRequestClose: () => c(!1),
                    children: (e) => (0, o.jsx)(eI.br, { buttonRef: t, ...e }),
                }),
            }),
            a && (0, o.jsx)("div", { className: eA.Vx, "aria-hidden": !0 }),
            (0, o.jsx)(G, {
                user: e.user,
                guildId: e.guildId,
                shouldShow: i,
                isMenuOpen: d,
                targetElementRef: t,
                onClick: () => {
                    S(T.MENU_VIEWED, n), c(!0);
                },
            }),
        ],
    });
}
