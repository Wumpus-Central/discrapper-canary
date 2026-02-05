"use strict";
n.d(t, { F: () => a });
var r = n(959462),
    i = n(64700);
function a(e, t, n) {
    let a = (0, r.J)(() => {
        n && n(t);
    });
    (0, i.useEffect)(() => {
        var t;
        let n = null == e || null == (t = e.current) ? void 0 : t.form;
        return (
            null == n || n.addEventListener("reset", a),
            () => {
                null == n || n.removeEventListener("reset", a);
            }
        );
    }, [e, a]);
}
