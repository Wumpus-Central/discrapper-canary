var r = n(65183).Map;
e.exports = function (e, t, n) {
    var i = t.getStartKey(),
        a = t.getEndKey(),
        o = e.getBlockMap(),
        s = o
            .toSeq()
            .skipUntil(function (e, t) {
                return t === i;
            })
            .takeUntil(function (e, t) {
                return t === a;
            })
            .concat(r([[a, o.get(a)]]))
            .map(n);
    return e.merge({
        blockMap: o.merge(s),
        selectionBefore: t,
        selectionAfter: t,
    });
};
