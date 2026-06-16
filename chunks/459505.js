"use strict";
var n = e(664886),
    o = e(309270),
    s = e(407057),
    i = TypeError;
t.exports = function (t, r) {
    var e, u;
    if (
        ("string" === r && o((e = t.toString)) && !s((u = n(e, t)))) ||
        (o((e = t.valueOf)) && !s((u = n(e, t)))) ||
        ("string" !== r && o((e = t.toString)) && !s((u = n(e, t))))
    )
        return u;
    throw new i("Can't convert object to primitive value");
};
