s.d(t, { default: () => W });
var n = s(627968),
    a = s(64700),
    i = s(503698),
    r = s.n(i),
    l = s(311907),
    o = s(397927),
    c = s(736653),
    d = s(775602),
    u = s(793574),
    m = s(979286),
    x = s(607470),
    h = s(318346),
    _ = s(761705),
    f = s(106799),
    p = s(829219),
    j = s(341915),
    g = s(890687),
    C = s(92246),
    b = s(109174),
    A = s(524728),
    v = s(654487),
    y = s(652215),
    N = s(758836),
    E = s(985018),
    L = s(176741),
    S = s(627898),
    R = s(341744),
    T = s(484252),
    O = s(460290),
    w = s(181713);
function D(e) {
    let { onVideoLoaded: t } = e;
    return (0, n.jsx)(x.A, {
        className: L.d0,
        playsInline: !0,
        controls: !1,
        autoPlay: !0,
        loop: !0,
        onCanPlayThrough: t,
        children: (0, n.jsx)("source", { src: w.A, type: "video/webm" }),
    });
}
function k(e) {
    let { onVideoLoaded: t, isLoading: s } = e,
        i = (0, l.bG)([d.A], () => d.A.useReducedMotion),
        [u, m] = a.useState(!i),
        h = (0, c.Ay)(),
        _ = (0, o.qB1)(h),
        f = _ ? R.A : S.A,
        p = _ ? O.A : T.A,
        j = a.useRef(null),
        g = a.useRef(null),
        [C, b] = a.useState(!1),
        [A, v] = a.useState(!1),
        [y, N] = a.useState(!1);
    a.useEffect(() => {
        C && A && y && t();
    }, [C, A, y, t]),
        a.useEffect(() => {
            s ||
                i ||
                setTimeout(() => {
                    j.current?.play();
                }, 200);
        }, [s, i]);
    let E = a.useCallback(() => {
        i || (m(!1), g.current?.play());
    }, [i]);
    return (0, n.jsxs)("div", {
        className: L.GF,
        children: [
            (0, n.jsx)(x.A, {
                ref: g,
                autoPlay: !1,
                loop: !0,
                muted: !0,
                playsInline: !0,
                className: r()(L.nH, L.EZ, { [L.R]: u }),
                controls: !1,
                onCanPlayThrough: a.useCallback(() => v(!0), []),
                children: (0, n.jsx)("source", { src: p, type: "video/webm" }),
            }),
            (0, n.jsx)(x.A, {
                ref: j,
                autoPlay: !1,
                muted: !0,
                playsInline: !0,
                className: L.nH,
                controls: !1,
                onCanPlayThrough: a.useCallback(() => b(!0), []),
                onEnded: E,
                children: (0, n.jsx)("source", { src: f, type: "video/webm" }),
            }),
            (0, n.jsxs)("div", {
                className: L.Se,
                children: [
                    (0, n.jsx)(D, { onVideoLoaded: a.useCallback(() => N(!0), []) }),
                    (0, n.jsx)(D, {}),
                    (0, n.jsx)(D, {}),
                    (0, n.jsx)(D, {}),
                ],
            }),
        ],
    });
}
function M(e) {
    let { isLoading: t, onClose: s, orbsEarned: a, orbsBalance: i, onVideoLoaded: r } = e,
        l = async () => {
            (0, h.Y)({
                pageType: y.liQ.GLOBAL_DISCOVERY_QUESTS,
                sectionType: y.JJy.ORBS_REWARD_MODAL,
                ctaObject: y.ZSU.CTA_TO_ORBS_SHOP,
            }),
                await s(),
                (0, m.Cz)({ tab: N.G2.ORBS, analyticsLocations: [], analyticsSource: u.A.QUEST_REWARD_MODAL });
        };
    return (0, n.jsxs)("div", {
        className: L.hQ,
        children: [
            (0, n.jsx)(k, { isLoading: t, onVideoLoaded: r }),
            (0, n.jsxs)("div", {
                className: L.dD,
                children: [
                    (0, n.jsxs)("div", {
                        className: L.R_,
                        children: [
                            (0, n.jsx)(f.B, { shouldUseThemeColor: !0, className: L.Uu }),
                            (0, n.jsx)(o.Heading, {
                                variant: "heading-xl/semibold",
                                color: "text-strong",
                                children: E.intl.formatToPlainString(E.t.YMor7k, { count: a }),
                            }),
                        ],
                    }),
                    null != i
                        ? (0, n.jsx)(o.Text, {
                              variant: "text-sm/medium",
                              color: "text-subtle",
                              children: E.intl.format(E.t.g4t9aw, {
                                  orbsBalance: i,
                                  orbsBalanceHook: (e, t) =>
                                      (0, n.jsx)(
                                          o.Text,
                                          { variant: "text-sm/medium", color: "text-strong", tag: "span", children: e },
                                          t,
                                      ),
                              }),
                          })
                        : null,
                ],
            }),
            (0, n.jsx)(o.Button, {
                variant: "secondary",
                size: "sm",
                text: E.intl.string(E.t.WYchde),
                onClick: l,
                fullWidth: !0,
            }),
        ],
    });
}
function W(e) {
    let { initialQuest: t, onClose: s, transitionState: i, sourceQuestContent: r, location: l } = e,
        o = (0, g.C5)(t.id) ?? t,
        c = o.userStatus?.claimedAt != null,
        { balance: d, error: u } = (0, _.W)(),
        m = (0, C._Z)(o.config),
        [x, h] = a.useState(c ? "success" : "loading"),
        [f, y] = a.useState(!1),
        N = a.useCallback(() => {
            y(!0);
        }, []);
    a.useEffect(() => {
        c ||
            "loading" !== x ||
            (0, p.Oq)(o.id, j.pY.CROSS_PLATFORM, l)
                .then(() => h("success"))
                .catch(() => h("error"));
    }, [o.id, c, x, l]);
    let L = !f || "loading" === x || (null == d && null == u),
        S = "error" === x || null == m || (null == d && null != u);
    return (0, n.jsx)(A.A, {
        onClose: s,
        transitionState: i,
        quest: o,
        sourceQuestContent: r,
        location: v.rE.ORBS_REWARD_MODAL,
        isRewardContentLoading: L,
        rewardContentHasError: S,
        rewardContent: S
            ? null
            : (0, n.jsx)(b.A, {
                  rewardName: E.intl.string(E.t.Lmysvd),
                  children: (0, n.jsx)(M, {
                      onClose: s,
                      orbsEarned: m,
                      orbsBalance: d,
                      isLoading: L,
                      onVideoLoaded: N,
                  }),
              }),
    });
}
