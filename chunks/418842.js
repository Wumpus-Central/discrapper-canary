n.d(t, { C: () => s });
var i = n(582128),
    r = n(885386),
    a = n(157146);
function s() {
    let e = r.Xi.useSetting(),
        t = (function () {
            let [e, t] = i.useState(() => (window.matchMedia(a.Un).matches ? "cozy" : "compact"));
            return (
                i.useEffect(() => {
                    let e = window.matchMedia(a.Un);
                    function n(e) {
                        t(e.matches ? "cozy" : "compact");
                    }
                    return (
                        e.addEventListener("change", n),
                        () => {
                            e.removeEventListener("change", n);
                        }
                    );
                }, []),
                e
            );
        })();
    return (0, a.dV)(e, t);
}
