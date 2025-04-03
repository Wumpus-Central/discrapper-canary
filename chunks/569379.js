t.d(n, {
    E: () => s,
    G: () => d
}),
    t(47120);
var r = t(192379),
    o = t(481060),
    a = t(410030),
    i = t(113434);
function d() {
    let [{ spring: e }, n] = (0, o.q_F)(() => ({ spring: 0 }), 'animate-always');
    return {
        completionSpring: e,
        startCompletionAnimation: r.useCallback(() => {
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
    let r = (0, i.z)(e),
        o = null != (t = (0, a.i6)()) ? t : 0,
        d = 'var(--green-330)',
        s = ['var(--background-tertiary)', 'var(--interactive-normal)'];
    return {
        backgroundTop: n ? s[o] : ['#828288', '#CBCDD4'][o],
        backgroundBottom: n ? s[o] : ['#535356', '#8B8C95'][o],
        foreground: d,
        glow: n && r ? d : '#C4C1D66E'
    };
}
