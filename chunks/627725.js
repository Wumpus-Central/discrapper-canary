n.d(t, { Z: () => P });
var r = n(54381),
    i = n(473749),
    a = n(995638),
    o = n(442837),
    s = n(920155),
    l = n(237872),
    c = n(159691),
    u = n(607070),
    d = n(70097),
    f = n(468208),
    p = n(165299),
    _ = n(790542),
    h = n(594174),
    m = n(63063),
    g = n(111361),
    E = n(713422),
    b = n(474936),
    y = n(981631),
    O = n(618435),
    v = n(388032),
    S = n(900221),
    I = n(73909),
    T = n(479656),
    C = n(900303);
let A = () => {
        let e = (0, o.e7)([u.Z], () => u.Z.useReducedMotion);
        return (0, r.jsx)("div", {
            className: S.assetContainer,
            children: e
                ? (0, r.jsx)("img", {
                      src: I.Z,
                      className: S.orbAsset,
                      alt: "Orb",
                  })
                : (0, r.jsxs)(d.Z, {
                      autoPlay: !0,
                      loop: !0,
                      className: S.orbAsset,
                      children: [
                          (0, r.jsx)("source", {
                              src: T.Z,
                              type: "video/webm",
                          }),
                          (0, r.jsx)("img", {
                              src: I.Z,
                              className: S.orbAsset,
                              alt: "Orb",
                          }),
                      ],
                  }),
        });
    },
    N = 4100;
function P(e) {
    let { targetElementRef: t, shouldShow: n, onRequestClose: I, ctaText: T, ctaOnClick: P } = e,
        w = (0, o.e7)([u.Z], () => u.Z.useReducedMotion),
        R = (0, o.e7)([f.Z], () => f.Z.getRewardForProgram(p.f.NITRO)),
        D = (0, o.e7)([h.default], () => h.default.getCurrentUser()),
        { balance: x } = (0, _.A)(),
        L = i.useMemo(() => {
            let e = (0, g.M5)(D, b.PremiumTypes.TIER_2),
                t = !(0, g.I5)(D);
            if (!f.Z.passesGeneralUIInvariant(p.f.NITRO)) return null;
            if (t)
                return (0, r.jsx)(c.xvT, {
                    variant: "text-xs/normal",
                    color: "text-default",
                    children: v.intl.format(O.default.cjEl8a, {
                        deepLinkToNitroOrbs: () => {},
                    }),
                });
            if (e && null != R) {
                let e = (0, a.default)(new Date(R.next_reward_date), new Date());
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(c.xvT, {
                            variant: "text-xs/normal",
                            color: "text-default",
                            children: v.intl.format(O.default["AvL/At"], {
                                days: Math.max(1, e),
                                deepLinkToNitroOrbs: () => {},
                            }),
                        }),
                        (0, r.jsx)(E.Z, {}),
                    ],
                });
            }
            return null;
        }, [D, R]);
    return (0, r.jsxs)(s.m, {
        targetElementRef: t,
        shouldShow: n,
        onRequestClose: I,
        position: "bottom",
        gradientColor: "blue",
        modal: !0,
        closeOnClickOutside: !0,
        children: [
            (null != x ? x : 0) >= N &&
                (0, r.jsx)(d.Z, {
                    autoPlay: !w,
                    loop: !w,
                    muted: !0,
                    playsInline: !0,
                    tabIndex: -1,
                    className: S.videoBackground,
                    src: C.Z,
                }),
            (0, r.jsxs)("div", {
                className: S.content,
                children: [
                    (0, r.jsx)(l.u, { onClick: I }),
                    (0, r.jsxs)("div", {
                        className: S.contentContainer,
                        children: [
                            (0, r.jsx)(A, {}),
                            (0, r.jsxs)("div", {
                                className: S.rewardsContainer,
                                children: [
                                    (0, r.jsxs)("div", {
                                        className: S.balanceContainer,
                                        children: [
                                            (0, r.jsx)(c.xvT, {
                                                variant: "display-lg",
                                                className: S.balanceText,
                                                children: null != x ? x : 0,
                                            }),
                                            (null != x ? x : 0) > 0 &&
                                                (0, r.jsx)(c.xvT, {
                                                    variant: "text-xs/normal",
                                                    color: "text-muted",
                                                    children: v.intl.string(O.default.KclK9z),
                                                }),
                                        ],
                                    }),
                                    L,
                                ],
                            }),
                            (0, r.jsx)(c.zxk, {
                                text: T,
                                variant: "primary",
                                size: "sm",
                                onClick: P,
                                fullWidth: !0,
                            }),
                            (0, r.jsx)(c.xvT, {
                                variant: "text-xs/normal",
                                color: "text-muted",
                                className: S.learnMoreLink,
                                children: v.intl.format(O.default.fhAVek, {
                                    helpdeskArticle: m.Z.getArticleURL(y.BhN.ORBS_FAQ),
                                }),
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
