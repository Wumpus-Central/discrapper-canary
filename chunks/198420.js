"use strict";
n.d(t, { c: () => a, h: () => s });
var r = n(858662),
    i = n(585790);
function s(e, t) {
    var n = new i.x(r.l[e]);
    return n.loadDataTransfer(t), n;
}
function a(e) {
    if (!e) return null;
    var t = Array.prototype.slice.call(e.types || []);
    return (
        Object.keys(r.l).filter(function (e) {
            return r.l[e].matchesTypes.some(function (e) {
                return t.indexOf(e) > -1;
            });
        })[0] || null
    );
}
