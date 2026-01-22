var r = n(954055),
    i = n(869639),
    a = n(410475);
e.exports = function (e) {
    var t,
        n,
        s = e.getSelection();
    if (!s.isCollapsed()) return e;
    var o = s.getAnchorOffset();
    if (0 === o) return e;
    var l = s.getAnchorKey(),
        c = e.getCurrentContent(),
        u = c.getBlockForKey(l).getLength();
    if (u <= 1) return e;
    o === u
        ? ((t = s.set("anchorOffset", o - 1)), (n = s))
        : (n = (t = s.set("focusOffset", o + 1)).set("anchorOffset", o + 1));
    var d = a(c, t),
        f = r.removeRange(c, t, "backward"),
        p = f.getSelectionAfter(),
        _ = p.getAnchorOffset() - 1,
        h = p.merge({
            anchorOffset: _,
            focusOffset: _,
        }),
        m = r.replaceWithFragment(f, h, d),
        g = i.push(e, m, "insert-fragment");
    return i.acceptSelection(g, n);
};
