t.d(n, { default: () => T }), t(388685);
var r = t(951288),
    a = t(647438),
    i = t(979554),
    l = t(442837),
    s = t(481060),
    o = t(809206),
    d = t(204418),
    c = t(583434),
    u = t(164946),
    m = t(25990),
    p = t(594174),
    f = t(960048),
    g = t(22095),
    C = t(509212),
    x = t(113434),
    v = t(497505),
    h = t(475595),
    j = t(515108),
    _ = t(291967),
    y = t(46140),
    N = t(388032),
    b = t(129034);
function w(e) {
    var n;
    let { quest: t, avatarDeco: a, onUseNow: i, user: l, mode: o } = e,
        c = (0, h.fh)(t, h.eC.REWARD).url,
        u = (0, x.Qy)(t.config),
        m =
            (null == (n = l.avatarDecoration) ? void 0 : n.skuId) != null &&
            l.avatarDecoration.skuId === (null == a ? void 0 : a.skuId);
    return (0, r.jsxs)("div", {
        className: b.contentContainer,
        children: [
            (0, r.jsx)("div", {
                className: b.previewContainer,
                children: (0, r.jsx)(d.Z, {
                    user: l,
                    guildId: null,
                    avatarDecorationOverride: a,
                    avatarSize: s.EFr.SIZE_152,
                    questPreviewRewardAssetUrl: c,
                }),
            }),
            (0, r.jsxs)("div", {
                className: b.copyContainer,
                children: [
                    (0, r.jsx)(s.Heading, {
                        variant: "heading-xl/semibold",
                        color: "header-primary",
                        className: b.heading,
                        children: N.intl.string(N.t["0/Yz+Y"]),
                    }),
                    (0, r.jsx)(s.Text, {
                        variant: "text-sm/medium",
                        color: "text-secondary",
                        children: u,
                    }),
                ],
            }),
            (0, r.jsx)(s.Button, {
                variant: "secondary",
                size: "sm",
                text: m ? N.intl.string(N.t.hjaYYn) : N.intl.string(N.t.MAS7uK),
                loading: "applying" === o,
                disabled: "claimed" !== o || m,
                onClick: i,
                fullWidth: !0,
            }),
        ],
    });
}
function T(e) {
    var n, t, s;
    let { initialQuest: d, onClose: h, transitionState: N, preview: b, location: T, sourceQuestContent: P } = e,
        E = null != (t = (0, x.B4)(d.id)) ? t : d,
        A = a.useMemo(() => (0, C.xn)(E.config), [E]),
        D = (0, l.e7)([p.default], () => p.default.getCurrentUser()),
        [L, O] = (function (e) {
            let { product: n, isFetching: t } = (0, c.T)(e),
                r = a.useMemo(() => {
                    if (null == n || t) return null;
                    let e = n.items.find((e) => e.type === i.Z.AVATAR_DECORATION);
                    return null != e ? e : null;
                }, [n, t]),
                l = async () => {
                    if (null == r)
                        return f.Z.addBreadcrumb({ message: "Error saving avatar decoration; it is null" }), !1;
                    (0, o.cV)(r);
                    let e = m.Z.getAllPending(),
                        n = (0, u.ED)(e),
                        t = await (0, o.Mn)(n);
                    return (0, o.si)(), !!(null == t ? void 0 : t.ok);
                };
            return [r, l];
        })(null != (s = null == A ? void 0 : A.skuId) ? s : null),
        S = (null == (n = E.userStatus) ? void 0 : n.claimedAt) != null,
        R = !b && !S,
        [k, I] = a.useState(R ? "loading" : "claimed");
    a.useEffect(() => {
        R &&
            (0, g.QB)(E.id, v.y$.CROSS_PLATFORM, T)
                .then(() => I("claimed"))
                .catch(() => I("error"));
    }, [E.id, T, R]);
    let M = !0 === b && null === L && (null == A ? void 0 : A.skuId) !== "",
        Z = null == D,
        B = Z || (null == L && !0 !== b) || M || "loading" === k,
        q = "error" === k || null == A,
        G = async () => {
            I("applying"), I((await O()) ? "applied" : "claimed");
        };
    return (0, r.jsx)(j.Z, {
        onClose: h,
        transitionState: N,
        quest: E,
        sourceQuestContent: P,
        location: y.dr.COLLECTIBLE_REWARD_MODAL,
        isRewardContentLoading: B,
        rewardContentHasError: q,
        rewardContent:
            q || Z
                ? null
                : (0, r.jsx)(_.Z, {
                      rewardName: A.messages.name,
                      children: (0, r.jsx)(w, {
                          quest: E,
                          avatarDeco: L,
                          user: D,
                          mode: k,
                          onUseNow: G,
                      }),
                  }),
    });
}
