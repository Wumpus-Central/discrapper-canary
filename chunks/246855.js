n.d(t, { default: () => k }), n(388685);
var a = n(54381),
    r = n(473749),
    i = n(120356),
    s = n.n(i),
    o = n(442837),
    l = n(481060),
    c = n(410030),
    d = n(607070),
    u = n(100527),
    b = n(335131),
    m = n(70097),
    p = n(507808),
    f = n(43747),
    x = n(960919),
    h = n(22095),
    C = n(49436),
    j = n(968843),
    g = n(115179),
    y = n(515108),
    v = n(291967),
    _ = n(324805),
    N = n(981631),
    O = n(215023),
    T = n(388032),
    P = n(10167),
    w = n(691091),
    L = n(347516),
    S = n(941714),
    A = n(466410),
    Z = n(97794);
function R(e) {
    let { onVideoLoaded: t } = e;
    return (0, a.jsx)(m.Z, {
        className: P.smallOrb,
        playsInline: !0,
        controls: !1,
        autoPlay: !0,
        loop: !0,
        onCanPlayThrough: t,
        children: (0, a.jsx)("source", {
            src: Z.Z,
            type: "video/webm",
        }),
    });
}
function E(e) {
    let { onVideoLoaded: t, isLoading: n } = e,
        i = (0, o.e7)([d.Z], () => d.Z.useReducedMotion),
        [u, b] = r.useState(!i),
        p = (0, c.ZP)(),
        f = (0, l.apv)(p),
        x = f ? L.Z : w.Z,
        h = f ? A.Z : S.Z,
        C = r.useRef(null),
        j = r.useRef(null),
        [g, y] = r.useState(!1),
        [v, _] = r.useState(!1),
        [N, O] = r.useState(!1);
    r.useEffect(() => {
        g && v && N && t();
    }, [g, v, N, t]),
        r.useEffect(() => {
            n ||
                i ||
                setTimeout(() => {
                    var e;
                    null == (e = C.current) || e.play();
                }, 200);
        }, [n, i]);
    let T = r.useCallback(() => {
        if (!i) {
            var e;
            b(!1), null == (e = j.current) || e.play();
        }
    }, [i]);
    return (0, a.jsxs)("div", {
        className: P.orbsContainer,
        children: [
            (0, a.jsx)(m.Z, {
                ref: j,
                autoPlay: !1,
                loop: !0,
                muted: !0,
                playsInline: !0,
                className: s()(P.centerOrb, P.idleOrb, { [P.hidden]: u }),
                controls: !1,
                onCanPlayThrough: r.useCallback(() => _(!0), []),
                children: (0, a.jsx)("source", {
                    src: h,
                    type: "video/webm",
                }),
            }),
            (0, a.jsx)(m.Z, {
                ref: C,
                autoPlay: !1,
                muted: !0,
                playsInline: !0,
                className: P.centerOrb,
                controls: !1,
                onCanPlayThrough: r.useCallback(() => y(!0), []),
                onEnded: T,
                children: (0, a.jsx)("source", {
                    src: x,
                    type: "video/webm",
                }),
            }),
            (0, a.jsxs)("div", {
                className: P.smallOrbContainer,
                children: [
                    (0, a.jsx)(R, { onVideoLoaded: r.useCallback(() => O(!0), []) }),
                    (0, a.jsx)(R, {}),
                    (0, a.jsx)(R, {}),
                    (0, a.jsx)(R, {}),
                ],
            }),
        ],
    });
}
function D(e) {
    let { isLoading: t, onClose: n, orbsEarned: r, orbsBalance: i, onVideoLoaded: s } = e,
        o = async () => {
            (0, p.Y)({
                pageType: N.ZY5.GLOBAL_DISCOVERY_QUESTS,
                sectionType: N.jXE.ORBS_REWARD_MODAL,
                ctaObject: N.qAy.CTA_TO_ORBS_SHOP,
            }),
                await n(),
                (0, b.mK)({
                    tab: O.AW.ORBS,
                    analyticsLocations: [],
                    analyticsSource: u.Z.QUEST_REWARD_MODAL,
                });
        };
    return (0, a.jsxs)("div", {
        className: P.contentContainer,
        children: [
            (0, a.jsx)(E, {
                isLoading: t,
                onVideoLoaded: s,
            }),
            (0, a.jsxs)("div", {
                className: P.copyContainer,
                children: [
                    (0, a.jsxs)("div", {
                        className: P.heading,
                        children: [
                            (0, a.jsx)(x.M, {
                                shouldUseThemeColor: !0,
                                className: P.orbsIcon,
                            }),
                            (0, a.jsx)(l.Heading, {
                                variant: "heading-xl/semibold",
                                color: "header-primary",
                                children: T.intl.formatToPlainString(T.t.YMor7k, { count: r }),
                            }),
                        ],
                    }),
                    null != i
                        ? (0, a.jsx)(l.Text, {
                              variant: "text-sm/medium",
                              color: "text-subtle",
                              children: T.intl.format(T.t.g4t9aw, {
                                  orbsBalance: i,
                                  orbsBalanceHook: (e, t) =>
                                      (0, a.jsx)(
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
            (0, a.jsx)(l.Button, {
                variant: "secondary",
                size: "sm",
                text: T.intl.string(T.t.WYchde),
                onClick: o,
                fullWidth: !0,
            }),
        ],
    });
}
function k(e) {
    var t, n;
    let { initialQuest: i, onClose: s, transitionState: o, sourceQuestContent: l, location: c } = e,
        d = null != (n = (0, j.B4)(i.id)) ? n : i,
        u = (null == (t = d.userStatus) ? void 0 : t.claimedAt) != null,
        { balance: b, error: m } = (0, f.A)(),
        p = (0, g.LM)(d.config),
        [x, N] = r.useState(u ? "success" : "loading"),
        [O, P] = r.useState(!1),
        w = r.useCallback(() => {
            P(!0);
        }, []);
    r.useEffect(() => {
        u ||
            "loading" !== x ||
            (0, h.QB)(d.id, C.y$.CROSS_PLATFORM, c)
                .then(() => N("success"))
                .catch(() => N("error"));
    }, [d.id, u, x, c]);
    let L = !O || "loading" === x || (null == b && null == m),
        S = "error" === x || null == p || (null == b && null != m);
    return (0, a.jsx)(y.Z, {
        onClose: s,
        transitionState: o,
        quest: d,
        sourceQuestContent: l,
        location: _.dr.ORBS_REWARD_MODAL,
        isRewardContentLoading: L,
        rewardContentHasError: S,
        rewardContent: S
            ? null
            : (0, a.jsx)(v.Z, {
                  rewardName: T.intl.string(T.t.Lmysvd),
                  children: (0, a.jsx)(D, {
                      onClose: s,
                      orbsEarned: p,
                      orbsBalance: b,
                      isLoading: L,
                      onVideoLoaded: w,
                  }),
              }),
    });
}
