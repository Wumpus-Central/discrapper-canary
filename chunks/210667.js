t.d(n, { default: () => k }), t(388685);
var a = t(54381),
    o = t(473749),
    r = t(120356),
    i = t.n(r),
    s = t(921254),
    l = t(442837),
    d = t(481060),
    c = t(607070),
    u = t(530618),
    m = t(70097),
    g = t(22095),
    h = t(49436),
    C = t(509212),
    _ = t(475595),
    x = t(602667),
    f = t(939729),
    j = t(644646),
    p = t(324805),
    v = t(675654),
    N = t(388032),
    w = t(748626);
function R(e) {
    var n;
    let { transitionState: t, onClose: r, quest: m, location: h, reward: _, sourceQuestContent: x } = e,
        j = o.useRef(null),
        [p, N] = o.useState(null),
        R = o.useRef(new s.qA()),
        k = (0, l.e7)([c.Z], () => c.Z.useReducedMotion),
        y = (null == (n = m.userStatus) ? void 0 : n.claimedAt) != null,
        [B, I] = o.useState(y ? "claimed" : "loading");
    o.useEffect(() => {
        if (!y) {
            let e = (0, C.zG)(m.config);
            (0, g.QB)(m.id, e, h)
                .then(() => I("claimed"))
                .catch(() => I("error"));
        }
    }, [m, h, y]);
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
                children: (0, a.jsx)(d.Y0X, {
                    "data-migration-pending": !0,
                    transitionState: t,
                    size: d.CgR.DYNAMIC,
                    className: i()(w.rootContainer, { [w.rootContainerLoading]: M }),
                    hideShadow: !0,
                    parentComponent: "QuestsRewardInGameModal",
                    children: M
                        ? (0, a.jsx)(d.$jN, { type: d.$jN.Type.SPINNING_CIRCLE })
                        : "error" === B
                          ? (0, a.jsx)(f.Z, { onClose: r })
                          : (0, a.jsx)(A, {
                                quest: m,
                                rewardName: _.messages.name,
                                location: h,
                                useReducedMotion: k,
                                onClose: r,
                                sourceQuestContent: x,
                            }),
                }),
            }),
            !k &&
                !y &&
                "claimed" === B &&
                (0, a.jsx)(u.Z, {
                    confettiTarget: j.current,
                    confettiCanvas: p,
                    sprites: v.CA,
                    colors: v.Br,
                }),
        ],
    });
}
function A(e) {
    let { quest: n, rewardName: t, location: r, useReducedMotion: i, onClose: s, sourceQuestContent: l } = e,
        c = o.useMemo(() => (0, _.fh)(n, _.eC.HERO), [n]),
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
                                    location: p.dr.INGAME_REWARD_MODAL,
                                    sourceQuestContent: l,
                                }),
                            }),
                            (0, a.jsx)(d.olH, {
                                "data-migration-pending": !0,
                                className: w.close,
                                withCircleBackground: !0,
                                onClick: s,
                            }),
                        ],
                    }),
                ],
            }),
            (0, a.jsx)(d.mzw, {
                "data-migration-pending": !0,
                className: w.footerContainer,
                separator: !1,
                children: (0, a.jsxs)("div", {
                    className: w.gradient,
                    children: [
                        (0, a.jsx)(d.Heading, {
                            variant: "heading-lg/bold",
                            color: "always-white",
                            className: w.heading,
                            children: N.intl.string(N.t["0/Yz+Y"]),
                        }),
                        (0, a.jsx)(d.Text, {
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
        l = o.useMemo(() => (0, C.K)(n.config), [n]);
    return null == l
        ? null
        : (0, a.jsx)(x.A, {
              questOrQuests: n,
              questContent: h.jn.REWARD_MODAL,
              sourceQuestContent: s,
              overrideVisibility: !0,
              children: () =>
                  (0, a.jsx)(R, {
                      onClose: r,
                      transitionState: i,
                      quest: n,
                      location: t,
                      reward: l,
                      sourceQuestContent: s,
                  }),
          });
}
