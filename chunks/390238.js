(t.d(n, { default: () => y }), t(388685));
var a = t(255367),
    r = t(73800),
    o = t(120356),
    s = t.n(o),
    i = t(505266),
    d = t(442837),
    l = t(481060),
    c = t(607070),
    u = t(530618),
    C = t(70097),
    h = t(509212),
    m = t(272008),
    f = t(497505),
    g = t(475595),
    x = t(566078),
    j = t(602667),
    v = t(644646),
    _ = t(114732),
    p = t(46140),
    w = t(675654),
    N = t(388032),
    R = t(502896);
function A(e) {
    var n;
    let { transitionState: t, onClose: o, quest: C, location: h, reward: g, sourceQuestContent: j } = e,
        v = r.useRef(null),
        [p, N] = r.useState(null),
        A = r.useRef(new i.qA()),
        y = (0, d.e7)([c.Z], () => c.Z.useReducedMotion),
        S = (null == (n = C.userStatus) ? void 0 : n.claimedAt) != null,
        [k, q] = r.useState(S ? 'claimed' : 'loading');
    r.useEffect(() => {
        if (!S) {
            let e = x.r.build(C.config),
                n = e.rewardPlatforms.length > 0 ? e.rewardPlatforms[0] : f.y$.CROSS_PLATFORM;
            (0, m.QB)(C.id, n, h)
                .then(() => q('claimed'))
                .catch(() => q('error'));
        }
    }, [C, h, S]);
    let I = 'loading' === k;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(i.O_, {
                ref: N,
                className: R.confettiCanvas,
                environment: A.current
            }),
            (0, a.jsx)('div', {
                ref: v,
                children: (0, a.jsx)(l.Y0X, {
                    transitionState: t,
                    size: l.CgR.DYNAMIC,
                    className: s()(R.rootContainer, { [R.rootContainerLoading]: I }),
                    hideShadow: !0,
                    parentComponent: 'QuestsRewardInGameModal',
                    children: I
                        ? (0, a.jsx)(l.$jN, { type: l.$jN.Type.SPINNING_CIRCLE })
                        : 'error' === k
                          ? (0, a.jsx)(_.Z, { onClose: o })
                          : (0, a.jsx)(M, {
                                quest: C,
                                rewardName: g.messages.name,
                                location: h,
                                useReducedMotion: y,
                                onClose: o,
                                sourceQuestContent: j
                            })
                })
            }),
            !y &&
                !S &&
                'claimed' === k &&
                (0, a.jsx)(u.Z, {
                    confettiTarget: v.current,
                    confettiCanvas: p,
                    sprites: w.CA,
                    colors: w.Br
                })
        ]
    });
}
function M(e) {
    let { quest: n, rewardName: t, location: o, useReducedMotion: s, onClose: i, sourceQuestContent: d } = e,
        c = r.useMemo(() => (0, g.fh)(n, g.eC.HERO), [n]),
        u = c.isAnimated && !s;
    return (0, a.jsxs)('div', {
        className: R.claimedRootContainer,
        children: [
            (0, a.jsxs)('div', {
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
                        src: c.isAnimated ? c.url : void 0
                    }),
                    (0, a.jsxs)('div', {
                        className: R.headerForeground,
                        children: [
                            (0, a.jsx)('div', {
                                className: R.previewContainer,
                                children: (0, a.jsx)(v.Z, {
                                    autoplay: !0,
                                    className: R.rewardTile,
                                    learnMoreStyle: null,
                                    quest: n,
                                    questContent: o,
                                    location: p.dr.INGAME_REWARD_MODAL,
                                    sourceQuestContent: d
                                })
                            }),
                            (0, a.jsx)(l.olH, {
                                className: R.close,
                                withCircleBackground: !0,
                                onClick: i
                            })
                        ]
                    })
                ]
            }),
            (0, a.jsx)(l.mzw, {
                className: R.footerContainer,
                separator: !1,
                children: (0, a.jsxs)('div', {
                    className: R.gradient,
                    children: [
                        (0, a.jsx)(l.X6q, {
                            variant: 'heading-lg/bold',
                            color: 'always-white',
                            className: R.heading,
                            children: N.intl.string(N.t['0/Yz+f'])
                        }),
                        (0, a.jsx)(l.Text, {
                            variant: 'text-sm/normal',
                            color: 'always-white',
                            className: R.text,
                            children: N.intl.format(N.t['v1u/zs'], { rewardName: t })
                        })
                    ]
                })
            })
        ]
    });
}
function y(e) {
    let { quest: n, location: t, onClose: o, transitionState: s, sourceQuestContent: i } = e,
        d = r.useMemo(() => (0, h.K)(n.config), [n]);
    return null == d
        ? null
        : (0, a.jsx)(j.A, {
              questOrQuests: n,
              questContent: f.jn.REWARD_MODAL,
              sourceQuestContent: i,
              overrideVisibility: !0,
              children: () =>
                  (0, a.jsx)(A, {
                      onClose: o,
                      transitionState: s,
                      quest: n,
                      location: t,
                      reward: d,
                      sourceQuestContent: i
                  })
          });
}
