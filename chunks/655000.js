var n = r(621796),
    i = r(172367),
    o = r(148727);
t.exports = function (t) {
    var e,
        r,
        a = t.getSelection();
    if (!a.isCollapsed()) return t;
    var u = a.getAnchorOffset();
    if (0 === u) return t;
    var s = a.getAnchorKey(),
        c = t.getCurrentContent(),
        l = c.getBlockForKey(s).getLength();
    if (l <= 1) return t;
    u === l ? ((e = a.set('anchorOffset', u - 1)), (r = a)) : (r = (e = a.set('focusOffset', u + 1)).set('anchorOffset', u + 1));
    var f = o(c, e),
        p = n.removeRange(c, e, 'backward'),
        h = p.getSelectionAfter(),
        d = h.getAnchorOffset() - 1,
        g = h.merge({
            anchorOffset: d,
            focusOffset: d
        }),
        y = n.replaceWithFragment(p, g, f),
        v = i.push(t, y, 'insert-fragment');
    return i.acceptSelection(v, r);
};
