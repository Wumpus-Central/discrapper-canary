t.d(n, { default: () => T }), t(388685);
var a = t(951288),
    r = t(647438),
    i = t(979554),
    l = t(442837),
    s = t(481060),
    o = t(809206),
    c = t(204418),
    d = t(583434),
    u = t(164946),
    m = t(25990),
    p = t(594174),
    g = t(960048),
    C = t(509212),
    f = t(272008),
    v = t(113434),
    h = t(497505),
    x = t(475595),
    _ = t(515108),
    j = t(291967),
    N = t(388032),
    y = t(129034);
function b(e) {
    var n;
    let { quest: t, avatarDeco: r, onUseNow: i, user: l, mode: o } = e,
        d = (0, x.fh)(t, x.eC.REWARD).url,
        u = (0, v.Qy)(t.config),
        m =
            (null == (n = l.avatarDecoration) ? void 0 : n.skuId) != null &&
            l.avatarDecoration.skuId === (null == r ? void 0 : r.skuId);
    return (0, a.jsxs)("div", {
        className: y.contentContainer,
        children: [
            (0, a.jsx)("div", {
                className: y.previewContainer,
                children: (0, a.jsx)(c.Z, {
                    user: l,
                    guildId: null,
                    avatarDecorationOverride: r,
                    avatarSize: s.EFr.SIZE_152,
                    questPreviewRewardAssetUrl: d,
                }),
            }),
            (0, a.jsxs)("div", {
                className: y.copyContainer,
                children: [
                    (0, a.jsx)(s.X6q, {
                        variant: "heading-xl/bold",
                        color: "header-primary",
                        className: y.heading,
                        children: N.intl.string(N.t["0/Yz+f"]),
                    }),
                    (0, a.jsx)(s.Text, {
                        variant: "text-sm/medium",
                        color: "text-secondary",
                        children: u,
                    }),
                ],
            }),
            (0, a.jsx)(s.zxk, {
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
    let { quest: s, onClose: c, transitionState: v, preview: x, location: N, sourceQuestContent: y } = e,
        T = r.useMemo(() => (0, C.xn)(s.config), [s]),
        A = (0, l.e7)([p.default], () => p.default.getCurrentUser()),
        [w, P] = (function (e) {
            let { product: n, isFetching: t } = (0, d.T)(e),
                a = r.useMemo(() => {
                    if (null == n || t) return null;
                    let e = n.items.find((e) => e.type === i.Z.AVATAR_DECORATION);
                    return null != e ? e : null;
                }, [n, t]),
                l = async () => {
                    if (null == a)
                        return g.Z.addBreadcrumb({ message: "Error saving avatar decoration; it is null" }), !1;
                    (0, o.cV)(a);
                    let e = m.Z.getAllPending(),
                        n = (0, u.ED)(e),
                        t = await (0, o.Mn)(n);
                    return (0, o.si)(), !!(null == t ? void 0 : t.ok);
                };
            return [a, l];
        })(null != (t = null == T ? void 0 : T.skuId) ? t : null),
        E = (null == (n = s.userStatus) ? void 0 : n.claimedAt) != null,
        k = !x && !E,
        [D, R] = r.useState(k ? "loading" : "claimed");
    r.useEffect(() => {
        k &&
            (0, f.QB)(s.id, h.y$.CROSS_PLATFORM, N)
                .then(() => R("claimed"))
                .catch(() => R("error"));
    }, [s.id, N, k]);
    let L = !0 === x && null === w && (null == T ? void 0 : T.skuId) !== "",
        M = null == w && !0 !== x,
        Z = null == A || M || L || "loading" === D,
        I = "error" === D || null == T;
    if (Z || I) return null;
    let O = async () => {
        R("applying"), R((await P()) ? "applied" : "claimed");
    };
    return (0, a.jsx)(_.Z, {
        onClose: c,
        transitionState: v,
        quest: s,
        sourceQuestContent: y,
        rewardContent: (0, a.jsx)(j.Z, {
            rewardName: T.messages.name,
            children: (0, a.jsx)(b, {
                quest: s,
                avatarDeco: w,
                user: A,
                mode: D,
                onUseNow: O,
            }),
        }),
    });
}
