n.d(t, { R: () => l, q: () => r });
var i = n(64700),
    s = n(717421);
function l() {
    let [{ spring: e }, t] = (0, s.z)(() => ({ spring: 0 }), "animate-always");
    return {
        completionSpring: e,
        startCompletionAnimation: i.useCallback(() => {
            t({ spring: 1 }), t({ spring: 0, delay: 2e3 });
        }, [t]),
    };
}
n(272111);
let a = () => {
    let e = document.body.style.getPropertyValue("--custom-guild-sidebar-width").slice(0, -2);
    return parseInt("" !== e ? e : "375");
};
function r() {
    return {
        label: !(function () {
            let [e, t] = i.useState(() => 270 > a());
            return (
                i.useEffect(() => {
                    let e = new MutationObserver(() => {
                        t(270 > a());
                    });
                    return (
                        e.observe(document.body, { attributes: !0, attributeFilter: ["style"] }), () => e.disconnect()
                    );
                }, []),
                e
            );
        })(),
    };
}
