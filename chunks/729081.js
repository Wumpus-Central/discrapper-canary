"use strict";
n.d(t, { A: () => j });
var i = n(627968),
    s = n(64700),
    l = n(735438),
    r = n(835245),
    a = n(158954),
    o = n(311907),
    c = n(587895),
    d = n(568598),
    u = n(313961),
    h = n(246356),
    A = n(178213),
    p = n(594832),
    g = n(290863),
    m = n(954571),
    _ = n(403362),
    f = n(79871),
    x = n(592356),
    C = n(568751),
    E = n(620406),
    I = n(84511),
    b = n(188275),
    N = n(652215),
    S = n(806931),
    T = n(985018),
    y = n(430071);
let v = `vc-gifting-${(0, r.A)()}`;
function j(e) {
    let { isHovered: t, closePopout: n, onMouseEnter: r, onMouseLeave: j, channel: R } = e;
    s.useEffect(() => {
        t || n();
    }, [n, t]);
    let O = (0, A.G)("social_layer_storefront_gifting_mini_shelf"),
        L = (0, o.bG)([c.A], () => c.A.getApplication(b.XR)),
        [M] = (0, o.bG)(
            [u.A],
            () => (null != R.id ? [u.A.getParticipants(R.id), u.A.getParticipantsVersion(R.id)] : [[], 0]),
            [R.id],
            d.hS,
        ),
        D = (0, o.yK)([g.A], () => {
            let e = new Set();
            for (let t of M)
                if ((0, S.Xw)(t) || (0, S.Ay)(t)) {
                    for (let n of g.A.getActivities(t.user.id))
                        if (
                            n.application_id === L?.id ||
                            L?.linkedGames?.some((e) => e.id === n.application_id) === !0
                        ) {
                            e.add(t.user.id);
                            break;
                        }
                }
            return Array.from(e).sort();
        }, [M, L]),
        G = s.useMemo(() => {
            let e = M.map((e) => ((0, S.Xw)(e) || (0, S.Ay)(e) ? e.user.id : null)).filter(_.Vq);
            return (0, l.uniq)([...D, ...e]);
        }, [M, D]),
        {
            state: U,
            recommendations: P,
            skuIdToUserIdsReasons: w,
        } = (0, x.A)({
            applicationId: b.XR,
            numWishlistItems: x.o,
            userIds: G,
            location: "Social Layer Gifting Mini Shelf",
            includeWishlists: !0,
        }),
        k = s.useMemo(() => {
            let e = new Set(G);
            return P.map((t) => {
                let n =
                    w[t.skuId]
                        ?.filter((t) => t.reason === f.G.WISHLIST && e.has(t.userId))
                        .map((e) => e.userId)
                        .filter(_.Vq) ?? [];
                return O
                    ? (0, i.jsx)(
                          C.A,
                          {
                              sku: t.sku,
                              source: n.length > 0 ? p.uS.WISHLIST : p.uS.POPULAR,
                              guildId: R.guild_id,
                              channelId: R.id,
                              userIdsForGifting: G,
                              userIdsForRecommendation: n,
                          },
                          t.skuId,
                      )
                    : (0, i.jsx)(
                          E.A,
                          {
                              variant: n.length > 0 ? E.$.WISHLIST : E.$.POPULAR,
                              wishlistItem: t,
                              userIdsForRecommendation: n,
                              userIdsForGifting: G,
                              guildId: R.guild_id,
                              channelId: R.id,
                              contextContainerClassName: y.RL,
                          },
                          t.skuId,
                      );
            });
        }, [R.guild_id, R.id, P, w, G, O]);
    return (
        s.useEffect(() => {
            0 !== P.length &&
                m.default.track(N.HAw.COMMERCE_SHOP_VC_GIFT_BUTTON_VIEWED, {
                    guild_id: R.guild_id,
                    channel_id: R.id,
                    sku_ids: P.map((e) => e.skuId),
                });
        }, [R.id, R.guild_id, P]),
        (0, i.jsx)(h.A, {
            children: (0, i.jsx)(a.lGe, {
                "aria-labelledby": v,
                modal: !1,
                children: (0, i.jsxs)("div", {
                    className: y.kL,
                    onMouseEnter: r,
                    onMouseLeave: j,
                    children: [
                        (0, i.jsxs)("div", {
                            className: y.wx,
                            children: [
                                (0, i.jsxs)("div", {
                                    children: [
                                        (0, i.jsx)(a.DZT, {
                                            className: y.DD,
                                            variant: "text-lg/bold",
                                            color: "text-strong",
                                            children: T.intl.string(T.t.xLP3bi),
                                        }),
                                        (0, i.jsx)(a.EYj, {
                                            variant: "text-sm/medium",
                                            color: "text-subtle",
                                            children: T.intl.format(T.t["+SqhBF"], {
                                                applicationName: L?.name ?? T.intl.string(T.t["/1hhto"]),
                                            }),
                                        }),
                                    ],
                                }),
                                (0, i.jsx)("div", {
                                    children: (0, i.jsx)(I.A, { location: "social_layer_gifting_mini_shelf" }),
                                }),
                            ],
                        }),
                        (0, i.jsx)("div", {
                            className: y.Xb,
                            children: "loading" === U || 0 === P.length ? (0, i.jsx)(a.y$y, { className: y.Lq }) : k,
                        }),
                    ],
                }),
            }),
        })
    );
}
