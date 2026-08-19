"use strict";
r.d(t, { _: () => i });
var n = r(654978),
    o = r(582128);
function i(e, t, r, i) {
    let a = (0, n.J)(r),
        s = null == r;
    (0, o.useEffect)(() => {
        if (s || !e.current) return;
        let r = e.current;
        return (
            r.addEventListener(t, a, i),
            () => {
                r.removeEventListener(t, a, i);
            }
        );
    }, [e, t, i, s, a]);
}
