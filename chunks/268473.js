a.d(t, { default: () => I });
var n = a(627968),
    s = a(64700),
    o = a(503698),
    c = a.n(o),
    r = a(311907),
    l = a(366010),
    d = a(192308),
    i = a(534514),
    u = a(834730),
    _ = a(821609),
    b = a(736653),
    p = a(775602),
    f = a(793574),
    h = a(979286),
    m = a(607470),
    x = a(318346),
    A = a(761705),
    C = a(106799),
    g = a(829219),
    y = a(341915),
    j = a(890687),
    S = a(92246),
    v = a(109174),
    L = a(524728),
    O = a(654487),
    R = a(652215),
    E = a(758836),
    w = a(985018),
    T = a(823628),
    B = a(627898),
    k = a(341744),
    N = a(484252),
    D = a(460290),
    P = a(181713);
function H(e) {
    let { onVideoLoaded: t } = e;
    return (0, n.jsx)(m.A, {
        className: T.d0,
        playsInline: !0,
        controls: !1,
        autoPlay: !0,
        loop: !0,
        onCanPlayThrough: t,
        children: (0, n.jsx)("source", { src: P.A, type: "video/webm" }),
    });
}
function W(e) {
    let { onVideoLoaded: t, isLoading: a } = e,
        o = (0, r.bG)([p.A], () => p.A.useReducedMotion),
        [d, i] = s.useState(!o),
        u = (0, b.Ay)(),
        _ = (0, l.q)(u),
        f = _ ? k.A : B.A,
        h = _ ? D.A : N.A,
        x = s.useRef(null),
        A = s.useRef(null),
        [C, g] = s.useState(!1),
        [y, j] = s.useState(!1),
        [S, v] = s.useState(!1);
    s.useEffect(() => {
        C && y && S && t();
    }, [C, y, S, t]),
        s.useEffect(() => {
            a ||
                o ||
                setTimeout(() => {
                    x.current?.play();
                }, 200);
        }, [a, o]);
    let L = s.useCallback(() => {
        o || (i(!1), A.current?.play());
    }, [o]);
    return (0, n.jsxs)("div", {
        className: T.GF,
        children: [
            (0, n.jsx)(m.A, {
                ref: A,
                autoPlay: !1,
                loop: !0,
                muted: !0,
                playsInline: !0,
                className: c()(T.nH, T.EZ, { [T.R]: d }),
                controls: !1,
                onCanPlayThrough: s.useCallback(() => j(!0), []),
                children: (0, n.jsx)("source", { src: h, type: "video/webm" }),
            }),
            (0, n.jsx)(m.A, {
                ref: x,
                autoPlay: !1,
                muted: !0,
                playsInline: !0,
                className: T.nH,
                controls: !1,
                onCanPlayThrough: s.useCallback(() => g(!0), []),
                onEnded: L,
                children: (0, n.jsx)("source", { src: f, type: "video/webm" }),
            }),
            (0, n.jsxs)("div", {
                className: T.Se,
                children: [
                    (0, n.jsx)(H, { onVideoLoaded: s.useCallback(() => v(!0), []) }),
                    (0, n.jsx)(H, {}),
                    (0, n.jsx)(H, {}),
                    (0, n.jsx)(H, {}),
                ],
            }),
        ],
    });
}
function F(e) {
    let { isLoading: t, orbsEarned: a, orbsBalance: s, onVideoLoaded: o } = e;
    return (0, n.jsxs)("div", {
        className: T.hQ,
        children: [
            (0, n.jsx)(W, { isLoading: t, onVideoLoaded: o }),
            (0, n.jsxs)("div", {
                className: T.dD,
                children: [
                    (0, n.jsxs)("div", {
                        className: T.R_,
                        children: [
                            (0, n.jsx)(C.B, { shouldUseThemeColor: !0, className: T.Uu }),
                            (0, n.jsx)(i.D, {
                                variant: "heading-xl/semibold",
                                color: "text-strong",
                                children: w.intl.formatToPlainString(w.t.YMor7k, { count: a }),
                            }),
                        ],
                    }),
                    null != s
                        ? (0, n.jsx)(u.E, {
                              variant: "text-sm/medium",
                              color: "text-subtle",
                              children: w.intl.format(w.t.g4t9aw, {
                                  orbsBalance: s,
                                  orbsBalanceHook: (e, t) =>
                                      (0, n.jsx)(
                                          u.E,
                                          { variant: "text-sm/medium", color: "text-strong", tag: "span", children: e },
                                          t,
                                      ),
                              }),
                          })
                        : null,
                ],
            }),
            (0, n.jsx)(_.$, {
                variant: "secondary",
                size: "sm",
                text: w.intl.string(w.t.WYchde),
                onClick: () => {
                    (0, x.Y)({
                        pageType: R.liQ.GLOBAL_DISCOVERY_QUESTS,
                        sectionType: R.JJy.ORBS_REWARD_MODAL,
                        ctaObject: R.ZSU.CTA_TO_ORBS_SHOP,
                    }),
                        (0, d.closeAllModals)(),
                        (0, h.Cz)({ tab: E.G2.ORBS, analyticsLocations: [], analyticsSource: f.A.QUEST_REWARD_MODAL });
                },
                fullWidth: !0,
            }),
        ],
    });
}
function I(e) {
    let { initialQuest: t, onClose: a, transitionState: o, sourceQuestContent: c, location: r } = e,
        l = (0, j.C5)(t.id) ?? t,
        d = l.userStatus?.claimedAt != null,
        i = (0, j.SD)(l),
        u = (0, j.Oq)(),
        { balance: _, error: b } = (0, A.W)(),
        p = s.useMemo(() => (i && u ? (0, S.zB)(l.config) : (0, S._Z)(l.config)), [l.config, i, u]),
        [f, h] = s.useState(d ? "success" : "loading"),
        [m, x] = s.useState(!1),
        C = s.useCallback(() => {
            x(!0);
        }, []);
    s.useEffect(() => {
        d ||
            "loading" !== f ||
            (0, g.Oq)(l.id, y.pY.CROSS_PLATFORM, r)
                .then(() => h("success"))
                .catch(() => h("error"));
    }, [l.id, d, f, r]);
    let R = !m || "loading" === f || (null == _ && null == b),
        E = "error" === f || null == p || (null == _ && null != b);
    return (0, n.jsx)(L.A, {
        onClose: a,
        transitionState: o,
        quest: l,
        sourceQuestContent: c,
        location: O.rE.ORBS_REWARD_MODAL,
        isRewardContentLoading: R,
        rewardContentHasError: E,
        rewardContent: E
            ? null
            : (0, n.jsx)(v.A, {
                  rewardName: w.intl.string(w.t.Lmysvd),
                  children: (0, n.jsx)(F, { orbsEarned: p, orbsBalance: _, isLoading: R, onVideoLoaded: C }),
              }),
    });
}
