"use strict";
var n = r(869639),
    i = r(1140),
    o = r(126331),
    a = r(418227);
t.exports = function (t) {
    var e = a(
        t,
        function (t) {
            var e = t.getSelection(),
                r = t.getCurrentContent(),
                n = e.getAnchorKey(),
                a = e.getAnchorOffset(),
                s = r.getBlockForKey(n).getText()[a];
            return o(t, s ? i.getUTF16Length(s, 0) : 1);
        },
        "forward",
    );
    if (e === t.getCurrentContent()) return t;
    var r = t.getSelection();
    return n.push(t, e.set("selectionBefore", r), r.isCollapsed() ? "delete-character" : "remove-range");
};
