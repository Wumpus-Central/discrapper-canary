"use strict";
var n = r(954055),
    i = r(661551)("draft_tree_data_support");
t.exports = function (t, e, r) {
    var o = t.getSelection(),
        a = t.getCurrentContent(),
        s = o,
        u = o.getAnchorKey(),
        c = o.getFocusKey(),
        l = a.getBlockForKey(u);
    if (i && "forward" === r && u !== c) return a;
    if (o.isCollapsed()) {
        if ("forward" === r) {
            if (t.isSelectionAtEndOfContent()) return a;
            if (i && o.getAnchorOffset() === a.getBlockForKey(u).getLength()) {
                var f = a.getBlockForKey(l.nextSibling);
                if (!f || 0 === f.getLength()) return a;
            }
        } else if (t.isSelectionAtStartOfContent()) return a;
        if ((s = e(t)) === o) return a;
    }
    return n.removeRange(a, s, r);
};
