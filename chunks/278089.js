"use strict";
var n = r(954055),
    i = r(869639),
    o = r(410475),
    a = r(670200),
    s = null;
t.exports = {
    cut: function (t) {
        var e = t.getCurrentContent(),
            r = t.getSelection(),
            u = null;
        if (r.isCollapsed()) {
            var c = r.getAnchorKey(),
                l = e.getBlockForKey(c).getLength();
            if (l === r.getAnchorOffset()) {
                var f = e.getKeyAfter(c);
                if (null == f) return t;
                u = r.set("focusKey", f).set("focusOffset", 0);
            } else u = r.set("focusOffset", l);
        } else u = r;
        s = o(e, (u = a(u)));
        var p = n.removeRange(e, u, "forward");
        return p === e ? t : i.push(t, p, "remove-range");
    },
    paste: function (t) {
        if (!s) return t;
        var e = n.replaceWithFragment(t.getCurrentContent(), t.getSelection(), s);
        return i.push(t, e, "insert-fragment");
    },
};
