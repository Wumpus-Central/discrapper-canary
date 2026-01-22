var r = n(387739),
    i = n(116740).Map;

function a(e, t, n, a) {
    var s = e.getBlockMap(),
        o = t.getStartKey(),
        l = t.getStartOffset(),
        c = t.getEndKey(),
        u = t.getEndOffset(),
        d = s
            .skipUntil(function (e, t) {
                return t === o;
            })
            .takeUntil(function (e, t) {
                return t === c;
            })
            .concat(i([[c, s.get(c)]]))
            .map(function (e, t) {
                o === c ? ((i = l), (s = u)) : ((i = t === o ? l : 0), (s = t === c ? u : e.getLength()));
                for (var i, s, d, f = e.getCharacterList(); i < s; )
                    (d = f.get(i)), (f = f.set(i, a ? r.applyStyle(d, n) : r.removeStyle(d, n))), i++;
                return e.set("characterList", f);
            });
    return e.merge({
        blockMap: s.merge(d),
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
