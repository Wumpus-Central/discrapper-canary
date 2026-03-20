"use strict";
n.d(t, { A: () => B });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(735438),
    o = n(835245),
    c = n(695095),
    d = n(357758),
    u = n(158954),
    h = n(311907),
    A = n(52133),
    m = n(568598),
    g = n(313961),
    p = n(246356),
    _ = n(178213),
    f = n(332772),
    x = n(594832),
    C = n(631784),
    E = n(721932),
    I = n(310209),
    N = n(961350),
    b = n(290863),
    S = n(954571),
    T = n(403362),
    v = n(871123),
    y = n(832163),
    j = n(453774),
    R = n(533562),
    O = n(568751),
    L = n(620406),
    M = n(84511),
    D = n(652215),
    G = n(806931),
    U = n(985018),
    P = n(430071);
let w = `vc-gifting-${(0, o.A)()}`,
    k = Object.freeze([]);
function V(e, t) {
    let [n, i] = e,
        [s, l] = t;
    return (0, A.v)(n, s) && (0, d._)(i, l);
}
function B(e) {
    let { isHovered: t, closePopout: n, onMouseEnter: l, onMouseLeave: o, channel: d } = e;
    s.useEffect(() => {
        t || n();
    }, [n, t]);
    let A = (0, _.GG)("social_layer_storefront_gifting_mini_shelf");
    (0, f.T)({ location: "social_layer_storefront_gifting_mini_shelf" });
    let B = (0, h.bG)([y.A], () => y.A.getStorefrontDetectableGameAndApplicationIds()),
        F = (0, R.W)(),
        [K] = (0, h.bG)(
            [g.A],
            () => (null != d.id ? [g.A.getParticipants(d.id), g.A.getParticipantsVersion(d.id)] : [[], 0]),
            [d.id],
            m.hS,
        ),
        [W, Y] = (0, h.bG)(
            [b.A],
            () => {
                let e = new Set(),
                    t = new Set();
                for (let n of (null != F && t.add(F), K))
                    if ((0, G.Xw)(n) || (0, G.Ay)(n)) {
                        for (let i of b.A.getActivities(n.user.id))
                            if (null != i.application_id && B.has(i.application_id)) {
                                e.add(n.user.id), t.add(i.application_id);
                                break;
                            }
                    }
                return [Array.from(e).sort(), t];
            },
            [K, B, F],
            V,
        ),
        z = (0, h.bG)([N.default], () => N.default.getId()),
        q = s.useMemo(() => {
            let e = K.map((e) => ((0, G.Xw)(e) || (0, G.Ay)(e) ? e.user.id : null)).filter(T.Vq);
            return (0, r.uniq)([...W, ...e]);
        }, [K, W]),
        X = (0, j.dV)(Y),
        J = (0, j.UE)(X),
        {
            status: Q,
            recommendations: $,
            skusToUserAndReason: Z,
        } = (0, C.XQ)({ applicationIds: X, numItems: 6, userIds: q }),
        ee = "loading" === Q || 0 === $.length,
        et = s.useMemo(() => $.map((e) => E.A.fromSKU(e)).filter(T.Vq), [$]),
        en = (0, c.A)(ee ? k : et, H),
        ei = s.useMemo(() => {
            let e = new Set(q),
                { hasWishlist: t, hasPopular: n } = (0, v.wH)($, Z, e),
                s = t && n;
            return en.map((t) => {
                let n = Object.entries(Z[t.skuId] ?? {})
                        .filter((t) => {
                            let [n, i] = t;
                            return i === I.j.WISHLIST && e.has(n);
                        })
                        .map((e) => {
                            let [t] = e;
                            return t;
                        }),
                    l = n.filter((e) => e !== z),
                    a = q.filter((e) => e !== z);
                return A
                    ? (0, i.jsx)(
                          O.A,
                          {
                              sku: t.sku,
                              source: n.length > 0 ? x.uS.WISHLIST : x.uS.POPULAR,
                              application: J[t.sku.applicationId],
                              guildId: d.guild_id,
                              channelId: d.id,
                              showIcons: s,
                              userIdsForGifting: a,
                              userIdsForRecommendation: l,
                          },
                          t.skuId,
                      )
                    : (0, i.jsx)(
                          L.A,
                          {
                              variant: n.length > 0 ? L.$.WISHLIST : L.$.POPULAR,
                              wishlistItem: t,
                              userIdsForRecommendation: n,
                              userIdsForGifting: q,
                              guildId: d.guild_id,
                              channelId: d.id,
                              contextContainerClassName: P.RL,
                          },
                          t.skuId,
                      );
            });
        }, [z, q, $, en, Z, A, J, d.guild_id, d.id]);
    return (
        s.useEffect(() => {
            0 !== $.length &&
                S.default.track(D.HAw.COMMERCE_SHOP_VC_GIFT_BUTTON_VIEWED, {
                    guild_id: d.guild_id,
                    channel_id: d.id,
                    sku_ids: $.map((e) => e.id),
                });
        }, [d.id, d.guild_id, $]),
        (0, i.jsx)(p.A, {
            children: (0, i.jsx)(u.lGe, {
                "aria-labelledby": w,
                modal: !1,
                children: (0, i.jsxs)("div", {
                    className: P.kL,
                    onMouseEnter: l,
                    onMouseLeave: o,
                    children: [
                        (0, i.jsx)("div", {
                            className: P.wx,
                            children: (0, i.jsxs)("div", {
                                children: [
                                    (0, i.jsx)(u.DZT, {
                                        className: P.DD,
                                        variant: "text-lg/bold",
                                        color: "text-strong",
                                        children: U.intl.string(U.t.xLP3bi),
                                    }),
                                    (0, i.jsx)(u.EYj, {
                                        variant: "text-sm/medium",
                                        color: "text-subtle",
                                        children: U.intl.format(U.t["+SqhBF"], {
                                            applicationName:
                                                Object.values(J).length > 0
                                                    ? (Object.values(J)[0]?.name ?? U.intl.string(U.t["/1hhto"]))
                                                    : U.intl.string(U.t["/1hhto"]),
                                        }),
                                    }),
                                ],
                            }),
                        }),
                        (0, i.jsx)("div", {
                            className: a()(P.Xb, { [P.Im]: A }),
                            children: ee ? (0, i.jsx)(u.y$y, { className: A ? P.Dv : P.Lq }) : ei,
                        }),
                        (0, i.jsx)(M.A, { location: "social_layer_gifting_mini_shelf", className: P.Ij }),
                    ],
                }),
            }),
        })
    );
}
function H(e, t) {
    return e.skuId === t.skuId;
}
