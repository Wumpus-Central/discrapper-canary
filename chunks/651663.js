n.d(t, { default: () => O });
var a = n(627968),
    r = n(64700),
    s = n(575593),
    i = n(17928),
    l = n(778712),
    d = n(297264),
    u = n(834730),
    o = n(821609),
    c = n(631670),
    m = n(162232),
    g = n(674658),
    h = n(56348),
    p = n(84540),
    A = n(836602),
    f = n(287809),
    v = n(38405),
    x = n(340124),
    C = n(24001),
    j = n(574677),
    k = n(46948),
    R = n(801365),
    w = n(801870),
    E = n(586035),
    D = n(190107),
    _ = n(375708),
    I = n(845612);
function S(e) {
    let { quest: t, avatarDeco: n, onUseNow: r, user: s, mode: i } = e,
        c = (0, k.tW)(t, k.fY.REWARD).url,
        g = (0, j.FA)(t.config),
        h = s.avatarDecoration?.skuId != null && s.avatarDecoration.skuId === n?.skuId;
    return (0, a.jsxs)("div", {
        className: I.hQ,
        children: [
            (0, a.jsx)("div", {
                className: I.i1,
                children: (0, a.jsx)(m.A, {
                    user: s,
                    guildId: null,
                    avatarDecorationOverride: n,
                    avatarSize: l._3.SIZE_152,
                    questPreviewRewardAssetUrl: c,
                }),
            }),
            (0, a.jsxs)("div", {
                className: I.dD,
                children: [
                    (0, a.jsx)(d.D, {
                        variant: "heading-xl/semibold",
                        color: "text-strong",
                        className: I.R_,
                        children: _.intl.string(_.t["0/Yz+Y"]),
                    }),
                    (0, a.jsx)(u.E, { variant: "text-sm/medium", color: "text-subtle", children: g }),
                ],
            }),
            (0, a.jsx)(o.$, {
                variant: "secondary",
                size: "sm",
                text: h ? _.intl.string(_.t.hjaYYn) : _.intl.string(_.t.MAS7uK),
                loading: "applying" === i,
                disabled: "claimed" !== i || h,
                onClick: r,
                fullWidth: !0,
            }),
        ],
    });
}
function O(e) {
    let { initialQuest: t, onClose: n, transitionState: l, preview: d, location: u, sourceQuestContent: o } = e,
        m = (0, j.C5)(t.id) ?? t,
        k = r.useMemo(() => (0, R.nj)(m.config), [m]),
        _ = (0, i.bG)([f.default], () => f.default.getCurrentUser()),
        [I, O] = (function (e) {
            let { product: t, isFetching: n } = (0, g.q)(e),
                a = r.useMemo(
                    () => (null == t || n ? null : (t.items.find((e) => e.type === s.R.AVATAR_DECORATION) ?? null)),
                    [t, n],
                );
            async function i() {
                if (null == a) return v.A.addBreadcrumb({ message: "Error saving avatar decoration; it is null" }), !1;
                (0, p.p)({ avatarDecoration: a });
                let e = A.A.getPendingChanges(),
                    t = (0, h.Sk)(e),
                    n = await (0, c._L)(t);
                return (0, c.pZ)(), !!n?.ok;
            }
            return [a, i];
        })(k?.skuId ?? null),
        b = m.userStatus?.claimedAt != null,
        L = !d && !b,
        [N, y] = r.useState(L ? "loading" : "claimed");
    r.useEffect(() => {
        L &&
            (0, x.Oq)(m.id, C.pY.CROSS_PLATFORM, u)
                .then(() => y("claimed"))
                .catch(() => y("error"));
    }, [m.id, u, L]);
    let Y = !0 === d && null === I && k?.skuId !== "",
        q = null == _,
        M = q || (null == I && !0 !== d) || Y || "loading" === N,
        T = "error" === N || null == k;
    async function W() {
        y("applying"), y((await O()) ? "applied" : "claimed");
    }
    return (0, a.jsx)(E.A, {
        onClose: n,
        transitionState: l,
        quest: m,
        sourceQuestContent: o,
        location: D.rE.COLLECTIBLE_REWARD_MODAL,
        isRewardContentLoading: M,
        rewardContentHasError: T,
        rewardContent:
            T || q
                ? null
                : (0, a.jsx)(w.A, {
                      rewardName: k.messages.name,
                      children: (0, a.jsx)(S, { quest: m, avatarDeco: I, user: _, mode: N, onUseNow: W }),
                  }),
    });
}
