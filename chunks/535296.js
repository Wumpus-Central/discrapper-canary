n.d(t, { V: () => et, Z: () => en });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
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
    D = n(427262),
    O = n(871123),
    P = n(832163),
    w = n(453774),
    U = n(44724),
    k = n(84511),
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
        { ref: s, height: r = 1 / 0 } = (0, o.Ay)(),
        { ref: c, height: u = 1 / 0 } = (0, o.Ay)(),
        m = u > r ? h.T7Y : "div";
    return (0, i.jsx)("div", {
        onClick: (e) => e.stopPropagation(),
        children: (0, i.jsx)(v.A, {
            children: (0, i.jsx)(d.lGe, {
                "aria-labelledby": n,
                modal: !1,
                children: (0, i.jsx)("div", {
                    ref: s,
                    className: a()(t, K.kL),
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
        s = W.intl.string(W.t.vzZoSF);
    return (
        n &&
            ((l = null != t ? W.intl.format(W.t.YwV901, { username: D.Ay.getName(t) }) : W.intl.string(W.t.qCmNFr)),
            (s = W.intl.string(W.t.SSgrne))),
        (0, i.jsxs)(d.BJc, {
            direction: "vertical",
            gap: 4,
            children: [
                (0, i.jsx)(d.DZT, { id: z, variant: "text-md/normal", children: l }),
                (0, i.jsx)(d.EYj, { variant: "text-sm/medium", color: "text-subtle", children: s }),
            ],
        })
    );
}
function Z(e) {
    let { application: t, onClose: n } = e,
        s = t?.id,
        a = l.useCallback(() => {
            if (null != s) {
                let e = P.A.getGuildIdFromApplicationId(s);
                null != e && (0, U.X)({ guildId: e });
            }
        }, [s]),
        r = l.useCallback(() => {
            if (null != s) {
                let e = P.A.getGuildIdFromApplicationId(s);
                null != e && (n(), (0, U.default)({ guildId: e }));
            }
        }, [s, n]);
    return null == t
        ? null
        : (0, i.jsx)(d.$nd, {
              variant: "secondary",
              icon: d.I9m,
              iconPosition: "end",
              text: W.intl.format(W.t["HDT/rg"], { applicationName: t.name }),
              onClick: r,
              onMouseDown: a,
              fullWidth: !0,
          });
}
function X(e) {
    let { userId: t, applicationId: n, channel: i, numItems: s } = e,
        a = l.useMemo(() => [t], [t]),
        r = l.useMemo(() => (null != n ? [n] : []), [n]),
        {
            status: o,
            recommendations: d,
            skusToUserAndReason: u,
        } = (0, b.XQ)({ userIds: a, applicationIds: r, numItems: s }),
        h = "loading" === o || 0 === d.length,
        m = (0, c.A)(h ? Y : d, Q),
        A = l.useMemo(() => {
            let { hasWishlist: e, hasPopular: t } = (0, O.wH)(d, u, new Set(a));
            return e && t;
        }, [d, u, a]);
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
    let { text: t, onDismiss: n } = e;
    return (0, i.jsxs)("div", {
        className: K.OQ,
        children: [
            (0, i.jsx)("div", { className: K.bC }),
            (0, i.jsxs)(d.BJc, {
                direction: "horizontal",
                gap: "xs",
                fullWidth: !1,
                align: "center",
                justify: "center",
                children: [
                    (0, i.jsx)(d.A5T, { className: K.Ku, size: "xs" }),
                    (0, i.jsx)(d.EYj, { variant: "text-xs/normal", children: t }),
                ],
            }),
            (0, i.jsx)(d.JnF, { size: "xs", onClick: n }),
        ],
    });
}
function et(e) {
    let { className: t, userId: n, applicationId: s, channel: a, onClose: r, canShowCTA: o, onDismissCTA: c } = e;
    (0, N.T)({ location: "social_layer_gifting_voice_panel" }), (0, p.P)(n);
    let { analyticsLocations: h } = (0, A.Ay)(m.A.SLAYER_STOREFRONT_VC_GIFTING_PANEL),
        v = (0, u.bG)([M.default], () => M.default.getUser(n)),
        b = l.useMemo(() => new E.R({ applicationId: s }), [s]),
        L = (0, u.bG)([C.A], () => C.A.getWidgets(n)?.find((e) => e instanceof E.R && e.applicationId === s)),
        D = (0, u.bG)([R.default], () => R.default.getId()),
        O = n === D,
        P = (function (e) {
            let {
                    currentUserId: t,
                    applicationId: n,
                    location: s,
                    onClose: a,
                    canShowCTA: r,
                    onDismissCTA: o,
                    isTargetingCurrentUser: c,
                } = e,
                {
                    isLoading: d,
                    application: u,
                    applicationWidgetConfig: h,
                    profileApplicationWidget: p,
                } = (0, _.A)(r ? t : void 0, r ? n : void 0, s),
                {
                    fetched: C,
                    hasAlreadyLinked: T,
                    canStartAuthorization: v,
                    startAuthorization: N,
                } = (0, g.RD)(r ? u : void 0),
                { analyticsLocations: y } = (0, A.Ay)(m.A.SLAYER_STOREFRONT_VC_GIFTING_PANEL),
                b = l.useCallback(() => {
                    v && N({ analyticsLocations: y });
                }, [y, v, N]),
                j = l.useCallback(() => {
                    a(), (0, S.openUserProfileModal)({ userId: t, sourceAnalyticsLocations: y });
                    let e = new E.R({ applicationId: n });
                    (0, x.Y5)(e),
                        (0, f.un)({ action: "WIDGET_ADDED", ...e.getProfileEditAnalyticsOptions() }),
                        setTimeout(() => (0, I.XA)(V.jM.WIDGET_ADDED), 700);
                }, [y, n, t, a]);
            return r && !d && C && null != h
                ? !T && v
                    ? (0, i.jsx)(ee, { text: W.intl.format(c ? W.t.YWa8L2 : W.t.xxPgmT, { onClick: b }), onDismiss: o })
                    : T && null == p && null != u
                      ? (0, i.jsx)(ee, {
                            text: W.intl.format(W.t.QuIwht, { applicationName: u.name, onClick: j }),
                            onDismiss: o,
                        })
                      : null
                : null;
        })({
            currentUserId: D,
            applicationId: s,
            location: "social_layer_gifting_voice_panel",
            onClose: r,
            canShowCTA: o,
            onDismissCTA: c,
            isTargetingCurrentUser: O,
        }),
        U = (0, w.A)(s),
        {
            status: G,
            recommendations: H,
            skusToUserAndReason: B,
            hasBothSources: Y,
        } = X({ userId: n, applicationId: s, channel: a, numItems: 8 }),
        Q = "loading" === G || 0 === H.length || null == v,
        et = l.useMemo(
            () =>
                null == v || 0 === H.length
                    ? []
                    : (H.length > 8 ? H.slice(0, 8) : H).map((e) => {
                          let t = (B[e.id] ?? {})[n] === j.j.WISHLIST;
                          return (0, i.jsx)(
                              F.A,
                              {
                                  sku: e,
                                  targetUser: v,
                                  isTargetingCurrentUser: O,
                                  source: t ? y.uS.WISHLIST : y.uS.POPULAR,
                                  guildId: a.guild_id,
                                  channelId: a.id,
                                  showIcons: Y,
                                  analyticsLocations: h,
                                  onCardClick: r,
                                  onButtonClick: r,
                              },
                              e.id,
                          );
                      }),
            [v, H, a.guild_id, a.id, B, n, O, Y, h, r],
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
                    null != v
                        ? (0, i.jsxs)("div", {
                              className: K.p,
                              children: [
                                  (0, i.jsx)(T.A, {
                                      user: v,
                                      widget: L ?? b,
                                      guildId: a.guild_id,
                                      channelId: a.id,
                                      disableInteraction: !0,
                                      disableCTA: null != P,
                                      embedded: !0,
                                  }),
                                  P,
                              ],
                          })
                        : (0, i.jsx)(q, { application: U }),
                    (0, i.jsx)($, { user: v, isGift: !O }),
                ],
            }),
            Q ? (0, i.jsx)(d.y$y, { className: K.Zp }) : (0, i.jsx)("div", { className: K.HV, children: et }),
            (0, i.jsx)(Z, { application: U, onClose: r }),
            (0, i.jsx)(k.A, { location: "social_layer_vc_gifting_panel", className: K.Ij }),
        ],
    });
}
function en(e) {
    let { className: t, userId: n, applicationId: s, channel: a, onClose: r } = e;
    (0, N.T)({ location: "social_layer_gifting_voice_panel" });
    let { analyticsLocations: o } = (0, A.Ay)(m.A.SLAYER_STOREFRONT_VC_GIFTING_PANEL),
        c = (0, u.bG)([M.default], () => M.default.getUser(n)),
        h = n === (0, u.bG)([R.default], () => R.default.getId()),
        g = (0, w.A)(s),
        {
            status: _,
            recommendations: p,
            skusToUserAndReason: f,
            hasBothSources: E,
        } = X({ userId: n, applicationId: s, channel: a, numItems: 8 }),
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
                    guildId: a.guild_id,
                    channelId: a.id,
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
                            guildId: a.guild_id,
                            channelId: a.id,
                            showIcons: E,
                            analyticsLocations: o,
                            onCardClick: r,
                            onButtonClick: r,
                        },
                        e.id,
                    );
                }),
            ];
        }, [c, p, f, n, h, a.guild_id, a.id, E, o, r]);
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
            (0, i.jsx)(k.A, { location: "social_layer_vc_gifting_panel", className: K.Ij }),
        ],
    });
}
