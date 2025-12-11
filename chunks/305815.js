n.d(t, { default: () => P }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(979554),
    l = n(442837),
    o = n(481060),
    s = n(809206),
    c = n(204418),
    d = n(583434),
    u = n(150039),
    m = n(164946),
    f = n(25990),
    b = n(594174),
    p = n(960048),
    x = n(22095),
    g = n(49436),
    C = n(968843),
    h = n(475595),
    v = n(115179),
    j = n(515108),
    N = n(291967),
    y = n(324805),
    w = n(388032),
    _ = n(983102);
function A(e) {
    var t;
    let { quest: n, avatarDeco: i, onUseNow: a, user: l, mode: s } = e,
        d = (0, h.fh)(n, h.eC.REWARD).url,
        u = (0, C.Qy)(n.config),
        m =
            (null == (t = l.avatarDecoration) ? void 0 : t.skuId) != null &&
            l.avatarDecoration.skuId === (null == i ? void 0 : i.skuId);
    return (0, r.jsxs)("div", {
        className: _.contentContainer,
        children: [
            (0, r.jsx)("div", {
                className: _.previewContainer,
                children: (0, r.jsx)(c.Z, {
                    user: l,
                    guildId: null,
                    avatarDecorationOverride: i,
                    avatarSize: o.EFr.SIZE_152,
                    questPreviewRewardAssetUrl: d,
                }),
            }),
            (0, r.jsxs)("div", {
                className: _.copyContainer,
                children: [
                    (0, r.jsx)(o.Heading, {
                        variant: "heading-xl/semibold",
                        color: "text-strong",
                        className: _.heading,
                        children: w.intl.string(w.t["0/Yz+Y"]),
                    }),
                    (0, r.jsx)(o.Text, {
                        variant: "text-sm/medium",
                        color: "text-subtle",
                        children: u,
                    }),
                ],
            }),
            (0, r.jsx)(o.Button, {
                variant: "secondary",
                size: "sm",
                text: m ? w.intl.string(w.t.hjaYYn) : w.intl.string(w.t.MAS7uK),
                loading: "applying" === s,
                disabled: "claimed" !== s || m,
                onClick: a,
                fullWidth: !0,
            }),
        ],
    });
}
function P(e) {
    var t, n, o;
    let { initialQuest: c, onClose: h, transitionState: w, preview: _, location: P, sourceQuestContent: D } = e,
        E = null != (n = (0, C.B4)(c.id)) ? n : c,
        T = i.useMemo(() => (0, v.xn)(E.config), [E]),
        O = (0, l.e7)([b.default], () => b.default.getCurrentUser()),
        [L, R] = (function (e) {
            let { product: t, isFetching: n } = (0, d.T)(e),
                r = i.useMemo(() => {
                    if (null == t || n) return null;
                    let e = t.items.find((e) => e.type === a.Z.AVATAR_DECORATION);
                    return null != e ? e : null;
                }, [t, n]),
                l = async () => {
                    if (null == r)
                        return p.Z.addBreadcrumb({ message: "Error saving avatar decoration; it is null" }), !1;
                    (0, u.PO)(r);
                    let e = f.Z.getAllPending(),
                        t = (0, m.ED)(e),
                        n = await (0, s.Mn)(t);
                    return (0, s.si)(), !!(null == n ? void 0 : n.ok);
                };
            return [r, l];
        })(null != (o = null == T ? void 0 : T.skuId) ? o : null),
        I = (null == (t = E.userStatus) ? void 0 : t.claimedAt) != null,
        k = !_ && !I,
        [S, M] = i.useState(k ? "loading" : "claimed");
    i.useEffect(() => {
        k &&
            (0, x.QB)(E.id, g.y$.CROSS_PLATFORM, P)
                .then(() => M("claimed"))
                .catch(() => M("error"));
    }, [E.id, P, k]);
    let Z = !0 === _ && null === L && (null == T ? void 0 : T.skuId) !== "",
        B = null == O,
        W = B || (null == L && !0 !== _) || Z || "loading" === S,
        q = "error" === S || null == T,
        G = async () => {
            M("applying"), M((await R()) ? "applied" : "claimed");
        };
    return (0, r.jsx)(j.Z, {
        onClose: h,
        transitionState: w,
        quest: E,
        sourceQuestContent: D,
        location: y.dr.COLLECTIBLE_REWARD_MODAL,
        isRewardContentLoading: W,
        rewardContentHasError: q,
        rewardContent:
            q || B
                ? null
                : (0, r.jsx)(N.Z, {
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
