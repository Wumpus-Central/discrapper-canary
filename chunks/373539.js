n(42547),
    (e.exports = function (e, t) {
        var n = e.getSelection(),
            r = e.getCurrentContent(),
            i = n.getStartKey(),
            a = n.getStartOffset(),
            o = i,
            s = 0;
        if (t > a) {
            var l = r.getKeyBefore(i);
            null == l ? (o = i) : ((o = l), (s = r.getBlockForKey(l).getText().length));
        } else s = a - t;
        return n.merge({
            focusKey: o,
            focusOffset: s,
            isBackward: !0,
        });
    });
