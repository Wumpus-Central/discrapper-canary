var r = n(65183).Map;
e.exports = function (e, t, n) {
    var i = t.getStartKey(),
        o = t.getEndKey(),
        a = e.getBlockMap(),
        s = a
            .toSeq()
            .skipUntil(function (e, t) {
                return t === i;
            })
            .takeUntil(function (e, t) {
                return t === o;
            })
            .concat(r([[o, a.get(o)]]))
            .map(n);
    return e.merge({
        blockMap: a.merge(s),
        selectionBefore: t,
        selectionAfter: t
    });
};
