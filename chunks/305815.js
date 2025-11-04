t.d(n, { default: () => P }), t(388685);
var r = t(951288),
    a = t(647438),
    i = t(979554),
    l = t(442837),
    s = t(481060),
    o = t(809206),
    d = t(204418),
    c = t(583434),
    u = t(150039),
    m = t(164946),
    p = t(25990),
    f = t(594174),
    g = t(960048),
    C = t(22095),
    x = t(509212),
    v = t(113434),
    h = t(497505),
    j = t(475595),
    _ = t(515108),
    y = t(291967),
    N = t(46140),
    b = t(388032),
    w = t(129034);
function T(e) {
    var n;
    let { quest: t, avatarDeco: a, onUseNow: i, user: l, mode: o } = e,
        c = (0, j.fh)(t, j.eC.REWARD).url,
        u = (0, v.Qy)(t.config),
        m =
            (null == (n = l.avatarDecoration) ? void 0 : n.skuId) != null &&
            l.avatarDecoration.skuId === (null == a ? void 0 : a.skuId);
    return (0, r.jsxs)("div", {
        className: w.contentContainer,
        children: [
            (0, r.jsx)("div", {
                className: w.previewContainer,
                children: (0, r.jsx)(d.Z, {
                    user: l,
                    guildId: null,
                    avatarDecorationOverride: a,
                    avatarSize: s.EFr.SIZE_152,
                    questPreviewRewardAssetUrl: c,
                }),
            }),
            (0, r.jsxs)("div", {
                className: w.copyContainer,
                children: [
                    (0, r.jsx)(s.Heading, {
                        variant: "heading-xl/semibold",
                        color: "header-primary",
                        className: w.heading,
                        children: b.intl.string(b.t["0/Yz+Y"]),
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
                text: m ? b.intl.string(b.t.hjaYYn) : b.intl.string(b.t.MAS7uK),
                loading: "applying" === o,
                disabled: "claimed" !== o || m,
                onClick: i,
                fullWidth: !0,
            }),
        ],
    });
}
function P(e) {
    var n, t, s;
    let { initialQuest: d, onClose: j, transitionState: b, preview: w, location: P, sourceQuestContent: E } = e,
        A = null != (t = (0, v.B4)(d.id)) ? t : d,
        D = a.useMemo(() => (0, x.xn)(A.config), [A]),
        O = (0, l.e7)([f.default], () => f.default.getCurrentUser()),
        [L, S] = (function (e) {
            let { product: n, isFetching: t } = (0, c.T)(e),
                r = a.useMemo(() => {
                    if (null == n || t) return null;
                    let e = n.items.find((e) => e.type === i.Z.AVATAR_DECORATION);
                    return null != e ? e : null;
                }, [n, t]),
                l = async () => {
                    if (null == r)
                        return g.Z.addBreadcrumb({ message: "Error saving avatar decoration; it is null" }), !1;
                    (0, u.PO)(r);
                    let e = p.Z.getAllPending(),
                        n = (0, m.ED)(e),
                        t = await (0, o.Mn)(n);
                    return (0, o.si)(), !!(null == t ? void 0 : t.ok);
                };
            return [r, l];
        })(null != (s = null == D ? void 0 : D.skuId) ? s : null),
        R = (null == (n = A.userStatus) ? void 0 : n.claimedAt) != null,
        k = !w && !R,
        [I, M] = a.useState(k ? "loading" : "claimed");
    a.useEffect(() => {
        k &&
            (0, C.QB)(A.id, h.y$.CROSS_PLATFORM, P)
                .then(() => M("claimed"))
                .catch(() => M("error"));
    }, [A.id, P, k]);
    let Z = !0 === w && null === L && (null == D ? void 0 : D.skuId) !== "",
        B = null == O,
        q = B || (null == L && !0 !== w) || Z || "loading" === I,
        G = "error" === I || null == D,
        W = async () => {
            M("applying"), M((await S()) ? "applied" : "claimed");
        };
    return (0, r.jsx)(_.Z, {
        onClose: j,
        transitionState: b,
        quest: A,
        sourceQuestContent: E,
        location: N.dr.COLLECTIBLE_REWARD_MODAL,
        isRewardContentLoading: q,
        rewardContentHasError: G,
        rewardContent:
            G || B
                ? null
                : (0, r.jsx)(y.Z, {
                      rewardName: D.messages.name,
                      children: (0, r.jsx)(T, {
                          quest: A,
                          avatarDeco: L,
                          user: O,
                          mode: I,
                          onUseNow: W,
                      }),
                  }),
    });
}
