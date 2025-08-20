n.d(t, {
    E: () => l,
    G: () => s,
}),
    n(388685);
var r = n(647438),
    i = n(481060),
    a = n(410030),
    o = n(113434);
function s() {
    let [{ spring: e }, t] = (0, i.q_F)(() => ({ spring: 0 }), "animate-always");
    return {
        completionSpring: e,
        startCompletionAnimation: r.useCallback(() => {
            t({ spring: 1 }),
                t({
                    spring: 0,
                    delay: 2000,
                });
        }, [t]),
    };
}
function l(e, t) {
    var n;
    let r = (0, o.z)(e),
        i = null != (n = (0, a.i6)()) ? n : 0,
        s = "var(--green-330)",
        l = ["var(--background-base-lowest)", "var(--interactive-normal)"],
        c = ["#828288", "#CBCDD4"],
        u = ["#535356", "#8B8C95"];
    return {
        backgroundTop: t ? l[i] : c[i],
        backgroundBottom: t ? l[i] : u[i],
        foreground: s,
        glow: t && r ? s : "#C4C1D66E",
    };
}
