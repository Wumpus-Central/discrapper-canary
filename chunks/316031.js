"use strict";
function r(e) {
    return null != e && new Date(e) > new Date();
}
function i(e) {
    return r(e?.communicationDisabledUntil);
}
n.d(t, { Z: () => i, n: () => r });
