let n;
a.r(t), a.d(t, { WowMomentTypes: () => F, default: () => H }), a(323874), a(14289), a(35956);
var i,
    c = a(627968),
    o = a(64700),
    s = a(503698),
    d = a.n(s),
    _ = a(419354),
    M = a(311907),
    l = a(562465),
    m = a(717421),
    r = a(73153),
    u = a(775602),
    w = a(607470),
    E = a(954571),
    p = a(676279),
    h = a(203982),
    T = a(728458),
    A = a(598653),
    I = a(639735),
    W = a(652215),
    f = a(208352),
    S = a(666642),
    b = a(951091),
    g = a(475158),
    y = a(239871),
    P = a(941182),
    U = a(925191),
    F = (((i = {}).WUMPUS_FLIGHT = "wumpus_flight"), (i.GRADIENT_HIGHLIGHT = "gradient_highlight"), i);
async function C(e, t) {
    try {
        r.h.dispatch({ type: "PURCHASED_ITEMS_FESTIVITY_IS_FETCHING_WOW_MOMENT_MEDIA" });
        let a = e ? S.A : b.A;
        window.matchMedia("(min-width: 1012px) and (max-width: 1980px)").matches ||
        window.matchMedia("(min-height: 720px) and (max-height: 1408px)").matches
            ? (a = e ? g.A : y.A)
            : (window.matchMedia("(min-width: 1980px)").matches || window.matchMedia("(min-height: 1408px)").matches) &&
              (a = e ? P.A : U.A);
        let n = await l.Bo.get({ url: a, binary: !0, rejectWithError: !0 }),
            i = window.URL.createObjectURL(n.body);
        t(i), r.h.dispatch({ type: "PURCHASED_ITEMS_FESTIVITY_FETCH_WOW_MOMENT_MEDIA_SUCCESS", wumpusMedia: i });
    } catch (e) {
        T.A.captureException(e), r.h.dispatch({ type: "PURCHASED_ITEMS_FESTIVITY_FETCH_WOW_MOMENT_MEDIA_FAILURE" });
    }
}
function O() {
    let e = (0, M.bG)([u.A], () => u.A.useReducedMotion),
        [t, a] = o.useState(null),
        { isFetchingMedia: i, canPlayWowMoment: s } = (0, M.cf)([I.A], () => ({
            isFetchingMedia: I.A.isFetchingWowMomentMedia,
            canPlayWowMoment: I.A.canPlayWowMoment,
        })),
        [l, r] = o.useState(!1),
        T = (0, p.Z5)(),
        S = (0, p.TM)(),
        b = T > 52 || -1 === T || S,
        g = S ? "video/mp4" : "video/webm",
        y = b && !e && s && null === t && !1 === i;
    o.useEffect(() => {
        y && C(S, a);
    }, [y, S, a]),
        o.useEffect(() => {
            function t() {
                !e &&
                    I.A.canPlayWowMoment &&
                    (r(!0),
                    (n = setTimeout(() => {
                        r(!1),
                            U(!0),
                            E.default.track(W.HAw.PREMIUM_WOW_MOMENT_VIEWED, { wow_moment_type: "gradient_highlight" }),
                            (0, A.o)(!1);
                    }, 2e3)));
            }
            return (
                h._.subscribe(W.jej.PREMIUM_SUBSCRIPTION_CREATED, t),
                () => {
                    h._.unsubscribe(W.jej.PREMIUM_SUBSCRIPTION_CREATED, t);
                }
            );
        }, [e, b]);
    let [P, U] = o.useState(!1),
        [F, O] = o.useState(!1),
        H = (0, m.z)({ opacity: 0.2 * !!P, config: { duration: 100 } }),
        N = (0, m.z)(
            { x: F ? "100%" : "-100%", config: { duration: 500 } },
            F ? "respect-motion-settings" : "animate-never",
        );
    o.useEffect(() => {
        let e = -1;
        return (
            P &&
                (e = window.setTimeout(() => {
                    O(!0);
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
                        O(!1), U(!1);
                    }, 1e3)),
                () => {
                    window.clearTimeout(e);
                }
            );
        }, [F]);
    let R = l && null !== t,
        x = R || P;
    return (0, c.jsxs)("div", {
        className: d()({ [f.iE]: !x, [f.iV]: x }),
        children: [
            R &&
                (0, c.jsx)(w.A, {
                    autoPlay: !0,
                    className: f.tN,
                    onPlay: () => {
                        clearTimeout(n),
                            E.default.track(W.HAw.PREMIUM_WOW_MOMENT_VIEWED, { wow_moment_type: "wumpus_flight" });
                    },
                    onEnded: () => {
                        r(!1), (0, A.o)(!1), window.URL.revokeObjectURL(t), a(null);
                    },
                    children: (0, c.jsx)("source", { src: t, type: g }),
                }),
            (0, c.jsx)(_.animated.div, { className: f.$D, style: H }),
            (0, c.jsx)(_.animated.div, {
                className: f.AX,
                style: N,
                children: (0, c.jsxs)("svg", {
                    className: f.By,
                    viewBox: "0 0 848 1024",
                    fill: "none",
                    children: [
                        (0, c.jsx)("path", { d: "M257.206 1024L0 0H341.333L598.539 1024H257.206Z", fill: "white" }),
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
    return (0, M.bG)([I.A], () => I.A.canPlayWowMoment) ? (0, c.jsx)(O, {}) : null;
};
