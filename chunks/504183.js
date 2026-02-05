"use strict";
n.d(t, { A: () => a });
var r = n(964246);
function a(e) {
    try {
        var t;
        return -1 !== r((t = Function.toString.call(e))).call(t, "[native code]");
    } catch (t) {
        return "function" == typeof e;
    }
}
