a.d(s, { default: () => G });
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
    x = a(969935),
    j = a(607470),
    y = a(318346),
    f = a(672619),
    S = a(219980),
    C = a(106799),
    g = a(287809),
    A = a(153229),
    R = a(506988),
    E = a(61387),
    w = a(417404),
    O = a(280249),
    _ = a(670092),
    v = a(221596),
    L = a(652215),
    T = a(758836),
    k = a(792996),
    N = a(426963),
    P = a(484252);
function D(e) {
    let { onVideoLoaded: s } = e;
    return (0, t.jsx)(j.A, {
        className: N.d0,
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
function B(e) {
    let { onVideoLoaded: s, isLoading: a } = e,
        l = (0, c.bG)([h.Ay], () => h.Ay.useReducedMotion),
        [r, i] = n.useState(!l),
        u = (0, m.Ay)(),
        b = (0, d.q)(u),
        p = b
            ? "https://cdn.discordapp.com/assets/content/4c65c8edcb240ab88372cd7e405619919a35d2d6e2255bb24d335e1829ce4089.webm"
            : P.A,
        x = n.useRef(null),
        y = n.useRef(null),
        [f, S] = n.useState(!1),
        [C, g] = n.useState(!1),
        [A, R] = n.useState(!1);
    (n.useEffect(() => {
        f && C && A && s();
    }, [f, C, A, s]),
        n.useEffect(() => {
            a ||
                l ||
                setTimeout(() => {
                    x.current?.play();
                }, 200);
        }, [a, l]));
    let E = n.useCallback(() => {
        l || (i(!1), y.current?.play());
    }, [l]);
    return (0, t.jsxs)("div", {
        className: N.GF,
        children: [
            (0, t.jsx)(j.A, {
                ref: y,
                autoPlay: !1,
                loop: !0,
                muted: !0,
                playsInline: !0,
                className: o()(N.nH, N.EZ, { [N.R]: r }),
                controls: !1,
                onCanPlayThrough: n.useCallback(() => g(!0), []),
                children: (0, t.jsx)("source", { src: p, type: "video/webm" }),
            }),
            (0, t.jsx)(j.A, {
                ref: x,
                autoPlay: !1,
                muted: !0,
                playsInline: !0,
                className: N.nH,
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
                className: N.Se,
                children: [
                    (0, t.jsx)(D, { onVideoLoaded: n.useCallback(() => R(!0), []) }),
                    (0, t.jsx)(D, {}),
                    (0, t.jsx)(D, {}),
                    (0, t.jsx)(D, {}),
                ],
            }),
        ],
    });
}
function W(e) {
    let { isLoading: s, orbsEarned: a, orbsBalance: n, onVideoLoaded: l } = e;
    return (0, t.jsxs)("div", {
        className: N.hQ,
        children: [
            (0, t.jsx)(B, { isLoading: s, onVideoLoaded: l }),
            (0, t.jsxs)("div", {
                className: N.dD,
                children: [
                    (0, t.jsxs)("div", {
                        className: N.R_,
                        children: [
                            (0, t.jsx)(C.B, { shouldUseThemeColor: !0, className: N.Uu }),
                            (0, t.jsx)(i.D, {
                                variant: "heading-xl/semibold",
                                color: "text-strong",
                                "aria-label": k.intl.formatToPlainString(k.t.WPNjGe, { count: a }),
                                children: k.intl.formatToPlainString(k.t.YMor7k, { count: a }),
                            }),
                        ],
                    }),
                    null != n
                        ? (0, t.jsx)(u.E, {
                              variant: "body-sm/medium",
                              color: "text-subtle",
                              children: k.intl.format(k.t.g4t9aw, {
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
                text: k.intl.string(k.t.WYchde),
                onClick: function () {
                    ((0, y.Y)({
                        pageType: L.liQ.GLOBAL_DISCOVERY_QUESTS,
                        sectionType: L.JJy.ORBS_REWARD_MODAL,
                        ctaObject: L.ZSU.CTA_TO_ORBS_SHOP,
                    }),
                        (0, r.s7)(),
                        (0, x.Cz)({ tab: T.G2.ORBS, analyticsLocations: [], analyticsSource: p.A.QUEST_REWARD_MODAL }));
                },
                fullWidth: !0,
            }),
        ],
    });
}
function G(e) {
    let { initialQuest: s, onClose: a, transitionState: l, sourceQuestContent: o, location: d } = e,
        r = (0, E.C5)(s.id) ?? s,
        i = r.userStatus?.claimedAt != null,
        { balance: u, error: b } = (0, f.W0)(),
        m = (0, c.bG)([g.default], () => g.default.getCurrentUser()),
        h = r.userStatus?.orbQuantityClaimed ?? (0, w.wo)(r.config, m),
        [p, x] = n.useState(i ? "success" : "loading"),
        [j, y] = n.useState(!1),
        C = n.useCallback(() => {
            y(!0);
        }, []);
    n.useEffect(() => {
        i ||
            "loading" !== p ||
            (0, A.Oq)(r.id, R.pY.CROSS_PLATFORM, d)
                .then(() => x("success"))
                .catch(() => x("error"));
    }, [r.id, i, p, d]);
    let L = !j || "loading" === p || (null == u && null == b),
        T = "error" === p || null == h || (null == u && null != b);
    return (0, t.jsxs)(t.Fragment, {
        children: [
            (0, t.jsx)(S.Y, {}),
            (0, t.jsx)(_.A, {
                onClose: a,
                transitionState: l,
                quest: r,
                sourceQuestContent: o,
                location: v.rE.ORBS_REWARD_MODAL,
                isRewardContentLoading: L,
                rewardContentHasError: T,
                rewardContent: T
                    ? null
                    : (0, t.jsx)(O.A, {
                          rewardName: k.intl.string(k.t.Lmysvd),
                          children: (0, t.jsx)(W, { orbsEarned: h, orbsBalance: u, isLoading: L, onVideoLoaded: C }),
                      }),
            }),
        ],
    });
}
