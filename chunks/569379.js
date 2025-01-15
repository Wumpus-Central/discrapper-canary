t.d(n, {
    E: function () {
        return s;
    },
    G: function () {
        return i;
    }
}),
    t(47120);
var o = t(192379),
    r = t(481060),
    c = t(410030),
    a = t(113434);
function i() {
    let [{ spring: e }, n] = (0, r.useSpring)(() => ({ spring: 0 }), 'animate-always');
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
    let o = (0, a.z)(e),
        r = null !== (t = (0, c.i6)()) && void 0 !== t ? t : 0,
        i = 'var(--green-330)',
        s = ['var(--background-tertiary)', 'var(--interactive-normal)'],
        l = n ? s[r] : ['#828288', '#CBCDD4'][r];
    return {
        backgroundTop: l,
        backgroundBottom: n ? s[r] : ['#535356', '#8B8C95'][r],
        foreground: i,
        glow: n && o ? i : '#C4C1D66E'
    };
}
