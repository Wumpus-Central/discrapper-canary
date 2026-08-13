n.d(t, { Zt: () => ep, yo: () => eA });
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
    m = n(688810);
let f = (0, n(945810).mj)({
    name: "2026-07-shop-this-look",
    kind: "user",
    defaultConfig: { shopThisLookEnabled: !1 },
    variations: { 0: { shopThisLookEnabled: !1 }, 1: { shopThisLookEnabled: !0 } },
});
function x(e) {
    return f.useConfig({ location: e }).shopThisLookEnabled;
}
var R = n(17928),
    g = n(540737),
    p = n(999291),
    A = n(287809),
    I = n(259464),
    _ = n(449582);
function h(e, t) {
    let n = (0, R.bG)([A.default], () => A.default.getUser(e), [e]),
        i = (0, p.Ay)(e, t),
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
var D = n(43105),
    k = n(49999),
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
                C(b.COACHMARK_DISMISSED, y.d.POPOUT), d(k.i.AUTO_DISMISS);
            };
    }, [u, d]),
    a.useEffect(() => {
        i && u && C(b.COACHMARK_VIEWED, y.d.POPOUT);
    }, [i, u]),
    a.useEffect(() => {
        i && u && l && d(k.i.TAKE_ACTION);
    }, [i, u, l, d]),
    u)
        ? (0, s.jsx)(D.A, {
              badge: "beta",
              graphic: { type: "image", src: L.A },
              title: U.intl.string(U.t.TrOccu),
              body: U.intl.string(U.t["Eh5+1F"]),
              position: "right",
              alignmentStrategy: "edge",
              align: "top",
              caretConfig: { align: "start" },
              targetElementRef: r,
              onRequestClose: () => d(k.i.USER_DISMISS),
              actions: [
                  {
                      text: U.intl.string(U.t["bqZVd/"]),
                      variant: "primary",
                      onClick: () => {
                          C(b.COACHMARK_CTA_CLICKED, y.d.POPOUT), d(k.i.TAKE_ACTION), o();
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
    W = n(503698),
    K = n.n(W),
    H = n(834730),
    q = n(650959),
    Q = n(623373),
    B = n(536572),
    X = n(14702),
    Y = n(887931);
function $() {
    return (0, s.jsxs)("div", {
        className: Y.nM,
        "aria-hidden": !0,
        children: [
            (0, s.jsx)("div", { className: Y.VH, children: (0, s.jsx)("div", { className: Y.Qc }) }),
            (0, s.jsxs)("div", {
                className: K()(Y.Qq, Y.Um),
                children: [(0, s.jsx)("div", { className: Y.Iz }), (0, s.jsx)("div", { className: Y.wS })],
            }),
        ],
    });
}
function z(e) {
    let { skuId: t, disabled: n = !1, source: i } = e,
        { product: l, state: r } = (0, q.I)(t, { needsCategory: !1, shouldFetchProduct: !1 }),
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
                T({ action: j.ROW_VIEWED, skuId: t, productType: (0, Q.YW)(l) ?? void 0, isDisabled: n, source: i }));
        }, [l, t, n, i]),
        "loading" === r)
    )
        return (0, s.jsx)($, {});
    if (null == l) return null;
    let u = (0, Q.YW)(l),
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
        className: K()(Y.nM, { [Y.r9]: n }),
        children: [
            (0, s.jsx)("div", { className: Y.VH, children: (0, s.jsx)(X.O, { product: l, sku: o }) }),
            (0, s.jsxs)("div", {
                className: Y.Qq,
                children: [
                    (0, s.jsx)(H.E, { variant: "text-sm/medium", color: "text-default", children: (0, B.VG)(l) }),
                    null != d && (0, s.jsx)(H.E, { variant: "text-xs/normal", color: "text-subtle", children: d }),
                ],
            }),
        ],
    });
}
function Z(e, t) {
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
var J = n(239211),
    ee = n(284009),
    et = n.n(ee),
    en = n(50268),
    ei = n(486503),
    el = n(885386),
    er = n(957565),
    es = n(399476),
    ea = n(889460),
    eo = n(865116),
    ec = n(928658);
let eu = (0, n(600975).C)({
    kind: "user",
    id: "2023-09_iar_user_reporting",
    label: "Safety Experience IAR User Reporting",
    defaultConfig: { enabled: !1 },
    treatments: [{ id: 1, label: "Enabled", config: { enabled: !0 } }],
});
var ed = n(280450),
    eE = n(183555),
    em = n(939496),
    ef = n(993401),
    ex = n(518477),
    eR = n(12624);
function eg(e) {
    var t;
    let n,
        {
            user: i,
            guildId: l,
            viewProfileItem: r,
            appContext: f,
            popoutTargetRef: I,
            shouldShow: _,
            onRequestOpen: N,
            onRequestClose: v,
            children: S,
        } = e,
        { themeType: M } = (0, em.E)(),
        { trackUserProfileAction: P } = (0, eE.NJ)(),
        { analyticsLocations: D, newestAnalyticsLocation: k } = (0, m.Ay)(E.A.USER_PROFILE_OVERFLOW_MENU),
        y = x("UserProfileOverflowMenuButton");
    (t = i.id),
        (n = h(t, l)),
        a.useEffect(() => {
            y && 0 !== n.length && (0, g.tu)({ skuIds: n });
        }, [y, n]);
    let L = {
            action: ex.pt.PRESS_OPTIONS,
            icon: o.j,
            tooltipText: U.intl.string(U.t["UKOtz+"]),
            "aria-label": U.intl.string(U.t["UKOtz+"]),
        },
        G = (0, ea.A)({
            user: i,
            guildId: l,
            onAction: () => P({ action: "PRESS_INVITE_TO_SERVER", analyticsLocations: D }),
        }),
        W = (0, J.A)({
            user: i,
            guildId: l,
            location: k,
            appContext: f,
            onBlock: () => P({ action: "BLOCK", analyticsLocations: D }),
            onIgnore: () => P({ action: "IGNORE", analyticsLocations: D }),
            onUnblock: () => P({ action: "UNBLOCK", analyticsLocations: D }),
        }),
        K = (0, es.A)({
            user: i,
            guildId: l,
            location: k,
            appContext: f,
            onBlock: () => P({ action: "BLOCK", analyticsLocations: D }),
            onIgnore: () => P({ action: "IGNORE", analyticsLocations: D }),
            onUnignore: () => P({ action: "UNIGNORE", analyticsLocations: D }),
        }),
        H = (function (e) {
            let { user: t, guildId: n, color: i, onAction: l, location: r = E.A.CONTEXT_MENU, appContext: a } = e,
                o = eu.useExperiment({ location: r }, { autoTrackExposure: !0 }).enabled,
                c = (0, R.bG)([ed.default], () => ed.default.getId() === t.id);
            return !o || c || t.isNonUserBot()
                ? null
                : (0, s.jsx)(d.Dr, {
                      id: "report-user",
                      color: i,
                      label: U.intl.string(U.t.A1MM3D),
                      action: () => (0, ec.NW)(t, n === O.ME ? void 0 : n, l, a),
                  });
        })({
            user: i,
            guildId: l,
            location: k,
            appContext: f,
            color: "danger",
            onAction: () => P({ action: "REPORT", analyticsLocations: D }),
        }),
        q = (function (e) {
            let { user: t, guildId: n, color: i, onAction: l, appContext: r } = e,
                a = (0, R.bG)([eo.Ay], () => eo.Ay.get("iar_testing")),
                o = (0, R.bG)([A.default], () => A.default.getCurrentUser());
            return null != o && (t.id === o.id || t.isNonUserBot() || !o.isStaff() || !a)
                ? null
                : (0, s.jsx)(d.Dr, {
                      id: "staff-test-report-user",
                      color: i,
                      label: "[STAFF] Test Profile Report",
                      action: () => (0, ec.RR)(t, n === O.ME ? void 0 : n, l, r),
                  });
        })({
            user: i,
            guildId: l,
            location: k,
            appContext: f,
            color: "danger",
            onAction: () => P({ action: "REPORT", analyticsLocations: D }),
        }),
        Q = (function (e) {
            let { user: t, guildId: n, onSuccess: i } = e,
                l = (0, p.Ay)(t.id, n ?? void 0),
                r = el.Q_.useSetting(),
                { tidaWebformEnabled: o } = ei.A.useExperiment(
                    { location: "useCopyUserInfoItem" },
                    { autoTrackExposure: !1 },
                ),
                c = (0, en.A)({ id: t.id, label: U.intl.string(U.t["/AXYnE"]), onSuccess: i }),
                u = a.useMemo(() => (null == l ? null : l.getBannerURL({ canAnimate: !0, size: O.XAf })), [l]),
                E = a.useCallback(() => {
                    (0, er.C)(t.id), i?.();
                }, [t.id, i]),
                m = a.useCallback(() => {
                    let e = t.getAvatarURL(n, O.XAf, !0);
                    et()(null != e, "cannot copy null avatar URL"), (0, er.C)(e), i?.();
                }, [t, n, i]),
                f = a.useCallback(() => {
                    et()(null != u, "cannot copy null banner URL"), (0, er.C)(u), i?.();
                }, [u, i]);
            return !__OVERLAY__ && r && er.p5 && null != t.id
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
                                      action: m,
                                  }),
                              null != u &&
                                  (0, s.jsx)(d.Dr, {
                                      id: "copy-user-banner-link",
                                      label: U.intl.string(U.t.hsNv0R),
                                      action: f,
                                  }),
                          ],
                      })
                    : c
                : null;
        })({ user: i, guildId: l, onSuccess: () => P({ action: "COPY_USER_ID", analyticsLocations: D }) }),
        B = (function (e, t, n) {
            let i = x("UserProfileOverflowMenu"),
                l = h(e.id, t),
                { analyticsLocations: r } = (0, m.Ay)(E.A.USER_PROFILE_OVERFLOW_MENU),
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
                                    t.isAvailable?.() === !0 &&
                                    t.tenantMetadata?.collectibles?.sourceType === V.SHOP,
                                productType: t?.tenantMetadata?.collectibles?.type,
                            };
                        }),
                    [l],
                    Z,
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
                                      return (0, s.jsx)(z, { skuId: t, disabled: i, source: n });
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
        X = [[r, B, G], [K, W, H, q], [Q]];
    return X.every((e) => e.every((e) => null == e))
        ? null
        : (0, s.jsx)(m.f5, {
              value: D,
              children: (0, s.jsx)(c.Y, {
                  targetElementRef: I,
                  shouldShow: _,
                  onRequestOpen: () => {
                      null != B && C(b.MENU_VIEWED, M), N?.();
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
function ep(e) {
    let t = a.useRef(null);
    return (0, s.jsx)(eg, { ...e, popoutTargetRef: t, children: (e) => (0, s.jsx)(ef.q3, { buttonRef: t, ...e }) });
}
function eA(e) {
    let t = a.useRef(null),
        { themeType: n } = (0, em.E)(),
        i = n === y.d.POPOUT,
        l = n === y.d.SIDEBAR,
        r = x("UserProfileMarketing"),
        { isVisible: o, markAsDismissed: c } = P(e.user.id, e.guildId, l && r);
    a.useEffect(() => {
        o && C(b.RED_DOT_VIEWED, n);
    }, [o, n]);
    let [u, d] = a.useState(!1),
        E = a.useCallback(() => {
            d(!0), o && (C(b.RED_DOT_DISMISSED, n), c(k.i.TAKE_ACTION));
        }, [o, c, n]);
    return (0, s.jsxs)("div", {
        className: eR.g2,
        children: [
            (0, s.jsx)("div", {
                className: o ? eR.t8 : void 0,
                children: (0, s.jsx)(eg, {
                    ...e,
                    popoutTargetRef: t,
                    shouldShow: i ? u : void 0,
                    onRequestOpen: E,
                    onRequestClose: () => d(!1),
                    children: (e) => (0, s.jsx)(ef.br, { buttonRef: t, ...e }),
                }),
            }),
            o && (0, s.jsx)("div", { className: eR.Vx, "aria-hidden": !0 }),
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
