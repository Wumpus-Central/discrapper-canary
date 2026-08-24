"use strict";
r.d(t, { F: () => o });
var n = r(654978),
    i = r(582128);
function o(e, t, r) {
    let o = (0, n.J)(() => {
        r && r(t);
    });
    (0, i.useEffect)(() => {
        var t;
        let r = null == e || null == (t = e.current) ? void 0 : t.form;
        return (
            null == r || r.addEventListener("reset", o),
            () => {
                null == r || r.removeEventListener("reset", o);
            }
        );
    }, [e, o]);
}
