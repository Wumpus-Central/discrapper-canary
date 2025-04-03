n.d(a, { default: () => S }), n(47120);
var r = n(200651),
    t = n(192379),
    o = n(120356),
    d = n.n(o),
    s = n(48026),
    i = n(442837),
    l = n(481060),
    c = n(607070),
    u = n(530618),
    h = n(70097),
    C = n(272008),
    m = n(497505),
    g = n(918701),
    f = n(475595),
    x = n(566078),
    N = n(644646),
    j = n(114732),
    _ = n(46140),
    v = n(675654),
    w = n(388032),
    p = n(502896);
function R(e) {
    var a;
    let { transitionState: n, onClose: o, quest: h, location: g, reward: N } = e,
        _ = t.useRef(null),
        [w, R] = t.useState(null),
        S = t.useRef(new s.qA()),
        y = (0, i.e7)([c.Z], () => c.Z.useReducedMotion),
        A = t.useMemo(() => (0, f.fh)(h, f.eC.HERO), [h]),
        M = (null == (a = h.userStatus) ? void 0 : a.claimedAt) != null,
        [T, q] = t.useState(M ? 'claimed' : 'loading');
    t.useEffect(() => {
        if (!M) {
            let e = x.r.build(h.config),
                a = e.rewardPlatforms.length > 0 ? e.rewardPlatforms[0] : m.y$.CROSS_PLATFORM;
            (0, C.QB)(h.id, a, g)
                .then(() => q('claimed'))
                .catch(() => q('error'));
        }
    }, [h, g, M]);
    let B = 'loading' === T;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(s.O_, {
                ref: R,
                className: p.confettiCanvas,
                environment: S.current
            }),
            (0, r.jsx)('div', {
                ref: _,
                children: (0, r.jsx)(l.Y0X, {
                    transitionState: n,
                    size: l.CgR.DYNAMIC,
                    className: d()(p.rootContainer, { [p.rootContainerLoading]: B }),
                    hideShadow: !0,
                    children: B
                        ? (0, r.jsx)(l.$jN, { type: l.$jN.Type.SPINNING_CIRCLE })
                        : 'error' === T
                          ? (0, r.jsx)(j.Z, { onClose: o })
                          : (0, r.jsx)(k, {
                                quest: h,
                                rewardName: N.messages.name,
                                backgroundUrl: A.url,
                                location: g,
                                onClose: o
                            })
                })
            }),
            !y &&
                !M &&
                'claimed' === T &&
                (0, r.jsx)(u.Z, {
                    confettiTarget: _.current,
                    confettiCanvas: w,
                    sprites: v.CA,
                    colors: v.Br
                })
        ]
    });
}
function k(e) {
    let { quest: a, rewardName: n, backgroundUrl: t, location: o, onClose: d } = e;
    return (0, r.jsxs)('div', {
        className: p.claimedRootContainer,
        children: [
            (0, r.jsxs)('div', {
                className: p.headerContainer,
                children: [
                    (0, r.jsx)(h.Z, {
                        className: p.headerBackground,
                        autoPlay: !1,
                        loop: !1,
                        muted: !0,
                        playsInline: !0,
                        controls: !1,
                        poster: t
                    }),
                    (0, r.jsxs)('div', {
                        className: p.headerForeground,
                        children: [
                            (0, r.jsx)('div', {
                                className: p.previewContainer,
                                children: (0, r.jsx)(N.Z, {
                                    autoplay: !0,
                                    className: p.rewardTile,
                                    learnMoreStyle: null,
                                    quest: a,
                                    questContent: o,
                                    location: _.dr.INGAME_REWARD_MODAL
                                })
                            }),
                            (0, r.jsx)(l.olH, {
                                className: p.close,
                                withCircleBackground: !0,
                                onClick: d
                            })
                        ]
                    })
                ]
            }),
            (0, r.jsx)(l.mzw, {
                className: p.footerContainer,
                separator: !1,
                children: (0, r.jsxs)('div', {
                    className: p.gradient,
                    children: [
                        (0, r.jsx)(l.X6q, {
                            variant: 'heading-lg/bold',
                            color: 'always-white',
                            className: p.heading,
                            children: w.NW.string(w.t['0/Yz+f'])
                        }),
                        (0, r.jsx)(l.Text, {
                            variant: 'text-sm/normal',
                            color: 'always-white',
                            className: p.text,
                            children: w.NW.format(w.t['v1u/zs'], { rewardName: n })
                        })
                    ]
                })
            })
        ]
    });
}
function S(e) {
    let { quest: a, location: n, onClose: o, transitionState: d } = e,
        s = t.useMemo(() => (0, g.K)(a.config), [a]);
    return null == s
        ? null
        : (0, r.jsx)(R, {
              onClose: o,
              transitionState: d,
              quest: a,
              location: n,
              reward: s
          });
}
