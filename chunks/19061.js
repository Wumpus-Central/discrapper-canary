"use strict";
n.d(t, { T: () => i });
var r = n(206311);
function i(e) {
    for (let t of r.B) {
        if (e[t] < 0) return -1;
        if (e[t] > 0) return 1;
    }
    return 0;
}
n(632459);
