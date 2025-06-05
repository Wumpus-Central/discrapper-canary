a.d(n, { default: () => y }), a(388685);
var t = a(255367),
    r = a(73800),
    o = a(120356),
    i = a.n(o),
    s = a(505266),
    d = a(442837),
    l = a(481060),
    c = a(607070),
    u = a(530618),
    h = a(70097),
    m = a(272008),
    C = a(497505),
    f = a(918701),
    g = a(475595),
    x = a(566078),
    j = a(602667),
    v = a(644646),
    _ = a(114732),
    p = a(46140),
    w = a(675654),
    N = a(388032),
    R = a(502896);
function A(e) {
    var n;
    let { transitionState: a, onClose: o, quest: h, location: f, reward: g } = e,
        j = r.useRef(null),
        [v, p] = r.useState(null),
        N = r.useRef(new s.qA()),
        A = (0, d.e7)([c.Z], () => c.Z.useReducedMotion),
        y = (null == (n = h.userStatus) ? void 0 : n.claimedAt) != null,
        [S, k] = r.useState(y ? 'claimed' : 'loading');
    r.useEffect(() => {
        if (!y) {
            let e = x.r.build(h.config),
                n = e.rewardPlatforms.length > 0 ? e.rewardPlatforms[0] : C.y$.CROSS_PLATFORM;
            (0, m.QB)(h.id, n, f)
                .then(() => k('claimed'))
                .catch(() => k('error'));
        }
    }, [h, f, y]);
    let q = 'loading' === S;
    return (0, t.jsxs)(t.Fragment, {
        children: [
            (0, t.jsx)(s.O_, {
                ref: p,
                className: R.confettiCanvas,
                environment: N.current
            }),
            (0, t.jsx)('div', {
                ref: j,
                children: (0, t.jsx)(l.Y0X, {
                    transitionState: a,
                    size: l.CgR.DYNAMIC,
                    className: i()(R.rootContainer, { [R.rootContainerLoading]: q }),
                    hideShadow: !0,
                    parentComponent: 'QuestsRewardInGameModal',
                    children: q
                        ? (0, t.jsx)(l.$jN, { type: l.$jN.Type.SPINNING_CIRCLE })
                        : 'error' === S
                          ? (0, t.jsx)(_.Z, { onClose: o })
                          : (0, t.jsx)(M, {
                                quest: h,
                                rewardName: g.messages.name,
                                location: f,
                                useReducedMotion: A,
                                onClose: o
                            })
                })
            }),
            !A &&
                !y &&
                'claimed' === S &&
                (0, t.jsx)(u.Z, {
                    confettiTarget: j.current,
                    confettiCanvas: v,
                    sprites: w.CA,
                    colors: w.Br
                })
        ]
    });
}
function M(e) {
    let { quest: n, rewardName: a, location: o, useReducedMotion: i, onClose: s } = e,
        d = r.useMemo(() => (0, g.fh)(n, g.eC.HERO), [n]),
        c = d.isAnimated && !i;
    return (0, t.jsxs)('div', {
        className: R.claimedRootContainer,
        children: [
            (0, t.jsxs)('div', {
                className: R.headerContainer,
                children: [
                    (0, t.jsx)(h.Z, {
                        className: R.headerBackground,
                        autoPlay: c,
                        loop: c,
                        muted: !0,
                        playsInline: !0,
                        controls: !1,
                        poster: d.isAnimated ? void 0 : d.url,
                        src: d.isAnimated ? d.url : void 0
                    }),
                    (0, t.jsxs)('div', {
                        className: R.headerForeground,
                        children: [
                            (0, t.jsx)('div', {
                                className: R.previewContainer,
                                children: (0, t.jsx)(v.Z, {
                                    autoplay: !0,
                                    className: R.rewardTile,
                                    learnMoreStyle: null,
                                    quest: n,
                                    questContent: o,
                                    location: p.dr.INGAME_REWARD_MODAL
                                })
                            }),
                            (0, t.jsx)(l.olH, {
                                className: R.close,
                                withCircleBackground: !0,
                                onClick: s
                            })
                        ]
                    })
                ]
            }),
            (0, t.jsx)(l.mzw, {
                className: R.footerContainer,
                separator: !1,
                children: (0, t.jsxs)('div', {
                    className: R.gradient,
                    children: [
                        (0, t.jsx)(l.X6q, {
                            variant: 'heading-lg/bold',
                            color: 'always-white',
                            className: R.heading,
                            children: N.intl.string(N.t['0/Yz+f'])
                        }),
                        (0, t.jsx)(l.Text, {
                            variant: 'text-sm/normal',
                            color: 'always-white',
                            className: R.text,
                            children: N.intl.format(N.t['v1u/zs'], { rewardName: a })
                        })
                    ]
                })
            })
        ]
    });
}
function y(e) {
    let { quest: n, location: a, onClose: o, transitionState: i } = e,
        s = r.useMemo(() => (0, f.K)(n.config), [n]);
    return null == s
        ? null
        : (0, t.jsx)(j.A, {
              questOrQuests: n,
              questContent: C.jn.REWARD_MODAL,
              overrideVisibility: !0,
              children: () =>
                  (0, t.jsx)(A, {
                      onClose: o,
                      transitionState: i,
                      quest: n,
                      location: a,
                      reward: s
                  })
          });
}
