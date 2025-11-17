var r = n(50153),
    i = n(257469),
    a = n(581079);
function o(e, t, n) {
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
function s(e, t, n) {
    var i = t.getCharacterList(),
        a = n > 0 ? i.get(n - 1) : void 0,
        s = n < i.count() ? i.get(n) : void 0,
        l = a ? a.getEntity() : void 0,
        c = s ? s.getEntity() : void 0;
    if (c && c === l && "MUTABLE" !== e.__get(c).getMutability()) {
        for (var u, d = o(i, c, n), f = d.start, _ = d.end; f < _; )
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
        o = t.getStartOffset(),
        l = n.get(a),
        c = s(r, l, o);
    c !== l && (i[a] = c);
    var u = t.getEndKey(),
        d = t.getEndOffset(),
        f = n.get(u);
    a === u && (f = c);
    var _ = s(r, f, d);
    return (_ !== f && (i[u] = _), Object.keys(i).length)
        ? e.merge({
              blockMap: n.merge(i),
              selectionAfter: t,
          })
        : e.set("selectionAfter", t);
};
