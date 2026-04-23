"use strict";
n.d(t, { A: () => a });
var r = n(964246);
function a(e, t) {
    if (null == e) return {};
    var n = {};
    for (var a in e)
        if ({}.hasOwnProperty.call(e, a)) {
            if (-1 !== r(t).call(t, a)) continue;
            n[a] = e[a];
        }
    return n;
}
