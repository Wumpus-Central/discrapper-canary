n.d(t, {
    E: () => l,
    G: () => i
}),
    n(388685);
var r = n(73800),
    s = n(481060),
    o = n(410030),
    a = n(113434);
function i() {
    let [{ spring: e }, t] = (0, s.q_F)(() => ({ spring: 0 }), 'animate-always');
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
function l(e, t) {
    var n;
    let r = (0, a.z)(e),
        s = null != (n = (0, o.i6)()) ? n : 0,
        i = 'var(--green-330)',
        l = ['var(--background-base-lowest)', 'var(--interactive-normal)'];
    return {
        backgroundTop: t ? l[s] : ['#828288', '#CBCDD4'][s],
        backgroundBottom: t ? l[s] : ['#535356', '#8B8C95'][s],
        foreground: i,
        glow: t && r ? i : '#C4C1D66E'
    };
}
