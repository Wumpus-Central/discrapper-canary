n.d(t, { Zt: () => ey, yo: () => eU });
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
    p = n(17928),
    R = n(540737),
    E = n(999291),
    m = n(287809),
    g = n(259464),
    A = n(449582);
function x(e, t) {
    let n = (0, p.bG)([m.default], () => m.default.getUser(e), [e]),
        l = (0, E.Ay)(e, t),
        i = (0, g.Z)(n, t),
        r = (0, A.r)({ user: n, guildId: t }),
        a = i?.skuId,
        s = r?.skuId,
        u = l?.profileEffect?.skuId,
        c = l?.profileFrame?.skuId;
    return o.useMemo(() => [a, s, u, c].filter((e) => null != e), [a, s, u, c]);
}
var I = n(821925),
    b = n(280450),
    _ = n(722258),
    h = n(575593),
    O = n(174459),
    N = n(652215),
    v = (((l = {}).ROW_VIEWED = "row_viewed"), (l.ROW_CLICKED = "row_clicked"), l);
function j(e) {
    let { action: t, skuId: n, productType: l, isDisabled: i, source: r } = e;
    O.default.track(N.HAw.SHOP_THIS_LOOK_ROW_ACTION, {
        action: t,
        sku_id: n,
        product_type: (function (e) {
            switch (e) {
                case h.R.PROFILE_FRAME:
                    return "profile_frame";
                case h.R.PROFILE_EFFECT:
                    return "profile_effect";
                case h.R.AVATAR_DECORATION:
                    return "avatar_decoration";
                case h.R.NAMEPLATE:
                    return "nameplate";
                default:
                    return;
            }
        })(l),
        is_disabled: i,
        source: r ?? void 0,
    });
}
var C =
        (((i = {})[(i.SHOP = 1)] = "SHOP"),
        (i[(i.QUEST = 2)] = "QUEST"),
        (i[(i.PREMIUM_PROMOTION = 3)] = "PREMIUM_PROMOTION"),
        (i[(i.REWARD = 4)] = "REWARD"),
        (i[(i.INTERNAL = 5)] = "INTERNAL"),
        i),
    P = n(38405),
    S = n(503698),
    M = n.n(S),
    k = n(834730),
    T = n(682301),
    y = n(623373),
    L = n(536572),
    U = n(14702),
    D = n(660183),
    G = n(728500);
function F() {
    return (0, r.jsxs)("div", {
        className: G.nM,
        "aria-hidden": !0,
        children: [
            (0, r.jsx)("div", { className: G.VH, children: (0, r.jsx)("div", { className: G.Qc }) }),
            (0, r.jsxs)("div", {
                className: M()(G.Qq, G.Um),
                children: [(0, r.jsx)("div", { className: G.Iz }), (0, r.jsx)("div", { className: G.wS })],
            }),
        ],
    });
}
function w(e) {
    let { skuId: t, disabled: n = !1, source: l } = e,
        { product: i, state: a } = (0, T.IK)(t, { needsCategory: !1, shouldFetchProduct: !1 }),
        s = (0, p.bG)(
            [I.A],
            () =>
                I.A.getProductsForSku(t)
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
                j({ action: v.ROW_VIEWED, skuId: t, productType: (0, y.YW)(i) ?? void 0, isDisabled: n, source: l }));
        }, [i, t, n, l]),
        "loading" === a)
    )
        return (0, r.jsx)(F, {});
    if (null == i) return null;
    let c = (0, y.YW)(i),
        d =
            null != c
                ? (function (e) {
                      switch (e) {
                          case h.R.AVATAR_DECORATION:
                              return D.intl.string(D.t["7v0T9P"]);
                          case h.R.PROFILE_EFFECT:
                              return D.intl.string(D.t.wR5wOo);
                          case h.R.NAMEPLATE:
                              return D.intl.string(D.t.x5CoXR);
                          case h.R.PROFILE_FRAME:
                              return D.intl.string(D.t.GWrZOd);
                          default:
                              return;
                      }
                  })(c)
                : void 0;
    return (0, r.jsxs)("div", {
        className: M()(G.nM, { [G.r9]: n }),
        children: [
            (0, r.jsx)("div", { className: G.VH, children: (0, r.jsx)(U.O, { product: i, sku: s }) }),
            (0, r.jsxs)("div", {
                className: G.Qq,
                children: [
                    (0, r.jsx)(k.E, { variant: "text-sm/medium", color: "text-default", children: (0, L.VG)(i) }),
                    null != d && (0, r.jsx)(k.E, { variant: "text-xs/normal", color: "text-subtle", children: d }),
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
var W = n(945810);
let B = (0, W.mj)({
    name: "2026-09-try-display-name-style",
    kind: "user",
    defaultConfig: { placement: "off" },
    variations: { 0: { placement: "off" }, 1: { placement: "top_level_menu_item" }, 2: { placement: "submenu" } },
});
var K = n(609425);
let q = o.createContext("off");
function Y(e) {
    let { location: t, children: n } = e,
        { placement: l } = B.useConfig({ location: t });
    return (0, r.jsx)(q.Provider, { value: l, children: n });
}
function Q(e) {
    let { user: t, guildId: n, location: l, children: i } = e,
        o = (0, p.bG)([b.default], () => b.default.getId() === t.id),
        a = (0, K.A)({ userId: t.id, guildId: n });
    return o || null == a ? i : (0, r.jsx)(Y, { location: l, children: i });
}
var H = n(554146),
    z = n(131607),
    X = n(43105),
    $ = n(844222),
    J = n(403581),
    Z = n(626584),
    ee = n(531685),
    et = n(49999),
    en = n(763052),
    el = n(78294);
let ei = new Z.A("TryDisplayNameStyleMarketingPopover");
function er(e) {
    let { markAsDismissed: t, targetElementRef: n, onDismissibleContentClick: l } = e,
        i = o.useRef(null),
        a = (0, p.bG)([ee.A], () => ee.A.isFocused()),
        { reducedMotion: s } = o.useContext($.C);
    return (
        o.useEffect(() => {
            null != i.current && (!s.enabled && a ? i.current.play().catch(ei.error) : i.current.pause());
        }, [a, s.enabled]),
        (0, r.jsx)(X.A, {
            graphic: { type: "video", ref: i, src: el.A, aspectRatio: "21/9", loop: !0 },
            gradientColor: "nitro-pink",
            title: D.intl.string(en.default.t8z5gn),
            size: "lg",
            body: D.intl.string(en.default.ajHWbZ),
            position: "right",
            alignmentStrategy: "edge",
            align: "top",
            caretConfig: { align: "start" },
            targetElementRef: n,
            onRequestClose: () => t(et.i.USER_DISMISS),
            actions: [{ text: D.intl.string(en.default["D7+kY/"]), variant: "primary", icon: J.t, onClick: l }],
        })
    );
}
var eo = n(192308),
    ea = n(427358),
    es = n(994500),
    eu = n(851746);
let ec = (0, W.mj)({
    name: "2026-09-referral-profile-contextual-menu-upsell",
    kind: "user",
    defaultConfig: !1,
    variations: { 0: !1, 1: !0 },
});
var ed = n(103411),
    ef = n(239211),
    ep = n(284009),
    eR = n.n(ep),
    eE = n(50268),
    em = n(486503),
    eg = n(342053),
    eA = n(640794),
    ex = n(885386),
    eI = n(957565),
    eb = n(518477),
    e_ = n(399476),
    eh = n(889460),
    eO = n(865116),
    eN = n(928658);
let ev = (0, n(600975).C)({
    kind: "user",
    id: "2023-09_iar_user_reporting",
    label: "Safety Experience IAR User Reporting",
    defaultConfig: { enabled: !1 },
    treatments: [{ id: 1, label: "Enabled", config: { enabled: !0 } }],
});
var ej = n(183555),
    eC = n(254384),
    eP = n(939496),
    eS = n(993401),
    eM = n(996988),
    ek = n(207566);
function eT(e) {
    var t;
    let l,
        {
            user: i,
            guildId: g,
            viewProfileItem: A,
            appContext: h,
            popoutTargetRef: S,
            shouldShow: M,
            onRequestOpen: k,
            onRequestClose: T,
            children: y,
        } = e,
        { themeType: L } = (0, eP.E)(),
        { trackUserProfileAction: U } = (0, ej.NJ)(),
        { analyticsLocations: G, newestAnalyticsLocation: F } = (0, f.Ay)(d.A.USER_PROFILE_OVERFLOW_MENU);
    ((t = i.id),
        (l = x(t, g)),
        o.useEffect(() => {
            0 !== l.length && (0, R.tu)({ skuIds: l });
        }, [!0, l]));
    let W = {
            action: eb.pt.PRESS_OPTIONS,
            icon: a.MoreHorizontalIcon,
            tooltipText: D.intl.string(D.t["UKOtz+"]),
            "aria-label": D.intl.string(D.t["UKOtz+"]),
        },
        B = (0, eh.A)({
            user: i,
            guildId: g,
            onAction: () => U({ action: "PRESS_INVITE_TO_SERVER", analyticsLocations: G }),
        }),
        K = (0, ef.A)({
            user: i,
            guildId: g,
            location: F,
            appContext: h,
            onBlock: () => U({ action: "BLOCK", analyticsLocations: G }),
            onIgnore: () => U({ action: "IGNORE", analyticsLocations: G }),
            onUnblock: () => U({ action: "UNBLOCK", analyticsLocations: G }),
        }),
        q = (0, e_.A)({
            user: i,
            guildId: g,
            location: F,
            appContext: h,
            onBlock: () => U({ action: "BLOCK", analyticsLocations: G }),
            onIgnore: () => U({ action: "IGNORE", analyticsLocations: G }),
            onUnignore: () => U({ action: "UNIGNORE", analyticsLocations: G }),
        }),
        Y = (function (e) {
            let { user: t, guildId: n, color: l, onAction: i, location: o = d.A.CONTEXT_MENU, appContext: a } = e,
                s = ev.useExperiment({ location: o }, { autoTrackExposure: !0 }).enabled,
                u = (0, p.bG)([b.default], () => b.default.getId() === t.id);
            return !s || u || t.isNonUserBot()
                ? null
                : (0, r.jsx)(c.Dr, {
                      id: "report-user",
                      color: l,
                      label: D.intl.string(D.t.A1MM3D),
                      action: () => (0, eN.NW)(t, n === N.ME ? void 0 : n, i, a),
                  });
        })({
            user: i,
            guildId: g,
            location: F,
            appContext: h,
            color: "danger",
            onAction: () => U({ action: "REPORT", analyticsLocations: G }),
        }),
        Q = (function (e) {
            let { user: t, guildId: n, color: l, onAction: i, appContext: o } = e,
                a = (0, p.bG)([eO.Ay], () => eO.Ay.get("iar_testing")),
                s = (0, p.bG)([m.default], () => m.default.getCurrentUser());
            return null != s && (t.id === s.id || t.isNonUserBot() || !s.isStaff() || !a)
                ? null
                : (0, r.jsx)(c.Dr, {
                      id: "staff-test-report-user",
                      color: l,
                      label: "[STAFF] Test Profile Report",
                      action: () => (0, eN.RR)(t, n === N.ME ? void 0 : n, i, o),
                  });
        })({
            user: i,
            guildId: g,
            location: F,
            appContext: h,
            color: "danger",
            onAction: () => U({ action: "REPORT", analyticsLocations: G }),
        }),
        H = (function (e) {
            let { user: t, guildId: n, onSuccess: l } = e,
                i = (0, E.Ay)(t.id, n ?? void 0),
                a = ex.Q_.useSetting(),
                { tidaWebformEnabled: s } = em.A.useExperiment(
                    { location: "useCopyUserInfoItem" },
                    { autoTrackExposure: !1 },
                ),
                u = (0, eg.g)("useCopyUserInfoItem"),
                d = (0, eE.A)({
                    id: t.id,
                    label: D.intl.string(D.t["/AXYnE"]),
                    onSuccess: () => l?.(eb.pt.COPY_USER_ID),
                }),
                f = o.useMemo(() => (null == i ? null : i.getBannerURL({ canAnimate: !0, size: N.XAf })), [i]),
                p = o.useCallback(() => {
                    ((0, eI.C)(t.id), l?.(eb.pt.COPY_USER_ID));
                }, [t.id, l]),
                R = o.useCallback(() => {
                    ((0, eI.C)((0, eA.A)(t.id)), l?.(eb.pt.COPY_PROFILE_LINK));
                }, [t.id, l]),
                m = o.useCallback(() => {
                    let e = t.getAvatarURL(n, N.XAf, !0);
                    (eR()(null != e, "cannot copy null avatar URL"), (0, eI.C)(e), l?.(eb.pt.COPY_AVATAR_IMAGE_LINK));
                }, [t, n, l]),
                g = o.useCallback(() => {
                    (eR()(null != f, "cannot copy null banner URL"), (0, eI.C)(f), l?.(eb.pt.COPY_BANNER_IMAGE_LINK));
                }, [f, l]);
            return !__OVERLAY__ && a && eI.p5 && null != t.id
                ? s
                    ? (0, r.jsxs)(c.Dr, {
                          id: "copy-user-info",
                          label: D.intl.string(D.t.QvQeLv),
                          children: [
                              (0, r.jsx)(c.Dr, { id: "copy-user-id", label: D.intl.string(D.t["/AXYnE"]), action: p }),
                              u &&
                                  (0, r.jsx)(c.Dr, {
                                      id: "copy-user-profile-link",
                                      label: D.intl.string(D.t["E+rSVy"]),
                                      action: R,
                                  }),
                              (null != t.avatar || t.hasAvatarForGuild(n)) &&
                                  (0, r.jsx)(c.Dr, {
                                      id: "copy-user-avatar-link",
                                      label: D.intl.string(D.t.gERDvM),
                                      action: m,
                                  }),
                              null != f &&
                                  (0, r.jsx)(c.Dr, {
                                      id: "copy-user-banner-link",
                                      label: D.intl.string(D.t.hsNv0R),
                                      action: g,
                                  }),
                          ],
                      })
                    : d
                : null;
        })({ user: i, guildId: g, onSuccess: (e) => U({ action: e, analyticsLocations: G }) }),
        z = (function (e, t, n) {
            let l = (0, p.bG)([b.default], () => b.default.getId() === e.id),
                i = x(e.id, t),
                { analyticsLocations: o } = (0, f.Ay)(d.A.USER_PROFILE_OVERFLOW_MENU),
                a = (0, p.bG)(
                    [I.A],
                    () =>
                        i.map((e) => {
                            let t = I.A.getProductsForSku(e)
                                ?.flatMap((e) => e.skus)
                                .find((t) => t.id === e);
                            return {
                                skuId: e,
                                isShoppableItem:
                                    null != t &&
                                    ("function" != typeof t.isAvailable
                                        ? (P.A.captureMessage("isShoppableCollectibleSku: sku missing isAvailable()", {
                                              extra: { skuId: t.id, skuType: t.type },
                                          }),
                                          !1)
                                        : t.isAvailable() && t.tenantMetadata?.collectibles?.sourceType === C.SHOP),
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
                      label: D.intl.string(D.t.xNdRDO),
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
                                                (0, _.B)({
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
        })(i, g, L),
        X = [
            [
                A,
                (0, eC.A)({ user: i, location: "UserProfileOverflowMenuButton" }),
                z,
                B,
                (function (e) {
                    let { user: t } = e,
                        l = (function (e) {
                            let { user: t, exposureLocation: n } = e,
                                l = ec.useConfig({ location: n }),
                                i = (0, ed.m)(),
                                r = (0, p.bG)([eu.A], () => eu.A.getReferralsRemaining()),
                                o = (0, p.bG)([b.default], () => b.default.getId() === t.id),
                                a = (0, p.bG)([es.A], () => es.A.isBlockedOrIgnored(t.id)),
                                s = (0, p.bG)([ea.A], () => {
                                    let e = ea.A.getUserAffinity(t.id);
                                    return null != e && null != e.communicationRank && e.communicationRank <= 20;
                                });
                            return !!l && !o && !0 !== t.bot && !a && !!i && null != r && !(r <= 0) && !!s && !0;
                        })({ user: t, exposureLocation: "user_profile_overflow_menu" }),
                        { analyticsLocations: i } = (0, f.Ay)(d.A.USER_PROFILE_OVERFLOW_MENU),
                        a = o.useCallback(() => {
                            (O.default.track(N.HAw.REFERRAL_PROGRAM_SHARE_MODAL_CTA_CLICKED, { location_stack: i }),
                                (0, eo.openModalLazy)(async () => {
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
                              label: D.intl.string(D.t.JSSBzo),
                              iconLeft: J.t,
                              leadingAccessory: { type: "icon", icon: J.t, size: "sm" },
                              action: a,
                          })
                        : null;
                })({ user: i }),
            ],
            [q, K, Y, Q],
            [H],
        ];
    return X.every((e) => e.every((e) => null == e))
        ? null
        : (0, r.jsx)(f.f5, {
              value: G,
              children: (0, r.jsx)(s.Y, {
                  targetElementRef: S,
                  shouldShow: M,
                  onRequestOpen: k,
                  onRequestClose: T,
                  renderPopout: (e) => {
                      let { closePopout: t } = e;
                      return (0, r.jsx)(u.W, {
                          "data-menu-migrated-auto": !0,
                          navId: "user-profile-overflow-menu",
                          onSelect: void 0,
                          onClose: t,
                          "aria-label": D.intl.string(D.t.AXIHpV),
                          children: X.map((e, t) => (0, r.jsx)(c.rX, { children: e.map((e) => e) }, t)),
                      });
                  },
                  children: (e) => y({ ...e, ...W }),
              }),
          });
}
function ey(e) {
    let t = o.useRef(null);
    return (0, r.jsx)(Q, {
        user: e.user,
        guildId: e.guildId,
        location: "UserProfileOverflowMenuIconButton",
        children: (0, r.jsx)(eT, {
            ...e,
            popoutTargetRef: t,
            children: (e) => (0, r.jsx)(eS.q3, { buttonRef: t, ...e }),
        }),
    });
}
function eL(e) {
    let t = o.useRef(null),
        { themeType: n } = (0, eP.E)(),
        l = n === eM.d.POPOUT,
        { isVisible: i, markAsDismissed: a } = (function (e) {
            let [t, n] = (0, z.kn)(e ? [H.M.DISPLAY_NAME_STYLES_TRY_COACHMARK] : []);
            return { isVisible: null != t, markAsDismissed: n };
        })("off" !== o.useContext(q) && l),
        [s, u] = o.useState(!1),
        c = o.useCallback(() => {
            (u(!0), a(et.i.TAKE_ACTION));
        }, [a]);
    return (0, r.jsxs)("div", {
        className: ek.g2,
        children: [
            (0, r.jsx)("div", {
                className: i ? ek.t8 : void 0,
                children: (0, r.jsx)(eT, {
                    ...e,
                    popoutTargetRef: t,
                    shouldShow: l ? s : void 0,
                    onRequestOpen: c,
                    onRequestClose: () => u(!1),
                    children: (e) => (0, r.jsx)(eS.br, { buttonRef: t, ...e }),
                }),
            }),
            i &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)("div", { className: ek.Vx, "aria-hidden": !0 }),
                        (0, r.jsx)(er, { markAsDismissed: a, targetElementRef: t, onDismissibleContentClick: c }),
                    ],
                }),
        ],
    });
}
function eU(e) {
    return (0, r.jsx)(Q, {
        user: e.user,
        guildId: e.guildId,
        location: "UserProfileOverflowMenuBannerButton",
        children: (0, r.jsx)(eL, { ...e }),
    });
}
