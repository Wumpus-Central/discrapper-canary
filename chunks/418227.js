var r = n(954055),
    i = n(661551)("draft_tree_data_support");
e.exports = function (e, t, n) {
    var a = e.getSelection(),
        s = e.getCurrentContent(),
        o = a,
        l = a.getAnchorKey(),
        c = a.getFocusKey(),
        u = s.getBlockForKey(l);
    if (i && "forward" === n && l !== c) return s;
    if (a.isCollapsed()) {
        if ("forward" === n) {
            if (e.isSelectionAtEndOfContent()) return s;
            if (i && a.getAnchorOffset() === s.getBlockForKey(l).getLength()) {
                var d = s.getBlockForKey(u.nextSibling);
                if (!d || 0 === d.getLength()) return s;
            }
        } else if (e.isSelectionAtStartOfContent()) return s;
        if ((o = t(e)) === a) return s;
    }
    return r.removeRange(s, o, n);
};
