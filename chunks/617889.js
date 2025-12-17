n.d(t, {
    EK: () => o,
    GX: () => s,
    qe: () => d,
}),
    n(388685);
var a = n(473749),
    r = n(481060),
    l = n(410030),
    i = n(968843);
function s() {
    let [{ spring: e }, t] = (0, r.q_F)(() => ({ spring: 0 }), "animate-always");
    return {
        completionSpring: e,
        startCompletionAnimation: a.useCallback(() => {
            t({ spring: 1 }),
                t({
                    spring: 0,
                    delay: 2000,
                });
        }, [t]),
    };
}
function o(e, t) {
    var n;
    let a = (0, i.z)(e),
        r = null != (n = (0, l.i6)()) ? n : 0,
        s = "var(--green-330)",
        o = ["var(--background-base-lowest)", "var(--interactive-text-default)"];
    return {
        backgroundTop: t ? o[r] : ["#828288", "#CBCDD4"][r],
        backgroundBottom: t ? o[r] : ["#535356", "#8B8C95"][r],
        foreground: s,
        glow: t && a ? s : "#C4C1D66E",
    };
}
let c = () => {
    let e = document.body.style.getPropertyValue("--custom-guild-sidebar-width").slice(0, -2);
    return parseInt("" !== e ? e : "375");
};
function d() {
    return {
        label: !(function () {
            let [e, t] = a.useState(() => 270 > c());
            return (
                a.useEffect(() => {
                    let e = new MutationObserver(() => {
                        t(270 > c());
                    });
                    return (
                        e.observe(document.body, {
                            attributes: !0,
                            attributeFilter: ["style"],
                        }),
                        () => e.disconnect()
                    );
                }, [270]),
                e
            );
        })(),
    };
}
