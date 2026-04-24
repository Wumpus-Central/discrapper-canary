"use strict";
r(945730),
    (t.exports = function (t, e) {
        var r,
            n = t.getSelection(),
            i = n.getStartKey(),
            o = n.getStartOffset(),
            a = t.getCurrentContent(),
            s = i;
        return (
            e > a.getBlockForKey(i).getText().length - o ? ((s = a.getKeyAfter(i)), (r = 0)) : (r = o + e),
            n.merge({ focusKey: s, focusOffset: r })
        );
    });
