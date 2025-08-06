var r = n(359282),
    i = n(65183).Map;
function o(e, t, n, o) {
    var a = e.getBlockMap(),
        s = t.getStartKey(),
        l = t.getStartOffset(),
        c = t.getEndKey(),
        u = t.getEndOffset(),
        d = a
            .skipUntil(function (e, t) {
                return t === s;
            })
            .takeUntil(function (e, t) {
                return t === c;
            })
            .concat(i([[c, a.get(c)]]))
            .map(function (e, t) {
                s === c ? ((i = l), (a = u)) : ((i = t === s ? l : 0), (a = t === c ? u : e.getLength()));
                for (var i, a, d, f = e.getCharacterList(); i < a; ) ((d = f.get(i)), (f = f.set(i, o ? r.applyStyle(d, n) : r.removeStyle(d, n))), i++);
                return e.set('characterList', f);
            });
    return e.merge({
        blockMap: a.merge(d),
        selectionBefore: t,
        selectionAfter: t
    });
}
e.exports = {
    add: function (e, t, n) {
        return o(e, t, n, !0);
    },
    remove: function (e, t, n) {
        return o(e, t, n, !1);
    }
};
