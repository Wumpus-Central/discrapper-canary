n.d(t, { V: () => X, Z: () => Q });
var i = n(627968),
    l = n(64700),
    a = n(835245),
    s = n(494012),
    r = n(695095),
    o = n(158954),
    c = n(311907),
    d = n(397927),
    u = n(793574),
    h = n(688810),
    m = n(362490),
    A = n(294323),
    g = n(201718),
    _ = n(672385),
    p = n(633075),
    f = n(622543),
    E = n(735321),
    C = n(657331),
    x = n(606758),
    S = n(605694),
    I = n(246356),
    T = n(332772),
    v = n(594832),
    N = n(631784),
    y = n(310209),
    b = n(961350),
    j = n(287809),
    R = n(954571),
    M = n(427262),
    L = n(871123),
    O = n(832163),
    D = n(453774),
    P = n(44724),
    k = n(84511),
    w = n(817176),
    U = n(129114),
    G = n(652215),
    F = n(360469),
    H = n(518477),
    B = n(985018),
    V = n(274647);
let W = `vc-gifting-${(0, a.A)()}`,
    K = Object.freeze([]);
function z(e) {
    let { "aria-labelledby": t, children: n } = e,
        { ref: l, height: a = 1 / 0 } = (0, s.Ay)(),
        { ref: r, height: c = 1 / 0 } = (0, s.Ay)(),
        u = c > a ? d.T7Y : "div";
    return (0, i.jsx)("div", {
        onClick: (e) => e.stopPropagation(),
        children: (0, i.jsx)(I.A, {
            children: (0, i.jsx)(o.lGe, {
                "aria-labelledby": t,
                modal: !1,
                children: (0, i.jsx)("div", {
                    ref: l,
                    className: V.kL,
                    children: (0, i.jsx)(u, { className: V.U, children: (0, i.jsx)("div", { ref: r, children: n }) }),
                }),
            }),
        }),
    });
}
function Y(e) {
    let { application: t } = e;
    if (null == t) return null;
    let n = t.getIconURL(F.iu.SMALL);
    return (0, i.jsxs)(o.BJc, {
        direction: "horizontal",
        gap: 4,
        align: "center",
        children: [
            null != n && (0, i.jsx)("img", { className: V.In, src: n, alt: t.name }),
            (0, i.jsx)(o.EYj, { variant: "text-sm/normal", children: t.name }),
        ],
    });
}
function J(e) {
    let { user: t, isGift: n } = e,
        l = B.intl.string(B.t.kv4lSp),
        a = B.intl.string(B.t.vzZoSF);
    return (
        n &&
            ((l = null != t ? B.intl.format(B.t.YwV901, { username: M.Ay.getName(t) }) : B.intl.string(B.t.qCmNFr)),
            (a = B.intl.string(B.t.SSgrne))),
        (0, i.jsxs)(o.BJc, {
            direction: "vertical",
            gap: 4,
            children: [
                (0, i.jsx)(o.DZT, { id: W, variant: "text-md/normal", children: l }),
                (0, i.jsx)(o.EYj, { variant: "text-sm/medium", color: "text-subtle", children: a }),
            ],
        })
    );
}
function q(e) {
    let { application: t, onClose: n } = e,
        a = t?.id,
        s = l.useCallback(() => {
            if (null != a) {
                let e = O.A.getGuildIdFromApplicationId(a);
                null != e && (0, P.X)({ guildId: e });
            }
        }, [a]),
        r = l.useCallback(() => {
            if (null != a) {
                let e = O.A.getGuildIdFromApplicationId(a);
                null != e && (n(), (0, P.default)({ guildId: e }));
            }
        }, [a, n]);
    return null == t
        ? null
        : (0, i.jsx)(o.$nd, {
              variant: "secondary",
              icon: o.I9m,
              iconPosition: "end",
              text: B.intl.format(B.t["HDT/rg"], { applicationName: t.name }),
              onClick: r,
              onMouseDown: s,
              fullWidth: !0,
          });
}
function $(e) {
    let { userId: t, applicationId: n, channel: i, numItems: a } = e,
        s = l.useMemo(() => [t], [t]),
        o = l.useMemo(() => (null != n ? [n] : []), [n]),
        {
            status: c,
            recommendations: d,
            skusToUserAndReason: u,
        } = (0, N.XQ)({ userIds: s, applicationIds: o, numItems: a }),
        h = "loading" === c || 0 === d.length,
        m = (0, r.A)(h ? K : d, Z),
        A = l.useMemo(() => {
            let { hasWishlist: e, hasPopular: t } = (0, L.wH)(d, u, new Set(s));
            return e && t;
        }, [d, u, s]);
    return (
        l.useEffect(() => {
            0 !== d.length &&
                R.default.track(G.HAw.COMMERCE_SHOP_VC_GIFT_BUTTON_VIEWED, {
                    guild_id: i.guild_id,
                    channel_id: i.id,
                    sku_ids: d.map((e) => e.id),
                });
        }, [i.id, i.guild_id, d]),
        { status: c, recommendations: m, skusToUserAndReason: u, hasBothSources: A }
    );
}
function Z(e, t) {
    return e.id === t.id;
}
function X(e) {
    let { userId: t, applicationId: n, channel: a, onClose: s } = e;
    (0, T.T)({ location: "social_layer_gifting_voice_panel" }), (0, g.P)(t);
    let { analyticsLocations: r } = (0, h.Ay)(u.A.SLAYER_STOREFRONT_VC_GIFTING_PANEL),
        d = (0, c.bG)([j.default], () => j.default.getUser(t)),
        I = l.useMemo(() => new p.R({ applicationId: n }), [n]),
        N = (0, c.bG)([f.A], () => f.A.getWidgets(t)?.find((e) => e instanceof p.R && e.applicationId === n)),
        R = (0, c.bG)([b.default], () => b.default.getId()),
        M = t === R,
        L = (function (e) {
            let { currentUserId: t, applicationId: n, location: a, onClose: s, isTargetingCurrentUser: r } = e,
                {
                    isLoading: c,
                    application: d,
                    applicationWidgetConfig: g,
                    profileApplicationWidget: f,
                } = (0, A.A)(t, n, a),
                { fetched: S, hasAlreadyLinked: I, canStartAuthorization: T, startAuthorization: v } = (0, m.RD)(d),
                { analyticsLocations: N } = (0, h.Ay)(u.A.SLAYER_STOREFRONT_VC_GIFTING_PANEL),
                y = l.useCallback(() => {
                    T && v({ analyticsLocations: N });
                }, [N, T, v]),
                b = l.useCallback(() => {
                    s(), (0, C.openUserProfileModal)({ userId: t, sourceAnalyticsLocations: N });
                    let e = new p.R({ applicationId: n });
                    (0, E.Y5)(e),
                        (0, _.un)({ action: "WIDGET_ADDED", ...e.getProfileEditAnalyticsOptions() }),
                        setTimeout(() => (0, x.XA)(H.jM.WIDGET_ADDED), 700);
                }, [N, n, t, s]);
            return c || !S || null == g
                ? null
                : !I && T
                  ? (0, i.jsx)("div", {
                        className: V.OQ,
                        children: (0, i.jsx)(o.EYj, {
                            variant: "text-xs/normal",
                            children: B.intl.format(r ? B.t.YWa8L2 : B.t.xxPgmT, {
                                icon: () => (0, i.jsx)(o.A5T, { className: V.Ku, size: "xs" }),
                                onClick: y,
                            }),
                        }),
                    })
                  : I && null == f && null != d
                    ? (0, i.jsx)("div", {
                          className: V.OQ,
                          children: (0, i.jsx)(o.EYj, {
                              variant: "text-xs/normal",
                              children: B.intl.format(B.t.QuIwht, {
                                  icon: () => (0, i.jsx)(o.A5T, { className: V.Ku, size: "xs" }),
                                  applicationName: d.name,
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
        O = (0, D.A)(n),
        {
            status: P,
            recommendations: w,
            skusToUserAndReason: G,
            hasBothSources: F,
        } = $({ userId: t, applicationId: n, channel: a, numItems: 8 }),
        K = "loading" === P || 0 === w.length || null == d,
        Z = l.useMemo(
            () =>
                null == d || 0 === w.length
                    ? []
                    : (w.length > 8 ? w.slice(0, 8) : w).map((e) => {
                          let n = (G[e.id] ?? {})[t] === y.j.WISHLIST;
                          return (0, i.jsx)(
                              U.A,
                              {
                                  sku: e,
                                  targetUser: d,
                                  isTargetingCurrentUser: M,
                                  source: n ? v.uS.WISHLIST : v.uS.POPULAR,
                                  guildId: a.guild_id,
                                  channelId: a.id,
                                  showIcons: F,
                                  analyticsLocations: r,
                                  onCardClick: s,
                                  onButtonClick: s,
                              },
                              e.id,
                          );
                      }),
            [d, w, a.guild_id, a.id, G, t, M, F, r, s],
        );
    return (0, i.jsxs)(z, {
        "aria-labelledby": W,
        children: [
            (0, i.jsxs)(o.BJc, {
                className: V.wx,
                direction: "vertical",
                gap: 12,
                children: [
                    null != d
                        ? (0, i.jsxs)("div", {
                              className: V.p,
                              children: [
                                  (0, i.jsx)(S.A, {
                                      user: d,
                                      widget: N ?? I,
                                      guildId: a.guild_id,
                                      channelId: a.id,
                                      disableInteraction: !0,
                                      disableCTA: null != L,
                                      embedded: !0,
                                  }),
                                  L,
                              ],
                          })
                        : (0, i.jsx)(Y, { application: O }),
                    (0, i.jsx)(J, { user: d, isGift: !M }),
                ],
            }),
            K ? (0, i.jsx)(o.y$y, { className: V.Zp }) : (0, i.jsx)("div", { className: V.HV, children: Z }),
            (0, i.jsx)(q, { application: O, onClose: s }),
            (0, i.jsx)(k.A, { location: "social_layer_vc_gifting_panel", className: V.Ij }),
        ],
    });
}
function Q(e) {
    let { userId: t, applicationId: n, channel: a, onClose: s } = e;
    (0, T.T)({ location: "social_layer_gifting_voice_panel" });
    let { analyticsLocations: r } = (0, h.Ay)(u.A.SLAYER_STOREFRONT_VC_GIFTING_PANEL),
        d = (0, c.bG)([j.default], () => j.default.getUser(t)),
        m = t === (0, c.bG)([b.default], () => b.default.getId()),
        A = (0, D.A)(n),
        {
            status: g,
            recommendations: _,
            skusToUserAndReason: p,
            hasBothSources: f,
        } = $({ userId: t, applicationId: n, channel: a, numItems: 8 }),
        E = "loading" === g || 0 === _.length || null == d,
        [C, x] = l.useMemo(() => {
            if (null == d || 0 === _.length) return [null, []];
            let e = _.length > 7 ? _.slice(0, 7) : _,
                n = (p[e[0].id] ?? {})[t] === y.j.WISHLIST;
            return [
                (0, i.jsx)(w.A, {
                    sku: e[0],
                    targetUser: d,
                    isTargetingCurrentUser: m,
                    source: n ? v.uS.WISHLIST : v.uS.POPULAR,
                    guildId: a.guild_id,
                    channelId: a.id,
                    showIcons: f,
                    analyticsLocations: r,
                    onCardClick: s,
                    onButtonClick: s,
                }),
                e.slice(1).map((e) => {
                    let n = (p[e.id] ?? {})[t] === y.j.WISHLIST;
                    return (0, i.jsx)(
                        U.A,
                        {
                            sku: e,
                            targetUser: d,
                            isTargetingCurrentUser: m,
                            source: n ? v.uS.WISHLIST : v.uS.POPULAR,
                            guildId: a.guild_id,
                            channelId: a.id,
                            showIcons: f,
                            analyticsLocations: r,
                            onCardClick: s,
                            onButtonClick: s,
                        },
                        e.id,
                    );
                }),
            ];
        }, [d, _, p, t, m, a.guild_id, a.id, f, r, s]);
    return (0, i.jsxs)(z, {
        "aria-labelledby": W,
        children: [
            (0, i.jsxs)(o.BJc, {
                className: V.wx,
                direction: "vertical",
                gap: 12,
                children: [(0, i.jsx)(Y, { application: A }), (0, i.jsx)(J, { user: d, isGift: !m })],
            }),
            E
                ? (0, i.jsx)(o.y$y, { className: V.kc })
                : (0, i.jsxs)(o.BJc, {
                      direction: "vertical",
                      gap: 12,
                      children: [C, (0, i.jsx)("div", { className: V.aS, children: x })],
                  }),
            (0, i.jsx)(q, { application: A, onClose: s }),
            (0, i.jsx)(k.A, { location: "social_layer_vc_gifting_panel", className: V.Ij }),
        ],
    });
}
