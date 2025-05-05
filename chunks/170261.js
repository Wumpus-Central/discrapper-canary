var n = r(65183).Map;
t.exports = function (t, e, r) {
    var i = e.getStartKey(),
        o = e.getEndKey(),
        a = t.getBlockMap(),
        u = a
            .toSeq()
            .skipUntil(function (t, e) {
                return e === i;
            })
            .takeUntil(function (t, e) {
                return e === o;
            })
            .concat(n([[o, a.get(o)]]))
            .map(r);
    return t.merge({
        blockMap: a.merge(u),
        selectionBefore: e,
        selectionAfter: e
    });
};
