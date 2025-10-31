n.d(t, { default: () => I }), n(388685);
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
    C = n(43747),
    _ = n(960919),
    b = n(22095),
    h = n(509212),
    x = n(497505),
    g = n(515108),
    y = n(291967),
    j = n(46140),
    v = n(981631),
    E = n(215023),
    R = n(388032),
    N = n(651353),
    A = n(582425),
    S = n(345554),
    T = n(88490),
    L = n(466674),
    Z = n(201284);
function w(e) {
    let { onVideoLoaded: t } = e;
    return (0, a.jsx)(p.Z, {
        className: N.smallOrb,
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
function O(e) {
    let { onVideoLoaded: t, isLoading: n } = e,
        i = (0, o.e7)([d.Z], () => d.Z.useReducedMotion),
        [u, m] = r.useState(!i),
        f = (0, c.ZP)(),
        C = (0, l.apv)(f),
        _ = C ? S.Z : A.Z,
        b = C ? L.Z : T.Z,
        h = r.useRef(null),
        x = r.useRef(null),
        [g, y] = r.useState(!1),
        [j, v] = r.useState(!1),
        [E, R] = r.useState(!1);
    r.useEffect(() => {
        g && j && E && t();
    }, [g, j, E, t]),
        r.useEffect(() => {
            n ||
                i ||
                setTimeout(() => {
                    var e;
                    null == (e = h.current) || e.play();
                }, 200);
        }, [n, i]);
    let Z = r.useCallback(() => {
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
                onCanPlayThrough: r.useCallback(() => y(!0), []),
                onEnded: Z,
                children: (0, a.jsx)("source", {
                    src: _,
                    type: "video/webm",
                }),
            }),
            (0, a.jsxs)("div", {
                className: N.smallOrbContainer,
                children: [
                    (0, a.jsx)(w, { onVideoLoaded: r.useCallback(() => R(!0), []) }),
                    (0, a.jsx)(w, {}),
                    (0, a.jsx)(w, {}),
                    (0, a.jsx)(w, {}),
                ],
            }),
        ],
    });
}
function P(e) {
    let { isLoading: t, onClose: n, orbsEarned: r, orbsBalance: i, onVideoLoaded: s } = e,
        o = async () => {
            (0, f.Y)({
                pageType: v.ZY5.GLOBAL_DISCOVERY_QUESTS,
                sectionType: v.jXE.ORBS_REWARD_MODAL,
                ctaObject: v.qAy.CTA_TO_ORBS_SHOP,
            }),
                await n(),
                (0, m.mK)({
                    tab: E.AW.ORBS,
                    analyticsLocations: [],
                    analyticsSource: u.Z.QUEST_REWARD_MODAL,
                });
        };
    return (0, a.jsxs)("div", {
        className: N.contentContainer,
        children: [
            (0, a.jsx)(O, {
                isLoading: t,
                onVideoLoaded: s,
            }),
            (0, a.jsxs)("div", {
                className: N.copyContainer,
                children: [
                    (0, a.jsxs)("div", {
                        className: N.heading,
                        children: [
                            (0, a.jsx)(_.M, {
                                shouldUseThemeColor: !0,
                                className: N.orbsIcon,
                            }),
                            (0, a.jsx)(l.Heading, {
                                variant: "heading-xl/semibold",
                                color: "header-primary",
                                children: R.intl.formatToPlainString(R.t.YMor7k, { count: r }),
                            }),
                        ],
                    }),
                    null != i
                        ? (0, a.jsx)(l.Text, {
                              variant: "text-sm/medium",
                              color: "text-secondary",
                              children: R.intl.format(R.t.g4t9aw, {
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
                text: R.intl.string(R.t.WYchde),
                onClick: o,
                fullWidth: !0,
            }),
        ],
    });
}
function I(e) {
    var t;
    let { quest: n, onClose: i, transitionState: s, sourceQuestContent: o, location: l } = e,
        c = (null == (t = n.userStatus) ? void 0 : t.claimedAt) != null,
        { balance: d, error: u } = (0, C.A)(),
        m = (0, h.LM)(n.config),
        [p, f] = r.useState(c ? "success" : "loading"),
        [_, v] = r.useState(!1),
        E = r.useCallback(() => {
            v(!0);
        }, []);
    r.useEffect(() => {
        c ||
            "loading" !== p ||
            (0, b.QB)(n.id, x.y$.CROSS_PLATFORM, l)
                .then(() => f("success"))
                .catch(() => f("error"));
    }, [n.id, c, p, l]);
    let N = !_ || "loading" === p || (null == d && null == u),
        A = "error" === p || null == m || (null == d && null != u);
    return (0, a.jsx)(g.Z, {
        onClose: i,
        transitionState: s,
        quest: n,
        sourceQuestContent: o,
        location: j.dr.ORBS_REWARD_MODAL,
        isRewardContentLoading: N,
        rewardContentHasError: A,
        rewardContent: A
            ? null
            : (0, a.jsx)(y.Z, {
                  rewardName: R.intl.string(R.t.Lmysvd),
                  children: (0, a.jsx)(P, {
                      onClose: i,
                      orbsEarned: m,
                      orbsBalance: d,
                      isLoading: N,
                      onVideoLoaded: E,
                  }),
              }),
    });
}
