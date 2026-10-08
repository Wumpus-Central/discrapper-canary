t.d(i, { A: () => u });
var n = t(582128);
function s() {
    return "u" < typeof document || "visible" === document.visibilityState;
}
function u() {
    let [e, i] = (0, n.useState)(s());
    return (
        (0, n.useEffect)(() => {
            function e() {
                i(s());
            }
            return (
                window.addEventListener("visibilitychange", e),
                () => {
                    window.removeEventListener("visibilitychange", e);
                }
            );
        }, [i]),
        e
    );
}
