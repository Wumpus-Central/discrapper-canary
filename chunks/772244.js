n.d(t, {
    OY: () => o,
    Ry: () => s,
    qV: () => d,
}),
    n(896048);
var a = n(64700),
    l = n(397927),
    i = n(736653),
    r = n(890687);

function s() {
    let [{ spring: e }, t] = (0, l.zhh)(
        () => ({
            spring: 0,
        }),
        "animate-always",
    );
    return {
        completionSpring: e,
        startCompletionAnimation: a.useCallback(() => {
            t({
                spring: 1,
            }),
                t({
                    spring: 0,
                    delay: 2e3,
                });
        }, [t]),
    };
}

function o(e, t) {
    var n;
    let a = (0, r.Vn)(e),
        l = null != (n = (0, i.xv)()) ? n : 0,
        s = "var(--green-330)",
        o = ["var(--background-base-lowest)", "var(--interactive-text-default)"];
    return {
        backgroundTop: t ? o[l] : ["#828288", "#CBCDD4"][l],
        backgroundBottom: t ? o[l] : ["#535356", "#8B8C95"][l],
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
