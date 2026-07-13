var n = r(954055),
    o = r(869639),
    a = r(410475);
e.exports = function (e) {
    var t,
        r,
        c = e.getSelection();
    if (!c.isCollapsed()) return e;
    var s = c.getAnchorOffset();
    if (0 === s) return e;
    var u = c.getAnchorKey(),
        l = e.getCurrentContent(),
        f = l.getBlockForKey(u).getLength();
    if (f <= 1) return e;
    s === f
        ? ((t = c.set("anchorOffset", s - 1)), (r = c))
        : (r = (t = c.set("focusOffset", s + 1)).set("anchorOffset", s + 1));
    var i = a(l, t),
        g = n.removeRange(l, t, "backward"),
        d = g.getSelectionAfter(),
        h = d.getAnchorOffset() - 1,
        p = d.merge({ anchorOffset: h, focusOffset: h }),
        v = n.replaceWithFragment(g, p, i),
        C = o.push(e, v, "insert-fragment");
    return o.acceptSelection(C, r);
};
