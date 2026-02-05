"use strict";
e.exports = function (e, t, r, i) {
    var a = this;
    function s(t) {
        return function () {
            (a.nextExpectedAction = t), ++a.sequenceLevels[e], a.resetSequenceTimer();
        };
    }
    function o(t) {
        a.fireCallback(r, t, e),
            "keyup" !== i && (a.ignoreNextKeyup = n(780594)(t)),
            setTimeout(function () {
                a.resetSequences();
            }, 10);
    }
    a.sequenceLevels[e] = 0;
    for (var l = 0; l < t.length; ++l) {
        var u = l + 1 === t.length ? o : s(i || a.getKeyInfo(t[l + 1]).action);
        a.bindSingle(t[l], u, i, e, l);
    }
};
