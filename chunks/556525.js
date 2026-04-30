"use strict";
n.d(t, { O: () => u, v: () => c });
var i,
    r = n(64700),
    s = n(17928),
    a = n(775602),
    o = n(531685);
function l(e, t) {
    return 0.5 + (t - 0.5) / (1 + Math.exp(-0.03 * (e - -45)));
}
var u = (((i = {}).BOTH = "BOTH"), (i.INSET_ONLY = "INSET_ONLY"), (i.OUTSET_ONLY = "OUTSET_ONLY"), i);
function c(e) {
    let {
            isSpeaking: t,
            voiceDb: i,
            spreadDirection: u = "BOTH",
            maxOuterSpreadRadius: c = 3,
            maxInnerSpreadRadius: d = 1,
            hideIfVolumeMissing: _ = !1,
        } = e,
        f = n(773371).default,
        {
            shouldReduceMotion: h,
            useForcedColors: p,
            isAppFocusedOrOverlayVisible: E,
        } = (0, s.cf)([a.A, o.A, f], () => ({
            shouldReduceMotion: a.A.useReducedMotion,
            useForcedColors: a.A.useForcedColors,
            isAppFocusedOrOverlayVisible: o.A.isAppFocused() || null != f.getFocusedPID(),
        }));
    return r.useMemo(() => {
        let e = {};
        if (i === -1 / 0 && _) return e;
        if (t) {
            let t = 0,
                n = 2,
                r = 3;
            i !== -1 / 0 &&
                !h &&
                E &&
                ((t = "INSET_ONLY" === u ? 0 : l(i, c)),
                (n = "OUTSET_ONLY" === u ? 0 : l(i, d)),
                (r = "OUTSET_ONLY" === u ? 0 : n + 1));
            let s = p ? "Highlight" : "var(--status-speaking)";
            e.boxShadow = `0 0 0 ${t}px ${s}, inset 0 0 0 ${n}px ${s}, inset 0 0 0 ${r}px var(--background-base-lower)`;
        }
        return E && (e.transition = "box-shadow 50ms ease-out"), e;
    }, [t, E, h, p, i, u, c, d, _]);
}
