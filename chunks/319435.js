"use strict";
n.d(t, { _: () => a });
var r = n(654978),
    i = n(582128);
function a(e, t, n, a) {
    let o = (0, r.J)(n),
        s = null == n;
    (0, i.useEffect)(() => {
        if (s || !e.current) return;
        let n = e.current;
        return (
            n.addEventListener(t, o, a),
            () => {
                n.removeEventListener(t, o, a);
            }
        );
    }, [e, t, a, s, o]);
}
