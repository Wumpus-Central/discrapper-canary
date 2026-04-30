a.d(t, { default: () => O });
var n = a(627968),
    r = a(64700),
    s = a(575593),
    l = a(17928),
    i = a(778712),
    d = a(534514),
    u = a(834730),
    o = a(821609),
    c = a(631670),
    m = a(162232),
    g = a(674658),
    h = a(56348),
    p = a(84540),
    A = a(836602),
    v = a(287809),
    x = a(38405),
    C = a(340124),
    f = a(507107),
    j = a(31587),
    k = a(859387),
    R = a(801365),
    w = a(801870),
    E = a(448109),
    D = a(190107),
    _ = a(375708),
    I = a(845612);
function S(e) {
    let { quest: t, avatarDeco: a, onUseNow: r, user: s, mode: l } = e,
        c = (0, k.tW)(t, k.fY.REWARD).url,
        g = (0, j.FA)(t.config),
        h = s.avatarDecoration?.skuId != null && s.avatarDecoration.skuId === a?.skuId;
    return (0, n.jsxs)("div", {
        className: I.hQ,
        children: [
            (0, n.jsx)("div", {
                className: I.i1,
                children: (0, n.jsx)(m.A, {
                    user: s,
                    guildId: null,
                    avatarDecorationOverride: a,
                    avatarSize: i._3.SIZE_152,
                    questPreviewRewardAssetUrl: c,
                }),
            }),
            (0, n.jsxs)("div", {
                className: I.dD,
                children: [
                    (0, n.jsx)(d.D, {
                        variant: "heading-xl/semibold",
                        color: "text-strong",
                        className: I.R_,
                        children: _.intl.string(_.t["0/Yz+Y"]),
                    }),
                    (0, n.jsx)(u.E, { variant: "text-sm/medium", color: "text-subtle", children: g }),
                ],
            }),
            (0, n.jsx)(o.$, {
                variant: "secondary",
                size: "sm",
                text: h ? _.intl.string(_.t.hjaYYn) : _.intl.string(_.t.MAS7uK),
                loading: "applying" === l,
                disabled: "claimed" !== l || h,
                onClick: r,
                fullWidth: !0,
            }),
        ],
    });
}
function O(e) {
    let { initialQuest: t, onClose: a, transitionState: i, preview: d, location: u, sourceQuestContent: o } = e,
        m = (0, j.C5)(t.id) ?? t,
        k = r.useMemo(() => (0, R.nj)(m.config), [m]),
        _ = (0, l.bG)([v.default], () => v.default.getCurrentUser()),
        [I, O] = (function (e) {
            let { product: t, isFetching: a } = (0, g.q)(e),
                n = r.useMemo(
                    () => (null == t || a ? null : (t.items.find((e) => e.type === s.R.AVATAR_DECORATION) ?? null)),
                    [t, a],
                ),
                l = async () => {
                    if (null == n)
                        return x.A.addBreadcrumb({ message: "Error saving avatar decoration; it is null" }), !1;
                    (0, p.p)({ avatarDecoration: n });
                    let e = A.A.getPendingChanges(),
                        t = (0, h.Sk)(e),
                        a = await (0, c._L)(t);
                    return (0, c.pZ)(), !!a?.ok;
                };
            return [n, l];
        })(k?.skuId ?? null),
        b = m.userStatus?.claimedAt != null,
        L = !d && !b,
        [N, y] = r.useState(L ? "loading" : "claimed");
    r.useEffect(() => {
        L &&
            (0, C.Oq)(m.id, f.pY.CROSS_PLATFORM, u)
                .then(() => y("claimed"))
                .catch(() => y("error"));
    }, [m.id, u, L]);
    let Y = !0 === d && null === I && k?.skuId !== "",
        q = null == _,
        M = q || (null == I && !0 !== d) || Y || "loading" === N,
        T = "error" === N || null == k,
        W = async () => {
            y("applying"), y((await O()) ? "applied" : "claimed");
        };
    return (0, n.jsx)(E.A, {
        onClose: a,
        transitionState: i,
        quest: m,
        sourceQuestContent: o,
        location: D.rE.COLLECTIBLE_REWARD_MODAL,
        isRewardContentLoading: M,
        rewardContentHasError: T,
        rewardContent:
            T || q
                ? null
                : (0, n.jsx)(w.A, {
                      rewardName: k.messages.name,
                      children: (0, n.jsx)(S, { quest: m, avatarDeco: I, user: _, mode: N, onUseNow: W }),
                  }),
    });
}
