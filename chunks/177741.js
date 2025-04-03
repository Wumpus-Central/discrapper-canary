let n;
a.r(t),
    a.d(t, {
        WowMomentTypes: () => U,
        default: () => O
    }),
    a(315314),
    a(309749),
    a(610138),
    a(216116),
    a(78328),
    a(815648),
    a(47120);
var i,
    c = a(200651),
    o = a(192379),
    s = a(120356),
    d = a.n(s),
    r = a(642128),
    p = a(442837),
    M = a(544891),
    u = a(481060),
    l = a(570140),
    _ = a(607070),
    m = a(70097),
    w = a(626135),
    E = a(526167),
    h = a(585483),
    f = a(960048),
    W = a(138464),
    T = a(438820),
    I = a(981631),
    S = a(859581),
    g = a(426401),
    b = a(926734),
    P = a(601046),
    Z = a(421391),
    y = a(153911),
    F = a(588369),
    U = (((i = {}).WUMPUS_FLIGHT = 'wumpus_flight'), (i.GRADIENT_HIGHLIGHT = 'gradient_highlight'), i);
async function C(e, t) {
    try {
        l.Z.dispatch({ type: 'PURCHASED_ITEMS_FESTIVITY_IS_FETCHING_WOW_MOMENT_MEDIA' });
        let a = e ? g.Z : b.Z;
        window.matchMedia('(min-width: 1012px) and (max-width: 1980px)').matches || window.matchMedia('(min-height: 720px) and (max-height: 1408px)').matches ? (a = e ? P.Z : Z.Z) : (window.matchMedia('(min-width: 1980px)').matches || window.matchMedia('(min-height: 1408px)').matches) && (a = e ? y.Z : F.Z);
        let n = await M.tn.get({
                url: a,
                binary: !0,
                rejectWithError: !0
            }),
            i = window.URL.createObjectURL(n.body);
        t(i),
            l.Z.dispatch({
                type: 'PURCHASED_ITEMS_FESTIVITY_FETCH_WOW_MOMENT_MEDIA_SUCCESS',
                wumpusMedia: i
            });
    } catch (e) {
        f.Z.captureException(e), l.Z.dispatch({ type: 'PURCHASED_ITEMS_FESTIVITY_FETCH_WOW_MOMENT_MEDIA_FAILURE' });
    }
}
function H() {
    let e = (0, p.e7)([_.Z], () => _.Z.useReducedMotion),
        [t, a] = o.useState(null),
        { isFetchingMedia: i, canPlayWowMoment: s } = (0, p.cj)([T.Z], () => ({
            isFetchingMedia: T.Z.isFetchingWowMomentMedia,
            canPlayWowMoment: T.Z.canPlayWowMoment
        })),
        [M, l] = o.useState(!1),
        f = (0, E.vu)(),
        g = (0, E.rO)(),
        b = f > 52 || -1 === f || g,
        P = g ? 'video/mp4' : 'video/webm',
        Z = b && !e && s && null === t && !1 === i;
    o.useEffect(() => {
        Z && C(g, a);
    }, [Z, g, a]),
        o.useEffect(() => {
            function t() {
                !e &&
                    T.Z.canPlayWowMoment &&
                    (l(!0),
                    (n = setTimeout(() => {
                        l(!1), F(!0), w.default.track(I.rMx.PREMIUM_WOW_MOMENT_VIEWED, { wow_moment_type: 'gradient_highlight' }), (0, W.H)(!1);
                    }, 2000)));
            }
            return (
                h.S.subscribe(I.CkL.PREMIUM_SUBSCRIPTION_CREATED, t),
                () => {
                    h.S.unsubscribe(I.CkL.PREMIUM_SUBSCRIPTION_CREATED, t);
                }
            );
        }, [e, b]);
    let [y, F] = o.useState(!1),
        [U, H] = o.useState(!1),
        O = (0, u.q_F)({
            opacity: 0.2 * !!y,
            config: { duration: 100 }
        }),
        x = (0, u.q_F)(
            {
                x: U ? '100%' : '-100%',
                config: { duration: 500 }
            },
            U ? 'respect-motion-settings' : 'animate-never'
        );
    o.useEffect(() => {
        let e = -1;
        return (
            y &&
                (e = window.setTimeout(() => {
                    H(!0);
                }, 1000)),
            () => {
                window.clearTimeout(e);
            }
        );
    }, [y]),
        o.useEffect(() => {
            let e = -1;
            return (
                U &&
                    (e = window.setTimeout(() => {
                        H(!1), F(!1);
                    }, 1000)),
                () => {
                    window.clearTimeout(e);
                }
            );
        }, [U]);
    let v = M && null !== t,
        R = v || y;
    return (0, c.jsxs)('div', {
        className: d()({
            [S.wrapper]: !R,
            [S.activeWrapper]: R
        }),
        children: [
            v &&
                (0, c.jsx)(m.Z, {
                    autoPlay: !0,
                    className: S.videoWrapper,
                    onPlay: () => {
                        clearTimeout(n), w.default.track(I.rMx.PREMIUM_WOW_MOMENT_VIEWED, { wow_moment_type: 'wumpus_flight' });
                    },
                    onEnded: () => {
                        l(!1), (0, W.H)(!1), window.URL.revokeObjectURL(t), a(null);
                    },
                    children: (0, c.jsx)('source', {
                        src: t,
                        type: P
                    })
                }),
            (0, c.jsx)(r.animated.div, {
                className: S.gadientHighlight,
                style: O
            }),
            (0, c.jsx)(r.animated.div, {
                className: S.swipeWrapper,
                style: x,
                children: (0, c.jsxs)('svg', {
                    className: S.swipe,
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
let O = function () {
    return (0, p.e7)([T.Z], () => T.Z.canPlayWowMoment) ? (0, c.jsx)(H, {}) : null;
};
