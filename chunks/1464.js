let c;
a.r(t), a.d(t, { WowMomentTypes: () => S, default: () => W }), a(323874), a(14289), a(35956);
var i,
    s = a(627968),
    n = a(64700),
    d = a(503698),
    o = a.n(d),
    m = a(873174),
    h = a(17928),
    l = a(636537),
    u = a(717421),
    p = a(228366),
    r = a(775602),
    w = a(607470),
    f = a(174459),
    _ = a(676279),
    E = a(625494),
    M = a(38405),
    b = a(598653),
    T = a(639735),
    I = a(652215),
    A = a(208352),
    S = (((i = {}).WUMPUS_FLIGHT = "wumpus_flight"), (i.GRADIENT_HIGHLIGHT = "gradient_highlight"), i);
async function y(e, t) {
    try {
        p.h.dispatch({ type: "PURCHASED_ITEMS_FESTIVITY_IS_FETCHING_WOW_MOMENT_MEDIA" });
        let a = e
            ? "https://cdn.discordapp.com/assets/content/e39ebab3f9b41f134813b925a561b04796e76fc95428dac13692b7c0caa0d75a.mov"
            : "https://cdn.discordapp.com/assets/content/3d55c81c787244a8d86e0bb5ff52640995e99c19ef1d3afdd12f14951ffe28e3.webm";
        window.matchMedia("(min-width: 1012px) and (max-width: 1980px)").matches ||
        window.matchMedia("(min-height: 720px) and (max-height: 1408px)").matches
            ? (a = e
                  ? "https://cdn.discordapp.com/assets/content/e0cf9a81d325a11abab3f39a1bf161e26306001ac526a2118693631e50639abb.mov"
                  : "https://cdn.discordapp.com/assets/content/aed581761839cc398b543509b65890d458e0a4d6f258c5a47f8aa91368570a0a.webm")
            : (window.matchMedia("(min-width: 1980px)").matches || window.matchMedia("(min-height: 1408px)").matches) &&
              (a = e
                  ? "https://cdn.discordapp.com/assets/content/10901216895c8804bd02ded434192a914a117f0ee7c4f7e1b8ea25c7c297c9b1.mov"
                  : "https://cdn.discordapp.com/assets/content/255e915caadab258cf5ad40cfa8f81ca17227502e691370f3aaf604816da0509.webm");
        let c = await l.Bo.get({ url: a, binary: !0, rejectWithError: !0 }),
            i = window.URL.createObjectURL(c.body);
        t(i), p.h.dispatch({ type: "PURCHASED_ITEMS_FESTIVITY_FETCH_WOW_MOMENT_MEDIA_SUCCESS", wumpusMedia: i });
    } catch (e) {
        M.A.captureException(e), p.h.dispatch({ type: "PURCHASED_ITEMS_FESTIVITY_FETCH_WOW_MOMENT_MEDIA_FAILURE" });
    }
}
function x() {
    let e = (0, h.bG)([r.A], () => r.A.useReducedMotion),
        [t, a] = n.useState(null),
        { isFetchingMedia: i, canPlayWowMoment: d } = (0, h.cf)([T.A], () => ({
            isFetchingMedia: T.A.isFetchingWowMomentMedia,
            canPlayWowMoment: T.A.canPlayWowMoment,
        })),
        [l, p] = n.useState(!1),
        M = (0, _.Z5)(),
        S = (0, _.TM)(),
        x = M > 52 || -1 === M || S,
        W = S ? "video/mp4" : "video/webm",
        g = x && !e && d && null === t && !1 === i;
    n.useEffect(() => {
        g && y(S, a);
    }, [g, S, a]),
        n.useEffect(() => {
            function t() {
                !e &&
                    T.A.canPlayWowMoment &&
                    (p(!0),
                    (c = setTimeout(() => {
                        p(!1),
                            U(!0),
                            f.default.track(I.HAw.PREMIUM_WOW_MOMENT_VIEWED, { wow_moment_type: "gradient_highlight" }),
                            (0, b.o)(!1);
                    }, 2e3)));
            }
            return (
                E._.subscribe(I.jej.PREMIUM_SUBSCRIPTION_CREATED, t),
                () => {
                    E._.unsubscribe(I.jej.PREMIUM_SUBSCRIPTION_CREATED, t);
                }
            );
        }, [e, x]);
    let [R, U] = n.useState(!1),
        [j, H] = n.useState(!1),
        P = (0, u.z)({ opacity: 0.2 * !!R, config: { duration: 100 } }),
        N = (0, u.z)(
            { x: j ? "100%" : "-100%", config: { duration: 500 } },
            j ? "respect-motion-settings" : "animate-never",
        );
    n.useEffect(() => {
        let e = -1;
        return (
            R &&
                (e = window.setTimeout(() => {
                    H(!0);
                }, 1e3)),
            () => {
                window.clearTimeout(e);
            }
        );
    }, [R]),
        n.useEffect(() => {
            let e = -1;
            return (
                j &&
                    (e = window.setTimeout(() => {
                        H(!1), U(!1);
                    }, 1e3)),
                () => {
                    window.clearTimeout(e);
                }
            );
        }, [j]);
    let C = l && null !== t,
        O = C || R;
    return (0, s.jsxs)("div", {
        className: o()({ [A.iE]: !O, [A.iV]: O }),
        children: [
            C &&
                (0, s.jsx)(w.A, {
                    autoPlay: !0,
                    className: A.tN,
                    onPlay: () => {
                        clearTimeout(c),
                            f.default.track(I.HAw.PREMIUM_WOW_MOMENT_VIEWED, { wow_moment_type: "wumpus_flight" });
                    },
                    onEnded: () => {
                        p(!1), (0, b.o)(!1), window.URL.revokeObjectURL(t), a(null);
                    },
                    children: (0, s.jsx)("source", { src: t, type: W }),
                }),
            (0, s.jsx)(m.animated.div, { className: A.$D, style: P }),
            (0, s.jsx)(m.animated.div, {
                className: A.AX,
                style: N,
                children: (0, s.jsxs)("svg", {
                    className: A.By,
                    viewBox: "0 0 848 1024",
                    fill: "none",
                    children: [
                        (0, s.jsx)("path", { d: "M257.206 1024L0 0H341.333L598.539 1024H257.206Z", fill: "white" }),
                        (0, s.jsx)("path", {
                            d: "M847.975 1024H690.436L433.231 0H590.769L847.975 1024Z",
                            fill: "white",
                        }),
                    ],
                }),
            }),
        ],
    });
}
let W = function () {
    return (0, h.bG)([T.A], () => T.A.canPlayWowMoment) ? (0, s.jsx)(x, {}) : null;
};
