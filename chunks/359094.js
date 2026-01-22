let n;
a.r(t),
    a.d(t, {
        WowMomentTypes: () => F,
        default: () => H,
    }),
    a(896048),
    a(693327),
    a(554719),
    a(680155),
    a(323874),
    a(14289),
    a(35956);
var i,
    c = a(627968),
    o = a(64700),
    d = a(503698),
    s = a.n(d),
    M = a(108531),
    l = a(311907),
    m = a(562465),
    u = a(397927),
    _ = a(73153),
    r = a(775602),
    w = a(607470),
    E = a(954571),
    h = a(676279),
    p = a(203982),
    f = a(728458),
    T = a(598653),
    I = a(639735),
    A = a(652215),
    W = a(427800),
    b = a(666642),
    S = a(951091),
    y = a(475158),
    g = a(239871),
    P = a(941182),
    U = a(925191),
    F = (((i = {}).WUMPUS_FLIGHT = "wumpus_flight"), (i.GRADIENT_HIGHLIGHT = "gradient_highlight"), i);
async function O(e, t) {
    try {
        _.h.dispatch({
            type: "PURCHASED_ITEMS_FESTIVITY_IS_FETCHING_WOW_MOMENT_MEDIA",
        });
        let a = e ? b.A : S.A;
        window.matchMedia("(min-width: 1012px) and (max-width: 1980px)").matches ||
        window.matchMedia("(min-height: 720px) and (max-height: 1408px)").matches
            ? (a = e ? y.A : g.A)
            : (window.matchMedia("(min-width: 1980px)").matches || window.matchMedia("(min-height: 1408px)").matches) &&
              (a = e ? P.A : U.A);
        let n = await m.Bo.get({
                url: a,
                binary: !0,
                rejectWithError: !0,
            }),
            i = window.URL.createObjectURL(n.body);
        t(i),
            _.h.dispatch({
                type: "PURCHASED_ITEMS_FESTIVITY_FETCH_WOW_MOMENT_MEDIA_SUCCESS",
                wumpusMedia: i,
            });
    } catch (e) {
        f.A.captureException(e),
            _.h.dispatch({
                type: "PURCHASED_ITEMS_FESTIVITY_FETCH_WOW_MOMENT_MEDIA_FAILURE",
            });
    }
}

function C() {
    let e = (0, l.bG)([r.A], () => r.A.useReducedMotion),
        [t, a] = o.useState(null),
        { isFetchingMedia: i, canPlayWowMoment: d } = (0, l.cf)([I.A], () => ({
            isFetchingMedia: I.A.isFetchingWowMomentMedia,
            canPlayWowMoment: I.A.canPlayWowMoment,
        })),
        [m, _] = o.useState(!1),
        f = (0, h.Z5)(),
        b = (0, h.TM)(),
        S = f > 52 || -1 === f || b,
        y = b ? "video/mp4" : "video/webm",
        g = S && !e && d && null === t && !1 === i;
    o.useEffect(() => {
        g && O(b, a);
    }, [g, b, a]),
        o.useEffect(() => {
            function t() {
                !e &&
                    I.A.canPlayWowMoment &&
                    (_(!0),
                    (n = setTimeout(() => {
                        _(!1),
                            U(!0),
                            E.default.track(A.HAw.PREMIUM_WOW_MOMENT_VIEWED, {
                                wow_moment_type: "gradient_highlight",
                            }),
                            (0, T.o)(!1);
                    }, 2e3)));
            }
            return (
                p._.subscribe(A.jej.PREMIUM_SUBSCRIPTION_CREATED, t),
                () => {
                    p._.unsubscribe(A.jej.PREMIUM_SUBSCRIPTION_CREATED, t);
                }
            );
        }, [e, S]);
    let [P, U] = o.useState(!1),
        [F, C] = o.useState(!1),
        H = (0, u.zhh)({
            opacity: 0.2 * !!P,
            config: {
                duration: 100,
            },
        }),
        N = (0, u.zhh)(
            {
                x: F ? "100%" : "-100%",
                config: {
                    duration: 500,
                },
            },
            F ? "respect-motion-settings" : "animate-never",
        );
    o.useEffect(() => {
        let e = -1;
        return (
            P &&
                (e = window.setTimeout(() => {
                    C(!0);
                }, 1e3)),
            () => {
                window.clearTimeout(e);
            }
        );
    }, [P]),
        o.useEffect(() => {
            let e = -1;
            return (
                F &&
                    (e = window.setTimeout(() => {
                        C(!1), U(!1);
                    }, 1e3)),
                () => {
                    window.clearTimeout(e);
                }
            );
        }, [F]);
    let R = m && null !== t,
        x = R || P;
    return (0, c.jsxs)("div", {
        className: s()({
            [W.iE]: !x,
            [W.iV]: x,
        }),
        children: [
            R &&
                (0, c.jsx)(w.A, {
                    autoPlay: !0,
                    className: W.tN,
                    onPlay: () => {
                        clearTimeout(n),
                            E.default.track(A.HAw.PREMIUM_WOW_MOMENT_VIEWED, {
                                wow_moment_type: "wumpus_flight",
                            });
                    },
                    onEnded: () => {
                        _(!1), (0, T.o)(!1), window.URL.revokeObjectURL(t), a(null);
                    },
                    children: (0, c.jsx)("source", {
                        src: t,
                        type: y,
                    }),
                }),
            (0, c.jsx)(M.animated.div, {
                className: W.$D,
                style: H,
            }),
            (0, c.jsx)(M.animated.div, {
                className: W.AX,
                style: N,
                children: (0, c.jsxs)("svg", {
                    className: W.By,
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
let H = function () {
    return (0, l.bG)([I.A], () => I.A.canPlayWowMoment) ? (0, c.jsx)(C, {}) : null;
};
