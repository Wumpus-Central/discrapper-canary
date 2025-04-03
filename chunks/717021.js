var n = r(166763),
    i = r(133092),
    o = r(566833),
    a = r(467159),
    u = null;
t.exports = {
    cut: function (t) {
        var e = t.getCurrentContent(),
            r = t.getSelection(),
            s = null;
        if (r.isCollapsed()) {
            var c = r.getAnchorKey(),
                l = e.getBlockForKey(c).getLength();
            if (l === r.getAnchorOffset()) {
                var f = e.getKeyAfter(c);
                if (null == f) return t;
                s = r.set('focusKey', f).set('focusOffset', 0);
            } else s = r.set('focusOffset', l);
        } else s = r;
        u = o(e, (s = a(s)));
        var p = n.removeRange(e, s, 'forward');
        return p === e ? t : i.push(t, p, 'remove-range');
    },
    paste: function (t) {
        if (!u) return t;
        var e = n.replaceWithFragment(t.getCurrentContent(), t.getSelection(), u);
        return i.push(t, e, 'insert-fragment');
    }
};
