n.d(t, {
    A: () => E,
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
    h = n(290863),
    g = n(954571),
    f = n(403362),
    m = n(79871),
    b = n(592356),
    A = n(620406),
    y = n(188275),
    O = n(652215),
    j = n(806931),
    x = n(985018),
    _ = n(877409);
let v = "vc-gifting-".concat((0, s.A)());

function E(e) {
    var t;
    let { isHovered: n, closePopout: s, onMouseEnter: E, onMouseLeave: C, channel: S } = e;
    l.useEffect(() => {
        n || s();
    }, [s, n]);
    let I = (0, o.bG)([c.A], () => c.A.getApplication(y.XR)),
        [N] = (0, o.bG)(
            [d.A],
            () => (null != S.id ? [d.A.getParticipants(S.id), d.A.getParticipantsVersion(S.id)] : [[], 0]),
            [S.id],
            u.hS,
        ),
        T = (0, o.yK)([h.A], () => {
            let e = new Set();
            for (let n of N)
                if ((0, j.Xw)(n) || (0, j.Ay)(n))
                    for (let r of h.A.getActivities(n.user.id)) {
                        var t;
                        if (
                            r.application_id === (null == I ? void 0 : I.id) ||
                            (null == I || null == (t = I.linkedGames)
                                ? void 0
                                : t.some((e) => e.id === r.application_id)) === !0
                        ) {
                            e.add(n.user.id);
                            break;
                        }
                    }
            return Array.from(e).sort();
        }, [N, I]),
        P = l.useMemo(() => {
            let e = N.map((e) => ((0, j.Xw)(e) || (0, j.Ay)(e) ? e.user.id : null)).filter(f.Vq);
            return (0, i.uniq)([...T, ...e]);
        }, [N, T]),
        {
            state: w,
            recommendations: R,
            skuIdToUserIdsReasons: D,
        } = (0, b.A)({
            applicationId: y.XR,
            numWishlistItems: b.o,
            userIds: P,
            location: "Social Layer Gifting Mini Shelf",
            includeWishlists: !0,
        }),
        L = l.useMemo(() => {
            let e = new Set(P);
            return R.map((t) => {
                var n, l;
                let i =
                    null !=
                    (n =
                        null == (l = D[t.skuId])
                            ? void 0
                            : l
                                  .filter((t) => t.reason === m.G.WISHLIST && e.has(t.userId))
                                  .map((e) => e.userId)
                                  .filter(f.Vq))
                        ? n
                        : [];
                return (0, r.jsx)(
                    A.A,
                    {
                        variant: i.length > 0 ? A.$.WISHLIST : A.$.POPULAR,
                        wishlistItem: t,
                        userIdsForRecommendation: i,
                        userIdsForGifting: P,
                        guildId: S.guild_id,
                        channelId: S.id,
                        contextContainerClassName: _.RL,
                    },
                    t.skuId,
                );
            });
        }, [S.guild_id, S.id, R, D, P]);
    return (
        l.useEffect(() => {
            0 !== R.length &&
                g.default.track(O.HAw.COMMERCE_SHOP_VC_GIFT_BUTTON_VIEWED, {
                    guild_id: S.guild_id,
                    channel_id: S.id,
                    sku_ids: R.map((e) => e.skuId),
                });
        }, [S.id, S.guild_id, R]),
        (0, r.jsx)(p.A, {
            children: (0, r.jsx)(a.lGe, {
                "aria-labelledby": v,
                modal: !1,
                children: (0, r.jsxs)("div", {
                    className: _.kL,
                    onMouseEnter: E,
                    onMouseLeave: C,
                    children: [
                        (0, r.jsx)(a.DZT, {
                            className: _.DD,
                            variant: "text-lg/bold",
                            color: "text-strong",
                            children: x.intl.string(x.t.xLP3bi),
                        }),
                        (0, r.jsx)(a.EYj, {
                            className: _.VA,
                            variant: "text-sm/medium",
                            color: "text-subtle",
                            children: x.intl.format(x.t["+SqhBF"], {
                                applicationName:
                                    null != (t = null == I ? void 0 : I.name) ? t : x.intl.string(x.t["/1hhto"]),
                            }),
                        }),
                        (0, r.jsx)("div", {
                            className: _.Xb,
                            children:
                                "loading" === w || 0 === R.length
                                    ? (0, r.jsx)(a.y$y, {
                                          className: _.Lq,
                                      })
                                    : L,
                        }),
                    ],
                }),
            }),
        })
    );
}
