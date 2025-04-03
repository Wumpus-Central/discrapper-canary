var n = r(65183),
    i = r(489593),
    o = r(581079),
    a = n.Repeat;
t.exports = function (t, e, r, n) {
    e.isCollapsed() || o(!1);
    var u = null;
    if ((null != r && (u = r.length), null == u || 0 === u)) return t;
    var s = t.getBlockMap(),
        c = e.getStartKey(),
        l = e.getStartOffset(),
        f = s.get(c),
        p = f.getText(),
        h = f.merge({
            text: p.slice(0, l) + r + p.slice(l, f.getLength()),
            characterList: i(f.getCharacterList(), a(n, u).toList(), l)
        }),
        d = l + u;
    return t.merge({
        blockMap: s.set(c, h),
        selectionAfter: e.merge({
            anchorOffset: d,
            focusOffset: d
        })
    });
};
