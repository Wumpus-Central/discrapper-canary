n.d(t, { Vp: () => W, Z: () => z, fd: () => K });
var i = n(627968),
    l = n(64700),
    a = n(835245),
    s = n(695095),
    r = n(158954),
    o = n(311907),
    c = n(793574),
    d = n(688810),
    u = n(201718),
    h = n(633075),
    m = n(622543),
    A = n(605694),
    g = n(246356),
    p = n(332772),
    _ = n(594832),
    f = n(631784),
    E = n(310209),
    C = n(961350),
    x = n(287809),
    S = n(954571),
    I = n(427262),
    T = n(871123),
    v = n(832163),
    N = n(453774),
    y = n(44724),
    b = n(84511),
    j = n(817176),
    R = n(129114),
    M = n(652215),
    L = n(360469),
    O = n(985018),
    D = n(274647);
let P = `vc-gifting-${(0, a.A)()}`,
    U = Object.freeze([]);
function k(e) {
    let { "aria-labelledby": t, children: n } = e;
    return (0, i.jsx)("div", {
        onClick: (e) => e.stopPropagation(),
        children: (0, i.jsx)(g.A, { children: (0, i.jsx)(r.lGe, { "aria-labelledby": t, modal: !1, children: n }) }),
    });
}
function w(e) {
    let { application: t } = e;
    if (null == t) return null;
    let n = t.getIconURL(L.iu.SMALL);
    return (0, i.jsxs)(r.BJc, {
        direction: "horizontal",
        gap: 4,
        align: "center",
        children: [
            null != n && (0, i.jsx)("img", { className: D.In, src: n, alt: t.name }),
            (0, i.jsx)(r.EYj, { className: D.DD, variant: "text-sm/normal", children: t.name }),
        ],
    });
}
function G(e) {
    let { user: t, isGift: n } = e,
        l = O.intl.string(O.t.kv4lSp),
        a = O.intl.string(O.t.vzZoSF);
    return (
        n &&
            ((l = null != t ? O.intl.format(O.t.YwV901, { username: I.Ay.getName(t) }) : O.intl.string(O.t.qCmNFr)),
            (a = O.intl.string(O.t.SSgrne))),
        (0, i.jsxs)(r.BJc, {
            direction: "vertical",
            gap: 4,
            children: [
                (0, i.jsx)(r.DZT, { id: P, className: D.DD, variant: "text-md/normal", children: l }),
                (0, i.jsx)(r.EYj, { variant: "text-sm/medium", color: "text-subtle", children: a }),
            ],
        })
    );
}
function F(e) {
    let { application: t, onClose: n } = e,
        a = t?.id,
        s = l.useCallback(() => {
            if (null != a) {
                let e = v.A.getGuildIdFromApplicationId(a);
                null != e && (0, y.X)({ guildId: e });
            }
        }, [a]),
        o = l.useCallback(() => {
            if (null != a) {
                let e = v.A.getGuildIdFromApplicationId(a);
                null != e && (n(), (0, y.default)({ guildId: e }));
            }
        }, [a, n]);
    return null == t
        ? null
        : (0, i.jsx)(r.$nd, {
              variant: "secondary",
              icon: r.I9m,
              iconPosition: "end",
              text: O.intl.format(O.t["HDT/rg"], { applicationName: t.name }),
              onClick: o,
              onMouseDown: s,
              fullWidth: !0,
          });
}
function H(e) {
    let { userId: t, applicationId: n, channel: i, numItems: a } = e,
        r = l.useMemo(() => [t], [t]),
        o = l.useMemo(() => (null != n ? [n] : []), [n]),
        {
            status: c,
            recommendations: d,
            skusToUserAndReason: u,
        } = (0, f.XQ)({ userIds: r, applicationIds: o, numItems: a }),
        h = "loading" === c || 0 === d.length,
        m = (0, s.A)(h ? U : d, B),
        A = l.useMemo(() => {
            let { hasWishlist: e, hasPopular: t } = (0, T.wH)(d, u, new Set(r));
            return e && t;
        }, [d, u, r]);
    return (
        l.useEffect(() => {
            0 !== d.length &&
                S.default.track(M.HAw.COMMERCE_SHOP_VC_GIFT_BUTTON_VIEWED, {
                    guild_id: i.guild_id,
                    channel_id: i.id,
                    sku_ids: d.map((e) => e.id),
                });
        }, [i.id, i.guild_id, d]),
        { status: c, recommendations: m, skusToUserAndReason: u, hasBothSources: A }
    );
}
function B(e, t) {
    return e.id === t.id;
}
function V(e, t) {
    return e instanceof h.R && e.applicationId === t;
}
function W(e) {
    let { userId: t, applicationId: n, channel: a, onClose: s } = e;
    (0, p.T)({ location: "social_layer_gifting_voice_panel" }), (0, u.P)(t);
    let { analyticsLocations: h } = (0, d.Ay)(c.A.SLAYER_STOREFRONT_VC_GIFTING_PANEL),
        g = (0, o.bG)([x.default], () => x.default.getUser(t)),
        f = (0, o.bG)([m.A], () => m.A.getWidgets(t)?.find((e) => V(e, n))),
        S = t === (0, o.bG)([C.default], () => C.default.getId()),
        I = (0, N.A)(n),
        {
            status: T,
            recommendations: v,
            skusToUserAndReason: y,
            hasBothSources: j,
        } = H({ userId: t, applicationId: n, channel: a, numItems: 8 }),
        M = "loading" === T || 0 === v.length || null == g,
        L = l.useMemo(
            () =>
                null == g || 0 === v.length
                    ? []
                    : (v.length > 8 ? v.slice(0, 8) : v).map((e) => {
                          let n = (y[e.id] ?? {})[t] === E.j.WISHLIST;
                          return (0, i.jsx)(
                              R.A,
                              {
                                  sku: e,
                                  targetUser: g,
                                  isTargetingCurrentUser: S,
                                  source: n ? _.uS.WISHLIST : _.uS.POPULAR,
                                  guildId: a.guild_id,
                                  channelId: a.id,
                                  showIcons: j,
                                  analyticsLocations: h,
                                  onCardClick: s,
                                  onButtonClick: s,
                              },
                              e.id,
                          );
                      }),
            [g, v, a.guild_id, a.id, y, t, S, j, h, s],
        );
    return (0, i.jsx)(k, {
        "aria-labelledby": P,
        children: (0, i.jsxs)("div", {
            className: D.kL,
            children: [
                (0, i.jsxs)(r.BJc, {
                    className: D.wx,
                    direction: "vertical",
                    gap: 12,
                    children: [
                        null != g && null != f
                            ? (0, i.jsx)("div", {
                                  className: D.p,
                                  children: (0, i.jsx)(A.A, {
                                      user: g,
                                      widget: f,
                                      guildId: a.guild_id,
                                      channelId: a.id,
                                      disableInteraction: !0,
                                      embedded: !0,
                                  }),
                              })
                            : (0, i.jsx)(w, { application: I }),
                        (0, i.jsx)(G, { user: g, isGift: !S }),
                    ],
                }),
                M ? (0, i.jsx)(r.y$y, { className: D.Zp }) : (0, i.jsx)("div", { className: D.HV, children: L }),
                (0, i.jsx)(F, { application: I, onClose: s }),
                (0, i.jsx)(b.A, { location: "social_layer_vc_gifting_panel", className: D.Ij }),
            ],
        }),
    });
}
function K(e) {
    let { userId: t, applicationId: n, channel: l } = e;
    (0, u.P)(t);
    let a = (0, o.bG)([x.default], () => x.default.getUser(t)),
        s = (0, o.bG)([m.A], () => m.A.getWidgets(t)?.find((e) => V(e, n))),
        c = null == a || null == s;
    return (0, i.jsx)(k, {
        children: (0, i.jsx)("div", {
            className: D.kL,
            children: c
                ? (0, i.jsx)(r.y$y, { className: D.ps })
                : (0, i.jsx)("div", {
                      className: D.$4,
                      children: (0, i.jsx)(A.A, {
                          user: a,
                          widget: s,
                          guildId: l.guild_id,
                          channelId: l.id,
                          disableInteraction: !0,
                          embedded: !0,
                      }),
                  }),
        }),
    });
}
function z(e) {
    let { userId: t, applicationId: n, channel: a, onClose: s } = e;
    (0, p.T)({ location: "social_layer_gifting_voice_panel" });
    let { analyticsLocations: u } = (0, d.Ay)(c.A.SLAYER_STOREFRONT_VC_GIFTING_PANEL),
        h = (0, o.bG)([x.default], () => x.default.getUser(t)),
        m = t === (0, o.bG)([C.default], () => C.default.getId()),
        A = (0, N.A)(n),
        {
            status: g,
            recommendations: f,
            skusToUserAndReason: S,
            hasBothSources: I,
        } = H({ userId: t, applicationId: n, channel: a, numItems: 8 }),
        T = "loading" === g || 0 === f.length || null == h,
        [v, y] = l.useMemo(() => {
            if (null == h || 0 === f.length) return [null, []];
            let e = f.length > 7 ? f.slice(0, 7) : f,
                n = (S[e[0].id] ?? {})[t] === E.j.WISHLIST;
            return [
                (0, i.jsx)(j.A, {
                    sku: e[0],
                    targetUser: h,
                    isTargetingCurrentUser: m,
                    source: n ? _.uS.WISHLIST : _.uS.POPULAR,
                    guildId: a.guild_id,
                    channelId: a.id,
                    showIcons: I,
                    analyticsLocations: u,
                    onCardClick: s,
                    onButtonClick: s,
                }),
                e.slice(1).map((e) => {
                    let n = (S[e.id] ?? {})[t] === E.j.WISHLIST;
                    return (0, i.jsx)(
                        R.A,
                        {
                            sku: e,
                            targetUser: h,
                            isTargetingCurrentUser: m,
                            source: n ? _.uS.WISHLIST : _.uS.POPULAR,
                            guildId: a.guild_id,
                            channelId: a.id,
                            showIcons: I,
                            analyticsLocations: u,
                            onCardClick: s,
                            onButtonClick: s,
                        },
                        e.id,
                    );
                }),
            ];
        }, [h, f, S, t, m, a.guild_id, a.id, I, u, s]);
    return (0, i.jsx)(k, {
        "aria-labelledby": P,
        children: (0, i.jsxs)("div", {
            className: D.kL,
            children: [
                (0, i.jsxs)(r.BJc, {
                    className: D.wx,
                    direction: "vertical",
                    gap: 12,
                    children: [(0, i.jsx)(w, { application: A }), (0, i.jsx)(G, { user: h, isGift: !m })],
                }),
                T
                    ? (0, i.jsx)(r.y$y, { className: D.kc })
                    : (0, i.jsxs)(r.BJc, {
                          direction: "vertical",
                          gap: 12,
                          children: [v, (0, i.jsx)("div", { className: D.aS, children: y })],
                      }),
                (0, i.jsx)(F, { application: A, onClose: s }),
                (0, i.jsx)(b.A, { location: "social_layer_vc_gifting_panel", className: D.Ij }),
            ],
        }),
    });
}
