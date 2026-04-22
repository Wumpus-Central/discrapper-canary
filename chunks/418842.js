"use strict";
n.d(t, { C: () => a });
var r = n(64700),
    i = n(873298),
    s = n(253932);
function a() {
    let e = s.Xi.useSetting(),
        t = (function () {
            let [e, t] = r.useState("cozy");
            return (
                r.useEffect(() => {
                    let e = window.matchMedia("(min-width: 1024px) and (min-height: 820px)"),
                        n = (e) => {
                            t(e.matches ? "cozy" : "compact");
                        };
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
        case i.NS.RESPONSIVE:
            return t;
        case i.NS.COZY:
            return "cozy";
        case i.NS.DEFAULT:
            return "default";
        case i.NS.COMPACT:
            return "compact";
        default:
            return "default";
    }
}
