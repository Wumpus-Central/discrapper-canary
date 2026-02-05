n.d(t, { OY: () => o, Ry: () => r, qV: () => c });
var a = n(64700),
    s = n(397927),
    i = n(736653),
    l = n(890687);
function r() {
    let [{ spring: e }, t] = (0, s.zhh)(() => ({ spring: 0 }), "animate-always");
    return {
        completionSpring: e,
        startCompletionAnimation: a.useCallback(() => {
            t({ spring: 1 }), t({ spring: 0, delay: 2e3 });
        }, [t]),
    };
}
function o(e, t) {
    let n = (0, l.Vn)(e),
        a = (0, i.xv)() ?? 0,
        s = "var(--green-330)",
        r = ["var(--background-base-lowest)", "var(--interactive-text-default)"];
    return {
        backgroundTop: t ? r[a] : ["#828288", "#CBCDD4"][a],
        backgroundBottom: t ? r[a] : ["#535356", "#8B8C95"][a],
        foreground: s,
        glow: t && n ? s : "#C4C1D66E",
    };
}
let d = () => {
    let e = document.body.style.getPropertyValue("--custom-guild-sidebar-width").slice(0, -2);
    return parseInt("" !== e ? e : "375");
};
function c() {
    return {
        label: !(function () {
            let [e, t] = a.useState(() => 270 > d());
            return (
                a.useEffect(() => {
                    let e = new MutationObserver(() => {
                        t(270 > d());
                    });
                    return (
                        e.observe(document.body, { attributes: !0, attributeFilter: ["style"] }), () => e.disconnect()
                    );
                }, [270]),
                e
            );
        })(),
    };
}
