"use strict";
n.d(t, { nV: () => r, uk: () => i });
let r = new WeakMap();
function i(e, t) {
    var n, i;
    let { id: s } = null != (n = r.get(e)) ? n : {};
    if (!s) throw Error("Unknown list");
    return `${s}-${"string" == typeof (i = t) ? i.replace(/\s*/g, "") : "" + i}`;
}
