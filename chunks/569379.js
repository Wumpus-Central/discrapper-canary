n.d(t, {
    E: () => c,
    G: () => i
}),
    n(388685);
var r = n(192379),
    o = n(481060),
    s = n(410030),
    l = n(113434);
function i() {
    let [{ spring: e }, t] = (0, o.q_F)(() => ({ spring: 0 }), 'animate-always');
    return {
        completionSpring: e,
        startCompletionAnimation: r.useCallback(() => {
            t({ spring: 1 }),
                t({
                    spring: 0,
                    delay: 2000
                });
        }, [t])
    };
}
function c(e, t) {
    var n;
    let r = (0, l.z)(e),
        o = null != (n = (0, s.i6)()) ? n : 0,
        i = 'var(--green-330)',
        c = ['var(--background-tertiary)', 'var(--interactive-normal)'];
    return {
        backgroundTop: t ? c[o] : ['#828288', '#CBCDD4'][o],
        backgroundBottom: t ? c[o] : ['#535356', '#8B8C95'][o],
        foreground: i,
        glow: t && r ? i : '#C4C1D66E'
    };
}
