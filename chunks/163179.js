"use strict";
n.d(t, { GV: () => s, d3: () => o, er: () => a, rI: () => i });
var r = n(257120);
let i = /(?:\s*#?((?:"(\\\\|\\"|[^\\"])*")|(?:[^\s]+)))/i,
    s = /(?:\s*([^\s]+))/;
function a(e) {
    return RegExp(`(?:\\s*(-?(?:${e.map((e) => r.A.escape(e)).join("|")})))`, "i");
}
function o(e, t, n) {
    let r = n.getMatch(1),
        i = r.startsWith("-"),
        s = t[i ? r.slice(1) : r];
    return null != s && "" !== s && (n.setData(e, i ? `-${s}` : s), !0);
}
