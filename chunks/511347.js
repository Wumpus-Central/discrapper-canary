"use strict";
n.d(t, { A: () => i });
var r = n(64700);
function i(e) {
    let t = r.useRef(null),
        n = r.useCallback(
            (n) => {
                null != e && ("function" == typeof e ? e(n) : (e.current = n), (t.current = n));
            },
            [e],
        );
    return [t, n];
}
