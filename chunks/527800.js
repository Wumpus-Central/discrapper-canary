e.exports = function (e, n, i, a) {
    var o = this;
    function s(n) {
        return function () {
            (o.nextExpectedAction = n), ++o.sequenceLevels[e], o.resetSequenceTimer();
        };
    }
    function l(n) {
        var s;
        o.fireCallback(i, n, e),
            'keyup' !== a && ((s = r(619820)), (o.ignoreNextKeyup = s(n))),
            setTimeout(function () {
                o.resetSequences();
            }, 10);
    }
    o.sequenceLevels[e] = 0;
    for (var u = 0; u < n.length; ++u) {
        var c = u + 1 === n.length ? l : s(a || o.getKeyInfo(n[u + 1]).action);
        o.bindSingle(n[u], c, a, e, u);
    }
};
