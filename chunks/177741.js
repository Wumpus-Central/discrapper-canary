let a;
n.r(t),
    n.d(t, {
        WowMomentTypes: () => O,
        default: () => R
    }),
    n(315314),
    n(309749),
    n(610138),
    n(216116),
    n(78328),
    n(815648),
    n(47120);
var i,
    o = n(200651),
    c = n(192379),
    d = n(120356),
    s = n.n(d),
    r = n(642128),
    l = n(442837),
    m = n(544891),
    u = n(481060),
    _ = n(570140),
    M = n(607070),
    p = n(70097),
    w = n(626135),
    E = n(526167),
    f = n(585483),
    h = n(960048),
    W = n(138464),
    T = n(438820),
    I = n(553300),
    b = n(949772),
    S = n(981631),
    g = n(236029),
    P = n(426401),
    Z = n(926734),
    y = n(601046),
    C = n(421391),
    F = n(153911),
    U = n(588369),
    O = (((i = {}).WUMPUS_FLIGHT = 'wumpus_flight'), (i.GRADIENT_HIGHLIGHT = 'gradient_highlight'), i);
async function x(e, t) {
    try {
        _.Z.dispatch({ type: 'PURCHASED_ITEMS_FESTIVITY_IS_FETCHING_WOW_MOMENT_MEDIA' });
        let n = 1012,
            a = e ? P.Z : Z.Z;
        window.matchMedia('(min-width: 1012px) and (max-width: 1980px)').matches || window.matchMedia('(min-height: 720px) and (max-height: 1408px)').matches ? ((n = 1980), (a = e ? y.Z : C.Z)) : (window.matchMedia('(min-width: 1980px)').matches || window.matchMedia('(min-height: 1408px)').matches) && ((n = 2880), (a = e ? F.Z : U.Z));
        let { enabled: i } = b.Z.getCurrentConfig({ location: 'PremiumSubscriptionWowMoment.prefetch' }, { autoTrackExposure: !1 });
        i && w.default.track(S.rMx.PREMIUM_WOW_MOMENT_MEDIA_PREFETCH_TRIGGER, { client_width: n });
        let o = await m.tn.get({
                url: a,
                binary: !0,
                rejectWithError: !0
            }),
            c = window.URL.createObjectURL(o.body);
        t(c),
            _.Z.dispatch({
                type: 'PURCHASED_ITEMS_FESTIVITY_FETCH_WOW_MOMENT_MEDIA_SUCCESS',
                wumpusMedia: c
            });
    } catch (e) {
        h.Z.captureException(e), _.Z.dispatch({ type: 'PURCHASED_ITEMS_FESTIVITY_FETCH_WOW_MOMENT_MEDIA_FAILURE' });
    }
}
function H() {
    let e = (0, l.e7)([M.Z], () => M.Z.useReducedMotion),
        [t, n] = c.useState(null),
        { isFetchingMedia: i, canPlayWowMoment: d } = (0, l.cj)([T.Z], () => ({
            isFetchingMedia: T.Z.isFetchingWowMomentMedia,
            canPlayWowMoment: T.Z.canPlayWowMoment
        })),
        [m, _] = c.useState(!1),
        h = (0, E.vu)(),
        I = (0, E.rO)(),
        b = h > 52 || -1 === h || I,
        P = I ? 'video/mp4' : 'video/webm',
        Z = b && !e && d && null === t && !1 === i;
    c.useEffect(() => {
        Z && x(I, n);
    }, [Z, I, n]),
        c.useEffect(() => {
            function t() {
                !e &&
                    T.Z.canPlayWowMoment &&
                    (_(!0),
                    (a = setTimeout(() => {
                        _(!1), C(!0), w.default.track(S.rMx.PREMIUM_WOW_MOMENT_VIEWED, { wow_moment_type: 'gradient_highlight' }), (0, W.H)(!1);
                    }, 2000)));
            }
            return (
                f.S.subscribe(S.CkL.PREMIUM_SUBSCRIPTION_CREATED, t),
                () => {
                    f.S.unsubscribe(S.CkL.PREMIUM_SUBSCRIPTION_CREATED, t);
                }
            );
        }, [e, b]);
    let [y, C] = c.useState(!1),
        [F, U] = c.useState(!1),
        O = (0, u.q_F)({
            opacity: y ? 0.2 : 0,
            config: { duration: 100 }
        }),
        H = (0, u.q_F)(
            {
                x: F ? '100%' : '-100%',
                config: { duration: 500 }
            },
            F ? 'respect-motion-settings' : 'animate-never'
        );
    c.useEffect(() => {
        let e = -1;
        return (
            y &&
                (e = window.setTimeout(() => {
                    U(!0);
                }, 1000)),
            () => {
                window.clearTimeout(e);
            }
        );
    }, [y]),
        c.useEffect(() => {
            let e = -1;
            return (
                F &&
                    (e = window.setTimeout(() => {
                        U(!1), C(!1);
                    }, 1000)),
                () => {
                    window.clearTimeout(e);
                }
            );
        }, [F]);
    let R = m && null !== t,
        v = R || y;
    return (0, o.jsxs)('div', {
        className: s()({
            [g.wrapper]: !v,
            [g.activeWrapper]: v
        }),
        children: [
            R &&
                (0, o.jsx)(p.Z, {
                    autoPlay: !0,
                    className: g.videoWrapper,
                    onPlay: () => {
                        clearTimeout(a), w.default.track(S.rMx.PREMIUM_WOW_MOMENT_VIEWED, { wow_moment_type: 'wumpus_flight' });
                    },
                    onEnded: () => {
                        _(!1), (0, W.H)(!1), window.URL.revokeObjectURL(t), n(null);
                    },
                    children: (0, o.jsx)('source', {
                        src: t,
                        type: P
                    })
                }),
            (0, o.jsx)(r.animated.div, {
                className: g.gadientHighlight,
                style: O
            }),
            (0, o.jsx)(r.animated.div, {
                className: g.swipeWrapper,
                style: H,
                children: (0, o.jsxs)('svg', {
                    className: g.swipe,
                    viewBox: '0 0 848 1024',
                    fill: 'none',
                    children: [
                        (0, o.jsx)('path', {
                            d: 'M257.206 1024L0 0H341.333L598.539 1024H257.206Z',
                            fill: 'white'
                        }),
                        (0, o.jsx)('path', {
                            d: 'M847.975 1024H690.436L433.231 0H590.769L847.975 1024Z',
                            fill: 'white'
                        })
                    ]
                })
            })
        ]
    });
}
let R = function () {
    let { enabled: e } = I.Z.useExperiment({ location: 'PremiumSubscriptionWowMoment' });
    return e ? (0, o.jsx)(H, {}) : null;
};
