(r.d(t, {
    E: () => i,
    G: () => c
}),
    r(388685));
var n = r(73800),
    s = r(481060),
    o = r(410030),
    l = r(113434);
function c() {
    let [{ spring: e }, t] = (0, s.q_F)(() => ({ spring: 0 }), 'animate-always');
    return {
        completionSpring: e,
        startCompletionAnimation: n.useCallback(() => {
            (t({ spring: 1 }),
                t({
                    spring: 0,
                    delay: 2000
                }));
        }, [t])
    };
}
function i(e, t) {
    var r;
    let n = (0, l.z)(e),
        s = null != (r = (0, o.i6)()) ? r : 0,
        c = 'var(--green-330)',
        i = ['var(--background-base-lowest)', 'var(--interactive-normal)'];
    return {
        backgroundTop: t ? i[s] : ['#828288', '#CBCDD4'][s],
        backgroundBottom: t ? i[s] : ['#535356', '#8B8C95'][s],
        foreground: c,
        glow: t && n ? c : '#C4C1D66E'
    };
}
