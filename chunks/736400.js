"use strict";
n.d(t, { Ay: () => i, X3: () => s, n2: () => a });
var r = n(136722);
function i(e) {
    for (let { permissionOverwrites_: t } of e)
        if (null != t)
            for (let e in t) {
                let n = t[e];
                (n.allow = r.iu(n.allow)), (n.deny = r.iu(n.deny));
            }
}
function s(e) {
    for (let [t, n] of e) i(n);
}
function a(e) {
    let { permissionOverwrites_: t } = e;
    if (null != t)
        for (let e in t) {
            let n = t[e];
            (n.allow = r.iu(n.allow)), (n.deny = r.iu(n.deny));
        }
    return e;
}
