t.d(s, { default: () => W });
var a = t(627968),
    n = t(64700),
    c = t(503698),
    l = t.n(c),
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
    S = t(761705),
    y = t(106799),
    C = t(340124),
    g = t(507107),
    A = t(31587),
    R = t(646917),
    E = t(576761),
    _ = t(801365),
    O = t(801870),
    v = t(448109),
    w = t(190107),
    L = t(652215),
    T = t(758836),
    k = t(375708),
    B = t(823628),
    D = t(181713);
function N(e) {
    let { onVideoLoaded: s } = e;
    return (0, a.jsx)(f.A, {
        className: B.d0,
        playsInline: !0,
        controls: !1,
        autoPlay: !0,
        loop: !0,
        onCanPlayThrough: s,
        children: (0, a.jsx)("source", { src: D.A, type: "video/webm" }),
    });
}
function P(e) {
    let { onVideoLoaded: s, isLoading: t } = e,
        c = (0, o.bG)([h.A], () => h.A.useReducedMotion),
        [r, i] = n.useState(!c),
        u = (0, m.Ay)(),
        b = (0, d.q)(u),
        p = n.useRef(null),
        x = n.useRef(null),
        [j, S] = n.useState(!1),
        [y, C] = n.useState(!1),
        [g, A] = n.useState(!1);
    n.useEffect(() => {
        j && y && g && s();
    }, [j, y, g, s]),
        n.useEffect(() => {
            t ||
                c ||
                setTimeout(() => {
                    p.current?.play();
                }, 200);
        }, [t, c]);
    let R = n.useCallback(() => {
        c || (i(!1), x.current?.play());
    }, [c]);
    return (0, a.jsxs)("div", {
        className: B.GF,
        children: [
            (0, a.jsx)(f.A, {
                ref: x,
                autoPlay: !1,
                loop: !0,
                muted: !0,
                playsInline: !0,
                className: l()(B.nH, B.EZ, { [B.R]: r }),
                controls: !1,
                onCanPlayThrough: n.useCallback(() => C(!0), []),
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
                className: B.nH,
                controls: !1,
                onCanPlayThrough: n.useCallback(() => S(!0), []),
                onEnded: R,
                children: (0, a.jsx)("source", {
                    src: b
                        ? "https://cdn.discordapp.com/assets/content/e6b9db9480bfd82c547ee83086a8efc485af6ee22bcc4b418e0ee366785d5b91.webm"
                        : "https://cdn.discordapp.com/assets/content/88a67852778d47306c14ce2403d7b072aba847a61640b029915adc6448d386ba.webm",
                    type: "video/webm",
                }),
            }),
            (0, a.jsxs)("div", {
                className: B.Se,
                children: [
                    (0, a.jsx)(N, { onVideoLoaded: n.useCallback(() => A(!0), []) }),
                    (0, a.jsx)(N, {}),
                    (0, a.jsx)(N, {}),
                    (0, a.jsx)(N, {}),
                ],
            }),
        ],
    });
}
function M(e) {
    let { isLoading: s, orbsEarned: t, orbsBalance: n, onVideoLoaded: c } = e;
    return (0, a.jsxs)("div", {
        className: B.hQ,
        children: [
            (0, a.jsx)(P, { isLoading: s, onVideoLoaded: c }),
            (0, a.jsxs)("div", {
                className: B.dD,
                children: [
                    (0, a.jsxs)("div", {
                        className: B.R_,
                        children: [
                            (0, a.jsx)(y.B, { shouldUseThemeColor: !0, className: B.Uu }),
                            (0, a.jsx)(i.D, {
                                variant: "heading-xl/semibold",
                                color: "text-strong",
                                children: k.intl.formatToPlainString(k.t.YMor7k, { count: t }),
                            }),
                        ],
                    }),
                    null != n
                        ? (0, a.jsx)(u.E, {
                              variant: "text-sm/medium",
                              color: "text-subtle",
                              children: k.intl.format(k.t.g4t9aw, {
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
                text: k.intl.string(k.t.WYchde),
                onClick: () => {
                    (0, j.Y)({
                        pageType: L.liQ.GLOBAL_DISCOVERY_QUESTS,
                        sectionType: L.JJy.ORBS_REWARD_MODAL,
                        ctaObject: L.ZSU.CTA_TO_ORBS_SHOP,
                    }),
                        (0, r.closeAllModals)(),
                        (0, x.Cz)({ tab: T.G2.ORBS, analyticsLocations: [], analyticsSource: p.A.QUEST_REWARD_MODAL });
                },
                fullWidth: !0,
            }),
        ],
    });
}
function W(e) {
    let { initialQuest: s, onClose: t, transitionState: c, sourceQuestContent: l, location: o } = e,
        d = (0, A.C5)(s.id) ?? s,
        r = d.userStatus?.claimedAt != null,
        i = (0, R.z)(),
        u = (0, A.SD)(d, i),
        { balance: b, error: m } = (0, S.W)(),
        h = n.useMemo(() => (u && (0, E.B9)(i) ? (0, _.zB)(d.config) : (0, _._Z)(d.config)), [d.config, u, i]),
        [p, x] = n.useState(r ? "success" : "loading"),
        [f, j] = n.useState(!1),
        y = n.useCallback(() => {
            j(!0);
        }, []);
    n.useEffect(() => {
        r ||
            "loading" !== p ||
            (0, C.Oq)(d.id, g.pY.CROSS_PLATFORM, o)
                .then(() => x("success"))
                .catch(() => x("error"));
    }, [d.id, r, p, o]);
    let L = !f || "loading" === p || (null == b && null == m),
        T = "error" === p || null == h || (null == b && null != m);
    return (0, a.jsx)(v.A, {
        onClose: t,
        transitionState: c,
        quest: d,
        sourceQuestContent: l,
        location: w.rE.ORBS_REWARD_MODAL,
        isRewardContentLoading: L,
        rewardContentHasError: T,
        rewardContent: T
            ? null
            : (0, a.jsx)(O.A, {
                  rewardName: k.intl.string(k.t.Lmysvd),
                  children: (0, a.jsx)(M, { orbsEarned: h, orbsBalance: b, isLoading: L, onVideoLoaded: y }),
              }),
    });
}
