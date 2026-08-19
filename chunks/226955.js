"use strict";
e.exports = function (e, t, n, o) {
    var i = this;
    function a(t) {
        i.fireCallback(n, t, e),
            "keyup" !== o && (i.ignoreNextKeyup = r(780594)(t)),
            setTimeout(function () {
                i.resetSequences();
            }, 10);
    }
    i.sequenceLevels[e] = 0;
    for (var s = 0; s < t.length; ++s) {
        var l =
            s + 1 === t.length
                ? a
                : (function (t) {
                      return function () {
                          (i.nextExpectedAction = t), ++i.sequenceLevels[e], i.resetSequenceTimer();
                      };
                  })(o || i.getKeyInfo(t[s + 1]).action);
        i.bindSingle(t[s], l, o, e, s);
    }
};
