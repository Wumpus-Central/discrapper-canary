let a;
n.r(t),
    n.d(t, {
        WowMomentTypes: function () {
            return i;
        }
    }),
    n(315314),
    n(610138),
    n(216116),
    n(78328),
    n(815648),
    n(47120);
var i,
    o,
    c = n(200651),
    s = n(192379),
    d = n(120356),
    r = n.n(d),
    u = n(666912),
    m = n(442837),
    l = n(544891),
    p = n(481060),
    M = n(570140),
    _ = n(607070),
    w = n(70097),
    E = n(626135),
    f = n(526167),
    h = n(585483),
    W = n(960048),
    T = n(138464),
    I = n(438820),
    b = n(553300),
    S = n(949772),
    g = n(981631),
    P = n(236029),
    Z = n(426401),
    y = n(926734),
    C = n(601046),
    U = n(421391),
    F = n(153911),
    O = n(588369);
async function x(e, t) {
    try {
        M.Z.dispatch({ type: 'PURCHASED_ITEMS_FESTIVITY_IS_FETCHING_WOW_MOMENT_MEDIA' });
        let n = 1012,
            a = e ? Z.Z : y.Z;
        window.matchMedia('(min-width: 1012px) and (max-width: 1980px)').matches || window.matchMedia('(min-height: 720px) and (max-height: 1408px)').matches ? ((n = 1980), (a = e ? C.Z : U.Z)) : (window.matchMedia('(min-width: 1980px)').matches || window.matchMedia('(min-height: 1408px)').matches) && ((n = 2880), (a = e ? F.Z : O.Z));
        let { enabled: i } = S.Z.getCurrentConfig({ location: 'PremiumSubscriptionWowMoment.prefetch' }, { autoTrackExposure: !1 });
        i && E.default.track(g.rMx.PREMIUM_WOW_MOMENT_MEDIA_PREFETCH_TRIGGER, { client_width: n });
        let o = await l.tn.get({
                url: a,
                binary: !0,
                rejectWithError: !0
            }),
            c = window.URL.createObjectURL(o.body);
        t(c),
            M.Z.dispatch({
                type: 'PURCHASED_ITEMS_FESTIVITY_FETCH_WOW_MOMENT_MEDIA_SUCCESS',
                wumpusMedia: c
            });
    } catch (e) {
        W.Z.captureException(e), M.Z.dispatch({ type: 'PURCHASED_ITEMS_FESTIVITY_FETCH_WOW_MOMENT_MEDIA_FAILURE' });
    }
}
function H() {
    let e = (0, m.e7)([_.Z], () => _.Z.useReducedMotion),
        [t, n] = s.useState(null),
        { isFetchingMedia: i, canPlayWowMoment: o } = (0, m.cj)([I.Z], () => ({
            isFetchingMedia: I.Z.isFetchingWowMomentMedia,
            canPlayWowMoment: I.Z.canPlayWowMoment
        })),
        [d, l] = s.useState(!1),
        M = (0, f.vu)(),
        W = (0, f.rO)(),
        b = M > 52 || -1 === M || W,
        S = W ? 'video/mp4' : 'video/webm',
        Z = b && !e && o && null === t && !1 === i;
    s.useEffect(() => {
        Z && x(W, n);
    }, [Z, W, n]),
        s.useEffect(() => {
            function t() {
                !e &&
                    I.Z.canPlayWowMoment &&
                    (l(!0),
                    (a = setTimeout(() => {
                        l(!1), C(!0), E.default.track(g.rMx.PREMIUM_WOW_MOMENT_VIEWED, { wow_moment_type: 'gradient_highlight' }), (0, T.H)(!1);
                    }, 2000)));
            }
            return (
                h.S.subscribe(g.CkL.PREMIUM_SUBSCRIPTION_CREATED, t),
                () => {
                    h.S.unsubscribe(g.CkL.PREMIUM_SUBSCRIPTION_CREATED, t);
                }
            );
        }, [e, b]);
    let [y, C] = s.useState(!1),
        [U, F] = s.useState(!1),
        O = (0, p.useSpring)({
            opacity: y ? 0.2 : 0,
            config: { duration: 100 }
        }),
        H = (0, p.useSpring)(
            {
                x: U ? '100%' : '-100%',
                config: { duration: 500 }
            },
            U ? 'respect-motion-settings' : 'animate-never'
        );
    s.useEffect(() => {
        let e = -1;
        return (
            y &&
                (e = window.setTimeout(() => {
                    F(!0);
                }, 1000)),
            () => {
                window.clearTimeout(e);
            }
        );
    }, [y]),
        s.useEffect(() => {
            let e = -1;
            return (
                U &&
                    (e = window.setTimeout(() => {
                        F(!1), C(!1);
                    }, 1000)),
                () => {
                    window.clearTimeout(e);
                }
            );
        }, [U]);
    let R = d && null !== t,
        v = R || y;
    return (0, c.jsxs)('div', {
        className: r()({
            [P.wrapper]: !v,
            [P.activeWrapper]: v
        }),
        children: [
            R &&
                (0, c.jsx)(w.Z, {
                    autoPlay: !0,
                    className: P.videoWrapper,
                    onPlay: () => {
                        clearTimeout(a), E.default.track(g.rMx.PREMIUM_WOW_MOMENT_VIEWED, { wow_moment_type: 'wumpus_flight' });
                    },
                    onEnded: () => {
                        l(!1), (0, T.H)(!1), window.URL.revokeObjectURL(t), n(null);
                    },
                    children: (0, c.jsx)('source', {
                        src: t,
                        type: S
                    })
                }),
            (0, c.jsx)(u.animated.div, {
                className: P.gadientHighlight,
                style: O
            }),
            (0, c.jsx)(u.animated.div, {
                className: P.swipeWrapper,
                style: H,
                children: (0, c.jsxs)('svg', {
                    className: P.swipe,
                    viewBox: '0 0 848 1024',
                    fill: 'none',
                    children: [
                        (0, c.jsx)('path', {
                            d: 'M257.206 1024L0 0H341.333L598.539 1024H257.206Z',
                            fill: 'white'
                        }),
                        (0, c.jsx)('path', {
                            d: 'M847.975 1024H690.436L433.231 0H590.769L847.975 1024Z',
                            fill: 'white'
                        })
                    ]
                })
            })
        ]
    });
}
((o = i || (i = {})).WUMPUS_FLIGHT = 'wumpus_flight'), (o.GRADIENT_HIGHLIGHT = 'gradient_highlight');
t.default = function () {
    let { enabled: e } = b.Z.useExperiment({ location: 'PremiumSubscriptionWowMoment' });
    return e ? (0, c.jsx)(H, {}) : null;
};
