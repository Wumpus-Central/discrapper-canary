var r = n(50153),
    i = n(65183).Map;
function a(e, t, n, a) {
    var o = e.getBlockMap(),
        s = t.getStartKey(),
        l = t.getStartOffset(),
        c = t.getEndKey(),
        u = t.getEndOffset(),
        d = o
            .skipUntil(function (e, t) {
                return t === s;
            })
            .takeUntil(function (e, t) {
                return t === c;
            })
            .concat(i([[c, o.get(c)]]))
            .map(function (e, t) {
                s === c ? ((i = l), (o = u)) : ((i = t === s ? l : 0), (o = t === c ? u : e.getLength()));
                for (var i, o, d, f = e.getCharacterList(); i < o; )
                    (d = f.get(i)), (f = f.set(i, a ? r.applyStyle(d, n) : r.removeStyle(d, n))), i++;
                return e.set("characterList", f);
            });
    return e.merge({
        blockMap: o.merge(d),
        selectionBefore: t,
        selectionAfter: t,
    });
}
e.exports = {
    add: function (e, t, n) {
        return a(e, t, n, !0);
    },
    remove: function (e, t, n) {
        return a(e, t, n, !1);
    },
};
