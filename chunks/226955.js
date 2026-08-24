"use strict";
e.exports = function (e, t, n, i) {
    var o = this;
    function a(t) {
        o.fireCallback(n, t, e),
            "keyup" !== i && (o.ignoreNextKeyup = r(780594)(t)),
            setTimeout(function () {
                o.resetSequences();
            }, 10);
    }
    o.sequenceLevels[e] = 0;
    for (var s = 0; s < t.length; ++s) {
        var l =
            s + 1 === t.length
                ? a
                : (function (t) {
                      return function () {
                          (o.nextExpectedAction = t), ++o.sequenceLevels[e], o.resetSequenceTimer();
                      };
                  })(i || o.getKeyInfo(t[s + 1]).action);
        o.bindSingle(t[s], l, i, e, s);
    }
};
