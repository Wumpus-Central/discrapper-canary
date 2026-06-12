"use strict";
n.d(t, { D: () => a });
var i = n(284009),
    r = n.n(i),
    s = n(935208);
function a(e) {
    r()(
        e.length <= 2 || s.default.compare(e[0].id, e[e.length - 1].id) >= 0,
        "messages must be sorted in descending order.",
    );
}
