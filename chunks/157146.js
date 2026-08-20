"use strict";
n.d(t, { Un: () => r, dV: () => s, fS: () => a });
var i = n(873298);
let r = "(min-width: 1024px) and (min-height: 820px)",
    a = "cozy";
function s(e, t) {
    switch (e) {
        case i.NS.RESPONSIVE:
            return t;
        case i.NS.COZY:
            return "cozy";
        case i.NS.DEFAULT:
            return "default";
        case i.NS.COMPACT:
            return "compact";
        default:
            return "default";
    }
}
