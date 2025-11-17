var r = n(720218),
    i = n(40375)("draft_tree_data_support");
e.exports = function (e, t, n) {
    var a = e.getSelection(),
        o = e.getCurrentContent(),
        s = a,
        l = a.getAnchorKey(),
        c = a.getFocusKey(),
        u = o.getBlockForKey(l);
    if (i && "forward" === n && l !== c) return o;
    if (a.isCollapsed()) {
        if ("forward" === n) {
            if (e.isSelectionAtEndOfContent()) return o;
            if (i && a.getAnchorOffset() === o.getBlockForKey(l).getLength()) {
                var d = o.getBlockForKey(u.nextSibling);
                if (!d || 0 === d.getLength()) return o;
            }
        } else if (e.isSelectionAtStartOfContent()) return o;
        if ((s = t(e)) === a) return o;
    }
    return r.removeRange(o, s, n);
};
