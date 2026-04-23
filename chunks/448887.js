a.d(t, { default: () => P });
var n = a(627968),
    s = a(64700),
    o = a(503698),
    c = a.n(o),
    r = a(17928),
    l = a(366010),
    d = a(192308),
    i = a(534514),
    u = a(834730),
    _ = a(821609),
    b = a(736653),
    p = a(775602),
    f = a(793574),
    h = a(803375),
    m = a(607470),
    x = a(318346),
    C = a(761705),
    g = a(106799),
    A = a(829219),
    y = a(507107),
    j = a(890687),
    S = a(801365),
    v = a(801870),
    L = a(448109),
    O = a(654487),
    R = a(652215),
    E = a(758836),
    w = a(985018),
    T = a(823628),
    B = a(181713);
function k(e) {
    let { onVideoLoaded: t } = e;
    return (0, n.jsx)(m.A, {
        className: T.d0,
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
        o = (0, r.bG)([p.A], () => p.A.useReducedMotion),
        [d, i] = s.useState(!o),
        u = (0, b.Ay)(),
        _ = (0, l.q)(u),
        f = s.useRef(null),
        h = s.useRef(null),
        [x, C] = s.useState(!1),
        [g, A] = s.useState(!1),
        [y, j] = s.useState(!1);
    s.useEffect(() => {
        x && g && y && t();
    }, [x, g, y, t]),
        s.useEffect(() => {
            a ||
                o ||
                setTimeout(() => {
                    f.current?.play();
                }, 200);
        }, [a, o]);
    let S = s.useCallback(() => {
        o || (i(!1), h.current?.play());
    }, [o]);
    return (0, n.jsxs)("div", {
        className: T.GF,
        children: [
            (0, n.jsx)(m.A, {
                ref: h,
                autoPlay: !1,
                loop: !0,
                muted: !0,
                playsInline: !0,
                className: c()(T.nH, T.EZ, { [T.R]: d }),
                controls: !1,
                onCanPlayThrough: s.useCallback(() => A(!0), []),
                children: (0, n.jsx)("source", {
                    src: _
                        ? "https://cdn.discordapp.com/assets/content/4c65c8edcb240ab88372cd7e405619919a35d2d6e2255bb24d335e1829ce4089.webm"
                        : "https://cdn.discordapp.com/assets/content/759ca0dd0fedd8b1c983f6b2f457fc85cf6656be30a8538e7eab546704f43a47.webm",
                    type: "video/webm",
                }),
            }),
            (0, n.jsx)(m.A, {
                ref: f,
                autoPlay: !1,
                muted: !0,
                playsInline: !0,
                className: T.nH,
                controls: !1,
                onCanPlayThrough: s.useCallback(() => C(!0), []),
                onEnded: S,
                children: (0, n.jsx)("source", {
                    src: _
                        ? "https://cdn.discordapp.com/assets/content/e6b9db9480bfd82c547ee83086a8efc485af6ee22bcc4b418e0ee366785d5b91.webm"
                        : "https://cdn.discordapp.com/assets/content/88a67852778d47306c14ce2403d7b072aba847a61640b029915adc6448d386ba.webm",
                    type: "video/webm",
                }),
            }),
            (0, n.jsxs)("div", {
                className: T.Se,
                children: [
                    (0, n.jsx)(k, { onVideoLoaded: s.useCallback(() => j(!0), []) }),
                    (0, n.jsx)(k, {}),
                    (0, n.jsx)(k, {}),
                    (0, n.jsx)(k, {}),
                ],
            }),
        ],
    });
}
function D(e) {
    let { isLoading: t, orbsEarned: a, orbsBalance: s, onVideoLoaded: o } = e;
    return (0, n.jsxs)("div", {
        className: T.hQ,
        children: [
            (0, n.jsx)(N, { isLoading: t, onVideoLoaded: o }),
            (0, n.jsxs)("div", {
                className: T.dD,
                children: [
                    (0, n.jsxs)("div", {
                        className: T.R_,
                        children: [
                            (0, n.jsx)(g.B, { shouldUseThemeColor: !0, className: T.Uu }),
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
function P(e) {
    let { initialQuest: t, onClose: a, transitionState: o, sourceQuestContent: c, location: r } = e,
        l = (0, j.C5)(t.id) ?? t,
        d = l.userStatus?.claimedAt != null,
        i = (0, j.SD)(l),
        u = (0, j.Oq)(),
        { balance: _, error: b } = (0, C.W)(),
        p = s.useMemo(() => (i && u ? (0, S.zB)(l.config) : (0, S._Z)(l.config)), [l.config, i, u]),
        [f, h] = s.useState(d ? "success" : "loading"),
        [m, x] = s.useState(!1),
        g = s.useCallback(() => {
            x(!0);
        }, []);
    s.useEffect(() => {
        d ||
            "loading" !== f ||
            (0, A.Oq)(l.id, y.pY.CROSS_PLATFORM, r)
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
                  children: (0, n.jsx)(D, { orbsEarned: p, orbsBalance: _, isLoading: R, onVideoLoaded: g }),
              }),
    });
}
