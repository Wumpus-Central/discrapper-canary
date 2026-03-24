"use strict";
n.d(t, { A: () => V });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(735438),
    o = n(835245),
    c = n(695095),
    d = n(158954),
    u = n(311907),
    h = n(52133),
    A = n(568598),
    m = n(313961),
    _ = n(246356),
    p = n(178213),
    g = n(332772),
    f = n(594832),
    x = n(631784),
    C = n(721932),
    E = n(310209),
    I = n(961350),
    N = n(290863),
    b = n(954571),
    S = n(403362),
    T = n(871123),
    v = n(832163),
    y = n(453774),
    j = n(533562),
    R = n(568751),
    O = n(620406),
    L = n(84511),
    M = n(652215),
    D = n(806931),
    G = n(985018),
    U = n(877409);
let P = `vc-gifting-${(0, o.A)()}`,
    w = Object.freeze([]);
function k(e, t) {
    let [n, i] = e,
        [s, l] = t;
    return (0, h.v)(n, s) && (0, h.v)(i, l);
}
function V(e) {
    let { isHovered: t, closePopout: n, onMouseEnter: l, onMouseLeave: o, channel: h } = e;
    s.useEffect(() => {
        t || n();
    }, [n, t]);
    let V = (0, p.GG)("social_layer_storefront_gifting_mini_shelf");
    (0, g.T)({ location: "social_layer_storefront_gifting_mini_shelf" });
    let H = (0, u.bG)([v.A], () => v.A.getDetectableIdsToApplicationIds()),
        F = (0, j.W)(),
        [K] = (0, u.bG)(
            [m.A],
            () => (null != h.id ? [m.A.getParticipants(h.id), m.A.getParticipantsVersion(h.id)] : [[], 0]),
            [h.id],
            A.hS,
        ),
        [W, Y] = (0, u.bG)(
            [N.A],
            () => {
                let e = new Set(),
                    t = new Set();
                for (let n of (null != F && t.add(F), K))
                    if ((0, D.Xw)(n) || (0, D.Ay)(n)) {
                        for (let i of N.A.getActivities(n.user.id))
                            if (null != i.application_id && null != H[i.application_id]) {
                                e.add(n.user.id), t.add(H[i.application_id]);
                                break;
                            }
                    }
                return [Array.from(e).sort(), Array.from(t).sort()];
            },
            [K, H, F],
            k,
        ),
        z = (0, u.bG)([I.default], () => I.default.getId()),
        q = s.useMemo(() => {
            let e = K.map((e) => ((0, D.Xw)(e) || (0, D.Ay)(e) ? e.user.id : null)).filter(S.Vq);
            return (0, r.uniq)([...W, ...e]);
        }, [K, W]),
        X = (0, y.U)(Y),
        {
            status: J,
            recommendations: Q,
            skusToUserAndReason: $,
        } = (0, x.XQ)({ applicationIds: Y, numItems: 6, userIds: q }),
        Z = "loading" === J || 0 === Q.length,
        ee = s.useMemo(() => Q.map((e) => C.A.fromSKU(e)).filter(S.Vq), [Q]),
        et = (0, c.A)(Z ? w : ee, B),
        en = s.useMemo(() => {
            let e = new Set(q),
                { hasWishlist: t, hasPopular: n } = (0, T.wH)(Q, $, e),
                s = t && n;
            return et.map((t) => {
                let n = Object.entries($[t.skuId] ?? {})
                        .filter((t) => {
                            let [n, i] = t;
                            return i === E.j.WISHLIST && e.has(n);
                        })
                        .map((e) => {
                            let [t] = e;
                            return t;
                        }),
                    l = n.filter((e) => e !== z),
                    a = q.filter((e) => e !== z);
                return V
                    ? (0, i.jsx)(
                          R.A,
                          {
                              sku: t.sku,
                              source: n.length > 0 ? f.uS.WISHLIST : f.uS.POPULAR,
                              application: X[t.sku.applicationId],
                              guildId: h.guild_id,
                              channelId: h.id,
                              showIcons: s,
                              userIdsForGifting: a,
                              userIdsForRecommendation: l,
                          },
                          t.skuId,
                      )
                    : (0, i.jsx)(
                          O.A,
                          {
                              variant: n.length > 0 ? O.$.WISHLIST : O.$.POPULAR,
                              wishlistItem: t,
                              userIdsForRecommendation: n,
                              userIdsForGifting: q,
                              guildId: h.guild_id,
                              channelId: h.id,
                              contextContainerClassName: U.RL,
                          },
                          t.skuId,
                      );
            });
        }, [z, q, Q, et, $, V, X, h.guild_id, h.id]);
    return (
        s.useEffect(() => {
            0 !== Q.length &&
                b.default.track(M.HAw.COMMERCE_SHOP_VC_GIFT_BUTTON_VIEWED, {
                    guild_id: h.guild_id,
                    channel_id: h.id,
                    sku_ids: Q.map((e) => e.id),
                });
        }, [h.id, h.guild_id, Q]),
        (0, i.jsx)(_.A, {
            children: (0, i.jsx)(d.lGe, {
                "aria-labelledby": P,
                modal: !1,
                children: (0, i.jsxs)("div", {
                    className: U.kL,
                    onMouseEnter: l,
                    onMouseLeave: o,
                    children: [
                        (0, i.jsx)("div", {
                            className: U.wx,
                            children: (0, i.jsxs)("div", {
                                children: [
                                    (0, i.jsx)(d.DZT, {
                                        className: U.DD,
                                        variant: "text-lg/bold",
                                        color: "text-strong",
                                        children: G.intl.string(G.t.xLP3bi),
                                    }),
                                    (0, i.jsx)(d.EYj, {
                                        variant: "text-sm/medium",
                                        color: "text-subtle",
                                        children: G.intl.format(G.t["+SqhBF"], {
                                            applicationName:
                                                Object.values(X).length > 0
                                                    ? (Object.values(X)[0]?.name ?? G.intl.string(G.t["/1hhto"]))
                                                    : G.intl.string(G.t["/1hhto"]),
                                        }),
                                    }),
                                ],
                            }),
                        }),
                        (0, i.jsx)("div", {
                            className: a()(U.Xb, { [U.Im]: V }),
                            children: Z ? (0, i.jsx)(d.y$y, { className: V ? U.Dv : U.Lq }) : en,
                        }),
                        (0, i.jsx)(L.A, { location: "social_layer_gifting_mini_shelf", className: U.Ij }),
                    ],
                }),
            }),
        })
    );
}
function B(e, t) {
    return e.skuId === t.skuId;
}
