"use strict";
r.d(t, { A: () => o });
var a = r(684401);
function n(e, t) {
    for (var r = 0; r < t.length; r++) {
        var n = t[r];
        (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, (0, a.A)(n.key), n);
    }
}
function o(e, t, r) {
    return t && n(e.prototype, t), r && n(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
