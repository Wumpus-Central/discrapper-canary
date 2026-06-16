"use strict";
var n = r(367932),
    i = r(1140).strlen;
t.exports = function (t, e) {
    var r = [];
    return (
        t.findEntityRanges(
            function (t) {
                return !!t.getEntity();
            },
            function (o, a) {
                var s = t.getText(),
                    u = t.getEntityAt(o);
                r.push({ offset: i(s.slice(0, o)), length: i(s.slice(o, a)), key: Number(e[n.stringify(u)]) });
            },
        ),
        r
    );
};
