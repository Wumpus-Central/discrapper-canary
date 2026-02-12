n.d(t, { R: () => s, q: () => r });
var a = n(64700),
    i = n(397927);
function s() {
    let [{ spring: e }, t] = (0, i.zhh)(() => ({ spring: 0 }), "animate-always");
    return {
        completionSpring: e,
        startCompletionAnimation: a.useCallback(() => {
            t({ spring: 1 }), t({ spring: 0, delay: 2e3 });
        }, [t]),
    };
}
let l = () => {
    let e = document.body.style.getPropertyValue("--custom-guild-sidebar-width").slice(0, -2);
    return parseInt("" !== e ? e : "375");
};
function r() {
    return {
        label: !(function () {
            let [e, t] = a.useState(() => 270 > l());
            return (
                a.useEffect(() => {
                    let e = new MutationObserver(() => {
                        t(270 > l());
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
