"use strict";
function i(e) {
    return Number.isFinite(e) ? Math.max(0, Math.min(1, e)) : 1;
}
function r(e, t) {
    return e * i(t);
}
n.d(t, { i: () => i, l: () => r });
