"use strict";
n.d(t, { A: () => D });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(735438),
    o = n(835245),
    c = n(158954),
    d = n(311907),
    u = n(587895),
    h = n(568598),
    A = n(313961),
    m = n(246356),
    p = n(178213),
    g = n(332772),
    _ = n(594832),
    f = n(631784),
    x = n(721932),
    C = n(310209),
    E = n(290863),
    I = n(954571),
    N = n(403362),
    b = n(871123),
    S = n(568751),
    T = n(620406),
    v = n(84511),
    y = n(188275),
    j = n(652215),
    R = n(806931),
    O = n(985018),
    L = n(877409);
let M = `vc-gifting-${(0, o.A)()}`;
function D(e) {
    let { isHovered: t, closePopout: n, onMouseEnter: l, onMouseLeave: o, channel: D } = e;
    s.useEffect(() => {
        t || n();
    }, [n, t]);
    let G = (0, p.GG)("social_layer_storefront_gifting_mini_shelf");
    (0, g.T)({ location: "social_layer_storefront_gifting_mini_shelf" });
    let U = (0, d.bG)([u.A], () => u.A.getApplication(y.XR)),
        [P] = (0, d.bG)(
            [A.A],
            () => (null != D.id ? [A.A.getParticipants(D.id), A.A.getParticipantsVersion(D.id)] : [[], 0]),
            [D.id],
            h.hS,
        ),
        w = (0, d.yK)([E.A], () => {
            let e = new Set();
            for (let t of P)
                if ((0, R.Xw)(t) || (0, R.Ay)(t)) {
                    for (let n of E.A.getActivities(t.user.id))
                        if (
                            n.application_id === U?.id ||
                            U?.linkedGames?.some((e) => e.id === n.application_id) === !0
                        ) {
                            e.add(t.user.id);
                            break;
                        }
                }
            return Array.from(e).sort();
        }, [P, U]),
        k = s.useMemo(() => {
            let e = P.map((e) => ((0, R.Xw)(e) || (0, R.Ay)(e) ? e.user.id : null)).filter(N.Vq);
            return (0, a.uniq)([...w, ...e]);
        }, [P, w]),
        V = s.useMemo(() => [y.XR], []),
        {
            status: B,
            recommendations: H,
            skusToUserAndReason: F,
        } = (0, f.XQ)({ applicationIds: V, numItems: 6, userIds: k }),
        K = s.useMemo(() => H.map((e) => x.A.fromSKU(e)).filter(N.Vq), [H]),
        W = s.useMemo(() => {
            let e = new Set(k),
                { hasWishlist: t, hasPopular: n } = (0, b.wH)(H, F, e),
                s = t && n;
            return K.map((t) => {
                let n = Object.entries(F[t.skuId] ?? {})
                    .filter((t) => {
                        let [n, i] = t;
                        return i === C.j.WISHLIST && e.has(n);
                    })
                    .map((e) => {
                        let [t] = e;
                        return t;
                    });
                return G
                    ? (0, i.jsx)(
                          S.A,
                          {
                              sku: t.sku,
                              source: n.length > 0 ? _.uS.WISHLIST : _.uS.POPULAR,
                              application: U,
                              guildId: D.guild_id,
                              channelId: D.id,
                              showIcons: s,
                              userIdsForGifting: k,
                              userIdsForRecommendation: n,
                          },
                          t.skuId,
                      )
                    : (0, i.jsx)(
                          T.A,
                          {
                              variant: n.length > 0 ? T.$.WISHLIST : T.$.POPULAR,
                              wishlistItem: t,
                              userIdsForRecommendation: n,
                              userIdsForGifting: k,
                              guildId: D.guild_id,
                              channelId: D.id,
                              contextContainerClassName: L.RL,
                          },
                          t.skuId,
                      );
            });
        }, [k, H, K, F, G, U, D.guild_id, D.id]);
    return (
        s.useEffect(() => {
            0 !== H.length &&
                I.default.track(j.HAw.COMMERCE_SHOP_VC_GIFT_BUTTON_VIEWED, {
                    guild_id: D.guild_id,
                    channel_id: D.id,
                    sku_ids: H.map((e) => e.id),
                });
        }, [D.id, D.guild_id, H]),
        (0, i.jsx)(m.A, {
            children: (0, i.jsx)(c.lGe, {
                "aria-labelledby": M,
                modal: !1,
                children: (0, i.jsxs)("div", {
                    className: L.kL,
                    onMouseEnter: l,
                    onMouseLeave: o,
                    children: [
                        (0, i.jsx)("div", {
                            className: L.wx,
                            children: (0, i.jsxs)("div", {
                                children: [
                                    (0, i.jsx)(c.DZT, {
                                        className: L.DD,
                                        variant: "text-lg/bold",
                                        color: "text-strong",
                                        children: O.intl.string(O.t.xLP3bi),
                                    }),
                                    (0, i.jsx)(c.EYj, {
                                        variant: "text-sm/medium",
                                        color: "text-subtle",
                                        children: O.intl.format(O.t["+SqhBF"], {
                                            applicationName: U?.name ?? O.intl.string(O.t["/1hhto"]),
                                        }),
                                    }),
                                ],
                            }),
                        }),
                        (0, i.jsx)("div", {
                            className: r()(L.Xb, { [L.Im]: G }),
                            children: "loading" === B || 0 === H.length ? (0, i.jsx)(c.y$y, { className: L.Lq }) : W,
                        }),
                        (0, i.jsx)(v.A, { location: "social_layer_gifting_mini_shelf", className: L.Ij }),
                    ],
                }),
            }),
        })
    );
}
