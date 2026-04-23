"use strict";
n.d(t, { A: () => r });
var i = n(64700);
function s() {
    return "u" < typeof document || "visible" === document.visibilityState;
}
function r() {
    let [e, t] = (0, i.useState)(s());
    return (
        (0, i.useEffect)(() => {
            function e() {
                t(s());
            }
            return (
                window.addEventListener("visibilitychange", e),
                () => {
                    window.removeEventListener("visibilitychange", e);
                }
            );
        }, [t]),
        e
    );
}
