n.d(t, { A: () => U });
var i = n(627968),
    l = n(64700),
    s = n(735438),
    a = n(835245),
    r = n(695095),
    o = n(158954),
    d = n(311907),
    c = n(52133),
    u = n(568598),
    h = n(313961),
    A = n(246356),
    _ = n(332772),
    m = n(594832),
    p = n(631784),
    g = n(310209),
    f = n(961350),
    E = n(290863),
    x = n(954571),
    I = n(403362),
    C = n(871123),
    N = n(832163),
    T = n(453774),
    S = n(533562),
    b = n(568751),
    y = n(84511),
    v = n(652215),
    j = n(806931),
    R = n(985018),
    O = n(325486);
let L = `vc-gifting-${(0, a.A)()}`,
    M = Object.freeze([]);
function D(e, t) {
    let [n, i] = e,
        [l, s] = t;
    return (0, c.v)(n, l) && (0, c.v)(i, s);
}
function U(e) {
    let { isHovered: t, closePopout: n, onMouseEnter: a, onMouseLeave: c, channel: U } = e;
    l.useEffect(() => {
        t || n();
    }, [n, t]),
        (0, _.T)({ location: "social_layer_storefront_gifting_mini_shelf" });
    let P = (0, d.bG)([N.A], () => N.A.getDetectableIdsToApplicationIds()),
        k = (0, S.W)(),
        [w] = (0, d.bG)(
            [h.A],
            () => (null != U.id ? [h.A.getParticipants(U.id), h.A.getParticipantsVersion(U.id)] : [[], 0]),
            [U.id],
            u.hS,
        ),
        [B, V] = (0, d.bG)(
            [E.A],
            () => {
                let e = new Set(),
                    t = new Set();
                for (let n of (null != k && t.add(k), w))
                    if ((0, j.Xw)(n) || (0, j.Ay)(n)) {
                        for (let i of E.A.getActivities(n.user.id))
                            if (null != i.application_id && null != P[i.application_id]) {
                                e.add(n.user.id), t.add(P[i.application_id]);
                                break;
                            }
                    }
                return [Array.from(e).sort(), Array.from(t).sort()];
            },
            [w, P, k],
            D,
        ),
        H = (0, d.bG)([f.default], () => f.default.getId()),
        F = l.useMemo(() => {
            let e = w.map((e) => ((0, j.Xw)(e) || (0, j.Ay)(e) ? e.user.id : null)).filter(I.Vq);
            return (0, s.uniq)([...B, ...e]);
        }, [w, B]),
        W = (0, T.v)(V),
        {
            status: K,
            recommendations: Y,
            skusToUserAndReason: z,
        } = (0, p.XQ)({ applicationIds: V, numItems: 6, userIds: F }),
        q = "loading" === K || 0 === Y.length,
        X = (0, r.A)(q ? M : Y, G),
        $ = l.useMemo(() => {
            let e = new Set(F),
                { hasWishlist: t, hasPopular: n } = (0, C.wH)(Y, z, e),
                l = t && n;
            return X.map((t) => {
                let n = Object.entries(z[t.id] ?? {})
                        .filter((t) => {
                            let [n, i] = t;
                            return i === g.j.WISHLIST && e.has(n);
                        })
                        .map((e) => {
                            let [t] = e;
                            return t;
                        }),
                    s = n.filter((e) => e !== H),
                    a = F.filter((e) => e !== H);
                return (0, i.jsx)(
                    b.A,
                    {
                        sku: t,
                        source: n.length > 0 ? m.uS.WISHLIST : m.uS.POPULAR,
                        application: W[t.applicationId],
                        guildId: U.guild_id,
                        channelId: U.id,
                        showIcons: l,
                        userIdsForGifting: a,
                        userIdsForRecommendation: s,
                    },
                    t.id,
                );
            });
        }, [H, F, Y, X, z, W, U.guild_id, U.id]);
    return (
        l.useEffect(() => {
            0 !== Y.length &&
                x.default.track(v.HAw.COMMERCE_SHOP_VC_GIFT_BUTTON_VIEWED, {
                    guild_id: U.guild_id,
                    channel_id: U.id,
                    sku_ids: Y.map((e) => e.id),
                });
        }, [U.id, U.guild_id, Y]),
        (0, i.jsx)(A.A, {
            children: (0, i.jsx)(o.lGe, {
                "aria-labelledby": L,
                modal: !1,
                children: (0, i.jsxs)("div", {
                    className: O.kL,
                    onMouseEnter: a,
                    onMouseLeave: c,
                    children: [
                        (0, i.jsx)("div", {
                            className: O.wx,
                            children: (0, i.jsxs)("div", {
                                children: [
                                    (0, i.jsx)(o.DZT, {
                                        className: O.DD,
                                        variant: "text-lg/bold",
                                        color: "text-strong",
                                        children: R.intl.string(R.t.xLP3bi),
                                    }),
                                    (0, i.jsx)(o.EYj, {
                                        variant: "text-sm/medium",
                                        color: "text-subtle",
                                        children: R.intl.format(R.t["+SqhBF"], {
                                            applicationName:
                                                Object.values(W).length > 0
                                                    ? (Object.values(W)[0]?.name ?? R.intl.string(R.t["/1hhto"]))
                                                    : R.intl.string(R.t["/1hhto"]),
                                        }),
                                    }),
                                ],
                            }),
                        }),
                        (0, i.jsx)("div", {
                            className: O.Xb,
                            children: q ? (0, i.jsx)(o.y$y, { className: O.Lq }) : $,
                        }),
                        (0, i.jsx)(y.A, { location: "social_layer_gifting_mini_shelf", className: O.Ij }),
                    ],
                }),
            }),
        })
    );
}
function G(e, t) {
    return e.id === t.id;
}
