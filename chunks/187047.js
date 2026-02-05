"use strict";
var n,
    i = r(198668),
    o = r(116740),
    a = r(670200),
    s = o.OrderedMap;
t.exports = {
    getDirectionMap: function (t, e) {
        n ? n.reset() : (n = new i());
        var r = t.getBlockMap(),
            u = r.valueSeq().map(function (t) {
                return a(n).getDirection(t.getText());
            }),
            c = s(r.keySeq().zip(u));
        return null != e && o.is(e, c) ? e : c;
    },
};
