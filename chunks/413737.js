n.d(t, { Zt: () => eC, yo: () => eS });
var l,
    i,
    r = n(477900),
    s = n(582128),
    o = n(365199),
    a = n(265872),
    u = n(980707),
    c = n(477782),
    d = n(793574),
    f = n(688810),
    p = n(17928),
    E = n(540737),
    R = n(999291),
    g = n(287809),
    A = n(259464),
    m = n(449582);
function x(e, t) {
    let n = (0, p.bG)([g.default], () => g.default.getUser(e), [e]),
        l = (0, R.Ay)(e, t),
        i = (0, A.Z)(n, t),
        r = (0, m.r)({ user: n, guildId: t }),
        o = i?.skuId,
        a = r?.skuId,
        u = l?.profileEffect?.skuId,
        c = l?.profileFrame?.skuId;
    return s.useMemo(() => [o, a, u, c].filter((e) => null != e), [o, a, u, c]);
}
var I = n(630821),
    _ = n(821925),
    b = n(280450),
    O = n(722258),
    h = n(575593),
    N = n(174459),
    v = n(652215),
    j = (((l = {}).ROW_VIEWED = "row_viewed"), (l.ROW_CLICKED = "row_clicked"), l);
function C(e) {
    let { action: t, skuId: n, productType: l, isDisabled: i, source: r } = e;
    N.default.track(v.HAw.SHOP_THIS_LOOK_ROW_ACTION, {
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
var P =
        (((i = {})[(i.SHOP = 1)] = "SHOP"),
        (i[(i.QUEST = 2)] = "QUEST"),
        (i[(i.PREMIUM_PROMOTION = 3)] = "PREMIUM_PROMOTION"),
        (i[(i.REWARD = 4)] = "REWARD"),
        (i[(i.INTERNAL = 5)] = "INTERNAL"),
        i),
    S = n(38405),
    M = n(503698),
    T = n.n(M),
    k = n(834730),
    y = n(682301),
    L = n(623373),
    D = n(536572),
    U = n(14702),
    G = n(105292),
    F = n(728500);
function w() {
    return (0, r.jsxs)("div", {
        className: F.nM,
        "aria-hidden": !0,
        children: [
            (0, r.jsx)("div", { className: F.VH, children: (0, r.jsx)("div", { className: F.Qc }) }),
            (0, r.jsxs)("div", {
                className: T()(F.Qq, F.Um),
                children: [(0, r.jsx)("div", { className: F.Iz }), (0, r.jsx)("div", { className: F.wS })],
            }),
        ],
    });
}
function V(e) {
    let { skuId: t, disabled: n = !1, source: l } = e,
        { product: i, state: o } = (0, y.IK)(t, { needsCategory: !1, shouldFetchProduct: !1 }),
        a = (0, p.bG)(
            [_.A],
            () =>
                _.A.getProductsForSku(t)
                    ?.flatMap((e) => e.skus)
                    .find((e) => e.id === t),
            [t],
        ),
        u = s.useRef(!1);
    if (
        (s.useEffect(() => {
            null == i ||
                u.current ||
                ((u.current = !0),
                C({ action: j.ROW_VIEWED, skuId: t, productType: (0, L.YW)(i) ?? void 0, isDisabled: n, source: l }));
        }, [i, t, n, l]),
        "loading" === o)
    )
        return (0, r.jsx)(w, {});
    if (null == i) return null;
    let c = (0, L.YW)(i),
        d =
            null != c
                ? (function (e) {
                      switch (e) {
                          case h.R.AVATAR_DECORATION:
                              return G.intl.string(G.t["7v0T9P"]);
                          case h.R.PROFILE_EFFECT:
                              return G.intl.string(G.t.wR5wOo);
                          case h.R.NAMEPLATE:
                              return G.intl.string(G.t.x5CoXR);
                          case h.R.PROFILE_FRAME:
                              return G.intl.string(G.t.GWrZOd);
                          default:
                              return;
                      }
                  })(c)
                : void 0;
    return (0, r.jsxs)("div", {
        className: T()(F.nM, { [F.r9]: n }),
        children: [
            (0, r.jsx)("div", { className: F.VH, children: (0, r.jsx)(U.O, { product: i, sku: a }) }),
            (0, r.jsxs)("div", {
                className: F.Qq,
                children: [
                    (0, r.jsx)(k.E, { variant: "text-sm/medium", color: "text-default", children: (0, D.VG)(i) }),
                    null != d && (0, r.jsx)(k.E, { variant: "text-xs/normal", color: "text-subtle", children: d }),
                ],
            }),
        ],
    });
}
var W = n(872859);
function K(e, t) {
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
var Q = n(708645),
    B = n(554146),
    q = n(131607),
    Y = n(43105),
    H = n(844222),
    z = n(403581),
    X = n(626584),
    $ = n(531685),
    Z = n(49999),
    J = n(78294);
let ee = new X.A("TryDisplayNameStyleMarketingPopover");
function et(e) {
    let { markAsDismissed: t, targetElementRef: n, onDismissibleContentClick: l } = e,
        i = s.useRef(null),
        o = (0, p.bG)([$.A], () => $.A.isFocused()),
        { reducedMotion: a } = s.useContext(H.C);
    return (
        s.useEffect(() => {
            null != i.current && (!a.enabled && o ? i.current.play().catch(ee.error) : i.current.pause());
        }, [o, a.enabled]),
        (0, r.jsx)(Y.A, {
            graphic: { type: "video", ref: i, src: J.A, aspectRatio: "21/9", loop: !0 },
            gradientColor: "nitro-pink",
            title: G.intl.string(W.default.t8z5gn),
            size: "lg",
            body: G.intl.string(W.default.ajHWbZ),
            position: "right",
            alignmentStrategy: "edge",
            align: "top",
            caretConfig: { align: "start" },
            targetElementRef: n,
            onRequestClose: () => t(Z.i.USER_DISMISS),
            actions: [{ text: G.intl.string(W.default["D7+kY/"]), variant: "primary", icon: z.t, onClick: l }],
        })
    );
}
var en = n(192308);
let el = (0, n(945810).mj)({
    name: "2026-09-referral-profile-contextual-menu-upsell",
    kind: "user",
    defaultConfig: !1,
    variations: { 0: !1, 1: !0 },
});
var ei = n(834708),
    er = n(154486),
    es = n(239211),
    eo = n(284009),
    ea = n.n(eo),
    eu = n(50268),
    ec = n(486503),
    ed = n(342053),
    ef = n(640794),
    ep = n(253932),
    eE = n(957565),
    eR = n(518477),
    eg = n(399476),
    eA = n(889460),
    em = n(865116),
    ex = n(928658);
let eI = (0, n(600975).C)({
    kind: "user",
    id: "2023-09_iar_user_reporting",
    label: "Safety Experience IAR User Reporting",
    defaultConfig: { enabled: !1 },
    treatments: [{ id: 1, label: "Enabled", config: { enabled: !0 } }],
});
var e_ = n(183555),
    eb = n(254384),
    eO = n(939496),
    eh = n(993401),
    eN = n(996988),
    ev = n(207566);
function ej(e) {
    var t;
    let l,
        {
            user: i,
            guildId: A,
            viewProfileItem: m,
            appContext: h,
            popoutTargetRef: M,
            shouldShow: T,
            onRequestOpen: k,
            onRequestClose: y,
            children: L,
        } = e,
        { themeType: D } = (0, eO.E)(),
        { trackUserProfileAction: U } = (0, e_.NJ)(),
        { analyticsLocations: F, newestAnalyticsLocation: w } = (0, f.Ay)(d.A.USER_PROFILE_OVERFLOW_MENU);
    ((t = i.id),
        (l = x(t, A)),
        s.useEffect(() => {
            0 !== l.length && (0, E.tu)({ skuIds: l });
        }, [!0, l]));
    let Q = {
            action: eR.pt.PRESS_OPTIONS,
            icon: o.MoreHorizontalIcon,
            tooltipText: G.intl.string(G.t["UKOtz+"]),
            "aria-label": G.intl.string(G.t["UKOtz+"]),
        },
        B = (0, eA.A)({
            user: i,
            guildId: A,
            onAction: () => U({ action: "PRESS_INVITE_TO_SERVER", analyticsLocations: F }),
        }),
        q = (0, es.A)({
            user: i,
            guildId: A,
            location: w,
            appContext: h,
            onBlock: () => U({ action: "BLOCK", analyticsLocations: F }),
            onIgnore: () => U({ action: "IGNORE", analyticsLocations: F }),
            onUnblock: () => U({ action: "UNBLOCK", analyticsLocations: F }),
        }),
        Y = (0, eg.A)({
            user: i,
            guildId: A,
            location: w,
            appContext: h,
            onBlock: () => U({ action: "BLOCK", analyticsLocations: F }),
            onIgnore: () => U({ action: "IGNORE", analyticsLocations: F }),
            onUnignore: () => U({ action: "UNIGNORE", analyticsLocations: F }),
        }),
        H = (function (e) {
            let { user: t, guildId: n, color: l, onAction: i, location: s = d.A.CONTEXT_MENU, appContext: o } = e,
                a = eI.useExperiment({ location: s }, { autoTrackExposure: !0 }).enabled,
                u = (0, p.bG)([b.default], () => b.default.getId() === t.id);
            return !a || u || t.isNonUserBot()
                ? null
                : (0, r.jsx)(c.Dr, {
                      id: "report-user",
                      color: l,
                      label: G.intl.string(G.t.A1MM3D),
                      action: () => (0, ex.NW)(t, n === v.ME ? void 0 : n, i, o),
                  });
        })({
            user: i,
            guildId: A,
            location: w,
            appContext: h,
            color: "danger",
            onAction: () => U({ action: "REPORT", analyticsLocations: F }),
        }),
        X = (function (e) {
            let { user: t, guildId: n, color: l, onAction: i, appContext: s } = e,
                o = (0, p.bG)([em.Ay], () => em.Ay.get("iar_testing")),
                a = (0, p.bG)([g.default], () => g.default.getCurrentUser());
            return null != a && (t.id === a.id || t.isNonUserBot() || !a.isStaff() || !o)
                ? null
                : (0, r.jsx)(c.Dr, {
                      id: "staff-test-report-user",
                      color: l,
                      label: "[STAFF] Test Profile Report",
                      action: () => (0, ex.RR)(t, n === v.ME ? void 0 : n, i, s),
                  });
        })({
            user: i,
            guildId: A,
            location: w,
            appContext: h,
            color: "danger",
            onAction: () => U({ action: "REPORT", analyticsLocations: F }),
        }),
        $ = (function (e) {
            let { user: t, guildId: n, onSuccess: l } = e,
                i = (0, R.Ay)(t.id, n ?? void 0),
                o = ep.Q_.useSetting(),
                { tidaWebformEnabled: a } = ec.A.useExperiment(
                    { location: "useCopyUserInfoItem" },
                    { autoTrackExposure: !1 },
                ),
                u = (0, ed.g)("useCopyUserInfoItem"),
                d = (0, eu.A)({
                    id: t.id,
                    label: G.intl.string(G.t["/AXYnE"]),
                    onSuccess: () => l?.(eR.pt.COPY_USER_ID),
                }),
                f = s.useMemo(() => (null == i ? null : i.getBannerURL({ canAnimate: !0, size: v.XAf })), [i]),
                p = s.useCallback(() => {
                    ((0, eE.C)(t.id), l?.(eR.pt.COPY_USER_ID));
                }, [t.id, l]),
                E = s.useCallback(() => {
                    ((0, eE.C)((0, ef.A)(t.id)), l?.(eR.pt.COPY_PROFILE_LINK));
                }, [t.id, l]),
                g = s.useCallback(() => {
                    let e = t.getAvatarURL(n, v.XAf, !0);
                    (ea()(null != e, "cannot copy null avatar URL"), (0, eE.C)(e), l?.(eR.pt.COPY_AVATAR_IMAGE_LINK));
                }, [t, n, l]),
                A = s.useCallback(() => {
                    (ea()(null != f, "cannot copy null banner URL"), (0, eE.C)(f), l?.(eR.pt.COPY_BANNER_IMAGE_LINK));
                }, [f, l]);
            return !__OVERLAY__ && o && eE.p5 && null != t.id
                ? a
                    ? (0, r.jsxs)(c.Dr, {
                          id: "copy-user-info",
                          label: G.intl.string(G.t.QvQeLv),
                          children: [
                              (0, r.jsx)(c.Dr, { id: "copy-user-id", label: G.intl.string(G.t["/AXYnE"]), action: p }),
                              u &&
                                  (0, r.jsx)(c.Dr, {
                                      id: "copy-user-profile-link",
                                      label: G.intl.string(G.t["E+rSVy"]),
                                      action: E,
                                  }),
                              (null != t.avatar || t.hasAvatarForGuild(n)) &&
                                  (0, r.jsx)(c.Dr, {
                                      id: "copy-user-avatar-link",
                                      label: G.intl.string(G.t.gERDvM),
                                      action: g,
                                  }),
                              null != f &&
                                  (0, r.jsx)(c.Dr, {
                                      id: "copy-user-banner-link",
                                      label: G.intl.string(G.t.hsNv0R),
                                      action: A,
                                  }),
                          ],
                      })
                    : d
                : null;
        })({ user: i, guildId: A, onSuccess: (e) => U({ action: e, analyticsLocations: F }) }),
        Z = (function (e, t, n) {
            let l = (0, p.bG)([b.default], () => b.default.getId() === e.id),
                i = x(e.id, t),
                { analyticsLocations: s } = (0, f.Ay)(d.A.USER_PROFILE_OVERFLOW_MENU),
                o = (0, I.n8)(e, t),
                a = (0, p.bG)(
                    [_.A],
                    () =>
                        i.map((e) => {
                            let t = _.A.getProductsForSku(e)
                                ?.flatMap((e) => e.skus)
                                .find((t) => t.id === e);
                            return {
                                skuId: e,
                                isShoppableItem:
                                    null != t &&
                                    ("function" != typeof t.isAvailable
                                        ? (S.A.captureMessage("isShoppableCollectibleSku: sku missing isAvailable()", {
                                              extra: { skuId: t.id, skuType: t.type },
                                          }),
                                          !1)
                                        : t.isAvailable() && t.tenantMetadata?.collectibles?.sourceType === P.SHOP),
                                productType: t?.tenantMetadata?.collectibles?.type,
                            };
                        }),
                    [i],
                    K,
                ),
                u = i.length > 0 || null != o;
            if (l || !u) return null;
            let E = null != o ? G.intl.string(W.default["2PKrQO"]) : G.intl.string(G.t.xNdRDO);
            return (0, r.jsxs)(c.Dr, {
                id: "shop-this-look",
                label: E,
                children: [
                    o,
                    (0, r.jsx)(c.rX, {
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
                                        return (0, r.jsx)(V, { skuId: t, disabled: l, source: n });
                                    },
                                    action: l
                                        ? () => {
                                              (C({
                                                  action: j.ROW_CLICKED,
                                                  skuId: t,
                                                  productType: i,
                                                  isDisabled: !1,
                                                  source: n,
                                              }),
                                                  (0, O.B)({
                                                      skuId: t,
                                                      analyticsLocations: s,
                                                      analyticsSource: d.A.USER_PROFILE_OVERFLOW_MENU,
                                                  }));
                                          }
                                        : void 0,
                                },
                                t,
                            );
                        }),
                    }),
                ],
            });
        })(i, A, D),
        J = (0, I.p7)(i, A),
        ee = [
            [
                m,
                (0, eb.A)({ user: i, location: "UserProfileOverflowMenuButton" }),
                J,
                Z,
                B,
                (function (e) {
                    let { user: t } = e,
                        l = el.useConfig({ location: "user_profile_overflow_menu" }),
                        i = (0, ei.d)(t),
                        o = (0, er.p)(l && i ? t.id : null),
                        { analyticsLocations: a } = (0, f.Ay)(d.A.USER_PROFILE_OVERFLOW_MENU),
                        u = s.useCallback(() => {
                            (N.default.track(v.HAw.REFERRAL_PROGRAM_SHARE_MODAL_CTA_CLICKED, { location_stack: a }),
                                (0, en.openModalLazy)(async () => {
                                    let { default: e } = await Promise.all([
                                        n.e("768071"),
                                        n.e("492599"),
                                        n.e("868214"),
                                        n.e("661814"),
                                        n.e("733314"),
                                        n.e("819305"),
                                        n.e("143883"),
                                        n.e("313699"),
                                    ]).then(n.bind(n, 536110));
                                    return (n) =>
                                        (0, r.jsx)(e, {
                                            ...n,
                                            recipient: t,
                                            sourceAnalyticsLocation: d.A.USER_PROFILE_OVERFLOW_MENU,
                                        });
                                }));
                        }, [a, t]);
                    return l && i && o
                        ? (0, r.jsx)(c.Dr, {
                              id: "referral-profile-share-nitro",
                              label: G.intl.string(G.t.JSSBzo),
                              iconLeft: z.t,
                              leadingAccessory: { type: "icon", icon: z.t, size: "sm" },
                              action: u,
                          })
                        : null;
                })({ user: i }),
            ],
            [Y, q, H, X],
            [$],
        ];
    return ee.every((e) => e.every((e) => null == e))
        ? null
        : (0, r.jsx)(f.f5, {
              value: F,
              children: (0, r.jsx)(a.Y, {
                  targetElementRef: M,
                  shouldShow: T,
                  onRequestOpen: k,
                  onRequestClose: y,
                  renderPopout: (e) => {
                      let { closePopout: t } = e;
                      return (0, r.jsx)(u.W, {
                          "data-menu-migrated-auto": !0,
                          navId: "user-profile-overflow-menu",
                          onSelect: void 0,
                          onClose: t,
                          "aria-label": G.intl.string(G.t.AXIHpV),
                          children: ee.map((e, t) => (0, r.jsx)(c.rX, { children: e.map((e) => e) }, t)),
                      });
                  },
                  children: (e) => L({ ...e, ...Q }),
              }),
          });
}
function eC(e) {
    let t = s.useRef(null);
    return (0, r.jsx)(Q.ZQ, {
        user: e.user,
        guildId: e.guildId,
        location: "UserProfileOverflowMenuIconButton",
        children: (0, r.jsx)(ej, {
            ...e,
            popoutTargetRef: t,
            children: (e) => (0, r.jsx)(eh.q3, { buttonRef: t, ...e }),
        }),
    });
}
function eP(e) {
    let t = s.useRef(null),
        { themeType: n } = (0, eO.E)(),
        l = n === eN.d.POPOUT,
        { isVisible: i, markAsDismissed: o } = (function (e) {
            let [t, n] = (0, q.kn)(e ? [B.M.DISPLAY_NAME_STYLES_TRY_COACHMARK] : []);
            return { isVisible: null != t, markAsDismissed: n };
        })((0, Q.sn)() && l),
        [a, u] = s.useState(!1),
        c = s.useCallback(() => {
            (u(!0), o(Z.i.TAKE_ACTION));
        }, [o]);
    return (0, r.jsxs)("div", {
        className: ev.g2,
        children: [
            (0, r.jsx)("div", {
                className: i ? ev.t8 : void 0,
                children: (0, r.jsx)(ej, {
                    ...e,
                    popoutTargetRef: t,
                    shouldShow: l ? a : void 0,
                    onRequestOpen: c,
                    onRequestClose: () => u(!1),
                    children: (e) => (0, r.jsx)(eh.br, { buttonRef: t, ...e }),
                }),
            }),
            i &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)("div", { className: ev.Vx, "aria-hidden": !0 }),
                        (0, r.jsx)(et, { markAsDismissed: o, targetElementRef: t, onDismissibleContentClick: c }),
                    ],
                }),
        ],
    });
}
function eS(e) {
    return (0, r.jsx)(Q.ZQ, {
        user: e.user,
        guildId: e.guildId,
        location: "UserProfileOverflowMenuBannerButton",
        children: (0, r.jsx)(eP, { ...e }),
    });
}
