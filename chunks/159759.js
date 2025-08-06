(n(42547),
    (e.exports = function (e, t) {
        var n = e.getSelection(),
            r = e.getCurrentContent(),
            i = n.getStartKey(),
            o = n.getStartOffset(),
            a = i,
            s = 0;
        if (t > o) {
            var l = r.getKeyBefore(i);
            null == l ? (a = i) : ((a = l), (s = r.getBlockForKey(l).getText().length));
        } else s = o - t;
        return n.merge({
            focusKey: a,
            focusOffset: s,
            isBackward: !0
        });
    }));
