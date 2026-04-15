n.d(t, { V: () => $, Z: () => Z });
var i = n(627968),
    l = n(64700),
    a = n(835245),
    s = n(695095),
    r = n(158954),
    o = n(311907),
    c = n(793574),
    d = n(688810),
    u = n(362490),
    h = n(294323),
    m = n(201718),
    A = n(672385),
    g = n(633075),
    _ = n(622543),
    p = n(735321),
    f = n(657331),
    E = n(606758),
    C = n(605694),
    x = n(246356),
    S = n(332772),
    I = n(594832),
    T = n(631784),
    v = n(310209),
    N = n(961350),
    y = n(287809),
    b = n(954571),
    j = n(427262),
    R = n(871123),
    M = n(832163),
    L = n(453774),
    O = n(44724),
    D = n(84511),
    P = n(817176),
    k = n(129114),
    w = n(652215),
    U = n(360469),
    G = n(518477),
    F = n(985018),
    H = n(274647);
let B = `vc-gifting-${(0, a.A)()}`,
    V = Object.freeze([]);
function W(e) {
    let { "aria-labelledby": t, children: n } = e;
    return (0, i.jsx)("div", {
        onClick: (e) => e.stopPropagation(),
        children: (0, i.jsx)(x.A, { children: (0, i.jsx)(r.lGe, { "aria-labelledby": t, modal: !1, children: n }) }),
    });
}
function K(e) {
    let { application: t } = e;
    if (null == t) return null;
    let n = t.getIconURL(U.iu.SMALL);
    return (0, i.jsxs)(r.BJc, {
        direction: "horizontal",
        gap: 4,
        align: "center",
        children: [
            null != n && (0, i.jsx)("img", { className: H.In, src: n, alt: t.name }),
            (0, i.jsx)(r.EYj, { variant: "text-sm/normal", children: t.name }),
        ],
    });
}
function z(e) {
    let { user: t, isGift: n } = e,
        l = F.intl.string(F.t.kv4lSp),
        a = F.intl.string(F.t.vzZoSF);
    return (
        n &&
            ((l = null != t ? F.intl.format(F.t.YwV901, { username: j.Ay.getName(t) }) : F.intl.string(F.t.qCmNFr)),
            (a = F.intl.string(F.t.SSgrne))),
        (0, i.jsxs)(r.BJc, {
            direction: "vertical",
            gap: 4,
            children: [
                (0, i.jsx)(r.DZT, { id: B, variant: "text-md/normal", children: l }),
                (0, i.jsx)(r.EYj, { variant: "text-sm/medium", color: "text-subtle", children: a }),
            ],
        })
    );
}
function Y(e) {
    let { application: t, onClose: n } = e,
        a = t?.id,
        s = l.useCallback(() => {
            if (null != a) {
                let e = M.A.getGuildIdFromApplicationId(a);
                null != e && (0, O.X)({ guildId: e });
            }
        }, [a]),
        o = l.useCallback(() => {
            if (null != a) {
                let e = M.A.getGuildIdFromApplicationId(a);
                null != e && (n(), (0, O.default)({ guildId: e }));
            }
        }, [a, n]);
    return null == t
        ? null
        : (0, i.jsx)(r.$nd, {
              variant: "secondary",
              icon: r.I9m,
              iconPosition: "end",
              text: F.intl.format(F.t["HDT/rg"], { applicationName: t.name }),
              onClick: o,
              onMouseDown: s,
              fullWidth: !0,
          });
}
function J(e) {
    let { userId: t, applicationId: n, channel: i, numItems: a } = e,
        r = l.useMemo(() => [t], [t]),
        o = l.useMemo(() => (null != n ? [n] : []), [n]),
        {
            status: c,
            recommendations: d,
            skusToUserAndReason: u,
        } = (0, T.XQ)({ userIds: r, applicationIds: o, numItems: a }),
        h = "loading" === c || 0 === d.length,
        m = (0, s.A)(h ? V : d, q),
        A = l.useMemo(() => {
            let { hasWishlist: e, hasPopular: t } = (0, R.wH)(d, u, new Set(r));
            return e && t;
        }, [d, u, r]);
    return (
        l.useEffect(() => {
            0 !== d.length &&
                b.default.track(w.HAw.COMMERCE_SHOP_VC_GIFT_BUTTON_VIEWED, {
                    guild_id: i.guild_id,
                    channel_id: i.id,
                    sku_ids: d.map((e) => e.id),
                });
        }, [i.id, i.guild_id, d]),
        { status: c, recommendations: m, skusToUserAndReason: u, hasBothSources: A }
    );
}
function q(e, t) {
    return e.id === t.id;
}
function $(e) {
    let { userId: t, applicationId: n, channel: a, onClose: s } = e;
    (0, S.T)({ location: "social_layer_gifting_voice_panel" }), (0, m.P)(t);
    let { analyticsLocations: x } = (0, d.Ay)(c.A.SLAYER_STOREFRONT_VC_GIFTING_PANEL),
        T = (0, o.bG)([y.default], () => y.default.getUser(t)),
        b = l.useMemo(() => new g.R({ applicationId: n }), [n]),
        j = (0, o.bG)([_.A], () => _.A.getWidgets(t)?.find((e) => e instanceof g.R && e.applicationId === n)),
        R = (0, o.bG)([N.default], () => N.default.getId()),
        M = t === R,
        O = (function (e) {
            let { currentUserId: t, applicationId: n, location: a, onClose: s, isTargetingCurrentUser: o } = e,
                {
                    isLoading: m,
                    application: _,
                    applicationWidgetConfig: C,
                    hasApplicationWidgetOnUserProfile: x,
                } = (0, h.A)(t, n, a),
                { fetched: S, hasAlreadyLinked: I, canStartAuthorization: T, startAuthorization: v } = (0, u.RD)(_),
                { analyticsLocations: N } = (0, d.Ay)(c.A.SLAYER_STOREFRONT_VC_GIFTING_PANEL),
                y = l.useCallback(() => {
                    T && v({ analyticsLocations: N });
                }, [N, T, v]),
                b = l.useCallback(() => {
                    s(), (0, f.openUserProfileModal)({ userId: t, sourceAnalyticsLocations: N });
                    let e = new g.R({ applicationId: n });
                    (0, p.Y5)(e),
                        (0, A.un)({ action: "WIDGET_ADDED", ...e.getProfileEditAnalyticsOptions() }),
                        setTimeout(() => (0, E.XA)(G.jM.WIDGET_ADDED), 700);
                }, [N, n, t, s]);
            return m || !S || null == C
                ? null
                : !I && T
                  ? (0, i.jsx)("div", {
                        className: H.OQ,
                        children: (0, i.jsx)(r.EYj, {
                            variant: "text-xs/normal",
                            children: F.intl.format(o ? F.t.YWa8L2 : F.t.xxPgmT, {
                                icon: () => (0, i.jsx)(r.A5T, { className: H.Ku, size: "xs" }),
                                onClick: y,
                            }),
                        }),
                    })
                  : I && !x && null != _
                    ? (0, i.jsx)("div", {
                          className: H.OQ,
                          children: (0, i.jsx)(r.EYj, {
                              variant: "text-xs/normal",
                              children: F.intl.format(F.t.QuIwht, {
                                  icon: () => (0, i.jsx)(r.A5T, { className: H.Ku, size: "xs" }),
                                  applicationName: _.name,
                                  onClick: b,
                              }),
                          }),
                      })
                    : null;
        })({
            currentUserId: R,
            applicationId: n,
            location: "social_layer_gifting_voice_panel",
            onClose: s,
            isTargetingCurrentUser: M,
        }),
        P = (0, L.A)(n),
        {
            status: w,
            recommendations: U,
            skusToUserAndReason: V,
            hasBothSources: q,
        } = J({ userId: t, applicationId: n, channel: a, numItems: 8 }),
        $ = "loading" === w || 0 === U.length || null == T,
        Z = l.useMemo(
            () =>
                null == T || 0 === U.length
                    ? []
                    : (U.length > 8 ? U.slice(0, 8) : U).map((e) => {
                          let n = (V[e.id] ?? {})[t] === v.j.WISHLIST;
                          return (0, i.jsx)(
                              k.A,
                              {
                                  sku: e,
                                  targetUser: T,
                                  isTargetingCurrentUser: M,
                                  source: n ? I.uS.WISHLIST : I.uS.POPULAR,
                                  guildId: a.guild_id,
                                  channelId: a.id,
                                  showIcons: q,
                                  analyticsLocations: x,
                                  onCardClick: s,
                                  onButtonClick: s,
                              },
                              e.id,
                          );
                      }),
            [T, U, a.guild_id, a.id, V, t, M, q, x, s],
        );
    return (0, i.jsx)(W, {
        "aria-labelledby": B,
        children: (0, i.jsxs)("div", {
            className: H.kL,
            children: [
                (0, i.jsxs)(r.BJc, {
                    className: H.wx,
                    direction: "vertical",
                    gap: 12,
                    children: [
                        null != T
                            ? (0, i.jsxs)("div", {
                                  className: H.p,
                                  children: [
                                      (0, i.jsx)(C.A, {
                                          user: T,
                                          widget: j ?? b,
                                          guildId: a.guild_id,
                                          channelId: a.id,
                                          disableInteraction: !0,
                                          disableCTA: !0,
                                          embedded: !0,
                                      }),
                                      O,
                                  ],
                              })
                            : (0, i.jsx)(K, { application: P }),
                        (0, i.jsx)(z, { user: T, isGift: !M }),
                    ],
                }),
                $ ? (0, i.jsx)(r.y$y, { className: H.Zp }) : (0, i.jsx)("div", { className: H.HV, children: Z }),
                (0, i.jsx)(Y, { application: P, onClose: s }),
                (0, i.jsx)(D.A, { location: "social_layer_vc_gifting_panel", className: H.Ij }),
            ],
        }),
    });
}
function Z(e) {
    let { userId: t, applicationId: n, channel: a, onClose: s } = e;
    (0, S.T)({ location: "social_layer_gifting_voice_panel" });
    let { analyticsLocations: u } = (0, d.Ay)(c.A.SLAYER_STOREFRONT_VC_GIFTING_PANEL),
        h = (0, o.bG)([y.default], () => y.default.getUser(t)),
        m = t === (0, o.bG)([N.default], () => N.default.getId()),
        A = (0, L.A)(n),
        {
            status: g,
            recommendations: _,
            skusToUserAndReason: p,
            hasBothSources: f,
        } = J({ userId: t, applicationId: n, channel: a, numItems: 8 }),
        E = "loading" === g || 0 === _.length || null == h,
        [C, x] = l.useMemo(() => {
            if (null == h || 0 === _.length) return [null, []];
            let e = _.length > 7 ? _.slice(0, 7) : _,
                n = (p[e[0].id] ?? {})[t] === v.j.WISHLIST;
            return [
                (0, i.jsx)(P.A, {
                    sku: e[0],
                    targetUser: h,
                    isTargetingCurrentUser: m,
                    source: n ? I.uS.WISHLIST : I.uS.POPULAR,
                    guildId: a.guild_id,
                    channelId: a.id,
                    showIcons: f,
                    analyticsLocations: u,
                    onCardClick: s,
                    onButtonClick: s,
                }),
                e.slice(1).map((e) => {
                    let n = (p[e.id] ?? {})[t] === v.j.WISHLIST;
                    return (0, i.jsx)(
                        k.A,
                        {
                            sku: e,
                            targetUser: h,
                            isTargetingCurrentUser: m,
                            source: n ? I.uS.WISHLIST : I.uS.POPULAR,
                            guildId: a.guild_id,
                            channelId: a.id,
                            showIcons: f,
                            analyticsLocations: u,
                            onCardClick: s,
                            onButtonClick: s,
                        },
                        e.id,
                    );
                }),
            ];
        }, [h, _, p, t, m, a.guild_id, a.id, f, u, s]);
    return (0, i.jsx)(W, {
        "aria-labelledby": B,
        children: (0, i.jsxs)("div", {
            className: H.kL,
            children: [
                (0, i.jsxs)(r.BJc, {
                    className: H.wx,
                    direction: "vertical",
                    gap: 12,
                    children: [(0, i.jsx)(K, { application: A }), (0, i.jsx)(z, { user: h, isGift: !m })],
                }),
                E
                    ? (0, i.jsx)(r.y$y, { className: H.kc })
                    : (0, i.jsxs)(r.BJc, {
                          direction: "vertical",
                          gap: 12,
                          children: [C, (0, i.jsx)("div", { className: H.aS, children: x })],
                      }),
                (0, i.jsx)(Y, { application: A, onClose: s }),
                (0, i.jsx)(D.A, { location: "social_layer_vc_gifting_panel", className: H.Ij }),
            ],
        }),
    });
}
