n(945730),
    (e.exports = function (e, t) {
        var n,
            r = e.getSelection(),
            i = r.getStartKey(),
            a = r.getStartOffset(),
            s = e.getCurrentContent(),
            o = i;
        return (
            t > s.getBlockForKey(i).getText().length - a ? ((o = s.getKeyAfter(i)), (n = 0)) : (n = a + t),
            r.merge({
                focusKey: o,
                focusOffset: n,
            })
        );
    });
