n.d(t, {
    A: () => l,
}),
    n(896048);
var r = n(64700);

function l() {
    let [e, t] = (0, r.useState)(window.innerWidth >= 1132);
    return (
        (0, r.useEffect)(() => {
            let e = () => {
                t(window.innerWidth >= 1132);
            };
            return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e);
        }, []),
        e
    );
}
