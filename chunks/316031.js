"use strict";
function i(e) {
    return null != e && new Date(e) > new Date();
}
function r(e) {
    return i(e?.communicationDisabledUntil);
}
n.d(t, { Z: () => r, n: () => i });
