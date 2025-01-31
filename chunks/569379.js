t.d(n, {
    E: () => s,
    G: () => i
}),
    t(47120);
var o = t(192379),
    a = t(481060),
    r = t(410030),
    d = t(113434);
function i() {
    let [{ spring: e }, n] = (0, a.q_F)(() => ({ spring: 0 }), 'animate-always');
    return {
        completionSpring: e,
        startCompletionAnimation: o.useCallback(() => {
            n({ spring: 1 }),
                n({
                    spring: 0,
                    delay: 2000
                });
        }, [n])
    };
}
function s(e, n) {
    var t;
    let o = (0, d.z)(e),
        a = null !== (t = (0, r.i6)()) && void 0 !== t ? t : 0,
        i = 'var(--green-330)',
        s = ['var(--background-tertiary)', 'var(--interactive-normal)'];
    return {
        backgroundTop: n ? s[a] : ['#828288', '#CBCDD4'][a],
        backgroundBottom: n ? s[a] : ['#535356', '#8B8C95'][a],
        foreground: i,
        glow: n && o ? i : '#C4C1D66E'
    };
}
