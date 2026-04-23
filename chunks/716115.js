"use strict";
n.d(t, { l: () => i });
var r = n(124651);
function i(e, t) {
    switch (t) {
        case r.rO.BIGINT:
            return e.toBigInt();
        case r.rO.NUMBER:
            return e.toNumber();
        default:
            return e.toString();
    }
}
