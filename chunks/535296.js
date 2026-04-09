n.d(t, { Z: () => w });
var i = n(627968),
    l = n(64700),
    s = n(835245),
    a = n(695095),
    r = n(158954),
    o = n(311907),
    c = n(793574),
    d = n(688810);
n(201718), n(633075), n(622543), n(605694);
var u = n(246356),
    h = n(332772),
    m = n(594832),
    A = n(631784),
    g = n(310209),
    p = n(961350),
    _ = n(287809),
    f = n(954571),
    E = n(427262),
    x = n(871123),
    C = n(832163),
    S = n(453774),
    I = n(44724),
    T = n(84511),
    N = n(817176),
    v = n(129114),
    y = n(652215),
    b = n(360469),
    j = n(985018),
    R = n(993204);
let M = `vc-gifting-${(0, s.A)()}`,
    D = Object.freeze([]);
function O(e) {
    let { application: t } = e;
    if (null == t) return null;
    let n = t.getIconURL(b.iu.SMALL);
    return (0, i.jsxs)(r.BJc, {
        direction: "horizontal",
        gap: 4,
        align: "center",
        children: [
            null != n && (0, i.jsx)("img", { className: R.In, src: n, alt: t.name }),
            (0, i.jsx)(r.EYj, { className: R.DD, variant: "text-sm/normal", children: t.name }),
        ],
    });
}
function L(e) {
    let { user: t, isGift: n } = e,
        l = j.intl.string(j.t.kv4lSp),
        s = j.intl.string(j.t.vzZoSF);
    return (
        n &&
            ((l = null != t ? j.intl.format(j.t.YwV901, { username: E.Ay.getName(t) }) : j.intl.string(j.t.qCmNFr)),
            (s = j.intl.string(j.t.SSgrne))),
        (0, i.jsxs)(r.BJc, {
            direction: "vertical",
            gap: 4,
            children: [
                (0, i.jsx)(r.DZT, { id: M, className: R.DD, variant: "text-md/normal", children: l }),
                (0, i.jsx)(r.EYj, { variant: "text-sm/medium", color: "text-subtle", children: s }),
            ],
        })
    );
}
function P(e) {
    let { application: t, onClose: n } = e,
        s = t?.id,
        a = l.useCallback(() => {
            if (null != s) {
                let e = C.A.getGuildIdFromApplicationId(s);
                null != e && (0, I.X)({ guildId: e });
            }
        }, [s]),
        o = l.useCallback(() => {
            if (null != s) {
                let e = C.A.getGuildIdFromApplicationId(s);
                null != e && (n(), (0, I.default)({ guildId: e }));
            }
        }, [s, n]);
    return null == t
        ? null
        : (0, i.jsx)(r.$nd, {
              variant: "secondary",
              icon: r.I9m,
              iconPosition: "end",
              text: j.intl.format(j.t["HDT/rg"], { applicationName: t.name }),
              onClick: o,
              onMouseDown: a,
              fullWidth: !0,
          });
}
function k(e, t) {
    return e.id === t.id;
}
function w(e) {
    let { userId: t, applicationId: n, channel: s, onClose: E } = e;
    (0, h.T)({ location: "social_layer_gifting_voice_panel" });
    let { analyticsLocations: C } = (0, d.Ay)(c.A.SLAYER_STOREFRONT_VC_GIFTING_PANEL),
        I = (0, o.bG)([_.default], () => _.default.getUser(t)),
        b = t === (0, o.bG)([p.default], () => p.default.getId()),
        j = (0, S.A)(n),
        {
            status: w,
            recommendations: U,
            skusToUserAndReason: G,
            hasBothSources: F,
        } = (function (e) {
            let { userId: t, applicationId: n, channel: i, numItems: s } = e,
                r = l.useMemo(() => [t], [t]),
                o = l.useMemo(() => (null != n ? [n] : []), [n]),
                {
                    status: c,
                    recommendations: d,
                    skusToUserAndReason: u,
                } = (0, A.XQ)({ userIds: r, applicationIds: o, numItems: s }),
                h = "loading" === c || 0 === d.length,
                m = (0, a.A)(h ? D : d, k),
                g = l.useMemo(() => {
                    let { hasWishlist: e, hasPopular: t } = (0, x.wH)(d, u, new Set(r));
                    return e && t;
                }, [d, u, r]);
            return (
                l.useEffect(() => {
                    0 !== d.length &&
                        f.default.track(y.HAw.COMMERCE_SHOP_VC_GIFT_BUTTON_VIEWED, {
                            guild_id: i.guild_id,
                            channel_id: i.id,
                            sku_ids: d.map((e) => e.id),
                        });
                }, [i.id, i.guild_id, d]),
                { status: c, recommendations: m, skusToUserAndReason: u, hasBothSources: g }
            );
        })({ userId: t, applicationId: n, channel: s, numItems: 7 }),
        B = "loading" === w || 0 === U.length || null == I,
        [H, V] = l.useMemo(() => {
            if (null == I || 0 === U.length) return [null, []];
            let e = (G[U[0].id] ?? {})[t] === g.j.WISHLIST;
            return [
                (0, i.jsx)(N.A, {
                    sku: U[0],
                    targetUser: I,
                    isTargetingCurrentUser: b,
                    source: e ? m.uS.WISHLIST : m.uS.POPULAR,
                    guildId: s.guild_id,
                    channelId: s.id,
                    showIcons: F,
                    analyticsLocations: C,
                    onCardClick: E,
                    onButtonClick: E,
                }),
                U.slice(1).map((e) => {
                    let n = (G[e.id] ?? {})[t] === g.j.WISHLIST;
                    return (0, i.jsx)(
                        v.A,
                        {
                            sku: e,
                            targetUser: I,
                            isTargetingCurrentUser: b,
                            source: n ? m.uS.WISHLIST : m.uS.POPULAR,
                            guildId: s.guild_id,
                            channelId: s.id,
                            showIcons: F,
                            analyticsLocations: C,
                            onCardClick: E,
                            onButtonClick: E,
                        },
                        e.id,
                    );
                }),
            ];
        }, [I, U, G, t, b, s.guild_id, s.id, F, C, E]);
    return (0, i.jsx)(u.A, {
        children: (0, i.jsx)(r.lGe, {
            "aria-labelledby": M,
            modal: !1,
            children: (0, i.jsxs)("div", {
                className: R.kL,
                children: [
                    (0, i.jsxs)(r.BJc, {
                        className: R.wx,
                        direction: "vertical",
                        gap: 12,
                        children: [(0, i.jsx)(O, { application: j }), (0, i.jsx)(L, { user: I, isGift: !b })],
                    }),
                    B
                        ? (0, i.jsx)(r.y$y, { className: R.kc })
                        : (0, i.jsxs)(r.BJc, {
                              direction: "vertical",
                              gap: 12,
                              children: [H, (0, i.jsx)("div", { className: R.aS, children: V })],
                          }),
                    (0, i.jsx)(P, { application: j, onClose: E }),
                    (0, i.jsx)(T.A, { location: "social_layer_vc_gifting_panel", className: R.Ij }),
                ],
            }),
        }),
    });
}
