n(945730),
    (e.exports = function (e, t) {
        var n = e.getSelection(),
            r = e.getCurrentContent(),
            i = n.getStartKey(),
            a = n.getStartOffset(),
            s = i,
            o = 0;
        if (t > a) {
            var l = r.getKeyBefore(i);
            null == l ? (s = i) : ((s = l), (o = r.getBlockForKey(l).getText().length));
        } else o = a - t;
        return n.merge({
            focusKey: s,
            focusOffset: o,
            isBackward: !0,
        });
    });
