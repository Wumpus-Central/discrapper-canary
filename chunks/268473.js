a.d(t, { default: () => D });
var n = a(627968),
    s = a(64700),
    o = a(503698),
    c = a.n(o),
    r = a(311907),
    l = a(397927),
    d = a(736653),
    i = a(775602),
    u = a(793574),
    _ = a(979286),
    b = a(607470),
    p = a(318346),
    f = a(761705),
    h = a(106799),
    m = a(829219),
    x = a(341915),
    A = a(890687),
    C = a(92246),
    g = a(109174),
    y = a(524728),
    j = a(654487),
    S = a(652215),
    v = a(758836),
    L = a(985018),
    O = a(804860),
    R = a(627898),
    E = a(341744),
    T = a(484252),
    w = a(460290),
    B = a(181713);
function k(e) {
    let { onVideoLoaded: t } = e;
    return (0, n.jsx)(b.A, {
        className: O.d0,
        playsInline: !0,
        controls: !1,
        autoPlay: !0,
        loop: !0,
        onCanPlayThrough: t,
        children: (0, n.jsx)("source", { src: B.A, type: "video/webm" }),
    });
}
function N(e) {
    let { onVideoLoaded: t, isLoading: a } = e,
        o = (0, r.bG)([i.A], () => i.A.useReducedMotion),
        [u, _] = s.useState(!o),
        p = (0, d.Ay)(),
        f = (0, l.qB1)(p),
        h = f ? E.A : R.A,
        m = f ? w.A : T.A,
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
        o || (_(!1), A.current?.play());
    }, [o]);
    return (0, n.jsxs)("div", {
        className: O.GF,
        children: [
            (0, n.jsx)(b.A, {
                ref: A,
                autoPlay: !1,
                loop: !0,
                muted: !0,
                playsInline: !0,
                className: c()(O.nH, O.EZ, { [O.R]: u }),
                controls: !1,
                onCanPlayThrough: s.useCallback(() => j(!0), []),
                children: (0, n.jsx)("source", { src: m, type: "video/webm" }),
            }),
            (0, n.jsx)(b.A, {
                ref: x,
                autoPlay: !1,
                muted: !0,
                playsInline: !0,
                className: O.nH,
                controls: !1,
                onCanPlayThrough: s.useCallback(() => g(!0), []),
                onEnded: L,
                children: (0, n.jsx)("source", { src: h, type: "video/webm" }),
            }),
            (0, n.jsxs)("div", {
                className: O.Se,
                children: [
                    (0, n.jsx)(k, { onVideoLoaded: s.useCallback(() => v(!0), []) }),
                    (0, n.jsx)(k, {}),
                    (0, n.jsx)(k, {}),
                    (0, n.jsx)(k, {}),
                ],
            }),
        ],
    });
}
function P(e) {
    let { isLoading: t, orbsEarned: a, orbsBalance: s, onVideoLoaded: o } = e;
    return (0, n.jsxs)("div", {
        className: O.hQ,
        children: [
            (0, n.jsx)(N, { isLoading: t, onVideoLoaded: o }),
            (0, n.jsxs)("div", {
                className: O.dD,
                children: [
                    (0, n.jsxs)("div", {
                        className: O.R_,
                        children: [
                            (0, n.jsx)(h.B, { shouldUseThemeColor: !0, className: O.Uu }),
                            (0, n.jsx)(l.Heading, {
                                variant: "heading-xl/semibold",
                                color: "text-strong",
                                children: L.intl.formatToPlainString(L.t.YMor7k, { count: a }),
                            }),
                        ],
                    }),
                    null != s
                        ? (0, n.jsx)(l.Text, {
                              variant: "text-sm/medium",
                              color: "text-subtle",
                              children: L.intl.format(L.t.g4t9aw, {
                                  orbsBalance: s,
                                  orbsBalanceHook: (e, t) =>
                                      (0, n.jsx)(
                                          l.Text,
                                          { variant: "text-sm/medium", color: "text-strong", tag: "span", children: e },
                                          t,
                                      ),
                              }),
                          })
                        : null,
                ],
            }),
            (0, n.jsx)(l.Button, {
                variant: "secondary",
                size: "sm",
                text: L.intl.string(L.t.WYchde),
                onClick: () => {
                    (0, p.Y)({
                        pageType: S.liQ.GLOBAL_DISCOVERY_QUESTS,
                        sectionType: S.JJy.ORBS_REWARD_MODAL,
                        ctaObject: S.ZSU.CTA_TO_ORBS_SHOP,
                    }),
                        (0, l.s7G)(),
                        (0, _.Cz)({ tab: v.G2.ORBS, analyticsLocations: [], analyticsSource: u.A.QUEST_REWARD_MODAL });
                },
                fullWidth: !0,
            }),
        ],
    });
}
function D(e) {
    let { initialQuest: t, onClose: a, transitionState: o, sourceQuestContent: c, location: r } = e,
        l = (0, A.C5)(t.id) ?? t,
        d = l.userStatus?.claimedAt != null,
        i = (0, A.SD)(l),
        u = (0, A.Oq)(),
        { balance: _, error: b } = (0, f.W)(),
        p = s.useMemo(() => (i && u ? (0, C.zB)(l.config) : (0, C._Z)(l.config)), [l.config, i, u]),
        [h, S] = s.useState(d ? "success" : "loading"),
        [v, O] = s.useState(!1),
        R = s.useCallback(() => {
            O(!0);
        }, []);
    s.useEffect(() => {
        d ||
            "loading" !== h ||
            (0, m.Oq)(l.id, x.pY.CROSS_PLATFORM, r)
                .then(() => S("success"))
                .catch(() => S("error"));
    }, [l.id, d, h, r]);
    let E = !v || "loading" === h || (null == _ && null == b),
        T = "error" === h || null == p || (null == _ && null != b);
    return (0, n.jsx)(y.A, {
        onClose: a,
        transitionState: o,
        quest: l,
        sourceQuestContent: c,
        location: j.rE.ORBS_REWARD_MODAL,
        isRewardContentLoading: E,
        rewardContentHasError: T,
        rewardContent: T
            ? null
            : (0, n.jsx)(g.A, {
                  rewardName: L.intl.string(L.t.Lmysvd),
                  children: (0, n.jsx)(P, { orbsEarned: p, orbsBalance: _, isLoading: E, onVideoLoaded: R }),
              }),
    });
}
