a.d(t, { default: () => W }), a(896048);
var s = a(627968),
    n = a(64700),
    i = a(503698),
    c = a.n(i),
    r = a(311907),
    l = a(397927),
    d = a(736653),
    o = a(775602),
    u = a(793574),
    m = a(979286),
    f = a(607470),
    x = a(318346),
    b = a(761705),
    h = a(106799),
    j = a(829219),
    p = a(341915),
    g = a(890687),
    v = a(92246),
    y = a(109174),
    A = a(524728),
    _ = a(654487),
    C = a(652215),
    N = a(758836),
    S = a(985018),
    E = a(176741),
    L = a(627898),
    O = a(341744),
    R = a(484252),
    w = a(460290),
    T = a(181713);
function k(e) {
    let { onVideoLoaded: t } = e;
    return (0, s.jsx)(f.A, {
        className: E.d0,
        playsInline: !0,
        controls: !1,
        autoPlay: !0,
        loop: !0,
        onCanPlayThrough: t,
        children: (0, s.jsx)("source", {
            src: T.A,
            type: "video/webm",
        }),
    });
}
function D(e) {
    let { onVideoLoaded: t, isLoading: a } = e,
        i = (0, r.bG)([o.A], () => o.A.useReducedMotion),
        [u, m] = n.useState(!i),
        x = (0, d.Ay)(),
        b = (0, l.qB1)(x),
        h = b ? O.A : L.A,
        j = b ? w.A : R.A,
        p = n.useRef(null),
        g = n.useRef(null),
        [v, y] = n.useState(!1),
        [A, _] = n.useState(!1),
        [C, N] = n.useState(!1);
    n.useEffect(() => {
        v && A && C && t();
    }, [v, A, C, t]),
        n.useEffect(() => {
            a ||
                i ||
                setTimeout(() => {
                    var e;
                    null == (e = p.current) || e.play();
                }, 200);
        }, [a, i]);
    let S = n.useCallback(() => {
        if (!i) {
            var e;
            m(!1), null == (e = g.current) || e.play();
        }
    }, [i]);
    return (0, s.jsxs)("div", {
        className: E.GF,
        children: [
            (0, s.jsx)(f.A, {
                ref: g,
                autoPlay: !1,
                loop: !0,
                muted: !0,
                playsInline: !0,
                className: c()(E.nH, E.EZ, { [E.R]: u }),
                controls: !1,
                onCanPlayThrough: n.useCallback(() => _(!0), []),
                children: (0, s.jsx)("source", {
                    src: j,
                    type: "video/webm",
                }),
            }),
            (0, s.jsx)(f.A, {
                ref: p,
                autoPlay: !1,
                muted: !0,
                playsInline: !0,
                className: E.nH,
                controls: !1,
                onCanPlayThrough: n.useCallback(() => y(!0), []),
                onEnded: S,
                children: (0, s.jsx)("source", {
                    src: h,
                    type: "video/webm",
                }),
            }),
            (0, s.jsxs)("div", {
                className: E.Se,
                children: [
                    (0, s.jsx)(k, { onVideoLoaded: n.useCallback(() => N(!0), []) }),
                    (0, s.jsx)(k, {}),
                    (0, s.jsx)(k, {}),
                    (0, s.jsx)(k, {}),
                ],
            }),
        ],
    });
}
function P(e) {
    let { isLoading: t, onClose: a, orbsEarned: n, orbsBalance: i, onVideoLoaded: c } = e,
        r = async () => {
            (0, x.Y)({
                pageType: C.liQ.GLOBAL_DISCOVERY_QUESTS,
                sectionType: C.JJy.ORBS_REWARD_MODAL,
                ctaObject: C.ZSU.CTA_TO_ORBS_SHOP,
            }),
                await a(),
                (0, m.Cz)({
                    tab: N.G2.ORBS,
                    analyticsLocations: [],
                    analyticsSource: u.A.QUEST_REWARD_MODAL,
                });
        };
    return (0, s.jsxs)("div", {
        className: E.hQ,
        children: [
            (0, s.jsx)(D, {
                isLoading: t,
                onVideoLoaded: c,
            }),
            (0, s.jsxs)("div", {
                className: E.dD,
                children: [
                    (0, s.jsxs)("div", {
                        className: E.R_,
                        children: [
                            (0, s.jsx)(h.B, {
                                shouldUseThemeColor: !0,
                                className: E.Uu,
                            }),
                            (0, s.jsx)(l.Heading, {
                                variant: "heading-xl/semibold",
                                color: "text-strong",
                                children: S.intl.formatToPlainString(S.t.YMor7k, { count: n }),
                            }),
                        ],
                    }),
                    null != i
                        ? (0, s.jsx)(l.Text, {
                              variant: "text-sm/medium",
                              color: "text-subtle",
                              children: S.intl.format(S.t.g4t9aw, {
                                  orbsBalance: i,
                                  orbsBalanceHook: (e, t) =>
                                      (0, s.jsx)(
                                          l.Text,
                                          {
                                              variant: "text-sm/medium",
                                              color: "text-strong",
                                              tag: "span",
                                              children: e,
                                          },
                                          t,
                                      ),
                              }),
                          })
                        : null,
                ],
            }),
            (0, s.jsx)(l.Button, {
                variant: "secondary",
                size: "sm",
                text: S.intl.string(S.t.WYchde),
                onClick: r,
                fullWidth: !0,
            }),
        ],
    });
}
function W(e) {
    var t, a;
    let { initialQuest: i, onClose: c, transitionState: r, sourceQuestContent: l, location: d } = e,
        o = null != (t = (0, g.C5)(i.id)) ? t : i,
        u = (null == (a = o.userStatus) ? void 0 : a.claimedAt) != null,
        { balance: m, error: f } = (0, b.W)(),
        x = (0, v._Z)(o.config),
        [h, C] = n.useState(u ? "success" : "loading"),
        [N, E] = n.useState(!1),
        L = n.useCallback(() => {
            E(!0);
        }, []);
    n.useEffect(() => {
        u ||
            "loading" !== h ||
            (0, j.Oq)(o.id, p.pY.CROSS_PLATFORM, d)
                .then(() => C("success"))
                .catch(() => C("error"));
    }, [o.id, u, h, d]);
    let O = !N || "loading" === h || (null == m && null == f),
        R = "error" === h || null == x || (null == m && null != f);
    return (0, s.jsx)(A.A, {
        onClose: c,
        transitionState: r,
        quest: o,
        sourceQuestContent: l,
        location: _.rE.ORBS_REWARD_MODAL,
        isRewardContentLoading: O,
        rewardContentHasError: R,
        rewardContent: R
            ? null
            : (0, s.jsx)(y.A, {
                  rewardName: S.intl.string(S.t.Lmysvd),
                  children: (0, s.jsx)(P, {
                      onClose: c,
                      orbsEarned: x,
                      orbsBalance: m,
                      isLoading: O,
                      onVideoLoaded: L,
                  }),
              }),
    });
}
