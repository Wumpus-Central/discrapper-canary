"use strict";
e.exports = function (e) {
    e = e || {};
    var t,
        n = !1;
    for (t in this.sequenceLevels) {
        if (e[t]) {
            n = !0;
            continue;
        }
        this.sequenceLevels[t] = 0;
    }
    n || (this.nextExpectedAction = !1);
};
