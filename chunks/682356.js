n.d(t, { Zt: () => eg, yo: () => eA });
var i,
    l,
    r,
    s = n(627968),
    a = n(64700),
    o = n(365199),
    c = n(922016),
    u = n(980707),
    d = n(477782),
    E = n(793574),
    m = n(688810),
    f = n(17928),
    x = n(540737),
    R = n(999291),
    p = n(287809),
    g = n(259464);
let A = (0, n(945810).mj)({
    name: "2026-07-shop-this-look",
    kind: "user",
    defaultConfig: { shopThisLookEnabled: !1 },
    variations: { 0: { shopThisLookEnabled: !1 }, 1: { shopThisLookEnabled: !0 } },
});
function I(e) {
    return A.useConfig({ location: e }).shopThisLookEnabled;
}
var _ = n(449582);
function h(e, t) {
    let n = (0, f.bG)([p.default], () => p.default.getUser(e), [e]),
        i = (0, R.Ay)(e, t),
        l = (0, g.Z)(n, t),
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
var S = n(43105),
    M = n(554146),
    P = n(131607);
function D(e, t, n) {
    let i = I("UserProfileMarketing"),
        l = h(e, t),
        r = n && i && l.length > 0,
        [s, a] = (0, P.kn)(r ? [M.M.SHOP_THIS_LOOK_WEB_MARKETING] : [], void 0, !0);
    return { isVisible: null != s, markAsDismissed: a };
}
var k = n(49999),
    y = n(996988),
    U = n(375708),
    L = n(227143);
function G(e) {
    let { user: t, guildId: n, shouldShow: i, isMenuOpen: l, targetElementRef: r, onClick: o } = e,
        { isVisible: c, markAsDismissed: u } = D(t.id, n, i);
    return (a.useEffect(() => {
        if (c)
            return () => {
                C(b.COACHMARK_DISMISSED, y.d.POPOUT), u(k.i.AUTO_DISMISS);
            };
    }, [c, u]),
    a.useEffect(() => {
        i && c && C(b.COACHMARK_VIEWED, y.d.POPOUT);
    }, [i, c]),
    a.useEffect(() => {
        i && c && l && u(k.i.TAKE_ACTION);
    }, [i, c, l, u]),
    c)
        ? (0, s.jsx)(S.A, {
              badge: "beta",
              graphic: { type: "image", src: L.A },
              title: U.intl.string(U.t.TrOccu),
              body: U.intl.string(U.t["Eh5+1F"]),
              position: "right",
              alignmentStrategy: "edge",
              align: "top",
              caretConfig: { align: "start" },
              targetElementRef: r,
              onRequestClose: () => u(k.i.USER_DISMISS),
              actions: [
                  {
                      text: U.intl.string(U.t["bqZVd/"]),
                      variant: "primary",
                      onClick: () => {
                          C(b.COACHMARK_CTA_CLICKED, y.d.POPOUT), u(k.i.TAKE_ACTION), o();
                      },
                  },
              ],
          })
        : null;
}
var F =
        (((r = {})[(r.SHOP = 1)] = "SHOP"),
        (r[(r.QUEST = 2)] = "QUEST"),
        (r[(r.PREMIUM_PROMOTION = 3)] = "PREMIUM_PROMOTION"),
        (r[(r.REWARD = 4)] = "REWARD"),
        (r[(r.INTERNAL = 5)] = "INTERNAL"),
        r),
    V = n(821925),
    w = n(722258),
    W = n(503698),
    K = n.n(W),
    q = n(834730),
    H = n(642160),
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
        { product: l, state: r } = (0, H.I)(t, { needsCategory: !1, shouldFetchProduct: !1 }),
        o = (0, f.bG)(
            [V.A],
            () =>
                V.A.getProductsForSku(t)
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
                    (0, s.jsx)(q.E, { variant: "text-sm/medium", color: "text-default", children: (0, B.VG)(l) }),
                    null != d && (0, s.jsx)(q.E, { variant: "text-xs/normal", color: "text-subtle", children: d }),
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
function ep(e) {
    var t;
    let n,
        i,
        {
            user: l,
            guildId: r,
            viewProfileItem: g,
            appContext: A,
            popoutTargetRef: _,
            shouldShow: N,
            onRequestOpen: v,
            onRequestClose: S,
            children: M,
        } = e,
        { themeType: P } = (0, em.E)(),
        { trackUserProfileAction: D } = (0, eE.NJ)(),
        { analyticsLocations: k, newestAnalyticsLocation: y } = (0, m.Ay)(E.A.USER_PROFILE_OVERFLOW_MENU);
    (t = l.id),
        (n = I("useMaybeFetchEquippedCollectibleProducts")),
        (i = h(t, r)),
        a.useEffect(() => {
            n && 0 !== i.length && (0, x.tu)({ skuIds: i });
        }, [n, i]);
    let L = {
            action: ex.pt.PRESS_OPTIONS,
            icon: o.j,
            tooltipText: U.intl.string(U.t["UKOtz+"]),
            "aria-label": U.intl.string(U.t["UKOtz+"]),
        },
        G = (0, ea.A)({
            user: l,
            guildId: r,
            onAction: () => D({ action: "PRESS_INVITE_TO_SERVER", analyticsLocations: k }),
        }),
        W = (0, J.A)({
            user: l,
            guildId: r,
            location: y,
            appContext: A,
            onBlock: () => D({ action: "BLOCK", analyticsLocations: k }),
            onIgnore: () => D({ action: "IGNORE", analyticsLocations: k }),
            onUnblock: () => D({ action: "UNBLOCK", analyticsLocations: k }),
        }),
        K = (0, es.A)({
            user: l,
            guildId: r,
            location: y,
            appContext: A,
            onBlock: () => D({ action: "BLOCK", analyticsLocations: k }),
            onIgnore: () => D({ action: "IGNORE", analyticsLocations: k }),
            onUnignore: () => D({ action: "UNIGNORE", analyticsLocations: k }),
        }),
        q = (function (e) {
            let { user: t, guildId: n, color: i, onAction: l, location: r = E.A.CONTEXT_MENU, appContext: a } = e,
                o = eu.useExperiment({ location: r }, { autoTrackExposure: !0 }).enabled,
                c = (0, f.bG)([ed.default], () => ed.default.getId() === t.id);
            return !o || c || t.isNonUserBot()
                ? null
                : (0, s.jsx)(d.Dr, {
                      id: "report-user",
                      color: i,
                      label: U.intl.string(U.t.A1MM3D),
                      action: () => (0, ec.NW)(t, n === O.ME ? void 0 : n, l, a),
                  });
        })({
            user: l,
            guildId: r,
            location: y,
            appContext: A,
            color: "danger",
            onAction: () => D({ action: "REPORT", analyticsLocations: k }),
        }),
        H = (function (e) {
            let { user: t, guildId: n, color: i, onAction: l, appContext: r } = e,
                a = (0, f.bG)([eo.Ay], () => eo.Ay.get("iar_testing")),
                o = (0, f.bG)([p.default], () => p.default.getCurrentUser());
            return null != o && (t.id === o.id || t.isNonUserBot() || !o.isStaff() || !a)
                ? null
                : (0, s.jsx)(d.Dr, {
                      id: "staff-test-report-user",
                      color: i,
                      label: "[STAFF] Test Profile Report",
                      action: () => (0, ec.RR)(t, n === O.ME ? void 0 : n, l, r),
                  });
        })({
            user: l,
            guildId: r,
            location: y,
            appContext: A,
            color: "danger",
            onAction: () => D({ action: "REPORT", analyticsLocations: k }),
        }),
        Q = (function (e) {
            let { user: t, guildId: n, onSuccess: i } = e,
                l = (0, R.Ay)(t.id, n ?? void 0),
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
        })({ user: l, guildId: r, onSuccess: () => D({ action: "COPY_USER_ID", analyticsLocations: k }) }),
        B = (function (e, t, n) {
            let i = I("UserProfileOverflowMenu"),
                l = h(e.id, t),
                { analyticsLocations: r } = (0, m.Ay)(E.A.USER_PROFILE_OVERFLOW_MENU),
                a = (0, f.bG)(
                    [V.A],
                    () =>
                        l.map((e) => {
                            let t = V.A.getProductsForSku(e)
                                ?.flatMap((e) => e.skus)
                                .find((t) => t.id === e);
                            return {
                                skuId: e,
                                isShoppableItem:
                                    null != t &&
                                    t.isAvailable() &&
                                    t.tenantMetadata?.collectibles?.sourceType === F.SHOP,
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
        })(l, r, P),
        X = [[g, B, G], [K, W, q, H], [Q]];
    return X.every((e) => e.every((e) => null == e))
        ? null
        : (0, s.jsx)(m.f5, {
              value: k,
              children: (0, s.jsx)(c.Y, {
                  targetElementRef: _,
                  shouldShow: N,
                  onRequestOpen: () => {
                      null != B && C(b.MENU_VIEWED, P), v?.();
                  },
                  onRequestClose: S,
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
                  children: (e) => M({ ...e, ...L }),
              }),
          });
}
function eg(e) {
    let t = a.useRef(null);
    return (0, s.jsx)(ep, { ...e, popoutTargetRef: t, children: (e) => (0, s.jsx)(ef.q3, { buttonRef: t, ...e }) });
}
function eA(e) {
    let t = a.useRef(null),
        { themeType: n } = (0, em.E)(),
        i = n === y.d.POPOUT,
        l = n === y.d.SIDEBAR,
        { isVisible: r, markAsDismissed: o } = D(e.user.id, e.guildId, l);
    a.useEffect(() => {
        r && C(b.RED_DOT_VIEWED, n);
    }, [r, n]);
    let [c, u] = a.useState(!1),
        d = a.useCallback(() => {
            u(!0), r && (C(b.RED_DOT_DISMISSED, n), o(k.i.TAKE_ACTION));
        }, [r, o, n]);
    return (0, s.jsxs)("div", {
        className: eR.g2,
        children: [
            (0, s.jsx)("div", {
                className: r ? eR.t8 : void 0,
                children: (0, s.jsx)(ep, {
                    ...e,
                    popoutTargetRef: t,
                    shouldShow: i ? c : void 0,
                    onRequestOpen: d,
                    onRequestClose: () => u(!1),
                    children: (e) => (0, s.jsx)(ef.br, { buttonRef: t, ...e }),
                }),
            }),
            r && (0, s.jsx)("div", { className: eR.Vx, "aria-hidden": !0 }),
            (0, s.jsx)(G, {
                user: e.user,
                guildId: e.guildId,
                shouldShow: i,
                isMenuOpen: c,
                targetElementRef: t,
                onClick: () => {
                    C(b.MENU_VIEWED, n), u(!0);
                },
            }),
        ],
    });
}
