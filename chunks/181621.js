"use strict";
r(945730),
    (t.exports = function (t, e) {
        var r = t.getSelection(),
            n = t.getCurrentContent(),
            i = r.getStartKey(),
            o = r.getStartOffset(),
            a = i,
            s = 0;
        if (e > o) {
            var u = n.getKeyBefore(i);
            null == u ? (a = i) : ((a = u), (s = n.getBlockForKey(u).getText().length));
        } else s = o - e;
        return r.merge({ focusKey: a, focusOffset: s, isBackward: !0 });
    });
