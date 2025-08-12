r.d(t, {
    E: () => c,
    G: () => a,
}),
    r(388685);
var n = r(73800),
    s = r(481060),
    o = r(410030),
    l = r(113434);
function a() {
    let [{ spring: e }, t] = (0, s.q_F)(() => ({ spring: 0 }), "animate-always");
    return {
        completionSpring: e,
        startCompletionAnimation: n.useCallback(() => {
            t({ spring: 1 }),
                t({
                    spring: 0,
                    delay: 2000,
                });
        }, [t]),
    };
}
function c(e, t) {
    var r;
    let n = (0, l.z)(e),
        s = null != (r = (0, o.i6)()) ? r : 0,
        a = "var(--green-330)",
        c = ["var(--background-base-lowest)", "var(--interactive-normal)"];
    return {
        backgroundTop: t ? c[s] : ["#828288", "#CBCDD4"][s],
        backgroundBottom: t ? c[s] : ["#535356", "#8B8C95"][s],
        foreground: a,
        glow: t && n ? a : "#C4C1D66E",
    };
}
