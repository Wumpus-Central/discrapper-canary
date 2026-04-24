n.d(t, { default: () => V });
var r = n(627968),
    a = n(64700),
    l = n(503698),
    s = n.n(l),
    i = n(17928),
    c = n(366010),
    o = n(192308),
    d = n(534514),
    u = n(834730),
    _ = n(821609),
    h = n(736653),
    C = n(775602),
    R = n(793574),
    E = n(693477),
    A = n(607470),
    f = n(318346),
    m = n(761705),
    b = n(106799),
    p = n(829219),
    g = n(507107),
    y = n(890687),
    S = n(801365),
    B = n(801870),
    I = n(448109),
    L = n(654487),
    N = n(652215),
    U = n(758836),
    T = n(985018),
    O = n(823628),
    x = n(181713);
function v(e) {
    let { onVideoLoaded: t } = e;
    return (0, r.jsx)(A.A, {
        className: O.d0,
        playsInline: !0,
        controls: !1,
        autoPlay: !0,
        loop: !0,
        onCanPlayThrough: t,
        children: (0, r.jsx)("source", { src: x.A, type: "video/webm" }),
    });
}
function F(e) {
    let { onVideoLoaded: t, isLoading: n } = e,
        l = (0, i.bG)([C.A], () => C.A.useReducedMotion),
        [o, d] = a.useState(!l),
        u = (0, h.Ay)(),
        _ = (0, c.q)(u),
        R = a.useRef(null),
        E = a.useRef(null),
        [f, m] = a.useState(!1),
        [b, p] = a.useState(!1),
        [g, y] = a.useState(!1);
    a.useEffect(() => {
        f && b && g && t();
    }, [f, b, g, t]),
        a.useEffect(() => {
            n ||
                l ||
                setTimeout(() => {
                    R.current?.play();
                }, 200);
        }, [n, l]);
    let S = a.useCallback(() => {
        l || (d(!1), E.current?.play());
    }, [l]);
    return (0, r.jsxs)("div", {
        className: O.GF,
        children: [
            (0, r.jsx)(A.A, {
                ref: E,
                autoPlay: !1,
                loop: !0,
                muted: !0,
                playsInline: !0,
                className: s()(O.nH, O.EZ, { [O.R]: o }),
                controls: !1,
                onCanPlayThrough: a.useCallback(() => p(!0), []),
                children: (0, r.jsx)("source", {
                    src: _
                        ? "https://cdn.discordapp.com/assets/content/4c65c8edcb240ab88372cd7e405619919a35d2d6e2255bb24d335e1829ce4089.webm"
                        : "https://cdn.discordapp.com/assets/content/759ca0dd0fedd8b1c983f6b2f457fc85cf6656be30a8538e7eab546704f43a47.webm",
                    type: "video/webm",
                }),
            }),
            (0, r.jsx)(A.A, {
                ref: R,
                autoPlay: !1,
                muted: !0,
                playsInline: !0,
                className: O.nH,
                controls: !1,
                onCanPlayThrough: a.useCallback(() => m(!0), []),
                onEnded: S,
                children: (0, r.jsx)("source", {
                    src: _
                        ? "https://cdn.discordapp.com/assets/content/e6b9db9480bfd82c547ee83086a8efc485af6ee22bcc4b418e0ee366785d5b91.webm"
                        : "https://cdn.discordapp.com/assets/content/88a67852778d47306c14ce2403d7b072aba847a61640b029915adc6448d386ba.webm",
                    type: "video/webm",
                }),
            }),
            (0, r.jsxs)("div", {
                className: O.Se,
                children: [
                    (0, r.jsx)(v, { onVideoLoaded: a.useCallback(() => y(!0), []) }),
                    (0, r.jsx)(v, {}),
                    (0, r.jsx)(v, {}),
                    (0, r.jsx)(v, {}),
                ],
            }),
        ],
    });
}
function w(e) {
    let { isLoading: t, orbsEarned: n, orbsBalance: a, onVideoLoaded: l } = e;
    return (0, r.jsxs)("div", {
        className: O.hQ,
        children: [
            (0, r.jsx)(F, { isLoading: t, onVideoLoaded: l }),
            (0, r.jsxs)("div", {
                className: O.dD,
                children: [
                    (0, r.jsxs)("div", {
                        className: O.R_,
                        children: [
                            (0, r.jsx)(b.B, { shouldUseThemeColor: !0, className: O.Uu }),
                            (0, r.jsx)(d.D, {
                                variant: "heading-xl/semibold",
                                color: "text-strong",
                                children: T.intl.formatToPlainString(T.t.YMor7k, { count: n }),
                            }),
                        ],
                    }),
                    null != a
                        ? (0, r.jsx)(u.E, {
                              variant: "text-sm/medium",
                              color: "text-subtle",
                              children: T.intl.format(T.t.g4t9aw, {
                                  orbsBalance: a,
                                  orbsBalanceHook: (e, t) =>
                                      (0, r.jsx)(
                                          u.E,
                                          { variant: "text-sm/medium", color: "text-strong", tag: "span", children: e },
                                          t,
                                      ),
                              }),
                          })
                        : null,
                ],
            }),
            (0, r.jsx)(_.$, {
                variant: "secondary",
                size: "sm",
                text: T.intl.string(T.t.WYchde),
                onClick: () => {
                    (0, f.Y)({
                        pageType: N.liQ.GLOBAL_DISCOVERY_QUESTS,
                        sectionType: N.JJy.ORBS_REWARD_MODAL,
                        ctaObject: N.ZSU.CTA_TO_ORBS_SHOP,
                    }),
                        (0, o.closeAllModals)(),
                        (0, E.Cz)({ tab: U.G2.ORBS, analyticsLocations: [], analyticsSource: R.A.QUEST_REWARD_MODAL });
                },
                fullWidth: !0,
            }),
        ],
    });
}
function V(e) {
    let { initialQuest: t, onClose: n, transitionState: l, sourceQuestContent: s, location: i } = e,
        c = (0, y.C5)(t.id) ?? t,
        o = c.userStatus?.claimedAt != null,
        d = (0, y.SD)(c),
        u = (0, y.Oq)(),
        { balance: _, error: h } = (0, m.W)(),
        C = a.useMemo(() => (d && u ? (0, S.zB)(c.config) : (0, S._Z)(c.config)), [c.config, d, u]),
        [R, E] = a.useState(o ? "success" : "loading"),
        [A, f] = a.useState(!1),
        b = a.useCallback(() => {
            f(!0);
        }, []);
    a.useEffect(() => {
        o ||
            "loading" !== R ||
            (0, p.Oq)(c.id, g.pY.CROSS_PLATFORM, i)
                .then(() => E("success"))
                .catch(() => E("error"));
    }, [c.id, o, R, i]);
    let N = !A || "loading" === R || (null == _ && null == h),
        U = "error" === R || null == C || (null == _ && null != h);
    return (0, r.jsx)(I.A, {
        onClose: n,
        transitionState: l,
        quest: c,
        sourceQuestContent: s,
        location: L.rE.ORBS_REWARD_MODAL,
        isRewardContentLoading: N,
        rewardContentHasError: U,
        rewardContent: U
            ? null
            : (0, r.jsx)(B.A, {
                  rewardName: T.intl.string(T.t.Lmysvd),
                  children: (0, r.jsx)(w, { orbsEarned: C, orbsBalance: _, isLoading: N, onVideoLoaded: b }),
              }),
    });
}
