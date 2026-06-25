n.d(i, { A: () => d });
var t = n(64700);
function d() {
    arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    let [e, i] = t.useState(
        (function () {
            return (
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                { width: window.innerWidth ?? 1080, height: window.innerHeight ?? 1080 }
            );
        })(),
    );
    return (
        t.useLayoutEffect(() => {
            function e() {
                i({ width: window.innerWidth, height: window.innerHeight });
            }
            return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e);
        }, []),
        e
    );
}
