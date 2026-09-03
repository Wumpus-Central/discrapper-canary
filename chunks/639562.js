e.exports = function (e) {
    e = e || {};
    var t,
        r = !1;
    for (t in this.sequenceLevels) {
        if (e[t]) {
            r = !0;
            continue;
        }
        this.sequenceLevels[t] = 0;
    }
    r || (this.nextExpectedAction = !1);
};
