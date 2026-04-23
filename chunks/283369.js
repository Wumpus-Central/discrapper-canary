"use strict";
var n = r(387739),
    i = r(116740).Map;
function o(t, e, r, o) {
    var a = t.getBlockMap(),
        s = e.getStartKey(),
        u = e.getStartOffset(),
        c = e.getEndKey(),
        l = e.getEndOffset(),
        f = a
            .skipUntil(function (t, e) {
                return e === s;
            })
            .takeUntil(function (t, e) {
                return e === c;
            })
            .concat(i([[c, a.get(c)]]))
            .map(function (t, e) {
                s === c ? ((i = u), (a = l)) : ((i = e === s ? u : 0), (a = e === c ? l : t.getLength()));
                for (var i, a, f, p = t.getCharacterList(); i < a; )
                    (f = p.get(i)), (p = p.set(i, o ? n.applyStyle(f, r) : n.removeStyle(f, r))), i++;
                return t.set("characterList", p);
            });
    return t.merge({ blockMap: a.merge(f), selectionBefore: e, selectionAfter: e });
}
t.exports = {
    add: function (t, e, r) {
        return o(t, e, r, !0);
    },
    remove: function (t, e, r) {
        return o(t, e, r, !1);
    },
};
