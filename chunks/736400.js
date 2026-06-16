"use strict";
n.d(t, { Ay: () => r, X3: () => s, n2: () => a });
var i = n(136722);
function r(e) {
    for (let { permissionOverwrites_: t } of e)
        if (null != t)
            for (let e in t) {
                let n = t[e];
                (n.allow = i.iu(n.allow)), (n.deny = i.iu(n.deny));
            }
}
function s(e) {
    for (let [t, n] of e) r(n);
}
function a(e) {
    let { permissionOverwrites_: t } = e;
    if (null != t)
        for (let e in t) {
            let n = t[e];
            (n.allow = i.iu(n.allow)), (n.deny = i.iu(n.deny));
        }
    return e;
}
