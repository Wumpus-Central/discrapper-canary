"use strict";
var n = r(391561),
    i = r(116740);
t.exports = function (t, e, r) {
    var o = t.getBlockMap(),
        a = e.getStartKey(),
        s = e.getStartOffset(),
        u = e.getEndKey(),
        c = e.getEndOffset(),
        l = o
            .skipUntil(function (t, e) {
                return e === a;
            })
            .takeUntil(function (t, e) {
                return e === u;
            })
            .toOrderedMap()
            .merge(i.OrderedMap([[u, o.get(u)]]))
            .map(function (t, e) {
                var i = e === u ? c : t.getLength();
                return n(t, e === a ? s : 0, i, r);
            });
    return t.merge({ blockMap: o.merge(l), selectionBefore: e, selectionAfter: e });
};
