"use strict";
n.d(t, { C: () => s });
var i = n(582128),
    r = n(873298),
    a = n(885386);
function s() {
    let e = a.Xi.useSetting(),
        t = (function () {
            let [e, t] = i.useState("cozy");
            return (
                i.useEffect(() => {
                    let e = window.matchMedia("(min-width: 1024px) and (min-height: 820px)");
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
    switch (e) {
        case r.NS.RESPONSIVE:
            return t;
        case r.NS.COZY:
            return "cozy";
        case r.NS.DEFAULT:
            return "default";
        case r.NS.COMPACT:
            return "compact";
        default:
            return "default";
    }
}
