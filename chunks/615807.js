"use strict";
n.d(t, { G: () => s });
var r = n(64700),
    i = n(849269);
function s(e) {
    let [t, n] = r.useState(e);
    return (
        r.useLayoutEffect(() => {
            if (e === i.o6.LEAVE) {
                let t = setTimeout(() => n(e), 100);
                return () => clearTimeout(t);
            }
            n(e);
        }, [e]),
        t
    );
}
