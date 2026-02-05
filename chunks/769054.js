"use strict";
n.d(t, { h: () => s });
var r = n(949355),
    i = n(102609);
let a = { id: -1, label: "Not Eligible", shortLabel: "Not Eligible", type: r.FZ.OVERRIDE };
function s(e) {
    return e.system !== i.l5.APEX ? e.variants : [a].concat(e.variants);
}
