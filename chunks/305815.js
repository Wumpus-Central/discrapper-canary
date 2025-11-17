t.d(n, { default: () => T }), t(388685);
var r = t(54381),
    i = t(473749),
    a = t(979554),
    l = t(442837),
    o = t(481060),
    s = t(809206),
    c = t(204418),
    d = t(583434),
    u = t(150039),
    m = t(164946),
    p = t(25990),
    f = t(594174),
    g = t(960048),
    x = t(22095),
    C = t(509212),
    h = t(113434),
    v = t(497505),
    j = t(475595),
    _ = t(515108),
    y = t(291967),
    b = t(46140),
    N = t(388032),
    w = t(129034);
function P(e) {
    var n;
    let { quest: t, avatarDeco: i, onUseNow: a, user: l, mode: s } = e,
        d = (0, j.fh)(t, j.eC.REWARD).url,
        u = (0, h.Qy)(t.config),
        m =
            (null == (n = l.avatarDecoration) ? void 0 : n.skuId) != null &&
            l.avatarDecoration.skuId === (null == i ? void 0 : i.skuId);
    return (0, r.jsxs)("div", {
        className: w.contentContainer,
        children: [
            (0, r.jsx)("div", {
                className: w.previewContainer,
                children: (0, r.jsx)(c.Z, {
                    user: l,
                    guildId: null,
                    avatarDecorationOverride: i,
                    avatarSize: o.EFr.SIZE_152,
                    questPreviewRewardAssetUrl: d,
                }),
            }),
            (0, r.jsxs)("div", {
                className: w.copyContainer,
                children: [
                    (0, r.jsx)(o.Heading, {
                        variant: "heading-xl/semibold",
                        color: "header-primary",
                        className: w.heading,
                        children: N.intl.string(N.t["0/Yz+Y"]),
                    }),
                    (0, r.jsx)(o.Text, {
                        variant: "text-sm/medium",
                        color: "text-secondary",
                        children: u,
                    }),
                ],
            }),
            (0, r.jsx)(o.Button, {
                variant: "secondary",
                size: "sm",
                text: m ? N.intl.string(N.t.hjaYYn) : N.intl.string(N.t.MAS7uK),
                loading: "applying" === s,
                disabled: "claimed" !== s || m,
                onClick: a,
                fullWidth: !0,
            }),
        ],
    });
}
function T(e) {
    var n, t, o;
    let { initialQuest: c, onClose: j, transitionState: N, preview: w, location: T, sourceQuestContent: A } = e,
        E = null != (t = (0, h.B4)(c.id)) ? t : c,
        D = i.useMemo(() => (0, C.xn)(E.config), [E]),
        O = (0, l.e7)([f.default], () => f.default.getCurrentUser()),
        [L, R] = (function (e) {
            let { product: n, isFetching: t } = (0, d.T)(e),
                r = i.useMemo(() => {
                    if (null == n || t) return null;
                    let e = n.items.find((e) => e.type === a.Z.AVATAR_DECORATION);
                    return null != e ? e : null;
                }, [n, t]),
                l = async () => {
                    if (null == r)
                        return g.Z.addBreadcrumb({ message: "Error saving avatar decoration; it is null" }), !1;
                    (0, u.PO)(r);
                    let e = p.Z.getAllPending(),
                        n = (0, m.ED)(e),
                        t = await (0, s.Mn)(n);
                    return (0, s.si)(), !!(null == t ? void 0 : t.ok);
                };
            return [r, l];
        })(null != (o = null == D ? void 0 : D.skuId) ? o : null),
        S = (null == (n = E.userStatus) ? void 0 : n.claimedAt) != null,
        k = !w && !S,
        [I, M] = i.useState(k ? "loading" : "claimed");
    i.useEffect(() => {
        k &&
            (0, x.QB)(E.id, v.y$.CROSS_PLATFORM, T)
                .then(() => M("claimed"))
                .catch(() => M("error"));
    }, [E.id, T, k]);
    let Z = !0 === w && null === L && (null == D ? void 0 : D.skuId) !== "",
        W = null == O,
        B = W || (null == L && !0 !== w) || Z || "loading" === I,
        q = "error" === I || null == D,
        G = async () => {
            M("applying"), M((await R()) ? "applied" : "claimed");
        };
    return (0, r.jsx)(_.Z, {
        onClose: j,
        transitionState: N,
        quest: E,
        sourceQuestContent: A,
        location: b.dr.COLLECTIBLE_REWARD_MODAL,
        isRewardContentLoading: B,
        rewardContentHasError: q,
        rewardContent:
            q || W
                ? null
                : (0, r.jsx)(y.Z, {
                      rewardName: D.messages.name,
                      children: (0, r.jsx)(P, {
                          quest: E,
                          avatarDeco: L,
                          user: O,
                          mode: I,
                          onUseNow: G,
                      }),
                  }),
    });
}
