var r = n(720218),
    i = n(384404),
    a = n(511076);
e.exports = function (e) {
    var t,
        n,
        o = e.getSelection();
    if (!o.isCollapsed()) return e;
    var s = o.getAnchorOffset();
    if (0 === s) return e;
    var l = o.getAnchorKey(),
        c = e.getCurrentContent(),
        u = c.getBlockForKey(l).getLength();
    if (u <= 1) return e;
    s === u
        ? ((t = o.set("anchorOffset", s - 1)), (n = o))
        : (n = (t = o.set("focusOffset", s + 1)).set("anchorOffset", s + 1));
    var d = a(c, t),
        f = r.removeRange(c, t, "backward"),
        _ = f.getSelectionAfter(),
        p = _.getAnchorOffset() - 1,
        h = _.merge({
            anchorOffset: p,
            focusOffset: p,
        }),
        m = r.replaceWithFragment(f, h, d),
        g = i.push(e, m, "insert-fragment");
    return i.acceptSelection(g, n);
};
