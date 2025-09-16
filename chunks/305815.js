a.d(n, { default: () => k }), a(388685);
var t = a(951288),
    i = a(647438),
    r = a(979554),
    l = a(442837),
    s = a(481060),
    o = a(809206),
    d = a(204418),
    c = a(583434),
    u = a(164946),
    m = a(25990),
    v = a(594174),
    f = a(960048),
    x = a(509212),
    g = a(272008),
    h = a(113434),
    p = a(497505),
    C = a(475595),
    _ = a(515108),
    j = a(291967),
    N = a(388032),
    w = a(129034);
function y(e) {
    var n;
    let { quest: a, avatarDeco: i, onUseNow: r, user: l, mode: o } = e,
        c = (0, C.fh)(a, C.eC.REWARD).url,
        u = (0, h.Qy)(a.config),
        m =
            (null == (n = l.avatarDecoration) ? void 0 : n.skuId) != null &&
            l.avatarDecoration.skuId === (null == i ? void 0 : i.skuId);
    return (0, t.jsxs)("div", {
        className: w.contentContainer,
        children: [
            (0, t.jsx)("div", {
                className: w.previewContainer,
                children: (0, t.jsx)(d.Z, {
                    user: l,
                    guildId: null,
                    avatarDecorationOverride: i,
                    avatarSize: s.EFr.SIZE_152,
                    questPreviewRewardAssetUrl: c,
                }),
            }),
            (0, t.jsxs)("div", {
                className: w.copyContainer,
                children: [
                    (0, t.jsx)(s.X6q, {
                        variant: "heading-xl/bold",
                        color: "header-primary",
                        className: w.heading,
                        children: N.intl.string(N.t["0/Yz+f"]),
                    }),
                    (0, t.jsx)(s.Text, {
                        variant: "text-sm/medium",
                        color: "text-secondary",
                        className: w.text,
                        children: u,
                    }),
                ],
            }),
            (0, t.jsx)(s.zxk, {
                variant: "secondary",
                size: "sm",
                text: N.intl.string(N.t.MAS7uL),
                loading: "applying" === o,
                disabled: "claimed" !== o || m,
                onClick: r,
                fullWidth: !0,
            }),
        ],
    });
}
function k(e) {
    var n, a;
    let { quest: s, onClose: d, transitionState: h, preview: C, location: N } = e,
        w = i.useMemo(() => (0, x.xn)(s.config), [s]),
        k = (0, l.e7)([v.default], () => v.default.getCurrentUser()),
        [P, A] = (function (e) {
            let { product: n, isFetching: a } = (0, c.T)(e),
                t = i.useMemo(() => {
                    if (null == n || a) return null;
                    let e = n.items.find((e) => e.type === r.Z.AVATAR_DECORATION);
                    return null != e ? e : null;
                }, [n, a]),
                l = async () => {
                    if (null == t)
                        return f.Z.addBreadcrumb({ message: "Error saving avatar decoration; it is null" }), !1;
                    (0, o.cV)(t);
                    let e = m.Z.getAllPending(),
                        n = (0, u.ED)(e),
                        a = await (0, o.Mn)(n);
                    return (0, o.si)(), !!(null == a ? void 0 : a.ok);
                };
            return [t, l];
        })(null != (a = null == w ? void 0 : w.skuId) ? a : null),
        Z = (null == (n = s.userStatus) ? void 0 : n.claimedAt) != null,
        b = !C && !Z,
        [D, I] = i.useState(b ? "loading" : "claimed");
    i.useEffect(() => {
        b &&
            (0, g.QB)(s.id, p.y$.CROSS_PLATFORM, N)
                .then(() => I("claimed"))
                .catch(() => I("error"));
    }, [s, N, b]);
    let R = !0 === C && null === P && (null == w ? void 0 : w.skuId) !== "",
        S = null == P && !0 !== C,
        T = null == k || S || R || "loading" === D,
        q = "error" === D || null == w;
    if (T || q) return null;
    let B = async () => {
        I("applying"), I((await A()) ? "applied" : "claimed");
    };
    return (0, t.jsx)(_.Z, {
        onClose: d,
        transitionState: h,
        quest: s,
        rewardContent: (0, t.jsx)(j.Z, {
            rewardName: w.messages.name,
            children: (0, t.jsx)(y, {
                quest: s,
                avatarDeco: P,
                user: k,
                mode: D,
                onUseNow: B,
            }),
        }),
    });
}
