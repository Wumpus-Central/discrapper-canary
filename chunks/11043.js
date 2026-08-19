"use strict";
r.d(t, { A: () => s });
var n = r(582128),
    o = r(859141),
    i = r.n(o),
    a = {};
function s(e, t) {
    void 0 === t && (t = i());
    var r = (0, n.useRef)(a),
        o = r.current;
    return (
        (0, n.useEffect)(function () {
            r.current = o;
        }),
        (r.current !== a && t(e, r.current)) || (o = e),
        o
    );
}
