"use strict";
n.d(t, { O: () => g, v: () => E });
var r = n(64700),
    i = n(311907),
    a = n(775602),
    s = n(531685);
let o = 0,
    l = 2,
    u = 3,
    c = 0.03,
    d = -45,
    _ = 3,
    f = 1,
    p = 0.5,
    h = "inset 0 0 0 2px var(--yellow-360), inset 0 0 0 3px var(--background-base-lower)";
function m(e, t) {
    return p + (t - p) / (1 + Math.exp(-c * (e - d)));
}
var g = (function (e) {
    return (e.BOTH = "BOTH"), (e.INSET_ONLY = "INSET_ONLY"), (e.OUTSET_ONLY = "OUTSET_ONLY"), e;
})({});
function E(e) {
    let {
            isSpeaking: t,
            isLatched: c,
            voiceDb: d,
            spreadDirection: p = "BOTH",
            maxOuterSpreadRadius: g = _,
            maxInnerSpreadRadius: E = f,
            hideIfVolumeMissing: A = !1,
        } = e,
        I = n(242286).default,
        {
            shouldReduceMotion: T,
            useForcedColors: y,
            isAppFocusedOrOverlayVisible: S,
        } = (0, i.cf)([a.A, s.A, I], () => ({
            shouldReduceMotion: a.A.useReducedMotion,
            useForcedColors: a.A.useForcedColors,
            isAppFocusedOrOverlayVisible: s.A.isAppFocused() || null != I.getFocusedPID(),
        }));
    return r.useMemo(() => {
        let e = {};
        if (d === -1 / 0 && A) return e;
        if (t) {
            let t = o,
                n = l,
                r = u;
            d !== -1 / 0 &&
                !T &&
                S &&
                ((t = "INSET_ONLY" === p ? 0 : m(d, g)),
                (n = "OUTSET_ONLY" === p ? 0 : m(d, E)),
                (r = "OUTSET_ONLY" === p ? 0 : n + 1));
            let i = y ? "Highlight" : "var(--status-speaking)";
            e.boxShadow = `0 0 0 ${t}px ${i}, inset 0 0 0 ${n}px ${i}, inset 0 0 0 ${r}px var(--background-base-lower)`;
        } else c && (e.boxShadow = h);
        return S && (e.transition = "box-shadow 50ms ease-out"), e;
    }, [t, c, S, T, y, d, p, g, E, A]);
}
