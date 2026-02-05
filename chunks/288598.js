"use strict";
var n = r(668413),
    i = r(869639),
    o = r(126331),
    a = r(418227);
t.exports = function (t) {
    var e = a(
        t,
        function (t) {
            var e = t.getSelection(),
                r = e.getStartOffset(),
                i = e.getStartKey(),
                a = t.getCurrentContent().getBlockForKey(i).getText().slice(r);
            return o(t, n.getForward(a).length || 1);
        },
        "forward",
    );
    return e === t.getCurrentContent() ? t : i.push(t, e, "remove-range");
};
