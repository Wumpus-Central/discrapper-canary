n.d(t, {
    E: () => l,
    G: () => i
}),
    n(47120);
var r = n(192379),
    o = n(481060),
    s = n(410030),
    a = n(113434);
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
function l(e, t) {
    var n;
    let r = (0, a.z)(e),
        o = null !== (n = (0, s.i6)()) && void 0 !== n ? n : 0,
        i = 'var(--green-330)',
        l = ['var(--background-tertiary)', 'var(--interactive-normal)'];
    return {
        backgroundTop: t ? l[o] : ['#828288', '#CBCDD4'][o],
        backgroundBottom: t ? l[o] : ['#535356', '#8B8C95'][o],
        foreground: i,
        glow: t && r ? i : '#C4C1D66E'
    };
}
