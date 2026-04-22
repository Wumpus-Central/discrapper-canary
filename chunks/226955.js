"use strict";
e.exports = function (e, t, r, i) {
    var s = this;
    function a(t) {
        s.fireCallback(r, t, e),
            "keyup" !== i && (s.ignoreNextKeyup = n(780594)(t)),
            setTimeout(function () {
                s.resetSequences();
            }, 10);
    }
    s.sequenceLevels[e] = 0;
    for (var o = 0; o < t.length; ++o) {
        var l =
            o + 1 === t.length
                ? a
                : (function (t) {
                      return function () {
                          (s.nextExpectedAction = t), ++s.sequenceLevels[e], s.resetSequenceTimer();
                      };
                  })(i || s.getKeyInfo(t[o + 1]).action);
        s.bindSingle(t[o], l, i, e, o);
    }
};
