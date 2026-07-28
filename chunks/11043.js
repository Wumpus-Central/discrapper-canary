"use strict";
n.d(t, { A: () => s });
var r = n(582128),
    i = n(859141),
    a = n.n(i),
    o = {};
function s(e, t) {
    void 0 === t && (t = a());
    var n = (0, r.useRef)(o),
        i = n.current;
    return (
        (0, r.useEffect)(function () {
            n.current = i;
        }),
        (n.current !== o && t(e, n.current)) || (i = e),
        i
    );
}
