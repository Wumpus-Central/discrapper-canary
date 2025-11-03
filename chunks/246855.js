t.d(n, { default: () => k }), t(388685);
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
    _ = t(113434),
    j = t(497505),
    g = t(515108),
    y = t(291967),
    v = t(46140),
    N = t(981631),
    O = t(215023),
    T = t(388032),
    w = t(561549),
    P = t(582425),
    S = t(345554),
    L = t(88490),
    E = t(466674),
    R = t(201284);
function A(e) {
    let { onVideoLoaded: n } = e;
    return (0, a.jsx)(p.Z, {
        className: w.smallOrb,
        playsInline: !0,
        controls: !1,
        autoPlay: !0,
        loop: !0,
        onCanPlayThrough: n,
        children: (0, a.jsx)("source", {
            src: R.Z,
            type: "video/webm",
        }),
    });
}
function Z(e) {
    let { onVideoLoaded: n, isLoading: t } = e,
        i = (0, o.e7)([d.Z], () => d.Z.useReducedMotion),
        [u, m] = r.useState(!i),
        b = (0, c.ZP)(),
        f = (0, l.apv)(b),
        x = f ? S.Z : P.Z,
        h = f ? E.Z : L.Z,
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
    let T = r.useCallback(() => {
        if (!i) {
            var e;
            m(!1), null == (e = _.current) || e.play();
        }
    }, [i]);
    return (0, a.jsxs)("div", {
        className: w.orbsContainer,
        children: [
            (0, a.jsx)(p.Z, {
                ref: _,
                autoPlay: !1,
                loop: !0,
                muted: !0,
                playsInline: !0,
                className: s()(w.centerOrb, w.idleOrb, { [w.hidden]: u }),
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
                className: w.centerOrb,
                controls: !1,
                onCanPlayThrough: r.useCallback(() => g(!0), []),
                onEnded: T,
                children: (0, a.jsx)("source", {
                    src: x,
                    type: "video/webm",
                }),
            }),
            (0, a.jsxs)("div", {
                className: w.smallOrbContainer,
                children: [
                    (0, a.jsx)(A, { onVideoLoaded: r.useCallback(() => O(!0), []) }),
                    (0, a.jsx)(A, {}),
                    (0, a.jsx)(A, {}),
                    (0, a.jsx)(A, {}),
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
        className: w.contentContainer,
        children: [
            (0, a.jsx)(Z, {
                isLoading: n,
                onVideoLoaded: s,
            }),
            (0, a.jsxs)("div", {
                className: w.copyContainer,
                children: [
                    (0, a.jsxs)("div", {
                        className: w.heading,
                        children: [
                            (0, a.jsx)(x.M, {
                                shouldUseThemeColor: !0,
                                className: w.orbsIcon,
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
                              color: "text-secondary",
                              children: T.intl.format(T.t.g4t9aw, {
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
                text: T.intl.string(T.t.WYchde),
                onClick: o,
                fullWidth: !0,
            }),
        ],
    });
}
function k(e) {
    var n, t;
    let { initialQuest: i, onClose: s, transitionState: o, sourceQuestContent: l, location: c } = e,
        d = null != (t = (0, _.B4)(i.id)) ? t : i,
        u = (null == (n = d.userStatus) ? void 0 : n.claimedAt) != null,
        { balance: m, error: p } = (0, f.A)(),
        b = (0, C.LM)(d.config),
        [x, N] = r.useState(u ? "success" : "loading"),
        [O, w] = r.useState(!1),
        P = r.useCallback(() => {
            w(!0);
        }, []);
    r.useEffect(() => {
        u ||
            "loading" !== x ||
            (0, h.QB)(d.id, j.y$.CROSS_PLATFORM, c)
                .then(() => N("success"))
                .catch(() => N("error"));
    }, [d.id, u, x, c]);
    let S = !O || "loading" === x || (null == m && null == p),
        L = "error" === x || null == b || (null == m && null != p);
    return (0, a.jsx)(g.Z, {
        onClose: s,
        transitionState: o,
        quest: d,
        sourceQuestContent: l,
        location: v.dr.ORBS_REWARD_MODAL,
        isRewardContentLoading: S,
        rewardContentHasError: L,
        rewardContent: L
            ? null
            : (0, a.jsx)(y.Z, {
                  rewardName: T.intl.string(T.t.Lmysvd),
                  children: (0, a.jsx)(D, {
                      onClose: s,
                      orbsEarned: b,
                      orbsBalance: m,
                      isLoading: S,
                      onVideoLoaded: P,
                  }),
              }),
    });
}
