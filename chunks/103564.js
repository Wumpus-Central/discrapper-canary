"use strict";
r.d(t, { F: () => i });
var n = r(654978),
    o = r(582128);
function i(e, t, r) {
    let i = (0, n.J)(() => {
        r && r(t);
    });
    (0, o.useEffect)(() => {
        var t;
        let r = null == e || null == (t = e.current) ? void 0 : t.form;
        return (
            null == r || r.addEventListener("reset", i),
            () => {
                null == r || r.removeEventListener("reset", i);
            }
        );
    }, [e, i]);
}
