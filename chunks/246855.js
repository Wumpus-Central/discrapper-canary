n.d(t, { default: () => P }), n(388685);
var a = n(951288),
    r = n(647438),
    i = n(120356),
    s = n.n(i),
    o = n(442837),
    l = n(481060),
    c = n(410030),
    d = n(607070),
    u = n(100527),
    m = n(335131),
    p = n(70097),
    f = n(507808),
    _ = n(43747),
    C = n(960919),
    b = n(509212),
    h = n(272008),
    x = n(497505),
    y = n(515108),
    g = n(291967),
    j = n(46140),
    v = n(981631),
    E = n(215023),
    R = n(388032),
    N = n(561549),
    A = n(582425),
    S = n(345554),
    T = n(88490),
    L = n(466674),
    O = n(201284);
function Z(e) {
    let { onVideoLoaded: t } = e;
    return (0, a.jsx)(p.Z, {
        className: N.smallOrb,
        playsInline: !0,
        controls: !1,
        autoPlay: !0,
        loop: !0,
        onCanPlayThrough: t,
        children: (0, a.jsx)("source", {
            src: O.Z,
            type: "video/webm",
        }),
    });
}
function w(e) {
    let { onVideoLoaded: t, isLoading: n } = e,
        i = (0, o.e7)([d.Z], () => d.Z.useReducedMotion),
        [u, m] = r.useState(!i),
        f = (0, c.ZP)(),
        _ = (0, l.apv)(f),
        C = _ ? S.Z : A.Z,
        b = _ ? L.Z : T.Z,
        h = r.useRef(null),
        x = r.useRef(null),
        [y, g] = r.useState(!1),
        [j, v] = r.useState(!1),
        [E, R] = r.useState(!1);
    r.useEffect(() => {
        y && j && E && t();
    }, [y, j, E, t]),
        r.useEffect(() => {
            n ||
                i ||
                setTimeout(() => {
                    var e;
                    null == (e = h.current) || e.play();
                }, 200);
        }, [n, i]);
    let O = r.useCallback(() => {
        if (!i) {
            var e;
            m(!1), null == (e = x.current) || e.play();
        }
    }, [i]);
    return (0, a.jsxs)("div", {
        className: N.orbsContainer,
        children: [
            (0, a.jsx)(p.Z, {
                ref: x,
                autoPlay: !1,
                loop: !0,
                muted: !0,
                playsInline: !0,
                className: s()(N.centerOrb, N.idleOrb, { [N.hidden]: u }),
                controls: !1,
                onCanPlayThrough: r.useCallback(() => v(!0), []),
                children: (0, a.jsx)("source", {
                    src: b,
                    type: "video/webm",
                }),
            }),
            (0, a.jsx)(p.Z, {
                ref: h,
                autoPlay: !1,
                muted: !0,
                playsInline: !0,
                className: N.centerOrb,
                controls: !1,
                onCanPlayThrough: r.useCallback(() => g(!0), []),
                onEnded: O,
                children: (0, a.jsx)("source", {
                    src: C,
                    type: "video/webm",
                }),
            }),
            (0, a.jsxs)("div", {
                className: N.smallOrbContainer,
                children: [
                    (0, a.jsx)(Z, { onVideoLoaded: r.useCallback(() => R(!0), []) }),
                    (0, a.jsx)(Z, {}),
                    (0, a.jsx)(Z, {}),
                    (0, a.jsx)(Z, {}),
                ],
            }),
        ],
    });
}
function I(e) {
    let { isLoading: t, onClose: n, orbsEarned: r, orbsBalance: i, onVideoLoaded: s } = e,
        o = async () => {
            (0, f.Y)({
                pageType: v.ZY5.GLOBAL_DISCOVERY_QUESTS,
                sectionType: v.jXE.ORBS_REWARD_MODAL,
                ctaObject: v.qAy.CTA_TO_ORBS_SHOP,
            }),
                await n(),
                (0, m.mK)({
                    openInLayer: !1,
                    tab: E.AW.ORBS,
                    analyticsLocations: [],
                    analyticsSource: u.Z.QUEST_REWARD_MODAL,
                });
        };
    return (0, a.jsxs)("div", {
        className: N.contentContainer,
        children: [
            (0, a.jsx)(w, {
                isLoading: t,
                onVideoLoaded: s,
            }),
            (0, a.jsxs)("div", {
                className: N.copyContainer,
                children: [
                    (0, a.jsxs)("div", {
                        className: N.heading,
                        children: [
                            (0, a.jsx)(C.M, {
                                shouldUseThemeColor: !0,
                                className: N.orbsIcon,
                            }),
                            (0, a.jsx)(l.Heading, {
                                variant: "heading-xl/semibold",
                                color: "header-primary",
                                children: R.intl.formatToPlainString(R.t.YMor7u, { count: r }),
                            }),
                        ],
                    }),
                    null != i
                        ? (0, a.jsx)(l.Text, {
                              variant: "text-sm/medium",
                              color: "text-secondary",
                              children: R.intl.format(R.t.g4t9a2, {
                                  orbsBalance: i,
                                  orbsBalanceHook: (e, t) =>
                                      (0, a.jsx)(
                                          l.Text,
                                          {
                                              variant: "text-sm/medium",
                                              color: "text-primary",
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
                text: R.intl.string(R.t.WYchdX),
                onClick: o,
                fullWidth: !0,
            }),
        ],
    });
}
function P(e) {
    var t;
    let { quest: n, onClose: i, transitionState: s, sourceQuestContent: o, location: l } = e,
        c = (null == (t = n.userStatus) ? void 0 : t.claimedAt) != null,
        { balance: d, error: u } = (0, _.A)(),
        m = (0, b.LM)(n.config),
        [p, f] = r.useState(c ? "success" : "loading"),
        [C, v] = r.useState(!1),
        E = r.useCallback(() => {
            v(!0);
        }, []);
    r.useEffect(() => {
        c ||
            "loading" !== p ||
            (0, h.QB)(n.id, x.y$.CROSS_PLATFORM, l)
                .then(() => f("success"))
                .catch(() => f("error"));
    }, [n.id, c, p, l]);
    let N = !C || "loading" === p || (null == d && null == u),
        A = "error" === p || null == m || (null == d && null != u);
    return (0, a.jsx)(y.Z, {
        onClose: i,
        transitionState: s,
        quest: n,
        sourceQuestContent: o,
        location: j.dr.ORBS_REWARD_MODAL,
        isRewardContentLoading: N,
        rewardContentHasError: A,
        rewardContent: A
            ? null
            : (0, a.jsx)(g.Z, {
                  rewardName: R.intl.string(R.t.Lmysvb),
                  children: (0, a.jsx)(I, {
                      onClose: i,
                      orbsEarned: m,
                      orbsBalance: d,
                      isLoading: N,
                      onVideoLoaded: E,
                  }),
              }),
    });
}
