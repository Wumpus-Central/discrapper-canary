let n;
a.r(t),
    a.d(t, {
        WowMomentTypes: () => U,
        default: () => O,
    }),
    a(190126),
    a(368063),
    a(65234),
    a(111804),
    a(490233),
    a(97749),
    a(388685);
var i,
    c = a(54381),
    o = a(473749),
    d = a(120356),
    s = a.n(d),
    r = a(81239),
    p = a(442837),
    u = a(544891),
    M = a(481060),
    l = a(570140),
    m = a(607070),
    w = a(70097),
    _ = a(626135),
    E = a(526167),
    f = a(585483),
    h = a(960048),
    W = a(138464),
    T = a(438820),
    b = a(981631),
    I = a(372630),
    S = a(172625),
    g = a(45254),
    P = a(554560),
    y = a(177808),
    Z = a(739014),
    F = a(496059),
    U = (((i = {}).WUMPUS_FLIGHT = "wumpus_flight"), (i.GRADIENT_HIGHLIGHT = "gradient_highlight"), i);
async function C(e, t) {
    try {
        l.Z.dispatch({ type: "PURCHASED_ITEMS_FESTIVITY_IS_FETCHING_WOW_MOMENT_MEDIA" });
        let a = e ? S.Z : g.Z;
        window.matchMedia("(min-width: 1012px) and (max-width: 1980px)").matches ||
        window.matchMedia("(min-height: 720px) and (max-height: 1408px)").matches
            ? (a = e ? P.Z : y.Z)
            : (window.matchMedia("(min-width: 1980px)").matches || window.matchMedia("(min-height: 1408px)").matches) &&
              (a = e ? Z.Z : F.Z);
        let n = await u.tn.get({
                url: a,
                binary: !0,
                rejectWithError: !0,
            }),
            i = window.URL.createObjectURL(n.body);
        t(i),
            l.Z.dispatch({
                type: "PURCHASED_ITEMS_FESTIVITY_FETCH_WOW_MOMENT_MEDIA_SUCCESS",
                wumpusMedia: i,
            });
    } catch (e) {
        h.Z.captureException(e), l.Z.dispatch({ type: "PURCHASED_ITEMS_FESTIVITY_FETCH_WOW_MOMENT_MEDIA_FAILURE" });
    }
}
function H() {
    let e = (0, p.e7)([m.Z], () => m.Z.useReducedMotion),
        [t, a] = o.useState(null),
        { isFetchingMedia: i, canPlayWowMoment: d } = (0, p.cj)([T.Z], () => ({
            isFetchingMedia: T.Z.isFetchingWowMomentMedia,
            canPlayWowMoment: T.Z.canPlayWowMoment,
        })),
        [u, l] = o.useState(!1),
        h = (0, E.vu)(),
        S = (0, E.rO)(),
        g = h > 52 || -1 === h || S,
        P = S ? "video/mp4" : "video/webm",
        y = g && !e && d && null === t && !1 === i;
    o.useEffect(() => {
        y && C(S, a);
    }, [y, S, a]),
        o.useEffect(() => {
            function t() {
                !e &&
                    T.Z.canPlayWowMoment &&
                    (l(!0),
                    (n = setTimeout(() => {
                        l(!1),
                            F(!0),
                            _.default.track(b.rMx.PREMIUM_WOW_MOMENT_VIEWED, { wow_moment_type: "gradient_highlight" }),
                            (0, W.H)(!1);
                    }, 2000)));
            }
            return (
                f.S.subscribe(b.CkL.PREMIUM_SUBSCRIPTION_CREATED, t),
                () => {
                    f.S.unsubscribe(b.CkL.PREMIUM_SUBSCRIPTION_CREATED, t);
                }
            );
        }, [e, g]);
    let [Z, F] = o.useState(!1),
        [U, H] = o.useState(!1),
        O = (0, M.q_F)({
            opacity: 0.2 * !!Z,
            config: { duration: 100 },
        }),
        v = (0, M.q_F)(
            {
                x: U ? "100%" : "-100%",
                config: { duration: 500 },
            },
            U ? "respect-motion-settings" : "animate-never",
        );
    o.useEffect(() => {
        let e = -1;
        return (
            Z &&
                (e = window.setTimeout(() => {
                    H(!0);
                }, 1000)),
            () => {
                window.clearTimeout(e);
            }
        );
    }, [Z]),
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
    let x = u && null !== t,
        R = x || Z;
    return (0, c.jsxs)("div", {
        className: s()({
            [I.wrapper]: !R,
            [I.activeWrapper]: R,
        }),
        children: [
            x &&
                (0, c.jsx)(w.Z, {
                    autoPlay: !0,
                    className: I.videoWrapper,
                    onPlay: () => {
                        clearTimeout(n),
                            _.default.track(b.rMx.PREMIUM_WOW_MOMENT_VIEWED, { wow_moment_type: "wumpus_flight" });
                    },
                    onEnded: () => {
                        l(!1), (0, W.H)(!1), window.URL.revokeObjectURL(t), a(null);
                    },
                    children: (0, c.jsx)("source", {
                        src: t,
                        type: P,
                    }),
                }),
            (0, c.jsx)(r.animated.div, {
                className: I.gadientHighlight,
                style: O,
            }),
            (0, c.jsx)(r.animated.div, {
                className: I.swipeWrapper,
                style: v,
                children: (0, c.jsxs)("svg", {
                    className: I.swipe,
                    viewBox: "0 0 848 1024",
                    fill: "none",
                    children: [
                        (0, c.jsx)("path", {
                            d: "M257.206 1024L0 0H341.333L598.539 1024H257.206Z",
                            fill: "white",
                        }),
                        (0, c.jsx)("path", {
                            d: "M847.975 1024H690.436L433.231 0H590.769L847.975 1024Z",
                            fill: "white",
                        }),
                    ],
                }),
            }),
        ],
    });
}
let O = function () {
    return (0, p.e7)([T.Z], () => T.Z.canPlayWowMoment) ? (0, c.jsx)(H, {}) : null;
};
