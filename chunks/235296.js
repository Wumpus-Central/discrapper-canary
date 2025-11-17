var r = n(964339),
    i = n(65183);
e.exports = function (e, t, n) {
    var a = e.getBlockMap(),
        o = t.getStartKey(),
        s = t.getStartOffset(),
        l = t.getEndKey(),
        c = t.getEndOffset(),
        u = a
            .skipUntil(function (e, t) {
                return t === o;
            })
            .takeUntil(function (e, t) {
                return t === l;
            })
            .toOrderedMap()
            .merge(i.OrderedMap([[l, a.get(l)]]))
            .map(function (e, t) {
                var i = t === o ? s : 0,
                    a = t === l ? c : e.getLength();
                return r(e, i, a, n);
            });
    return e.merge({
        blockMap: a.merge(u),
        selectionBefore: t,
        selectionAfter: t,
    });
};
