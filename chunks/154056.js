let n;
a.r(t), a.d(t, { WowMomentTypes: () => y, default: () => U }), a(323874), a(14289), a(35956);
var i,
    c = a(627968),
    o = a(64700),
    s = a(503698),
    d = a.n(s),
    _ = a(419354),
    M = a(17928),
    m = a(636537),
    l = a(717421),
    r = a(228366),
    u = a(775602),
    w = a(607470),
    E = a(954571),
    p = a(676279),
    h = a(625494),
    T = a(38405),
    I = a(598653);
let W = { canPlayWowMoment: !1, isFetchingWowMomentMedia: !1, wowMomentWumpusMediaUrl: null };
class f extends M.Ay.Store {
    static displayName = "PurchasedItemsFestivityStore";
    getState() {
        return W;
    }
    get canPlayWowMoment() {
        return W.canPlayWowMoment;
    }
    get isFetchingWowMomentMedia() {
        return W.isFetchingWowMomentMedia;
    }
    get wowMomentWumpusMedia() {
        return W.wowMomentWumpusMediaUrl;
    }
}
let S = new f(r.h, {
    LOGOUT: function () {
        W = { canPlayWowMoment: !1, isFetchingWowMomentMedia: !1, wowMomentWumpusMediaUrl: null };
    },
    PURCHASED_ITEMS_FESTIVITY_SET_CAN_PLAY_WOW_MOMENT: function (e) {
        let { value: t } = e;
        W.canPlayWowMoment = t;
    },
    PURCHASED_ITEMS_FESTIVITY_IS_FETCHING_WOW_MOMENT_MEDIA: function () {
        W.isFetchingWowMomentMedia = !0;
    },
    PURCHASED_ITEMS_FESTIVITY_FETCH_WOW_MOMENT_MEDIA_SUCCESS: function (e) {
        let { wumpusMedia: t } = e;
        (W.wowMomentWumpusMediaUrl = t), (W.isFetchingWowMomentMedia = !1);
    },
    PURCHASED_ITEMS_FESTIVITY_FETCH_WOW_MOMENT_MEDIA_FAILURE: function () {
        (W.isFetchingWowMomentMedia = !1), (W.canPlayWowMoment = !1);
    },
});
var b = a(652215),
    g = a(208352),
    y = (((i = {}).WUMPUS_FLIGHT = "wumpus_flight"), (i.GRADIENT_HIGHLIGHT = "gradient_highlight"), i);
async function A(e, t) {
    try {
        r.h.dispatch({ type: "PURCHASED_ITEMS_FESTIVITY_IS_FETCHING_WOW_MOMENT_MEDIA" });
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
        let n = await m.Bo.get({ url: a, binary: !0, rejectWithError: !0 }),
            i = window.URL.createObjectURL(n.body);
        t(i), r.h.dispatch({ type: "PURCHASED_ITEMS_FESTIVITY_FETCH_WOW_MOMENT_MEDIA_SUCCESS", wumpusMedia: i });
    } catch (e) {
        T.A.captureException(e), r.h.dispatch({ type: "PURCHASED_ITEMS_FESTIVITY_FETCH_WOW_MOMENT_MEDIA_FAILURE" });
    }
}
function P() {
    let e = (0, M.bG)([u.A], () => u.A.useReducedMotion),
        [t, a] = o.useState(null),
        { isFetchingMedia: i, canPlayWowMoment: s } = (0, M.cf)([S], () => ({
            isFetchingMedia: S.isFetchingWowMomentMedia,
            canPlayWowMoment: S.canPlayWowMoment,
        })),
        [m, r] = o.useState(!1),
        T = (0, p.Z5)(),
        W = (0, p.TM)(),
        f = T > 52 || -1 === T || W,
        y = W ? "video/mp4" : "video/webm",
        P = f && !e && s && null === t && !1 === i;
    o.useEffect(() => {
        P && A(W, a);
    }, [P, W, a]),
        o.useEffect(() => {
            function t() {
                !e &&
                    S.canPlayWowMoment &&
                    (r(!0),
                    (n = setTimeout(() => {
                        r(!1),
                            F(!0),
                            E.default.track(b.HAw.PREMIUM_WOW_MOMENT_VIEWED, { wow_moment_type: "gradient_highlight" }),
                            (0, I.o)(!1);
                    }, 2e3)));
            }
            return (
                h._.subscribe(b.jej.PREMIUM_SUBSCRIPTION_CREATED, t),
                () => {
                    h._.unsubscribe(b.jej.PREMIUM_SUBSCRIPTION_CREATED, t);
                }
            );
        }, [e, f]);
    let [U, F] = o.useState(!1),
        [C, O] = o.useState(!1),
        H = (0, l.z)({ opacity: 0.2 * !!U, config: { duration: 100 } }),
        N = (0, l.z)(
            { x: C ? "100%" : "-100%", config: { duration: 500 } },
            C ? "respect-motion-settings" : "animate-never",
        );
    o.useEffect(() => {
        let e = -1;
        return (
            U &&
                (e = window.setTimeout(() => {
                    O(!0);
                }, 1e3)),
            () => {
                window.clearTimeout(e);
            }
        );
    }, [U]),
        o.useEffect(() => {
            let e = -1;
            return (
                C &&
                    (e = window.setTimeout(() => {
                        O(!1), F(!1);
                    }, 1e3)),
                () => {
                    window.clearTimeout(e);
                }
            );
        }, [C]);
    let R = m && null !== t,
        x = R || U;
    return (0, c.jsxs)("div", {
        className: d()({ [g.iE]: !x, [g.iV]: x }),
        children: [
            R &&
                (0, c.jsx)(w.A, {
                    autoPlay: !0,
                    className: g.tN,
                    onPlay: () => {
                        clearTimeout(n),
                            E.default.track(b.HAw.PREMIUM_WOW_MOMENT_VIEWED, { wow_moment_type: "wumpus_flight" });
                    },
                    onEnded: () => {
                        r(!1), (0, I.o)(!1), window.URL.revokeObjectURL(t), a(null);
                    },
                    children: (0, c.jsx)("source", { src: t, type: y }),
                }),
            (0, c.jsx)(_.animated.div, { className: g.$D, style: H }),
            (0, c.jsx)(_.animated.div, {
                className: g.AX,
                style: N,
                children: (0, c.jsxs)("svg", {
                    className: g.By,
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
let U = function () {
    return (0, M.bG)([S], () => S.canPlayWowMoment) ? (0, c.jsx)(P, {}) : null;
};
