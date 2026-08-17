n.d(t, { Zt: () => eI, yo: () => e_ });
var i,
    l,
    r,
    s = n(477900),
    a = n(582128),
    o = n(365199),
    c = n(922016),
    u = n(980707),
    d = n(477782),
    E = n(793574),
    f = n(688810);
let m = (0, n(945810).mj)({
    name: "2026-07-shop-this-look",
    kind: "user",
    defaultConfig: { shopThisLookEnabled: !1 },
    variations: { 0: { shopThisLookEnabled: !1 }, 1: { shopThisLookEnabled: !0 } },
});
function x(e) {
    return m.useConfig({ location: e }).shopThisLookEnabled;
}
var R = n(17928),
    p = n(540737),
    g = n(999291),
    A = n(287809),
    I = n(259464),
    _ = n(449582);
function h(e, t) {
    let n = (0, R.bG)([A.default], () => A.default.getUser(e), [e]),
        i = (0, g.Ay)(e, t),
        l = (0, I.Z)(n, t),
        r = (0, _.r)({ user: n, guildId: t }),
        s = l?.skuId,
        o = r?.skuId,
        c = i?.profileEffect?.skuId,
        u = i?.profileFrame?.skuId;
    return a.useMemo(() => [s, o, c, u].filter((e) => null != e), [s, o, c, u]);
}
var N = n(575593),
    v = n(174459),
    O = n(652215),
    b =
        (((i = {}).MENU_VIEWED = "menu_viewed"),
        (i.COACHMARK_VIEWED = "coachmark_viewed"),
        (i.COACHMARK_CTA_CLICKED = "coachmark_cta_clicked"),
        (i.COACHMARK_DISMISSED = "coachmark_dismissed"),
        (i.RED_DOT_VIEWED = "red_dot_viewed"),
        (i.RED_DOT_DISMISSED = "red_dot_dismissed"),
        i),
    j = (((l = {}).ROW_VIEWED = "row_viewed"), (l.ROW_CLICKED = "row_clicked"), l);
function C(e, t) {
    v.default.track(O.HAw.SHOP_THIS_LOOK_MENU_ACTION, { action: e, source: t ?? void 0 });
}
function T(e) {
    let { action: t, skuId: n, productType: i, isDisabled: l, source: r } = e;
    v.default.track(O.HAw.SHOP_THIS_LOOK_ROW_ACTION, {
        action: t,
        sku_id: n,
        product_type: (function (e) {
            switch (e) {
                case N.R.PROFILE_FRAME:
                    return "profile_frame";
                case N.R.PROFILE_EFFECT:
                    return "profile_effect";
                case N.R.AVATAR_DECORATION:
                    return "avatar_decoration";
                case N.R.NAMEPLATE:
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
    M = n(131607);
function P(e, t, n) {
    let i = h(e, t).length > 0,
        [l, r] = (0, M.kn)(n && i ? [S.M.SHOP_THIS_LOOK_WEB_MARKETING] : [], void 0, !0);
    return { isVisible: null != l, markAsDismissed: r };
}
var k = n(43105),
    D = n(49999),
    y = n(996988),
    U = n(375708),
    L = n(227143);
function G(e) {
    let { user: t, guildId: n, shouldShow: i, isMenuOpen: l, targetElementRef: r, onClick: o } = e,
        c = x("UserProfileMarketing"),
        { isVisible: u, markAsDismissed: d } = P(t.id, n, i && c);
    return (a.useEffect(() => {
        if (u)
            return () => {
                C(b.COACHMARK_DISMISSED, y.d.POPOUT), d(D.i.AUTO_DISMISS);
            };
    }, [u, d]),
    a.useEffect(() => {
        i && u && C(b.COACHMARK_VIEWED, y.d.POPOUT);
    }, [i, u]),
    a.useEffect(() => {
        i && u && l && d(D.i.TAKE_ACTION);
    }, [i, u, l, d]),
    u)
        ? (0, s.jsx)(k.A, {
              badge: "beta",
              graphic: { type: "image", src: L.A },
              title: U.intl.string(U.t.TrOccu),
              body: U.intl.string(U.t["Eh5+1F"]),
              position: "right",
              alignmentStrategy: "edge",
              align: "top",
              caretConfig: { align: "start" },
              targetElementRef: r,
              onRequestClose: () => d(D.i.USER_DISMISS),
              actions: [
                  {
                      text: U.intl.string(U.t["bqZVd/"]),
                      variant: "primary",
                      onClick: () => {
                          C(b.COACHMARK_CTA_CLICKED, y.d.POPOUT), d(D.i.TAKE_ACTION), o();
                      },
                  },
              ],
          })
        : null;
}
var F = n(821925),
    w = n(722258),
    V =
        (((r = {})[(r.SHOP = 1)] = "SHOP"),
        (r[(r.QUEST = 2)] = "QUEST"),
        (r[(r.PREMIUM_PROMOTION = 3)] = "PREMIUM_PROMOTION"),
        (r[(r.REWARD = 4)] = "REWARD"),
        (r[(r.INTERNAL = 5)] = "INTERNAL"),
        r),
    W = n(38405),
    K = n(503698),
    H = n.n(K),
    q = n(834730),
    Q = n(650959),
    B = n(623373),
    Y = n(536572),
    X = n(14702),
    z = n(887931);
function $() {
    return (0, s.jsxs)("div", {
        className: z.nM,
        "aria-hidden": !0,
        children: [
            (0, s.jsx)("div", { className: z.VH, children: (0, s.jsx)("div", { className: z.Qc }) }),
            (0, s.jsxs)("div", {
                className: H()(z.Qq, z.Um),
                children: [(0, s.jsx)("div", { className: z.Iz }), (0, s.jsx)("div", { className: z.wS })],
            }),
        ],
    });
}
function Z(e) {
    let { skuId: t, disabled: n = !1, source: i } = e,
        { product: l, state: r } = (0, Q.I)(t, { needsCategory: !1, shouldFetchProduct: !1 }),
        o = (0, R.bG)(
            [F.A],
            () =>
                F.A.getProductsForSku(t)
                    ?.flatMap((e) => e.skus)
                    .find((e) => e.id === t),
            [t],
        ),
        c = a.useRef(!1);
    if (
        (a.useEffect(() => {
            null == l ||
                c.current ||
                ((c.current = !0),
                T({ action: j.ROW_VIEWED, skuId: t, productType: (0, B.YW)(l) ?? void 0, isDisabled: n, source: i }));
        }, [l, t, n, i]),
        "loading" === r)
    )
        return (0, s.jsx)($, {});
    if (null == l) return null;
    let u = (0, B.YW)(l),
        d =
            null != u
                ? (function (e) {
                      switch (e) {
                          case N.R.AVATAR_DECORATION:
                              return U.intl.string(U.t["7v0T9P"]);
                          case N.R.PROFILE_EFFECT:
                              return U.intl.string(U.t.wR5wOo);
                          case N.R.NAMEPLATE:
                              return U.intl.string(U.t.x5CoXR);
                          case N.R.PROFILE_FRAME:
                              return U.intl.string(U.t.GWrZOd);
                          default:
                              return;
                      }
                  })(u)
                : void 0;
    return (0, s.jsxs)("div", {
        className: H()(z.nM, { [z.r9]: n }),
        children: [
            (0, s.jsx)("div", { className: z.VH, children: (0, s.jsx)(X.O, { product: l, sku: o }) }),
            (0, s.jsxs)("div", {
                className: z.Qq,
                children: [
                    (0, s.jsx)(q.E, { variant: "text-sm/medium", color: "text-default", children: (0, Y.VG)(l) }),
                    null != d && (0, s.jsx)(q.E, { variant: "text-xs/normal", color: "text-subtle", children: d }),
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
var ee = n(239211),
    et = n(284009),
    en = n.n(et),
    ei = n(50268),
    el = n(486503),
    er = n(885386),
    es = n(957565),
    ea = n(399476),
    eo = n(889460),
    ec = n(865116),
    eu = n(928658);
let ed = (0, n(600975).C)({
    kind: "user",
    id: "2023-09_iar_user_reporting",
    label: "Safety Experience IAR User Reporting",
    defaultConfig: { enabled: !1 },
    treatments: [{ id: 1, label: "Enabled", config: { enabled: !0 } }],
});
var eE = n(280450),
    ef = n(183555),
    em = n(254384),
    ex = n(939496),
    eR = n(993401),
    ep = n(518477),
    eg = n(12624);
function eA(e) {
    var t;
    let n,
        {
            user: i,
            guildId: l,
            viewProfileItem: r,
            appContext: m,
            popoutTargetRef: I,
            shouldShow: _,
            onRequestOpen: N,
            onRequestClose: v,
            children: S,
        } = e,
        { themeType: M } = (0, ex.E)(),
        { trackUserProfileAction: P } = (0, ef.NJ)(),
        { analyticsLocations: k, newestAnalyticsLocation: D } = (0, f.Ay)(E.A.USER_PROFILE_OVERFLOW_MENU),
        y = x("UserProfileOverflowMenuButton");
    (t = i.id),
        (n = h(t, l)),
        a.useEffect(() => {
            y && 0 !== n.length && (0, p.tu)({ skuIds: n });
        }, [y, n]);
    let L = {
            action: ep.pt.PRESS_OPTIONS,
            icon: o.MoreHorizontalIcon,
            tooltipText: U.intl.string(U.t["UKOtz+"]),
            "aria-label": U.intl.string(U.t["UKOtz+"]),
        },
        G = (0, eo.A)({
            user: i,
            guildId: l,
            onAction: () => P({ action: "PRESS_INVITE_TO_SERVER", analyticsLocations: k }),
        }),
        K = (0, ee.A)({
            user: i,
            guildId: l,
            location: D,
            appContext: m,
            onBlock: () => P({ action: "BLOCK", analyticsLocations: k }),
            onIgnore: () => P({ action: "IGNORE", analyticsLocations: k }),
            onUnblock: () => P({ action: "UNBLOCK", analyticsLocations: k }),
        }),
        H = (0, ea.A)({
            user: i,
            guildId: l,
            location: D,
            appContext: m,
            onBlock: () => P({ action: "BLOCK", analyticsLocations: k }),
            onIgnore: () => P({ action: "IGNORE", analyticsLocations: k }),
            onUnignore: () => P({ action: "UNIGNORE", analyticsLocations: k }),
        }),
        q = (function (e) {
            let { user: t, guildId: n, color: i, onAction: l, location: r = E.A.CONTEXT_MENU, appContext: a } = e,
                o = ed.useExperiment({ location: r }, { autoTrackExposure: !0 }).enabled,
                c = (0, R.bG)([eE.default], () => eE.default.getId() === t.id);
            return !o || c || t.isNonUserBot()
                ? null
                : (0, s.jsx)(d.Dr, {
                      id: "report-user",
                      color: i,
                      label: U.intl.string(U.t.A1MM3D),
                      action: () => (0, eu.NW)(t, n === O.ME ? void 0 : n, l, a),
                  });
        })({
            user: i,
            guildId: l,
            location: D,
            appContext: m,
            color: "danger",
            onAction: () => P({ action: "REPORT", analyticsLocations: k }),
        }),
        Q = (function (e) {
            let { user: t, guildId: n, color: i, onAction: l, appContext: r } = e,
                a = (0, R.bG)([ec.Ay], () => ec.Ay.get("iar_testing")),
                o = (0, R.bG)([A.default], () => A.default.getCurrentUser());
            return null != o && (t.id === o.id || t.isNonUserBot() || !o.isStaff() || !a)
                ? null
                : (0, s.jsx)(d.Dr, {
                      id: "staff-test-report-user",
                      color: i,
                      label: "[STAFF] Test Profile Report",
                      action: () => (0, eu.RR)(t, n === O.ME ? void 0 : n, l, r),
                  });
        })({
            user: i,
            guildId: l,
            location: D,
            appContext: m,
            color: "danger",
            onAction: () => P({ action: "REPORT", analyticsLocations: k }),
        }),
        B = (function (e) {
            let { user: t, guildId: n, onSuccess: i } = e,
                l = (0, g.Ay)(t.id, n ?? void 0),
                r = er.Q_.useSetting(),
                { tidaWebformEnabled: o } = el.A.useExperiment(
                    { location: "useCopyUserInfoItem" },
                    { autoTrackExposure: !1 },
                ),
                c = (0, ei.A)({ id: t.id, label: U.intl.string(U.t["/AXYnE"]), onSuccess: i }),
                u = a.useMemo(() => (null == l ? null : l.getBannerURL({ canAnimate: !0, size: O.XAf })), [l]),
                E = a.useCallback(() => {
                    (0, es.C)(t.id), i?.();
                }, [t.id, i]),
                f = a.useCallback(() => {
                    let e = t.getAvatarURL(n, O.XAf, !0);
                    en()(null != e, "cannot copy null avatar URL"), (0, es.C)(e), i?.();
                }, [t, n, i]),
                m = a.useCallback(() => {
                    en()(null != u, "cannot copy null banner URL"), (0, es.C)(u), i?.();
                }, [u, i]);
            return !__OVERLAY__ && r && es.p5 && null != t.id
                ? o
                    ? (0, s.jsxs)(d.Dr, {
                          id: "copy-user-info",
                          label: U.intl.string(U.t.QvQeLv),
                          children: [
                              (0, s.jsx)(d.Dr, { id: "copy-user-id", label: U.intl.string(U.t["/AXYnE"]), action: E }),
                              (null != t.avatar || t.hasAvatarForGuild(n)) &&
                                  (0, s.jsx)(d.Dr, {
                                      id: "copy-user-avatar-link",
                                      label: U.intl.string(U.t.gERDvM),
                                      action: f,
                                  }),
                              null != u &&
                                  (0, s.jsx)(d.Dr, {
                                      id: "copy-user-banner-link",
                                      label: U.intl.string(U.t.hsNv0R),
                                      action: m,
                                  }),
                          ],
                      })
                    : c
                : null;
        })({ user: i, guildId: l, onSuccess: () => P({ action: "COPY_USER_ID", analyticsLocations: k }) }),
        Y = (function (e, t, n) {
            let i = x("UserProfileOverflowMenu"),
                l = h(e.id, t),
                { analyticsLocations: r } = (0, f.Ay)(E.A.USER_PROFILE_OVERFLOW_MENU),
                a = (0, R.bG)(
                    [F.A],
                    () =>
                        l.map((e) => {
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
                                        : t.isAvailable() && t.tenantMetadata?.collectibles?.sourceType === V.SHOP),
                                productType: t?.tenantMetadata?.collectibles?.type,
                            };
                        }),
                    [l],
                    J,
                );
            return i && 0 !== l.length
                ? (0, s.jsx)(d.Dr, {
                      id: "shop-this-look",
                      label: U.intl.string(U.t.xNdRDO),
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
                                      return (0, s.jsx)(Z, { skuId: t, disabled: i, source: n });
                                  },
                                  action: i
                                      ? () => {
                                            T({
                                                action: j.ROW_CLICKED,
                                                skuId: t,
                                                productType: l,
                                                isDisabled: !1,
                                                source: n,
                                            }),
                                                (0, w.B)({
                                                    skuId: t,
                                                    analyticsLocations: r,
                                                    analyticsSource: E.A.USER_PROFILE_OVERFLOW_MENU,
                                                });
                                        }
                                      : void 0,
                              },
                              t,
                          );
                      }),
                  })
                : null;
        })(i, l, M),
        X = [[r, Y, (0, em.A)({ user: i, location: "UserProfileOverflowMenuButton" }), G], [H, K, q, Q], [B]];
    return X.every((e) => e.every((e) => null == e))
        ? null
        : (0, s.jsx)(f.f5, {
              value: k,
              children: (0, s.jsx)(c.Y, {
                  targetElementRef: I,
                  shouldShow: _,
                  onRequestOpen: () => {
                      null != Y && C(b.MENU_VIEWED, M), N?.();
                  },
                  onRequestClose: v,
                  renderPopout: (e) => {
                      let { closePopout: t } = e;
                      return (0, s.jsx)(u.W, {
                          "data-menu-migrated-auto": !0,
                          navId: "user-profile-overflow-menu",
                          onSelect: void 0,
                          onClose: t,
                          "aria-label": U.intl.string(U.t.AXIHpV),
                          children: X.map((e, t) => (0, s.jsx)(d.rX, { children: e.map((e) => e) }, t)),
                      });
                  },
                  children: (e) => S({ ...e, ...L }),
              }),
          });
}
function eI(e) {
    let t = a.useRef(null);
    return (0, s.jsx)(eA, { ...e, popoutTargetRef: t, children: (e) => (0, s.jsx)(eR.q3, { buttonRef: t, ...e }) });
}
function e_(e) {
    let t = a.useRef(null),
        { themeType: n } = (0, ex.E)(),
        i = n === y.d.POPOUT,
        l = n === y.d.SIDEBAR,
        r = x("UserProfileMarketing"),
        { isVisible: o, markAsDismissed: c } = P(e.user.id, e.guildId, l && r);
    a.useEffect(() => {
        o && C(b.RED_DOT_VIEWED, n);
    }, [o, n]);
    let [u, d] = a.useState(!1),
        E = a.useCallback(() => {
            d(!0), o && (C(b.RED_DOT_DISMISSED, n), c(D.i.TAKE_ACTION));
        }, [o, c, n]);
    return (0, s.jsxs)("div", {
        className: eg.g2,
        children: [
            (0, s.jsx)("div", {
                className: o ? eg.t8 : void 0,
                children: (0, s.jsx)(eA, {
                    ...e,
                    popoutTargetRef: t,
                    shouldShow: i ? u : void 0,
                    onRequestOpen: E,
                    onRequestClose: () => d(!1),
                    children: (e) => (0, s.jsx)(eR.br, { buttonRef: t, ...e }),
                }),
            }),
            o && (0, s.jsx)("div", { className: eg.Vx, "aria-hidden": !0 }),
            (0, s.jsx)(G, {
                user: e.user,
                guildId: e.guildId,
                shouldShow: i,
                isMenuOpen: u,
                targetElementRef: t,
                onClick: () => {
                    C(b.MENU_VIEWED, n), d(!0);
                },
            }),
        ],
    });
}
