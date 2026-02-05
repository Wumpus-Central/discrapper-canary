n.d(t, { default: () => D });
var i = n(627968),
    s = n(64700),
    a = n(575593),
    r = n(311907),
    l = n(397927),
    o = n(631670),
    d = n(291661),
    c = n(674658),
    u = n(919395),
    m = n(587600),
    x = n(836602),
    _ = n(287809),
    f = n(728458),
    g = n(829219),
    h = n(341915),
    j = n(890687),
    v = n(579473),
    p = n(92246),
    C = n(109174),
    A = n(524728),
    N = n(654487),
    y = n(985018),
    E = n(885283);
function L(e) {
    let { quest: t, avatarDeco: n, onUseNow: s, user: a, mode: r } = e,
        o = (0, v.tW)(t, v.fY.REWARD).url,
        c = (0, j.FA)(t.config),
        u = a.avatarDecoration?.skuId != null && a.avatarDecoration.skuId === n?.skuId;
    return (0, i.jsxs)("div", {
        className: E.hQ,
        children: [
            (0, i.jsx)("div", {
                className: E.i1,
                children: (0, i.jsx)(d.A, {
                    user: a,
                    guildId: null,
                    avatarDecorationOverride: n,
                    avatarSize: l._3J.SIZE_152,
                    questPreviewRewardAssetUrl: o,
                }),
            }),
            (0, i.jsxs)("div", {
                className: E.dD,
                children: [
                    (0, i.jsx)(l.Heading, {
                        variant: "heading-xl/semibold",
                        color: "text-strong",
                        className: E.R_,
                        children: y.intl.string(y.t["0/Yz+Y"]),
                    }),
                    (0, i.jsx)(l.Text, { variant: "text-sm/medium", color: "text-subtle", children: c }),
                ],
            }),
            (0, i.jsx)(l.Button, {
                variant: "secondary",
                size: "sm",
                text: u ? y.intl.string(y.t.hjaYYn) : y.intl.string(y.t.MAS7uK),
                loading: "applying" === r,
                disabled: "claimed" !== r || u,
                onClick: s,
                fullWidth: !0,
            }),
        ],
    });
}
function D(e) {
    let { initialQuest: t, onClose: n, transitionState: l, preview: d, location: v, sourceQuestContent: y } = e,
        E = (0, j.C5)(t.id) ?? t,
        D = s.useMemo(() => (0, p.nj)(E.config), [E]),
        R = (0, r.bG)([_.default], () => _.default.getCurrentUser()),
        [w, I] = (function (e) {
            let { product: t, isFetching: n } = (0, c.q)(e),
                i = s.useMemo(
                    () => (null == t || n ? null : (t.items.find((e) => e.type === a.R.AVATAR_DECORATION) ?? null)),
                    [t, n],
                ),
                r = async () => {
                    if (null == i)
                        return f.A.addBreadcrumb({ message: "Error saving avatar decoration; it is null" }), !1;
                    (0, u.Dx)(i);
                    let e = x.A.getPendingChanges(),
                        t = (0, m.Sk)(e),
                        n = await (0, o.yu)(t);
                    return (0, o.pZ)(), !!n?.ok;
                };
            return [i, r];
        })(D?.skuId ?? null),
        T = E.userStatus?.claimedAt != null,
        k = !d && !T,
        [M, O] = s.useState(k ? "loading" : "claimed");
    s.useEffect(() => {
        k &&
            (0, g.Oq)(E.id, h.pY.CROSS_PLATFORM, v)
                .then(() => O("claimed"))
                .catch(() => O("error"));
    }, [E.id, v, k]);
    let S = !0 === d && null === w && D?.skuId !== "",
        W = null == R,
        b = W || (null == w && !0 !== d) || S || "loading" === M,
        Y = "error" === M || null == D,
        P = async () => {
            O("applying"), O((await I()) ? "applied" : "claimed");
        };
    return (0, i.jsx)(A.A, {
        onClose: n,
        transitionState: l,
        quest: E,
        sourceQuestContent: y,
        location: N.rE.COLLECTIBLE_REWARD_MODAL,
        isRewardContentLoading: b,
        rewardContentHasError: Y,
        rewardContent:
            Y || W
                ? null
                : (0, i.jsx)(C.A, {
                      rewardName: D.messages.name,
                      children: (0, i.jsx)(L, { quest: E, avatarDeco: w, user: R, mode: M, onUseNow: P }),
                  }),
    });
}
