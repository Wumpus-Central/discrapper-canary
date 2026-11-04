a.d(s, { default: () => W });
var t = a(477900),
    n = a(582128),
    l = a(503698),
    o = a.n(l),
    c = a(855986),
    d = a(366010),
    r = a(192308),
    i = a(534514),
    u = a(834730),
    b = a(821609),
    m = a(736653),
    h = a(775602),
    p = a(793574),
    x = a(110676),
    y = a(607470),
    f = a(318346),
    j = a(672619),
    S = a(106799),
    C = a(287809),
    g = a(7891),
    A = a(506988),
    R = a(61387),
    E = a(417404),
    w = a(280249),
    O = a(670092),
    _ = a(221596),
    v = a(652215),
    L = a(758836),
    T = a(792996),
    k = a(426963),
    N = a(484252);
function P(e) {
    let { onVideoLoaded: s } = e;
    return (0, t.jsx)(y.A, {
        className: k.d0,
        playsInline: !0,
        controls: !1,
        autoPlay: !0,
        loop: !0,
        onCanPlayThrough: s,
        children: (0, t.jsx)("source", {
            src: "https://cdn.discordapp.com/assets/content/61aaaee4a0366652022b510d9aaa8a26d552ce8457679b0c28c5e2002484a5a6.webm",
            type: "video/webm",
        }),
    });
}
function D(e) {
    let { onVideoLoaded: s, isLoading: a } = e,
        l = (0, c.bG)([h.Ay], () => h.Ay.useReducedMotion),
        [r, i] = n.useState(!l),
        u = (0, m.Ay)(),
        b = (0, d.q)(u),
        p = b
            ? "https://cdn.discordapp.com/assets/content/4c65c8edcb240ab88372cd7e405619919a35d2d6e2255bb24d335e1829ce4089.webm"
            : N.A,
        x = n.useRef(null),
        f = n.useRef(null),
        [j, S] = n.useState(!1),
        [C, g] = n.useState(!1),
        [A, R] = n.useState(!1);
    (n.useEffect(() => {
        j && C && A && s();
    }, [j, C, A, s]),
        n.useEffect(() => {
            a ||
                l ||
                setTimeout(() => {
                    x.current?.play();
                }, 200);
        }, [a, l]));
    let E = n.useCallback(() => {
        l || (i(!1), f.current?.play());
    }, [l]);
    return (0, t.jsxs)("div", {
        className: k.GF,
        children: [
            (0, t.jsx)(y.A, {
                ref: f,
                autoPlay: !1,
                loop: !0,
                muted: !0,
                playsInline: !0,
                className: o()(k.nH, k.EZ, { [k.R]: r }),
                controls: !1,
                onCanPlayThrough: n.useCallback(() => g(!0), []),
                children: (0, t.jsx)("source", { src: p, type: "video/webm" }),
            }),
            (0, t.jsx)(y.A, {
                ref: x,
                autoPlay: !1,
                muted: !0,
                playsInline: !0,
                className: k.nH,
                controls: !1,
                onCanPlayThrough: n.useCallback(() => S(!0), []),
                onEnded: E,
                children: (0, t.jsx)("source", {
                    src: b
                        ? "https://cdn.discordapp.com/assets/content/e6b9db9480bfd82c547ee83086a8efc485af6ee22bcc4b418e0ee366785d5b91.webm"
                        : "https://cdn.discordapp.com/assets/content/88a67852778d47306c14ce2403d7b072aba847a61640b029915adc6448d386ba.webm",
                    type: "video/webm",
                }),
            }),
            (0, t.jsxs)("div", {
                className: k.Se,
                children: [
                    (0, t.jsx)(P, { onVideoLoaded: n.useCallback(() => R(!0), []) }),
                    (0, t.jsx)(P, {}),
                    (0, t.jsx)(P, {}),
                    (0, t.jsx)(P, {}),
                ],
            }),
        ],
    });
}
function B(e) {
    let { isLoading: s, orbsEarned: a, orbsBalance: n, onVideoLoaded: l } = e;
    return (0, t.jsxs)("div", {
        className: k.hQ,
        children: [
            (0, t.jsx)(D, { isLoading: s, onVideoLoaded: l }),
            (0, t.jsxs)("div", {
                className: k.dD,
                children: [
                    (0, t.jsxs)("div", {
                        className: k.R_,
                        children: [
                            (0, t.jsx)(S.B, { shouldUseThemeColor: !0, className: k.Uu }),
                            (0, t.jsx)(i.D, {
                                variant: "heading-xl/semibold",
                                color: "text-strong",
                                "aria-label": T.intl.formatToPlainString(T.t.WPNjGe, { count: a }),
                                children: T.intl.formatToPlainString(T.t.YMor7k, { count: a }),
                            }),
                        ],
                    }),
                    null != n
                        ? (0, t.jsx)(u.E, {
                              variant: "body-sm/medium",
                              color: "text-subtle",
                              children: T.intl.format(T.t.g4t9aw, {
                                  orbsBalance: n,
                                  orbsBalanceHook: (e, s) =>
                                      (0, t.jsx)(
                                          u.E,
                                          { variant: "body-sm/medium", color: "text-strong", tag: "span", children: e },
                                          s,
                                      ),
                              }),
                          })
                        : null,
                ],
            }),
            (0, t.jsx)(b.$, {
                variant: "secondary",
                size: "sm",
                text: T.intl.string(T.t.WYchde),
                onClick: function () {
                    ((0, f.Y)({
                        pageType: v.liQ.GLOBAL_DISCOVERY_QUESTS,
                        sectionType: v.JJy.ORBS_REWARD_MODAL,
                        ctaObject: v.ZSU.CTA_TO_ORBS_SHOP,
                    }),
                        (0, r.s7)(),
                        (0, x.Cz)({ tab: L.G2.ORBS, analyticsLocations: [], analyticsSource: p.A.QUEST_REWARD_MODAL }));
                },
                fullWidth: !0,
            }),
        ],
    });
}
function W(e) {
    let { initialQuest: s, onClose: a, transitionState: l, sourceQuestContent: o, location: d } = e,
        r = (0, R.C5)(s.id) ?? s,
        i = r.userStatus?.claimedAt != null,
        { balance: u, error: b } = (0, j.W0)(),
        m = (0, c.bG)([C.default], () => C.default.getCurrentUser()),
        h = r.userStatus?.orbQuantityClaimed ?? (0, E.wo)(r.config, m),
        [p, x] = n.useState(i ? "success" : "loading"),
        [y, f] = n.useState(!1),
        S = n.useCallback(() => {
            f(!0);
        }, []);
    n.useEffect(() => {
        i ||
            "loading" !== p ||
            (0, g.Oq)(r.id, A.pY.CROSS_PLATFORM, d)
                .then(() => x("success"))
                .catch(() => x("error"));
    }, [r.id, i, p, d]);
    let v = !y || "loading" === p || (null == u && null == b),
        L = "error" === p || null == h || (null == u && null != b);
    return (0, t.jsx)(O.A, {
        onClose: a,
        transitionState: l,
        quest: r,
        sourceQuestContent: o,
        location: _.rE.ORBS_REWARD_MODAL,
        isRewardContentLoading: v,
        rewardContentHasError: L,
        rewardContent: L
            ? null
            : (0, t.jsx)(w.A, {
                  rewardName: T.intl.string(T.t.Lmysvd),
                  children: (0, t.jsx)(B, { orbsEarned: h, orbsBalance: u, isLoading: v, onVideoLoaded: S }),
              }),
    });
}
