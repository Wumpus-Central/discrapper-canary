"use strict";
n.d(t, { OY: () => l, Ry: () => o, qV: () => d });
var r = n(64700),
    i = n(397927),
    a = n(736653),
    s = n(890687);
function o() {
    let [{ spring: e }, t] = (0, i.zhh)(() => ({ spring: 0 }), "animate-always");
    return {
        completionSpring: e,
        startCompletionAnimation: r.useCallback(() => {
            t({ spring: 1 }), t({ spring: 0, delay: 2e3 });
        }, [t]),
    };
}
function l(e, t) {
    let n = (0, s.Vn)(e),
        r = (0, a.xv)() ?? 0,
        i = "var(--green-330)",
        o = ["var(--background-base-lowest)", "var(--interactive-text-default)"],
        l = ["#828288", "#CBCDD4"],
        u = ["#535356", "#8B8C95"];
    return {
        backgroundTop: t ? o[r] : l[r],
        backgroundBottom: t ? o[r] : u[r],
        foreground: i,
        glow: t && n ? i : "#C4C1D66E",
    };
}
let u = () => {
    let e = document.body.style.getPropertyValue("--custom-guild-sidebar-width").slice(0, -2);
    return parseInt("" !== e ? e : "375");
};
function c() {
    let e = 270,
        [t, n] = r.useState(() => u() < e);
    return (
        r.useEffect(() => {
            let t = new MutationObserver(() => {
                n(u() < e);
            });
            return t.observe(document.body, { attributes: !0, attributeFilter: ["style"] }), () => t.disconnect();
        }, [e]),
        t
    );
}
function d() {
    return { label: !c() };
}
