"use strict";
n.d(t, { O: () => u, v: () => d });
var r,
    i = n(64700),
    s = n(311907),
    a = n(775602),
    o = n(531685);
function l(e, t) {
    return 0.5 + (t - 0.5) / (1 + Math.exp(-0.03 * (e - -45)));
}
var u = (((r = {}).BOTH = "BOTH"), (r.INSET_ONLY = "INSET_ONLY"), (r.OUTSET_ONLY = "OUTSET_ONLY"), r);
function d(e) {
    let {
            isSpeaking: t,
            voiceDb: r,
            spreadDirection: u = "BOTH",
            maxOuterSpreadRadius: d = 3,
            maxInnerSpreadRadius: c = 1,
            hideIfVolumeMissing: _ = !1,
        } = e,
        f = n(242286).default,
        {
            shouldReduceMotion: E,
            useForcedColors: h,
            isAppFocusedOrOverlayVisible: p,
        } = (0, s.cf)([a.A, o.A, f], () => ({
            shouldReduceMotion: a.A.useReducedMotion,
            useForcedColors: a.A.useForcedColors,
            isAppFocusedOrOverlayVisible: o.A.isAppFocused() || null != f.getFocusedPID(),
        }));
    return i.useMemo(() => {
        let e = {};
        if (r === -1 / 0 && _) return e;
        if (t) {
            let t = 0,
                n = 2,
                i = 3;
            r !== -1 / 0 &&
                !E &&
                p &&
                ((t = "INSET_ONLY" === u ? 0 : l(r, d)),
                (n = "OUTSET_ONLY" === u ? 0 : l(r, c)),
                (i = "OUTSET_ONLY" === u ? 0 : n + 1));
            let s = h ? "Highlight" : "var(--status-speaking)";
            e.boxShadow = `0 0 0 ${t}px ${s}, inset 0 0 0 ${n}px ${s}, inset 0 0 0 ${i}px var(--background-base-lower)`;
        }
        return p && (e.transition = "box-shadow 50ms ease-out"), e;
    }, [t, p, E, h, r, u, d, c, _]);
}
