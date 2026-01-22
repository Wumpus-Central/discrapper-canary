n.d(t, { default: () => w }), n(896048);
var i = n(627968),
    a = n(64700),
    r = n(575593),
    s = n(311907),
    l = n(397927),
    d = n(631670),
    c = n(291661),
    o = n(674658),
    u = n(919395),
    m = n(587600),
    x = n(752319),
    f = n(287809),
    g = n(728458),
    v = n(829219),
    j = n(341915),
    h = n(890687),
    b = n(579473),
    p = n(92246),
    A = n(109174),
    N = n(524728),
    _ = n(654487),
    y = n(985018),
    C = n(885283);
function E(e) {
    var t;
    let { quest: n, avatarDeco: a, onUseNow: r, user: s, mode: d } = e,
        o = (0, b.tW)(n, b.fY.REWARD).url,
        u = (0, h.FA)(n.config),
        m =
            (null == (t = s.avatarDecoration) ? void 0 : t.skuId) != null &&
            s.avatarDecoration.skuId === (null == a ? void 0 : a.skuId);
    return (0, i.jsxs)("div", {
        className: C.hQ,
        children: [
            (0, i.jsx)("div", {
                className: C.i1,
                children: (0, i.jsx)(c.A, {
                    user: s,
                    guildId: null,
                    avatarDecorationOverride: a,
                    avatarSize: l._3J.SIZE_152,
                    questPreviewRewardAssetUrl: o,
                }),
            }),
            (0, i.jsxs)("div", {
                className: C.dD,
                children: [
                    (0, i.jsx)(l.Heading, {
                        variant: "heading-xl/semibold",
                        color: "text-strong",
                        className: C.R_,
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
                loading: "applying" === d,
                disabled: "claimed" !== d || m,
                onClick: r,
                fullWidth: !0,
            }),
        ],
    });
}
function w(e) {
    var t, n, l;
    let { initialQuest: c, onClose: b, transitionState: y, preview: C, location: w, sourceQuestContent: D } = e,
        L = null != (t = (0, h.C5)(c.id)) ? t : c,
        O = a.useMemo(() => (0, p.nj)(L.config), [L]),
        k = (0, s.bG)([f.default], () => f.default.getCurrentUser()),
        [R, I] = (function (e) {
            let { product: t, isFetching: n } = (0, o.q)(e),
                i = a.useMemo(() => {
                    if (null == t || n) return null;
                    let e = t.items.find((e) => e.type === r.R.AVATAR_DECORATION);
                    return null != e ? e : null;
                }, [t, n]),
                s = async () => {
                    if (null == i)
                        return g.A.addBreadcrumb({ message: "Error saving avatar decoration; it is null" }), !1;
                    (0, u.Dx)(i);
                    let e = x.A.getAllPending(),
                        t = (0, m.Sk)(e),
                        n = await (0, d.yu)(t);
                    return (0, d.pZ)(), !!(null == n ? void 0 : n.ok);
                };
            return [i, s];
        })(null != (n = null == O ? void 0 : O.skuId) ? n : null),
        S = (null == (l = L.userStatus) ? void 0 : l.claimedAt) != null,
        T = !C && !S,
        [W, M] = a.useState(T ? "loading" : "claimed");
    a.useEffect(() => {
        T &&
            (0, v.Oq)(L.id, j.pY.CROSS_PLATFORM, w)
                .then(() => M("claimed"))
                .catch(() => M("error"));
    }, [L.id, w, T]);
    let P = !0 === C && null === R && (null == O ? void 0 : O.skuId) !== "",
        Y = null == k,
        q = Y || (null == R && !0 !== C) || P || "loading" === W,
        H = "error" === W || null == O,
        G = async () => {
            M("applying"), M((await I()) ? "applied" : "claimed");
        };
    return (0, i.jsx)(N.A, {
        onClose: b,
        transitionState: y,
        quest: L,
        sourceQuestContent: D,
        location: _.rE.COLLECTIBLE_REWARD_MODAL,
        isRewardContentLoading: q,
        rewardContentHasError: H,
        rewardContent:
            H || Y
                ? null
                : (0, i.jsx)(A.A, {
                      rewardName: O.messages.name,
                      children: (0, i.jsx)(E, {
                          quest: L,
                          avatarDeco: R,
                          user: k,
                          mode: W,
                          onUseNow: G,
                      }),
                  }),
    });
}
