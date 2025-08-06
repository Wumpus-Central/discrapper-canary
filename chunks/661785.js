var r = n(65183),
    i = n(475854),
    o = n(581079),
    a = r.Repeat;
e.exports = function (e, t, n, r) {
    t.isCollapsed() || o(!1);
    var s = null;
    if ((null != n && (s = n.length), null == s || 0 === s)) return e;
    var l = e.getBlockMap(),
        c = t.getStartKey(),
        u = t.getStartOffset(),
        d = l.get(c),
        f = d.getText(),
        _ = d.merge({
            text: f.slice(0, u) + n + f.slice(u, d.getLength()),
            characterList: i(d.getCharacterList(), a(r, s).toList(), u),
        }),
        p = u + s;
    return e.merge({
        blockMap: l.set(c, _),
        selectionAfter: t.merge({
            anchorOffset: p,
            focusOffset: p,
        }),
    });
};
