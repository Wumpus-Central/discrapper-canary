var r = n(116740).Map;
e.exports = function (e, t, n) {
    var i = t.getStartKey(),
        a = t.getEndKey(),
        s = e.getBlockMap(),
        o = s
            .toSeq()
            .skipUntil(function (e, t) {
                return t === i;
            })
            .takeUntil(function (e, t) {
                return t === a;
            })
            .concat(r([[a, s.get(a)]]))
            .map(n);
    return e.merge({
        blockMap: s.merge(o),
        selectionBefore: t,
        selectionAfter: t,
    });
};
