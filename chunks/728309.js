var r = n(391561),
    i = n(116740);
e.exports = function (e, t, n) {
    var a = e.getBlockMap(),
        s = t.getStartKey(),
        o = t.getStartOffset(),
        l = t.getEndKey(),
        c = t.getEndOffset(),
        u = a
            .skipUntil(function (e, t) {
                return t === s;
            })
            .takeUntil(function (e, t) {
                return t === l;
            })
            .toOrderedMap()
            .merge(i.OrderedMap([[l, a.get(l)]]))
            .map(function (e, t) {
                var i = t === s ? o : 0,
                    a = t === l ? c : e.getLength();
                return r(e, i, a, n);
            });
    return e.merge({
        blockMap: a.merge(u),
        selectionBefore: t,
        selectionAfter: t,
    });
};
