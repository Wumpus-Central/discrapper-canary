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
    C = a(890687),
    A = a(92246),
    y = a(109174),
    g = a(524728),
    j = a(654487),
    S = a(652215),
    O = a(758836),
    R = a(985018),
    L = a(804860),
    w = a(627898),
    E = a(341744),
    T = a(484252),
    v = a(460290),
    B = a(181713);
function k(e) {
    let { onVideoLoaded: t } = e;
    return (0, n.jsx)(b.A, {
        className: L.d0,
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
        h = f ? E.A : w.A,
        m = f ? v.A : T.A,
        x = s.useRef(null),
        C = s.useRef(null),
        [A, y] = s.useState(!1),
        [g, j] = s.useState(!1),
        [S, O] = s.useState(!1);
    s.useEffect(() => {
        A && g && S && t();
    }, [A, g, S, t]),
        s.useEffect(() => {
            a ||
                o ||
                setTimeout(() => {
                    x.current?.play();
                }, 200);
        }, [a, o]);
    let R = s.useCallback(() => {
        o || (_(!1), C.current?.play());
    }, [o]);
    return (0, n.jsxs)("div", {
        className: L.GF,
        children: [
            (0, n.jsx)(b.A, {
                ref: C,
                autoPlay: !1,
                loop: !0,
                muted: !0,
                playsInline: !0,
                className: c()(L.nH, L.EZ, { [L.R]: u }),
                controls: !1,
                onCanPlayThrough: s.useCallback(() => j(!0), []),
                children: (0, n.jsx)("source", { src: m, type: "video/webm" }),
            }),
            (0, n.jsx)(b.A, {
                ref: x,
                autoPlay: !1,
                muted: !0,
                playsInline: !0,
                className: L.nH,
                controls: !1,
                onCanPlayThrough: s.useCallback(() => y(!0), []),
                onEnded: R,
                children: (0, n.jsx)("source", { src: h, type: "video/webm" }),
            }),
            (0, n.jsxs)("div", {
                className: L.Se,
                children: [
                    (0, n.jsx)(k, { onVideoLoaded: s.useCallback(() => O(!0), []) }),
                    (0, n.jsx)(k, {}),
                    (0, n.jsx)(k, {}),
                    (0, n.jsx)(k, {}),
                ],
            }),
        ],
    });
}
function P(e) {
    let { isLoading: t, onClose: a, orbsEarned: s, orbsBalance: o, onVideoLoaded: c } = e,
        r = async () => {
            (0, p.Y)({
                pageType: S.liQ.GLOBAL_DISCOVERY_QUESTS,
                sectionType: S.JJy.ORBS_REWARD_MODAL,
                ctaObject: S.ZSU.CTA_TO_ORBS_SHOP,
            }),
                await a(),
                (0, _.Cz)({ tab: O.G2.ORBS, analyticsLocations: [], analyticsSource: u.A.QUEST_REWARD_MODAL });
        };
    return (0, n.jsxs)("div", {
        className: L.hQ,
        children: [
            (0, n.jsx)(N, { isLoading: t, onVideoLoaded: c }),
            (0, n.jsxs)("div", {
                className: L.dD,
                children: [
                    (0, n.jsxs)("div", {
                        className: L.R_,
                        children: [
                            (0, n.jsx)(h.B, { shouldUseThemeColor: !0, className: L.Uu }),
                            (0, n.jsx)(l.Heading, {
                                variant: "heading-xl/semibold",
                                color: "text-strong",
                                children: R.intl.formatToPlainString(R.t.YMor7k, { count: s }),
                            }),
                        ],
                    }),
                    null != o
                        ? (0, n.jsx)(l.Text, {
                              variant: "text-sm/medium",
                              color: "text-subtle",
                              children: R.intl.format(R.t.g4t9aw, {
                                  orbsBalance: o,
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
                text: R.intl.string(R.t.WYchde),
                onClick: r,
                fullWidth: !0,
            }),
        ],
    });
}
function D(e) {
    let { initialQuest: t, onClose: a, transitionState: o, sourceQuestContent: c, location: r } = e,
        l = (0, C.C5)(t.id) ?? t,
        d = l.userStatus?.claimedAt != null,
        i = (0, C.SD)(l),
        u = (0, C.Oq)(),
        { balance: _, error: b } = (0, f.W)(),
        p = s.useMemo(() => (i && u ? (0, A.zB)(l.config) : (0, A._Z)(l.config)), [l.config, i, u]),
        [h, S] = s.useState(d ? "success" : "loading"),
        [O, L] = s.useState(!1),
        w = s.useCallback(() => {
            L(!0);
        }, []);
    s.useEffect(() => {
        d ||
            "loading" !== h ||
            (0, m.Oq)(l.id, x.pY.CROSS_PLATFORM, r)
                .then(() => S("success"))
                .catch(() => S("error"));
    }, [l.id, d, h, r]);
    let E = !O || "loading" === h || (null == _ && null == b),
        T = "error" === h || null == p || (null == _ && null != b);
    return (0, n.jsx)(g.A, {
        onClose: a,
        transitionState: o,
        quest: l,
        sourceQuestContent: c,
        location: j.rE.ORBS_REWARD_MODAL,
        isRewardContentLoading: E,
        rewardContentHasError: T,
        rewardContent: T
            ? null
            : (0, n.jsx)(y.A, {
                  rewardName: R.intl.string(R.t.Lmysvd),
                  children: (0, n.jsx)(P, {
                      onClose: a,
                      orbsEarned: p,
                      orbsBalance: _,
                      isLoading: E,
                      onVideoLoaded: w,
                  }),
              }),
    });
}
