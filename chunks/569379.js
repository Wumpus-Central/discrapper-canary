n.d(t, {
    E: () => l,
    G: () => i
}),
    n(47120);
var s = n(192379),
    r = n(481060),
    a = n(410030),
    o = n(113434);
function i() {
    let [{ spring: e }, t] = (0, r.q_F)(() => ({ spring: 0 }), 'animate-always');
    return {
        completionSpring: e,
        startCompletionAnimation: s.useCallback(() => {
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
    let s = (0, o.z)(e),
        r = null !== (n = (0, a.i6)()) && void 0 !== n ? n : 0,
        i = 'var(--green-330)',
        l = ['var(--background-tertiary)', 'var(--interactive-normal)'];
    return {
        backgroundTop: t ? l[r] : ['#828288', '#CBCDD4'][r],
        backgroundBottom: t ? l[r] : ['#535356', '#8B8C95'][r],
        foreground: i,
        glow: t && s ? i : '#C4C1D66E'
    };
}
