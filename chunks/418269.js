n.d(t, { yo: () => eD, Zt: () => eG });
var l,
    i,
    r = n(477900),
    a = n(582128),
    o = n(365199),
    s = n(265872),
    u = n(165862),
    c = n(477782),
    d = n(793574),
    f = n(688810),
    A = n(855986),
    E = n(540737),
    p = n(527212),
    g = n(287809),
    I = n(259464),
    R = n(449582);
function m(e, t) {
    let n = (0, A.bG)([g.default], () => g.default.getUser(e), [e]),
        l = (0, p.Ay)(e, t),
        i = (0, I.Z)(n, t),
        r = (0, R.r)({ user: n, guildId: t }),
        o = i?.skuId,
        s = r?.skuId,
        u = l?.profileEffect?.skuId,
        c = l?.profileFrame?.skuId;
    return a.useMemo(() => [o, s, u, c].filter((e) => null != e), [o, s, u, c]);
}
var _ = n(414636),
    b = n(821925),
    N = n(46653),
    O = n(722258),
    x = n(575593),
    h = n(129230),
    v = n(652215),
    j = (((l = {}).ROW_VIEWED = "row_viewed"), (l.ROW_CLICKED = "row_clicked"), l);
function S(e) {
    let { action: t, skuId: n, productType: l, isDisabled: i, source: r } = e;
    h.default.track(v.HAw.SHOP_THIS_LOOK_ROW_ACTION, {
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
    T = n(856383),
    y = n(503698),
    M = n.n(y),
    P = n(834730),
    k = n(682301),
    U = n(623373),
    G = n(536572),
    L = n(14702),
    D = n(792996),
    F = n(728500);
function w() {
    return (0, r.jsxs)("div", {
        className: F.nM,
        "aria-hidden": !0,
        children: [
            (0, r.jsx)("div", { className: F.VH, children: (0, r.jsx)("div", { className: F.Qc }) }),
            (0, r.jsxs)("div", {
                className: M()(F.Qq, F.Um),
                children: [(0, r.jsx)("div", { className: F.Iz }), (0, r.jsx)("div", { className: F.wS })],
            }),
        ],
    });
}
function V(e) {
    let { skuId: t, disabled: n = !1, source: l } = e,
        { product: i, state: o } = (0, k.IK)(t, { needsCategory: !1, shouldFetchProduct: !1 }),
        s = (0, A.bG)(
            [b.A],
            () =>
                b.A.getProductsForSku(t)
                    ?.flatMap((e) => e.skus)
                    .find((e) => e.id === t),
            [t],
        ),
        u = a.useRef(!1);
    if (
        (a.useEffect(() => {
            null == i ||
                u.current ||
                ((u.current = !0),
                S({ action: j.ROW_VIEWED, skuId: t, productType: (0, U.YW)(i) ?? void 0, isDisabled: n, source: l }));
        }, [i, t, n, l]),
        "loading" === o)
    )
        return (0, r.jsx)(w, {});
    if (null == i) return null;
    let c = (0, U.YW)(i),
        d =
            null != c
                ? (function (e) {
                      switch (e) {
                          case x.R.AVATAR_DECORATION:
                              return D.intl.string(D.t["7v0T9P"]);
                          case x.R.PROFILE_EFFECT:
                              return D.intl.string(D.t.wR5wOo);
                          case x.R.NAMEPLATE:
                              return D.intl.string(D.t.x5CoXR);
                          case x.R.PROFILE_FRAME:
                              return D.intl.string(D.t.GWrZOd);
                          default:
                              return;
                      }
                  })(c)
                : void 0;
    return (0, r.jsxs)("div", {
        className: M()(F.nM, { [F.r9]: n }),
        children: [
            (0, r.jsx)("div", { className: F.VH, children: (0, r.jsx)(L.O, { product: i, sku: s }) }),
            (0, r.jsxs)("div", {
                className: F.Qq,
                children: [
                    (0, r.jsx)(P.E, { variant: "body-sm/medium", color: "text-default", children: (0, G.VG)(i) }),
                    null != d && (0, r.jsx)(P.E, { variant: "body-xs/normal", color: "text-subtle", children: d }),
                ],
            }),
        ],
    });
}
var W = n(842671);
function B(e, t) {
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
var z = n(708645),
    K = n(554146),
    Q = n(263775),
    q = n(43105),
    Y = n(844222),
    H = n(403581),
    Z = n(626584),
    $ = n(531685),
    X = n(49999),
    J = n(78294);
let ee = new Z.A("TryDisplayNameStyleMarketingPopover");
function et(e) {
    let { markAsDismissed: t, targetElementRef: n, onDismissibleContentClick: l } = e,
        i = a.useRef(null),
        o = (0, A.bG)([$.A], () => $.A.isFocused()),
        { reducedMotion: s } = a.useContext(Y.C);
    return (
        a.useEffect(() => {
            null != i.current && (!s.enabled && o ? i.current.play().catch(ee.error) : i.current.pause());
        }, [o, s.enabled]),
        (0, r.jsx)(q.A, {
            graphic: { type: "video", ref: i, src: J.A, aspectRatio: "21/9", loop: !0 },
            gradientColor: "nitro-pink",
            title: D.intl.string(W.default.t8z5gn),
            size: "lg",
            body: D.intl.string(W.default.ajHWbZ),
            position: "right",
            alignmentStrategy: "edge",
            align: "top",
            caretConfig: { align: "start" },
            targetElementRef: n,
            onRequestClose: () => t(X.i.USER_DISMISS),
            actions: [
                { text: D.intl.string(W.default["D7+kY/"]), variant: "primary", icon: H.NitroWheelIcon, onClick: l },
            ],
        })
    );
}
var en = n(570287),
    el = n(994500),
    ei = n(899360),
    er = n(242225),
    ea = n(931937),
    eo = n(149164),
    es = n(192308),
    eu = n(752222);
let ec = [],
    ed = (0, n(945810).mj)({
        name: "2026-09-referral-profile-contextual-menu-upsell",
        kind: "user",
        defaultConfig: !1,
        variations: { 0: !1, 1: !0 },
    });
var ef = n(834708),
    eA = n(154486),
    eE = n(239211),
    ep = n(284009),
    eg = n.n(ep),
    eI = n(50268),
    eR = n(207560),
    em = n(342053),
    e_ = n(640794),
    eb = n(253932),
    eN = n(957565),
    eO = n(518477),
    ex = n(399476),
    eh = n(889460),
    ev = n(865116),
    ej = n(928658);
let eS = (0, n(600975).C)({
    kind: "user",
    id: "2023-09_iar_user_reporting",
    label: "Safety Experience IAR User Reporting",
    defaultConfig: { enabled: !1 },
    treatments: [{ id: 1, label: "Enabled", config: { enabled: !0 } }],
});
var eC = n(183555),
    eT = n(256847),
    ey = n(939496),
    eM = n(993401),
    eP = n(996988),
    ek = n(207566);
function eU(e) {
    var t;
    let l,
        {
            user: i,
            guildId: I,
            viewProfileItem: R,
            appContext: x,
            popoutTargetRef: y,
            shouldShow: M,
            onRequestOpen: P,
            onRequestClose: k,
            children: U,
        } = e,
        { themeType: G } = (0, ey.E)(),
        { trackUserProfileAction: L } = (0, eC.NJ)(),
        { analyticsLocations: F, newestAnalyticsLocation: w } = (0, f.Ay)(d.A.USER_PROFILE_OVERFLOW_MENU);
    ((t = i.id),
        (l = m(t, I)),
        a.useEffect(() => {
            0 !== l.length && (0, E.tu)({ skuIds: l });
        }, [!0, l]));
    let z = {
            action: eO.pt.PRESS_OPTIONS,
            icon: o.MoreHorizontalIcon,
            tooltipText: D.intl.string(D.t["UKOtz+"]),
            "aria-label": D.intl.string(D.t["UKOtz+"]),
        },
        K = (0, eh.A)({
            user: i,
            guildId: I,
            onAction: () => L({ action: "PRESS_INVITE_TO_SERVER", analyticsLocations: F }),
        }),
        Q = (function (e) {
            let { user: t } = e,
                l = (0, ea.A)("user_profile_overflow_menu"),
                i = (0, A.bG)([g.default, el.A], () => (0, er.A)(t, g.default.getCurrentUser()?.id, el.A), [t]),
                a = (0, en.A)(t.id),
                o = l.length > 0 && i && a,
                { data: s } = (0, eo.s)(o ? l : ec);
            if (!o) return null;
            let u = (0, ei.m$)((0, ei.Ay)(s));
            return (0, r.jsx)(c.Dr, {
                id: "invite-to-linked-game-organization",
                label: D.intl.string(eu.default["wkSug+"]),
                subtext: u,
                disabled: null != u,
                action: () => {
                    var e;
                    return (
                        (e = t.id),
                        void (0, es.mM)(async () => {
                            let { default: t } = await Promise.all([
                                n.e(740775),
                                n.e(787139),
                                n.e(635864),
                                n.e(248988),
                                n.e(611281),
                            ]).then(n.bind(n, 53416));
                            return (n) => (0, r.jsx)(t, { userId: e, ...n });
                        })
                    );
                },
            });
        })({ user: i }),
        q = (0, eE.A)({
            user: i,
            guildId: I,
            location: w,
            appContext: x,
            onBlock: () => L({ action: "BLOCK", analyticsLocations: F }),
            onIgnore: () => L({ action: "IGNORE", analyticsLocations: F }),
            onUnblock: () => L({ action: "UNBLOCK", analyticsLocations: F }),
        }),
        Y = (0, ex.A)({
            user: i,
            guildId: I,
            location: w,
            appContext: x,
            onBlock: () => L({ action: "BLOCK", analyticsLocations: F }),
            onIgnore: () => L({ action: "IGNORE", analyticsLocations: F }),
            onUnignore: () => L({ action: "UNIGNORE", analyticsLocations: F }),
        }),
        Z = (function (e) {
            let { user: t, guildId: n, color: l, onAction: i, location: a = d.A.CONTEXT_MENU, appContext: o } = e,
                s = eS.useExperiment({ location: a }, { autoTrackExposure: !0 }).enabled,
                u = (0, A.bG)([N.default], () => N.default.getId() === t.id);
            return !s || u || t.isNonUserBot()
                ? null
                : (0, r.jsx)(c.Dr, {
                      id: "report-user",
                      color: l,
                      label: D.intl.string(D.t.A1MM3D),
                      action: () => (0, ej.NW)(t, n === v.ME ? void 0 : n, i, o),
                  });
        })({
            user: i,
            guildId: I,
            location: w,
            appContext: x,
            color: "danger",
            onAction: () => L({ action: "REPORT", analyticsLocations: F }),
        }),
        $ = (function (e) {
            let { user: t, guildId: n, color: l, onAction: i, appContext: a } = e,
                o = (0, A.bG)([ev.Ay], () => ev.Ay.get("iar_testing")),
                s = (0, A.bG)([g.default], () => g.default.getCurrentUser());
            return null != s && (t.id === s.id || t.isNonUserBot() || !s.isStaff() || !o)
                ? null
                : (0, r.jsx)(c.Dr, {
                      id: "staff-test-report-user",
                      color: l,
                      label: "[STAFF] Test Profile Report",
                      action: () => (0, ej.RR)(t, n === v.ME ? void 0 : n, i, a),
                  });
        })({
            user: i,
            guildId: I,
            location: w,
            appContext: x,
            color: "danger",
            onAction: () => L({ action: "REPORT", analyticsLocations: F }),
        }),
        X = (function (e) {
            let { user: t, guildId: n, onSuccess: l } = e,
                i = (0, p.Ay)(t.id, n ?? void 0),
                o = eb.Q_.useSetting(),
                s = (0, eR.lF)(),
                u = (0, em.g)("useCopyUserInfoItem"),
                d = (0, eI.A)({
                    id: t.id,
                    label: D.intl.string(D.t["/AXYnE"]),
                    onSuccess: () => l?.(eO.pt.COPY_USER_ID),
                }),
                f = a.useMemo(() => (null == i ? null : i.getBannerURL({ canAnimate: !0, size: 1024 })), [i]),
                A = a.useCallback(() => {
                    ((0, eN.C)(t.id), l?.(eO.pt.COPY_USER_ID));
                }, [t.id, l]),
                E = a.useCallback(() => {
                    ((0, eN.C)((0, e_.A)(t.id)), l?.(eO.pt.COPY_PROFILE_LINK));
                }, [t.id, l]),
                g = a.useCallback(() => {
                    let e = t.getAvatarURL(n, 1024, !0);
                    (eg()(null != e, "cannot copy null avatar URL"), (0, eN.C)(e), l?.(eO.pt.COPY_AVATAR_IMAGE_LINK));
                }, [t, n, l]),
                I = a.useCallback(() => {
                    (eg()(null != f, "cannot copy null banner URL"), (0, eN.C)(f), l?.(eO.pt.COPY_BANNER_IMAGE_LINK));
                }, [f, l]);
            return !__OVERLAY__ && o && eN.p5 && null != t.id
                ? s
                    ? (0, r.jsxs)(c.Dr, {
                          id: "copy-user-info",
                          label: D.intl.string(D.t.QvQeLv),
                          children: [
                              (0, r.jsx)(c.Dr, { id: "copy-user-id", label: D.intl.string(D.t["/AXYnE"]), action: A }),
                              u &&
                                  (0, r.jsx)(c.Dr, {
                                      id: "copy-user-profile-link",
                                      label: D.intl.string(D.t["E+rSVy"]),
                                      action: E,
                                  }),
                              (null != t.avatar || t.hasAvatarForGuild(n)) &&
                                  (0, r.jsx)(c.Dr, {
                                      id: "copy-user-avatar-link",
                                      label: D.intl.string(D.t.gERDvM),
                                      action: g,
                                  }),
                              null != f &&
                                  (0, r.jsx)(c.Dr, {
                                      id: "copy-user-banner-link",
                                      label: D.intl.string(D.t.hsNv0R),
                                      action: I,
                                  }),
                          ],
                      })
                    : d
                : null;
        })({ user: i, guildId: I, onSuccess: (e) => L({ action: e, analyticsLocations: F }) }),
        J = (function (e, t, n) {
            let l = (0, A.bG)([N.default], () => N.default.getId() === e.id),
                i = m(e.id, t),
                { analyticsLocations: a } = (0, f.Ay)(d.A.USER_PROFILE_OVERFLOW_MENU),
                o = (0, _.n8)(e, t),
                s = (0, A.bG)(
                    [b.A],
                    () =>
                        i.map((e) => {
                            let t = b.A.getProductsForSku(e)
                                ?.flatMap((e) => e.skus)
                                .find((t) => t.id === e);
                            return {
                                skuId: e,
                                isShoppableItem:
                                    null != t &&
                                    ("function" != typeof t.isAvailable
                                        ? (T.A.captureMessage("isShoppableCollectibleSku: sku missing isAvailable()", {
                                              extra: { skuId: t.id, skuType: t.type },
                                          }),
                                          !1)
                                        : t.isAvailable() && t.tenantMetadata?.collectibles?.sourceType === C.SHOP),
                                productType: t?.tenantMetadata?.collectibles?.type,
                            };
                        }),
                    [i],
                    B,
                ),
                u = i.length > 0 || null != o;
            if (l || !u) return null;
            let E = null != o ? D.intl.string(W.default["2PKrQO"]) : D.intl.string(D.t.xNdRDO);
            return (0, r.jsxs)(c.Dr, {
                id: "shop-this-look",
                label: E,
                children: [
                    o,
                    (0, r.jsx)(c.rX, {
                        children: s.map((e) => {
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
                                              (S({
                                                  action: j.ROW_CLICKED,
                                                  skuId: t,
                                                  productType: i,
                                                  isDisabled: !1,
                                                  source: n,
                                              }),
                                                  (0, O.B)({
                                                      skuId: t,
                                                      analyticsLocations: a,
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
        })(i, I, G),
        ee = (0, _.p7)(i, I),
        et = [
            [
                R,
                (0, eT.A)({ user: i, location: "UserProfileOverflowMenuButton" }),
                ee,
                J,
                K,
                Q,
                (function (e) {
                    let { user: t } = e,
                        l = ed.useConfig({ location: "user_profile_overflow_menu" }),
                        i = (0, ef.d)(t),
                        o = (0, eA.p)(l && i ? t.id : null),
                        { analyticsLocations: s } = (0, f.Ay)(d.A.USER_PROFILE_OVERFLOW_MENU),
                        u = a.useCallback(() => {
                            (h.default.track(v.HAw.REFERRAL_PROGRAM_SHARE_MODAL_CTA_CLICKED, { location_stack: s }),
                                (0, es.mM)(async () => {
                                    let { default: e } = await Promise.all([
                                        n.e(768071),
                                        n.e(492599),
                                        n.e(531741),
                                        n.e(465157),
                                        n.e(733314),
                                        n.e(819305),
                                        n.e(143883),
                                        n.e(313699),
                                    ]).then(n.bind(n, 536110));
                                    return (n) =>
                                        (0, r.jsx)(e, {
                                            ...n,
                                            recipient: t,
                                            sourceAnalyticsLocation: d.A.USER_PROFILE_OVERFLOW_MENU,
                                        });
                                }));
                        }, [s, t]);
                    return l && i && o
                        ? (0, r.jsx)(c.Dr, {
                              id: "referral-profile-share-nitro",
                              label: D.intl.string(D.t.JSSBzo),
                              iconLeft: H.NitroWheelIcon,
                              leadingAccessory: { type: "icon", icon: H.NitroWheelIcon, size: "sm" },
                              action: u,
                          })
                        : null;
                })({ user: i }),
            ],
            [Y, q, Z, $],
            [X],
        ];
    return et.every((e) => e.every((e) => null == e))
        ? null
        : (0, r.jsx)(f.f5, {
              value: F,
              children: (0, r.jsx)(s.Y, {
                  targetElementRef: y,
                  shouldShow: M,
                  onRequestOpen: P,
                  onRequestClose: k,
                  renderPopout: (e) => {
                      let { closePopout: t } = e;
                      return (0, r.jsx)(u.W, {
                          "data-menu-migrated-auto": !0,
                          navId: "user-profile-overflow-menu",
                          onSelect: void 0,
                          onClose: t,
                          "aria-label": D.intl.string(D.t.AXIHpV),
                          children: et.map((e, t) => (0, r.jsx)(c.rX, { children: e.map((e) => e) }, t)),
                      });
                  },
                  children: (e) => U({ ...e, ...z }),
              }),
          });
}
function eG(e) {
    let t = a.useRef(null);
    return (0, r.jsx)(z.ZQ, {
        user: e.user,
        guildId: e.guildId,
        location: "UserProfileOverflowMenuIconButton",
        children: (0, r.jsx)(eU, {
            ...e,
            popoutTargetRef: t,
            children: (e) => (0, r.jsx)(eM.q3, { buttonRef: t, ...e }),
        }),
    });
}
function eL(e) {
    let t = a.useRef(null),
        { themeType: n } = (0, ey.E)(),
        l = n === eP.d.POPOUT,
        { isVisible: i, markAsDismissed: o } = (function (e) {
            let [t, n] = (0, Q.kn)(e ? [K.M.DISPLAY_NAME_STYLES_TRY_COACHMARK] : []);
            return { isVisible: null != t, markAsDismissed: n };
        })((0, z.sn)() && l),
        [s, u] = a.useState(!1),
        c = a.useCallback(() => {
            (u(!0), o(X.i.TAKE_ACTION));
        }, [o]);
    return (0, r.jsxs)("div", {
        className: ek.g2,
        children: [
            (0, r.jsx)("div", {
                className: i ? ek.t8 : void 0,
                children: (0, r.jsx)(eU, {
                    ...e,
                    popoutTargetRef: t,
                    shouldShow: l ? s : void 0,
                    onRequestOpen: c,
                    onRequestClose: () => u(!1),
                    children: (e) => (0, r.jsx)(eM.br, { buttonRef: t, ...e }),
                }),
            }),
            i &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)("div", { className: ek.Vx, "aria-hidden": !0 }),
                        (0, r.jsx)(et, { markAsDismissed: o, targetElementRef: t, onDismissibleContentClick: c }),
                    ],
                }),
        ],
    });
}
function eD(e) {
    return (0, r.jsx)(z.ZQ, {
        user: e.user,
        guildId: e.guildId,
        location: "UserProfileOverflowMenuBannerButton",
        children: (0, r.jsx)(eL, { ...e }),
    });
}
