"use strict";
r.d(t, { A: () => s });
var n = r(64700),
    i = r(859141),
    o = r.n(i),
    a = {};
function s(e, t) {
    void 0 === t && (t = o());
    var r = (0, n.useRef)(a),
        i = r.current;
    return (
        (0, n.useEffect)(function () {
            r.current = i;
        }),
        (r.current !== a && t(e, r.current)) || (i = e),
        i
    );
}
