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
    g = t(509212),
    x = t(272008),
    C = t(113434),
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
        u = (0, C.Qy)(t.config),
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
                        children: N.intl.string(N.t["0/Yz+f"]),
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
                text: m ? N.intl.string(N.t.hjaYYm) : N.intl.string(N.t.MAS7uL),
                loading: "applying" === o,
                disabled: "claimed" !== o || m,
                onClick: i,
                fullWidth: !0,
            }),
        ],
    });
}
function T(e) {
    var n, t;
    let { quest: s, onClose: d, transitionState: C, preview: h, location: N, sourceQuestContent: b } = e,
        T = a.useMemo(() => (0, g.xn)(s.config), [s]),
        E = (0, l.e7)([p.default], () => p.default.getCurrentUser()),
        [A, P] = (function (e) {
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
        })(null != (t = null == T ? void 0 : T.skuId) ? t : null),
        D = (null == (n = s.userStatus) ? void 0 : n.claimedAt) != null,
        O = !h && !D,
        [L, S] = a.useState(O ? "loading" : "claimed");
    a.useEffect(() => {
        O &&
            (0, x.QB)(s.id, v.y$.CROSS_PLATFORM, N)
                .then(() => S("claimed"))
                .catch(() => S("error"));
    }, [s.id, N, O]);
    let R = !0 === h && null === A && (null == T ? void 0 : T.skuId) !== "",
        I = null == E,
        k = I || (null == A && !0 !== h) || R || "loading" === L,
        M = "error" === L || null == T,
        Z = async () => {
            S("applying"), S((await P()) ? "applied" : "claimed");
        };
    return (0, r.jsx)(j.Z, {
        onClose: d,
        transitionState: C,
        quest: s,
        sourceQuestContent: b,
        location: y.dr.COLLECTIBLE_REWARD_MODAL,
        isRewardContentLoading: k,
        rewardContentHasError: M,
        rewardContent:
            M || I
                ? null
                : (0, r.jsx)(_.Z, {
                      rewardName: T.messages.name,
                      children: (0, r.jsx)(w, {
                          quest: s,
                          avatarDeco: A,
                          user: E,
                          mode: L,
                          onUseNow: Z,
                      }),
                  }),
    });
}
