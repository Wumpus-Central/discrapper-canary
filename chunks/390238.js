t.d(n, { default: () => k }), t(388685);
var a = t(54381),
    o = t(473749),
    r = t(120356),
    i = t.n(r),
    s = t(921254),
    d = t(442837),
    l = t(481060),
    c = t(607070),
    u = t(530618),
    m = t(70097),
    g = t(22095),
    h = t(509212),
    C = t(497505),
    x = t(475595),
    f = t(602667),
    j = t(644646),
    p = t(114732),
    _ = t(46140),
    v = t(675654),
    N = t(388032),
    w = t(889179);
function R(e) {
    var n;
    let { transitionState: t, onClose: r, quest: m, location: C, reward: x, sourceQuestContent: f } = e,
        j = o.useRef(null),
        [_, N] = o.useState(null),
        R = o.useRef(new s.qA()),
        k = (0, d.e7)([c.Z], () => c.Z.useReducedMotion),
        y = (null == (n = m.userStatus) ? void 0 : n.claimedAt) != null,
        [B, I] = o.useState(y ? "claimed" : "loading");
    o.useEffect(() => {
        if (!y) {
            let e = (0, h.zG)(m.config);
            (0, g.QB)(m.id, e, C)
                .then(() => I("claimed"))
                .catch(() => I("error"));
        }
    }, [m, C, y]);
    let M = "loading" === B;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(s.O_, {
                ref: N,
                className: w.confettiCanvas,
                environment: R.current,
            }),
            (0, a.jsx)("div", {
                ref: j,
                children: (0, a.jsx)(l.Y0X, {
                    "data-migration-pending": !0,
                    transitionState: t,
                    size: l.CgR.DYNAMIC,
                    className: i()(w.rootContainer, { [w.rootContainerLoading]: M }),
                    hideShadow: !0,
                    parentComponent: "QuestsRewardInGameModal",
                    children: M
                        ? (0, a.jsx)(l.$jN, { type: l.$jN.Type.SPINNING_CIRCLE })
                        : "error" === B
                          ? (0, a.jsx)(p.Z, { onClose: r })
                          : (0, a.jsx)(A, {
                                quest: m,
                                rewardName: x.messages.name,
                                location: C,
                                useReducedMotion: k,
                                onClose: r,
                                sourceQuestContent: f,
                            }),
                }),
            }),
            !k &&
                !y &&
                "claimed" === B &&
                (0, a.jsx)(u.Z, {
                    confettiTarget: j.current,
                    confettiCanvas: _,
                    sprites: v.CA,
                    colors: v.Br,
                }),
        ],
    });
}
function A(e) {
    let { quest: n, rewardName: t, location: r, useReducedMotion: i, onClose: s, sourceQuestContent: d } = e,
        c = o.useMemo(() => (0, x.fh)(n, x.eC.HERO), [n]),
        u = c.isAnimated && !i;
    return (0, a.jsxs)("div", {
        className: w.claimedRootContainer,
        children: [
            (0, a.jsxs)("div", {
                className: w.headerContainer,
                children: [
                    (0, a.jsx)(m.Z, {
                        className: w.headerBackground,
                        autoPlay: u,
                        loop: u,
                        muted: !0,
                        playsInline: !0,
                        controls: !1,
                        poster: c.isAnimated ? void 0 : c.url,
                        src: c.isAnimated ? c.url : void 0,
                    }),
                    (0, a.jsxs)("div", {
                        className: w.headerForeground,
                        children: [
                            (0, a.jsx)("div", {
                                className: w.previewContainer,
                                children: (0, a.jsx)(j.Z, {
                                    autoplay: !0,
                                    className: w.rewardTile,
                                    learnMoreStyle: null,
                                    quest: n,
                                    questContent: r,
                                    location: _.dr.INGAME_REWARD_MODAL,
                                    sourceQuestContent: d,
                                }),
                            }),
                            (0, a.jsx)(l.olH, {
                                "data-migration-pending": !0,
                                className: w.close,
                                withCircleBackground: !0,
                                onClick: s,
                            }),
                        ],
                    }),
                ],
            }),
            (0, a.jsx)(l.mzw, {
                "data-migration-pending": !0,
                className: w.footerContainer,
                separator: !1,
                children: (0, a.jsxs)("div", {
                    className: w.gradient,
                    children: [
                        (0, a.jsx)(l.Heading, {
                            variant: "heading-lg/bold",
                            color: "always-white",
                            className: w.heading,
                            children: N.intl.string(N.t["0/Yz+Y"]),
                        }),
                        (0, a.jsx)(l.Text, {
                            variant: "text-sm/normal",
                            color: "always-white",
                            className: w.text,
                            children: N.intl.format(N.t["v1u/zq"], { rewardName: t }),
                        }),
                    ],
                }),
            }),
        ],
    });
}
function k(e) {
    let { quest: n, location: t, onClose: r, transitionState: i, sourceQuestContent: s } = e,
        d = o.useMemo(() => (0, h.K)(n.config), [n]);
    return null == d
        ? null
        : (0, a.jsx)(f.A, {
              questOrQuests: n,
              questContent: C.jn.REWARD_MODAL,
              sourceQuestContent: s,
              overrideVisibility: !0,
              children: () =>
                  (0, a.jsx)(R, {
                      onClose: r,
                      transitionState: i,
                      quest: n,
                      location: t,
                      reward: d,
                      sourceQuestContent: s,
                  }),
          });
}
