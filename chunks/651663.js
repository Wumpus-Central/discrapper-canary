n.d(t, { default: () => P });
var r = n(627968),
    i = n(64700),
    a = n(575593),
    l = n(311907),
    o = n(778712),
    _ = n(534514),
    s = n(834730),
    E = n(821609),
    d = n(631670),
    u = n(162232),
    c = n(674658),
    p = n(587600),
    A = n(84540),
    I = n(836602),
    S = n(287809),
    T = n(728458),
    R = n(829219),
    f = n(341915),
    h = n(890687),
    N = n(579473),
    O = n(92246),
    g = n(109174),
    C = n(524728),
    D = n(654487),
    y = n(985018),
    L = n(845612);
function U(e) {
    let { quest: t, avatarDeco: n, onUseNow: i, user: a, mode: l } = e,
        d = (0, N.tW)(t, N.fY.REWARD).url,
        c = (0, h.FA)(t.config),
        p = a.avatarDecoration?.skuId != null && a.avatarDecoration.skuId === n?.skuId;
    return (0, r.jsxs)("div", {
        className: L.hQ,
        children: [
            (0, r.jsx)("div", {
                className: L.i1,
                children: (0, r.jsx)(u.A, {
                    user: a,
                    guildId: null,
                    avatarDecorationOverride: n,
                    avatarSize: o._3.SIZE_152,
                    questPreviewRewardAssetUrl: d,
                }),
            }),
            (0, r.jsxs)("div", {
                className: L.dD,
                children: [
                    (0, r.jsx)(_.D, {
                        variant: "heading-xl/semibold",
                        color: "text-strong",
                        className: L.R_,
                        children: y.intl.string(y.t["0/Yz+Y"]),
                    }),
                    (0, r.jsx)(s.E, { variant: "text-sm/medium", color: "text-subtle", children: c }),
                ],
            }),
            (0, r.jsx)(E.$, {
                variant: "secondary",
                size: "sm",
                text: p ? y.intl.string(y.t.hjaYYn) : y.intl.string(y.t.MAS7uK),
                loading: "applying" === l,
                disabled: "claimed" !== l || p,
                onClick: i,
                fullWidth: !0,
            }),
        ],
    });
}
function P(e) {
    let { initialQuest: t, onClose: n, transitionState: o, preview: _, location: s, sourceQuestContent: E } = e,
        u = (0, h.C5)(t.id) ?? t,
        N = i.useMemo(() => (0, O.nj)(u.config), [u]),
        y = (0, l.bG)([S.default], () => S.default.getCurrentUser()),
        [L, P] = (function (e) {
            let { product: t, isFetching: n } = (0, c.q)(e),
                r = i.useMemo(
                    () => (null == t || n ? null : (t.items.find((e) => e.type === a.R.AVATAR_DECORATION) ?? null)),
                    [t, n],
                ),
                l = async () => {
                    if (null == r)
                        return T.A.addBreadcrumb({ message: "Error saving avatar decoration; it is null" }), !1;
                    (0, A.p)({ avatarDecoration: r });
                    let e = I.A.getPendingChanges(),
                        t = (0, p.Sk)(e),
                        n = await (0, d._L)(t);
                    return (0, d.pZ)(), !!n?.ok;
                };
            return [r, l];
        })(N?.skuId ?? null),
        v = u.userStatus?.claimedAt != null,
        m = !_ && !v,
        [G, F] = i.useState(m ? "loading" : "claimed");
    i.useEffect(() => {
        m &&
            (0, R.Oq)(u.id, f.pY.CROSS_PLATFORM, s)
                .then(() => F("claimed"))
                .catch(() => F("error"));
    }, [u.id, s, m]);
    let b = !0 === _ && null === L && N?.skuId !== "",
        M = null == y,
        w = M || (null == L && !0 !== _) || b || "loading" === G,
        B = "error" === G || null == N,
        k = async () => {
            F("applying"), F((await P()) ? "applied" : "claimed");
        };
    return (0, r.jsx)(C.A, {
        onClose: n,
        transitionState: o,
        quest: u,
        sourceQuestContent: E,
        location: D.rE.COLLECTIBLE_REWARD_MODAL,
        isRewardContentLoading: w,
        rewardContentHasError: B,
        rewardContent:
            B || M
                ? null
                : (0, r.jsx)(g.A, {
                      rewardName: N.messages.name,
                      children: (0, r.jsx)(U, { quest: u, avatarDeco: L, user: y, mode: G, onUseNow: k }),
                  }),
    });
}
