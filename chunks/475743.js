"use strict";
n.d(t, { A: () => i });
var r = n(64700);
function i(e) {
    let t = (0, r.useRef)(null);
    return (
        (0, r.useEffect)(() => {
            t.current = e;
        }, [e]),
        t.current
    );
}
