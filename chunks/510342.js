"use strict";
r.d(t, { A: () => l });
var n = r(842922),
    o = r(728272),
    a = r(720016),
    i = Object.prototype.hasOwnProperty;
let l = function (e) {
    if (!(0, n.A)(e)) return (0, a.A)(e);
    var t = (0, o.A)(e),
        r = [];
    for (var l in e) ("constructor" == l && (t || !i.call(e, l))) || r.push(l);
    return r;
};
