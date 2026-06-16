"use strict";
var n = r(387739),
    i = r(265930),
    o = r(797686);
function a(t, e, r) {
    var a = e.getCharacterList(),
        s = r > 0 ? a.get(r - 1) : void 0,
        u = r < a.count() ? a.get(r) : void 0,
        c = s ? s.getEntity() : void 0,
        l = u ? u.getEntity() : void 0;
    if (l && l === c && "MUTABLE" !== t.__get(l).getMutability()) {
        for (
            var f,
                p,
                h =
                    (i(
                        a,
                        function (t, e) {
                            return t.getEntity() === e.getEntity();
                        },
                        function (t) {
                            return t.getEntity() === l;
                        },
                        function (t, e) {
                            t <= r && e >= r && (f = { start: t, end: e });
                        },
                    ),
                    "object" != typeof f && o(!1),
                    f),
                d = h.start,
                g = h.end;
            d < g;
        )
            (p = a.get(d)), (a = a.set(d, n.applyEntity(p, null))), d++;
        return e.set("characterList", a);
    }
    return e;
}
t.exports = function (t, e) {
    var r = t.getBlockMap(),
        n = t.getEntityMap(),
        i = {},
        o = e.getStartKey(),
        s = e.getStartOffset(),
        u = r.get(o),
        c = a(n, u, s);
    c !== u && (i[o] = c);
    var l = e.getEndKey(),
        f = e.getEndOffset(),
        p = r.get(l);
    o === l && (p = c);
    var h = a(n, p, f);
    return (h !== p && (i[l] = h), Object.keys(i).length)
        ? t.merge({ blockMap: r.merge(i), selectionAfter: e })
        : t.set("selectionAfter", e);
};
