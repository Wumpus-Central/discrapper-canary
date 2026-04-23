n.d(t, { default: () => U });
var a = n(627968),
    i = n(64700),
    r = n(575593),
    l = n(311907),
    o = n(778712),
    d = n(534514),
    s = n(834730),
    _ = n(821609),
    u = n(631670),
    c = n(162232),
    p = n(674658),
    E = n(587600),
    S = n(84540),
    h = n(836602),
    A = n(287809),
    I = n(728458),
    v = n(829219),
    R = n(341915),
    g = n(890687),
    T = n(579473),
    f = n(92246),
    m = n(109174),
    y = n(524728),
    N = n(654487),
    C = n(985018),
    D = n(845612);
function L(e) {
    let { quest: t, avatarDeco: n, onUseNow: i, user: r, mode: l } = e,
        u = (0, T.tW)(t, T.fY.REWARD).url,
        p = (0, g.FA)(t.config),
        E = r.avatarDecoration?.skuId != null && r.avatarDecoration.skuId === n?.skuId;
    return (0, a.jsxs)("div", {
        className: D.hQ,
        children: [
            (0, a.jsx)("div", {
                className: D.i1,
                children: (0, a.jsx)(c.A, {
                    user: r,
                    guildId: null,
                    avatarDecorationOverride: n,
                    avatarSize: o._3.SIZE_152,
                    questPreviewRewardAssetUrl: u,
                }),
            }),
            (0, a.jsxs)("div", {
                className: D.dD,
                children: [
                    (0, a.jsx)(d.D, {
                        variant: "heading-xl/semibold",
                        color: "text-strong",
                        className: D.R_,
                        children: C.intl.string(C.t["0/Yz+Y"]),
                    }),
                    (0, a.jsx)(s.E, { variant: "text-sm/medium", color: "text-subtle", children: p }),
                ],
            }),
            (0, a.jsx)(_.$, {
                variant: "secondary",
                size: "sm",
                text: E ? C.intl.string(C.t.hjaYYn) : C.intl.string(C.t.MAS7uK),
                loading: "applying" === l,
                disabled: "claimed" !== l || E,
                onClick: i,
                fullWidth: !0,
            }),
        ],
    });
}
function U(e) {
    let { initialQuest: t, onClose: n, transitionState: o, preview: d, location: s, sourceQuestContent: _ } = e,
        c = (0, g.C5)(t.id) ?? t,
        T = i.useMemo(() => (0, f.nj)(c.config), [c]),
        C = (0, l.bG)([A.default], () => A.default.getCurrentUser()),
        [D, U] = (function (e) {
            let { product: t, isFetching: n } = (0, p.q)(e),
                a = i.useMemo(
                    () => (null == t || n ? null : (t.items.find((e) => e.type === r.R.AVATAR_DECORATION) ?? null)),
                    [t, n],
                ),
                l = async () => {
                    if (null == a)
                        return I.A.addBreadcrumb({ message: "Error saving avatar decoration; it is null" }), !1;
                    (0, S.p)({ avatarDecoration: a });
                    let e = h.A.getPendingChanges(),
                        t = (0, E.Sk)(e),
                        n = await (0, u._L)(t);
                    return (0, u.pZ)(), !!n?.ok;
                };
            return [a, l];
        })(T?.skuId ?? null),
        O = c.userStatus?.claimedAt != null,
        P = !d && !O,
        [k, G] = i.useState(P ? "loading" : "claimed");
    i.useEffect(() => {
        P &&
            (0, v.Oq)(c.id, R.pY.CROSS_PLATFORM, s)
                .then(() => G("claimed"))
                .catch(() => G("error"));
    }, [c.id, s, P]);
    let b = !0 === d && null === D && T?.skuId !== "",
        F = null == C,
        w = F || (null == D && !0 !== d) || b || "loading" === k,
        x = "error" === k || null == T,
        M = async () => {
            G("applying"), G((await U()) ? "applied" : "claimed");
        };
    return (0, a.jsx)(y.A, {
        onClose: n,
        transitionState: o,
        quest: c,
        sourceQuestContent: _,
        location: N.rE.COLLECTIBLE_REWARD_MODAL,
        isRewardContentLoading: w,
        rewardContentHasError: x,
        rewardContent:
            x || F
                ? null
                : (0, a.jsx)(m.A, {
                      rewardName: T.messages.name,
                      children: (0, a.jsx)(L, { quest: c, avatarDeco: D, user: C, mode: k, onUseNow: M }),
                  }),
    });
}
