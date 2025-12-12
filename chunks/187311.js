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
    m = n(335131),
    f = n(70097),
    b = n(507808),
    p = n(43747),
    x = n(960919),
    h = n(22095),
    C = n(49436),
    j = n(968843),
    g = n(115179),
    v = n(187546),
    y = n(285910),
    N = n(324805),
    O = n(981631),
    _ = n(215023),
    P = n(388032),
    w = n(134781),
    T = n(691091),
    A = n(347516),
    L = n(941714),
    S = n(466410),
    Z = n(97794);
function R(e) {
    let { onVideoLoaded: t } = e;
    return (0, a.jsx)(f.Z, {
        className: w.smallOrb,
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
        [u, m] = r.useState(!i),
        b = (0, c.ZP)(),
        p = (0, l.apv)(b),
        x = p ? A.Z : T.Z,
        h = p ? S.Z : L.Z,
        C = r.useRef(null),
        j = r.useRef(null),
        [g, v] = r.useState(!1),
        [y, N] = r.useState(!1),
        [O, _] = r.useState(!1);
    r.useEffect(() => {
        g && y && O && t();
    }, [g, y, O, t]),
        r.useEffect(() => {
            n ||
                i ||
                setTimeout(() => {
                    var e;
                    null == (e = C.current) || e.play();
                }, 200);
        }, [n, i]);
    let P = r.useCallback(() => {
        if (!i) {
            var e;
            m(!1), null == (e = j.current) || e.play();
        }
    }, [i]);
    return (0, a.jsxs)("div", {
        className: w.orbsContainer,
        children: [
            (0, a.jsx)(f.Z, {
                ref: j,
                autoPlay: !1,
                loop: !0,
                muted: !0,
                playsInline: !0,
                className: s()(w.centerOrb, w.idleOrb, { [w.hidden]: u }),
                controls: !1,
                onCanPlayThrough: r.useCallback(() => N(!0), []),
                children: (0, a.jsx)("source", {
                    src: h,
                    type: "video/webm",
                }),
            }),
            (0, a.jsx)(f.Z, {
                ref: C,
                autoPlay: !1,
                muted: !0,
                playsInline: !0,
                className: w.centerOrb,
                controls: !1,
                onCanPlayThrough: r.useCallback(() => v(!0), []),
                onEnded: P,
                children: (0, a.jsx)("source", {
                    src: x,
                    type: "video/webm",
                }),
            }),
            (0, a.jsxs)("div", {
                className: w.smallOrbContainer,
                children: [
                    (0, a.jsx)(R, { onVideoLoaded: r.useCallback(() => _(!0), []) }),
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
            (0, b.Y)({
                pageType: O.ZY5.GLOBAL_DISCOVERY_QUESTS,
                sectionType: O.jXE.ORBS_REWARD_MODAL,
                ctaObject: O.qAy.CTA_TO_ORBS_SHOP,
            }),
                await n(),
                (0, m.mK)({
                    tab: _.AW.ORBS,
                    analyticsLocations: [],
                    analyticsSource: u.Z.QUEST_REWARD_MODAL,
                });
        };
    return (0, a.jsxs)("div", {
        className: w.contentContainer,
        children: [
            (0, a.jsx)(E, {
                isLoading: t,
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
                                color: "text-strong",
                                children: P.intl.formatToPlainString(P.t.YMor7k, { count: r }),
                            }),
                        ],
                    }),
                    null != i
                        ? (0, a.jsx)(l.Text, {
                              variant: "text-sm/medium",
                              color: "text-subtle",
                              children: P.intl.format(P.t.g4t9aw, {
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
                text: P.intl.string(P.t.WYchde),
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
        { balance: m, error: f } = (0, p.A)(),
        b = (0, g.LM)(d.config),
        [x, O] = r.useState(u ? "success" : "loading"),
        [_, w] = r.useState(!1),
        T = r.useCallback(() => {
            w(!0);
        }, []);
    r.useEffect(() => {
        u ||
            "loading" !== x ||
            (0, h.QB)(d.id, C.y$.CROSS_PLATFORM, c)
                .then(() => O("success"))
                .catch(() => O("error"));
    }, [d.id, u, x, c]);
    let A = !_ || "loading" === x || (null == m && null == f),
        L = "error" === x || null == b || (null == m && null != f);
    return (0, a.jsx)(y.Z, {
        onClose: s,
        transitionState: o,
        quest: d,
        sourceQuestContent: l,
        location: N.dr.ORBS_REWARD_MODAL,
        isRewardContentLoading: A,
        rewardContentHasError: L,
        rewardContent: L
            ? null
            : (0, a.jsx)(v.Z, {
                  rewardName: P.intl.string(P.t.Lmysvd),
                  children: (0, a.jsx)(D, {
                      onClose: s,
                      orbsEarned: b,
                      orbsBalance: m,
                      isLoading: A,
                      onVideoLoaded: T,
                  }),
              }),
    });
}
