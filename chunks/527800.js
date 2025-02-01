e.exports = function (e, t, i, r) {
    var a = this;
    function s(t) {
        return function () {
            (a.nextExpectedAction = t), ++a.sequenceLevels[e], a.resetSequenceTimer();
        };
    }
    function o(t) {
        var s;
        a.fireCallback(i, t, e),
            'keyup' !== r && ((s = n(619820)), (a.ignoreNextKeyup = s(t))),
            setTimeout(function () {
                a.resetSequences();
            }, 10);
    }
    a.sequenceLevels[e] = 0;
    for (var l = 0; l < t.length; ++l) {
        var u = l + 1 === t.length ? o : s(r || a.getKeyInfo(t[l + 1]).action);
        a.bindSingle(t[l], u, r, e, l);
    }
};
