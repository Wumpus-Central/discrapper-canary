var r = n(621796),
    i = n(172367),
    o = n(148727);
e.exports = function (e) {
    var t,
        n,
        a = e.getSelection();
    if (!a.isCollapsed()) return e;
    var s = a.getAnchorOffset();
    if (0 === s) return e;
    var l = a.getAnchorKey(),
        c = e.getCurrentContent(),
        u = c.getBlockForKey(l).getLength();
    if (u <= 1) return e;
    s === u
        ? ((t = a.set("anchorOffset", s - 1)), (n = a))
        : (n = (t = a.set("focusOffset", s + 1)).set("anchorOffset", s + 1));
    var d = o(c, t),
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
