t.d(n, { default: () => I }), t(388685);
var a = t(54381),
    r = t(473749),
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
    _ = t(313481),
    C = t(49436),
    g = t(115179),
    j = t(515108),
    v = t(291967),
    y = t(324805),
    N = t(981631),
    O = t(215023),
    P = t(388032),
    T = t(561549),
    S = t(582425),
    w = t(345554),
    Z = t(88490),
    L = t(466674),
    A = t(201284);
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
            src: A.Z,
            type: "video/webm",
        }),
    });
}
function E(e) {
    let { onVideoLoaded: n, isLoading: t } = e,
        i = (0, o.e7)([d.Z], () => d.Z.useReducedMotion),
        [u, m] = r.useState(!i),
        b = (0, c.ZP)(),
        f = (0, l.apv)(b),
        x = f ? w.Z : S.Z,
        h = f ? L.Z : Z.Z,
        _ = r.useRef(null),
        C = r.useRef(null),
        [g, j] = r.useState(!1),
        [v, y] = r.useState(!1),
        [N, O] = r.useState(!1);
    r.useEffect(() => {
        g && v && N && n();
    }, [g, v, N, n]),
        r.useEffect(() => {
            t ||
                i ||
                setTimeout(() => {
                    var e;
                    null == (e = _.current) || e.play();
                }, 200);
        }, [t, i]);
    let P = r.useCallback(() => {
        if (!i) {
            var e;
            m(!1), null == (e = C.current) || e.play();
        }
    }, [i]);
    return (0, a.jsxs)("div", {
        className: T.orbsContainer,
        children: [
            (0, a.jsx)(p.Z, {
                ref: C,
                autoPlay: !1,
                loop: !0,
                muted: !0,
                playsInline: !0,
                className: s()(T.centerOrb, T.idleOrb, { [T.hidden]: u }),
                controls: !1,
                onCanPlayThrough: r.useCallback(() => y(!0), []),
                children: (0, a.jsx)("source", {
                    src: h,
                    type: "video/webm",
                }),
            }),
            (0, a.jsx)(p.Z, {
                ref: _,
                autoPlay: !1,
                muted: !0,
                playsInline: !0,
                className: T.centerOrb,
                controls: !1,
                onCanPlayThrough: r.useCallback(() => j(!0), []),
                onEnded: P,
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
function D(e) {
    let { isLoading: n, onClose: t, orbsEarned: r, orbsBalance: i, onVideoLoaded: s } = e,
        o = async () => {
            (0, b.Y)({
                pageType: N.ZY5.GLOBAL_DISCOVERY_QUESTS,
                sectionType: N.jXE.ORBS_REWARD_MODAL,
                ctaObject: N.qAy.CTA_TO_ORBS_SHOP,
            }),
                await t(),
                (0, m.mK)({
                    tab: O.AW.ORBS,
                    analyticsLocations: [],
                    analyticsSource: u.Z.QUEST_REWARD_MODAL,
                });
        };
    return (0, a.jsxs)("div", {
        className: T.contentContainer,
        children: [
            (0, a.jsx)(E, {
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
                                children: P.intl.formatToPlainString(P.t.YMor7k, { count: r }),
                            }),
                        ],
                    }),
                    null != i
                        ? (0, a.jsx)(l.Text, {
                              variant: "text-sm/medium",
                              color: "text-secondary",
                              children: P.intl.format(P.t.g4t9aw, {
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
                text: P.intl.string(P.t.WYchde),
                onClick: o,
                fullWidth: !0,
            }),
        ],
    });
}
function I(e) {
    var n, t;
    let { initialQuest: i, onClose: s, transitionState: o, sourceQuestContent: l, location: c } = e,
        d = null != (t = (0, _.B4)(i.id)) ? t : i,
        u = (null == (n = d.userStatus) ? void 0 : n.claimedAt) != null,
        { balance: m, error: p } = (0, f.A)(),
        b = (0, g.LM)(d.config),
        [x, N] = r.useState(u ? "success" : "loading"),
        [O, T] = r.useState(!1),
        S = r.useCallback(() => {
            T(!0);
        }, []);
    r.useEffect(() => {
        u ||
            "loading" !== x ||
            (0, h.QB)(d.id, C.y$.CROSS_PLATFORM, c)
                .then(() => N("success"))
                .catch(() => N("error"));
    }, [d.id, u, x, c]);
    let w = !O || "loading" === x || (null == m && null == p),
        Z = "error" === x || null == b || (null == m && null != p);
    return (0, a.jsx)(j.Z, {
        onClose: s,
        transitionState: o,
        quest: d,
        sourceQuestContent: l,
        location: y.dr.ORBS_REWARD_MODAL,
        isRewardContentLoading: w,
        rewardContentHasError: Z,
        rewardContent: Z
            ? null
            : (0, a.jsx)(v.Z, {
                  rewardName: P.intl.string(P.t.Lmysvd),
                  children: (0, a.jsx)(D, {
                      onClose: s,
                      orbsEarned: b,
                      orbsBalance: m,
                      isLoading: w,
                      onVideoLoaded: S,
                  }),
              }),
    });
}
