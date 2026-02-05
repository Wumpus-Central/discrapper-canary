"use strict";
n.d(t, { D: () => s });
var r = n(284009),
    i = n.n(r),
    a = n(661191);
function s(e) {
    i()(
        e.length <= 2 || a.default.compare(e[0].id, e[e.length - 1].id) >= 0,
        "messages must be sorted in descending order.",
    );
}
