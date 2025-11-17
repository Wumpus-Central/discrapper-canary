var r = n(720218),
    i = n(384404),
    a = n(511076),
    o = n(467159),
    s = null;
e.exports = {
    cut: function (e) {
        var t = e.getCurrentContent(),
            n = e.getSelection(),
            l = null;
        if (n.isCollapsed()) {
            var c = n.getAnchorKey(),
                u = t.getBlockForKey(c).getLength();
            if (u === n.getAnchorOffset()) {
                var d = t.getKeyAfter(c);
                if (null == d) return e;
                l = n.set("focusKey", d).set("focusOffset", 0);
            } else l = n.set("focusOffset", u);
        } else l = n;
        s = a(t, (l = o(l)));
        var f = r.removeRange(t, l, "forward");
        return f === t ? e : i.push(e, f, "remove-range");
    },
    paste: function (e) {
        if (!s) return e;
        var t = r.replaceWithFragment(e.getCurrentContent(), e.getSelection(), s);
        return i.push(e, t, "insert-fragment");
    },
};
