n.d(t, { default: () => y }), n(388685);
var a = n(54381),
    r = n(473749),
    o = n(120356),
    i = n.n(o),
    s = n(921254),
    d = n(442837),
    l = n(481060),
    c = n(607070),
    u = n(530618),
    m = n(70097),
    g = n(22095),
    h = n(509212),
    C = n(497505),
    x = n(475595),
    f = n(566078),
    j = n(602667),
    _ = n(644646),
    p = n(114732),
    v = n(46140),
    N = n(675654),
    w = n(388032),
    R = n(798144);
function A(e) {
    var t;
    let { transitionState: n, onClose: o, quest: m, location: h, reward: x, sourceQuestContent: j } = e,
        _ = r.useRef(null),
        [v, w] = r.useState(null),
        A = r.useRef(new s.qA()),
        y = (0, d.e7)([c.Z], () => c.Z.useReducedMotion),
        B = (null == (t = m.userStatus) ? void 0 : t.claimedAt) != null,
        [M, I] = r.useState(B ? "claimed" : "loading");
    r.useEffect(() => {
        if (!B) {
            let e = f.r.build(m.config),
                t = e.rewardPlatforms.length > 0 ? e.rewardPlatforms[0] : C.y$.CROSS_PLATFORM;
            (0, g.QB)(m.id, t, h)
                .then(() => I("claimed"))
                .catch(() => I("error"));
        }
    }, [m, h, B]);
    let S = "loading" === M;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(s.O_, {
                ref: w,
                className: R.confettiCanvas,
                environment: A.current,
            }),
            (0, a.jsx)("div", {
                ref: _,
                children: (0, a.jsx)(l.Y0X, {
                    "data-migration-pending": !0,
                    transitionState: n,
                    size: l.CgR.DYNAMIC,
                    className: i()(R.rootContainer, { [R.rootContainerLoading]: S }),
                    hideShadow: !0,
                    parentComponent: "QuestsRewardInGameModal",
                    children: S
                        ? (0, a.jsx)(l.$jN, { type: l.$jN.Type.SPINNING_CIRCLE })
                        : "error" === M
                          ? (0, a.jsx)(p.Z, { onClose: o })
                          : (0, a.jsx)(k, {
                                quest: m,
                                rewardName: x.messages.name,
                                location: h,
                                useReducedMotion: y,
                                onClose: o,
                                sourceQuestContent: j,
                            }),
                }),
            }),
            !y &&
                !B &&
                "claimed" === M &&
                (0, a.jsx)(u.Z, {
                    confettiTarget: _.current,
                    confettiCanvas: v,
                    sprites: N.CA,
                    colors: N.Br,
                }),
        ],
    });
}
function k(e) {
    let { quest: t, rewardName: n, location: o, useReducedMotion: i, onClose: s, sourceQuestContent: d } = e,
        c = r.useMemo(() => (0, x.fh)(t, x.eC.HERO), [t]),
        u = c.isAnimated && !i;
    return (0, a.jsxs)("div", {
        className: R.claimedRootContainer,
        children: [
            (0, a.jsxs)("div", {
                className: R.headerContainer,
                children: [
                    (0, a.jsx)(m.Z, {
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
                                children: (0, a.jsx)(_.Z, {
                                    autoplay: !0,
                                    className: R.rewardTile,
                                    learnMoreStyle: null,
                                    quest: t,
                                    questContent: o,
                                    location: v.dr.INGAME_REWARD_MODAL,
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
                        (0, a.jsx)(l.Heading, {
                            variant: "heading-lg/bold",
                            color: "always-white",
                            className: R.heading,
                            children: w.intl.string(w.t["0/Yz+Y"]),
                        }),
                        (0, a.jsx)(l.Text, {
                            variant: "text-sm/normal",
                            color: "always-white",
                            className: R.text,
                            children: w.intl.format(w.t["v1u/zq"], { rewardName: n }),
                        }),
                    ],
                }),
            }),
        ],
    });
}
function y(e) {
    let { quest: t, location: n, onClose: o, transitionState: i, sourceQuestContent: s } = e,
        d = r.useMemo(() => (0, h.K)(t.config), [t]);
    return null == d
        ? null
        : (0, a.jsx)(j.A, {
              questOrQuests: t,
              questContent: C.jn.REWARD_MODAL,
              sourceQuestContent: s,
              overrideVisibility: !0,
              children: () =>
                  (0, a.jsx)(A, {
                      onClose: o,
                      transitionState: i,
                      quest: t,
                      location: n,
                      reward: d,
                      sourceQuestContent: s,
                  }),
          });
}
