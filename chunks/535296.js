n.d(t, { Vp: () => V, Z: () => W, fd: () => K });
var i = n(627968),
    l = n(64700),
    s = n(835245),
    a = n(695095),
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
    f = n(594832),
    _ = n(631784),
    E = n(310209),
    x = n(961350),
    C = n(287809),
    S = n(954571),
    I = n(427262),
    T = n(871123),
    N = n(832163),
    v = n(453774),
    y = n(44724),
    b = n(84511),
    j = n(817176),
    R = n(129114),
    M = n(652215),
    O = n(360469),
    D = n(985018),
    L = n(274647);
let P = `vc-gifting-${(0, s.A)()}`,
    k = Object.freeze([]);
function w(e) {
    let { application: t } = e;
    if (null == t) return null;
    let n = t.getIconURL(O.iu.SMALL);
    return (0, i.jsxs)(r.BJc, {
        direction: "horizontal",
        gap: 4,
        align: "center",
        children: [
            null != n && (0, i.jsx)("img", { className: L.In, src: n, alt: t.name }),
            (0, i.jsx)(r.EYj, { className: L.DD, variant: "text-sm/normal", children: t.name }),
        ],
    });
}
function U(e) {
    let { user: t, isGift: n } = e,
        l = D.intl.string(D.t.kv4lSp),
        s = D.intl.string(D.t.vzZoSF);
    return (
        n &&
            ((l = null != t ? D.intl.format(D.t.YwV901, { username: I.Ay.getName(t) }) : D.intl.string(D.t.qCmNFr)),
            (s = D.intl.string(D.t.SSgrne))),
        (0, i.jsxs)(r.BJc, {
            direction: "vertical",
            gap: 4,
            children: [
                (0, i.jsx)(r.DZT, { id: P, className: L.DD, variant: "text-md/normal", children: l }),
                (0, i.jsx)(r.EYj, { variant: "text-sm/medium", color: "text-subtle", children: s }),
            ],
        })
    );
}
function G(e) {
    let { application: t, onClose: n } = e,
        s = t?.id,
        a = l.useCallback(() => {
            if (null != s) {
                let e = N.A.getGuildIdFromApplicationId(s);
                null != e && (0, y.X)({ guildId: e });
            }
        }, [s]),
        o = l.useCallback(() => {
            if (null != s) {
                let e = N.A.getGuildIdFromApplicationId(s);
                null != e && (n(), (0, y.default)({ guildId: e }));
            }
        }, [s, n]);
    return null == t
        ? null
        : (0, i.jsx)(r.$nd, {
              variant: "secondary",
              icon: r.I9m,
              iconPosition: "end",
              text: D.intl.format(D.t["HDT/rg"], { applicationName: t.name }),
              onClick: o,
              onMouseDown: a,
              fullWidth: !0,
          });
}
function F(e) {
    let { userId: t, applicationId: n, channel: i, numItems: s } = e,
        r = l.useMemo(() => [t], [t]),
        o = l.useMemo(() => (null != n ? [n] : []), [n]),
        {
            status: c,
            recommendations: d,
            skusToUserAndReason: u,
        } = (0, _.XQ)({ userIds: r, applicationIds: o, numItems: s }),
        h = "loading" === c || 0 === d.length,
        m = (0, a.A)(h ? k : d, B),
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
function H(e, t) {
    return e instanceof h.R && e.applicationId === t;
}
function V(e) {
    let { userId: t, applicationId: n, channel: s, onClose: a } = e;
    (0, p.T)({ location: "social_layer_gifting_voice_panel" }), (0, u.P)(t);
    let { analyticsLocations: h } = (0, d.Ay)(c.A.SLAYER_STOREFRONT_VC_GIFTING_PANEL),
        _ = (0, o.bG)([C.default], () => C.default.getUser(t)),
        S = (0, o.bG)([m.A], () => m.A.getWidgets(t)?.find((e) => H(e, n))),
        I = t === (0, o.bG)([x.default], () => x.default.getId()),
        T = (0, v.A)(n),
        {
            status: N,
            recommendations: y,
            skusToUserAndReason: j,
            hasBothSources: M,
        } = F({ userId: t, applicationId: n, channel: s, numItems: 8 }),
        O = "loading" === N || 0 === y.length || null == _,
        D = l.useMemo(
            () =>
                null == _ || 0 === y.length
                    ? []
                    : y.map((e) => {
                          let n = (j[e.id] ?? {})[t] === E.j.WISHLIST;
                          return (0, i.jsx)(
                              R.A,
                              {
                                  sku: e,
                                  targetUser: _,
                                  isTargetingCurrentUser: I,
                                  source: n ? f.uS.WISHLIST : f.uS.POPULAR,
                                  guildId: s.guild_id,
                                  channelId: s.id,
                                  showIcons: M,
                                  analyticsLocations: h,
                                  onCardClick: a,
                                  onButtonClick: a,
                              },
                              e.id,
                          );
                      }),
            [_, y, s.guild_id, s.id, j, t, I, M, h, a],
        );
    return (0, i.jsx)(g.A, {
        children: (0, i.jsx)(r.lGe, {
            "aria-labelledby": P,
            modal: !1,
            children: (0, i.jsxs)("div", {
                className: L.kL,
                children: [
                    (0, i.jsxs)(r.BJc, {
                        className: L.wx,
                        direction: "vertical",
                        gap: 12,
                        children: [
                            null != _ && null != S
                                ? (0, i.jsx)("div", {
                                      className: L.p,
                                      children: (0, i.jsx)(A.A, {
                                          user: _,
                                          widget: S,
                                          guildId: s.guild_id,
                                          channelId: s.id,
                                          disableInteraction: !0,
                                          embedded: !0,
                                      }),
                                  })
                                : (0, i.jsx)(w, { application: T }),
                            (0, i.jsx)(U, { user: _, isGift: !I }),
                        ],
                    }),
                    O ? (0, i.jsx)(r.y$y, { className: L.Zp }) : (0, i.jsx)("div", { className: L.HV, children: D }),
                    (0, i.jsx)(G, { application: T, onClose: a }),
                    (0, i.jsx)(b.A, { location: "social_layer_vc_gifting_panel", className: L.Ij }),
                ],
            }),
        }),
    });
}
function K(e) {
    let { userId: t, applicationId: n, channel: l } = e;
    (0, u.P)(t);
    let s = (0, o.bG)([C.default], () => C.default.getUser(t)),
        a = (0, o.bG)([m.A], () => m.A.getWidgets(t)?.find((e) => H(e, n))),
        c = null == s || null == a;
    return (0, i.jsx)(g.A, {
        children: (0, i.jsx)(r.lGe, {
            modal: !1,
            children: (0, i.jsx)("div", {
                className: L.kL,
                children: c
                    ? (0, i.jsx)(r.y$y, { className: L.ps })
                    : (0, i.jsx)("div", {
                          className: L.$4,
                          children: (0, i.jsx)(A.A, {
                              user: s,
                              widget: a,
                              guildId: l.guild_id,
                              channelId: l.id,
                              disableInteraction: !0,
                              embedded: !0,
                          }),
                      }),
            }),
        }),
    });
}
function W(e) {
    let { userId: t, applicationId: n, channel: s, onClose: a } = e;
    (0, p.T)({ location: "social_layer_gifting_voice_panel" });
    let { analyticsLocations: u } = (0, d.Ay)(c.A.SLAYER_STOREFRONT_VC_GIFTING_PANEL),
        h = (0, o.bG)([C.default], () => C.default.getUser(t)),
        m = t === (0, o.bG)([x.default], () => x.default.getId()),
        A = (0, v.A)(n),
        {
            status: _,
            recommendations: S,
            skusToUserAndReason: I,
            hasBothSources: T,
        } = F({ userId: t, applicationId: n, channel: s, numItems: 7 }),
        N = "loading" === _ || 0 === S.length || null == h,
        [y, M] = l.useMemo(() => {
            if (null == h || 0 === S.length) return [null, []];
            let e = (I[S[0].id] ?? {})[t] === E.j.WISHLIST;
            return [
                (0, i.jsx)(j.A, {
                    sku: S[0],
                    targetUser: h,
                    isTargetingCurrentUser: m,
                    source: e ? f.uS.WISHLIST : f.uS.POPULAR,
                    guildId: s.guild_id,
                    channelId: s.id,
                    showIcons: T,
                    analyticsLocations: u,
                    onCardClick: a,
                    onButtonClick: a,
                }),
                S.slice(1).map((e) => {
                    let n = (I[e.id] ?? {})[t] === E.j.WISHLIST;
                    return (0, i.jsx)(
                        R.A,
                        {
                            sku: e,
                            targetUser: h,
                            isTargetingCurrentUser: m,
                            source: n ? f.uS.WISHLIST : f.uS.POPULAR,
                            guildId: s.guild_id,
                            channelId: s.id,
                            showIcons: T,
                            analyticsLocations: u,
                            onCardClick: a,
                            onButtonClick: a,
                        },
                        e.id,
                    );
                }),
            ];
        }, [h, S, I, t, m, s.guild_id, s.id, T, u, a]);
    return (0, i.jsx)(g.A, {
        children: (0, i.jsx)(r.lGe, {
            "aria-labelledby": P,
            modal: !1,
            children: (0, i.jsxs)("div", {
                className: L.kL,
                children: [
                    (0, i.jsxs)(r.BJc, {
                        className: L.wx,
                        direction: "vertical",
                        gap: 12,
                        children: [(0, i.jsx)(w, { application: A }), (0, i.jsx)(U, { user: h, isGift: !m })],
                    }),
                    N
                        ? (0, i.jsx)(r.y$y, { className: L.kc })
                        : (0, i.jsxs)(r.BJc, {
                              direction: "vertical",
                              gap: 12,
                              children: [y, (0, i.jsx)("div", { className: L.aS, children: M })],
                          }),
                    (0, i.jsx)(G, { application: A, onClose: a }),
                    (0, i.jsx)(b.A, { location: "social_layer_vc_gifting_panel", className: L.Ij }),
                ],
            }),
        }),
    });
}
