t.d(s, { default: () => M });
var a = t(627968),
    n = t(64700),
    l = t(503698),
    c = t.n(l),
    o = t(17928),
    d = t(366010),
    r = t(192308),
    i = t(534514),
    u = t(834730),
    b = t(821609),
    m = t(736653),
    h = t(775602),
    p = t(793574),
    x = t(859040),
    f = t(607470),
    j = t(318346),
    C = t(761705),
    S = t(106799),
    y = t(287809),
    A = t(340124),
    g = t(507107),
    R = t(31587),
    E = t(801365),
    w = t(801870),
    O = t(448109),
    _ = t(190107),
    v = t(652215),
    L = t(758836),
    T = t(375708),
    k = t(823628),
    N = t(181713);
function D(e) {
    let { onVideoLoaded: s } = e;
    return (0, a.jsx)(f.A, {
        className: k.d0,
        playsInline: !0,
        controls: !1,
        autoPlay: !0,
        loop: !0,
        onCanPlayThrough: s,
        children: (0, a.jsx)("source", { src: N.A, type: "video/webm" }),
    });
}
function P(e) {
    let { onVideoLoaded: s, isLoading: t } = e,
        l = (0, o.bG)([h.A], () => h.A.useReducedMotion),
        [r, i] = n.useState(!l),
        u = (0, m.Ay)(),
        b = (0, d.q)(u),
        p = n.useRef(null),
        x = n.useRef(null),
        [j, C] = n.useState(!1),
        [S, y] = n.useState(!1),
        [A, g] = n.useState(!1);
    n.useEffect(() => {
        j && S && A && s();
    }, [j, S, A, s]),
        n.useEffect(() => {
            t ||
                l ||
                setTimeout(() => {
                    p.current?.play();
                }, 200);
        }, [t, l]);
    let R = n.useCallback(() => {
        l || (i(!1), x.current?.play());
    }, [l]);
    return (0, a.jsxs)("div", {
        className: k.GF,
        children: [
            (0, a.jsx)(f.A, {
                ref: x,
                autoPlay: !1,
                loop: !0,
                muted: !0,
                playsInline: !0,
                className: c()(k.nH, k.EZ, { [k.R]: r }),
                controls: !1,
                onCanPlayThrough: n.useCallback(() => y(!0), []),
                children: (0, a.jsx)("source", {
                    src: b
                        ? "https://cdn.discordapp.com/assets/content/4c65c8edcb240ab88372cd7e405619919a35d2d6e2255bb24d335e1829ce4089.webm"
                        : "https://cdn.discordapp.com/assets/content/759ca0dd0fedd8b1c983f6b2f457fc85cf6656be30a8538e7eab546704f43a47.webm",
                    type: "video/webm",
                }),
            }),
            (0, a.jsx)(f.A, {
                ref: p,
                autoPlay: !1,
                muted: !0,
                playsInline: !0,
                className: k.nH,
                controls: !1,
                onCanPlayThrough: n.useCallback(() => C(!0), []),
                onEnded: R,
                children: (0, a.jsx)("source", {
                    src: b
                        ? "https://cdn.discordapp.com/assets/content/e6b9db9480bfd82c547ee83086a8efc485af6ee22bcc4b418e0ee366785d5b91.webm"
                        : "https://cdn.discordapp.com/assets/content/88a67852778d47306c14ce2403d7b072aba847a61640b029915adc6448d386ba.webm",
                    type: "video/webm",
                }),
            }),
            (0, a.jsxs)("div", {
                className: k.Se,
                children: [
                    (0, a.jsx)(D, { onVideoLoaded: n.useCallback(() => g(!0), []) }),
                    (0, a.jsx)(D, {}),
                    (0, a.jsx)(D, {}),
                    (0, a.jsx)(D, {}),
                ],
            }),
        ],
    });
}
function B(e) {
    let { isLoading: s, orbsEarned: t, orbsBalance: n, onVideoLoaded: l } = e;
    return (0, a.jsxs)("div", {
        className: k.hQ,
        children: [
            (0, a.jsx)(P, { isLoading: s, onVideoLoaded: l }),
            (0, a.jsxs)("div", {
                className: k.dD,
                children: [
                    (0, a.jsxs)("div", {
                        className: k.R_,
                        children: [
                            (0, a.jsx)(S.B, { shouldUseThemeColor: !0, className: k.Uu }),
                            (0, a.jsx)(i.D, {
                                variant: "heading-xl/semibold",
                                color: "text-strong",
                                children: T.intl.formatToPlainString(T.t.YMor7k, { count: t }),
                            }),
                        ],
                    }),
                    null != n
                        ? (0, a.jsx)(u.E, {
                              variant: "text-sm/medium",
                              color: "text-subtle",
                              children: T.intl.format(T.t.g4t9aw, {
                                  orbsBalance: n,
                                  orbsBalanceHook: (e, s) =>
                                      (0, a.jsx)(
                                          u.E,
                                          { variant: "text-sm/medium", color: "text-strong", tag: "span", children: e },
                                          s,
                                      ),
                              }),
                          })
                        : null,
                ],
            }),
            (0, a.jsx)(b.$, {
                variant: "secondary",
                size: "sm",
                text: T.intl.string(T.t.WYchde),
                onClick: () => {
                    (0, j.Y)({
                        pageType: v.liQ.GLOBAL_DISCOVERY_QUESTS,
                        sectionType: v.JJy.ORBS_REWARD_MODAL,
                        ctaObject: v.ZSU.CTA_TO_ORBS_SHOP,
                    }),
                        (0, r.closeAllModals)(),
                        (0, x.Cz)({ tab: L.G2.ORBS, analyticsLocations: [], analyticsSource: p.A.QUEST_REWARD_MODAL });
                },
                fullWidth: !0,
            }),
        ],
    });
}
function M(e) {
    let { initialQuest: s, onClose: t, transitionState: l, sourceQuestContent: c, location: d } = e,
        r = (0, R.C5)(s.id) ?? s,
        i = r.userStatus?.claimedAt != null,
        { balance: u, error: b } = (0, C.W)(),
        m = (0, o.bG)([y.default], () => y.default.getCurrentUser()),
        h = r.userStatus?.orbQuantityClaimed ?? (0, E.wo)(r.config, m),
        [p, x] = n.useState(i ? "success" : "loading"),
        [f, j] = n.useState(!1),
        S = n.useCallback(() => {
            j(!0);
        }, []);
    n.useEffect(() => {
        i ||
            "loading" !== p ||
            (0, A.Oq)(r.id, g.pY.CROSS_PLATFORM, d)
                .then(() => x("success"))
                .catch(() => x("error"));
    }, [r.id, i, p, d]);
    let v = !f || "loading" === p || (null == u && null == b),
        L = "error" === p || null == h || (null == u && null != b);
    return (0, a.jsx)(O.A, {
        onClose: t,
        transitionState: l,
        quest: r,
        sourceQuestContent: c,
        location: _.rE.ORBS_REWARD_MODAL,
        isRewardContentLoading: v,
        rewardContentHasError: L,
        rewardContent: L
            ? null
            : (0, a.jsx)(w.A, {
                  rewardName: T.intl.string(T.t.Lmysvd),
                  children: (0, a.jsx)(B, { orbsEarned: h, orbsBalance: u, isLoading: v, onVideoLoaded: S }),
              }),
    });
}
