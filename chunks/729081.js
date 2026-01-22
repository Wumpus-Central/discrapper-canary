n.d(t, { A: () => C }), n(896048), n(638769);
var r = n(627968),
    l = n(64700),
    i = n(735438),
    a = n(835245),
    s = n(158954),
    o = n(311907),
    c = n(587895),
    u = n(568598),
    d = n(313961),
    f = n(246356),
    p = n(290863),
    h = n(954571),
    b = n(403362),
    g = n(871123),
    m = n(79871),
    A = n(592356),
    y = n(398025),
    O = n(188275),
    j = n(652215),
    v = n(806931),
    x = n(985018),
    E = n(877409);
let _ = "vc-gifting-".concat((0, a.A)());
function C(e) {
    var t;
    let { isHovered: n, closePopout: a, onMouseEnter: C, onMouseLeave: S, channel: I } = e;
    l.useEffect(() => {
        n || a();
    }, [a, n]);
    let N = (0, o.bG)([c.A], () => c.A.getApplication(O.XR)),
        [T] = (0, o.bG)(
            [d.A],
            () => (null != I.id ? [d.A.getParticipants(I.id), d.A.getParticipantsVersion(I.id)] : [[], 0]),
            [I.id],
            u.hS,
        ),
        P = (0, o.yK)([p.A], () => {
            let e = new Set();
            for (let n of T)
                if ((0, v.Xw)(n) || (0, v.Ay)(n))
                    for (let r of p.A.getActivities(n.user.id)) {
                        var t;
                        if (
                            r.application_id === (null == N ? void 0 : N.id) ||
                            (null == N || null == (t = N.linkedGames)
                                ? void 0
                                : t.some((e) => e.id === r.application_id)) === !0
                        ) {
                            e.add(n.user.id);
                            break;
                        }
                    }
            return Array.from(e).sort();
        }, [T, N]),
        w = l.useMemo(() => {
            let e = T.map((e) => ((0, v.Xw)(e) || (0, v.Ay)(e) ? e.user.id : null)).filter(b.Vq);
            return (0, i.uniq)([...P, ...e]);
        }, [T, P]),
        {
            state: R,
            recommendations: D,
            skuIdToUserIdsReasons: M,
        } = (0, A.A)({
            guildId: (0, g.zf)(),
            applicationId: O.XR,
            numWishlistItems: A.o,
            userIds: w,
            location: "Social Layer Gifting Mini Shelf",
            includeWishlists: !0,
        }),
        L = l.useMemo(() => {
            let e = new Set(w);
            return D.map((t) => {
                var n, l;
                let i =
                    null !=
                    (n =
                        null == (l = M[t.skuId])
                            ? void 0
                            : l
                                  .filter((t) => t.reason === m.G.WISHLIST && e.has(t.userId))
                                  .map((e) => e.userId)
                                  .filter(b.Vq))
                        ? n
                        : [];
                return (0, r.jsx)(
                    y.A,
                    {
                        variant: i.length > 0 ? y.$.WISHLIST : y.$.POPULAR,
                        wishlistItem: t,
                        userIdsForRecommendation: i,
                        userIdsForGifting: w,
                        guildId: I.guild_id,
                        channelId: I.id,
                        contextContainerClassName: E.RL,
                    },
                    t.skuId,
                );
            });
        }, [I.guild_id, I.id, D, M, w]);
    return (
        l.useEffect(() => {
            0 !== D.length &&
                h.default.track(j.HAw.COMMERCE_SHOP_VC_GIFT_BUTTON_VIEWED, {
                    guild_id: I.guild_id,
                    channel_id: I.id,
                    sku_ids: D.map((e) => e.skuId),
                });
        }, [I.id, I.guild_id, D]),
        (0, r.jsx)(f.A, {
            children: (0, r.jsx)(s.lGe, {
                "aria-labelledby": _,
                modal: !1,
                children: (0, r.jsxs)("div", {
                    className: E.kL,
                    onMouseEnter: C,
                    onMouseLeave: S,
                    children: [
                        (0, r.jsx)(s.DZT, {
                            className: E.DD,
                            variant: "text-lg/bold",
                            color: "text-strong",
                            children: x.intl.string(x.t.xLP3bi),
                        }),
                        (0, r.jsx)(s.EYj, {
                            className: E.VA,
                            variant: "text-sm/medium",
                            color: "text-subtle",
                            children: x.intl.format(x.t["+SqhBF"], {
                                applicationName:
                                    null != (t = null == N ? void 0 : N.name) ? t : x.intl.string(x.t["/1hhto"]),
                            }),
                        }),
                        (0, r.jsx)("div", {
                            className: E.Xb,
                            children: "loading" === R || 0 === D.length ? (0, r.jsx)(s.y$y, { className: E.Lq }) : L,
                        }),
                    ],
                }),
            }),
        })
    );
}
