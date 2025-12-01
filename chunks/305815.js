t.d(n, { default: () => P }), t(388685);
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
    x = t(960048),
    g = t(22095),
    C = t(313481),
    h = t(49436),
    v = t(475595),
    j = t(115179),
    _ = t(515108),
    y = t(291967),
    N = t(324805),
    b = t(388032),
    w = t(129034);
function A(e) {
    var n;
    let { quest: t, avatarDeco: i, onUseNow: a, user: l, mode: s } = e,
        d = (0, v.fh)(t, v.eC.REWARD).url,
        u = (0, C.Qy)(t.config),
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
                        children: b.intl.string(b.t["0/Yz+Y"]),
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
                text: m ? b.intl.string(b.t.hjaYYn) : b.intl.string(b.t.MAS7uK),
                loading: "applying" === s,
                disabled: "claimed" !== s || m,
                onClick: a,
                fullWidth: !0,
            }),
        ],
    });
}
function P(e) {
    var n, t, o;
    let { initialQuest: c, onClose: v, transitionState: b, preview: w, location: P, sourceQuestContent: D } = e,
        E = null != (t = (0, C.B4)(c.id)) ? t : c,
        T = i.useMemo(() => (0, j.xn)(E.config), [E]),
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
                        return x.Z.addBreadcrumb({ message: "Error saving avatar decoration; it is null" }), !1;
                    (0, u.PO)(r);
                    let e = p.Z.getAllPending(),
                        n = (0, m.ED)(e),
                        t = await (0, s.Mn)(n);
                    return (0, s.si)(), !!(null == t ? void 0 : t.ok);
                };
            return [r, l];
        })(null != (o = null == T ? void 0 : T.skuId) ? o : null),
        I = (null == (n = E.userStatus) ? void 0 : n.claimedAt) != null,
        k = !w && !I,
        [S, M] = i.useState(k ? "loading" : "claimed");
    i.useEffect(() => {
        k &&
            (0, g.QB)(E.id, h.y$.CROSS_PLATFORM, P)
                .then(() => M("claimed"))
                .catch(() => M("error"));
    }, [E.id, P, k]);
    let Z = !0 === w && null === L && (null == T ? void 0 : T.skuId) !== "",
        B = null == O,
        W = B || (null == L && !0 !== w) || Z || "loading" === S,
        q = "error" === S || null == T,
        G = async () => {
            M("applying"), M((await R()) ? "applied" : "claimed");
        };
    return (0, r.jsx)(_.Z, {
        onClose: v,
        transitionState: b,
        quest: E,
        sourceQuestContent: D,
        location: N.dr.COLLECTIBLE_REWARD_MODAL,
        isRewardContentLoading: W,
        rewardContentHasError: q,
        rewardContent:
            q || B
                ? null
                : (0, r.jsx)(y.Z, {
                      rewardName: T.messages.name,
                      children: (0, r.jsx)(A, {
                          quest: E,
                          avatarDeco: L,
                          user: O,
                          mode: S,
                          onUseNow: G,
                      }),
                  }),
    });
}
