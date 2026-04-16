n.d(t, { V: () => ee, Z: () => et });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(835245),
    o = n(494012),
    c = n(695095),
    d = n(158954),
    u = n(311907),
    h = n(397927),
    m = n(793574),
    A = n(688810),
    g = n(362490),
    _ = n(294323),
    p = n(201718),
    f = n(672385),
    E = n(633075),
    C = n(622543),
    x = n(735321),
    S = n(657331),
    I = n(606758),
    T = n(605694),
    v = n(246356),
    N = n(332772),
    y = n(594832),
    b = n(631784),
    j = n(310209),
    R = n(961350),
    M = n(287809),
    L = n(954571),
    O = n(427262),
    D = n(871123),
    P = n(832163),
    k = n(453774),
    w = n(44724),
    U = n(84511),
    G = n(817176),
    F = n(129114),
    H = n(652215),
    B = n(360469),
    V = n(518477),
    W = n(985018),
    K = n(932231);
let z = `vc-gifting-${(0, r.A)()}`,
    Y = Object.freeze([]);
function J(e) {
    let { className: t, "aria-labelledby": n, children: l } = e,
        { ref: a, height: r = 1 / 0 } = (0, o.Ay)(),
        { ref: c, height: u = 1 / 0 } = (0, o.Ay)(),
        m = u > r ? h.T7Y : "div";
    return (0, i.jsx)("div", {
        onClick: (e) => e.stopPropagation(),
        children: (0, i.jsx)(v.A, {
            children: (0, i.jsx)(d.lGe, {
                "aria-labelledby": n,
                modal: !1,
                children: (0, i.jsx)("div", {
                    ref: a,
                    className: s()(t, K.kL),
                    children: (0, i.jsx)(m, { className: K.U, children: (0, i.jsx)("div", { ref: c, children: l }) }),
                }),
            }),
        }),
    });
}
function q(e) {
    let { application: t } = e;
    if (null == t) return null;
    let n = t.getIconURL(B.iu.SMALL);
    return (0, i.jsxs)(d.BJc, {
        direction: "horizontal",
        gap: 4,
        align: "center",
        children: [
            null != n && (0, i.jsx)("img", { className: K.In, src: n, alt: t.name }),
            (0, i.jsx)(d.EYj, { variant: "text-sm/normal", children: t.name }),
        ],
    });
}
function $(e) {
    let { user: t, isGift: n } = e,
        l = W.intl.string(W.t.kv4lSp),
        a = W.intl.string(W.t.vzZoSF);
    return (
        n &&
            ((l = null != t ? W.intl.format(W.t.YwV901, { username: O.Ay.getName(t) }) : W.intl.string(W.t.qCmNFr)),
            (a = W.intl.string(W.t.SSgrne))),
        (0, i.jsxs)(d.BJc, {
            direction: "vertical",
            gap: 4,
            children: [
                (0, i.jsx)(d.DZT, { id: z, variant: "text-md/normal", children: l }),
                (0, i.jsx)(d.EYj, { variant: "text-sm/medium", color: "text-subtle", children: a }),
            ],
        })
    );
}
function Z(e) {
    let { application: t, onClose: n } = e,
        a = t?.id,
        s = l.useCallback(() => {
            if (null != a) {
                let e = P.A.getGuildIdFromApplicationId(a);
                null != e && (0, w.X)({ guildId: e });
            }
        }, [a]),
        r = l.useCallback(() => {
            if (null != a) {
                let e = P.A.getGuildIdFromApplicationId(a);
                null != e && (n(), (0, w.default)({ guildId: e }));
            }
        }, [a, n]);
    return null == t
        ? null
        : (0, i.jsx)(d.$nd, {
              variant: "secondary",
              icon: d.I9m,
              iconPosition: "end",
              text: W.intl.format(W.t["HDT/rg"], { applicationName: t.name }),
              onClick: r,
              onMouseDown: s,
              fullWidth: !0,
          });
}
function X(e) {
    let { userId: t, applicationId: n, channel: i, numItems: a } = e,
        s = l.useMemo(() => [t], [t]),
        r = l.useMemo(() => (null != n ? [n] : []), [n]),
        {
            status: o,
            recommendations: d,
            skusToUserAndReason: u,
        } = (0, b.XQ)({ userIds: s, applicationIds: r, numItems: a }),
        h = "loading" === o || 0 === d.length,
        m = (0, c.A)(h ? Y : d, Q),
        A = l.useMemo(() => {
            let { hasWishlist: e, hasPopular: t } = (0, D.wH)(d, u, new Set(s));
            return e && t;
        }, [d, u, s]);
    return (
        l.useEffect(() => {
            0 !== d.length &&
                L.default.track(H.HAw.COMMERCE_SHOP_VC_GIFT_BUTTON_VIEWED, {
                    guild_id: i.guild_id,
                    channel_id: i.id,
                    sku_ids: d.map((e) => e.id),
                });
        }, [i.id, i.guild_id, d]),
        { status: o, recommendations: m, skusToUserAndReason: u, hasBothSources: A }
    );
}
function Q(e, t) {
    return e.id === t.id;
}
function ee(e) {
    let { className: t, userId: n, applicationId: a, channel: s, onClose: r } = e;
    (0, N.T)({ location: "social_layer_gifting_voice_panel" }), (0, p.P)(n);
    let { analyticsLocations: o } = (0, A.Ay)(m.A.SLAYER_STOREFRONT_VC_GIFTING_PANEL),
        c = (0, u.bG)([M.default], () => M.default.getUser(n)),
        h = l.useMemo(() => new E.R({ applicationId: a }), [a]),
        v = (0, u.bG)([C.A], () => C.A.getWidgets(n)?.find((e) => e instanceof E.R && e.applicationId === a)),
        b = (0, u.bG)([R.default], () => R.default.getId()),
        L = n === b,
        O = (function (e) {
            let { currentUserId: t, applicationId: n, location: a, onClose: s, isTargetingCurrentUser: r } = e,
                {
                    isLoading: o,
                    application: c,
                    applicationWidgetConfig: u,
                    profileApplicationWidget: h,
                } = (0, _.A)(t, n, a),
                { fetched: p, hasAlreadyLinked: C, canStartAuthorization: T, startAuthorization: v } = (0, g.RD)(c),
                { analyticsLocations: N } = (0, A.Ay)(m.A.SLAYER_STOREFRONT_VC_GIFTING_PANEL),
                y = l.useCallback(() => {
                    T && v({ analyticsLocations: N });
                }, [N, T, v]),
                b = l.useCallback(() => {
                    s(), (0, S.openUserProfileModal)({ userId: t, sourceAnalyticsLocations: N });
                    let e = new E.R({ applicationId: n });
                    (0, x.Y5)(e),
                        (0, f.un)({ action: "WIDGET_ADDED", ...e.getProfileEditAnalyticsOptions() }),
                        setTimeout(() => (0, I.XA)(V.jM.WIDGET_ADDED), 700);
                }, [N, n, t, s]);
            return o || !p || null == u
                ? null
                : !C && T
                  ? (0, i.jsx)("div", {
                        className: K.OQ,
                        children: (0, i.jsx)(d.EYj, {
                            variant: "text-xs/normal",
                            children: W.intl.format(r ? W.t.YWa8L2 : W.t.xxPgmT, {
                                icon: () => (0, i.jsx)(d.A5T, { className: K.Ku, size: "xs" }),
                                onClick: y,
                            }),
                        }),
                    })
                  : C && null == h && null != c
                    ? (0, i.jsx)("div", {
                          className: K.OQ,
                          children: (0, i.jsx)(d.EYj, {
                              variant: "text-xs/normal",
                              children: W.intl.format(W.t.QuIwht, {
                                  icon: () => (0, i.jsx)(d.A5T, { className: K.Ku, size: "xs" }),
                                  applicationName: c.name,
                                  onClick: b,
                              }),
                          }),
                      })
                    : null;
        })({
            currentUserId: b,
            applicationId: a,
            location: "social_layer_gifting_voice_panel",
            onClose: r,
            isTargetingCurrentUser: L,
        }),
        D = (0, k.A)(a),
        {
            status: P,
            recommendations: w,
            skusToUserAndReason: G,
            hasBothSources: H,
        } = X({ userId: n, applicationId: a, channel: s, numItems: 8 }),
        B = "loading" === P || 0 === w.length || null == c,
        Y = l.useMemo(
            () =>
                null == c || 0 === w.length
                    ? []
                    : (w.length > 8 ? w.slice(0, 8) : w).map((e) => {
                          let t = (G[e.id] ?? {})[n] === j.j.WISHLIST;
                          return (0, i.jsx)(
                              F.A,
                              {
                                  sku: e,
                                  targetUser: c,
                                  isTargetingCurrentUser: L,
                                  source: t ? y.uS.WISHLIST : y.uS.POPULAR,
                                  guildId: s.guild_id,
                                  channelId: s.id,
                                  showIcons: H,
                                  analyticsLocations: o,
                                  onCardClick: r,
                                  onButtonClick: r,
                              },
                              e.id,
                          );
                      }),
            [c, w, s.guild_id, s.id, G, n, L, H, o, r],
        );
    return (0, i.jsxs)(J, {
        className: t,
        "aria-labelledby": z,
        children: [
            (0, i.jsxs)(d.BJc, {
                className: K.wx,
                direction: "vertical",
                gap: 12,
                children: [
                    null != c
                        ? (0, i.jsxs)("div", {
                              className: K.p,
                              children: [
                                  (0, i.jsx)(T.A, {
                                      user: c,
                                      widget: v ?? h,
                                      guildId: s.guild_id,
                                      channelId: s.id,
                                      disableInteraction: !0,
                                      disableCTA: null != O,
                                      embedded: !0,
                                  }),
                                  O,
                              ],
                          })
                        : (0, i.jsx)(q, { application: D }),
                    (0, i.jsx)($, { user: c, isGift: !L }),
                ],
            }),
            B ? (0, i.jsx)(d.y$y, { className: K.Zp }) : (0, i.jsx)("div", { className: K.HV, children: Y }),
            (0, i.jsx)(Z, { application: D, onClose: r }),
            (0, i.jsx)(U.A, { location: "social_layer_vc_gifting_panel", className: K.Ij }),
        ],
    });
}
function et(e) {
    let { className: t, userId: n, applicationId: a, channel: s, onClose: r } = e;
    (0, N.T)({ location: "social_layer_gifting_voice_panel" });
    let { analyticsLocations: o } = (0, A.Ay)(m.A.SLAYER_STOREFRONT_VC_GIFTING_PANEL),
        c = (0, u.bG)([M.default], () => M.default.getUser(n)),
        h = n === (0, u.bG)([R.default], () => R.default.getId()),
        g = (0, k.A)(a),
        {
            status: _,
            recommendations: p,
            skusToUserAndReason: f,
            hasBothSources: E,
        } = X({ userId: n, applicationId: a, channel: s, numItems: 8 }),
        C = "loading" === _ || 0 === p.length || null == c,
        [x, S] = l.useMemo(() => {
            if (null == c || 0 === p.length) return [null, []];
            let e = p.length > 7 ? p.slice(0, 7) : p,
                t = (f[e[0].id] ?? {})[n] === j.j.WISHLIST;
            return [
                (0, i.jsx)(G.A, {
                    sku: e[0],
                    targetUser: c,
                    isTargetingCurrentUser: h,
                    source: t ? y.uS.WISHLIST : y.uS.POPULAR,
                    guildId: s.guild_id,
                    channelId: s.id,
                    showIcons: E,
                    analyticsLocations: o,
                    onCardClick: r,
                    onButtonClick: r,
                }),
                e.slice(1).map((e) => {
                    let t = (f[e.id] ?? {})[n] === j.j.WISHLIST;
                    return (0, i.jsx)(
                        F.A,
                        {
                            sku: e,
                            targetUser: c,
                            isTargetingCurrentUser: h,
                            source: t ? y.uS.WISHLIST : y.uS.POPULAR,
                            guildId: s.guild_id,
                            channelId: s.id,
                            showIcons: E,
                            analyticsLocations: o,
                            onCardClick: r,
                            onButtonClick: r,
                        },
                        e.id,
                    );
                }),
            ];
        }, [c, p, f, n, h, s.guild_id, s.id, E, o, r]);
    return (0, i.jsxs)(J, {
        className: t,
        "aria-labelledby": z,
        children: [
            (0, i.jsxs)(d.BJc, {
                className: K.wx,
                direction: "vertical",
                gap: 12,
                children: [(0, i.jsx)(q, { application: g }), (0, i.jsx)($, { user: c, isGift: !h })],
            }),
            C
                ? (0, i.jsx)(d.y$y, { className: K.kc })
                : (0, i.jsxs)(d.BJc, {
                      direction: "vertical",
                      gap: 12,
                      children: [x, (0, i.jsx)("div", { className: K.aS, children: S })],
                  }),
            (0, i.jsx)(Z, { application: g, onClose: r }),
            (0, i.jsx)(U.A, { location: "social_layer_vc_gifting_panel", className: K.Ij }),
        ],
    });
}
