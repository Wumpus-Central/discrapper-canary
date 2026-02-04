n.d(t, {
    A: () => I,
}),
    n(896048),
    n(638769);
var r = n(627968),
    l = n(64700),
    i = n(735438),
    s = n(835245),
    a = n(158954),
    o = n(311907),
    c = n(587895),
    u = n(568598),
    d = n(313961),
    p = n(246356),
    h = n(178213),
    g = n(594832),
    f = n(290863),
    m = n(954571),
    b = n(403362),
    A = n(79871),
    y = n(592356),
    O = n(568751),
    j = n(620406),
    _ = n(188275),
    x = n(652215),
    v = n(806931),
    E = n(985018),
    C = n(877409);
let S = "vc-gifting-".concat((0, s.A)());

function I(e) {
    var t;
    let { isHovered: n, closePopout: s, onMouseEnter: I, onMouseLeave: N, channel: T } = e;
    l.useEffect(() => {
        n || s();
    }, [s, n]);
    let P = (0, h.G)("social_layer_storefront_gifting_mini_shelf"),
        w = (0, o.bG)([c.A], () => c.A.getApplication(_.XR)),
        [R] = (0, o.bG)(
            [d.A],
            () => (null != T.id ? [d.A.getParticipants(T.id), d.A.getParticipantsVersion(T.id)] : [[], 0]),
            [T.id],
            u.hS,
        ),
        D = (0, o.yK)([f.A], () => {
            let e = new Set();
            for (let n of R)
                if ((0, v.Xw)(n) || (0, v.Ay)(n))
                    for (let r of f.A.getActivities(n.user.id)) {
                        var t;
                        if (
                            r.application_id === (null == w ? void 0 : w.id) ||
                            (null == w || null == (t = w.linkedGames)
                                ? void 0
                                : t.some((e) => e.id === r.application_id)) === !0
                        ) {
                            e.add(n.user.id);
                            break;
                        }
                    }
            return Array.from(e).sort();
        }, [R, w]),
        L = l.useMemo(() => {
            let e = R.map((e) => ((0, v.Xw)(e) || (0, v.Ay)(e) ? e.user.id : null)).filter(b.Vq);
            return (0, i.uniq)([...D, ...e]);
        }, [R, D]),
        {
            state: M,
            recommendations: G,
            skuIdToUserIdsReasons: k,
        } = (0, y.A)({
            applicationId: _.XR,
            numWishlistItems: y.o,
            userIds: L,
            location: "Social Layer Gifting Mini Shelf",
            includeWishlists: !0,
        }),
        U = l.useMemo(() => {
            let e = new Set(L);
            return G.map((t) => {
                var n, l;
                let i =
                    null !=
                    (n =
                        null == (l = k[t.skuId])
                            ? void 0
                            : l
                                  .filter((t) => t.reason === A.G.WISHLIST && e.has(t.userId))
                                  .map((e) => e.userId)
                                  .filter(b.Vq))
                        ? n
                        : [];
                return P
                    ? (0, r.jsx)(
                          O.A,
                          {
                              sku: t.sku,
                              source: i.length > 0 ? g.uS.WISHLIST : g.uS.POPULAR,
                              guildId: T.guild_id,
                              channelId: T.id,
                              contextContainerClassName: C.RL,
                              userIdsForGifting: L,
                              userIdsForRecommendation: i,
                          },
                          t.skuId,
                      )
                    : (0, r.jsx)(
                          j.A,
                          {
                              variant: i.length > 0 ? j.$.WISHLIST : j.$.POPULAR,
                              wishlistItem: t,
                              userIdsForRecommendation: i,
                              userIdsForGifting: L,
                              guildId: T.guild_id,
                              channelId: T.id,
                              contextContainerClassName: C.RL,
                          },
                          t.skuId,
                      );
            });
        }, [T.guild_id, T.id, G, k, L, P]);
    return (
        l.useEffect(() => {
            0 !== G.length &&
                m.default.track(x.HAw.COMMERCE_SHOP_VC_GIFT_BUTTON_VIEWED, {
                    guild_id: T.guild_id,
                    channel_id: T.id,
                    sku_ids: G.map((e) => e.skuId),
                });
        }, [T.id, T.guild_id, G]),
        (0, r.jsx)(p.A, {
            children: (0, r.jsx)(a.lGe, {
                "aria-labelledby": S,
                modal: !1,
                children: (0, r.jsxs)("div", {
                    className: C.kL,
                    onMouseEnter: I,
                    onMouseLeave: N,
                    children: [
                        (0, r.jsx)(a.DZT, {
                            className: C.DD,
                            variant: "text-lg/bold",
                            color: "text-strong",
                            children: E.intl.string(E.t.xLP3bi),
                        }),
                        (0, r.jsx)(a.EYj, {
                            className: C.VA,
                            variant: "text-sm/medium",
                            color: "text-subtle",
                            children: E.intl.format(E.t["+SqhBF"], {
                                applicationName:
                                    null != (t = null == w ? void 0 : w.name) ? t : E.intl.string(E.t["/1hhto"]),
                            }),
                        }),
                        (0, r.jsx)("div", {
                            className: C.Xb,
                            children:
                                "loading" === M || 0 === G.length
                                    ? (0, r.jsx)(a.y$y, {
                                          className: C.Lq,
                                      })
                                    : U,
                        }),
                    ],
                }),
            }),
        })
    );
}
