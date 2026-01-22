var r = n(387739),
    i = n(265930),
    a = n(797686);
function s(e, t, n) {
    var r;
    return (
        i(
            e,
            function (e, t) {
                return e.getEntity() === t.getEntity();
            },
            function (e) {
                return e.getEntity() === t;
            },
            function (e, t) {
                e <= n &&
                    t >= n &&
                    (r = {
                        start: e,
                        end: t,
                    });
            },
        ),
        "object" != typeof r && a(!1),
        r
    );
}
function o(e, t, n) {
    var i = t.getCharacterList(),
        a = n > 0 ? i.get(n - 1) : void 0,
        o = n < i.count() ? i.get(n) : void 0,
        l = a ? a.getEntity() : void 0,
        c = o ? o.getEntity() : void 0;
    if (c && c === l && "MUTABLE" !== e.__get(c).getMutability()) {
        for (var u, d = s(i, c, n), f = d.start, p = d.end; f < p; )
            (u = i.get(f)), (i = i.set(f, r.applyEntity(u, null))), f++;
        return t.set("characterList", i);
    }
    return t;
}
e.exports = function (e, t) {
    var n = e.getBlockMap(),
        r = e.getEntityMap(),
        i = {},
        a = t.getStartKey(),
        s = t.getStartOffset(),
        l = n.get(a),
        c = o(r, l, s);
    c !== l && (i[a] = c);
    var u = t.getEndKey(),
        d = t.getEndOffset(),
        f = n.get(u);
    a === u && (f = c);
    var p = o(r, f, d);
    return (p !== f && (i[u] = p), Object.keys(i).length)
        ? e.merge({
              blockMap: n.merge(i),
              selectionAfter: t,
          })
        : e.set("selectionAfter", t);
};
