t.d(n, { default: () => y }), t(388685);
var a = t(951288),
    r = t(647438),
    o = t(120356),
    i = t.n(o),
    s = t(238651),
    d = t(442837),
    l = t(481060),
    c = t(607070),
    u = t(530618),
    C = t(70097),
    m = t(509212),
    h = t(272008),
    g = t(497505),
    f = t(475595),
    x = t(566078),
    j = t(602667),
    p = t(644646),
    v = t(114732),
    _ = t(46140),
    w = t(675654),
    N = t(388032),
    R = t(798144);
function A(e) {
    var n;
    let { transitionState: t, onClose: o, quest: C, location: m, reward: f, sourceQuestContent: j } = e,
        p = r.useRef(null),
        [_, N] = r.useState(null),
        A = r.useRef(new s.qA()),
        y = (0, d.e7)([c.Z], () => c.Z.useReducedMotion),
        S = (null == (n = C.userStatus) ? void 0 : n.claimedAt) != null,
        [k, q] = r.useState(S ? "claimed" : "loading");
    r.useEffect(() => {
        if (!S) {
            let e = x.r.build(C.config),
                n = e.rewardPlatforms.length > 0 ? e.rewardPlatforms[0] : g.y$.CROSS_PLATFORM;
            (0, h.QB)(C.id, n, m)
                .then(() => q("claimed"))
                .catch(() => q("error"));
        }
    }, [C, m, S]);
    let I = "loading" === k;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(s.O_, {
                ref: N,
                className: R.confettiCanvas,
                environment: A.current,
            }),
            (0, a.jsx)("div", {
                ref: p,
                children: (0, a.jsx)(l.Y0X, {
                    "data-migration-pending": !0,
                    transitionState: t,
                    size: l.CgR.DYNAMIC,
                    className: i()(R.rootContainer, { [R.rootContainerLoading]: I }),
                    hideShadow: !0,
                    parentComponent: "QuestsRewardInGameModal",
                    children: I
                        ? (0, a.jsx)(l.$jN, { type: l.$jN.Type.SPINNING_CIRCLE })
                        : "error" === k
                          ? (0, a.jsx)(v.Z, { onClose: o })
                          : (0, a.jsx)(M, {
                                quest: C,
                                rewardName: f.messages.name,
                                location: m,
                                useReducedMotion: y,
                                onClose: o,
                                sourceQuestContent: j,
                            }),
                }),
            }),
            !y &&
                !S &&
                "claimed" === k &&
                (0, a.jsx)(u.Z, {
                    confettiTarget: p.current,
                    confettiCanvas: _,
                    sprites: w.CA,
                    colors: w.Br,
                }),
        ],
    });
}
function M(e) {
    let { quest: n, rewardName: t, location: o, useReducedMotion: i, onClose: s, sourceQuestContent: d } = e,
        c = r.useMemo(() => (0, f.fh)(n, f.eC.HERO), [n]),
        u = c.isAnimated && !i;
    return (0, a.jsxs)("div", {
        className: R.claimedRootContainer,
        children: [
            (0, a.jsxs)("div", {
                className: R.headerContainer,
                children: [
                    (0, a.jsx)(C.Z, {
                        className: R.headerBackground,
                        autoPlay: u,
                        loop: u,
                        muted: !0,
                        playsInline: !0,
                        controls: !1,
                        poster: c.isAnimated ? void 0 : c.url,
                        src: c.isAnimated ? c.url : void 0,
                    }),
                    (0, a.jsxs)("div", {
                        className: R.headerForeground,
                        children: [
                            (0, a.jsx)("div", {
                                className: R.previewContainer,
                                children: (0, a.jsx)(p.Z, {
                                    autoplay: !0,
                                    className: R.rewardTile,
                                    learnMoreStyle: null,
                                    quest: n,
                                    questContent: o,
                                    location: _.dr.INGAME_REWARD_MODAL,
                                    sourceQuestContent: d,
                                }),
                            }),
                            (0, a.jsx)(l.olH, {
                                "data-migration-pending": !0,
                                className: R.close,
                                withCircleBackground: !0,
                                onClick: s,
                            }),
                        ],
                    }),
                ],
            }),
            (0, a.jsx)(l.mzw, {
                "data-migration-pending": !0,
                className: R.footerContainer,
                separator: !1,
                children: (0, a.jsxs)("div", {
                    className: R.gradient,
                    children: [
                        (0, a.jsx)(l.X6q, {
                            variant: "heading-lg/bold",
                            color: "always-white",
                            className: R.heading,
                            children: N.intl.string(N.t["0/Yz+f"]),
                        }),
                        (0, a.jsx)(l.Text, {
                            variant: "text-sm/normal",
                            color: "always-white",
                            className: R.text,
                            children: N.intl.format(N.t["v1u/zs"], { rewardName: t }),
                        }),
                    ],
                }),
            }),
        ],
    });
}
function y(e) {
    let { quest: n, location: t, onClose: o, transitionState: i, sourceQuestContent: s } = e,
        d = r.useMemo(() => (0, m.K)(n.config), [n]);
    return null == d
        ? null
        : (0, a.jsx)(j.A, {
              questOrQuests: n,
              questContent: g.jn.REWARD_MODAL,
              sourceQuestContent: s,
              overrideVisibility: !0,
              children: () =>
                  (0, a.jsx)(A, {
                      onClose: o,
                      transitionState: i,
                      quest: n,
                      location: t,
                      reward: d,
                      sourceQuestContent: s,
                  }),
          });
}
