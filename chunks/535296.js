n.d(t, { V: () => ed, Z: () => ec });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    r = n.n(a),
    s = n(835245),
    o = n(494012),
    d = n(695095),
    c = n(113325),
    u = n(331322),
    _ = n(834730),
    f = n(534514),
    m = n(821609),
    p = n(509434);
if (/^(14256|21552)$/.test(n.j)) var g = n(141628);
if (/^(14256|21552)$/.test(n.j)) var h = n(815021);
var A = n(289873),
    x = n(311907),
    v = n(599319),
    I = n(793574),
    E = n(688810),
    C = n(362490),
    j = n(294323),
    N = n(201718),
    y = n(672385),
    b = n(633075),
    S = n(622543),
    w = n(735321),
    T = n(657331),
    k = n(606758),
    R = n(605694),
    L = n(246356),
    D = n(332772),
    M = n(594832),
    O = n(631784),
    F = n(310209),
    V = n(961350),
    P = n(287809),
    G = n(954571),
    H = n(427262),
    U = n(871123),
    W = n(832163),
    z = n(453774),
    B = n(44724),
    Z = n(84511),
    Y = n(817176),
    $ = n(129114),
    Q = n(652215),
    K = n(360469),
    X = n(518477),
    q = n(985018),
    J = n(932231);
let ee = `vc-gifting-${(0, s.A)()}`,
    et = Object.freeze([]);
function en(e) {
    let { className: t, "aria-labelledby": n, children: l } = e,
        { ref: a, height: s = 1 / 0 } = (0, o.Ay)(),
        { ref: d, height: u = 1 / 0 } = (0, o.Ay)(),
        _ = u > s ? v.Ch : "div";
    return (0, i.jsx)("div", {
        onClick: (e) => e.stopPropagation(),
        children: (0, i.jsx)(L.A, {
            children: (0, i.jsx)(c.l, {
                "aria-labelledby": n,
                modal: !1,
                children: (0, i.jsx)("div", {
                    ref: a,
                    className: r()(t, J.kL),
                    children: (0, i.jsx)(_, { className: J.U, children: (0, i.jsx)("div", { ref: d, children: l }) }),
                }),
            }),
        }),
    });
}
function ei(e) {
    let { application: t } = e;
    if (null == t) return null;
    let n = t.getIconURL(K.iu.SMALL);
    return (0, i.jsxs)(u.B, {
        direction: "horizontal",
        gap: 4,
        align: "center",
        children: [
            null != n && (0, i.jsx)("img", { className: J.In, src: n, alt: t.name }),
            (0, i.jsx)(_.E, { variant: "text-sm/normal", children: t.name }),
        ],
    });
}
function el(e) {
    let { user: t, isGift: n } = e,
        l = q.intl.string(q.t.kv4lSp),
        a = q.intl.string(q.t.vzZoSF);
    return (
        n &&
            ((l = null != t ? q.intl.format(q.t.YwV901, { username: H.Ay.getName(t) }) : q.intl.string(q.t.qCmNFr)),
            (a = q.intl.string(q.t.SSgrne))),
        (0, i.jsxs)(u.B, {
            direction: "vertical",
            gap: 4,
            children: [
                (0, i.jsx)(f.D, { id: ee, variant: "text-md/normal", children: l }),
                (0, i.jsx)(_.E, { variant: "text-sm/medium", color: "text-subtle", children: a }),
            ],
        })
    );
}
function ea(e) {
    let { application: t, onClose: n } = e,
        a = t?.id,
        r = l.useCallback(() => {
            if (null != a) {
                let e = W.A.getGuildIdFromApplicationId(a);
                null != e && (0, B.X)({ guildId: e });
            }
        }, [a]),
        s = l.useCallback(() => {
            if (null != a) {
                let e = W.A.getGuildIdFromApplicationId(a);
                null != e && (n(), (0, B.default)({ guildId: e }));
            }
        }, [a, n]);
    return null == t
        ? null
        : (0, i.jsx)(m.$, {
              variant: "secondary",
              icon: p.I,
              iconPosition: "end",
              text: q.intl.format(q.t["HDT/rg"], { applicationName: t.name }),
              onClick: s,
              onMouseDown: r,
              fullWidth: !0,
          });
}
function er(e) {
    let { userId: t, applicationId: n, channel: i, numItems: a } = e,
        r = l.useMemo(() => [t], [t]),
        s = l.useMemo(() => (null != n ? [n] : []), [n]),
        {
            status: o,
            recommendations: c,
            skusToUserAndReason: u,
        } = (0, O.XQ)({ userIds: r, applicationIds: s, numItems: a }),
        _ = "loading" === o || 0 === c.length,
        f = (0, d.A)(_ ? et : c, es),
        m = l.useMemo(() => {
            let { hasWishlist: e, hasPopular: t } = (0, U.wH)(c, u, new Set(r));
            return e && t;
        }, [c, u, r]);
    return (
        l.useEffect(() => {
            0 !== c.length &&
                G.default.track(Q.HAw.COMMERCE_SHOP_VC_GIFT_BUTTON_VIEWED, {
                    guild_id: i.guild_id,
                    channel_id: i.id,
                    sku_ids: c.map((e) => e.id),
                });
        }, [i.id, i.guild_id, c]),
        { status: o, recommendations: f, skusToUserAndReason: u, hasBothSources: m }
    );
}
function es(e, t) {
    return e.id === t.id;
}
function eo(e) {
    let { text: t, onDismiss: n } = e;
    return (0, i.jsxs)("div", {
        className: J.OQ,
        children: [
            (0, i.jsx)("div", { className: J.bC }),
            (0, i.jsxs)(u.B, {
                direction: "horizontal",
                gap: "xs",
                fullWidth: !1,
                align: "center",
                justify: "center",
                children: [
                    (0, i.jsx)(g.A, { className: J.Ku, size: "xs" }),
                    (0, i.jsx)(_.E, { variant: "text-xs/normal", children: t }),
                ],
            }),
            (0, i.jsx)(h.J, { size: "xs", onClick: n }),
        ],
    });
}
function ed(e) {
    let { className: t, userId: n, applicationId: a, channel: r, onClose: s, canShowCTA: o, onDismissCTA: d } = e;
    (0, D.T)({ location: "social_layer_gifting_voice_panel" }), (0, N.P)(n);
    let { analyticsLocations: c } = (0, E.Ay)(I.A.SLAYER_STOREFRONT_VC_GIFTING_PANEL),
        _ = (0, x.bG)([P.default], () => P.default.getUser(n)),
        f = l.useMemo(() => new b.R({ applicationId: a }), [a]),
        m = (0, x.bG)([S.A], () => S.A.getWidgets(n)?.find((e) => e instanceof b.R && e.applicationId === a)),
        p = (0, x.bG)([V.default], () => V.default.getId()),
        g = n === p,
        h = (function (e) {
            let {
                    currentUserId: t,
                    applicationId: n,
                    location: a,
                    onClose: r,
                    canShowCTA: s,
                    onDismissCTA: o,
                    isTargetingCurrentUser: d,
                } = e,
                {
                    isLoading: c,
                    application: u,
                    applicationWidgetConfig: _,
                    profileApplicationWidget: f,
                } = (0, j.A)(s ? t : void 0, s ? n : void 0, a),
                {
                    fetched: m,
                    hasAlreadyLinked: p,
                    canStartAuthorization: g,
                    startAuthorization: h,
                } = (0, C.RD)(s ? u : void 0),
                { analyticsLocations: A } = (0, E.Ay)(I.A.SLAYER_STOREFRONT_VC_GIFTING_PANEL),
                x = l.useCallback(() => {
                    g && h({ analyticsLocations: A });
                }, [A, g, h]),
                v = l.useCallback(() => {
                    r(), (0, T.openUserProfileModal)({ userId: t, sourceAnalyticsLocations: A });
                    let e = new b.R({ applicationId: n });
                    (0, w.Y5)(e),
                        (0, y.un)({ action: "WIDGET_ADDED", ...e.getProfileEditAnalyticsOptions() }),
                        setTimeout(() => (0, k.XA)(X.jM.WIDGET_ADDED), 700);
                }, [A, n, t, r]);
            return s && !c && m && null != _
                ? !p && g
                    ? (0, i.jsx)(eo, { text: q.intl.format(d ? q.t.YWa8L2 : q.t.xxPgmT, { onClick: x }), onDismiss: o })
                    : p && null == f && null != u
                      ? (0, i.jsx)(eo, {
                            text: q.intl.format(q.t.QuIwht, { applicationName: u.name, onClick: v }),
                            onDismiss: o,
                        })
                      : null
                : null;
        })({
            currentUserId: p,
            applicationId: a,
            location: "social_layer_gifting_voice_panel",
            onClose: s,
            canShowCTA: o,
            onDismissCTA: d,
            isTargetingCurrentUser: g,
        }),
        v = (0, z.A)(a),
        {
            status: L,
            recommendations: O,
            skusToUserAndReason: G,
            hasBothSources: H,
        } = er({ userId: n, applicationId: a, channel: r, numItems: 8 }),
        U = "loading" === L || 0 === O.length || null == _,
        W = l.useMemo(
            () =>
                null == _ || 0 === O.length
                    ? []
                    : (O.length > 8 ? O.slice(0, 8) : O).map((e) => {
                          let t = (G[e.id] ?? {})[n] === F.j.WISHLIST;
                          return (0, i.jsx)(
                              $.A,
                              {
                                  sku: e,
                                  targetUser: _,
                                  isTargetingCurrentUser: g,
                                  source: t ? M.uS.WISHLIST : M.uS.POPULAR,
                                  guildId: r.guild_id,
                                  channelId: r.id,
                                  showIcons: H,
                                  analyticsLocations: c,
                                  onCardClick: s,
                                  onButtonClick: s,
                              },
                              e.id,
                          );
                      }),
            [_, O, r.guild_id, r.id, G, n, g, H, c, s],
        );
    return (0, i.jsxs)(en, {
        className: t,
        "aria-labelledby": ee,
        children: [
            (0, i.jsxs)(u.B, {
                className: J.wx,
                direction: "vertical",
                gap: 12,
                children: [
                    null != _
                        ? (0, i.jsxs)("div", {
                              className: J.p,
                              children: [
                                  (0, i.jsx)(R.A, {
                                      user: _,
                                      widget: m ?? f,
                                      guildId: r.guild_id,
                                      channelId: r.id,
                                      disableInteraction: !0,
                                      disableCTA: null != h,
                                      embedded: !0,
                                  }),
                                  h,
                              ],
                          })
                        : (0, i.jsx)(ei, { application: v }),
                    (0, i.jsx)(el, { user: _, isGift: !g }),
                ],
            }),
            U ? (0, i.jsx)(A.y, { className: J.Zp }) : (0, i.jsx)("div", { className: J.HV, children: W }),
            (0, i.jsx)(ea, { application: v, onClose: s }),
            (0, i.jsx)(Z.A, { location: "social_layer_vc_gifting_panel", className: J.Ij }),
        ],
    });
}
function ec(e) {
    let { className: t, userId: n, applicationId: a, channel: r, onClose: s } = e;
    (0, D.T)({ location: "social_layer_gifting_voice_panel" });
    let { analyticsLocations: o } = (0, E.Ay)(I.A.SLAYER_STOREFRONT_VC_GIFTING_PANEL),
        d = (0, x.bG)([P.default], () => P.default.getUser(n)),
        c = n === (0, x.bG)([V.default], () => V.default.getId()),
        _ = (0, z.A)(a),
        {
            status: f,
            recommendations: m,
            skusToUserAndReason: p,
            hasBothSources: g,
        } = er({ userId: n, applicationId: a, channel: r, numItems: 8 }),
        h = "loading" === f || 0 === m.length || null == d,
        [v, C] = l.useMemo(() => {
            if (null == d || 0 === m.length) return [null, []];
            let e = m.length > 7 ? m.slice(0, 7) : m,
                t = (p[e[0].id] ?? {})[n] === F.j.WISHLIST;
            return [
                (0, i.jsx)(Y.A, {
                    sku: e[0],
                    targetUser: d,
                    isTargetingCurrentUser: c,
                    source: t ? M.uS.WISHLIST : M.uS.POPULAR,
                    guildId: r.guild_id,
                    channelId: r.id,
                    showIcons: g,
                    analyticsLocations: o,
                    onCardClick: s,
                    onButtonClick: s,
                }),
                e.slice(1).map((e) => {
                    let t = (p[e.id] ?? {})[n] === F.j.WISHLIST;
                    return (0, i.jsx)(
                        $.A,
                        {
                            sku: e,
                            targetUser: d,
                            isTargetingCurrentUser: c,
                            source: t ? M.uS.WISHLIST : M.uS.POPULAR,
                            guildId: r.guild_id,
                            channelId: r.id,
                            showIcons: g,
                            analyticsLocations: o,
                            onCardClick: s,
                            onButtonClick: s,
                        },
                        e.id,
                    );
                }),
            ];
        }, [d, m, p, n, c, r.guild_id, r.id, g, o, s]);
    return (0, i.jsxs)(en, {
        className: t,
        "aria-labelledby": ee,
        children: [
            (0, i.jsxs)(u.B, {
                className: J.wx,
                direction: "vertical",
                gap: 12,
                children: [(0, i.jsx)(ei, { application: _ }), (0, i.jsx)(el, { user: d, isGift: !c })],
            }),
            h
                ? (0, i.jsx)(A.y, { className: J.kc })
                : (0, i.jsxs)(u.B, {
                      direction: "vertical",
                      gap: 12,
                      children: [v, (0, i.jsx)("div", { className: J.aS, children: C })],
                  }),
            (0, i.jsx)(ea, { application: _, onClose: s }),
            (0, i.jsx)(Z.A, { location: "social_layer_vc_gifting_panel", className: J.Ij }),
        ],
    });
}
