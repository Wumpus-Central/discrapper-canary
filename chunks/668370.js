e.exports = function (e, t, n, r) {
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
            .concat([[o, a.get(o)]])
            .map(function (e) {
                var t = e.getDepth() + n;
                return (t = Math.max(0, Math.min(t, r))), e.set("depth", t);
            });
    return (
        (a = a.merge(s)),
        e.merge({
            blockMap: a,
            selectionBefore: t,
            selectionAfter: t,
        })
    );
};
