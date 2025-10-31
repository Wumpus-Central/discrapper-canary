t.d(n, { default: () => D }), t(388685);
var a = t(951288),
    r = t(647438),
    i = t(120356),
    s = t.n(i),
    o = t(442837),
    l = t(481060),
    c = t(410030),
    d = t(607070),
    u = t(100527),
    m = t(335131),
    p = t(70097),
    b = t(507808),
    f = t(43747),
    x = t(960919),
    h = t(22095),
    C = t(509212),
    _ = t(497505),
    j = t(515108),
    g = t(291967),
    y = t(46140),
    v = t(981631),
    N = t(215023),
    O = t(388032),
    T = t(561549),
    w = t(582425),
    P = t(345554),
    S = t(88490),
    L = t(466674),
    E = t(201284);
function R(e) {
    let { onVideoLoaded: n } = e;
    return (0, a.jsx)(p.Z, {
        className: T.smallOrb,
        playsInline: !0,
        controls: !1,
        autoPlay: !0,
        loop: !0,
        onCanPlayThrough: n,
        children: (0, a.jsx)("source", {
            src: E.Z,
            type: "video/webm",
        }),
    });
}
function A(e) {
    let { onVideoLoaded: n, isLoading: t } = e,
        i = (0, o.e7)([d.Z], () => d.Z.useReducedMotion),
        [u, m] = r.useState(!i),
        b = (0, c.ZP)(),
        f = (0, l.apv)(b),
        x = f ? P.Z : w.Z,
        h = f ? L.Z : S.Z,
        C = r.useRef(null),
        _ = r.useRef(null),
        [j, g] = r.useState(!1),
        [y, v] = r.useState(!1),
        [N, O] = r.useState(!1);
    r.useEffect(() => {
        j && y && N && n();
    }, [j, y, N, n]),
        r.useEffect(() => {
            t ||
                i ||
                setTimeout(() => {
                    var e;
                    null == (e = C.current) || e.play();
                }, 200);
        }, [t, i]);
    let E = r.useCallback(() => {
        if (!i) {
            var e;
            m(!1), null == (e = _.current) || e.play();
        }
    }, [i]);
    return (0, a.jsxs)("div", {
        className: T.orbsContainer,
        children: [
            (0, a.jsx)(p.Z, {
                ref: _,
                autoPlay: !1,
                loop: !0,
                muted: !0,
                playsInline: !0,
                className: s()(T.centerOrb, T.idleOrb, { [T.hidden]: u }),
                controls: !1,
                onCanPlayThrough: r.useCallback(() => v(!0), []),
                children: (0, a.jsx)("source", {
                    src: h,
                    type: "video/webm",
                }),
            }),
            (0, a.jsx)(p.Z, {
                ref: C,
                autoPlay: !1,
                muted: !0,
                playsInline: !0,
                className: T.centerOrb,
                controls: !1,
                onCanPlayThrough: r.useCallback(() => g(!0), []),
                onEnded: E,
                children: (0, a.jsx)("source", {
                    src: x,
                    type: "video/webm",
                }),
            }),
            (0, a.jsxs)("div", {
                className: T.smallOrbContainer,
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
function Z(e) {
    let { isLoading: n, onClose: t, orbsEarned: r, orbsBalance: i, onVideoLoaded: s } = e,
        o = async () => {
            (0, b.Y)({
                pageType: v.ZY5.GLOBAL_DISCOVERY_QUESTS,
                sectionType: v.jXE.ORBS_REWARD_MODAL,
                ctaObject: v.qAy.CTA_TO_ORBS_SHOP,
            }),
                await t(),
                (0, m.mK)({
                    tab: N.AW.ORBS,
                    analyticsLocations: [],
                    analyticsSource: u.Z.QUEST_REWARD_MODAL,
                });
        };
    return (0, a.jsxs)("div", {
        className: T.contentContainer,
        children: [
            (0, a.jsx)(A, {
                isLoading: n,
                onVideoLoaded: s,
            }),
            (0, a.jsxs)("div", {
                className: T.copyContainer,
                children: [
                    (0, a.jsxs)("div", {
                        className: T.heading,
                        children: [
                            (0, a.jsx)(x.M, {
                                shouldUseThemeColor: !0,
                                className: T.orbsIcon,
                            }),
                            (0, a.jsx)(l.Heading, {
                                variant: "heading-xl/semibold",
                                color: "header-primary",
                                children: O.intl.formatToPlainString(O.t.YMor7k, { count: r }),
                            }),
                        ],
                    }),
                    null != i
                        ? (0, a.jsx)(l.Text, {
                              variant: "text-sm/medium",
                              color: "text-secondary",
                              children: O.intl.format(O.t.g4t9aw, {
                                  orbsBalance: i,
                                  orbsBalanceHook: (e, n) =>
                                      (0, a.jsx)(
                                          l.Text,
                                          {
                                              variant: "text-sm/medium",
                                              color: "text-primary",
                                              tag: "span",
                                              children: e,
                                          },
                                          n,
                                      ),
                              }),
                          })
                        : null,
                ],
            }),
            (0, a.jsx)(l.Button, {
                variant: "secondary",
                size: "sm",
                text: O.intl.string(O.t.WYchde),
                onClick: o,
                fullWidth: !0,
            }),
        ],
    });
}
function D(e) {
    var n;
    let { quest: t, onClose: i, transitionState: s, sourceQuestContent: o, location: l } = e,
        c = (null == (n = t.userStatus) ? void 0 : n.claimedAt) != null,
        { balance: d, error: u } = (0, f.A)(),
        m = (0, C.LM)(t.config),
        [p, b] = r.useState(c ? "success" : "loading"),
        [x, v] = r.useState(!1),
        N = r.useCallback(() => {
            v(!0);
        }, []);
    r.useEffect(() => {
        c ||
            "loading" !== p ||
            (0, h.QB)(t.id, _.y$.CROSS_PLATFORM, l)
                .then(() => b("success"))
                .catch(() => b("error"));
    }, [t.id, c, p, l]);
    let T = !x || "loading" === p || (null == d && null == u),
        w = "error" === p || null == m || (null == d && null != u);
    return (0, a.jsx)(j.Z, {
        onClose: i,
        transitionState: s,
        quest: t,
        sourceQuestContent: o,
        location: y.dr.ORBS_REWARD_MODAL,
        isRewardContentLoading: T,
        rewardContentHasError: w,
        rewardContent: w
            ? null
            : (0, a.jsx)(g.Z, {
                  rewardName: O.intl.string(O.t.Lmysvd),
                  children: (0, a.jsx)(Z, {
                      onClose: i,
                      orbsEarned: m,
                      orbsBalance: d,
                      isLoading: T,
                      onVideoLoaded: N,
                  }),
              }),
    });
}
