"use strict";
n.d(t, { O: () => m, v: () => E });
var r = n(64700),
    i = n(311907),
    s = n(775602),
    a = n(531685);
let o = 0,
    l = 2,
    u = 3,
    c = 0.03,
    d = -45,
    _ = 3,
    f = 1,
    p = 0.5;
function h(e, t) {
    return p + (t - p) / (1 + Math.exp(-c * (e - d)));
}
var m = (function (e) {
    return (e.BOTH = "BOTH"), (e.INSET_ONLY = "INSET_ONLY"), (e.OUTSET_ONLY = "OUTSET_ONLY"), e;
})({});
function E(e) {
    let {
            isSpeaking: t,
            voiceDb: c,
            spreadDirection: d = "BOTH",
            maxOuterSpreadRadius: p = _,
            maxInnerSpreadRadius: m = f,
            hideIfVolumeMissing: E = !1,
        } = e,
        g = n(242286).default,
        {
            shouldReduceMotion: A,
            useForcedColors: I,
            isAppFocusedOrOverlayVisible: T,
        } = (0, i.cf)([s.A, a.A, g], () => ({
            shouldReduceMotion: s.A.useReducedMotion,
            useForcedColors: s.A.useForcedColors,
            isAppFocusedOrOverlayVisible: a.A.isAppFocused() || null != g.getFocusedPID(),
        }));
    return r.useMemo(() => {
        let e = {};
        if (c === -1 / 0 && E) return e;
        if (t) {
            let t = o,
                n = l,
                r = u;
            c !== -1 / 0 &&
                !A &&
                T &&
                ((t = "INSET_ONLY" === d ? 0 : h(c, p)),
                (n = "OUTSET_ONLY" === d ? 0 : h(c, m)),
                (r = "OUTSET_ONLY" === d ? 0 : n + 1));
            let i = I ? "Highlight" : "var(--status-speaking)";
            e.boxShadow = `0 0 0 ${t}px ${i}, inset 0 0 0 ${n}px ${i}, inset 0 0 0 ${r}px var(--background-base-lower)`;
        }
        return T && (e.transition = "box-shadow 50ms ease-out"), e;
    }, [t, T, A, I, c, d, p, m, E]);
}
