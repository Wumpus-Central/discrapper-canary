a.d(n, { default: () => M }), a(388685);
var t = a(200651),
    r = a(192379),
    o = a(120356),
    i = a.n(o),
    s = a(995899),
    d = a(442837),
    l = a(481060),
    c = a(607070),
    u = a(530618),
    h = a(70097),
    C = a(272008),
    m = a(497505),
    f = a(918701),
    g = a(475595),
    x = a(566078),
    j = a(602667),
    v = a(644646),
    _ = a(114732),
    N = a(46140),
    w = a(675654),
    p = a(388032),
    R = a(502896);
function A(e) {
    var n;
    let { transitionState: a, onClose: o, quest: h, location: f, reward: g } = e,
        j = r.useRef(null),
        [v, N] = r.useState(null),
        p = r.useRef(new s.qA()),
        A = (0, d.e7)([c.Z], () => c.Z.useReducedMotion),
        M = (null == (n = h.userStatus) ? void 0 : n.claimedAt) != null,
        [S, k] = r.useState(M ? 'claimed' : 'loading');
    r.useEffect(() => {
        if (!M) {
            let e = x.r.build(h.config),
                n = e.rewardPlatforms.length > 0 ? e.rewardPlatforms[0] : m.y$.CROSS_PLATFORM;
            (0, C.QB)(h.id, n, f)
                .then(() => k('claimed'))
                .catch(() => k('error'));
        }
    }, [h, f, M]);
    let q = 'loading' === S;
    return (0, t.jsxs)(t.Fragment, {
        children: [
            (0, t.jsx)(s.O_, {
                ref: N,
                className: R.confettiCanvas,
                environment: p.current
            }),
            (0, t.jsx)('div', {
                ref: j,
                children: (0, t.jsx)(l.Y0X, {
                    transitionState: a,
                    size: l.CgR.DYNAMIC,
                    className: i()(R.rootContainer, { [R.rootContainerLoading]: q }),
                    hideShadow: !0,
                    children: q
                        ? (0, t.jsx)(l.$jN, { type: l.$jN.Type.SPINNING_CIRCLE })
                        : 'error' === S
                          ? (0, t.jsx)(_.Z, { onClose: o })
                          : (0, t.jsx)(y, {
                                quest: h,
                                rewardName: g.messages.name,
                                location: f,
                                useReducedMotion: A,
                                onClose: o
                            })
                })
            }),
            !A &&
                !M &&
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
function y(e) {
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
                                    location: N.dr.INGAME_REWARD_MODAL
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
                            children: p.intl.string(p.t['0/Yz+f'])
                        }),
                        (0, t.jsx)(l.Text, {
                            variant: 'text-sm/normal',
                            color: 'always-white',
                            className: R.text,
                            children: p.intl.format(p.t['v1u/zs'], { rewardName: a })
                        })
                    ]
                })
            })
        ]
    });
}
function M(e) {
    let { quest: n, location: a, onClose: o, transitionState: i } = e,
        s = r.useMemo(() => (0, f.K)(n.config), [n]);
    return null == s
        ? null
        : (0, t.jsx)(j.A, {
              questOrQuests: n,
              questContent: m.jn.REWARD_MODAL,
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
