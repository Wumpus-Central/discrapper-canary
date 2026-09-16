t.d(s, { default: () => W });
var a = t(477900),
    n = t(582128),
    l = t(503698),
    o = t.n(l),
    c = t(17928),
    r = t(366010),
    d = t(192308),
    i = t(297264),
    u = t(834730),
    b = t(821609),
    m = t(736653),
    h = t(775602),
    p = t(793574),
    x = t(839534),
    f = t(607470),
    j = t(318346),
    y = t(761705),
    S = t(106799),
    C = t(287809),
    A = t(396813),
    g = t(738822),
    R = t(866157),
    E = t(801365),
    O = t(801870),
    _ = t(586035),
    v = t(190107),
    w = t(652215),
    L = t(758836),
    T = t(375708),
    k = t(426963),
    N = t(484252),
    P = t(181713);
function D(e) {
    let { onVideoLoaded: s } = e;
    return (0, a.jsx)(f.A, {
        className: k.d0,
        playsInline: !0,
        controls: !1,
        autoPlay: !0,
        loop: !0,
        onCanPlayThrough: s,
        children: (0, a.jsx)("source", { src: P.A, type: "video/webm" }),
    });
}
function B(e) {
    let { onVideoLoaded: s, isLoading: t } = e,
        l = (0, c.bG)([h.Ay], () => h.Ay.useReducedMotion),
        [d, i] = n.useState(!l),
        u = (0, m.Ay)(),
        b = (0, r.q)(u),
        p = b
            ? "https://cdn.discordapp.com/assets/content/4c65c8edcb240ab88372cd7e405619919a35d2d6e2255bb24d335e1829ce4089.webm"
            : N.A,
        x = n.useRef(null),
        j = n.useRef(null),
        [y, S] = n.useState(!1),
        [C, A] = n.useState(!1),
        [g, R] = n.useState(!1);
    (n.useEffect(() => {
        y && C && g && s();
    }, [y, C, g, s]),
        n.useEffect(() => {
            t ||
                l ||
                setTimeout(() => {
                    x.current?.play();
                }, 200);
        }, [t, l]));
    let E = n.useCallback(() => {
        l || (i(!1), j.current?.play());
    }, [l]);
    return (0, a.jsxs)("div", {
        className: k.GF,
        children: [
            (0, a.jsx)(f.A, {
                ref: j,
                autoPlay: !1,
                loop: !0,
                muted: !0,
                playsInline: !0,
                className: o()(k.nH, k.EZ, { [k.R]: d }),
                controls: !1,
                onCanPlayThrough: n.useCallback(() => A(!0), []),
                children: (0, a.jsx)("source", { src: p, type: "video/webm" }),
            }),
            (0, a.jsx)(f.A, {
                ref: x,
                autoPlay: !1,
                muted: !0,
                playsInline: !0,
                className: k.nH,
                controls: !1,
                onCanPlayThrough: n.useCallback(() => S(!0), []),
                onEnded: E,
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
                    (0, a.jsx)(D, { onVideoLoaded: n.useCallback(() => R(!0), []) }),
                    (0, a.jsx)(D, {}),
                    (0, a.jsx)(D, {}),
                    (0, a.jsx)(D, {}),
                ],
            }),
        ],
    });
}
function M(e) {
    let { isLoading: s, orbsEarned: t, orbsBalance: n, onVideoLoaded: l } = e;
    return (0, a.jsxs)("div", {
        className: k.hQ,
        children: [
            (0, a.jsx)(B, { isLoading: s, onVideoLoaded: l }),
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
                                "aria-label": T.intl.formatToPlainString(T.t.WPNjGe, { count: t }),
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
                onClick: function () {
                    ((0, j.Y)({
                        pageType: w.liQ.GLOBAL_DISCOVERY_QUESTS,
                        sectionType: w.JJy.ORBS_REWARD_MODAL,
                        ctaObject: w.ZSU.CTA_TO_ORBS_SHOP,
                    }),
                        (0, d.closeAllModals)(),
                        (0, x.Cz)({ tab: L.G2.ORBS, analyticsLocations: [], analyticsSource: p.A.QUEST_REWARD_MODAL }));
                },
                fullWidth: !0,
            }),
        ],
    });
}
function W(e) {
    let { initialQuest: s, onClose: t, transitionState: l, sourceQuestContent: o, location: r } = e,
        d = (0, R.C5)(s.id) ?? s,
        i = d.userStatus?.claimedAt != null,
        { balance: u, error: b } = (0, y.W)(),
        m = (0, c.bG)([C.default], () => C.default.getCurrentUser()),
        h = d.userStatus?.orbQuantityClaimed ?? (0, E.wo)(d.config, m),
        [p, x] = n.useState(i ? "success" : "loading"),
        [f, j] = n.useState(!1),
        S = n.useCallback(() => {
            j(!0);
        }, []);
    n.useEffect(() => {
        i ||
            "loading" !== p ||
            (0, A.Oq)(d.id, g.pY.CROSS_PLATFORM, r)
                .then(() => x("success"))
                .catch(() => x("error"));
    }, [d.id, i, p, r]);
    let w = !f || "loading" === p || (null == u && null == b),
        L = "error" === p || null == h || (null == u && null != b);
    return (0, a.jsx)(_.A, {
        onClose: t,
        transitionState: l,
        quest: d,
        sourceQuestContent: o,
        location: v.rE.ORBS_REWARD_MODAL,
        isRewardContentLoading: w,
        rewardContentHasError: L,
        rewardContent: L
            ? null
            : (0, a.jsx)(O.A, {
                  rewardName: T.intl.string(T.t.Lmysvd),
                  children: (0, a.jsx)(M, { orbsEarned: h, orbsBalance: u, isLoading: w, onVideoLoaded: S }),
              }),
    });
}
