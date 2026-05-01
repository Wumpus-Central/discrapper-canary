"use strict";
r.d(t, { A: () => i });
var n = r(64700),
    s = r(859141),
    a = r.n(s),
    o = {};
function i(e, t) {
    void 0 === t && (t = a());
    var r = (0, n.useRef)(o),
        s = r.current;
    return (
        (0, n.useEffect)(function () {
            r.current = s;
        }),
        (r.current !== o && t(e, r.current)) || (s = e),
        s
    );
}
