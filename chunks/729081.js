"use strict";
n.d(t, { A: () => w });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(735438),
    o = n(835245),
    c = n(357758),
    d = n(158954),
    u = n(311907),
    h = n(52133),
    A = n(568598),
    m = n(313961),
    g = n(246356),
    p = n(178213),
    _ = n(332772),
    f = n(594832),
    x = n(631784),
    C = n(721932),
    E = n(310209),
    I = n(290863),
    N = n(954571),
    b = n(403362),
    S = n(871123),
    T = n(832163),
    v = n(453774),
    y = n(533562),
    j = n(568751),
    R = n(620406),
    O = n(84511),
    L = n(652215),
    M = n(806931),
    D = n(985018),
    G = n(430071);
let U = `vc-gifting-${(0, o.A)()}`;
function P(e, t) {
    let [n, i] = e,
        [s, l] = t;
    return (0, h.v)(n, s) && (0, c._)(i, l);
}
function w(e) {
    let { isHovered: t, closePopout: n, onMouseEnter: l, onMouseLeave: o, channel: c } = e;
    s.useEffect(() => {
        t || n();
    }, [n, t]);
    let h = (0, p.GG)("social_layer_storefront_gifting_mini_shelf");
    (0, _.T)({ location: "social_layer_storefront_gifting_mini_shelf" });
    let w = (0, u.bG)([T.A], () => T.A.getStorefrontDetectableGameAndApplicationIds()),
        k = (0, y.W)(),
        [V] = (0, u.bG)(
            [m.A],
            () => (null != c.id ? [m.A.getParticipants(c.id), m.A.getParticipantsVersion(c.id)] : [[], 0]),
            [c.id],
            A.hS,
        ),
        [B, H] = (0, u.bG)(
            [I.A],
            () => {
                let e = new Set(),
                    t = new Set();
                for (let n of (null != k && t.add(k), V))
                    if ((0, M.Xw)(n) || (0, M.Ay)(n)) {
                        for (let i of I.A.getActivities(n.user.id))
                            if (null != i.application_id && w.has(i.application_id)) {
                                e.add(n.user.id), t.add(i.application_id);
                                break;
                            }
                    }
                return [Array.from(e).sort(), t];
            },
            [V, w, k],
            P,
        ),
        F = s.useMemo(() => {
            let e = V.map((e) => ((0, M.Xw)(e) || (0, M.Ay)(e) ? e.user.id : null)).filter(b.Vq);
            return (0, r.uniq)([...B, ...e]);
        }, [V, B]),
        K = (0, v.dV)(H),
        W = (0, v.UE)(K),
        {
            status: Y,
            recommendations: z,
            skusToUserAndReason: q,
        } = (0, x.XQ)({ applicationIds: K, numItems: 6, userIds: F }),
        X = s.useMemo(() => z.map((e) => C.A.fromSKU(e)).filter(b.Vq), [z]),
        J = s.useMemo(() => {
            let e = new Set(F),
                { hasWishlist: t, hasPopular: n } = (0, S.wH)(z, q, e),
                s = t && n;
            return X.map((t) => {
                let n = Object.entries(q[t.skuId] ?? {})
                    .filter((t) => {
                        let [n, i] = t;
                        return i === E.j.WISHLIST && e.has(n);
                    })
                    .map((e) => {
                        let [t] = e;
                        return t;
                    });
                return h
                    ? (0, i.jsx)(
                          j.A,
                          {
                              sku: t.sku,
                              source: n.length > 0 ? f.uS.WISHLIST : f.uS.POPULAR,
                              application: W[t.sku.applicationId],
                              guildId: c.guild_id,
                              channelId: c.id,
                              showIcons: s,
                              userIdsForGifting: F,
                              userIdsForRecommendation: n,
                          },
                          t.skuId,
                      )
                    : (0, i.jsx)(
                          R.A,
                          {
                              variant: n.length > 0 ? R.$.WISHLIST : R.$.POPULAR,
                              wishlistItem: t,
                              userIdsForRecommendation: n,
                              userIdsForGifting: F,
                              guildId: c.guild_id,
                              channelId: c.id,
                              contextContainerClassName: G.RL,
                          },
                          t.skuId,
                      );
            });
        }, [F, z, X, q, h, W, c.guild_id, c.id]);
    return (
        s.useEffect(() => {
            0 !== z.length &&
                N.default.track(L.HAw.COMMERCE_SHOP_VC_GIFT_BUTTON_VIEWED, {
                    guild_id: c.guild_id,
                    channel_id: c.id,
                    sku_ids: z.map((e) => e.id),
                });
        }, [c.id, c.guild_id, z]),
        (0, i.jsx)(g.A, {
            children: (0, i.jsx)(d.lGe, {
                "aria-labelledby": U,
                modal: !1,
                children: (0, i.jsxs)("div", {
                    className: G.kL,
                    onMouseEnter: l,
                    onMouseLeave: o,
                    children: [
                        (0, i.jsx)("div", {
                            className: G.wx,
                            children: (0, i.jsxs)("div", {
                                children: [
                                    (0, i.jsx)(d.DZT, {
                                        className: G.DD,
                                        variant: "text-lg/bold",
                                        color: "text-strong",
                                        children: D.intl.string(D.t.xLP3bi),
                                    }),
                                    (0, i.jsx)(d.EYj, {
                                        variant: "text-sm/medium",
                                        color: "text-subtle",
                                        children: D.intl.format(D.t["+SqhBF"], {
                                            applicationName:
                                                Object.values(W).length > 0
                                                    ? (Object.values(W)[0]?.name ?? D.intl.string(D.t["/1hhto"]))
                                                    : D.intl.string(D.t["/1hhto"]),
                                        }),
                                    }),
                                ],
                            }),
                        }),
                        (0, i.jsx)("div", {
                            className: a()(G.Xb, { [G.Im]: h }),
                            children: "loading" === Y || 0 === z.length ? (0, i.jsx)(d.y$y, { className: G.Lq }) : J,
                        }),
                        (0, i.jsx)(O.A, { location: "social_layer_gifting_mini_shelf", className: G.Ij }),
                    ],
                }),
            }),
        })
    );
}
