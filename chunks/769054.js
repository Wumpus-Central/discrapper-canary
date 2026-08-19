"use strict";
n.d(t, { h: () => s });
var i = n(785401),
    r = n(102609);
let a = { id: -1, label: "Not Eligible", shortLabel: "Not Eligible", type: i.FZ.OVERRIDE };
function s(e) {
    return e.system !== r.l5.APEX ? e.variants : [a].concat(e.variants);
}
