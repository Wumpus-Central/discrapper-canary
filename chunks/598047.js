var n = t(582128);
function s() {
    return "u" < typeof document || "visible" === document.visibilityState;
}
t.d(
    i,
    {},
    {
        A: function () {
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
        },
    },
);
