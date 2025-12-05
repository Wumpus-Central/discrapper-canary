n.d(t, {
    EK: () => l,
    GX: () => i,
    qe: () => u,
}),
    n(388685);
var r = n(473749),
    s = n(481060),
    o = n(410030),
    a = n(968843);
function i() {
    let [{ spring: e }, t] = (0, s.q_F)(() => ({ spring: 0 }), "animate-always");
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
    let r = (0, a.z)(e),
        s = null != (n = (0, o.i6)()) ? n : 0,
        i = "var(--green-330)",
        l = ["var(--background-base-lowest)", "var(--interactive-normal)"];
    return {
        backgroundTop: t ? l[s] : ["#828288", "#CBCDD4"][s],
        backgroundBottom: t ? l[s] : ["#535356", "#8B8C95"][s],
        foreground: i,
        glow: t && r ? i : "#C4C1D66E",
    };
}
let c = () => {
    let e = document.body.style.getPropertyValue("--custom-guild-sidebar-width").slice(0, -2);
    return parseInt("" !== e ? e : "375");
};
function u() {
    return {
        label: !(function () {
            let [e, t] = r.useState(() => 270 > c());
            return (
                r.useEffect(() => {
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
