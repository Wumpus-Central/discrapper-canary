e.exports = function (e, t, r, i) {
    var o = this;
    function a(t) {
        return function () {
            (o.nextExpectedAction = t), ++o.sequenceLevels[e], o.resetSequenceTimer();
        };
    }
    function s(t) {
        o.fireCallback(r, t, e),
            'keyup' !== i && (o.ignoreNextKeyup = n(619820)(t)),
            setTimeout(function () {
                o.resetSequences();
            }, 10);
    }
    o.sequenceLevels[e] = 0;
    for (var l = 0; l < t.length; ++l) {
        var c = l + 1 === t.length ? s : a(i || o.getKeyInfo(t[l + 1]).action);
        o.bindSingle(t[l], c, i, e, l);
    }
};
