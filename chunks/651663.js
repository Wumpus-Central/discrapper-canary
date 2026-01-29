n.d(t, {
    default: () => b,
}),
    n(896048);
var i = n(627968),
    a = n(64700),
    r = n(575593),
    s = n(311907),
    l = n(397927),
    o = n(631670),
    d = n(291661),
    c = n(674658),
    u = n(919395),
    m = n(587600),
    f = n(836602),
    x = n(287809),
    _ = n(728458),
    g = n(829219),
    v = n(341915),
    h = n(890687),
    j = n(579473),
    p = n(92246),
    C = n(109174),
    A = n(524728),
    N = n(654487),
    y = n(985018),
    E = n(885283);

function L(e) {
    var t;
    let { quest: n, avatarDeco: a, onUseNow: r, user: s, mode: o } = e,
        c = (0, j.tW)(n, j.fY.REWARD).url,
        u = (0, h.FA)(n.config),
        m =
            (null == (t = s.avatarDecoration) ? void 0 : t.skuId) != null &&
            s.avatarDecoration.skuId === (null == a ? void 0 : a.skuId);
    return (0, i.jsxs)("div", {
        className: E.hQ,
        children: [
            (0, i.jsx)("div", {
                className: E.i1,
                children: (0, i.jsx)(d.A, {
                    user: s,
                    guildId: null,
                    avatarDecorationOverride: a,
                    avatarSize: l._3J.SIZE_152,
                    questPreviewRewardAssetUrl: c,
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
                    (0, i.jsx)(l.Text, {
                        variant: "text-sm/medium",
                        color: "text-subtle",
                        children: u,
                    }),
                ],
            }),
            (0, i.jsx)(l.Button, {
                variant: "secondary",
                size: "sm",
                text: m ? y.intl.string(y.t.hjaYYn) : y.intl.string(y.t.MAS7uK),
                loading: "applying" === o,
                disabled: "claimed" !== o || m,
                onClick: r,
                fullWidth: !0,
            }),
        ],
    });
}

function b(e) {
    var t, n, l;
    let { initialQuest: d, onClose: j, transitionState: y, preview: E, location: b, sourceQuestContent: w } = e,
        O = null != (t = (0, h.C5)(d.id)) ? t : d,
        D = a.useMemo(() => (0, p.nj)(O.config), [O]),
        R = (0, s.bG)([x.default], () => x.default.getCurrentUser()),
        [I, k] = (function (e) {
            let { product: t, isFetching: n } = (0, c.q)(e),
                i = a.useMemo(() => {
                    if (null == t || n) return null;
                    let e = t.items.find((e) => e.type === r.R.AVATAR_DECORATION);
                    return null != e ? e : null;
                }, [t, n]),
                s = async () => {
                    if (null == i)
                        return (
                            _.A.addBreadcrumb({
                                message: "Error saving avatar decoration; it is null",
                            }),
                            !1
                        );
                    (0, u.Dx)(i);
                    let e = f.A.getPendingChanges(),
                        t = (0, m.Sk)(e),
                        n = await (0, o.yu)(t);
                    return (0, o.pZ)(), !!(null == n ? void 0 : n.ok);
                };
            return [i, s];
        })(null != (n = null == D ? void 0 : D.skuId) ? n : null),
        T = (null == (l = O.userStatus) ? void 0 : l.claimedAt) != null,
        S = !E && !T,
        [M, W] = a.useState(S ? "loading" : "claimed");
    a.useEffect(() => {
        S &&
            (0, g.Oq)(O.id, v.pY.CROSS_PLATFORM, b)
                .then(() => W("claimed"))
                .catch(() => W("error"));
    }, [O.id, b, S]);
    let P = !0 === E && null === I && (null == D ? void 0 : D.skuId) !== "",
        Y = null == R,
        q = Y || (null == I && !0 !== E) || P || "loading" === M,
        G = "error" === M || null == D,
        H = async () => {
            W("applying"), W((await k()) ? "applied" : "claimed");
        };
    return (0, i.jsx)(A.A, {
        onClose: j,
        transitionState: y,
        quest: O,
        sourceQuestContent: w,
        location: N.rE.COLLECTIBLE_REWARD_MODAL,
        isRewardContentLoading: q,
        rewardContentHasError: G,
        rewardContent:
            G || Y
                ? null
                : (0, i.jsx)(C.A, {
                      rewardName: D.messages.name,
                      children: (0, i.jsx)(L, {
                          quest: O,
                          avatarDeco: I,
                          user: R,
                          mode: M,
                          onUseNow: H,
                      }),
                  }),
    });
}
