"use strict";
n.d(t, { A: () => r });
var i = n(573648);
function r(e) {
    if (null == e || !e.startsWith("h:")) return null;
    let [t] = e.slice(2).split(",");
    if (null == t || 0 === t.length) return null;
    let n = i.A.get(t);
    return null != n && n.enabled ? n : null;
}
